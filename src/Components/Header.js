import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap-v5'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { sidebarstore, website, headerActive } from './Action/action'
import { useSelector, useDispatch } from 'react-redux'

export default function Header() {
    const location = useLocation()
    const [DOAList, setDOAList] = useState(false)
    const [chainModal, setChainModal] = useState(false);
    const [walletModal, setWalletModal] = useState(false);
    // const [notification, setNotification] = useState(false);
    const [ROIModal, setROIModal] = useState(false);
    const navigation = useNavigate();
    const [actionlinks, setLinks] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const selector = useSelector((state) => state.ModalReducer);
    const websiteselector = useSelector((state) => state.WebsiteStore);
    const ActiveStore = useSelector((state) => state.ActiveStore);

    const dispatch = useDispatch();


    return (
        <div>
            <div className='d-flex header justify-content-around align-items-center'>
                <div className='px-3'>
                    <Link to="/" style={{ backgroundColor: 'transparent' }} onClick={() => { dispatch(headerActive('/')) }}>
                        <img src={require('../Assets/logo.png')} className='logo_img' alt="currency" />
                    </Link>
                </div>

                <div className='website_menu'>
                    <div className='d-flex justify-content-between header_options'>
                        <div className='d-flex justify-content-between header_option'>
                            <label>
                                <Link to="/swap" className={ActiveStore == "swap" ? "HeaderActive" : null} onClick={() => { dispatch(headerActive('swap')) }}>
                                    Swap
                                </Link>
                            </label>

                            <label>
                                <Link to="/Pool" className={ActiveStore == "Liquidity" ? "HeaderActive" : null} onClick={() => { dispatch(headerActive('Liquidity')) }}>
                                    Liquidity
                                </Link>
                            </label>

                            <label>
                                <Link to="/Farm" className={ActiveStore == "Farming" ? "HeaderActive" : null} onClick={() => { dispatch(headerActive('Farming')) }}>
                                    Farming
                                </Link>
                            </label>

                            {/* <label>
                            <a target='_blank' href="https://explorer.8bitchain.io/">
                                8Bit Chain Ecosystem
                            </a>
                        </label> */}

                            <label>
                                <Link to="/Staking" className={ActiveStore == "Prostake" ? "HeaderActive" : null} onClick={() => { dispatch(headerActive('Prostake')) }}>
                                    Prostake
                                </Link>
                            </label>

                            <label>
                                <Link to="/NFT" className={ActiveStore == "NFT Staking" ? "HeaderActive" : null} onClick={() => { dispatch(headerActive('NFT Staking')) }}>
                                    NFT Staking
                                </Link>
                            </label>
                        </div>


                    </div>

                    <div className='mx-2 d-flex justify-content-between align-items-center'>
                        <button className='btn chain_btn' onClick={() => { setChainModal(true) }}>
                            <img src={require('../Assets/bnb.png')} alt="currency" />
                            <label>
                                BNB
                            </label>
                            <i class="fa fa-angle-down"></i>
                        </button>
                    </div>

                    <div className='px-3'>
                        <button className='btn connect_btn' onClick={() => { setWalletModal(true) }}>
                            Connect Wallet
                        </button>
                    </div>

                        <div id={actionlinks==true? 'overlay' : null} onClick={() => {setLinks(false); dispatch(website(!websiteselector));}}>
                        </div>
                    <div>

                        <button className='btn action_links' onClick={() => { dispatch(website(!websiteselector)); setLinks(!actionlinks) }}>
                            <img src={require('../Assets/menu.png')} width={20} />
                        </button>

                        {
                            websiteselector
                                ?
                                <div className='Hover_list'>
                                    <ul>
                                        <li>
                                            <a href="https://8bitchain.io/" target='_blank' onClick={() => { setDOAList(false) }}>
                                                <img src={require('../Assets/website_logo.png')} width={20} />
                                                <label>
                                                    8BitChain
                                                </label>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://protracker.8bitchain.io/" target="_blank" onClick={() => { setDOAList(false) }}>
                                                <img src={require('../Assets/pro-track.png')} width={20} />
                                                <label>
                                                    ProTracker
                                                </label>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://proassure.8bitchain.io/" target='_blank' onClick={() => { setDOAList(false) }}>
                                                <img src={require('../Assets/pro-assure.png')} width={20} />
                                                <label>
                                                    ProAssure
                                                </label>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://protracker.8bitchain.io/" target='_blank' onClick={() => { setDOAList(false) }}>
                                                <img src={require('../Assets/pro-track.png')} width={20} />
                                                <label>
                                                    ProStake
                                                </label>
                                            </a>
                                        </li>

                                        <li>
                                            <a href='https://protracker.8bitchain.io/' target='_blank' onClick={() => { setDOAList(false) }}>
                                                <img src={require('../Assets/pro-track.png')} width={20} />
                                                <label>
                                                    ProGallery
                                                </label>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://propad.app/" target='_blank' onClick={() => { setDOAList(false) }}>
                                                <img src={require('../Assets/propad.png')} width={20} />
                                                <label>
                                                    ProPad
                                                </label>
                                            </a>
                                        </li>

                                        {/* <li>
                                            <button className='btn' onClick={() => { setROIModal(true); setDOAList(false) }}>
                                                ROI Calculator
                                            </button>
                                        </li> */}
                                    </ul>
                                </div>
                                :
                                null
                        }
                    </div>

                    {/* <div className='px-3'>
                        <button className='btn notification_btn' onClick={() => { navigation('/profile') }}>
                            <img src={require('../Assets/user.png')} width={30} alt="currency" />
                        </button>
                    </div> */}
                </div>

                <div className='mobile_menu'>
                    <button className='menu_btn' onClick={() => { setMobileMenu(true) }}>
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </button>

                    {
                        mobileMenu
                            ?
                            <div className='menu_list'>
                                <div className='d-flex align-items-center'>
                                    <div className='menu_close'>
                                        <button className='btn' onClick={() => { setMobileMenu(false) }}>
                                            <i class="fa fa-times" style={{ color: "#fff" }} aria-hidden="true"></i>
                                        </button>
                                    </div>

                                    <div className='mx-2 mt-1 d-flex justify-content-between align-items-center'>
                                        <button className='btn chain_btn' onClick={() => { setChainModal(true) }}>
                                            <img src={require('../Assets/bnb.png')} alt="currency" />
                                            <label>
                                                BNB
                                            </label>
                                            <i class="fa fa-angle-down"></i>
                                        </button>
                                    </div>
                                </div>


                                <div className='mobile_menu_list mt-4'>
                                    <ul>
                                        <li>
                                            <Link to="/swap" >
                                                Swap
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/Pool" onClick={() => { dispatch(website(!websiteselector)) }}>
                                                Liquidity
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="Farm" onClick={() => dispatch(headerActive('swap'))}>
                                                Farming
                                            </Link>
                                        </li>

                                        <li>
                                            <Link onClick={() => dispatch(headerActive('swap'))}>
                                                Prostake
                                            </Link>
                                        </li>

                                        <li>
                                            <Link onClick={() => dispatch(headerActive('swap'))}>
                                                Profile
                                            </Link>
                                        </li>

                                        <li>
                                            <button className='action_links' onClick={() => { dispatch(website(!websiteselector)); setLinks(!actionlinks) }}>
                                                {/* <img src={require('../Assets/thumbnails.png')} width={20} /> */}
                                                Pro Ecosystem
                                            </button>

                                            {
                                                websiteselector
                                                    ?
                                                    <div className='Hover_list'>
                                                        <ul>
                                                            <li>
                                                                <a href="https://8bitchain.io/" target='_blank' onClick={() => { setDOAList(false) }}>
                                                                    <img src={require('../Assets/website_logo.png')} width={20} />
                                                                    <label>
                                                                        Website
                                                                    </label>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="https://protracker.8bitchain.io/" target="_blank" onClick={() => { setDOAList(false) }}>
                                                                    <img src={require('../Assets/pro-track.png')} width={20} />
                                                                    <label>
                                                                        ProTracker
                                                                    </label>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="https://proassure.8bitchain.io/" target='_blank' onClick={() => { setDOAList(false) }}>
                                                                    <img src={require('../Assets/pro-assure.png')} width={20} />
                                                                    <label>
                                                                        ProAssure
                                                                    </label>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="https://protracker.8bitchain.io/" target='_blank' onClick={() => { setDOAList(false) }}>
                                                                    <img src={require('../Assets/pro-track.png')} width={20} />
                                                                    <label>
                                                                        ProStake
                                                                    </label>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href='https://protracker.8bitchain.io/' target='_blank' onClick={() => { setDOAList(false) }}>
                                                                    <img src={require('../Assets/pro-track.png')} width={20} />
                                                                    <label>
                                                                        ProGallery
                                                                    </label>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="https://propad.app/" target='_blank' onClick={() => { setDOAList(false) }}>
                                                                    <img src={require('../Assets/pro-track.png')} width={20} />
                                                                    <label>
                                                                        ProPad
                                                                    </label>
                                                                </a>
                                                            </li>

                                                            {/* <li>
                                            <button className='btn' onClick={() => { setROIModal(true); setDOAList(false) }}>
                                                ROI Calculator
                                            </button>
                                        </li> */}
                                                        </ul>
                                                    </div>
                                                    :
                                                    null
                                            }
                                        </li>
                                    </ul>
                                </div>

                                <div className='mx-2'>
                                    <button className='btn connect_btn' onClick={() => { setWalletModal(true) }}>
                                        Connect Wallet
                                    </button>
                                </div>
                            </div>
                            :
                            null
                    }

                </div>
            </div>



            <Modal
                show={chainModal}
                onHide={() => { setChainModal(false) }}
                fullscreen={false}
                centered
            >
                <div className='modal-section p-3' >
                    <div className='d-flex justify-content-between'>
                        <div className='select_chain_head'>
                            <h3>
                                Select a Chain
                            </h3>
                        </div>

                        <button onClick={() => { setChainModal(false) }} className='btn' style={{ color: '#fff' }}>
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </div>

                    <div className='chain_name_section d-flex justify-content-between px-3'>

                        <div className='chain_names'>
                            <img src={require('../Assets/ethereum_header.png')} width={20} alt="currency" />
                            <label>
                                Ethereum
                            </label>
                        </div>

                        <div className='chain_names'>
                            <img src={require('../Assets/bnb.png')} width={20} alt="currency" />
                            <label>
                                BNB Chain
                            </label>
                        </div>


                        <div className='chain_names'>
                            <img src={require('../Assets/avalanche.png')} width={20} alt="currency" />
                            <label>
                                Avalanche
                            </label>
                        </div>

                        <div className='chain_names'>
                            <img src={require('../Assets/8bitchain.png')} width={20} alt="currency" />
                            <label>
                                8BitChain
                            </label>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                show={walletModal}
                onHide={() => { setWalletModal(false) }}
                fullscreen={false}
                centered
            >
                <div className='modal-section p-3' >
                    <div className='d-flex justify-content-between'>
                        <div className='select_chain_head'>
                            <h3>
                                Connect Your Wallet
                            </h3>
                        </div>

                        <button onClick={() => { setWalletModal(false) }} className='btn' style={{ color: '#fff' }}>
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </div>

                    <div className='condition_section'>
                        <input type="checkbox" />
                        <label>
                            Accept ProDex Terms of Use and Privacy Policy. Last updated: 01 Aug 2023
                        </label>
                    </div>

                    <div className='chain_name_section d-flex justify-content-between px-3'>

                        <button className='btn chain_names'>
                            <img src={require('../Assets/fox.png')} width={20} alt="currency" />
                            <label>
                                Metamask
                            </label>
                        </button>

                        <button className='btn chain_names'>
                            <img src={require('../Assets/walletconnect.png')} width={20} alt="currency" />
                            <label>
                                Wallet Connect
                            </label>
                        </button>

                        <button className='btn chain_names'>
                            <img src={require('../Assets/brave.png')} width={20} alt="currency" />
                            <label>
                                Brave Wallet
                            </label>
                        </button>

                        <button className='btn chain_names'>
                            <img src={require('../Assets/coin98.png')} width={20} alt="currency" />
                            <label>
                                Coin98
                            </label>
                        </button>

                        <button className='btn chain_names'>
                            <img src={require('../Assets/coinbase.jpg')} width={20} alt="currency" />
                            <label>
                                Coinbase
                            </label>
                        </button>

                        <button className='btn chain_names'>
                            <img src={require('../Assets/trust.png')} width={20} alt="currency" />
                            <label>
                                Trust Wallet
                            </label>
                        </button>

                    </div>
                </div>
            </Modal>
        </div>
    )
}
