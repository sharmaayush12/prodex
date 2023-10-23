import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='main-footdiv py-3 mt-3'>
        <div className='d-flex align-items-center justify-content-between mx-3'>

          <div className='d-flex justify-content-end align-items-center footer_social mx-3' style={{ textAlign: 'left' }}>
            <a href="https://twitter.com/8Bit_chain" target='_blank'>
              <i class="fa-brands fa-twitter mx-2" style={{ color: '#fff' }}></i>
            </a>

            <a href="https://t.me/Official_8Bitchain" target='_blank'>
              <i class="fa-brands fa-telegram mx-2" style={{ color: '#fff' }}></i>
            </a>


            <a href="https://discord.gg/BEuD56UqZ6" target='_blank'>
              <i class="fa-brands fa-discord mx-2" style={{ color: '#fff' }}></i>
            </a>

            <a href="https://medium.com/@8bitchain" target='_blank'>
              <i class="fa-brands fa-medium mx-2"></i>
            </a>

            <a href="https://instagram.com/8bitchain" target='_blank'>
              <i class="fa-brands fa-instagram mx-2"></i>
            </a>

            <a href="https://www.youtube.com/@8Bitchain" target='_blank'>
              <i class="fa-brands fa-youtube mx-2" ></i>
            </a>

            <a href="https://www.reddit.com/u/official8bit" target='_blank'>
              <i class="fa-brands fa-reddit mx-2" ></i>
            </a>


            <a href="https://www.linkedin.com/groups/7478646" target='_blank'>
              <i class="fa-brands fa-linkedin mx-2"></i>
            </a>
          </div>

          <div className='d-flex justify-content-between' style={{ textAlign: 'right' }}>
            <label style={{fontSize:'12px'}}>
              © <span style={{ color: '#ffba00' }}>8BitChain.io</span> 2023
            </label>
          </div>

        </div>

        {/* <div className='text-center mt-3' style={{ color: '#fff' }}>
          <i class="fa-solid fa-wallet mx-3"></i>
          Connect your wallet to start trading
        </div> */}
      </div>
    </>
  )
}
