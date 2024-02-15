const functions = [
  "expect_column_max_to_be_between",
  "expect_column_min_to_be_between",
  "expect_table_row_count_to_equal",
  "expect_table_row_count_to_equal_other_table",
  "expect_table_row_count_to_be_between",
  "expect_table_column_count_to_equal",
];

// オブジェクトをイテレートして、各検証関数を動的にインポートし、エクスポートする
functions.forEach(functionName => {
  const validationFunction = require(`./includes/${functionName}.js`);
  exports[functionName] = (params) => {
    validationFunction(params);
  };
});