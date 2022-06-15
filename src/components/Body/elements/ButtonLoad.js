export function ButtonLoad({css , value ,onclick}) {
  return (
    <button className={css} onClick={onclick}>{value}</button>
  );
}
