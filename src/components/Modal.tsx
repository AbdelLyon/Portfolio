import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Props } from '../interfaces/interfaces';
import Burger from './Burger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const style = {
  position: 'absolute' as 'absolute',
  top: '0',
  height: '100%',
  width: '100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: "2rem 3rem",
  transition: 'all 1s'

};

const BasicModal: React.FC<Partial<Props>> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);


  return (
    <div style={{ width: '100%' }}>
      <Burger onOpen={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="translateRight-animation">
          <div style={{ display: "flex", width: '100%', justifyContent: "flex-end" }} onClick={handleClose}>
            <FontAwesomeIcon className='icon' icon={['fas', "xmark"]} />

          </div>
          {children}
        </Box>
      </Modal>
    </div>
  );
}


export default BasicModal;