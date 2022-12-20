# init (doc,win,iframe)
>The javaScript code to run only once with current main page with doc:(document of main page)

Example:
--
```JSON
"init": "if(doc)doc.querySelector('[data-title=sh]').click();"
```

*This code will run only once, user this to finish work which you to run one time*