import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://dummyjson.com/',
  cache: new InMemoryCache()
})