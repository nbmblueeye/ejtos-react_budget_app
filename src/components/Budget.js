import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        })
    }
   
    return (
    <div className='alert alert-secondary'>
        <span>Budget&nbsp;{currency.value}</span>&nbsp;
        <input type="number" step="10" value={newBudget} onChange={(e) => handleBudgetChange(e)}></input>
    </div>
    );
};
export default Budget;
