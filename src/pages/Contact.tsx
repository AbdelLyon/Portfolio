import AnimationPanel from '../components/AnimationPanel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <>
      <div className="container-header flex flex-row-center">
        <AnimationPanel changeAnimation={false} />
        <header className='container translateUp1-animation'>
          <Navbar />
          <form className='form-content'>
            <div className="form-group">
              <input placeholder="Nom" />
            </div>
            <div className="form-group">
              <input placeholder="Prénom" />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" rows={5} />
            </div>
            <div className="form-group">
              <select className='my-1' />
            </div>
          </form>
        </header>
      </div>
      <Footer />
    </>
  )
}

export default Contact;