const btn = document.querySelector("button#btn");
const input = document.querySelector("input#input");
const img = document.querySelector("img#img");
const backgroundImageColor = document.querySelector("div#backgroundImage");
const backgroundTypeColor = document.querySelector("div.pokemonType");
const pokemonName = document.querySelector("h3#pokemonName");
const pokemonType = document.querySelector("p#pokemonType");
const pokemonType2 = document.querySelector("p#pokemonType2");
const pokemonCode = document.querySelector("p#pokemonCode");
const pokemonHP = document.querySelector("span#pokemonHpStatus");
const pokemonAttack = document.querySelector("span#pokemonAttackStatus");
const pokemonDefense = document.querySelector("span#pokemonDefenseStatus");
const defenseFillBar = document.querySelector("div#defense-fill");
const attackFillBar = document.querySelector("div#attack-fill");
const hpFillBar = document.querySelector("div#hp-fill");

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchPokemon(input.value.toLowerCase());
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
  pokemon.types.length > 1
    ? (pokemonType2.innerHTML = pokemon.types[1].type.name)
    : (pokemonType2.innerHTML = "-");
  pokemonCode.innerHTML = `#${pokemon.id}`;
  const hpStatus = pokemon.stats[0].base_stat;
  const attackStatus = pokemon.stats[1].base_stat;
  const defenseStatus = pokemon.stats[2].base_stat;
  statusBarChange(hpStatus, attackStatus, defenseStatus);
}

function statusBarChange(hp, attack, defense) {
  const hpWidth = Number(hp);
  const attackWidth = Number(attack);
  const defenseWidth = Number(defense);

  hpWidth > 100
    ? (hpFillBar.style.width = "100%")
    : (hpFillBar.style.width = hpWidth + "%");
  attackWidth > 100
    ? (attackFillBar.style.width = "100%")
    : (attackFillBar.style.width = attackWidth + "%");
  defenseWidth > 100
    ? (defenseFillBar.style.width = "100%")
    : (defenseFillBar.style.width = defenseWidth + "%");
  pokemonHP.innerHTML = hp;
  pokemonAttack.innerHTML = attack;
  pokemonDefense.innerHTML = defense;
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
