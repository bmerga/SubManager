import React, {useContext} from 'react'
import { FooterContext } from './FooterContext'

function Footer() {
    const {footerContent} = useContext(FooterContext)
  return (
    <footer>
      {footerContent}
    </footer>
  )
}

export default Footer
