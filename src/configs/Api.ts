
import {
    createHttpLink
} from "@apollo/client";

import { setContext } from '@apollo/client/link/context'

export const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
});
export const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
    }
});