# Preamble

A typical CMS would feature a title field, a large textarea and maybe some custom fields to save other data. A problem occurs when we want to query specifc parts of the large textarea field (for example, what if a user embeds a a gallery?)

Another problem is, typical WYSIWYG editors are kind of bloated ([with notable exceptions](http://imperavi.com/redactor/)). Sometimes, &lt;span&gt;s and other elements start to pop up everywhere.

# Okay So What Is This

This is an experiment of an idea where content is saved in discrete modules. Each module can be swapped out with another type of module. Hitting `return` creates a new text module.

# Lessons Learned From This Experiment

on contenteditable:
- the client adds things in like `<div><br></div>` and `&nbsp;` whenever the user hits `return`
- here's a good explanation on those elements http://programmers.stackexchange.com/questions/199166/why-does-a-contenteditable-div-not-behave-like-an-input-element
- have to use javascript that would intercept things like the `return` key and give the user rich text options he or she would expect (bold, italic etc)
- what about copy and paste - lol oh no

# Building

Requires [gulp](http://gulpjs.com/) and [browserify](http://browserify.org/)
`$ gulp` builds to `./dist/`

Pardon the mix of node_modules and the bower_components for front-end. /lazy