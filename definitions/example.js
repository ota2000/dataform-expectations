const expect_column_max_to_be_between = require("/includes/expect_column_max_to_be_between");
const expect_column_min_to_be_between = require("/includes/expect_column_min_to_be_between");

// 以下のパラメータでアサーションを呼び出します
expect_column_max_to_be_between({
  source: {
    schema: "xxx",
    name: "expect_column_max_to_be_between"
  },
  column: "value",
  min_value: 10, // 最小値
  max_value: 100, // 最大値
  strict_min: false, // 厳密な最小値の比較をしない
  strict_max: false, // 厳密な最大値の比較をしない
});

expect_column_min_to_be_between({
  source: {
    schema: "xxx",
    name: "expect_column_max_to_be_between"
  },
  column: "value",
  min_value: 10, // 最小値
  max_value: 100, // 最大値
  strict_min: false, // 厳密な最小値の比較をしない
  strict_max: false, // 厳密な最大値の比較をしない
});
