class polygon {
    constructor(parm1, parm2) {
        this.parm1 = parm1;
        this.parm2 = parm2;
    }
    toString() {
        console.log(`Area is = `);
    }

}
class Rectangle extends polygon {
    constructor(parm1, parm2) {
        super(parm1, parm2);
    }
    toString() {
        console.log(`Area of Rectangle [width=${this.parm1} & height=${this.parm2}] = ${this.parm1*this.parm2}`);
    }
}
class Square extends polygon {
    constructor(parm1) {
        super(parm1);
    }
    toString() {
        console.log(`Area of Rectangle [Side=${this.parm1} ] = ${this.parm1*this.parm1}`);
    }
}
class Circle extends polygon {
    constructor(parm1) {
        super(parm1);
    }
    toString() {
        console.log(`Area of Circle [redius=${this.parm1} ] = ${Math.PI*this.parm1*this.parm1}`);
    }
}
class Triangle extends polygon {
    constructor(parm1, parm2) {
        super(parm1, parm2);
    }
    toString() {
        console.log(`Area of  Triangle [base=${this.parm1} & height=${this.parm2}] = ${0.5*this.parm1*this.parm2}`);
    }
}
let rect = new Rectangle(5, 6);
let sqr = new Square(20);
let cir = new Circle(10);
let ter = new Triangle(6, 5);
rect.toString();
sqr.toString();
cir.toString();
ter.toString();