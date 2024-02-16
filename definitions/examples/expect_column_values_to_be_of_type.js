/**
 * Asserts that the values in a specified column of a source table are of a specified type.
 *
 * @param {object} config - The configuration object.
 * @param {object} config.source - The source table information.
 * @param {string} config.source.name - The name of the source table.
 * @param {string} config.source.schema - The schema of the source table.
 * @param {string} config.column - The name of the column to be checked.
 * @param {string} config.type - The expected type of the column values.
 */

const { expect_column_values_to_be_of_type } = require("dataform-expectations");

expect_column_values_to_be_of_type({
  source: {
    name: "table_a",
    schema: "dataform_expectations"
  },
  column: "value",
  type: "string"
});
