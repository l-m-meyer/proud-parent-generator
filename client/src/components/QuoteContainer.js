import Quote from "./Quote";
import Button from "./Button";
import './QuoteContainer.css';

export default function QuoteContainer(props) {
  const { phrase, queryServer } = props;

  return (
    <article>
      <Quote>{phrase}</Quote>
      <Button
        queryServer={queryServer}
      >
        be kind to me
      </Button>
    </article>
  )
}