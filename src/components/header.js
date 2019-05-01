import React from 'react'
import { StaticQuery, Link } from "gatsby"
import styled from "styled-components"
import Container from './container'

const HeaderStyle = styled.header`
  width: 100%;
  box-shadow: 0px 1px 2px #ccc;
  .header-container{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .headerlogo{
    flex-basis:200px;
  }
  .headerlist{
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-basis:calc(50% - 200px);
    li{
      list-style:none;
    }
  }
  .logo{
    flex-basis:150px;
    border-bottom:none;
    img{
      width:100%;
      height:auto;
      display:flex;
      align-items:center;
    }
  }
  nav{
    flex-basis:calc(60% - 200px);
    display:flex;
    justify-content:flex-end;
  }
`;

const Header = () => (

    <StaticQuery
    query={graphql`
      query MenuQuery {
        site {
          siteMetadata {
              logo
            menuLinks{
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>

      <HeaderStyle>
      <Container className="header-container">
      <div className="headerlogo"><Link className="logo"to="/"><img src={data.site.siteMetadata.logo} alt="logo" /></Link></div>
      <ul className="headerlist">
        {data.site.siteMetadata.menuLinks.map((menuitem, index) =>(
          <li key={index}><Link to={menuitem.link}>{menuitem.name}</Link></li>
        ))}
      </ul>
      </Container>
      </HeaderStyle>
    </>
    )}
    />
  )
  
  
  export default Header
  