import { FC, useContext } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StateContext } from '../context/State.context';
import { Props } from '../interfaces/interfaces'


const NavLinkStyle = styled(Link).attrs(({ color }: Partial<Props>) => ({ color }))
  `color: ${({ color }) => color}`

const NavLink: FC<Partial<Props>> = ({ id, className, to, children, onChangeCategory }) => {
  const { state } = useContext(StateContext);
  return (
    <li>
      <NavLinkStyle
        id={id}
        color={state?.color}
        className={className}
        to={to}
        onClick={onChangeCategory}
        style={{ borderBottom: state.category === id ? `2px solid ${state.color}` : "", transitionDuration: "1s" }}>
        {children}
      </NavLinkStyle>
    </li>
  )
}

export default NavLink;