/**
 * Checks if the maximum value of a column falls within a specified range.
 * @param {object} options - The options for the expectation.
 * @param {object} options.source - The source of the column.
 * @param {string} options.source.name - The name of the table.
 * @param {string} options.source.schema - The schema of the table.
 * @param {string} options.column - The name of the column.
 * @param {number} options.min_value - The minimum value allowed.
 * @param {number} options.max_value - The maximum value allowed.
 */

// Example usage
const { expect_column_max_to_be_between } = require("dataform-expectations");

expect_column_max_to_be_between({
  source: {
    name: "table_a",
    schema: "dataform_expectations"
  },
  column: "value",
  min_value: 10,
  max_value: 100
});
