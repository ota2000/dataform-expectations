

/**
 * Checks if the compound columns in a table are unique.
 *
 * @param {Object} params - The parameters for the function.
 * @param {Object} params.source - An object that identifies the table.
 * @param {string[]} params.column_list - An array of column names representing the compound columns.
 * @returns {Assertion} - The assertion to check if the compound columns are unique.
 */

module.exports = (params) => {
  const {
    source = {}, // Assuming 'source' is an object that identifies the table
    column_list,
  } = params;

  // Construct the SQL query to check if the compound columns are unique
  const sqlQuery = ctx => `
    SELECT
      ${column_list.join(", ")}
      COUNT(*) as num_records
    FROM
      ${ctx.ref(source)}
    GROUP BY
      ${column_list.join(", ")}
    HAVING
      COUNT(*) > 1
  `;
  // Define and return the assertion to check if the compound columns are unique
  return assert(`expect_compound_columns_to_be_unique`).query(sqlQuery);
};
