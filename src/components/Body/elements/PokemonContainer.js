import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { pokemon } from "../../../data/fakedata";

export function PokemonContainer() {
  const handleClicked = () => {
    console.log("clicked");
  };
  return <Example data={pokemon} clicked={handleClicked} />;
}

function Example({ data, clicked }) {
  const sth = `${data.maintype.color} ${data.maintype.text} `;
  return (
    <div
      className={` h-20 w-11/12 mt-5
      flex flex-row justify-start items-center ${sth}
  `}
      onClick={clicked}
    >
      <div className=" rounded-full h-16 w-16 m-2 flex items-center">
        <img alt="PokeImg" src={data.img} />
      </div>
      <div
        className={`h-full w-3/5 flex flex-col items-center justify-center ${data.animate}`}
      >
        <p className={`font-sans text-2xl font-bold `}>{data.name}</p>
      </div>

      <div className=" h-full w-1/5 ">
        <div className={`flex flex-row justify-around mt-2 ${data.animate}`}>
          {data.types.map((type) => {
            return (
              <p
                className={`${type.color} ${type.text} 
                  rounded-md font-thin h-6 w-10 flex justify-center items-center capitalize
                  `}
                key={type.id}
              >
                {type.type}
              </p>
            );
          })}

          {/* <p>type2</p> */}
        </div>
        <button className={`w-full  `}>
          <FontAwesomeIcon icon={faRightLong} className={` w-10 h-10`} />
        </button>
      </div>
    </div>
  );
}
