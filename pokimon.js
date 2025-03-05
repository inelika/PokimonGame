var data = {
  "abilities": [
    {
      "ability": {
        "name": "chlorophyll",
        "url": "https://pokeapi.co/api/v2/ability/34/"
      },
      "is_hidden": true,
      "slot": 3
    },
    {
      "ability": {
        "name": "overgrow",
        "url": "https://pokeapi.co/api/v2/ability/65/"
      },
      "is_hidden": false,
      "slot": 1
    }
  ],
  "base_experience": 64,
  "forms": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
    }
  ],
  "height": 7,
  "id": 1,
  "is_default": true,
  "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
  "moves": [
    {
      "move": {
        "name": "razor-wind",
        "url": "https://pokeapi.co/api/v2/move/13/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/"
          }
        },
        {
          "level_learned_at": 0,
          "move_learn_method": {
            "name": "egg",
            "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
          },
          "version_group": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/"
          }
        }
      ]
    }
    ],

  "name": "bulbasaur",
  "order": 1,
  "species": {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
  },
  "sprites": {
    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    "back_female": null,
    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
    "back_shiny_female": null,
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "front_female": null,
    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
    "front_shiny_female": null
  },
  "stats": [
    {
      "base_stat": 45,
      "effort": 0,
      "stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/stat/6/"
      }
    },
    {
      "base_stat": 65,
      "effort": 0,
      "stat": {
        "name": "special-defense",
        "url": "https://pokeapi.co/api/v2/stat/5/"
      }
    },
    {
      "base_stat": 65,
      "effort": 1,
      "stat": {
        "name": "special-attack",
        "url": "https://pokeapi.co/api/v2/stat/4/"
      }
    },
    {
      "base_stat": 49,
      "effort": 0,
      "stat": {
        "name": "defense",
        "url": "https://pokeapi.co/api/v2/stat/3/"
      }
    },
    {
      "base_stat": 49,
      "effort": 0,
      "stat": {
        "name": "attack",
        "url": "https://pokeapi.co/api/v2/stat/2/"
      }
    },
    {
      "base_stat": 45,
      "effort": 0,
      "stat": {
        "name": "hp",
        "url": "https://pokeapi.co/api/v2/stat/1/"
      }
    }
  ],
  "types": [
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    },
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ],
  "weight": 69
}



//1
let height = data.height;
let weight = data.weight;
let resultStep1 = "Height:" + data.height.toString() + ", Weight:" + data.weight.toString();
console.log(resultStep1);


//2
let heightMeters = parseInt(height); 
let weightKg =parseInt(weight);
let bmi = weight /(height ** 2);
console.log("BMI: " + bmi.toFixed(3));


//3
let pokemonName = data.name;
console.log(pokemonName)
let nameLength = pokemonName.length;
let upperCaseName = pokemonName.toUpperCase();
console.log("Uppercase Name:" + upperCaseName, "Length:" +nameLength );


//4
let nameBulba = pokemonName.includes("bulba");
console.log(nameBulba);


//5
let firstTwo = pokemonName.slice(0, 2);
let lastTwo = pokemonName.slice(-2);
let newName = firstTwo + lastTwo;
console.log(newName);


//6
let namesArray = [newName];
console.log(namesArray);


//7
let typesss = data.types;
console.log(typesss[0].type.name);
console.log(typesss[1].type.name);


//8
console.log(Array.isArray(data.abilities)); 


//9
let lastAbility = data.abilities[data.abilities.length - 1].ability.name;
console.log("Last Ability: " + lastAbility);

//10
data.abilities.push(lastAbility);
console.log(data.abilities);


//11
let baseStats = [];
for (let i = 0; i < data.stats.length; i++) {
    baseStats.push(data.stats[i].base_stat);
}
console.log("Base Stats:", baseStats);


//12
let filteredStats = [];
for (let i = 0; i < baseStats.length; i++) {
    if (baseStats[i] > 47) {
        filteredStats.push(baseStats[i]);
    }
}
console.log("Filtered Stats:", filteredStats);;


//13
let revStats = baseStats.reverse().join(", ");
console.log(revStats);


//14
let shallowCopy = baseStats.slice(0, 2);
console.log(shallowCopy);


//15
baseStats[0] = "Yenlik";
console.log(baseStats);


//16 
document.getElementById("pokemonImage").src = data.sprites.front_default;
document.getElementById("pokemonInfo").innerHTML = 
    `Name: ${data.name}, Height: ${heightMeters}, Weight: ${weightKg}`;


