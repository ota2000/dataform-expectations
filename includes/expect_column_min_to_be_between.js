/*
Expect the column minimum to be between a minimum value and a maximum value.

column (str): The column name
min_value (comparable type or None): The minimal column minimum allowed.
max_value (comparable type or None): The maximal column minimum allowed.
strict_min (boolean): If True, the minimal column minimum must be strictly larger than min_value, default=False
strict_max (boolean): If True, the maximal column minimum must be strictly smaller than max_value, default=False
*/
module.exports = (params) => {
  const {
    source = {},
    column,
    min_value = null,
    max_value = null,
    strict_min = false,
    strict_max = false,
  } = params;

  const min_operator = strict_min ? '>' : '>=';
  const max_operator = strict_max ? '<' : '<=';

  let where_condition = "";
  if (min_value !== null && max_value === null) {
    where_condition = `t ${min_operator} ${min_value}}`;
  } else if (min_value === null && max_value !== null) {
    where_condition = `t ${max_operator} ${max_value}`;
  } else if (min_value !== null && max_value !== null) {
    where_condition = `t ${min_operator} ${min_value} OR t ${max_operator} ${max_value}`;
  } else {
    throw new Error('Invalid input: both min_value and max_value are null or input is not recognized.');
  }

  // Construct the SQL query
  const sqlQuery = ctx => `
    SELECT
      *
    FROM (
      SELECT
        MIN(${column}) AS t
      FROM
        ${ctx.ref(source)} )
    WHERE
      ${where_condition}
  `;

  // Define and return the Dataform assertion
  return assert(`expect_column_min_to_be_between`).query(sqlQuery);
};
