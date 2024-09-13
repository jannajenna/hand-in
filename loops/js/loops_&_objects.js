

const listOfBooks = [
    {
        title: "Dune",
        author: "Frank Herbert"
    },
    {
        title: "Neuromancer",
        author: "William Gibson"
    }, {
        title: "Foundation",
        author: "Isaac Asimov"
    }, {
        title: "The Left Hand of Darkness",
        author: "Ursula K. Le Guin"
    }, {
        title: "1984",
        author: "George Orwell"
    },
]


listOfBooks.forEach((book) => {
    const addBook = document.getElementById("listOfBooks");

    const newLi = document.createElement("li");

    newLi.textContent = `This is "${book.title}" by ${book.author}`;

    addBook.appendChild(newLi);
})

