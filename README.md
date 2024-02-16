# Dataform Expectations

Dataform Expectations is a package inspired by Great Expectations, customized for use with Dataform. The aim of this project is to enable the execution of data validation tests, similar to those offered by Great Expectations, directly within data warehouses through Dataform. This integration ensures data quality and enhances the reliability of data pipelines.

## Features

- Execute data quality tests directly on your data warehouse through Dataform.
- Utilize validation logic inspired by Great Expectations within your Dataform projects.
- Ensure data quality and integrity, building a trustworthy data pipeline.

## Getting Started

### Supported warehouses

- BigQuery

If you would like to add support for other warehouses, please contact us at [Issues](https://github.com/ota2000/dataform-expectations/issues).

### Installation

Add the package to your package.json file in your Dataform project. You can find the most up to package version on the [releases page](https://github.com/ota2000/dataform-expectations/releases).

### Usage

This section provides a basic example of how to use the dataform-expectations package in your Dataform projects to ensure your data meets specified quality checks.

Here's an example of how to use the expect_column_max_to_be_between function to validate that the maximum value of a specified column is within a defined range.

```javascript
const { expect_column_max_to_be_between } = require("dataform-expectations");

expect_column_max_to_be_between({
  source: {
    name: "table_a",
    schema: "dataset_a"
  },
  column: "value",
  min_value: 10,
  max_value: 100
});
```

In this example, expect_column_max_to_be_between is used to assert that the maximum value of the value column in the source named table_a (with schema dataset_a) should be between 10 and 100.

For more detailed examples of each expect function provided by our package and how to use them, please see the examples in /definitions/example.js. These examples will guide you through the application of various expectations to validate your data effectively within your Dataform framework.

## Available Tests

### Table shape

- expect_column_to_exist
- expect_table_column_count_to_equal
- expect_table_row_count_to_be_between
- expect_table_row_count_to_equal
- expect_table_row_count_to_equal_other_table

### Missing values, unique values, and types

- expect_column_values_to_be_null
- expect_column_values_to_be_of_type
- expect_column_values_to_not_be_null

### Sets and ranges

### String matching

- expect_column_value_lengths_to_be_between
- expect_column_value_lengths_to_equal
- expect_column_values_to_match_regex
- expect_column_values_to_not_match_regex

### Aggregate functions

- expect_column_max_to_be_between
- expect_column_min_to_be_between
- expect_column_proportion_of_unique_values_to_be_between.js

### Multi-column

- expect_compound_columns_to_be_unique

### Distributional functions

## Contributing

If you're interested in contributing to this project, please see CONTRIBUTING.md.

## License

This project is published under the MIT License. For more details, please see the [LICENSE](https://github.com/ota2000/dataform-expectations/blob/main/LICENSE) file.

## Support

If you have any questions or need support regarding the project, please submit them through [issues](https://github.com/ota2000/dataform-expectations/issues).
