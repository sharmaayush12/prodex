import React from 'react'

export default function Card() {
    return (
        <div>
            <div className='pool_box'>
                <div className='pool_img'>
                    <img src={require('../Assets/pool_logo.png')} width={70} />
                </div>

                <div className='pool_name'>
                    <label>
                        BSC
                    </label>
                </div>

                <div className=''>
                    <label>
                        Auto 8BitChain - 90 day lock
                    </label>
                </div>
            </div>
        </div>
    )
}
