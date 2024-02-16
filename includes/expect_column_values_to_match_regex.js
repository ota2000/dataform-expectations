
/**
 * Expects the values in a specified column of a table to match a given regular expression.
 *
 * @param {Object} params - The parameters for the expectation.
 * @param {Object} params.source - The source object that identifies the table.
 * @param {string} params.column - The name of the column to be checked.
 * @param {string} params.regex - The regular expression to match against the column values.
 * @returns {Object} - The assertion object for the expectation.
 */

module.exports = (params) => {
  const {
    source = {}, // Assuming 'source' identifies the table
    column,
    regex,
  } = params;

  // Construct the SQL query to select records that do not match the regex
  const sqlQuery = ctx => `
    SELECT
      *
    FROM
      ${ctx.ref(source)}
    WHERE
    NOT REGEXP_CONTAINS(${column}, r'${regex}')
  `;

  // Define and return the assertion to check if all records match the regex
  return assert(`expect_column_values_to_match_regex`).query(sqlQuery);
};
