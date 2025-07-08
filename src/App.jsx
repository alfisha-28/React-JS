import './App.css'
import LudoBoard from "./LudoBoard.jsx";
import ProductTab from './ProductTab.jsx';
import Msgbox from './MsgBox.jsx';
import Button from './Button.jsx';
import Form from './Form.jsx';
import Counter from './Counter.jsx';
import LikeButton from './LikeButton.jsx';
import ToDoList from './ToDoList.jsx';
import Lottery from './Lottery.jsx';
import Ticket from './Ticket.jsx';

function App() {
  return (
    <>
      <div>
        <Ticket ticket={[0, 1, 2]}/>
        <Ticket ticket={[0, 1, 2, 3, 4, 5, 6]}/>
        {/* <Lottery/> */}
        {/* <ToDoList/> */}
        {/* <LudoBoard/> */}
        {/* <ProductTab/> */}
        {/* <Msgbox userName="Alfisha" textColor="blue"/> */}
        {/* <Button/> */}
        {/* <Form/> */}
        {/* <Counter/> */}
        {/* <LikeButton/> */}
      </div>

    </>
  );
}

export default App;
