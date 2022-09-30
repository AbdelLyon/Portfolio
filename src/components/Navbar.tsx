import { FC, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StateContext } from '../context/State.context';
import { Props } from '../interfaces/interfaces';
import Burger from './Burger';
import BasicModal from './Modal';
import { NavLink } from './NavLink';

const Navbar: FC<Partial<Props>> = ({ onChangeCategory }): JSX.Element => {
  const { state, setState } = useContext(StateContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/projects") setState((state) => ({ ...state, color: "#333" }))
    else if (location.pathname === "/contact") setState((state) => ({ ...state, color: "#333" }))
  }, [location.pathname, setState])

  const displayNavLink = () => {
    return (
      <>
        {location.pathname !== '/' && <NavLink id='home' color={state?.color} className="link" to={'/'}>Accueil</NavLink>}
        <NavLink id='skills'
          color={state?.color}
          className={`link ${location.pathname === '/projects' && "active"}`}
          to={'/projects'}>
          Competences
        </NavLink>
        <NavLink id='contact'
          color={state?.color}
          className={`link ${location.pathname === '/contact' && "active"}`}
          to={'/contact'}>
          Contact
        </NavLink>
      </>
    )
  }


  return (
    <div className='container-nav'>
      {
        location.pathname === '/' &&
        <nav >
          <NavLink
            id='front-end'
            color={state!.color}
            className="link"
            to={"#"}
            onClick={onChangeCategory}
            style={{ borderBottom: state.category === 'front-end' ? `2px solid ${state.color}` : "", transitionDuration: "1s" }}>
            Front-end
          </NavLink>
          <NavLink
            id='back-end'
            color={state!.color}
            className="link"
            to={'#'}
            onClick={onChangeCategory}
            style={{ borderBottom: state.category === 'back-end' ? `2px solid ${state.color}` : "", transitionDuration: "1s" }}>
            Back-end
          </NavLink>

        </nav>
      }
      <nav>

        <BasicModal>
          {displayNavLink()}
        </BasicModal>


      </nav>
    </div >
  )
}
export default Navbar;

