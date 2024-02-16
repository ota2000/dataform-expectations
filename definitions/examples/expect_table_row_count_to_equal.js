/**
 * Check if the row count of a table matches the expected value.
 * @param {Object} options - The options for the expectation.
 * @param {Object} options.source - The source table to check.
 * @param {string} options.source.name - The name of the table.
 * @param {string} options.source.schema - The schema of the table.
 * @param {number} options.value - The expected row count.
 */

// Example usage
const { expect_table_row_count_to_equal } = require("dataform-expectations");

expect_table_row_count_to_equal({
  source: {
    name: "table_a",
    schema: "dataform_expectations"
  },
  value: 6
})
