

/**
 * Checks if a specified column exists in a table.
 *
 * @param {Object} params - The parameters for the function.
 * @param {Object} params.source - The source object that identifies the table.
 * @param {string} params.column - The name of the column to check.
 * @returns {Assertion} - The assertion to check if the column exists.
 */

module.exports = (params) => {
  const {
    source = {}, // Assuming 'source' is an object that identifies the table
    column,
  } = params;

  // Construct the SQL query to check if the specified column exists in the table
  const sqlQuery = ctx => `
  SELECT
    column_name
  FROM
    ${source.schema}.INFORMATION_SCHEMA.COLUMNS
  WHERE
    table_name = "${source.name}"
    AND NOT EXISTS (
      SELECT
        *
      FROM
        ${source.schema}.INFORMATION_SCHEMA.COLUMNS
      WHERE
        column_name = "${column}"
    )
  `;

  // Define and return the assertion to check if the column exists
  return assert(`expect_column_to_exist`).query(sqlQuery)
};
