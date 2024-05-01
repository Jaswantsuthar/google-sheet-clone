let searchButton = document.getElementById("search")

searchButton.addEventListener("click", () => {
    console.log("hello")

    let searchValue = document.getElementById("inpDiv").value.toLowerCase();


    let cell = document.querySelectorAll(".cell")

    cell.forEach((cells) => {

        if (cells.textContent.toLowerCase().includes(searchValue)) {
            cells.style.backgroundColor = "red";
            setTimeout(() => {
                cells.style.backgroundColor = "";
            }, "3000");

        }
        else {

        }

    });

})
let replaceButton = document.getElementById("replace")

replaceButton.addEventListener("click", () => {
    console.log("hello")

    let searchValue = document.getElementById("inpDiv").value.toLowerCase();
    let replaceValue = document.getElementById("replaceDiv")

    let cell = document.querySelectorAll(".cell")

    cell.forEach((cells) => {

        if (cells.textContent.toLowerCase().includes(searchValue)) {
            cells.textContent = "";
            cells.textContent = replaceValue.value;
        }
        else {

        }

    });

})