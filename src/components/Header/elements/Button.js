import pokeball2 from "../../../Img/pokeball2.png";
export function ButtonPokeBall() {
  return (
    <button
      className={`w-20 h-20 rounded-full
     cursor-help  animate-spin-slow
  `}
    >
      <img src={pokeball2} alt={`stn`} />
    </button>
  );
}
