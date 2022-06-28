import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4xxfjwx0sph01una5moavd1/master',
    cache: new InMemoryCache()
})