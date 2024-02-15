const { expect_column_max_to_be_between, expect_column_min_to_be_between, expect_table_row_count_to_equal, expect_table_row_count_to_equal_other_table } = require("../index");

expect_column_max_to_be_between({
  source: {
    name: "a1000",
    schema: "xxx"
  },
  column: "value",
  min_value: 10,
  max_value: 100
});

expect_column_min_to_be_between({
  source: {
    name: "a1000",
    schema: "xxx"
  },
  column: "value",
  min_value: 10,
  max_value: 100
});

expect_table_row_count_to_equal({
  source: {
    name: "a1000",
    schema: "xxx"
  },
  value: 5
})

expect_table_row_count_to_equal_other_table({
  source: {
    name: "a1000",
    schema: "xxx"
  },
  target: {
    name: "a1000",
    schema: "xxx"
  }
})

expect_table_row_count_to_be_between({
  source: {
    name: "a1000",
    schema: "xxx"
  },
  min_value: 1
})