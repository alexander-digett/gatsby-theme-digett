import React from "react";
import {Helmet} from "react-helmet";
import { StaticQuery, graphql } from 'gatsby'
import PageTransition from 'gatsby-v2-plugin-page-transitions';
import Footer from './footer'
import Header from './header'
import { Global, css } from "@emotion/core"
import * as variable from './variables.js'

const Layout = ({ children }) => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              logo
            }
          }
        }
      `}
      render={data => (
        <>
        <Helmet>
            <meta charSet="utf-8" />
        </Helmet>
          <main>
          <Global
            styles={css`
              body {
                margin:0px;
                a{
                  color:${variable.brand1};
                  text-decoration:none;
                }
              }
            `}
          />
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
            <Footer />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
          </main>
        </>
      )}
    />
  )
  
  export default Layout