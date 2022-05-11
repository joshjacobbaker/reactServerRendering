import react from "react"
import ReactDOM from "react-dom"
import { useLocation } from "react-router-dom"
import CustomerPageModalOverlayStyled from "./ModalOverlayStyled"
import NavLinkStyled from "../../navLink/NavLink"
import { AnimatePresence } from "framer-motion"

const CustomerPageModalOverlay = (props) => {
  const { pathname } = useLocation()
  // return ReactDOM.createPortal(<CustomerPageModalOverlayStyled />, document.getElementById("modal"))
  return ReactDOM.createPortal(
    <CustomerPageModalOverlayStyled key="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <ul>
        <li>
          <NavLinkStyled to="landing">Landing</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="contact">Contact</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="signup">Signup</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="signin">Signin</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="stylists">Stylists</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="salon">Salon</NavLinkStyled>
        </li>
      </ul>
    </CustomerPageModalOverlayStyled>,
    document.getElementById("modalOverlay")
  )
}

export default CustomerPageModalOverlay
