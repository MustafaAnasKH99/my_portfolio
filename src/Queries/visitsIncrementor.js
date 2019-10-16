import { gql } from 'apollo-boost'

const increment = gql`
    mutation{
        updateCounter{
            number
        }
    }
`

export { increment }