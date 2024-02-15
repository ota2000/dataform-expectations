/*
Expect the number of rows to equal the number in another table.

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