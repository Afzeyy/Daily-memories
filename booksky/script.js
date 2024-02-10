// DOM element references
var container = document.querySelector(".container");
var overlay = document.querySelector(".overlay");
var add = document.querySelector(".add");
var popup = document.querySelector(".popup");
var popbooktitle = document.getElementById("popbooktitle");
var popbookauthor = document.getElementById("popbookauthor");
var popbooktext = document.getElementById("popbooktext");
var popadd = document.getElementById("popadd");
var popcancel = document.getElementById("popcancel");

// Function to open the popup and clear form fields
function add1() {
    overlay.style.display = "block";
    popup.style.display = "block";
    // Clear form fields
    popbooktitle.value = "";
    popbookauthor.value = "";
    popbooktext.value = "";
}

// Event listener for the cancel button in the popup
popcancel.addEventListener("click", function(event) {
    event.preventDefault();
    // Close the popup
    closePopup();
});

// Event listener for the add button in the popup
popadd.addEventListener("click", function (event) {
    event.preventDefault();

    // Check if any of the input fields are empty
    if (popbooktitle.value.trim() === "" || popbookauthor.value.trim() === "" || popbooktext.value.trim() === "") {
        alert("Please fill in all fields before adding a book.");
        return;
    }

    // Create a new book container and append it to the main container
    var div = createBookContainer();
    container.append(div);
    // Close the popup after adding a book
    closePopup();
});

// Function to dynamically create a book container
function createBookContainer() {
    // Create a new div element with the "book-container" class
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");

    // Apply styles similar to existing book containers
    div.style.backgroundColor = "black";
    div.style.color = "white";
    div.style.width = "30%";
    div.style.padding = "10px";
    div.style.margin = "10px";
    div.style.borderRadius = "5px";
    div.style.display = "inline-block";

    // Create inner elements
    var title = document.createElement("h2");
    title.style.color = "#FD6569";
    title.innerText = popbooktitle.value;

    var author = document.createElement("h5");
    author.innerText = popbookauthor.value;

    var text = document.createElement("p");
    text.innerText = popbooktext.value;

    var deleteButton = document.createElement("button");
    deleteButton.style.backgroundColor = "#FD6569";
    deleteButton.style.color = "black";
    deleteButton.style.padding = "2px";
    deleteButton.style.margin = "2px";
    deleteButton.style.border = "none";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", delete1);

    // Append inner elements to the container
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(text);
    div.appendChild(deleteButton);

    return div;
}

// Function to close the popup
function closePopup() {
    overlay.style.display = "none";
    popup.style.display = "none";
}

// Function to handle the delete action for a book
function delete1(event) {
    // Remove the parent element (the book container) when the delete button is clicked
    event.target.parentElement.remove();
}

