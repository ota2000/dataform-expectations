module.exports = (params) => {
  const {
    source,
    column,
    min_value = null,
    max_value = null,
    strict_min = false,
    strict_max = false,
    parse_strings_as_datetimes = false,
    output_strftime_format = null,
    result_format = "BOOLEAN_ONLY",
    include_config = false,
    catch_exceptions = null,
    meta = {}
  } = params;

  let columnToCheck = column;

  // Handle datetime parsing if necessary
  if (parse_strings_as_datetimes) {
    columnToCheck = `CAST(${column} AS TIMESTAMP)`;
    if (min_value !== null) min_value = `TIMESTAMP '${min_value}'`;
    if (max_value !== null) max_value = `TIMESTAMP '${max_value}'`;
  }

  // Construct the SQL query
  const sqlQuery = ctx => `
    SELECT
      *
    FROM (
      SELECT
        MAX(${columnToCheck}) AS columnToCheck
      FROM
        ${ctx.ref(source)})
    WHERE
      1 = 1
      ${min_value !== null && max_value !== null ? `AND (columnToCheck ${strict_min ? "<" : "<="} ${min_value} OR columnToCheck ${strict_max ? ">" : ">="} ${max_value})` : ""}
      ${min_value !== null && max_value === null ? `AND columnToCheck ${strict_min ? "<" : "<="} ${min_value}` : ""}
      ${max_value !== null && min_value === null ? `AND columnToCheck ${strict_max ? ">" : ">="} ${max_value}` : ""}
  `;

  // Define and return the Dataform assertion
  return assert("expect_column_max_to_be_between").query(sqlQuery);
};
