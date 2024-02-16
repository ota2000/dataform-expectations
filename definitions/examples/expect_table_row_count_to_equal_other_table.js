/**
 * Check if the row count of a source table matches the row count of a target table.
 * @param {Object} source - The source table.
 * @param {string} source.name - The name of the source table.
 * @param {string} source.schema - The schema of the source table.
 * @param {Object} target - The target table.
 * @param {string} target.name - The name of the target table.
 * @param {string} target.schema - The schema of the target table.
 */

// Example usage
const { expect_table_row_count_to_equal_other_table } = require("dataform-expectations");

expect_table_row_count_to_equal_other_table({
  source: {
    name: "table_a",
    schema: "dataform_expectations"
  },
  target: {
    name: "table_a",
    schema: "dataform_expectations"
  }
})
