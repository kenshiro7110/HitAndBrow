import './css/App.css';
import Input from './Components/Input';
import Button from './Components/Button';
import Logs from './Components/Logs';
import EndWindow from './Components/EndWindow';
import { createContext, useState, useEffect } from 'react';
export const Global = createContext();
function App() {
  const [UserAnswer, setUserAnswer] = useState([0, 0, 0, 0]);
  const [Answer, setAnswer] = useState([]);
  const [Selected, setSelected] = useState(0);
  const [Log, setLog] = useState([[]]);
  const [Count, setCount] = useState([[]]);
  const [End, setEnd] = useState(false);
  const [Win, setWin] = useState(false);
  const value = {
    UserAnswer,
    setUserAnswer,
    Answer,
    setAnswer,
    Selected,
    setSelected,
    Log,
    setLog,
    Count,
    setCount,
    End,
    setEnd,
    Win,
    setWin
  };
  return (
    <>
      <div className="App">
        <h1 className='title'>hit and blow</h1>
        <main className='main'>
          <Global.Provider value={value}>
            <EndWindow />
            <div className='left'>
              <Input />
              <Button />
            </div>
            <div className='right'>
              <Logs />
            </div>
          </Global.Provider>
        </main>
          <div className='rule'>
            <h2>ルール説明</h2>
            <p>
              1，ゲーム開始時に、コンピュータがランダムに4つの数字を選択します。数字は0から9までの整数です、重複はありません
              <br></br>
              <br></br>

              2，プレイヤーは、4つの数字のシーケンスを推測して、コンピュータが選んだ秘密のコードを当てます。
              <br></br>
              <br></br>

              3，推測した数字のシーケンスを提出すると、コンピュータはフィードバックを提供します。フィードバックには、正しい数字が正しい位置にある場合にhit、正しい数字が間違った位置にある場合にbrowが使用されます。
              <br></br>
              <br></br>

              4，プレイヤーは、提供されたフィードバックに基づいて、コンピュータが選んだ秘密のコードを当てるために、新しい数字のシーケンスを推測します。このプロセスを繰り返します。
              <br></br>
              <br></br>

              5，プレイヤーが正しい数字のシーケンスを提出し、フィードバックで4hitが表示された場合、ゲームは終了します。プレイヤーは勝利しました。
              <br></br>
              <br></br>

              6，プレイヤーが7回の推測を行っても正解を見つけられなかった場合、ゲームは終了します。プレイヤーは敗北しました。
              <br></br>
            </p>
          </div>
      </div>
    </>
  );
}

export default App;
