import styled from "styled-components";
type ContainerProps = {
  done: boolean;
}
export const Container = styled.div(({ done }: ContainerProps) => (
  `
display:flex;
background-color:#20212c;
padding:10px ;


border-radius:10px;
margin-bottom:10px;
align-items:center;
input{
  width:30px;
  height:30px;
  margin-right:10px;
  
  
}
label{
  color: #ccc;
  text-decoration:${done ? 'line-through' : 'initial'} ;
  
}
`
));