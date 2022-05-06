import react from "react"
import ReactDOM from "react-dom"
import { useLocation } from "react-router-dom"
import ModalBackdropStyled from "./ModalBackdropStyled"

const ModalOverlay = (props) => {
  const { pathname } = useLocation()
  // return ReactDOM.createPortal(<ModalBackdropStyled />, document.getElementById("modal"))
  return ReactDOM.createPortal(<ModalBackdropStyled initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={props.setShowMenu}></ModalBackdropStyled>, document.getElementById("modalBackdrop"))
}

export default ModalOverlay
