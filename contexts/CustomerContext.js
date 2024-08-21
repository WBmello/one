import React, { createContext, useState } from 'react';

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
    const [customers, setCustomers] = useState([]);

    const addCustomer = (customer) => {
        setCustomers([...customers, customer]);
    };

    const deleteCustomer = (name) => {
        setCustomers(customers.filter(customer => customer.name !== name));
    };

    return (
        <CustomerContext.Provider value={{ customers, addCustomer, deleteCustomer }}>
            {children}
        </CustomerContext.Provider>
    );
};
