import React from 'react'
import { Container } from '../styles/Containers'
import HeaderElement from '../styles/HeaderElement'
import AppLink from './AppLink'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderElement>
      <Container>
        <AppLink href="/" label="My Blog"></AppLink>
        <nav>
          <AppLink href="/posts/new" label="New Post"></AppLink>
        </nav>
      </Container>
    </HeaderElement>
  )
}

export default Header
