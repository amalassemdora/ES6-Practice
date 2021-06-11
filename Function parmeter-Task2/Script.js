function functionParameter() {

    if (arguments.length == 2) {
        console.log("Accepted parameters");
    } else {
        console.log("Error: This function accept only 2 parameters");
    }
}
console.log("functionParameter(1,2)")
functionParameter(1, 2);
console.log("functionParameter(1,2,3)")
functionParameter(1, 2, 3);