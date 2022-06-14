export function PageChange({ offset, clickedNext, clickedPrev }) {
  return (
    <div className={`flex flex-row justify-center w-full`}>
      {offset >= 0 ? (
        <button
          className={`w-1/2 h-full bg-gray-700 hover:bg-slate-600 disabled`}
          onClick={clickedNext}
        >
          Prev
        </button>
      ) : (
        <button
          className={`w-1/2 h-full bg-gray-700 hover:bg-slate-600`}
          onClick={clickedNext}
        >
          Prev
        </button>
      )}
      <button
        className=" w-1/2 h-full bg-gray-900 hover:bg-slate-600"
        onClick={clickedPrev}
      >
        Next
      </button>
    </div>
  );
}
