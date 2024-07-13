import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses=(props)=>{
    return  <Card class="expenses">
                {
                        props.item.map(
                                expense=>(
                                        <ExpenseItem
                                        key={expense.expenseId}
                                        date={expense.date}
                                        title={expense.title}
                                        amount={expense.amount}/>
                        )
                        )
                }
        </Card>

}

export default Expenses;