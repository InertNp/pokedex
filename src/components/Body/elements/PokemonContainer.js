import { Types } from "./Types";

export function PokemonContainer({ data }) {
  return <Example data={data} clicked={(a) => {console.log('st')}} />;
}

function Example({ data ,clicked}) {
  const sth = ` ${data.animate} bg-slate-700 hover:bg-slate-600 text-white shadow-lg `;
  return (
    <div
      className={` h-20 w-11/12 mt-5
      flex flex-row justify-start items-center ${sth}
      rounded-xl cursor-pointer
  `}
      onClick={()=>{'clicked'}}
    >
      {/* Image */}
      <div className=" w-1/5 m-2 flex items-center">
        <img
          alt="PokeImg"
          src={data.img}
          className={`h-16 w-16  overflow-hidden `}
        />
      </div>
      {/* Pokemon name */}
      <div
        className={`h-full w-2/4 flex flex-col items-center justify-center ${data.animate}`}
      >
        <p className={`font-sans text-2xl font-bold `}>{data.name}</p>
      </div>
      {/* types */}
      <div className=" h-full w-1/4">
        <div
          className={`flex flex-col h-full w-full justify-evenly items-center  ${data.animate}`}
        >
          {data.types.map((type) => {
            return <Types data={type} key={type.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
