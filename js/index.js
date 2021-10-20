var numbers = [];

const random = () => {
    var random = Math.floor(Math.random() * 898) + 1
    while(numbers.includes(random)){
        var random = Math.floor(Math.random() * 898) + 1
    }
    numbers.push(random)
    return  random
}

const updateInfo = (pokemon) => {
    document.getElementById('info').innerHTML = `<h4><span class="badge">${pokemon.id}</span></h4><h1>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>`
}

const getPokemon = async () => {
    if(numbers.length != 898){
        const id = random();
        const pokemon = await callPokeapi(id);
        setSprite(pokemon.sprites.front_default);
        updateInfo(pokemon);
    }else
        clearInterval(getPokemon);
}

const callPokeapi = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    return await response.json(); 
}

const setSprite = (sprite) => {
    document.getElementById("pokemon").src = sprite;
}

setInterval(getPokemon, 30000);
window.onload = async function() {
    getPokemon();
};