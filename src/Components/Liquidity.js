import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PoolComponent from './PoolComponent'
import { Modal } from 'react-bootstrap-v5';
import Dropdown from './Dropdown';
import FarmingPool from './FarmingPool';

export default function Liquidity() {
    const [pooltabs, setPoolTabs] = useState('All');
    const [poolView, setPoolView] = useState('Grid');
    const [chainModal, setChainModal] = useState(false);
    const [filter1, setFilter1] = useState('Active');


    const navigate = useNavigate();

    const listdeposit = [
        "AVG ARP",
        "AVG ARP",
        "Staked TVL",
        "Staked TVL"
    ]
    return (
        <div className='mt-3 px-3'>
            <div className='d-flex justify-content-between pool_options'>
                <div className='d-flex justify-content-between pools_btns'>

                    <div className='highlight'>
                        <button className='d-flex align-items-center justify-content-between active_pool highlight__text'>
                            Liquidity

                        </button>
                    </div>
                </div>

            </div>

            <div className='liquidity_tips mt-3'>
                Add liquidity to our Pools and earn trading fees automatically.
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
                            My Liquidity
                        </label>
                    </button>
                </div>

            </div>

            <div className='mt-3'>

                <div className='d-flex justify-content-between align-items-center'>

                    <div>
                        <button className={poolView === 'List' ? 'btn pool_view_btn active_pool_view' : 'btn pool_view_btn'} onClick={() => { setPoolView('List') }}>
                            <i class="fa fa-list"></i>
                        </button>

                        <button className={poolView === 'Grid' ? 'btn pool_view_btn active_pool_view' : 'btn pool_view_btn'} onClick={() => { setPoolView('Grid') }}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1061_37525)"><path d="M17.115 7.00004V12.25C17.115 12.8917 16.59 13.4167 15.9483 13.4167H12.0633C11.4217 13.4167 10.8967 12.8917 10.8967 12.25V7.00004C10.8967 6.35837 11.4217 5.83337 12.0633 5.83337H15.9483C16.59 5.83337 17.115 6.35837 17.115 7.00004ZM19.4483 13.4167H23.3333C23.975 13.4167 24.5 12.8917 24.5 12.25V7.00004C24.5 6.35837 23.975 5.83337 23.3333 5.83337H19.4483C18.8067 5.83337 18.2817 6.35837 18.2817 7.00004V12.25C18.2817 12.8917 18.795 13.4167 19.4483 13.4167ZM17.115 21V15.75C17.115 15.1084 16.59 14.5834 15.9483 14.5834H12.0633C11.4217 14.5834 10.8967 15.1084 10.8967 15.75V21C10.8967 21.6417 11.4217 22.1667 12.0633 22.1667H15.9483C16.59 22.1667 17.115 21.6417 17.115 21ZM18.2817 15.75V21C18.2817 21.6417 18.8067 22.1667 19.4483 22.1667H23.3333C23.975 22.1667 24.5 21.6417 24.5 21V15.75C24.5 15.1084 23.975 14.5834 23.3333 14.5834H19.4483C18.795 14.5834 18.2817 15.1084 18.2817 15.75ZM8.55167 14.5834H4.66667C4.025 14.5834 3.5 15.1084 3.5 15.75V21C3.5 21.6417 4.025 22.1667 4.66667 22.1667H8.55167C9.19333 22.1667 9.71833 21.6417 9.71833 21V15.75C9.71833 15.1084 9.205 14.5834 8.55167 14.5834ZM9.71833 12.25V7.00004C9.71833 6.35837 9.19333 5.83337 8.55167 5.83337H4.66667C4.025 5.83337 3.5 6.35837 3.5 7.00004V12.25C3.5 12.8917 4.025 13.4167 4.66667 13.4167H8.55167C9.205 13.4167 9.71833 12.8917 9.71833 12.25Z" fill="currentColor"></path></g><defs><clipPath id="clip0_1061_37525"><rect width="28" height="28" fill="white"></rect></clipPath></defs></svg>
                        </button>
                    </div>

                    <Dropdown name={"Deposit"} list={listdeposit} />

                    <div style={{ color: '#fff' }} className='d-flex align-items-center'>
                        <button className='select_btns d-flex align-items-center ' onClick={() => { setChainModal(true) }}>
                            <label>
                                <img src={require('../Assets/bnb.png')} className='mx-2' width={20} />
                                BNB
                            </label>

                            <label className='mx-2'>
                                {
                                    chainModal
                                        ?
                                        <i class="fa fa-angle-up"></i>
                                        :
                                        <i class="fa fa-angle-down"></i>

                                }
                            </label>
                        </button>
                        -
                        <button className='select_btns d-flex align-items-center' onClick={() => { setChainModal(true) }}>
                            <label>
                                <img src={require('../Assets/8bitchain.png')} className='mx-2' width={25} />
                                w8Bit
                            </label>

                            <label className='mx-2'>
                                {
                                    chainModal
                                        ?
                                        <i class="fa fa-angle-up"></i>
                                        :
                                        <i class="fa fa-angle-down"></i>

                                }
                            </label>
                        </button>
                    </div>

                    <div className='pool_search'>
                        <input type="text" placeholder='search by token name' />
                        <i class="fa fa-search"></i>
                    </div>

                    <button className='create_btn' onClick={() => { navigate('/CreatePools') }}>
                        <i className='fa fa-plus'></i>
                        Add Liquidity
                    </button>

                </div>
            </div>

            <div className='mt-3'>
                <FarmingPool props={poolView} />
            </div>

            <Modal
                show={chainModal}
                onHide={() => { setChainModal(false) }}
                fullscreen={false}
                centered
            >
                <div className='modal-section p-3' >
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex flex-column'>
                            <label>
                                <h3 style={{ color: '#fff' }}>Select a token</h3>
                            </label>

                            <label>
                                You can search and select any token on KyberSwap
                            </label>
                        </div>

                        <div>
                            <button className='btn' onClick={() => { setChainModal(false) }}>
                                <i class="fa fa-times" style={{ color: '#fff' }} aria-hidden="true"></i>
                            </button>
                        </div>

                    </div>
                    <div className='modal_search'>
                        <input type="text" placeholder='search by token name or address' />
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                    <div className='mt-4 d-flex'>
                        <span className='chain_select'>
                            <img src={require('../Assets/eth.png')} width={20} />
                            ETH
                        </span>

                        <span className='chain_select'>
                            <img src={require('../Assets/bnb.png')} width={20} />
                            BNB
                        </span>

                        <span className='chain_select'>
                            <img src={require('../Assets/pool_logo.png')} width={20} />
                            w8Bit
                        </span>

                        <span className='chain_select'>
                            <img src={require('../Assets/tether.png')} width={20} />
                            USDT
                        </span>
                    </div>

                    <div className='mt-3'>
                        <div className='modal_tabs'>
                            <button className='btn active_modal_tabs'>
                                All
                            </button>

                            <button className='btn'>
                                Imported
                            </button>
                        </div>
                    </div>

                    <div className='text-center mt-3 imported_tokens'>
                        <label>
                            No results found.
                        </label>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

