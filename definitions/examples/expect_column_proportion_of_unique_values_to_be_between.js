/**
 * Expects the proportion of unique values in a column to be between a specified range.
 *
 * @param {Object} options - The options for the expectation.
 * @param {Object} options.source - The source table information.
 * @param {string} options.source.name - The name of the source table.
 * @param {string} options.source.schema - The schema of the source table.
 * @param {string} options.column - The name of the column to check.
 * @param {number} options.min_value - The minimum expected proportion of unique values.
 * @param {number} options.max_value - The maximum expected proportion of unique values.
 */

const { expect_column_proportion_of_unique_values_to_be_between } = require("dataform-expectations");

expect_column_proportion_of_unique_values_to_be_between({
    source: {
        name: "table_a",
        schema: "dataform_expectations"
    },
    column: "value",
    min_value: 0.5,
    max_value: 0.8
});
