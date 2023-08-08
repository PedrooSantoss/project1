function Person() {
let name = document.getElementById("name").value;
let lastName = document.getElementById("lastName").value
let age = document.getElementById("age").value
let eyeColor = document.getElementById("eyeColor").value



const personObject = {
    firstName: "name",
    lastName: "lastName",
    age: "age",
    eyeColor:"eyeColor"
};

document.getElementById("result").innerHTML = `$(name)`
document.getElementById("resultLast").innerHTML = `$(lastName)`
document.getElementById("resultAge").innerHTML = `$(age)`
document.getElementById("resultEye").innerHTML = `$(eyeColor)`
}