import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


const ExpenseItem=(props)=>{
    // const[newTitle,setNewTitle]= useState("hi");
    // const [title, setTitle] = useState(props.title);

    // const clickHandler= ()=>{
    // setTitle(newTitle);
    // }
    // const changeHandler= (event) =>{
    //     setNewTitle(event.target.value);
    // }
    return(
        <Card className="expense-item">
          <ExpenseDate date={new Date( props.date)}/>
           <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            <button className='delete_item'>delete</button>
           </div>
           {/* <input type='text' onChange={ changeHandler}/>
           <button onClick= { clickHandler }>change Title</button> */ }
        </Card>
    );
}
export default ExpenseItem;