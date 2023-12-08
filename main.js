const prod = (x,y)=> x*y;

console.log(prod(2,3));

const Student = {
    name: "Rishita",
    age : 22,
    greetTeacher: function(){
        console.log("Good Morning from "+this.name);
    }
}

Student.greetTeacher();

const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

console.log(array.map(item =>  {
    return item === ' ' ? 'empty string' : item;
}));
console.log(array);

// What according to you is spread opertor. Does spread operator create a new object or point to the same old object?
// Spread operator is used to create a copy of another object. It creates a new object.