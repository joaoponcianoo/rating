var userSelection = document.getElementById("rating-numbers");

const submit = document.getElementById("submit");

userSelection.addEventListener("click", (element) => {

    const ratingNumbers = document.getElementsByClassName("rating-number");

    if (element.target.id != "rating-numbers") {
        for (let span of ratingNumbers) {
            span.removeAttribute("id");
        }
        element.target.id = ("rating-number-clicked");
    }
})

submit.addEventListener("click", () => {
    const numberSelect = document.getElementById("rating-number-clicked");
    const ratingContainer = document.getElementById("rating-container");
    const submitContainer = document.getElementById("submit-container");
    const note = document.getElementById("note-select");

    ratingContainer.style.display = "none";
    submitContainer.style.display = "flex";
    
    note.innerHTML = numberSelect.innerHTML;

})