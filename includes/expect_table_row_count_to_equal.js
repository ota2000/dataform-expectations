/*
Expect the number of rows to equal a value.

value (int): The expected number of rows.
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
