class maths_function {

    constructor(number_1, number_2, number_3, number_4) {
        this.number_1 = number_1;
        this.number_2 = number_2;
        this.number_3 = number_3;
        this.number_4 = number_4;
    }

    add() {
        return "Add:\t" + (this.number_1 + this.number_2);
    }

    subtract() {
        return "Subtract:\t" + (this.number_3 - this.number_4);
    }

    multiply() {
        return "Multiply:\t" + (this.number_3 * this.number_1);
    }

    divide() {
        return "Divide:\t" + (this.number_4 / this.number_2);
    }
}

class maths_2 extends maths_function {

    constructor(number_1, number_2, number_3, number_4) {
        super(number_1, number_2, number_3, number_4);
    }

    even_and_odd() {
        let all_numbers = [this.number_1, this.number_2, this.number_3, this.number_4];
        let even_numbers = [];
        let odd_numbers = [];
        
        for (let i = 0; i < all_numbers.length; i++) {
            if (all_numbers[i] % 2 === 0) {
                even_numbers.push(all_numbers[i]);
            } else {
                odd_numbers.push(all_numbers[i]);
            }
        }

        return "All Numbers:\t" + all_numbers + "\nEven Numbers:\t" + even_numbers.join(", ") + "\nOdd Numbers:\t" + odd_numbers.join(", ");   
    }
}

const a = 15;
const b = 16; 
const c = 100;
const d = 25;

class_call = new maths_function(a, b, c, d);
class_call_2 = new maths_2(a, b, c, d);

console.log(class_call.add());
console.log(class_call.subtract());
console.log(class_call.multiply());
console.log(class_call.divide());
console.log(class_call_2.even_and_odd());