/**
 * Check if the row count of a table falls within a specified range.
 *
 * @param {Object} options - The options for the expectation.
 * @param {Object} options.source - The source table to check.
 * @param {string} options.source.name - The name of the source table.
 * @param {string} options.source.schema - The schema of the source table.
 * @param {number} options.min_value - The minimum expected row count.
 * @param {number} [options.max_value] - The maximum expected row count.
 */

// Example usage
const { expect_table_row_count_to_be_between } = require("dataform-expectations");

expect_table_row_count_to_be_between({
  source: {
    name: "table_a",
    schema: "dataform_expectations"
  },
  min_value: 1
})
