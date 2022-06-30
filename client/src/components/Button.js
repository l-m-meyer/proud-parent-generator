
export default function Button(props) {
  const { queryServer } = props;
  return (
    <button
      className="btn"
      onClick={queryServer}
    >
      {props.children}
    </button>
  );
};