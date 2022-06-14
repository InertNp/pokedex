// import { Loading } from "./elements/Loading";
import { PokemonContainer } from "./elements/PokemonContainer";
import { pokemon } from "../../data/data";
import { fetchPokemonData } from "../../data/data";
import { useEffect, useState } from "react";
import { PageChange } from "./elements/PageChange";
export function Main() {
  const [pokemonData, setPokemonData] = useState(pokemon);
  const [offset ,  setOffset] = useState(0)
  const [limit , setLimit] = useState(10) 
  useEffect(() => {
    fetchPokemonData(offset, limit).then((response) => {
      setTimeout(() => {
        setPokemonData(response);
      }, 100);
    });
  }, []);
  return (
    <main className="container">
      <div className=" flex flex-col items-center mt-5">
        {pokemonData.map((e) => {
          return <PokemonContainer data={e} key={e.id} />;
        })}
      </div>
      <div className="mt-10  container bg-gray-700 h-24 flex flex-row cursor-pointer">
       <PageChange  limit={limit} clickedNext={console.log("next")} clickedPrev={console.log('prev')}/>
      </div>
    </main>
  );
}
