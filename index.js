const functions = [
  "expect_column_max_to_be_between",
  "expect_column_min_to_be_between",
  "expect_column_proportion_of_unique_values_to_be_between",
  "expect_column_to_exist",
  "expect_column_value_lengths_to_be_between",
  "expect_column_value_lengths_to_equal",
  "expect_column_values_to_be_null",
  "expect_column_values_to_be_of_type",
  "expect_column_values_to_match_regex",
  "expect_column_values_to_not_be_null",
  "expect_column_values_to_not_match_regex",
  "expect_compound_columns_to_be_unique",
  "expect_table_column_count_to_equal",
  "expect_table_row_count_to_be_between",
  "expect_table_row_count_to_equal",
  "expect_table_row_count_to_equal_other_table"
];

/**
 * Dynamically imports each expect function and exports it as a named function.
 */
functions.forEach(functionName => {
  const expectFunction = require(`./includes/${functionName}.js`);
  exports[functionName] = (params) => {
    expectFunction(params);
  };
});
