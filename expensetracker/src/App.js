// import logo from './logo.svg';
import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import NewExpense from "./components/NewExpense";

function App() {

  return (
    <div>
      <h2>Let's get started!</h2>
      <div className="expenses">
        < NewExpense />
      </div>
    </div>
  );
}

export default App;