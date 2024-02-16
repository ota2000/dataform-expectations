/**
 * This function exports an expectation for checking if the column count of a table equals the expected value.
 *
 * @param {Object} params - The parameters for the expectation.
 * @param {Object} params.source - The source object containing information about the table.
 * @param {string} params.source.schema - The schema of the table.
 * @param {string} params.source.name - The name of the table.
 * @param {number} params.value - The expected column count.
 * @returns {Object} - The assertion object for the expectation.
 */

module.exports = (params) => {
  const {
    source = {},
    value,
  } = params;

  // This example uses a generic approach to retrieve column count,
  // the actual implementation may vary based on your SQL dialect/database
  const sqlQuery = ctx => `
    SELECT
      column_count
    FROM (
      SELECT
        COUNT(*) AS column_count
      FROM
        ${source.schema}.INFORMATION_SCHEMA.COLUMNS
      WHERE
        TABLE_NAME = '${source.name}' AND TABLE_SCHEMA = '${source.schema}' )
    WHERE
        column_count <> ${value}
  `;

  // Define and return the assertion to check if column count equals the expected value
  return assert(`expect_table_column_count_to_equal`).query(sqlQuery);
};
