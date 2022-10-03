import { FC, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StateContext } from '../context/State.context';
import { Props } from '../interfaces/interfaces';
import BasicModal from './Modal';
import NavLink from './NavLink';

const Navbar: FC<Partial<Props>> = ({ onChangeCategory }): JSX.Element => {
  const { setState } = useContext(StateContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/projects") setState((state) => ({ ...state, color: "#fff" }))
    else if (location.pathname === "/contact" || location.pathname === "/about") setState((state) => ({ ...state, color: "#83bdd1" }))
  }, [location.pathname, setState])


  const displayNavLink = () => {
    return (
      <>
        {
          location.pathname !== '/' &&
          <NavLink id='home' className="link" to={'/'}>
            Accueil
          </NavLink>
        }
        <NavLink id='about' className={`link ${location.pathname === '/about' && "active"}`} to={'/about'} >
          À-propos
        </NavLink>
        <NavLink id='projects' className={`link ${location.pathname === '/projects' && "active"}`} to={'/projects'}>
          Projects
        </NavLink>
        <NavLink id='contact' className={`link ${location.pathname === '/contact' && "active"}`} to={'/contact'}>
          Contact
        </NavLink>
      </>
    )
  }

  return (

    <div className='container-nav'>
      {location.pathname === '/' &&
        <nav>
          <ul>
            <NavLink id='front-end' className="link" to={"#"} onChangeCategory={onChangeCategory}>
              Front-end
            </NavLink>
            <NavLink id='back-end' className="link" to={'#'} onChangeCategory={onChangeCategory}>
              Back-end
            </NavLink>
          </ul>
        </nav>}
      <nav>
        <ul className='nav-link'>
          {displayNavLink()}
        </ul>
        <BasicModal>
          <ul className="nav-link-burger">
            {displayNavLink()}
          </ul>
        </BasicModal>
      </nav>
    </div >

  )
}
export default Navbar;

