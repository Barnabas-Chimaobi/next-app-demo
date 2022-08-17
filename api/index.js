import { ApolloClient, ApolloLink, InMemoryCache, HttpLink, ApolloProvider } from "@apollo/client";
import { BaseUrl } from "./baserurl";
import { setContext } from "@apollo/client/link/context";


const authLink = setContext(async (req, { headers }) => {
    const token = await AsyncStorage.getItem('token');
    // console.log(typeof JSON.parse(token), 'token=====ssssss=====')
    return {
      ...headers,
      headers: {
        authorization: token ? JSON.parse(token) : null,
      },
    };
  });

  const httpLink = new HttpLink({
    uri: BaseUrl
  });

  const link = authLink.concat(httpLink);
  
  export const client = new ApolloClient({
    // link,
    cache: new InMemoryCache(),
    defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
  });