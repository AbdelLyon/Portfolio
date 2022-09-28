import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Props, State } from '../interfaces/interfaces'

export const Icons: FC<Partial<Props>> = ({ datas, onHandleClick }): JSX.Element => {
  return (

    <div className="container-icons flex flex-column-between">
      {
        datas && datas.map((data: State) => (
          <Link
            to="#"
            className={`icons-content flex flex-row-center ${data.icon}`}
            key={data.icon}
            onClick={() => onHandleClick!(data)}
          >
            <FontAwesomeIcon className="icon" icon={['fab', data.icon]} />
          </Link>
        ))
      }
    </div>
  )
}
