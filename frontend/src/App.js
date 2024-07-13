import React, { useEffect, useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

let DUMMY_EXPENSE=[];


const App=()=>{
        const [expenses,setExpenses] = useState(DUMMY_EXPENSE);

        
        function fetchData(){

            fetch('http://localhost:8082/getExpense').then(
                response => {
                    return response.json();
                }
            ).then(
                data => {
                setExpenses(data);
                    // console.log(data);
                }
            );
        };
        
            useEffect(()=>{
                fetchData();
            },[]);


            //const deleteData =(expense)=> {
              
            //    // Make the HTTP Delete call using fetch api
            //    fetch('http://localhost:8082/delete/{Id}', {
            //     method: 'DELETE', // Method itself
            //     headers: {
            //      'Content-type': 'application/json'
            //     }
            //    }).then(
            //       response=>{
            //         return response.json();
            //       }
            //    );
            // };  
        

        const addExpenseHandler = (expense) =>{
        // const  updatedExpenses=[expense,...expenses];
        //     setExpenses(updatedExpenses);
        fetch('http://localhost:8082/addExpense',{
            method: 'POST',
            body:JSON.stringify(expense),
            headers: {
                'content-Type' : 'application/json'
            }
        }).then(
            response =>{
                fetchData();
            }
        );
        };



    return ( 
    <div>
        <NewExpense onAddExpense={ addExpenseHandler } />
        <Expenses item={expenses} />
       
    </div>
    )
}

export default App;