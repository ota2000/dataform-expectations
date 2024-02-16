

/**
 * Expects the proportion of unique values in a column to be between specified minimum and maximum values.
 * @param {Object} params - The parameters for the expectation.
 * @param {Object} params.source - The source object containing the table information.
 * @param {string} params.column - The name of the column to be checked.
 * @param {number|null} [params.min_value=null] - The minimum value for the proportion of unique values.
 * @param {number|null} [params.max_value=null] - The maximum value for the proportion of unique values.
 * @param {boolean} [params.strict_min=false] - Whether the minimum value is exclusive.
 * @param {boolean} [params.strict_max=false] - Whether the maximum value is exclusive.
 * @returns {Object} - The Dataform assertion for the expectation.
 */

module.exports = (params) => {
  const {
    source = {},
    column,
    min_value = null,
    max_value = null,
    strict_min = false,
    strict_max = false,
  } = params;

  const min_operator = strict_min ? '<' : '<=';
  const max_operator = strict_max ? '>' : '>=';

  let where_condition = "";
  if (min_value !== null && max_value === null) {
    where_condition = `proportion_of_unique_values ${min_operator} ${min_value}}`;
  } else if (min_value === null && max_value !== null) {
    where_condition = `proportion_of_unique_values ${max_operator} ${max_value}`;
  } else if (min_value !== null && max_value !== null) {
    where_condition = `proportion_of_unique_values ${min_operator} ${min_value} OR proportion_of_unique_values ${max_operator} ${max_value}`;
  } else {
    throw new Error('Invalid input: both min_value and max_value are null or input is not recognized.');
  }

  // Construct the SQL query
  const sqlQuery = ctx => `
    SELECT
      *
    FROM (
      SELECT
        COUNT(DISTINCT ${column}) / COUNT(*) AS proportion_of_unique_values
      FROM
        ${ctx.ref(source)} )
    WHERE
      ${where_condition}
  `;

  // Define and return the Dataform assertion
  return assert(`expect_column_proportion_of_unique_values_to_be_between`).query(sqlQuery);
};
