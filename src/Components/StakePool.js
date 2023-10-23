import React, { useState } from 'react'
import { Modal } from 'react-bootstrap-v5';
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Lock } from './Action/action';

export default function StakePool() {
    const [activeStep, setActivestep] = useState('Add or create pool');
    const [stakeactive, setStakeactive] = useState('stake');
    const [chainModal, setChainModal] = useState(false);
    const [locktime, setLocktime] = useState('30 days');
    const [restaketime, setrestaketime] = useState('30 days');
    const [claimtime, setclaimtime] = useState('30 days');
    const [staketime, setstaketime] = useState('30 days');

    const [Lockshow, setLockShow] = useState(false);
    const [LockName, setLockName] = useState("No");
    const [stakingShow, setStakingShow] = useState(false);
    const [stakingName, setStakingName] = useState("No");
    const [RestakingShow, setRestakingshow] = useState(false);
    const [RestakingName, setRestakingName] = useState("No");
    const [ClaimShow, setClaimShow] = useState(false);
    const [ClaimName, setClaimName] = useState("No");


    const [lock, setLock] = useState();
    const [restake, setRestake] = useState();
    const [stake, setstake] = useState();
    const [claimcycle, setCyclecycle] = useState();

    const navigate = useNavigate();

    const LockSelector = useSelector((state) => state.LockStore);

    const dispatch = useDispatch();

    const Locked = [
        "Yes",
        "No"
    ]

    function PoolCreate() {
        return (
            <>
                <div className='pool2-text'>Token Address*</div>

                <input className='pool-field' placeholder='Enter Here......' />

                <div className='pool2-text1 mt-3 d-flex align-items-center'>
                    <label style={{ color: '#fff', paddingTop: '10px' }}>
                        Select Chain
                    </label>

                    <div className='mx-2 mt-3 d-flex justify-content-between align-items-center'>
                        <button className='btn chain_btn' onClick={() => { setChainModal(true) }}>
                            <img src={require('../Assets/bnb.png')} alt="currency" />
                            <label>
                                BNB
                            </label>
                            <i class="fa fa-angle-down"></i>
                        </button>
                    </div>
                </div>


                <div className='row sm-box mt-3'>
                    <div className='col-2 sm-text'>
                        APY (%)*
                    </div>
                </div>

                {/* <div className='row sm-box'> */}
                <div>
                    <input className="pool-field" placeholder='10%' />
                </div>
                {/* <div className='col-4'></div> */}
                {/* </div> */}

                <div className='d-flex mt-3 align-items-center justify-content-between w-25'>
                    <div className='pool2-text1'>
                        Lock
                    </div>

                    <div style={{ width: '50px', marginLeft: '10px' }}>
                        <div>
                            <button className='d-flex align-items-center dropdown_btn' onClick={() => { setLockShow(!Lockshow) }}>
                                {LockName}
                                {
                                    Lockshow
                                        ?
                                        <i class="fa fa-caret-up"></i>
                                        :
                                        <i class="fa fa-caret-down"></i>
                                }
                            </button>

                            <div className={Lockshow ? 'show_options' : null}>
                                {
                                    Lockshow
                                        ?
                                        <ul>
                                            <li onClick={() => { setLockName("No"); setLockShow(false) }} click>
                                                No
                                            </li>

                                            <li onClick={() => { setLockName("Yes"); setLockShow(false) }} click>
                                                Yes
                                            </li>
                                        </ul>
                                        :
                                        null
                                }
                            </div>

                        </div>
                        {/* <select onClick={(e) => { setLock(e.target.value) }} style={{ backgroundColor: 'transparent', border: 'none', color: "#ffba00", marginLeft: 20 }}>
                            <option>
                                Yes
                            </option>

                            <option selected>
                                NO
                            </option>
                        </select> */}
                    </div>
                </div>
                {
                    LockName === 'Yes'
                        ?
                        <input className='pool-field' placeholder='Enter Lock Time Here......' />
                        :
                        console.log(lock)
                }

                <div className='d-flex mt-3 align-items-center justify-content-between w-25' >
                    <div className='pool2-text1'>
                        Staking Days
                    </div>

                    <div style={{ width: '50px', marginLeft: '10px' }}>
                        <div>
                            <button className='d-flex align-items-center dropdown_btn' onClick={() => { setStakingShow(!stakingShow) }}>
                                {stakingName}
                                {
                                    stakingShow
                                        ?
                                        <i class="fa fa-caret-up"></i>
                                        :
                                        <i class="fa fa-caret-down"></i>
                                }
                            </button>

                            <div className={stakingShow ? 'show_options' : null}>
                                {
                                    stakingShow
                                        ?
                                        <ul>
                                            <li onClick={() => { setStakingName("No"); setStakingShow(false) }} click>
                                                No
                                            </li>

                                            <li onClick={() => { setStakingName("Yes"); setStakingShow(false) }} click>
                                                Yes
                                            </li>
                                        </ul>
                                        :
                                        null
                                }
                            </div>

                        </div>
                    </div>


                    {/* <select onClick={(e) => { setstake(e.target.value) }} style={{ backgroundColor: 'transparent', border: 'none', color: "#ffba00", marginLeft: 20 }}>
                        <option>
                            Yes
                        </option>

                        <option selected>
                            NO
                        </option>
                    </select> */}
                    {/* <input className='pool-field mt-3' placeholder='Enter Staking Days......' /> */}
                </div>
                {
                    stakingName == 'Yes'
                        ?
                        // <div style={{ marginTop: '20px', marginLeft: '30px' }}>
                        //     <span className={staketime == '30 days' ? 'lock_tabs active_lock' : 'lock_tabs'} onClick={() => { setstaketime('30 days') }}>
                        //         30 Days
                        //     </span>

                        //     <span className={staketime == '90 days' ? 'lock_tabs active_lock' : 'lock_tabs'} onClick={() => { setstaketime('90 days') }}>
                        //         90 Days
                        //     </span>

                        //     <span className={staketime == '180 days' ? 'lock_tabs active_lock' : 'lock_tabs'} onClick={() => { setstaketime('180 days') }}>
                        //         180 Days
                        //     </span>

                        //     <span className={staketime == '365 days' ? 'lock_tabs active_lock' : 'lock_tabs'} onClick={() => { setstaketime('365 days') }}>
                        //         365  Days
                        //     </span>
                        // </div>
                        <input className='pool-field' placeholder='Enter Stakeing Time Here......' />
                        :
                        null
                }


                <div className='d-flex mt-4 align-items-center justify-content-between w-25'>
                    <div className='pool2-text1'>
                        Restaking
                    </div>

                    <div style={{ width: '50px', marginLeft: '10px' }}>
                        <div>
                            <button className='d-flex align-items-center dropdown_btn' onClick={() => { setRestakingshow(!RestakingShow) }}>
                                {RestakingName}
                                {
                                    RestakingShow
                                        ?
                                        <i class="fa fa-caret-up"></i>
                                        :
                                        <i class="fa fa-caret-down"></i>
                                }
                            </button>

                            <div className={RestakingShow ? 'show_options' : null}>
                                {
                                    RestakingShow
                                        ?
                                        <ul>
                                            <li onClick={() => { setRestakingName("No"); setRestakingshow(false) }} click>
                                                No
                                            </li>

                                            <li onClick={() => { setRestakingName("Yes"); setRestakingshow(false) }} click>
                                                Yes
                                            </li>
                                        </ul>
                                        :
                                        null
                                }
                            </div>

                        </div>
                    </div>
                </div>

                {
                    RestakingName == 'Yes'
                        ?
                        // <div style={{ marginTop: '20px', marginLeft: '30px' }}>
                        //     <span className={restaketime == '30 days' ? 'lock_tabs active_lock' : 'lock_tabs'} onClick={() => { setrestaketime('30 days') }}>
                        //         30 Days
                        //     </span>

                        //     <span className={restaketime == '90 days' ? 'lock_tabs active_lock' : 'lock_tabs'} onClick={() => { setrestaketime('90 days') }}>
                        //         90 Days
                        //     </span>

                        //     <span className={restaketime == '180 days' ? 'lock_tabs active_lock' : 'lock_tabs'} onClick={() => { setrestaketime('180 days') }}>
                        //         180 Days
                        //     </span>

                        //     <span className={restaketime == '365 days' ? 'lock_tabs active_lock' : 'lock_tabs'} onClick={() => { setrestaketime('365 days') }}>
                        //         365  Days
                        //     </span>
                        // </div>
                        <input className='pool-field' placeholder='Enter Restake Time Here......' />
                        :
                        null
                }

                <div className='d-flex mt-3 align-items-center justify-content-between w-25' >
                    <div className='pool2-text1'>
                        Claim Cycle
                    </div>

                    <div style={{ width: '50px', marginLeft: '10px' }}>
                        <div>
                            <button className='d-flex align-items-center dropdown_btn' onClick={() => { setClaimShow(!ClaimShow) }}>
                                {ClaimName}
                                {
                                    ClaimShow
                                        ?
                                        <i class="fa fa-caret-up"></i>
                                        :
                                        <i class="fa fa-caret-down"></i>
                                }
                            </button>

                            <div className={ClaimShow ? 'show_options' : null}>
                                {
                                    ClaimShow
                                        ?
                                        <ul>
                                            <li onClick={() => { setClaimName("No"); setClaimShow(false) }} click>
                                                No
                                            </li>

                                            <li onClick={() => { setClaimName("Yes"); setClaimShow(false) }} click>
                                                Yes
                                            </li>
                                        </ul>
                                        :
                                        null
                                }
                            </div>

                        </div>
                    </div>
                </div>

                {
                    ClaimName == 'Yes'
                        ?
                        // <div style={{ marginTop: '20px', marginLeft: '30px' }}>
                        //     <span className={claimtime == '30 days' ? 'lock_tabs active_lock' : 'lock_tabs'} onClick={() => { setclaimtime('30 days') }}>
                        //         30 Days
                        //     </span>

                        //     <span className={claimtime == '90 days' ? 'lock_tabs active_lock' : 'lock_tabs'} onClick={() => { setclaimtime('90 days') }}>
                        //         90 Days
                        //     </span>

                        //     <span className={claimtime == '180 days' ? 'lock_tabs active_lock' : 'lock_tabs'} onClick={() => { setclaimtime('180 days') }}>
                        //         180 Days
                        //     </span>

                        //     <span className={claimtime == '365 days' ? 'lock_tabs active_lock' : 'lock_tabs'} onClick={() => { setclaimtime('365 days') }}>
                        //         365  Days
                        //     </span>
                        // </div>
                        <input className='pool-field' placeholder='Enter Claim Cycle Time Here......' />
                        :
                        null
                }
                {/* <input className='pool-field mt-3' placeholder='Enter Claim Cycle (Days)......' /> */}

                <div className='d-flex flex-column mt-3' >
                    <label style={{ color: "#fff", marginLeft: '35px' }}>
                        Performance Fee (%)
                    </label>
                    <input className='pool-field mt-3' placeholder='Enter Staking Days......' />
                </div>

                <div className='d-flex'>
                    {
                        activeStep == "Add or create pool"
                            ?
                            null
                            :
                            <button className='pool-btn' onClick={() => { setActivestep('Add or create pool') }}>Previous</button>
                    }

                    <button className='pool-btn' onClick={() => { setActivestep('pool details') }}>Overview Pool Contract</button>
                </div>
            </>
        )
    }

    function PoolDetails() {
        return (
            <div className='w-100 px-5'>
                <table className='staking_pool_table'>
                    <tr>
                        <td>
                            Token Contract:
                        </td>

                        <td>
                            0x00sw..0000
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Chain
                        </td>

                        <td>
                            BNB
                        </td>
                    </tr>

                    <tr>
                        <td>
                            APY
                        </td>

                        <td>
                            20%
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Lock
                        </td>

                        <td>
                            No
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Staking Days
                        </td>

                        <td>
                            30 Days
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Restaking
                        </td>

                        <td>
                            No
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Claim Cycle
                        </td>

                        <td>
                            20 Days
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Performance Fee
                        </td>

                        <td>
                            20%
                        </td>
                    </tr>
                </table>

                <div className='d-flex'>
                    {
                        activeStep == "Add or create pool"
                            ?
                            null
                            :
                            <button className='pool-btn' onClick={() => { setActivestep('Add or create pool') }}>Previous</button>
                    }

                    <button className='pool-btn' onClick={() => { navigate('/Staking') }}>Create Pool Contract</button>
                </div>
            </div>
        )
    }

    return (
        <div className='pool-box2 mt-2 mx-2'>
            <div className='d-flex justify-content-between align-items-center mx-3 my-4 pool_levels_section'>
                <div className={activeStep == "Add or create pool" ? 'pool_level active_pool_level' : 'pool_level'}>
                    <i class="fa fa-pencil"></i>
                    <label>
                        Add or create pool
                    </label>
                </div>

                <hr />

                <div className={activeStep == "pool details" ? 'pool_level active_pool_level' : 'pool_level'}>
                    <i class="fa fa-file fa-1x"></i>
                    <label>
                        Pool Overview
                    </label>
                </div>

                <div>
                    <button className='cross_btn' onClick={() => navigate('/Staking')}>
                        <i class="fa fa-times fa-lg"></i>
                    </button>
                </div>
            </div>


            {
                activeStep == "Add or create pool"
                    ?
                    PoolCreate()
                    :
                    activeStep == "pool details"
                        ?
                        PoolDetails()
                        :
                        null
            }

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
                            <img src={require('../Assets/polygons.png')} width={20} alt="currency" />
                            <label>
                                Polygon
                            </label>
                        </div>

                        <div className='chain_names'>
                            <img src={require('../Assets/avalanche.png')} width={20} alt="currency" />
                            <label>
                                Avalanche
                            </label>
                        </div>

                        <div className='chain_names'>
                            <img src={require('../Assets/arbitrum (2).png')} width={20} alt="currency" />
                            <label>
                                Arbitrum
                            </label>
                        </div>

                        <div className='chain_names'>
                            <img src={require('../Assets/optimism.png')} width={20} alt="currency" />
                            <label>
                                Optimism
                            </label>
                        </div>

                        <div className='chain_names'>
                            <img src={require('../Assets/BitTorrent.png')} width={20} alt="currency" />
                            <label>
                                BitTorrent
                            </label>
                        </div>

                        <div className='chain_names'>
                            <img src={require('../Assets/Oasis.png')} width={20} alt="currency" />
                            <label>
                                Oasis
                            </label>
                        </div>

                        <div className='chain_names'>
                            <img src={require('../Assets/fantom.png')} width={20} alt="currency" />
                            <label>
                                Fantom
                            </label>
                        </div>

                        <div className='chain_names'>
                            <img src={require('../Assets/cronos.png')} width={20} alt="currency" />
                            <label>
                                Cronos
                            </label>
                        </div>

                        <div className='chain_names'>
                            <img src={require('../Assets/velas.png')} width={20} alt="currency" />
                            <label>
                                Velas
                            </label>
                        </div>

                        <div className='chain_names'>
                            <img src={require('../Assets/Aurora-logo.png')} width={20} alt="currency" />
                            <label>
                                Aurora
                            </label>
                        </div>

                        <div className='chain_names'>
                            <img src={require('../Assets/pool_logo.png')} width={20} alt="currency" />
                            <label>
                                8BitChain
                            </label>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
