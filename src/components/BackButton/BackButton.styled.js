import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

//Стилізуємо REACT компонент NavLink!!!
export const NavLinkStyled = styled(NavLink)`
  text-align: center;
  font-size: 30px ;
  color: #fff;
  margin-bottom: 20px;
  display: block;
  padding: 10px;
  text-decoration: none;
  border: 1px solid transparent;
  background-color: lightpink;
  transition: all 250 linear;
  border-radius: 4px;
  &:hover {
    color: lightpink;
    background-color: #fff;
    border: 3px solid lightpink;
  }
`;
export const NavLinkNotFound = styled(NavLink)`
  width: 150px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  border: 1px solid transparent;
  background-color: lightpink;
  color: #fff;
  transition: all 250 linear;
  border-radius: 4px;
  font-size: 20px;
  &:hover {
    color: lightpink;
    background-color: #fff;
    border: 3px solid lightpink;
  }
`;

export const DivStyled = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
`;

export const TextStyled = styled.p`
  font-size: 30px;
  text-align: center;
`;