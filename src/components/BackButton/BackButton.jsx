import { useLocation } from 'react-router-dom';
import { NavLinkStyled } from './BackButton.styled';


// Повернення на попередню сторінку
export const BackButton = () => {
  const location = useLocation();

  return (
    <NavLinkStyled to={location?.state?.from ?? '/'} type="button">
      BACK
    </NavLinkStyled>
  );
};