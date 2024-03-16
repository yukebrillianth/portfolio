import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link1 = from([
  errorLink,
  new HttpLink({
    uri: process.env.NEXT_PUBLIC_CONTENT_API_ENDPOINT,
  }),
]);
const link2 = from([
  errorLink,
  new HttpLink({
    uri: process.env.NEXT_PUBLIC_BLOG_API_ENDPOINT,
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName == "blog",
    link2,
    link1
  ),
});

export default client;
