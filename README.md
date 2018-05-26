# World Count Service
#### By Noam Knispel
---

## Thoughts:
- *bulk?*
- trim
- remove punctuation
- lower case
- save count for result
- redis `incr` by word

## APIs

**Path** | **Params** | **Description**
--- | --- | --- | ---
[POST] /api/words | `{ "text": "STRING" }` | Send text and store the counts
[GET] /api/words/:WORD | `:WORD = 'foo'` | Get statistic of how many times the word appeared
