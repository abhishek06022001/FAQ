import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
function FAQItem({ FAQ, index }) {
    const [isOpen, setOpen] = useState(false);
    useEffect(() => {
        if (index == 0) {
            setOpen(true);
        }
    },[]);
    return (
        <div>
            <h1
                onClick={() => setOpen(prev => !prev)}
                className='flex'
            >
                {(isOpen) ? <IoIosArrowDown /> : <IoIosArrowForward />}
                {

                    FAQ.question}</h1>
            <h4>{
                (isOpen) ?
                    FAQ.answer : null}</h4>
        </div>
    )
}

export default FAQItem