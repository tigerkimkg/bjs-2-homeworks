function parseCount(arg) {
    if (Number.isNaN(Number.parseFloat(arg))) {
        throw new Error("Невалидное значение");
    } else {
        return Number.parseFloat(arg);
    }
}

function validateCount(arg) {
    try {
        return parseCount(arg);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.sumAB = sideA + sideB;
        this.sumAC = sideA + sideC;
        this.sumBC = sideB + sideC;

        if (this.sumAB <= this.sideC || this.sumAC <= this.sideB || this.sumBC <= this.sideA) {
            throw new Error("Треугольник с такими сторонами не существует"); 
        }
    }

    get perimeter() {
        return this._perimeter = this.sideA + this.sideB + this.sideC;
    }

    get area() {
        let semiPrmtr = (this.sideA + this.sideB + this.sideC) / 2;
        return this._area = +(Math.sqrt(semiPrmtr * (semiPrmtr - this.sideA) * (semiPrmtr - this.sideB) * (semiPrmtr - this.sideC)).toFixed(3));
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch (error) {
        return {
            get perimeter() {
                return this._perimeter = "Ошибка! Треугольник не существует";
            },

            get area() {
                return this._area = "Ошибка! Треугольник не существует";
            }
        }
    }
}