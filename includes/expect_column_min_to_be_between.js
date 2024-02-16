/**
 * Validates if the minimum value of a column falls within a specified range.
 * @param {Object} params - The parameters for the validation.
 * @param {Object} params.source - The source object.
 * @param {string} params.column - The column to validate.
 * @param {number|null} params.min_value - The minimum value.
 * @param {number|null} params.max_value - The maximum value.
 * @param {boolean} [params.strict_min=false] - Whether the minimum value should be strictly greater than the specified value.
 * @param {boolean} [params.strict_max=false] - Whether the maximum value should be strictly less than the specified value.
 * @returns {Object} - The Dataform assertion.
 * @throws {Error} - If the input is invalid or not recognized.
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

  const min_operator = strict_min ? '>' : '>=';
  const max_operator = strict_max ? '<' : '<=';

  let where_condition = "";
  if (min_value !== null && max_value === null) {
    where_condition = `t ${min_operator} ${min_value}}`;
  } else if (min_value === null && max_value !== null) {
    where_condition = `t ${max_operator} ${max_value}`;
  } else if (min_value !== null && max_value !== null) {
    where_condition = `t ${min_operator} ${min_value} OR t ${max_operator} ${max_value}`;
  } else {
    throw new Error('Invalid input: both min_value and max_value are null or input is not recognized.');
  }

  // Construct the SQL query
  const sqlQuery = ctx => `
    SELECT
      *
    FROM (
      SELECT
        MIN(${column}) AS t
      FROM
        ${ctx.ref(source)} )
    WHERE
      ${where_condition}
  `;

  // Define and return the Dataform assertion
  return assert(`expect_column_min_to_be_between`).query(sqlQuery);
};
