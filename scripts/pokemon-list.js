const fs = require('fs');
const jsonData = require('../src/data/pokemon-types.json')
const slugs = require('../src/utils/slugs')

const filterOut = [
    "Shadow",
    "Purified",
    "Fall_2019",
    "Adventure_hat_2020",
    "Copy_2019",
    "Costume_2020",
    "Vs_2019",
    "Winter_2020",
    "2020",
    "2021"
]

const replace = {
    A: 'Armored'
}

const pokemonList = []

let id = 0;

for (const key in jsonData) {
    if (Object.hasOwnProperty.call(jsonData, key)) {
        const pokemon = jsonData[key];
        if (!filterOut.includes(pokemon.form)) {
            let form = (Object.keys(replace).includes(pokemon.form) ? replace[pokemon.form] : pokemon.form).replace('_', ' ')
            pokemon.id = id
            pokemon.label = `${pokemon.pokemon_name}${form !== "Normal" ? ` (${form})` : ''}`
            pokemon.slug = slugs.labelToSlug(pokemon.label)
            id++
            pokemonList.push(pokemon)
        }
    }
}

let data = JSON.stringify(pokemonList);

fs.writeFileSync('../src/data/new-pokemon-list.json', data);

console.log("Script complete")
