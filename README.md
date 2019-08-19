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

This function is called one time at the beginning of the sketch. It is used to initialize the automaton with the help of setup functions like  `createAutomaton()` or `framerate()`. After this function is executed, a canvas is automaticaly added to the DOM with the specified parameters. Please refer to the [API section](#setup-functions) to list all these parameters.

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

The `loop()` function has to return the next state of the cell. You can retrieve the state returned by `loop()` (or `construct()`if it is the first cycle) with the `cell()` function, and the neighborhood with the `neighbor()` function.  Note that the object returned by `cell()` **must** remain unchanged. 

If you modify the object returned by `cell()`, the next cell to be updated will have an invalid neighborhood , as it should use the state returned at the previous cycle. Please pay attention to how Javascript copies the objects by reference or value. If you are not sure, use the `cloneCell()` function which performs a deep clone of the previous state of the cell.

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

### Setup functions

#### createAutomaton(width, height, [cellSize])

Creates a cellular automaton of `width`x`height` cells. You can also give the dimension of the cell, in pixels. Each cell will be rendered with a dimension of `cellSize`x`cellSize`, thus the total width and height of the generated canvas will be `width * cellSize`and `height * cellSize`.
If this function is not called, the a 100x100 cellular automaton will be created, with cells of dimension 1x1 pixels.

#### framerate(fps)

Specifies the number of updates to be computed every second. Calling `framerate()` with no arguments returns the current framerate. 

#### cellSize(size)

Specifies the size of the cell, in pixels. Each cell will be rendered with a dimension of `size`x`size`. Defining a cell with a dimension larger than `1`x`1` is useful in conjunction with drawing functions, as it increases the expressivity of each cell. Calling `cellSize()` with no arguments returns the current cell size. 

#### parentId(id)

When the canvas is created, it is added to the DOM body object. If you need it to be added in another DOM object, you can use  this function to specify the id of the DOM object. Calling `parentId()` with no arguments returns the current parent identifier.

#### size(width, height)

Specifies the dimension of the cellular automaton. It is equivalent of the function `createAutomaton(width, height)`. Calling `size()` with no arguments returns the current size of the cellular automaton.

#### idMode(mode)

Each cell has an identifier you can get with the function `id()`. This function specifies how the cells are numeroted. If `mode == ORDERED`, then the cells are numbered from left to right, top to bottom. If `mode == SHUFFLED`, the identifiers are shuffled. Calling `idMode()` with no arguments returns the current id mode.

### State functions

#### cell()

Returns the previous state of the current cell. This is the same object returned by the function `loop()` at the previous cycle, or by the function `construct()`if it is the first cycle.

#### cloneCell()

Returns a deep clone of the previous state of the current state. You can use this function to ensure that the previous state is not modified.

#### neighbor(index)

Returns the state of the neighbor at the given index. The neighborhood is numbered as following:

```
0 | 1    | 2
------------
7 | cell | 3
-------------
6 | 5    | 4
```

#### neighbor(x, y)

Returns the state of the neighbor at the given position. The neighborhood is positioned as following:

```
-1, -1 | 0, -1 | 1, -1
----------------------
-1, 0  | cell  | 1, 0
----------------------
-1, 1  | 0, 1  | 1, 1
```

#### id()

Returns the identifier of the cell. It is a value from. `0 `to `width * height`. Please check the function `idMode()` to
see how the identifiers are numbered.

### Draw functions

#### point(x, y, color)

Draw a pixel at the position `(x, y)` of the current cell. The arguments `x `and `y` must be in the range of the cell size. The color is an instance of one of the following classes:

`ColorRGB(red, green, blue)`

Defines a color using red, green and blue components. The arguments must be in the range [0, 255].

```javascript
// Display a red pixel at (0, 0).
point(new ColorRGB(255, 0, 0));
```

`ColorHSV(hue, saturation, value)`

Defines a color using hue, saturation and value components. The hue must be in the range [0, 360], and saturation and value in the range [0, 255].

```javascript
// Display a red pixel at (0, 0).
point(new ColorHSV(0, 255, 255));
```

You can also directly use objects with properties `r`, `g` and `b` for RGB color, or `h`, `s` and `v` for HSV color.

```javascript
// Display a red pixel at (0, 0).
point({r: 255, g: 0, b: 0});
```

```javascript
// Display a red pixel at (0, 0).
point({h: 0, s: 255, v: 255});
```

#### background(color)

Fill the background of the current cell with the given color. Please check the `point()` function to see how colors work.

### Pointer functions

#### pointerDistance()

Returns the euclidean distance from the center of the current cell to the pointer in pixels. The pointer can be the mouse (using the right click), or the finger with touch devices.

#### pointerVector()

Returns the vector from the center of the current cell to the pointer in pixels. The pointer can be the mouse (using the right click), or the finger with touch devices. 
