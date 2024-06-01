
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const listCurrency = [
    {title: "$ Dollar", value: "$"},
    {title: "£ Pound", value: "£"},
    {title: "€ Euro", value: "€"},
    {title: "₹ Ruppee", value: "₹"}
]
const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency)
    const handleSetCurrency = (item) => {
        setNewCurrency(item)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: item
        })
    }


    return (
        <div className='alert alert-primary'>
            <div class="dropdown">
  <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <spa class="fw-bold">Currency</spa>&nbsp;({
        newCurrency.title
    })
  </button>
  <ul class="dropdown-menu bg-success">
    {
        listCurrency.map(item => (
            <li><button class="btn btn-success dropdown-item" onClick={() => handleSetCurrency(item)}>{item.title}</button></li>
    
        ))
    }
  </ul>
</div>
        </div>      
    );
};
export default Currency;