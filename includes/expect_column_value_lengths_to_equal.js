
/**
 * Expects the values in a specified column of a table to have a specific length.
 *
 * @param {Object} params - The parameters for the expectation.
 * @param {Object} params.source - The source table.
 * @param {string} params.column - The column to check.
 * @param {number} params.value - The expected length of the column values.
 * @returns {Object} - The assertion object.
 */

module.exports = (params) => {
  const {
    source = {}, // Assuming 'source' identifies the table
    column,
    value,
  } = params;

  // Construct the SQL query to check if the column values have the expected length
  const sqlQuery = ctx => `
    SELECT
      *
    FROM
      ${ctx.ref(source)}
    WHERE
      LENGTH(${column}) <> ${value}
  `;

  // Define and return the assertion to check if the column values have the expected length
  return assert(`expect_column_value_lengths_to_equal`).query(sqlQuery);
};
