import { useLocation } from 'react-router-dom';
import { NavLinkStyled } from './BackButton.styled';


// Створення кнопки повернення на попередню сторінку
// використовуючи "useLocation"!

export const BackButton = () => {
  const location = useLocation();
  return (
    <NavLinkStyled to={location?.state?.from ?? '/'} type="button">
      BACK
    </NavLinkStyled>
  );
};