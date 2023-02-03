import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'
// import './ExpenseFilter.css';
import './Expenses.css';
import { useState } from 'react';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');


  const filterChangeHandler = selecetedYear => {
    // console.log('expenses.js');
    // console.log(selecetedYear);
    setFilteredYear(selecetedYear);
  }

  return (
    <div> 
      <Card className="expenses">
        < ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        {props.items.map((expense) => {
          return < ExpenseItem 
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} 
          />
        })}
        
      </Card>
    </div>
  );
}

export default Expenses;