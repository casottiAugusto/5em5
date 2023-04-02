import { useState ,KeyboardEvent} from 'react';
import * as C from './style';

type Props={
  onEnter:(taskName:string)=>void
}

export const AddArea =({onEnter}:Props)=>{
  const[inputText,setInptText]=useState('');
  const handleKeyUp=(e:KeyboardEvent)=>{
    if (e.code === 'Enter'  && inputText!== '') {
      onEnter(inputText);
      setInptText('');
      
    }

  }
  return(
    <C.Container>
      <div className='image'>➕</div>
      <input type="text" 
      placeholder='Adicione uma tarefa'
      value={inputText}
      onChange={e=>setInptText(e.target.value)}
      onKeyUp={handleKeyUp}
       />
    </C.Container>
  );
};