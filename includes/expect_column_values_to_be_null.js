
/**
 * Checks if the specified column in the table contains only null values.
 *
 * @param {Object} params - The parameters for the expectation.
 * @param {Object} params.source - The object that identifies the table.
 * @param {string} params.column - The name of the column to check.
 * @returns {Assertion} - The assertion to check if there are no null values in the column.
 */

module.exports = (params) => {
  const {
    source = {}, // Assuming 'source' is an object that identifies the table
    column,
  } = params;

  // Construct the SQL query to check for null values in the specified column
  const sqlQuery = ctx => `
    SELECT
      *
    FROM
      ${ctx.ref(source)}
    WHERE
      ${column} IS NOT NULL
  `;

  // Define and return the assertion to check if there are no null values in the column
  return assert(`expect_column_values_to_not_be_null`).query(sqlQuery)
};
