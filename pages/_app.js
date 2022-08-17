import Head from "next/head"
import Script from "next/script"
import { Navbar } from "../components/nav"
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink, ApolloProvider } from "@apollo/client";
import { client } from "../api";
// import { RestLink } from "apollo-link-rest";

function MyApp({ Component, pageProps }) {
  return (
    <>
  <Head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ilaro Poly</title>
    <link rel="stylesheet" href="css/index.css"/>
    <link rel="stylesheet" href="css/ilaroStyles.css" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
      crossOrigin="anonymous"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
      crossOrigin="anonymous"
    />
     <link rel="preconnect" href=" http://fonts.cdnfonts.com/css/gilroy-bold"
      />
  </Head>
    <ApolloProvider client={client}>
      <Navbar/>
      <Component {...pageProps} />
    </ApolloProvider>
         {/* FOOTER */}
  {/* <footer className="footer py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-12">
          <p className="copyright-text text-center">
            Copyright © 2019 Company Name . All rights reserved
          </p>
          <p className="copyright-text text-center">
            Designed by{" "}
            <a rel="nofollow" href="https://www.facebook.com/tooplate">
              Tooplate
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer> */}
   {/* <Script src="js/jquery-3.3.1.min.js"></Script>
    <Script src="js/popper.min.js"></Script>
    <Script src="js/bootstrap.min.js"></Script>
    <Script src="js/custom.js"></Script> */}

    </>
  )
}

export default MyApp
