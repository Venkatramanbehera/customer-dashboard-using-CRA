import _ from 'lodash'

const uniqCustomers = ( customers ) => {
    const result = _.uniqBy( customers , 'Phone')
    return result
}

export default uniqCustomers