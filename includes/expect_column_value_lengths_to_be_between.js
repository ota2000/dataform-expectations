
/**
 * Validates if the values in a specified column of a table have lengths within a given range.
 *
 * @param {Object} params - The parameters for the validation.
 * @param {Object} params.source - The source object that identifies the table.
 * @param {string} params.column - The name of the column to validate.
 * @param {number} params.min_value - The minimum length allowed for the column values.
 * @param {number} params.max_value - The maximum length allowed for the column values.
 * @throws {Error} If both min_value and max_value are null.
 * @returns {Object} The assertion object to check if the column values have the expected length.
 */

module.exports = (params) => {
  const {
    source = {}, // Assuming 'source' identifies the table
    column,
    min_value,
    max_value
  } = params;

  if (min_value === null && max_value === null) {
    throw new Error('Invalid input: Both min_value and max_value cannot be null.');
  }

  let where_condition = "";
  if (min_value !== null && max_value === null) {
    where_condition = `LENGTH(${column}) < ${min_value}`;
  } else if (min_value === null && max_value !== null) {
    where_condition = `LENGTH(${column}) > ${max_value}`;
  } else if (min_value !== null && max_value !== null) {
    where_condition = `LENGTH(${column}) < ${min_value} OR LENGTH(${column}) > ${max_value}`;
  }

  // Construct the SQL query to check if the column values have the expected length
  const sqlQuery = ctx => `
    SELECT
      *
    FROM
      ${ctx.ref(source)}
    WHERE
      ${where_condition}
  `;
  // Define and return the assertion to check if the column values have the expected length
  return assert(`expect_column_value_lengths_to_be_between`).query(sqlQuery);
};
