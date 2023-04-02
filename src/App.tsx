import { useState } from "react";
import * as C from "./App.styled";
import { Item } from "./types/Itens";
import { ListItem } from "./components/Listitem";
import {AddArea} from './components/AddArea';


function App() {
  const [list,setLis]=useState<Item[]>([
    {id:1,name:'Compra pão',done:false},
    {id:2,name:'Fazer lista de compras',done:false},
    {id:3,name:'levar Doginho para passear',done:false},
    {id:4,name:'levar o gatinho para o banho',done:false}
  ]);
  const handleAddTask=(taskName:string)=>{
    let newlist =[...list];
    newlist.push(
      {id:list.length+1,
      name:taskName,
      done:false});
    setLis(newlist);
  }
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setLis(newList);
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header> Lista de Tarefaz </C.Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item,index)=>(
          <ListItem key={index} item={item} onChange={handleTaskChange}/>

        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
