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

Include the ca.js file or the minified version ca.min.js in your HTML page, and you are ready to go. You can also use the file provided by [a CDN](https://cdn.jsdelivr.net/npm/cellule.js@1.3.1). A sample HTML page might look like this:

```html
<html>

<head>
    <script src="https://cdn.jsdelivr.net/npm/cellule.js@1.3.1"></script>
    <script src="sketch.js"></script>
</head>
    
<body>
</body>
  
</html>
```

## Your first sketch

Every sketch is composed of three functions:


```javascript
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

### Setup function

This function is called one time at the beginning of the sketch. It is used to initialize the automation with the help of configuration functions like  `createAutomaton()` or `framerate()`. Please refer to the API section to get the full list of functions.

```javascript
function setup()
{
    // Create a cellular automaton of 100x100 cells.
    createAutomaton(100, 100);
    // Set the update frequency to 60hz.
    framerate(60);
}
```

### Construct function

This function is called one time for each cell at the beginning of the sketch, after the `setup()` function. It is used to set the initial state of the cell, which is an arbitrary object returned by the function.

```javascript
function construct()
{
    // Game of life automaton: Each cell can be alive or dead. 
    // Here a cell is alive at startup with a 50% probability.  
    return { alive : Math.random() < 0.5 };
}
```

### Loop function

This function is called over and over to update each cell of the automaton, in the following fashion:
1. cycle 1:
    - update cell at x = 0, y = 0
    - update cell at x = 1, y = 0
    - ...
    - update cell at x = n, y = 0
    - update cell at x = 0, y = 1
    - ...
    - update cell at x = n, y = m
1. cycle 2:
    - update cell at x = 0, y = 0
    - ...
    
    
Where *n* and *m* are the width and height of the automaton.

You can retrieve the previous state of the cell with the `cell()` function, and the neighborhood with the `neighbor()` function. The `loop()` function has to return the next state of the cell. Note that the object returned by `cell()` **must** remain unchanged. 

If you modify the object returned by `cell()`, the next cell to be updated will use this modified neighborhood , while it should use the state returned at the previous cycle. Please pay attention to how Javascript copies the objects by reference or copy. If you are not sure, use the `cloneCell()` function which performs a deep clone of the previous state of the cell.

```javascript
function loop()
{
    // Game of life update function
    let c = cell();
    let nbAlive = 0;
    for(let i = 0; i < 8; ++i)
    {
        /// Check each state of the neighborhood
        if(neighbor(i) != null && neighbor(i).alive) 
            ++nbAlive;
    }

    // Note that c remain unchanged. 
    return {alive: (c.alive && (nbAlive == 2 || nbAlive == 3)) || (!c.alive && nbAlive == 3) };
}
```

## API

This documentation is a work in progress. Please refer to the sketches in the examples folder to have more informations.
