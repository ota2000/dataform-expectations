/**
 * Checks if the minimum value of a column falls within a specified range.
 *
 * @param {Object} options - The options for the expectation.
 * @param {Object} options.source - The source table information.
 * @param {string} options.source.name - The name of the source table.
 * @param {string} options.source.schema - The schema of the source table.
 * @param {string} options.column - The name of the column to check.
 * @param {number} options.min_value - The minimum value allowed for the column.
 * @param {number} options.max_value - The maximum value allowed for the column.
 */

// Example usage
const { expect_column_min_to_be_between } = require("dataform-expectations");

expect_column_min_to_be_between({
  source: {
    name: "table_a",
    schema: "dataform_expectations"
  },
  column: "value",
  min_value: 10,
  max_value: 100
});
