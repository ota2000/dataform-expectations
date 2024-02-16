/**
 * This module exports a function that generates a SQL query to assert that the maximum value of a column falls within a specified range.
 *
 * @param {Object} params - The parameters for the assertion.
 * @param {Object} params.source - The source object.
 * @param {string} params.column - The column name.
 * @param {number|null} params.min_value - The minimum value.
 * @param {number|null} params.max_value - The maximum value.
 * @param {boolean} params.strict_min - Whether the minimum value is exclusive.
 * @param {boolean} params.strict_max - Whether the maximum value is exclusive.
 * @returns {Object} - The Dataform assertion.
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
    // min_valueがnullでなく、max_valueがnullの場合の処理
    where_condition = `t ${min_operator} ${min_value}}`;
  } else if (min_value === null && max_value !== null) {
    // min_valueがnullで、max_valueがnullでない場合の処理
    where_condition = `t ${max_operator} ${max_value}`;
  } else if (min_value !== null && max_value !== null) {
    where_condition = `t ${min_operator} ${min_value} OR t ${max_operator} ${max_value}`;
  } else {
    // Otherwise, throw an exception
    throw new Error('Invalid input: both min_value and max_value are null or input is not recognized.');
  }

  // Construct the SQL query
  const sqlQuery = ctx => `
    SELECT
      *
    FROM (
      SELECT
        MAX(${column}) AS t
      FROM
        ${ctx.ref(source)} )
    WHERE
      ${where_condition}
  `;

  // Define and return the Dataform assertion
  return assert(`expect_column_max_to_be_between`).query(sqlQuery);
};
