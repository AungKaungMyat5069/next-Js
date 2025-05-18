import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://localhost:8080/graphql",
    // uri needs to change to the server URL
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;