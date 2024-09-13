/*window.addEventListener("load", () => {
    const name = prompt("What is your name?");
    alert(`Hello ${name}`);
})*/

//Mr.Duck message & time
document.getElementById("duck").addEventListener("click", () => {
    //const timeStamp = new Date();
    //const theDate = fixDate(timeStamp);
    //Fix the date
    console.log("What do you call a duck that steals? A robber ducky! 🦆");
})



//Creation of a list based on the input text
function createList() {
    const newToList = document.getElementById("newToList").value;
    const newLi = document.createElement("li");
    newLi.textContent = newToList;

    document.getElementById("list").appendChild(newLi);
    //Save the text
    saveText();
    //Clear input field
    document.getElementById("newToList").value = '';
}


//Function to save the text
function saveText() {
    const listText = document.querySelectorAll("#list li");
    const text = [];
    listText.forEach((i) => {
        text.push(i.textContent);
    });
    //Save the array
    localStorage.setItem("savedText", JSON.stringify(text));
}

//Function to load list
function load() {
    const savedText = JSON.parse(localStorage.getItem("savedText"));
    if (savedText) {
        savedText.forEach((i) => {
            const newLi = document.createElement("li");
            newLi.textContent = i;
            document.getElementById("list").appendChild(newLi);
        });
    }
}

//Enter key
document.getElementById("newToList").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        //prevent page reload
        event.preventDefault();
        createList();
    }
})

//Click buton
document.getElementById("addList").addEventListener("click", function (event) {
    //prevent page reload
    event.preventDefault();
    createList();
})


