/**
 * Compare row counts between two tables.
 *
 * @param {Object} params - The parameters object.
 * @param {string} params.source - The source table name.
 * @param {string} params.target - The target table name.
 * @returns {Object} The Dataform assertion to check if row counts are equal.
 */

module.exports = (params) => {
  const {
    source = {},
    target = {},
  } = params;

  // Construct the SQL query to compare row counts between two tables
  const sqlQuery = ctx => `
    SELECT
      source_count,
      target_count
    FROM (
      SELECT
        (SELECT COUNT(*) FROM ${ctx.ref(source)}) AS source_count,
        (SELECT COUNT(*) FROM ${ctx.ref(target)}) AS target_count )
    WHERE
      source_count <> target_count
  `;

  // Define and return the Dataform assertion to check if row counts are equal
  return assert(`expect_table_row_count_to_equal_other_table`).query(sqlQuery);
};
