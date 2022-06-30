import './Quote.css';

export default function Quote(props) {

  const { phrase } = props;
  return (
    <h3>{props.children}</h3>
  );
};