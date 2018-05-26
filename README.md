# Words Count Service
#### By Noam Knispel
---

The Service provides two functionalities:
* Send a text (via string, URL or sending file in HTTP request) and save the words counts
* Get the count of a specific word


## 🌐 APIs

**Path** | **Params** | **Description** | **Example**
--- | --- | --- | --- 
[POST] /api/words | `text` - for string <br /> `url` - for URL fetching <br /> `file` - send text through file in http request | Send text and store the counts | `{ "text": "STRING" }` 
[GET] /api/words/:WORD | `word` | Get statistic of how many times the word appeared | `/api/words/something`


## 🤓 A bit tech talking
- The words counts saved in `Redis`
- During the development I had few assumptions, please find them in the code [ `// assumption: ...` ]
- There are few comments inside the code with future ideas, some implementation notes and out-of-scope features
- The code is covered with tests, using `mocha` and `chai`
- I used `es-lint` to lint and keep the code nice and readable


## 📈 Large files support
The service was designed to be scalable and support large text files. *Not all of this support was implemented yet*.   
Inside the code you can find some comments with ideas how this code is ready to support large files.

![gif](https://media.giphy.com/media/l41YtZOb9EUABnuqA/giphy.gif "count")
