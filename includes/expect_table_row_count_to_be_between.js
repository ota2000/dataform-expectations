/**
 * This module exports a function that checks if the row count of a table is within the specified range.
 *
 * @param {Object} params - The parameters for the expectation.
 * @param {Object} params.source - The source object containing the table information.
 * @param {number|null} params.min_value - The minimum value for the row count.
 * @param {number|null} params.max_value - The maximum value for the row count.
 * @returns {Object} - The Dataform assertion to check if the row count is within the expected range.
 * @throws {Error} - If both min_value and max_value are null.
 */

module.exports = (params) => {
  const {
    source = {},
    min_value = null,
    max_value = null,
  } = params;

  if (min_value === null && max_value === null) {
    throw new Error('Invalid input: Both min_value and max_value cannot be null.');
  }

  let where_condition = "";
  if (min_value !== null && max_value === null) {
    where_condition = `row_count <= ${min_value}`;
  } else if (min_value === null && max_value !== null) {
    where_condition = `row_count >= ${max_value}`;
  } else if (min_value !== null && max_value !== null) {
    where_condition = `row_count <= ${min_value} OR row_count >= ${max_value}`;
  }

  // Construct the SQL query to count the rows and check if it's within the specified range
  const sqlQuery = ctx => `
    SELECT
      *
    FROM (
      SELECT
        COUNT(*) AS row_count
      FROM
        ${ctx.ref(source)} )
    WHERE
      ${where_condition}
  `;

  // Define and return the Dataform assertion to check if the row count is within the expected range
  return assert(`expect_table_row_count_to_be_between`).query(sqlQuery);
};
