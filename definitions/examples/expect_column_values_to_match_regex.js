/**
 * Checks if the values in a specified column of a table match a given regular expression pattern.
 *
 * @param {Object} options - The options for the expectation.
 * @param {Object} options.source - The source table information.
 * @param {string} options.source.name - The name of the source table.
 * @param {string} options.source.schema - The schema of the source table.
 * @param {string} options.column - The name of the column to check.
 * @param {string} options.regex - The regular expression pattern to match against the column values.
 */

const { expect_column_values_to_match_regex } = require("dataform-expectations");

expect_column_values_to_match_regex({
  source: {
    name: "table_a",
    schema: "dataform_expectations"
  },
  column: "value",
  regex: "^[a-z]+$"
});
