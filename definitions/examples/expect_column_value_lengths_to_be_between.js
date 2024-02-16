/**
 * Expects the lengths of values in a specified column to be between a minimum and maximum value.
 *
 * @param {Object} options - The options for the expectation.
 * @param {Object} options.source - The source table information.
 * @param {string} options.source.name - The name of the source table.
 * @param {string} options.source.schema - The schema of the source table.
 * @param {string} options.column - The name of the column to check.
 * @param {number} options.min - The minimum value for the column length.
 * @param {number} options.max - The maximum value for the column length.
 */

const { expect_column_value_lengths_to_be_between } = require("dataform-expectations");

expect_column_value_lengths_to_be_between({
  source: {
    name: "table_a",
    schema: "dataform_expectations"
  },
  column: "value",
  min: 1,
  max: 100
});
