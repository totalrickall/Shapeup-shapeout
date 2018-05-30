let rectangleButton = document.getElementById(`rectangle-button`);
let squareButton = document.getElementById(`square-button`);
let circleButton = document.getElementById(`circle-button`);
let triangleButton = document.getElementById(`triangle-button`);

class Shape {
    constructor(height, width, radius) {
        this.height = height;
        this.width = width;
        this.radius = this.height / 2;
        this.name = 'shape';
        this.div = document.createElement(`div`);
        this.div.style.height = height + 'px';
        this.div.style.width = width + 'px';
        //this.div.style.left = randomVal(600 - width) + 'px';
        //this.div.style.top = randomVal(600 - height) + 'px';
        document.getElementById(`pad`).appendChild(this.div);
    }
};

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width)
        this.name = 'rectangle';
        this.div.className = 'rectangle';
        this.div.style.backgroundColor = 'black';
        this.div.style.cssFloat = 'left';
        this.div.style.margin = '2px'
    }
};
class Square extends Shape {
    constructor(height, width) {
        super(height, width)
        this.name = 'square';
        this.div.className = 'square';
        this.div.style.backgroundColor = 'lime';
        this.div.style.cssFloat = 'left';
        this.div.style.margin = '2px';
    }
};
class Circle extends Shape {
    constructor(radius) {
        super(radius*2, radius*2)
        this.name = 'circle';
        this.div.className = 'circle';
        this.div.style.backgroundColor = 'goldenrod';
        this.div.style.cssFloat = 'left';
        this.div.style.margin = '2px';
        this.div.style.borderRadius = '50%';
    }
};
class Triangle extends Shape {
    constructor(height,width) {
        super(height, height)
        this.name = 'Triangle';
        this.div.className += ' triangle';
        //this.div.style.width = '0px';
        //this.div.style.height = '0px';
        //this.div.style.backgroundColor = 'transparent';
        //this.div.style.borderRightWidth = this.height + 'px';
        //this.div.style.borderBottomWidth = this.height + 'px';
    }
    area() {
        return (this.height * this.height) / 2;
    }
    perimeter() {
        return 2 * this.height + (Math.sqrt(2 * Math.pow(this.height, 2)))
    }
};

rectangleButton.addEventListener('click', addRectangle);
squareButton.addEventListener('click', addSquare);
circleButton.addEventListener('click', addCircle);
triangleButton.addEventListener('click', addTriangle);

function addRectangle() {
    let width = document.getElementById(`rectangleW`).value;
    let height = document.getElementById(`rectangleH`).value;
    new Rectangle(height, width);
};
function addSquare() {
    let sideLength = document.getElementById(`square`).value;
    new Square(sideLength, sideLength)
};
function addCircle() {
    let radius = document.getElementById(`circle`).value;
    new Circle(radius)
};
function addTriangle() {
    let heightTri = document.getElementById(`triangle`);
    new Triangle(heightTri);
}


//// random value generator
function randomVal(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
};