import React from 'react';
import './companies.css';
import CompanyDetails from './companyDetails';
import Customers from './customers';

const Companies = () => {
    return (
        <div className='businesses'>
           <CompanyDetails />
           <Customers />
        </div>
    )
}

export default Companies
