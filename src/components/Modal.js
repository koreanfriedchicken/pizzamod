import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import { useState } from 'react';

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y : "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

const Modal = ({ handleClose, text, content }) => {

    const [amount, setAmount] = useState(1)

    const increase = () => setAmount(amount+1)
    const decrease = () => setAmount(amount-1)


  return (
    <Backdrop onClick={handleClose}>
        <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className='modal-content'>
                <img className='modal-image' src={content.image}/>
                <div className='modal-name'>{content.name}</div>
                <div className='modal-description'>{content.description}</div>
            </div>
            <div className='modal-right'>
            <div className='amount'>
                {amount>=1 && <button className='decrease' onClick={decrease}>-</button>}
                {amount<1 && <button className='decrease'>-</button>}
                <div className='quantity'>{amount}</div>
                {amount < 9 && <button className='increase' onClick={increase}>+</button>}
                {amount > 8 && <button className='increase'>+</button>}
            </div>
            <button className='add-to-basket'>Add To Basket</button>
            </div>
            <button className='close' onClick={handleClose}>X</button>
        </motion.div>
    </Backdrop>
  )
}

export default Modal