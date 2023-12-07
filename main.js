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

