import {
  ApolloProvider as BaseApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client'
import { ReactNode } from 'react'

const apolloClient = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app/',
  cache: new InMemoryCache(),
})

type Props = {
  children: ReactNode
}

export const ApolloProvider = ({ children }: Props) => (
  <BaseApolloProvider client={apolloClient}>{children}</BaseApolloProvider>
)
