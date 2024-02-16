/**
 * A function that asserts if the row count of a table equals the expected value.
 *
 * @param {Object} params - The parameters for the assertion.
 * @param {Object} params.source - The source object containing the table information.
 * @param {string} params.value - The expected row count value.
 * @returns {Object} - The Dataform assertion object.
 */

module.exports = (params) => {
  const {
    source = {},
    value,
  } = params;

  // Construct the SQL query to count the rows in the table
  const sqlQuery = ctx => `
    SELECT
      *
    FROM (
      SELECT
        COUNT(*) AS row_count
      FROM
        ${ctx.ref(source)} )
    WHERE
      row_count <> ${value}
  `;

  // Define and return the Dataform assertion to check if row count equals the expected value
  return assert(`expect_table_row_count_to_equal`).query(sqlQuery);
};
