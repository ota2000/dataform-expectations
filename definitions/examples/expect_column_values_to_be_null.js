/**
 * Expects the values in a specific column to be null.
 *
 * @param {Object} options - The options for the expectation.
 * @param {Object} options.source - The source table information.
 * @param {string} options.source.name - The name of the source table.
 * @param {string} options.source.schema - The schema of the source table.
 * @param {string} options.column - The name of the column to be checked.
 */

const { expect_column_values_to_be_null } = require("dataform-expectations");

expect_column_values_to_be_null({
  source: {
    name: "table_a",
    schema: "dataform_expectations"
  },
  column: "value"
});
