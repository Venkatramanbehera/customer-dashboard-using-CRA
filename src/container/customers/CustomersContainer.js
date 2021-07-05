import React , { useState } from 'react'
import CustomerTable from '../../CustomerTable'
import Search from '../../Search'
import uniqCustomers from '../../helper'

const CustomersContainer = ( props ) => {

    const [ term, setTerm ] = useState('')
    const { customers } = props

    const handleSearch = (e) => {
        const data = e.target.value 
        setTerm(data)
    }

    const uniq = uniqCustomers(customers)

    const filterCustomer = () => {
        const result = uniq.filter((u) => {
            return u.Name.toLowerCase().includes(term) || u.Phone.toString().includes(term)
        })
        return result
    }


    return (
        <div>
            <h1>Listing Customers - { uniq.length }</h1>
            <Search handleSearch={ handleSearch } term={ term }/>
            <CustomerTable customers={ filterCustomer() } />
        </div>
    )
}

export default CustomersContainer
