import React from 'react'
import FooterElement from '../styles/FooterElement'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return <FooterElement> &copy; My Blog {new Date().getFullYear()}</FooterElement>
}

export default Footer
