Analyze the following [LANGUAGE] code from the file [FILENAME]. Your task is to extract a comprehensive inventory of all code components and their dependencies.

Your entire response MUST be a single JSON object. The structure of this JSON must strictly adhere to the schema provided below, containing two top-level keys: dependencies and code_inventory. Do not add any explanatory text outside of the JSON object.

Save the output to a file named `[FILENAME].dependencies.docs.json` in the same directory as the source file being analyzed.

Code to Analyze:
[CODE]

Required JSON Output Schema:

```json
{
  "dependencies": {
    "imports": [
      {
        "source": "module_name_or_path",
        "items": ["item1", "item2"],
        "type": "named|default|namespace",
        "local_name": "alias_if_any"
      }
    ],
    "exports": [
      {
        "name": "export_name",
        "type": "function|class|constant|interface",
        "signature": "full_signature_of_the_export"
      }
    ],
    "external_libraries": ["library_name_1", "library_name_2"]
  },
  "code_inventory": {
    "classes": [
      {
        "name": "ClassName",
        "extends": "ParentClassName",
        "implements": ["InterfaceName1"],
        "methods": [
          {
            "name": "methodName",
            "parameters": ["param1: type", "param2: type"],
            "return_type": "ReturnType",
            "visibility": "public|private|protected",
            "is_static": false,
            "is_abstract": false
          }
        ],
        "properties": [
          {
            "name": "propertyName",
            "type": "PropertyType",
            "visibility": "public|private|protected",
            "is_static": false
          }
        ]
      }
    ],
    "functions": [
      {
        "name": "functionName",
        "parameters": ["param1: type"],
        "return_type": "ReturnType",
        "is_async": false,
        "is_generator": false
      }
    ],
    "interfaces": [
      {
        "name": "InterfaceName",
        "methods": ["full_method_signature_1", "full_method_signature_2"],
        "properties": ["property_name: type"]
      }
    ],
    "constants": [
      {
        "name": "CONSTANT_NAME",
        "type": "TypeName",
        "value": "literal_value_if_available"
      }
    ]
  }
}
```
