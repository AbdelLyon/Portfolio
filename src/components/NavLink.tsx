import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Props } from '../interfaces/interfaces'

export const NavLink = styled(Link).attrs(({ color }: Partial<Props>) => ({ color }))
  `color: ${({ color }) => color}`
