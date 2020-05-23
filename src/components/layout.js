import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import "./sass/layout.scss"
import styled from 'styled-components';

// const LandingTitleHeading = styled.h1`
//   ${{ ...scale(2.0) }};
//   margin-bottom: rhythm(1);
//   margin-top: 0;
// `

// const ContentTitleHeading = styled.h3`
//   font-family: Montserrat, sans-serif;
//   margin-top: 0;
// `

const SiteContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${rhythm(42)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  padding-top: ${rhythm(3)};
`

const Navigation = styled.nav`
  margin: 0 ${rhythm(4)};
  
  ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0; 
    text-indent: 0;
    list-style-type: none;

  li {
    text-decoration: none;
    font-size: ${rhythm(3/4)};
  }
`

// const Footer = styled.footer`
//   display: flex;
//   margin-top: ${rhythm(2)};
//   align-items: center;
//   text-align: center;
//   justify-content: center;
//   fontSize: rhythm(3 / 4)
// `

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let maxWidth
  
  if (location.pathname === rootPath) {
    maxWidth = rhythm(60)
  } else {
    maxWidth = rhythm(28)
  }
  return (
    <SiteContainer>
      <Navigation>
        <ul>
          <li>
            <Link style={{ boxShadow: `none` }} to={"/"}>
              CV
            </Link>
          </li>
          <li>
            <Link style={{ boxShadow: `none` }} to={"/reads/"}>
              Speaking
            </Link>
          </li>
          <li>
            <span style={{ boxShadow: `none`, color: `grey` }}>
              Publications
            </span>
          </li>
          <li>
            <Link style={{ boxShadow: `none` }} to={"/posts/"}>
              Blog
            </Link>
          </li>
          <li>
            <Link style={{ boxShadow: `none` }} to={"/contact/"}>
              Contact
            </Link>
          </li>
        </ul>
      </Navigation>
      {/* <header>{header}</header> */}
      <main style={{margin: `0 auto`}}>
      <div style={{maxWidth: maxWidth}}>
        {children}
        </div>
      </main>
      {/* <Footer>
          <a href="https://www.swac.umn.edu/directory/grad-students/hava-blair">
            Hava Blair - PhD Student
          </a>
          <span style={{marginLeft: `3rem`}}></span>
          <a href="https://www.swac.umn.edu/">
            University of Minnesota - Department of Soil, Water, and Climate
          </a>
      </Footer> */}
    </SiteContainer>
  )
}

export default Layout