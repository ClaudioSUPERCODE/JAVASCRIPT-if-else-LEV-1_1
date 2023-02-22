let age = document.getElementById("inputAge")
console.log(age)
const output = document.getElementById("output")
console.log(output)

function adult() {
    if (inputAge.value >= 18) {
        output.innerHTML = "Volljährig";
        console.log (true)
    } else {
        output.innerHTML = "Minderjährig";
        console.log (false)
    }
}
