import { useState } from "react";
import AnswersList from "./AnswersList";

const radioInputs = {
  "color-one": false,
  "color-two": false,
  "color-three": false,
  "color-four": false,
};

const checkboxs = {
  swimming: false,
  bathing: false,
  chatting: false,
  noTime: false,
};

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [answersList, setAnswersList] = useState([]);
  const [userName, setUserName] = useState("");
  const [colour, setColour] = useState("");
  const [timeSpent, setTimeSpent] = useState([]);
  const [review, setReview] = useState("");
  const [email, setEmail] = useState("");
  const [isSelected, setIsSelected] = useState({ ...radioInputs });
  const [isChecked, setIsChecked] = useState({ ...checkboxs });

  function handleFormSubmit(event) {
    event.preventDefault();
    setAnswersList([
      ...answersList,
      {
        username: userName,
        colour: colour,
        timeSpent: timeSpent,
        review: review,
        email: email,
      },
    ]);
    setUserName("");
    setColour("");
    setTimeSpent([]);
    setReview("");
    setEmail("");
    setIsSelected({ ...radioInputs });
    setIsChecked({ ...checkboxs });
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answersList={answersList} />
      </section>
      <section className="survey__form">
        {/* a form should be here */}
        <form className="form" onSubmit={handleFormSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/* <!-- Radio inputs go here --> */}
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={() => {
                    setColour(1);
                    setIsSelected({ ...radioInputs, ["color-one"]: true });
                  }}
                  checked={isSelected["color-one"]}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={() => {
                    setColour(2);
                    setIsSelected({ ...radioInputs, ["color-two"]: true });
                  }}
                  checked={isSelected["color-two"]}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  checked={isSelected["color-three"]}
                  onChange={() => {
                    setColour(3);
                    setIsSelected({ ...radioInputs, ["color-three"]: true });
                  }}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  checked={isSelected["color-four"]}
                  onChange={() => {
                    setColour(4);
                    setIsSelected({ ...radioInputs, ["color-four"]: true });
                  }}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/* <!-- checkboxes go here --> */}
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    checked={isChecked.swimming}
                    onChange={() => {
                      if (!timeSpent.includes("swimming")) {
                        setTimeSpent([...timeSpent, "swimming"]);
                      }

                      setIsChecked({
                        ...isChecked,
                        swimming: !isChecked.swimming,
                      });
                    }}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="bathing"
                    checked={isChecked.bathing}
                    onChange={() => {
                      if (!timeSpent.includes("bathing")) {
                        setTimeSpent([...timeSpent, "sbathing"]);
                      }

                      setIsChecked({
                        ...isChecked,
                        bathing: !isChecked.bathing,
                      });
                    }}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    checked={isChecked.chatting}
                    onChange={() => {
                      if (!timeSpent.includes("chatting")) {
                        setTimeSpent([...timeSpent, "chatting"]);
                      }

                      setIsChecked({
                        ...isChecked,
                        chatting: !isChecked.chatting,
                      });
                    }}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    checked={isChecked.noTime}
                    onChange={() => {
                      if (!timeSpent.includes("noTime")) {
                        setTimeSpent([...timeSpent, "noTime"]);
                      }
                      setIsChecked({ ...isChecked, noTime: !isChecked.noTime });
                    }}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Survey;
