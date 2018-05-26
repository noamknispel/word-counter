# World Count Service
#### By Noam Knispel
---

## APIs

**Path** | **Params** | **Description** | **Example**
--- | --- | --- | --- | ---
[POST] /api/words | `text` - for string <br /> `url` - for URL fetching | Send text and store the counts | `{ "text": "STRING" }`
[GET] /api/words/:WORD | `word` | Get statistic of how many times the word appeared | `/api/words/something`
