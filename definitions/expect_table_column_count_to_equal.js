/**
 * Check if the number of columns in a table matches the expected count.
 * @param {Object} options - The options for the expectation.
 * @param {Object} options.source - The source table to check.
 * @param {string} options.source.name - The name of the table.
 * @param {string} options.source.schema - The schema of the table.
 * @param {number} options.value - The expected number of columns.
 */

// Example usage
const { expect_table_column_count_to_equal } = require("dataform-expectations");

expect_table_column_count_to_equal({
  source: {
    name: "table_a",
    schema: "dataform_expectations"
  },
  value: 6
})
