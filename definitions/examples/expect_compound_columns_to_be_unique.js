/**
 * Checks if the specified compound columns in a source table are unique.
 *
 * @param {Object} options - The options for the expectation.
 * @param {Object} options.source - The source table to check.
 * @param {string} options.source.name - The name of the source table.
 * @param {string} options.source.schema - The schema of the source table.
 * @param {string[]} options.columns - The compound columns to check for uniqueness.
 */

const { expect_compound_columns_to_be_unique } = require("dataform-expectations");

expect_compound_columns_to_be_unique({
  source: {
    name: "table_a",
    schema: "dataform_expectations"
  },
  columns: ["column_a", "column_b"]
})
