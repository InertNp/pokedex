import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PokemonContainer } from "./elements/PokemonContainer";
import { pokemon } from "../../data/data";
import { fetchPokemonData } from "../../data/data";
import { useEffect, useState } from "react";
import { Loadmore } from "./elements/Loadmore";

export function Main() {
  const [pokemonData, setPokemonData] = useState(pokemon);
  const [offset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPokemonData(offset, limit).then((response) => {
      setTimeout(() => {
        setPokemonData(response);
        setLoading(false);
      }, 2000);
    });
  }, [loading]);

  //functions
  function handleLoadMore(e) {
    setLimit(limit + 10);
    setLoading(true);
  }

  if (pokemonData[0].dataType === "fake") {
    return (
      <main className="container">
        <div className=" flex  justify-center mt-20 ">
          <LoadingAnimation />
        </div>
      </main>
    );
  } else {
    return (
      <main className="container">
        <div className=" flex flex-col items-center mt-5">
          {pokemonData.map((e) => {
            return (
              <PokemonContainer
                data={e}
                key={e.id}
                clicked={(a) => {
                  console.log(a);
                }}
              />
            );
          })}
        </div>
        <Loadmore loading={loading} loadmoreclick={handleLoadMore} />
      </main>
    );
  }
}
function LoadingAnimation() {
  return (
    <div>
      <FontAwesomeIcon
        icon={faCircleNotch}
        className={`animate-spin h-48 text-slate-500`}
      />
    </div>
  );
}
