import axios from "axios";
import uuid from "react-uuid";
import egimg from "../Img/pokeball1.png";

export async function fetchPokemonData(a, b) {
  const offset = a;
  const limit = b;
  const fullDataArray = [];
  const getData = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );

  getData.data.results.map(async (sth) => {
    const config = {
      method: "get",
      url: sth.url,
    };
    const eachPokemon = await axios(config)
      .then((info) => {
        // console.log(asd.data.types);
        const pokemonDataArray = {
          id: info.data.id,
          animate: "animate-none",
          name: info.data.name,
          types: [],
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${info.data.id}.png`,
        };

        info.data.types.forEach((a) => {
          const pushElement = {
            id: uuid(),
            type: a.type.name,
          };
          pokemonDataArray.types.push(pushElement);
        });
        return pokemonDataArray;
      })
      .catch((err) => console.log(err));

    fullDataArray.push(eachPokemon);
  });

  return fullDataArray;
}

export const pokemon = [{
  id: uuid(),
  animate: "animate-pulse",
  name: "PokemonName",
  types: [
    {
      id: uuid(),
      type: "fire",
    },
    {
      id: uuid(),
      type: "grass",
    },
  ],
  img: egimg,
}];
