import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@/apollo/client'
import Layout from "@/components/Layout";

import '@/styles/globals.scss'


export default function App({ Component, pageProps }) {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <ApolloProvider client={apolloClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    )
}
