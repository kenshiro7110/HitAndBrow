import { useContext } from "react";
import { Global } from '../App';
import classNames from 'classnames';
import '../css/EndWindow.css'
const EndWindow = () => {
  const { Answer, End, Win } = useContext(Global);
  function handleClick() {
    window.location.reload();
  }
  return (
    <>
      <div className={classNames('end', { active: End })}>
        {Win ? <p className="win">正解！</p> :
          <>
            <p className="lose">GAMEOVER</p>
            <p>答えは{Answer}</p>
          </>}
        <button onClick={handleClick}>
          もう一度
        </button>
      </div>
    </>
  );
}
export default EndWindow;