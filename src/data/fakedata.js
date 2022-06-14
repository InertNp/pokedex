import uuid from "react-uuid";
import egimg from "../Img/pokeball1.png";
export const pokemon = {
  id: uuid(),
  animate: "animate-pulse",
  name: "PokemonName",
  types: [
    {
      id: uuid(),
      type: "fire",
      color: "bg-red-700",
      text: "text-white",
    },
    {
      id: uuid(),
      type: "grass",
      color: "bg-green-700",
      text: "text-white",
    },
  ],
  maintype: {
    type: "fire",
    color: "bg-orange-400",
    text: "text-white",
  },
  img: egimg,
};
