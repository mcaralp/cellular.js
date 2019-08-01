



// Constants
window.TOPLEFT     = 0;
window.TOP         = 1;
window.TOPRIGHT    = 2;
window.RIGHT       = 3;
window.BOTTOMRIGHT = 4;
window.BOTTOM      = 5;
window.BOTTOMLEFT  = 6;
window.LEFT        = 7; 

class ColorHSV
{
    constructor(h, s, v)
    {
        this.h = h;
        this.s = s;
        this.v = v;
    }
}

class ColorRGB
{
    constructor(r, g, b)
    {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

window.onload = () =>
{


    window.createAutomata = (width, height, ...args) =>
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
        render.setParent(parent);
    }

    window.framerate = (fps) => 
    {
        if(fps == undefined)
            return render.getFramerate();

        render.setFramerate(fps);
    }

    window.point = (x, y, c) =>
    {
        render.setPoint(x, y, c);
    }

    window.background = (c) => 
    {
        render.setBackground(c);
    }

    window.id = () =>
    {
        return render.getId();
    }

    window.cell = () =>
    {
        return render.getCell();
    }

    window.cloneCell = () =>
    {
        return render.cloneCell();
    }

    window.neighbor = (index) => 
    {
        return render.getNeighbor(index);
    }

    let hsvToRgb = (c) =>
    {
        let r, g, b;

        let h = c.h / 360;
        let s = c.s / 255;
        let v = c.v / 255;

        let i = Math.floor(h * 6);
        let f = h * 6 - i;
        let p = v * (1 - s);
        let q = v * (1 - f * s);
        let t = v * (1 - (1 - f) * s);

        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }

        return {r: Math.floor(r * 255), g: Math.floor(g * 255), b: Math.floor(b * 255)};
    }

    class Renderer
    {
        constructor()
        {
            this.fps         = 30; 
            this.step        = 0;
            this.currentCell = null;
            this.currentId   = -1;

            this.width       = 100;
            this.height      = 100;
            this.cellSize    = 1;  
            this.canvas      = null;
            this.parentId    = null;
            this.interval    = null;  
            this.setupDone   = false;
        }

        setCellSize(size)
        {
            if(this.setupDone)
                throw new Error('This function can only be called in the setup function.');

            this.cellSize = size;
        }

        setSize(width, height)
        {   
            if(this.setupDone)
                throw new Error('This function can only be called in the setup function.');

            this.width = width;
            this.height = height;
        }

        setParent(parentId)
        {
            if(this.setupDone)
                throw new Error('This function can only be called in the setup function.');

            this.parentId = parentId;
        }

        getFramerate()
        {
            return this.fps;
        }

        setFramerate(fps)
        {
            this.fps = fps;

            if(this.interval != null)
            {
                clearInterval(this.interval);
                this.interval = setInterval(this.onRender.bind(this), Math.floor(1000 / this.fps));
            }
        }

        setPoint(x, y, c)
        {
            if(this.currentCell == null)
                throw Error('This function can only be called in loop function.');

            if(c.h != undefined) c = hsvToRgb(c);

            let p = this.currentCell.pos[y] + x * 4;
            this.image.data[p + 0] = c.r; 
            this.image.data[p + 1] = c.g; 
            this.image.data[p + 2] = c.b; 
            this.image.data[p + 3] = 255; 
        }

        setBackground(c)
        {
            if(c.h != undefined) c = hsvToRgb(c);

            for(let i = 0; i < this.cellSize; ++i)
            {
                for (let j = 0; j < this.cellSize; ++j)
                {
                    this.setPoint(i, j, c);
                }
            }
        }

        getId()
        {
            if(this.currentId == null)
                throw Error('This function can only be called in loop or construct function.');
            return this.currentId;
        }

        getCell()
        {
            if(this.currentCell == null)
                throw Error('This function can only be called in loop function.')
            return this.currentCell.cell;
        }

        cloneCell()
        {
            if(this.currentCell == null)
                throw Error('This function can only be called in loop function.')

            return JSON.parse(JSON.stringify(this.currentCell.cell));
        }

        getNeighbor(index)
        {
            if(this.currentCell == null)
                throw Error('This function can only be called in loop function.')

            return this.currentCell.neighborhood[index] == null ? null : this.currentCell.neighborhood[index].cell;
        }

        createAutomata()
        {
            this.canvas  = document.createElement('canvas');
            
            if(typeof this.parentId == 'string' && this.parentId != null)
            {
                let parent = document.getElementById(this.parentId);
                parent.appendChild(this.canvas);
            }
            else 
                document.body.appendChild(this.canvas);

            this.canvas.width  = this.width * this.cellSize;
            this.canvas.height = this.height * this.cellSize;

            this.context = this.canvas.getContext('2d');
            this.image   = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
            
            this.cells    = [
                new Array(this.width * this.height),
                new Array(this.width * this.height)
            ];

            for(let i = 0; i < this.width * this.height; ++i)
            {
                this.cells[0][i] = {cell: null, neighborhood: null, pos: null};
                this.cells[1][i] = {cell: null, neighborhood: null, pos: null};
            }

            for(let i = 0; i < this.width * this.height; ++i)
            {
                let x = i % this.width;
                let y = Math.floor(i / this.width);

                let neighborhood = this.computeNeighborhood(x, y);

                let pos = new Array(this.cellSize);
                for(let j = 0; j < pos.length; ++j)
                    pos[j] = ((j + y * this.cellSize) * this.width + x) * this.cellSize * 4;

                this.cells[0][i].neighborhood = neighborhood[0];
                this.cells[1][i].neighborhood = neighborhood[1];
                this.cells[0][i].pos = pos;
                this.cells[1][i].pos = pos;

            }
        }

        computeNeighborhood(x, y)
        {
            let pos = [
                [-1, -1], // TOPLEFT
                [ 0, -1], // TOP
                [ 1, -1], // TOPRIGHT
                [ 1,  0], // RIGHT
                [ 1,  1], // BOTTOMRIGHT
                [ 0,  1], // BOTTOM
                [-1,  1], // BOTTOMLEFT
                [-1,  0]  // LEFT
            ];

            let neighborhood = [[], []];

            for(let i = 0; i < pos.length; ++i)
            {
                let newX = x + pos[i][0];
                let newY = y + pos[i][1];

                if(newX < 0 || newX >= this.width || newY < 0 || newY >= this.height)
                {
                    neighborhood[0].push(null);
                    neighborhood[1].push(null);
                }
                else 
                {
                    neighborhood[0].push(this.cells[0][newX + newY * this.width]);
                    neighborhood[1].push(this.cells[1][newX + newY * this.width]);
                }
            }

            return neighborhood;

        }

        start()
        {
            if(window.setup)
            {
                window.setup();
            }

            this.createAutomata();

            if(window.construct)
            {
                for(let i = 0; i < this.width * this.height; ++i)
                {
                    this.currentId = i;
                    this.cells[this.step][i].cell = window.construct();                    
                }

                this.currentCell = null;
                this.currentId   = -1;
            }
            this.interval = setInterval(this.onRender.bind(this), Math.floor(1000 / this.fps));
        }

        onRender()
        {
            for(let i = 0; i < this.width * this.height; ++i)
            {
                this.currentCell = this.cells[this.step][i];
                this.currentId   = i; 
                this.cells[1 - this.step][i].cell = window.loop();
            }

            this.currentCell = null;
            this.currentId   = -1;

            this.step = 1 - this.step;
            this.context.putImageData(this.image, 0, 0);
        }

    }


    let render  = new Renderer();

    render.start();
};
