// import pokeball1 from "../../Img/pokeball1.png";

import { ButtonPokeBall } from "./elements/Button";
import { HeaderText } from "./elements/HeaderText";
export function Header() {
  function handleClick() {
    console.log("done");
  }
  return (
    <header className="container bg-gray-700 h-24 flex flex-row cursor-pointer">
      <HeaderText />
      <div
        className="  flex justify-center items-center mr-2  "
        onClick={handleClick}
      >
        <ButtonPokeBall />
      </div>
    </header>
  );
}
