function Makestudents(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.isVerfied = isVerfied;
    this.getDetails = function () {
        if (this.isVerfied) {
            console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
        } else {
            console.log("Student is not verified.");
        }   
}
let s1 = new Makestudents("John", 20, "Male", true);
let s2 = new Makestudents("Jane", 22, "Female", false);
let s3 = new Makestudents("Mike", 19, "Male", true);
let s4 = new Makestudents("Emily", 21, "Female", false);
s4.getDetails()
}