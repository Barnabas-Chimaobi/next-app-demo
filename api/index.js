import { ApolloClient, ApolloLink, InMemoryCache, HttpLink, ApolloProvider } from "@apollo/client";
import { BaseUrl } from "./baserurl";
import { setContext } from "@apollo/client/link/context";


const authLink = setContext(async (req, { headers }) => {
    const token = localStorage.getItem('token');
    console.log(token, 'token=====ssssss=====')
    return {
      ...headers,
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
      },
    };
  });

  const httpLink = new HttpLink({
    uri: BaseUrl
  });

  const link = authLink.concat(httpLink);
  
  export const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
  });