let form = document.getElementById("piano");
let notes = "";

form.addEventListener("submit", function() {
    let inputs = form.getElementsByTagName("input");

    for (let key in inputs) {
        if (inputs[key].checked) {
            notes += inputs[key].value;
            notes += " ";
        }
    }
    alert(notes);
})