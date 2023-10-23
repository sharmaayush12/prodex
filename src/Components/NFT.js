import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Dropdown from './Dropdown';
import Restake from './Restake';
import Claim from './Claim';
import Stake from './stake';
import Unstake from './Unstake'

export default function NFT() {
    const navigate = useNavigate();

    const [openDetails, setOpenDetails] = useState(false);
    const [filter1, setFilter1] = useState('Active');
    const [poolView, setPoolView] = useState('Grid');
    const [stakeactive, setStakeactive] = useState('stake');

    const [stakeOpen, setStakeOpen] = useState(false);


    const sortList = [
        "APY",
        "Earned",
        "Amount",
        "Time"
    ]

    const showList = [
        "Live",
        "Unverified",
        "Verified",
        "Cancelled",
        "End"
    ]
    return (
        <>
            <div className='d-flex justify-content-between pool_options px-3 mt-3'>
                <div className='d-flex justify-content-between pools_btns'>

                    <div className='highlight'>
                        <button className='d-flex align-items-center justify-content-between active_pool highlight__text'>
                            NFT
                        </button>
                    </div>
                </div>
            </div>

            <div className='liquidity_tips mt-3 px-3'>
                Create NFT and earn by Selling
            </div>

            <div className='d-flex mt-3'>
                <div className='currency_tabs mx-3' style={{ border: '1px solid', width: 'fit-content' }}>
                    <button className={filter1 == "Active" ? 'currency_tabs_active' : null} onClick={() => { setFilter1('Active') }}>
                        <label>
                            Active
                        </label>
                    </button>

                    <button className={filter1 == "Ended" ? 'currency_tabs_active' : null} onClick={() => { setFilter1('Ended') }}>
                        <label>
                            Ended
                        </label>
                    </button>

                    <button className={filter1 == "My Farms" ? 'currency_tabs_active' : null} onClick={() => { setFilter1('My Farms') }}>
                        <label>
                            My NFT
                        </label>
                    </button>
                </div>
            </div>

            <div className='d-flex justify-content-between mt-3 align-items-center'>
                <div className='d-flex justify-content-between w-50 mx-4'>
                    <div className='filter_section'>
                        <p>Staked Only</p>

                        <div className='mt-3'>
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div className='filter_section'>
                        <p>{poolView} View</p>

                        <div>
                            <div className='align-items-center'>
                                <button className={poolView === 'List' ? 'pool_view_btn active_pool_view' : 'pool_view_btn'} onClick={() => { setPoolView('List') }}>
                                    <i class="fa fa-list"></i>
                                </button>

                                <button className={poolView === 'Grid' ? 'btn pool_view_btn active_pool_view' : 'btn pool_view_btn'} onClick={() => { setPoolView('Grid') }}>
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1061_37525)"><path d="M17.115 7.00004V12.25C17.115 12.8917 16.59 13.4167 15.9483 13.4167H12.0633C11.4217 13.4167 10.8967 12.8917 10.8967 12.25V7.00004C10.8967 6.35837 11.4217 5.83337 12.0633 5.83337H15.9483C16.59 5.83337 17.115 6.35837 17.115 7.00004ZM19.4483 13.4167H23.3333C23.975 13.4167 24.5 12.8917 24.5 12.25V7.00004C24.5 6.35837 23.975 5.83337 23.3333 5.83337H19.4483C18.8067 5.83337 18.2817 6.35837 18.2817 7.00004V12.25C18.2817 12.8917 18.795 13.4167 19.4483 13.4167ZM17.115 21V15.75C17.115 15.1084 16.59 14.5834 15.9483 14.5834H12.0633C11.4217 14.5834 10.8967 15.1084 10.8967 15.75V21C10.8967 21.6417 11.4217 22.1667 12.0633 22.1667H15.9483C16.59 22.1667 17.115 21.6417 17.115 21ZM18.2817 15.75V21C18.2817 21.6417 18.8067 22.1667 19.4483 22.1667H23.3333C23.975 22.1667 24.5 21.6417 24.5 21V15.75C24.5 15.1084 23.975 14.5834 23.3333 14.5834H19.4483C18.795 14.5834 18.2817 15.1084 18.2817 15.75ZM8.55167 14.5834H4.66667C4.025 14.5834 3.5 15.1084 3.5 15.75V21C3.5 21.6417 4.025 22.1667 4.66667 22.1667H8.55167C9.19333 22.1667 9.71833 21.6417 9.71833 21V15.75C9.71833 15.1084 9.205 14.5834 8.55167 14.5834ZM9.71833 12.25V7.00004C9.71833 6.35837 9.19333 5.83337 8.55167 5.83337H4.66667C4.025 5.83337 3.5 6.35837 3.5 7.00004V12.25C3.5 12.8917 4.025 13.4167 4.66667 13.4167H8.55167C9.205 13.4167 9.71833 12.8917 9.71833 12.25Z" fill="currentColor"></path></g><defs><clipPath id="clip0_1061_37525"><rect width="28" height="28" fill="white"></rect></clipPath></defs></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='filter_section'>
                        <p>Show</p>

                        <Dropdown name={"Live"} list={showList} />

                    </div>

                    <div className='filter_section'>
                        <p>Sort by</p>


                        <Dropdown name={"AVP"} list={sortList} />

                    </div>

                    <div className='filter_section'>
                        <p><br />  </p>

                        <div>
                            <button className='sort_btn'>
                                <i class="fas fa-sort-amount-down"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='filter_section w-50 mx-3'>
                    <p>Search</p>

                    <div className='d-flex justify-content-around'>
                        <div className='mx-3 w-75'>
                            <input type="text" placeholder='Seach By Pool Name....' />
                        </div>

                        <div className='w-25'>
                            <button className='create_btn' onClick={() => { navigate('/Createpool') }}>
                                <i class="fa fa-plus mx-2" aria-hidden="true"></i>
                                Create Pool
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pool_list_section mx-3 mt-3'>
                {
                    poolView == "Grid"
                        ?
                        <div className='mx-3'>

                            <div className='mt-3 background_box d-flex'>

                                <div className='d-flex flex-wrap mx-2'>
                                    <div className='pool-box mx-3 mt-5'>
                                        <div className='pool-div1 row'>
                                            <div className='col-2 pool-text1'></div>
                                            <div className='col-1'></div>
                                            <div className='col-4' >
                                                <img className="pool-img" src={require('../Assets/rare_nft.png')} width={25} />
                                            </div>
                                            {/* <div className='col-1'></div> */}
                                            {/* <div className='col-4 pooldiv3' style={{ display: 'flex' }}>
                                    <div className='pool-text2'>Restake</div>
                                    <div className='pool-text2'><i class="fa fa-refresh" ></i></div>
                                </div> */}

                                        </div>

                                        <div className='pool-head2'>75 Rare Early Bird 8Bit NFT Staking pool</div>
                                        {/* <div className='pool-head3'>Stake - 8BitChain Token</div> */}
                                        <hr style={{ color: '#000', height: '10px' }} />

                                        <div className='pool-table p-3'>
                                            <table style={{ fontSize: "14px", width: '100%' }}>
                                                <tr>
                                                    <td style={{ textDecorationLine: "underline", textDecorationStyle: 'dotted' }}>Claimed Reward</td>
                                                    <td style={{ color: "#ffba00" }}>$0.00</td>
                                                    {/* <td>
                                                    <button className='btn' onClick={() => { setROIModal(true); }}>
                                                        <i class="fa fa-qrcode" style={{ color: '#fff' }} aria-hidden="true"></i>
                                                    </button>
                                                </td> */}
                                                </tr>

                                                <tr>
                                                    <td><br /></td>
                                                </tr>

                                                {/* <tr>
                                        <td style={{ fontSize: '0.75rem', opacity: '0.5' }}>Eligible NFTs</td>
                                    </tr> */}
                                                <tr>
                                                    <td style={{ textDecorationLine: "underline", textDecorationStyle: 'dotted' }} >Eligible NFTs</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textDecorationLine: "underline", textDecorationStyle: 'dotted' }}>Staked NFTs</td>
                                                    <td>0</td>
                                                </tr>
                                                {/* <tr>
                                        <td>Start earning</td>
                                    </tr> */}

                                            </table>

                                            <div style={{ width: "100%", textAlign: "center", marginTop: "50px" }}>
                                                <button style={{ textAlign: "center", width: "90%", border: "hidden", borderRadius: "20px", background: "#ffba00", fontSize: "18px", fontWeight: "500", color: "#fff", padding: "5px" }}>Connect Wallet</button>
                                            </div>

                                            <div>
                                                <div className='d-flex align-items-center  mt-3 justify-content-center'>
                                                    <button className={stakeactive == 'stake' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('stake') }}>Stake</button>
                                                    <button className={stakeactive == 'unstake' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('unstake') }}>Unstake</button>
                                                    <button className={stakeactive == 'Restake' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('restake') }}>Restake</button>
                                                    <button className={stakeactive == 'claim' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('claim') }}>Claim</button>

                                                </div>

                                                <div>
                                                    {
                                                        stakeactive == 'stake'
                                                            ?
                                                            <Stake />
                                                            :
                                                            stakeactive == 'unstake'
                                                                ?
                                                                <Unstake />
                                                                :
                                                                stakeactive == 'restake'
                                                                    ?
                                                                    <Restake />
                                                                    :
                                                                    <Claim />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-wrap'>
                                    <div className='pool-box mx-3 mt-5'>
                                        <div className='pool-div1 row'>
                                            <div className='col-2 pool-text1'></div>
                                            <div className='col-1'></div>
                                            <div className='col-4' >
                                                <img className="pool-img" src={require('../Assets/rare_nft.png')} width={25} />
                                            </div>
                                            {/* <div className='col-1'></div> */}
                                            {/* <div className='col-4 pooldiv3' style={{ display: 'flex' }}>
                                    <div className='pool-text2'>Restake</div>
                                    <div className='pool-text2'><i class="fa fa-refresh" ></i></div>
                                </div> */}

                                        </div>

                                        <div className='pool-head2'>75 Rare Early Bird 8Bit NFT Staking pool</div>
                                        {/* <div className='pool-head3'>Stake - 8BitChain Token</div> */}
                                        <hr style={{ color: '#000', height: '10px' }} />

                                        <div className='pool-table p-3'>
                                            <table style={{ fontSize: "14px", width: '100%' }}>
                                                <tr>
                                                    <td style={{ textDecorationLine: "underline", textDecorationStyle: 'dotted' }}>Claimed Reward</td>
                                                    <td style={{ color: "#ffba00" }}>$0.00</td>
                                                    {/* <td>
                                                    <button className='btn' onClick={() => { setROIModal(true); }}>
                                                        <i class="fa fa-qrcode" style={{ color: '#fff' }} aria-hidden="true"></i>
                                                    </button>
                                                </td> */}
                                                </tr>

                                                <tr>
                                                    <td><br /></td>
                                                </tr>

                                                {/* <tr>
                                        <td style={{ fontSize: '0.75rem', opacity: '0.5' }}>Eligible NFTs</td>
                                    </tr> */}
                                                <tr>
                                                    <td style={{ textDecorationLine: "underline", textDecorationStyle: 'dotted' }} >Eligible NFTs</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textDecorationLine: "underline", textDecorationStyle: 'dotted' }}>Staked NFTs</td>
                                                    <td>0</td>
                                                </tr>
                                                {/* <tr>
                                        <td>Start earning</td>
                                    </tr> */}

                                            </table>

                                            <div style={{ width: "100%", textAlign: "center", marginTop: "50px" }}>
                                                <button style={{ textAlign: "center", width: "90%", border: "hidden", borderRadius: "20px", background: "#ffba00", fontSize: "18px", fontWeight: "500", color: "#fff", padding: "5px" }}>Connect Wallet</button>
                                            </div>

                                            <div>
                                                <div className='d-flex align-items-center  mt-3 justify-content-center'>
                                                    <button className={stakeactive == 'stake' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('stake') }}>Stake</button>
                                                    <button className={stakeactive == 'unstake' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('unstake') }}>Unstake</button>
                                                    <button className={stakeactive == 'Restake' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('restake') }}>Restake</button>
                                                    <button className={stakeactive == 'claim' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('claim') }}>Claim</button>

                                                </div>

                                                <div>
                                                    {
                                                        stakeactive == 'stake'
                                                            ?
                                                            <Stake />
                                                            :
                                                            stakeactive == 'unstake'
                                                                ?
                                                                <Unstake />
                                                                :
                                                                stakeactive == 'restake'
                                                                    ?
                                                                    <Restake />
                                                                    :
                                                                    <Claim />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <>
                            <div className='mx-3 w-100'>
                                <button className='w-100 mt-5 NFT_List_btn'>
                                    <div>

                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='NFT_imgs d-flex align-items-center'>
                                                <img src={require('../Assets/rare_nft.png')} width={60} />

                                                <div className='d-flex flex-column mx-3'>

                                                    <label style={{ color: '#fff', fontWeight: 'bold' }}>
                                                        75 Rare Early Bird 8Bit NFT Staking pool
                                                    </label>
                                                </div>
                                            </div>

                                            <div className='d-flex justify-content-between w-25'>
                                                <table style={{ fontSize: "14px", color: '#fff', width: '100%' }}>
                                                    <tr>
                                                        <td style={{ textDecorationLine: "underline", textDecorationStyle: 'dotted' }}>Claimed Reward</td>
                                                        <td style={{ color: "#ffba00" }}>$0.00</td>
                                                    </tr>

                                                    <tr>
                                                        <td style={{ textDecorationLine: "underline", textDecorationStyle: 'dotted' }} >Eligible NFTs</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textDecorationLine: "underline", textDecorationStyle: 'dotted' }}>Staked NFTs</td>
                                                        <td>0</td>
                                                    </tr>

                                                </table>
                                            </div>

                                            <div>
                                                <button style={{ textAlign: "center", width: "100%", border: "hidden", borderRadius: "20px", background: "#ffba00", fontSize: "18px", fontWeight: "500", color: "#fff", padding: "5px" }}>Harvast</button>
                                            </div>
                                        </div>
                                        <div className='stake_sections mt-3'>
                                            <button onClick={() => { setStakeOpen(!stakeOpen) }}>
                                                Stake/Unstake/Details
                                                <i class="fa fa-caret-down"></i>
                                            </button>

                                            {
                                                stakeOpen
                                                    ?
                                                    <div>
                                                        <div className='d-flex align-items-center  mt-3 justify-content-center'>
                                                            <button className={stakeactive == 'stake' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('stake') }}>Stake</button>
                                                            <button className={stakeactive == 'unstake' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('unstake') }}>Unstake</button>
                                                            <button className={stakeactive == 'restake' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('restake') }}>Restake</button>
                                                            <button className={stakeactive == 'claim' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('claim') }}>Claim</button>
                                                        </div>

                                                        <div>
                                                            {
                                                                stakeactive == 'stake'
                                                                    ?
                                                                    <Stake />
                                                                    :
                                                                    stakeactive == 'unstake'
                                                                        ?
                                                                        <Unstake />
                                                                        :
                                                                        stakeactive == 'restake'
                                                                            ?
                                                                            <Restake />
                                                                            :
                                                                            <Claim />
                                                            }
                                                        </div>
                                                    </div>
                                                    :
                                                    null
                                            }

                                        </div>

                                    </div>
                                </button>
                            </div>

                            <div className='mx-3 w-100'>
                                <button className='w-100 mt-5 NFT_List_btn'>
                                    <div>

                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='NFT_imgs d-flex align-items-center'>
                                                <img src={require('../Assets/rare_nft.png')} width={60} />

                                                <div className='d-flex flex-column mx-3'>

                                                    <label style={{ color: '#fff', fontWeight: 'bold' }}>
                                                        75 Rare Early Bird 8Bit NFT Staking pool
                                                    </label>
                                                </div>
                                            </div>

                                            <div className='d-flex justify-content-between w-25'>
                                                <table style={{ fontSize: "14px", color: '#fff', width: '100%' }}>
                                                    <tr>
                                                        <td style={{ textDecorationLine: "underline", textDecorationStyle: 'dotted' }}>Claimed Reward</td>
                                                        <td style={{ color: "#ffba00" }}>$0.00</td>
                                                    </tr>

                                                    <tr>
                                                        <td style={{ textDecorationLine: "underline", textDecorationStyle: 'dotted' }} >Eligible NFTs</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textDecorationLine: "underline", textDecorationStyle: 'dotted' }}>Staked NFTs</td>
                                                        <td>0</td>
                                                    </tr>

                                                </table>
                                            </div>

                                            <div>
                                                <button style={{ textAlign: "center", width: "100%", border: "hidden", borderRadius: "20px", background: "#ffba00", fontSize: "18px", fontWeight: "500", color: "#fff", padding: "5px" }}>Harvast</button>
                                            </div>
                                        </div>
                                        <div className='stake_sections mt-3'>
                                            <button onClick={() => { setStakeOpen(!stakeOpen) }}>
                                                Stake/Unstake/Details
                                                <i class="fa fa-caret-down"></i>
                                            </button>

                                            {
                                                stakeOpen
                                                    ?
                                                    <div>
                                                        <div className='d-flex align-items-center  mt-3 justify-content-center'>
                                                            <button className={stakeactive == 'stake' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('stake') }}>Stake</button>
                                                            <button className={stakeactive == 'unstake' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('unstake') }}>Unstake</button>
                                                            <button className={stakeactive == 'restake' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('restake') }}>Restake</button>
                                                            <button className={stakeactive == 'claim' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('claim') }}>Claim</button>
                                                        </div>

                                                        <div>
                                                            {
                                                                stakeactive == 'stake'
                                                                    ?
                                                                    <Stake />
                                                                    :
                                                                    stakeactive == 'unstake'
                                                                        ?
                                                                        <Unstake />
                                                                        :
                                                                        stakeactive == 'restake'
                                                                            ?
                                                                            <Restake />
                                                                            :
                                                                            <Claim />
                                                            }
                                                        </div>
                                                    </div>
                                                    :
                                                    null
                                            }

                                        </div>

                                    </div>
                                </button>
                            </div>
                        </>
                }
            </div>
        </>
    )
}
