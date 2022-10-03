import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useState } from 'react'
import { Link } from 'react-scroll'
import AnimationPanel from '../components/AnimationPanel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProjectList from '../components/ProjectList'
import pdf from './files/cv.pdf';


const About = () => {

  const [open, setOpen] = useState(false);
  const handleClick = useCallback(() => setOpen(true), [setOpen])

  return (
    <>
      <div className="container-header flex flex-row-center">
        <AnimationPanel />
        <header className="container size-animation shadow-none">
          <div className=" header header-about opacity-animation ">
            <Navbar />
            <div className="h-100 container translate-down-animation">
              <h1 > Adipisci qui aliquid tenetur asperiores aliquid tenetur asperiores! </h1>
              <Link
                className="icon translate-down-alternate-animation"
                activeClass="active"
                onClick={handleClick}
                to="main"
                spy={true}
                smooth='easeInQuint'
                offset={-100}
                duration={1000}
              >
                <FontAwesomeIcon icon={['fas', "angles-down"]} />
              </Link>
            </div>
          </div>
        </header>
      </div>
      <main className="container" id="main">
        {open &&
          <>
            <ProjectList />
            <div className='flex flex-row-start'>
              <small className='mr-1'>Télecharger Mon cv ici </small>
              <a href={pdf} className="icon" target="_blank" rel="noreferrer" >  <FontAwesomeIcon icon={['fas', 'download']} /></a>
            </div>
          </>
        }
      </main>
      {open && <Footer />}
    </>
  )
}

export default About