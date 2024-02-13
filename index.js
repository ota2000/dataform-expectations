const expect_column_max_to_be_between = require("./includes/expect_column_max_to_be_between");
const expect_column_min_to_be_between = require("./includes/expect_column_min_to_be_between");

module.exports = (params) => {

    params = {
      // TODO: set default params
      ...params
    };

    return {
      expect_column_max_to_be_between: expect_column_max_to_be_between(params),
      expect_column_min_to_be_between: expect_column_min_to_be_between(params),
    };
}
