# init (doc, win, iframe, click, enter, input)
>The javaScript code to run only once with current main page or every iframe with doc:(document of main page or iframe). If you want to run some code only once, or you want to mirror your status on main page to iframe, try this.

Example1:
--
```JSON
"init": "if(doc)doc.querySelector('[data-title=sh]').click();"
```
>Do some click in iframe to get the status same as main page.

Example2:
--
```JSON
"init": "if(iframe == null) return; await click('#btn'); await input('#input', 'here you are'); await enter('#input');"
```
>When get content in iframe, click '#btn', then input words 'here you are' to '#input', press 'enter' on '#input' at last.

*This code will run only once, user this to finish work which you to run one time*