import { gql } from 'apollo-boost'

const increment = gql`
    mutation{
        updateCounter{
            number
        }
    }
`

const getTime = gql`
    mutation{
        createTime{
            time
        }
    }
`

export { increment, getTime }