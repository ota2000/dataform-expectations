/**
 * Expects the lengths of values in a specified column to be equal to a given value.
 *
 * @param {Object} options - The options for the expectation.
 * @param {Object} options.source - The source table information.
 * @param {string} options.source.name - The name of the source table.
 * @param {string} options.source.schema - The schema of the source table.
 * @param {string} options.column - The name of the column to check.
 * @param {number} options.value - The expected length of the column values.
 */

const { expect_column_value_lengths_to_equal } = require("dataform-expectations");

expect_column_value_lengths_to_equal({
  source: {
    name: "table_a",
    schema: "dataform_expectations"
  },
  column: "value",
  value: 10
});
