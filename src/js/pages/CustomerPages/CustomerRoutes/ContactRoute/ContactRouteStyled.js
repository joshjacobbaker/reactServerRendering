import styled, { css } from "styled-components"
import { motion } from "framer-motion"

const ContactRouteStyled = styled(motion.div)`
  @media ${(props) => props.theme.screenSize.desktop} {
  }

  @media ${(props) => props.theme.screenSize.laptop} {
  }

  @media ${(props) => props.theme.screenSize.mobileL} {
    height: 100%;
    width: 100vw;
    display: grid;
    align-items: center;
    justify-items: center;
    /* overflow-x: hidden; */
  }
`
export default ContactRouteStyled

export const ContactRouteDivStyled = styled(motion.div)`
  display: grid;
  justify-items: center;
  align-items: center;
  &:hover {
    background-color: #105b72c2;
  }
  ${({ theme }) => css`
    background: ${theme.backgroundColor};
  `}
  height: 70%;
  width: 80%;
  h1 {
    font-size: 1.8rem;
    text-align: center;
  }
  ul {
    display: grid;
    align-items: center;
    justify-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
  }

  margin-top: -20%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
