

/**
 * Expects the values in a specified column to be of a specific type.
 *
 * @param {Object} params - The parameters for the expectation.
 * @param {Object} params.source - The source object that identifies the table.
 * @param {string} params.column - The name of the column to check.
 * @param {string} params.type - The expected data type of the column.
 * @returns {Assertion} - The assertion to check if the column values are of the specified type.
 */

module.exports = (params) => {
  const {
    source = {}, // Assuming 'source' is an object that identifies the table
    column,
    type,
  } = params;

  // Construct the SQL query to check for null values in the specified column
  const sqlQuery = ctx => `
    SELECT
      table_name, column_name, data_type
    FROM
      ${source.schema}.INFORMATION_SCHEMA.COLUMNS
    WHERE
      table_name = '${source.name}'
      AND column_name = '${column}'
      AND data_type <> '${type}'
  `;

  // Define and return the assertion to check if there are no null values in the column
  return assert(`expect_column_values_to_be_of_type`).query(sqlQuery)
};
