// import { Loading } from "./elements/Loading";
import { PokemonContainer } from "./elements/PokemonContainer";
import { pokemon } from "../../data/fakedata";
export function Main() {

  return (
    <main className="container">
      <div className=" flex flex-col items-center mt-5">
        <PokemonContainer data={pokemon}/>
      </div>
    </main>
  );
}
/*  <div className="flex  justify-center items-center h-full">
        <Loading />
      </div> */
