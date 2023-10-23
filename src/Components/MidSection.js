import React from 'react'

export default function MidSection() {
    return (
        <div className='row mt-5 mx-0 no-gutter align-items-center'>
            <div className='col-6 mid_section_1'>
                <div className='text1-sec'>FOR TRADERS</div>
                <div className='text2-sec'>Your gateway to the ultimate trading experience</div>
                <div className='text3-sec'>At ProDex, Users can trade tokens across different chains and swaps all in one place and can enjoy advanced trading tools like limit orders, charts, cross-chain swaps, and earn through staking, farming, and even NFT staking</div>
                <div className='text41-sec'><i class="fa fa-usd" style={{ marginRight: "10px", color: "#ffba00" }} aria-hidden="true"></i>Advance Trading Tools</div>
                <div className='text4-sec'><i class="fa fa-usd" style={{ marginRight: "10px", color: "#ffba00" }} aria-hidden="true"></i>Multiple Chains and Swaps</div>
                <div className='text4-sec'><i class="fa fa-usd" style={{ marginRight: "10px", color: "#ffba00" }} aria-hidden="true"></i>NFT and token Staking, Farming</div>

                <div className='secbtn-div'>
                    <button className='home-btn'><i class="fa fa-exchange" style={{ marginRight: "10px" }} aria-hidden="true"></i>Swap Now</button>
                </div>


                <div className='mt-5'>
                    <div className='text1-sec'>FOR Projects</div>
                    <div className='sec2-head'>A platform for project success, where liquidity addition, token trading & staking, NFT staking, and user exposure converge effortlessly</div>

                    <div className='text41-sec'><i class="fa fa-usd" style={{ marginRight: "10px", color: "#ffba00" }} aria-hidden="true"></i>Add liquidity</div>
                    <div className='text4-sec'><i class="fa fa-usd" style={{ marginRight: "10px", color: "#ffba00" }} aria-hidden="true"></i>Listing of token</div>
                    <div className='text4-sec'><i class="fa fa-usd" style={{ marginRight: "10px", color: "#ffba00" }} aria-hidden="true"></i>Offer Staking for Token/NFTs</div>


                    <div className='sec2btn-div'>
                        <div className='secbtn-div'>
                            <button className='home-btn liq_btn'><i class="fa fa-plus" aria-hidden="true"></i> Add Liquidity</button>
                        </div>
                        <div className='secbtn-div'>
                            <button className='home-btn2'>
                                <a href="mailto:admin@8bitchain.io" style={{ textDecoration: 'none', color: '#000', backgroundColor: 'transparent' }}>
                                    <i class="fa fa-edit" style={{ marginRight: "10px", color: "#ffba00" }} aria-hidden="true"></i>Contact Us
                                </a>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
            <div className='col-lg-6'>
                <img src={require('../Assets/for_trader-c52eb30e.png')} className='trade_assets' alt="currency" />
            </div>

        </div>
    )
}
