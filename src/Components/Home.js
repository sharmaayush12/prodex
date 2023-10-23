import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate=useNavigate();
    
    return (
        <div>
            <div className='head-text'><b className='b1'>Trade,</b> <b className='b1'>Stake,</b> <b className='b1'>Farm</b> and <b className='b1'>Prosper</b> With <b className='b1'>ProDex</b> </div>


            <div className='row mx-0 no-gutter'>
                <div className='col-12 mt-3'>
                    <div className='text-center'>
                        <h3 style={{color:"#fff"}}>Welcome To ProDex</h3>
                    </div>
                    <div className='text1'>Trade seamlessly across multiple chains, access advanced trading tools and experiences, earn through staking and farming, and create liquidity with ease</div>

                    <div className='hbtn-div'>
                        <button className='home-btn' onClick={()=>{navigate('/swap')}}><i class="fa fa-exchange" style={{ marginRight: "10px" }} aria-hidden="true"></i>Swap Now</button>
                    </div>
                </div>
            </div>

            <div className='row mx-0 no-gutter justify-content-center'>
                <div className='col-2'>
                    <button className='card-btn'>
                        <div className='card-text1'>5</div>
                        <div className='card-text2'>Total Chains</div>
                    </button>
                </div>

                <div className='col-2'>
                    <button className='card-btn'>
                        <div className='card-text1'>4</div>
                        <div className='card-text2'>Total Dex</div>
                    </button>
                </div>

                <div className='col-2'>
                    <button className='card-btn'>
                        <div className='card-text1'>10</div>
                        <div className='card-text2'>Total Project Listed</div>
                    </button>
                </div>

                <div className='col-2'>
                    <button className='card-btn'>
                        <div className='card-text1'>100</div>
                        <div className='card-text2'>TVL at ProDex</div>
                    </button>
                </div>
            </div>
        </div>
    )
}
