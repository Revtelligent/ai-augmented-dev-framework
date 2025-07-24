Analyze the following [LANGUAGE] code from the file [FILENAME]. Your task is to generate a comprehensive call graph that maps all relationships between functions, methods, and events within the file.

Your entire response MUST be a single JSON object. The structure of this JSON must strictly adhere to the schema provided below, containing one top-level key: call_graph. Do not add any explanatory text outside of the JSON object.

Save the output to a file named `[FILENAME].callgraph.docs.json` in the same directory as the source file being analyzed.

Required JSON Output Schema:

```json
{
  "call_graph": {
    "internal_calls": [
      {
        "caller": "function_or_method_name",
        "calls": ["function_it_calls_1", "method_it_calls_2"],
        "call_type": "direct|conditional|loop|async"
      }
    ],
    "external_calls": [
      {
        "caller": "function_name_making_the_call",
        "external_apis": ["library.function1", "api.method2"],
        "http_endpoints": ["GET /api/users", "POST /api/data"]
      }
    ],
    "event_flows": [
      {
        "event": "event_name_or_emitter",
        "handlers": ["handler_function_1", "handler_function_2"],
        "triggers": ["user_click", "data_received"]
      }
    ]
  }
}
```
