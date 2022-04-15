import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './Modal'
const CardGrid = ({ items }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [currentClick, setCurrentClick] = useState();

  const close = () => {
    setModalOpen(false)
    document.body.style.overflow = "auto";
  }

  const open = () => setModalOpen(true)

  const handleClick = async (item) => {
    if (!modalOpen){
      open()
      document.body.style.overflow = "hidden";
    } else {
      close()
      document.body.style.overflow = "auto";
    }
    
    setCurrentClick(item)
    console.log(item.id)
  }


  return (
    <div className='card-grid'>
        {items.map(item => (
          <motion.div className='card' key={item.id} onClick={() => handleClick(item)}>
              {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} content={currentClick} />}
            <div className='image-container'>
              <img className='image' src={item.image}/>
            </div>
            <div className='card-bottom'>
              <div className='name'>
                {item.name}
              </div>
              <div className='description'>
                {item.description}
              </div>
            </div>

          </motion.div>
        ))}
    </div>
  )
} 

export default CardGrid