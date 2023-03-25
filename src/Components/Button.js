import { useEffect, useContext } from "react";
import { Global } from '../App';
import '../css/Button.css'
const Button = () => {
  const { UserAnswer, setUserAnswer, Answer, setAnswer, Selected, setSelected, Log, setLog, Count, setCount, setEnd, setWin } = useContext(Global);

  const items = [];

  useEffect(() => {
    generateAnswers();
  }, []);

  const generateAnswers = () => {
    let answer = [];
    while (answer.length < 4) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (!answer.includes(randomNumber)) {
        answer.push(randomNumber);
      }
    }
    setAnswer(answer);
  };

  for (let i = 0; i < 10; i++) {
    items.push(<li key={i}><input type="button" value={i} onClick={() => submit(i, Selected)}></input></li>)
  }
  function submit(i, selected) {
    setUserAnswer(
      UserAnswer.map((num, index) => (index === selected ? i : num))
    )
    if (Selected < 3) {
      const next = Selected + 1;
      setSelected(next);
    }
  }
  function calc(UserAnswer, Answer) {
    let hit_count = 0;
    let brow_count = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (i === j && UserAnswer[i] === Answer[j]) {
          hit_count++;
        } else if (UserAnswer[i] === Answer[j]) {
          brow_count++;
        }
      }
    }
    if (hit_count === 4) {
      setWin(true);
      setEnd(true);
    }
    const currentCount = [...Count];
    const newCount = [hit_count, brow_count];
    if (Count[0].length === 0) {
      setCount([newCount]);
    } else {
      currentCount.push(newCount);
      setCount(currentCount);
    }
    const currentLog = [...Log];
    const newLog = UserAnswer;
    if (Log[0].length === 0) {
      setLog([newLog]);
    } else {
      currentLog.push(newLog);
      setLog(currentLog);
      if (Log.length === 6) {
        setEnd(true);
      }
    }
  }
  function clear() {
    setUserAnswer([0, 0, 0, 0]);
    setSelected(0);
  }
  return (
    <ul className='Buttons'>
      {items}
      <li>
        <input type="button" value="Clear" onClick={() => { clear() }}></input>
      </li>
      <li>
        <input type="button" value="Enter" onClick={() => calc(UserAnswer, Answer)}></input>
      </li>
    </ul>
  );
}

export default Button;