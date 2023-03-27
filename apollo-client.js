import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
        graphqlErrors.map(({ message }) => {
            alert(`Graphql error ${message}`);
        });
    }
});

const link = from([
    errorLink,
    new HttpLink({
        uri: process.env.NEXT_PUBLIC_CONTENT_API_ENDPOINT,
    }),
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});

export default client;