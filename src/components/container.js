import styled from "styled-components"
import * as variable from './variables'
const Container = styled.div`
  max-width: ${variable.desktopWidth};
  display:block;
  padding-left:${variable.padding};
  padding-right:${variable.padding};
  margin:0 auto;
  @media (max-width: ${variable.tabletWidth}) {
    max-width: ${variable.tabletWidth};
  }
  @media (max-width: ${variable.mobileWidth}) {
    max-width: ${variable.mobileWidth};
    padding:0px 15px;
  }
`;

export default Container