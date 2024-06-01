import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'DECREASE_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency.value}&nbsp;{props.cost}</td>
            <td><button className='increase expense-btn' onClick={event=> increaseAllocation(props.name)}><FaPlus/></button></td>
            <td><button className='decrease expense-btn' onClick={event=> decreaseAllocation(props.name)}><FaMinus /></button></td>
            <td>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;
