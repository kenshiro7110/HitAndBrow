import { useContext } from 'react';
import { Global } from '../App';

const Logs = () => {
  const { Log,Count } = useContext(Global);
  let Loglists = [];
  for (let i = 0; i < Log.length; i++) {
    if(Log[0].length!==0)
    Loglists.push(<li>{i + 1}回目 {Log[i]}: {Count[i][0]}hit / {Count[i][1]}brow</li>);
  }
  return (
    <>
      <div className='logs-title'>Logs</div>
      <ul className='loglists'>
        {Loglists}
      </ul>
    </>
  );
}
export default Logs;