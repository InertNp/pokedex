import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonLoad } from "./ButtonLoad";

export function Loadmore({ loading, loadmoreclick }) {
  if (loading === true) {
    return (
      <div className="container h-20 w-full  justify-center flex items-center">
        {/* <ButtonLoad value={`Load more`}  css={`rounded bg-slate-500 w-24 h-10`}/> */}
        <LoadingAnimation />
      </div>
    );
  } else if (loading === false)
    return (
      <div className="container h-20 w-full  justify-center flex items-center">
        <ButtonLoad
          value={`Load more`}
          css={`rounded bg-slate-500 w-24 h-10`}
          onclick={loadmoreclick}
        />
        {/* <LoadingAnimation /> */}
      </div>
    );
}

function LoadingAnimation() {
  return (
    <div>
      <FontAwesomeIcon icon={faCircleNotch} className={`animate-spin h-10`} />
    </div>
  );
}
