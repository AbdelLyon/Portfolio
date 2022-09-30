import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";
import { Link } from "react-scroll";
import AnimationPanel from "../components/AnimationPanel";
import Burger from "../components/Burger";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";

const Projects = (): JSX.Element => {

  const [open, setOpen] = useState(false);
  const handleClick = useCallback(() => setOpen(true), [setOpen])

  return (
    <>
      <div className="container-header flex flex-row-center ">
        <AnimationPanel changeAnimation={false} />
        <header className="container size-animation shadow-none">
          <div className="header-project opacity-animation ">
            <Navbar />
            <div className=" h-100 container translateDownFinit-animation" >
              <h1 > Adipisci qui aliquid tenetur asperiores aliquid tenetur asperiores! </h1>
              <Link
                className="icon translateDown-animation "
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
      </div >
      <main className="container" id="main"> {open && <ProjectList />}</main>
      {open && <Footer />}
    </>
  )
}

export default Projects;