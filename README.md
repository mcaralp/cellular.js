# Cellule.js

Cellule.js is a library to simulate cellular automata. It is largely inspired by P5.js: you does not have to provide boilerplate code before actually writing the rules of your automaton, just a few functions are necessary to start the fun.

## Online editor

You do not need to install the library to test it: you can use the online editor to write your first sketches, available here:

- https://cellule.equulei.fr

## Download and file setup

Download the last version of the Cellule.js library available on the [Release page](https://github.com/mcaralp/cellule.js/releases). You can also get it using npm with the command:
```bash
npm install cellule.js
```

Include the ca.js file or the minified version ca.min.js in your HTML page, and you are ready to go. You can also use the file provided by [a CDN](https://cdn.jsdelivr.net/npm/cellule.js@1.2.0). A sample HTML page might look like this:

```html
<html>

<head>
    <script src="https://cdn.jsdelivr.net/npm/cellule.js@1.2.0"></script>
    <script src="sketch.js"></script>
</head>
    
<body>
</body>
  
</html>
```

## Your first sketch

Every sketch is composed of three functions:


```js
function setup()
{
}

function construct()
{
}

function loop()
{
}
```

The *setup* function is called one time at the start of the script. It is used to globally initialize the automaton. The *construct* function is called one time for each cell. It must return the state of the cell. Finally, the *loop* function is repeatedly called for each cell to update the automaton. This function must return the next state of the cell.

## API

This documentation is a work in progress. Please refer to the sketches in the examples folder to have more informations.
