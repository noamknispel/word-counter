# Words Count Service
#### By Noam Knispel
---

The Service provides two functionalities:
* Send a text (via string, URL or sending file in request body) and save the words counts
* Get the count of a specific word


## 🌐 APIs

**Path** | **Params** | **Description** | **Example**
--- | --- | --- | ---
[POST] /api/words | `text` - for string <br /> `url` - for URL fetching <br /> `file` - send text through file | Send text and store the counts | `{ "text": "STRING" }`
[GET] /api/words/:WORD | `word` | Get statistic of how many times the word appeared | `/api/words/something`


## 🤓 A bit tech talking
- The words counts saved in `Redis`
- During the development I had few assumptions, please find them in the code [ `// assumption: ...` ]
- There are few comments inside the code with future ideas, some implementation notes and out-of-scope features
- The code is covered with tests, using `mocha` and `chai`
- I used `es-lint` to lint and keep the code nice and readable


## 📈 Large files
The service use `stream` to support processing large files (sending by URL or file methods).
[Tested with file of 1GB on local environment]



![gif](https://media.giphy.com/media/l41YtZOb9EUABnuqA/giphy.gif "count")
