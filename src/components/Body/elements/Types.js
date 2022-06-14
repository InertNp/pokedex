export function Types({ data }) {
  return <TypeContainer data={data} color={`bg-${data.type}`} />;
}
const TypeContainer = ({ data, color }) => {
  return (
    <p
      className={`${color}  text-black rounded-md font-light w-8/12 h-6 flex justify-center items-center capitalize`}
    >
      {data.type}
    </p>
  );
};
