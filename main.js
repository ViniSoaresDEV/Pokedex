const btn = document.querySelector("button#btn");
const input = document.querySelector("input#input");
const img = document.querySelector("img#img");
const backgroundImageColor = document.querySelector("div#backgroundImage");
const backgroundTypeColor = document.querySelector("div.pokemonType");
const pokemonName = document.querySelector("h3#pokemonName");
const pokemonType = document.querySelector("p#pokemonType");
const pokemonType2 = document.querySelector("p#pokemonType2");
const pokemonCode = document.querySelector("p#pokemonCode");
const pokemonHP = document.querySelector("p#pokemonHpStatus");
const pokemonAttack = document.querySelector("p#pokemonAttackStatus");
const pokemonDefense = document.querySelector("p#pokemonDefenseStatus");

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchPokemon(input.value.toLowerCase());
    console.log(e);
  }
});

btn.addEventListener("click", () => {
  if (input.value === "" || input.value === null)
    alert("Digite o nome do Pokémon.");

  searchPokemon(input.value.toLowerCase());
});

async function searchPokemon(name) {
  try {
    const urlPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}/`
    );

    const responsePokemon = await urlPokemon.json();
    showPokemon(responsePokemon);
    changeBackground(responsePokemon);
  } catch (error) {
    pokemonName.innerHTML = "Pokémon não encontrado";
    console.log("Pokémon não encontrado", error);
  }
}

function showPokemon(pokemon) {
  img.src = pokemon.sprites.front_default;
  pokemonName.innerHTML = pokemon.name.toUpperCase();
  pokemonType.innerHTML = pokemon.types[0].type.name;
  pokemon.types.length > 1 ? pokemonType2.innerHTML = pokemon.types[1].type.name : pokemonType2.innerHTML = '-'; 
  pokemonCode.innerHTML = `#${pokemon.id}`;
  pokemonHP.innerHTML = pokemon.stats[0].base_stat;
  pokemonAttack.innerHTML = pokemon.stats[1].base_stat;
  pokemonDefense.innerHTML = pokemon.stats[2].base_stat;
}

function changeBackground(pokemon) {
  const type = pokemon.types[0].type.name;

  //RESET CLASS

  resetClass(backgroundImageColor);
  resetClass(backgroundTypeColor);

  //ADD CLASS
  backgroundImageColor.classList.add(`type-${type}`);
  backgroundTypeColor.classList.add(`type-${type}`);
}

//reset class function
function resetClass(sendClass) {
  sendClass.classList.forEach((cls) => {
    if (cls.startsWith("type-")) {
      sendClass.classList.remove(cls);
    }
  });
}
