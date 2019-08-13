
const Renderer = require('./renderer');

function start (global)
{
    // Constants
    global.TOPLEFT     = 0;
    global.TOP         = 1;
    global.TOPRIGHT    = 2;
    global.RIGHT       = 3;
    global.BOTTOMRIGHT = 4;
    global.BOTTOM      = 5;
    global.BOTTOMLEFT  = 6;
    global.LEFT        = 7; 

    global.SHUFFLED    = 0;
    global.ORDERED     = 1; 

    global.ColorHSV = class ColorHSV
    {
        constructor(h, s, v)
        {
            this.h = h;
            this.s = s;
            this.v = v;
        }
    };

    global.ColorRGB = class ColorRGB
    {
        constructor(r, g, b)
        {
            this.r = r;
            this.g = g;
            this.b = b;
        }
    };

    global.createAutomaton = (width, height, ...args) =>
    {
        let cellSize = 1, parent = null;

        if(args.length == 1)
        {
            if(typeof args[0] == 'number')
                cellSize = args[0];
            else 
                parent = args[0];
        }
        else if(args.length == 2)
        {
            cellSize = args[0];
            parent = args[1];
        }

        render.setSize(width, height);
        render.setCellSize(cellSize);
        render.setParentId(parent);
    };

    global.size = (width, height) =>
    {
        if(width != undefined && height != undefined)
            render.setSize(width, height);

        return render.getSize();
    };

    global.cellSize = (size) => 
    {
        if(size == undefined)
            return render.getCellSize();

        render.setCellSize(size);
    };

    global.parentId = (id) => 
    {
        if(id == undefined)
            return render.getParentId();

        render.setParentId(id);
    };

    global.idMode = (mode) => 
    {
        if(mode != undefined)
            render.setShuffledId(mode == global.SHUFFLED);

        return render.isShuffledId() ? global.SHUFFLED : global.ORDERED;
    };

    global.framerate = (fps) => 
    {
        if(fps == undefined)
            return render.getFramerate();

        render.setFramerate(fps);
    };

    global.pointerVector = () =>
    {
        return render.getPointerVector();
    };

    global.pointerDistance = () =>
    {
        return render.getPointerDistance();
    };

    global.pointerSquaredDistance = () =>
    {
        return render.getPointerSquaredDistance();
    };

    global.point = (x, y, c) =>
    {
        render.setPoint(x, y, c);
    };

    global.background = (c) => 
    {
        render.setBackground(c);
    };

    global.id = () =>
    {
        return render.getId();
    };

    global.cell = () =>
    {
        return render.getCell();
    };

    global.cloneCell = () =>
    {
        return render.cloneCell();
    };

    global.neighbor = (index) => 
    {
        return render.getNeighbor(index);
    };

    global.neighbor = (first, second) => 
    {
        return render.getNeighbor(first, second);
    };

    let render = new Renderer();
    global.addEventListener('load', () => render.start());
    
}

module.exports = start;