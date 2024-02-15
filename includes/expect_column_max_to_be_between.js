/*
Expect the column maximum to be between a minimum value and a maximum value.

column (str): The column name
min_value (comparable type or None): The minimum value of the acceptable range for the column maximum.
max_value (comparable type or None): The maximum value of the acceptable range for the column maximum.
strict_min (boolean): If True, the lower bound of the column maximum acceptable range must be strictly larger than min_value, default=False
strict_max (boolean): If True, the upper bound of the column maximum acceptable range must be strictly smaller than max_value, default=False
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

  const min_operator = strict_min ? '<' : '<=';
  const max_operator = strict_max ? '>' : '>=';

  let where_condition = "";
  if (min_value !== null && max_value === null) {
    // min_valueがnullでなく、max_valueがnullの場合の処理
    where_condition = `t ${min_operator} ${min_value}}`;
  } else if (min_value === null && max_value !== null) {
    // min_valueがnullで、max_valueがnullでない場合の処理
    where_condition = `t ${max_operator} ${max_value}`;
  } else if (min_value !== null && max_value !== null) {
    where_condition = `t ${min_operator} ${min_value} OR t ${max_operator} ${max_value}`;
  } else {
    // Otherwise, throw an exception
    throw new Error('Invalid input: both min_value and max_value are null or input is not recognized.');
  }

  // Construct the SQL query
  const sqlQuery = ctx => `
    SELECT
      *
    FROM (
      SELECT
        MAX(${column}) AS t
      FROM
        ${ctx.ref(source)} )
    WHERE
      ${where_condition}
  `;

  // Define and return the Dataform assertion
  return assert(`expect_column_max_to_be_between`).query(sqlQuery);
};
