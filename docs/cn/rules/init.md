# init (doc, win, iframe, click, enter, input, sleep)
>The javaScript code to run only once with current main page or mirror iframe with doc:(document of main page or mirror iframe). If you want to run some code only once, or you want to mirror your status on main page to iframe, try this.

Example:
--
```JSON
"init": "if (iframe == null) return; await click('#btn'); await input('#input', 'here you are'); await enter('#input');"
```
>While extracting content in mirror iframe, first click '#btn', then input words 'here you are' to '#input', press 'enter' on '#input' at last.

*This code will run only once, user this to finish work which you want to run only one time*