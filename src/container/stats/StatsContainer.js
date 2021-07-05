import React from 'react'
import StatsItem from '../../StatsItem'
import uniqCustomers from '../../helper'

const StatsContainer = (props) => {
    const { customers } = props

    const amount = (customers) => {
        let result = 0
        customers.forEach((customer) => {
            result += customer.Amount
        })
        return result
    }
    return (
        <div>
            <h1>Stats Container</h1>
            <StatsItem value = { amount(customers) } name="Total Amount"/>
            <StatsItem value = { customers.length } name="Order"/>
            <StatsItem value = { uniqCustomers(customers).length } name="Customers"/>
        </div>
    )
}

export default StatsContainer
