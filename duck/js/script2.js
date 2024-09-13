//Form
function validateForm() {

    let email = document.getElementById("email").value;
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    //Check email
    if (email === " ") {
        alert("Fill all the data");
        return false;
    }

    //Check user
    if (user === " ") {
        alert("Fill all the data");
        return false;
    } else if (user.lenght < 4 || user.lenght > 15) {
        alert("Min lenght is 4 characters & max lenght is 15 characters");
        return false;
    };

    //Check password
    if (password === " ") {
        alert("Fill all the data");
        return false;
    };

}


// Fetch a joke 
async function fetchJokesJSON() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
        const jokeObject = await response.json();
        return jokeObject;
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

// Handle the click event
const handleButtonClick = async () => {
    // Fetch a joke
    const jokeObject = await fetchJokesJSON();

    if (jokeObject.type === 'single') {
        console.log(jokeObject.joke);
    } else if (jokeObject.type === 'twopart') {
        console.log(`${jokeObject.setup} - ${jokeObject.delivery}`);
    } else {
        console.log('Unexpected joke format.');
    }

    // The joke
    console.log(jokeText);
};

// Adding event listener to the button
document.getElementById('joke').addEventListener('click', handleButtonClick);

