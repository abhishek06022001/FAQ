import React from 'react'

import FAQItem from './FAQItem';
function FAQ({ FAQS }) {
    return (
        <div>
            {FAQS.map((FAQ, index) => {
                return <div
                    className='flex  border border-solid '
                    key={crypto.randomUUID()}
                >

                    <div>
                        <FAQItem
                            FAQ={FAQ}
                            index={index}

                        />
                    </div>

                </div>
            })}

        </div>
    )
}

export default FAQ