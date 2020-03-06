import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as vars from '../export'

const Wrapper = styled.div`
  width: 90%;
  max-width: 600px;
  min-height: 100vh;
  text-align: center;
  margin: 0 auto;
  padding-top: 50px;
  color: ${vars.colors.purple};
`
const ClientLogo = styled.a`
  display: none;
  margin-top: 100px;
  transition: transform .3s ease;
  will-change: transform;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
  }

  img {
    display: block;
    width: 150px;
    margin: 20px auto;
  }
`
const GoHome = styled(Link)`
  font-size: 22px;
  text-decoration: none;
  color: ${vars.colors.purple};
  transition: font-size .3s ease;
  will-change: font-size;

  @media (hover: hover) {
    &:hover {
      font-size: 24px;
    }
  }
`

const FOF = () => (
  <Wrapper>
    <h1>404</h1>
    <h2>PAGE NOT FOUND</h2>
    <GoHome to='/'>Go Back</GoHome>
    <br/>
    <ClientLogo href={vars.config.clienturl}><img src={vars.icons.clientLogo} alt={vars.config.altText}/></ClientLogo>
  </Wrapper>
)

export default FOF
