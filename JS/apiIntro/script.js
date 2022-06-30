// async function fetchPokemon(){
//     try{
//         var response = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
//         console.log(response);
//         var data = await response.json();
//         console.log(data);
//     }
//     catch{
//         console.log("it didn't work");
//     }
// }
function fetchPokemon(element, event){
    event.preventDefault();

    var pokemonInput = document.querySelector("#pokemonInput");
    var pokemonImage = document.querySelector("#pokemonImage");

    fetch("https://pokeapi.co/api/v2/pokemon/"+pokemonInput.value.toLowerCase())
        .then(res => res.json())
        .then(data => {
            console.log(data.sprites.front_default);
            pokemonImage.src = data.sprites.front_default;
            pokemonImage.alt = pokemonInput.value;
        })
        .catch(err => {
            alert("it didn't work");
            console.log(err);
        })
}

// fetchPokemon();