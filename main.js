import { MY_API_KEY } from '';
let covid19data;

(function onLoad()
{
    // set a function for each button
    setButtonFunctions();

    // fetch from each API when the page loads
    getJoke();
})();
// Chuck Norris jokes
async function getJoke()
{
    await fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
        "method": "GET",
        "headers": {
			"x-rapidapi-key": MY_API_KEY,
            "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
            "accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log("Chuck Norris API object:");
        console.log(response);
        console.log("\n");

        // display data
        document.getElementById('joke').innerHTML = response.value;
        document.getElementById('jokeIcon').src = response.icon_url;
        document.getElementsByClassName('jokeTitle')[0].href = response.url;
    })
    .catch(err => {
        console.log(err);
    });
}