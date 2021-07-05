import React from 'react'

const CustomerTable = (props) => {
    const { customers } = props
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map((customer,index) => {
                            return (
                                <tr key={ index  }>
                                    <td>{ index + 1 }</td>
                                    <td>{ customer.Name }</td>
                                    <td>{ customer.Phone }</td>
                                    <td>Details</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CustomerTable
