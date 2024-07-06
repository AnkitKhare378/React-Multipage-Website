import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'

const Header = () => {
  return (
    <MainHeader>
      <NavLink to='/'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfEreqVkbsh2aG5WjpdBKmsiWgq6CMepGow&usqp=CAU' alt='logo' className='logo' />  
      </NavLink>
      <Navbar/>
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .logo {
    height: auto;
    max-width: 30%;

  }
`;

export default Header