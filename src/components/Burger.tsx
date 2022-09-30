import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { Props } from '../interfaces/interfaces';



const Burger: FC<Partial<Props>> = ({ onOpen }) => {
  return (
    <div className="burger icon" onClick={onOpen} >
      <FontAwesomeIcon icon={['fas', "bars-staggered"]} />
    </div>
  )
}

export default Burger;