
import React, { useState } from 'react'
import Swap from './Swap'
import Limit from './Limit'
import CrossChain from './CrossChain'
import { useSelector, useDispatch } from 'react-redux'
import {swapSetting} from './Action/action'

export default function Tabs() {
    
    const dispatch = useDispatch();
    
    const [name, setname] = useState('swap');
    const [showmenu, setShowMenu] = useState(false);
    const [menuoption, setMenuoption] = useState('');
    const [showsecurity, setShowSecurity] = useState(false);
    const [showcsecurity, setShowcSecurity] = useState(false);
    const [slippageaction, setSlippageaction] = useState(true)
    const [selectedSlippage, setSelectedSlippage] = useState('0.5%');

    const ActiveStore=useSelector((state)=>state.SettingStore);



    return (
        <>
            <div className='tab-div d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <button className={name == 'swap' ? 'tab-btn mx-2 tab_active' : 'tab-btn mx-2'} onClick={() => setname('swap')}>Swap</button>
                    <div class="vl"></div>
                    <button className={name == 'limit' ? 'tab-btn mx-2 tab_active' : 'tab-btn mx-2'} onClick={() => setname('limit')}>Limit</button>
                    <div class="vl"></div>
                    <button className={name == 'cross-chain' ? 'tab-btn mx-2 tab_active' : 'tab-btn mx-2'} onClick={() => setname('cross-chain')}>Cross-Chain</button>
                </div>

                <div className='d-flex'>
                    {/* {
                        showmenu
                            ? */}
                    <div className='d-flex menu_btn_list' onMouseOut={() => { setShowMenu(false) }} onMouseOver={() => { setShowMenu(true) }}>
                        {/* <button onClick={() => { setMenuoption('share') }}>
                                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                                </button> */}

                        <button onClick={() => { dispatch(swapSetting('info'))}}>
                            <i class="fa fa-info-circle"></i>
                        </button>
                    </div>
                    {/* :
                            null
                    } */}


                    <button className='menu_btn'>
                        <i class="fa fa-ellipsis-h"></i>
                    </button>
                </div>

            </div>
            <div>
                {
                    name == 'swap'
                        ?
                        <Swap option={menuoption}/>
                        :
                        name == "limit"
                            ?
                            <Limit option={menuoption} />
                            :
                            <CrossChain option={menuoption} />
                }
            </div>
        </>
    )

}
