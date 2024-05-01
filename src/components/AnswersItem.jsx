// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

function ItemsList(props) {
  return (
    <ul>
      {props.timeSpent?.map((item) => (
        <li>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem(
  props
  //   {
  //   // Feel free to change this props names to what suits you best
  //   // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  //   // answerItem: { username, colour, timeSpent, review },
  // }
) {
  console.log(props);
  return (
    <li>
      <article className="answer">
        <h3>{props.username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{props.colour}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList {...props} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{props.review}</span>
        </p>
      </article>
    </li>
  );
}
