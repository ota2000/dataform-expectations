/**
 * Checks if a specified column exists in a given source.
 *
 * @param {object} options - The options for the expectation.
 * @param {object} options.source - The source object containing the name and schema of the table.
 * @param {string} options.source.name - The name of the table.
 * @param {string} options.source.schema - The schema of the table.
 * @param {string} options.column - The name of the column to check for existence.
 */
const { expect_column_to_exist } = require("dataform-expectations");

expect_column_to_exist({
  source: {
    name: "table_a",
    schema: "dataform_expectations"
  },
  column: "column_a"
});
