import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactApexChart from "react-apexcharts";
import { chartData } from './ChartData'
import { Modal } from 'react-bootstrap-v5';

export default function AddLiquidity() {
    const navigate = useNavigate();
    const [tierdrop, setTierOpen] = useState(false);
    const [currency1, setCurrency1] = useState('BNB');
    const [currency2, setCurrency2] = useState('w8Bit');
    const [chainModal, setChainModal] = useState(false);
    const [showSetting, setShowSetting] = useState(false);
    const [currency1Icon, setCurrency1Icon] = useState('bnb.png');
    const [currency2Icon, setCurrency2Icon] = useState('pool_logo.png');
    const [isActive, setIsActive] = useState(false);

    const [minPrice, setMinPrice] = useState(1.22);
    const [maxPrice, setMaxPrice] = useState(1.22);

    const [Range, setRange] = useState('10%');


    const series = [
        {
            data: chartData,
        },
    ];

    const IncreaseMin = () => {
        // const price=minPrice;
        setMinPrice(minPrice + 1);
    }

    const DecreaseMin = () => {
        setMinPrice(minPrice - 1);
    }

    const IncreaseMax = () => {
        setMaxPrice(minPrice + 1);
    }

    const DecreaseMax = () => {
        setMaxPrice(minPrice - 1);
    }

    const SwapCurrency = () => {
        const temp = currency1;
        setCurrency1(currency2);
        setCurrency2(temp);

        const iconTemp = currency1Icon;
        setCurrency1Icon(currency2Icon);
        setCurrency2Icon(iconTemp)
    }

    const toggleClass = () => {
        setIsActive(!isActive);
    };

    const buttonClass = isActive ? 'rotate-btn rotate-icon btn rotate col-lg-4' : 'btn rotate col-lg-4';

    return (
        <div className='mt-3 px-3'>
            <div className='d-flex align-items-center justify-content-between my-3'>
                <div>
                    <button className='back_btn' onClick={() => navigate('/Farm')}>
                        <i class="fa fa-angle-left fa-lg"></i>
                    </button>
                    <label className='head_label'>
                        Add Liquidity
                        <i class="fa fa-info-circle fa-sm" style={{ marginLeft: '10px', color: 'rgb(169, 169, 169)' }} aria-hidden="true"></i>
                    </label>
                </div>

                <div>
                    <label className='mx-2'>
                        <i class="fa fa-play-circle" aria-hidden="true"></i>
                    </label>

                    <label className='mx-2'>
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </label>

                    <label className='mx-2'>
                        <i class="fa fa-cog" aria-hidden="true"></i>
                    </label>
                </div>
            </div>

            <div className='pool_list_section' style={{ display: 'block' }}>
                <div className='row'>
                    <div className='col-lg-4 px-3'>
                        <div className='d-flex justify-content-between'>
                            <label className='choose_pool'>
                                Choose pool
                            </label>

                            <label className='swap_label'>
                                <i class="fa fa-exchange" aria-hidden="true"></i>
                                Swap
                            </label>
                        </div>

                        <div className='mt-3 row'>
                            <button className='select_drop col-lg-4' onClick={() => { setChainModal(true) }}>
                                <img src={require(`../Assets/${currency1Icon}`)} width={20} alt="currency" />
                                {currency1}
                                <i class="fa fa-caret-down"></i>
                            </button>

                            <button className={buttonClass} onClick={() => { SwapCurrency(); toggleClass() }} style={{ color: 'rgb(169, 169, 169)' }}>
                                <i class="fa fa-exchange" aria-hidden="true"></i>
                            </button>

                            <button className='select_drop col-lg-4' onClick={() => { setChainModal(true) }}>
                                <img src={require(`../Assets/${currency2Icon}`)} width={20} alt="currency" />
                                {currency2}
                                <i class="fa fa-caret-down"></i>
                            </button>
                        </div>

                        <div className='mt-3'>
                            <label className='select_head_label'>
                                Select fee tier
                            </label>

                            <div>
                                <button className='btn tier_btn' onClick={() => { setTierOpen(!tierdrop) }}>
                                    <div className='d-flex'>
                                        <div className='tier_box1'>
                                            <label>2%</label>
                                            <p>
                                                Best for very volatile pairs
                                            </p>
                                        </div>

                                        <div>
                                            <label className='select_percentage'>
                                                86% select
                                            </label>
                                            {
                                                tierdrop
                                                    ?
                                                    <label>
                                                        <i class="fa fa-caret-up" style={{ marginLeft: '10px' }}></i>
                                                    </label>
                                                    :
                                                    <label>
                                                        <i class="fa fa-caret-down" style={{ marginLeft: '10px' }}></i>
                                                    </label>


                                            }
                                        </div>

                                    </div>
                                </button>

                                {/* tier option */}

                                {
                                    tierdrop
                                        ?
                                        <div className='tier_option'>
                                            <button className='btn w-100'>
                                                <div className='d-flex'>
                                                    <div className='tier_box1'>
                                                        <label>2%</label>
                                                        <p>
                                                            Best for very volatile pairs
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <label className='select_percentage'>
                                                            86% select
                                                        </label>
                                                    </div>

                                                </div>
                                            </button>

                                            <button className='btn w-100'>
                                                <div className='d-flex'>
                                                    <div className='tier_box1'>
                                                        <label>2%</label>
                                                        <p>
                                                            Best for very volatile pairs
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <label className='select_percentage'>
                                                            86% select
                                                        </label>
                                                    </div>

                                                </div>
                                            </button>

                                        </div>
                                        :
                                        null
                                }


                            </div>
                        </div>

                        <div className='mt-3'>
                            <label className='select_head_label'>
                                Pool Stats
                            </label>

                            <div>
                                <div className='pool_box' style={{ width: '100%', maxWidth: '100%' }}>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <div>
                                                <img src={require('../Assets/eth.png')} width={20} alt="currency" />
                                            </div>

                                            <div>
                                                <img src={require('../Assets/bnb.png')} width={20} alt="currency" />
                                            </div>

                                            <div>
                                                <label className='conins_name_label'>
                                                    ETH - KNC
                                                </label>

                                                <label className='fees_label'>
                                                    Fee 2%
                                                </label>
                                            </div>
                                        </div>

                                        <div>
                                            <button className='btn options_btn'>
                                                <i class="fa-solid fa-copy"></i>
                                            </button>

                                            <button className='btn options_btn'>
                                                <i class="fa fa-ellipsis-h"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label className='avg_pool'>
                                            Avg APR
                                        </label>

                                        <div>
                                            <label className='pool_percentage'>
                                                53.73%
                                            </label>
                                        </div>

                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex flex-column price_section'>
                                                <label>
                                                    Volume (24H)
                                                </label>

                                                <label>
                                                    $55,128.98
                                                </label>
                                            </div>

                                            <div className='d-flex flex-column price_section'>
                                                <label>
                                                    Fee (24H)
                                                </label>

                                                <label>
                                                    $1,102.58
                                                </label>
                                            </div>
                                        </div>

                                        <hr style={{ color: '#fff' }} />

                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex flex-column price_section'>
                                                <label>
                                                    TVL
                                                </label>

                                                <label>
                                                    $980,623.38
                                                </label>
                                            </div>

                                            <div className='d-flex flex-column price_section'>
                                                <label>
                                                    My Liquidity
                                                </label>

                                                <label>
                                                    -
                                                </label>
                                            </div>
                                        </div>

                                        <div className='mt-3'>
                                            <label className='avg_pool'>
                                                Last 24H Transactions
                                            </label>

                                            <div className='empty_cell d-flex flex-column justify-content-center mt-5 text-center'>
                                                <i class="fa fa-info-circle fa-2x" aria-hidden="true"></i>
                                                <label className='mt-3'>
                                                    No add / remove transactions in the last 24 hrs
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-8 chart_box'>
                        <ReactApexChart
                            options={{
                                chart: {
                                    type: "candlestick",
                                },
                                xaxis: {
                                    type: "datetime",
                                },
                            }}
                            series={series}
                            type="candlestick"
                            height={400}
                        />

                        <div className='range_section mt-3 mb-3'>
                            <button className={Range == '10%' ? 'range_btn range_btn_active' : 'range_btn'} onClick={() => { setRange('10%') }}>
                                10%
                            </button>

                            <button className={Range == '20%' ? 'range_btn range_btn_active' : 'range_btn'} onClick={() => { setRange('20%') }}>
                                20%
                            </button>

                            <button className={Range == '50%' ? 'range_btn range_btn_active' : 'range_btn'} onClick={() => { setRange('50%') }}>
                                50%
                            </button>

                            <button className={Range == 'Full' ? 'range_btn range_btn_active' : 'range_btn'} onClick={() => { setRange('Full') }}>
                                Full Range
                            </button>
                        </div>

                        <div className='row'>
                            <div className='col-lg-6'>
                                <label>
                                    Min Price
                                </label>

                                <div className='d-flex add_price_section mt-2'>
                                    <button onClick={() => DecreaseMin()}>
                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                    </button>

                                    <div className='d-flex align-items-center price_input'>
                                        <input type="text" value={minPrice} />
                                        <label>
                                            {currency1}
                                        </label>
                                    </div>

                                    <button onClick={() => { IncreaseMin() }}>
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <label>
                                    Max Price
                                </label>

                                <div className='d-flex add_price_section mt-2'>
                                    <button onClick={() => { DecreaseMax() }}>
                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                    </button>

                                    <div className='d-flex align-items-center price_input'>
                                        <input type="text" value={maxPrice} />
                                        <label>
                                            {currency2}
                                        </label>
                                    </div>

                                    <button onClick={() => { IncreaseMax() }}>
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <label>
                                Deposit Amount
                            </label>

                            <div className='col-lg-6'>
                                <div className='justify-content-between deposit_amount' style={{ flexDirection: "row", display: "flex", marginTop: "10px" }}>
                                    <input type="text" className='currency_input' style={{ width: '50%', fontSize: "20px", color: "#fff", fontWeight: "500", marginLeft: "20px", marginTop: "10px", backgroundColor: 'transparent', border: 'none' }} placeholder='1' />


                                    <div className='d-flex' style={{ marginRight: '10px' }}>
                                        <div style={{ color: "rgb(80, 80, 80)", marginTop: "10px" }}>~$1,846</div>
                                        <div className='d-flex align-items-center mx-3'>
                                            <img src={require(`../Assets/${currency1Icon}`)} width={25} />
                                            <label>
                                                {currency1}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='justify-content-between deposit_amount' style={{ flexDirection: "row", display: "flex", marginTop: "10px" }}>
                                    <input type="text" className='currency_input' style={{ width: '50%', fontSize: "20px", color: "#fff", fontWeight: "500", marginLeft: "20px", marginTop: "10px", backgroundColor: 'transparent', border: 'none' }} placeholder='1' />


                                    <div className='d-flex' style={{ marginRight: '10px' }}>
                                        <div style={{ color: "rgb(80, 80, 80)", marginTop: "10px" }}>~$1,846</div>
                                        <div className='d-flex align-items-center mx-3'>
                                            <img src={require(`../Assets/${currency2Icon}`)} width={25} />
                                            <label>
                                                {currency2}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
