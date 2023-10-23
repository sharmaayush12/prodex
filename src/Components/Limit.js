import React, { useState } from 'react'
import { Modal } from 'react-bootstrap-v5'
import ReactApexChart from "react-apexcharts";
import { chartData } from './ChartData'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { swapSetting } from './Action/action';

export default function Limit() {

    const [chainModal, setChainModal] = useState(false);
    const [name, setname] = useState('Active Order');
    const [walletModal, setWalletModal] = useState(false);
    const [currency1, setCurrency1] = useState('BNB');
    const [currency2, setCurrency2] = useState('USDT');
    const [currency1Icon, setCurrency1Icon] = useState('bnb.png');
    const [currency2Icon, setCurrency2Icon] = useState('tether.png');

    const [showsecurity, setShowSecurity] = useState(false);
    const [showcsecurity, setShowcSecurity] = useState(false);
    // const [slippageaction, setSlippageaction] = useState(true)

    const navigate = useNavigate();

    const ActiveStore = useSelector((state) => state.SettingStore);

    const dispatch = useDispatch();

    const series = [
        {
            data: chartData,
        },
    ];

    const SwapCurrency = () => {
        const temp = currency1;
        setCurrency1(currency2);
        setCurrency2(temp);

        const iconTemp = currency1Icon;
        setCurrency1Icon(currency2Icon);
        setCurrency2Icon(iconTemp)
    }

    function Info() {
        return (
            <div className="token_info col-lg-5 px-0">

                <div className='d-flex align-items-center justify-content-between token_info_head'>
                    <div className='d-flex'>
                        <button className='btn' onClick={() => { dispatch(swapSetting('')) }}>
                            <i class="fa fa-angle-left" style={{ color: '#fff' }}></i>
                        </button>
                    </div>
                </div>
                <div className='d-flex align-items-center market_head'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6 1.19996C20.2772 1.19756 19.2029 2.268 19.2005 3.59086C19.1993 4.21435 19.4414 4.81374 19.8752 5.26158L15.4904 14.0296C15.3943 14.0137 15.2973 14.0038 15.2 14C14.8902 14.0006 14.5834 14.0615 14.2968 14.1792L10.8928 10.3512C11.0915 9.99989 11.1973 9.60366 11.2 9.20002C11.2 7.87453 10.1255 6.80002 8.80003 6.80002C7.47455 6.80002 6.40003 7.87453 6.40003 9.20002C6.40237 9.77292 6.61148 10.3257 6.98883 10.7568L2.82881 18.0432C2.68744 18.016 2.54395 18.0015 2.4 18C1.07452 18 0 19.0745 0 20.4C0 21.7254 1.07452 22.8 2.4 22.8C3.72548 22.8 4.8 21.7254 4.8 20.4C4.79766 19.827 4.58855 19.2743 4.2112 18.8431L8.37122 11.5568C8.8178 11.645 9.28055 11.5976 9.70003 11.4208L13.104 15.2488C12.9065 15.6004 12.8018 15.9966 12.8001 16.4C12.7961 17.7255 13.8673 18.8032 15.1928 18.8072C16.5183 18.8112 17.596 17.7399 17.6 16.4145C17.6019 15.7891 17.3596 15.1878 16.9248 14.7384L21.3096 5.97038C21.4057 5.98631 21.5027 5.99621 21.6 5.99996C22.9255 5.99996 24 4.92544 24 3.59996C24 2.27447 22.9255 1.19996 21.6 1.19996ZM2.4 21.2C1.95816 21.2 1.59998 20.8418 1.59998 20.4C1.59998 19.9581 1.95816 19.5999 2.4 19.5999C2.84184 19.5999 3.20002 19.9581 3.20002 20.4C3.20002 20.8418 2.84184 21.2 2.4 21.2ZM8.79998 9.99994C8.35814 9.99994 7.99997 9.64177 7.99997 9.19992C7.99997 8.75808 8.35814 8.39991 8.79998 8.39991C9.24183 8.39991 9.6 8.75808 9.6 9.19992C9.6 9.64177 9.24183 9.99994 8.79998 9.99994ZM15.2 17.1999C14.7582 17.1999 14.4 16.8418 14.4 16.3999C14.4 15.9581 14.7582 15.5999 15.2 15.5999C15.6419 15.5999 16 15.9581 16 16.3999C16 16.8418 15.6418 17.1999 15.2 17.1999ZM21.6 4.39997C21.1582 4.39997 20.8 4.0418 20.8 3.59996C20.8 3.15811 21.1582 2.79994 21.6 2.79994C22.0418 2.79994 22.4 3.15811 22.4 3.59996C22.4 4.0418 22.0418 4.39997 21.6 4.39997Z" fill="currentColor"></path></svg>
                    <h1>Market Info</h1>
                </div>
                <table className='w-100 market_table'>
                    <tr>
                        <td>
                            24 Hour Volume :
                        </td>
                        <td>
                            1,00,000
                        </td>
                    </tr>

                    <tr>
                        <td>
                            24 Hour Change :
                        </td>

                        <td>
                            +40%
                        </td>
                    </tr>

                    <tr>
                        <td>
                            24 Hour Transactions :
                        </td>

                        <td>
                            1000
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Pair :
                        </td>

                        <td>
                            BNB, Pancakeswap V2
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Contract Address :
                        </td>

                        <td>
                            0x48f.D70
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={2} style={{ textAlign: 'center' }}>
                            <button className='view_more_btn'>
                                View More
                            </button>
                        </td>
                    </tr>
                </table>

                <div className='d-flex align-items-center market_head mt-3'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.91754L19 7.02754V11.7275C19 16.2475 16.02 20.4175 12 21.6575C7.98 20.4175 5 16.2475 5 11.7275V7.02754L12 3.91754ZM12 1.72754L3 5.72754V11.7275C3 17.2775 6.84 22.4675 12 23.7275C17.16 22.4675 21 17.2775 21 11.7275V5.72754L12 1.72754ZM11 7.72754H13V9.72754H11V7.72754ZM11 11.7275H13V17.7275H11V11.7275Z" fill="currentColor"></path></svg>
                    <h1>Security Info</h1>
                </div>

                <div className='d-flex justify-content-between mx-3 security_box'>
                    <button className='btn w-100 d-flex justify-content-between' onClick={(() => { setShowSecurity(!showsecurity) })}>
                        <div>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.36328 10.9572C3.36328 9.75641 4.33673 8.78296 5.53755 8.78296L18.4624 8.78296C19.6632 8.78296 20.6366 9.75641 20.6366 10.9572V16.0909C20.6366 20.8608 16.7699 24.7276 12 24.7276C7.23005 24.7276 3.36328 20.8608 3.36328 16.0909L3.36328 10.9572Z" fill="#31CB9E"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.18307 2.30855C9.19537 1.29625 10.5684 0.727539 12 0.727539C13.4316 0.727539 14.8046 1.29625 15.8169 2.30855C16.8292 3.32086 17.3979 4.69384 17.3979 6.12546C17.3979 6.90516 16.7658 7.53723 15.9861 7.53723C15.2064 7.53723 14.5744 6.90516 14.5744 6.12546C14.5744 5.44269 14.3031 4.78788 13.8203 4.30509C13.3376 3.8223 12.6827 3.55107 12 3.55107C11.3172 3.55107 10.6624 3.8223 10.1796 4.30509C9.69681 4.78788 9.42558 5.44269 9.42558 6.12546C9.42558 6.90516 8.79351 7.53723 8.01382 7.53723C7.23412 7.53723 6.60205 6.90516 6.60205 6.12546C6.60205 4.69384 7.17076 3.32086 8.18307 2.30855Z" fill="#31CB9E"></path><path d="M13.256 17.1287C13.1523 16.7141 13.3461 16.2925 13.6009 15.9494C13.8472 15.6178 13.993 15.207 13.993 14.7621C13.993 13.6614 13.1007 12.769 11.9999 12.769C10.8992 12.769 10.0068 13.6614 10.0068 14.7621C10.0068 15.207 10.1526 15.6179 10.399 15.9495C10.6538 16.2925 10.8476 16.7142 10.7439 17.1288L10.3175 18.8344C10.1597 19.4656 10.6371 20.077 11.2877 20.077H12.7123C13.3628 20.077 13.8402 19.4656 13.6824 18.8344L13.256 17.1287Z" fill="#065F44"></path></svg>
                            Trading Security
                        </div>

                        <div>
                            <i class="fa fa-caret-down"></i>
                        </div>
                    </button>
                </div>
                {
                    showsecurity
                        ?
                        <div className='d-flex justify-content-between px-3 drop_option_section'>
                            <div className='d-flex justify-content-between w-50 mx-1'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF537B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>

                                    <label>
                                        Risky Item
                                    </label>
                                </div>

                                <div>
                                    <label>
                                        0
                                    </label>
                                </div>
                            </div>

                            <div className='d-flex justify-content-between w-50 mx-1'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF9901" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>

                                    <label>
                                        Attention Item
                                    </label>
                                </div>

                                <div>
                                    <label>
                                        0
                                    </label>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }

                <div className='d-flex justify-content-between mx-3 security_box'>
                    <button className='btn w-100 d-flex justify-content-between' onClick={(() => { setShowcSecurity(!showcsecurity) })}>
                        <div>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3.72754C4 2.07068 5.34315 0.727539 7 0.727539L18 0.727539L23 5.72754L23 21.7275C23 23.3844 21.6569 24.7275 20 24.7275L7 24.7275C5.34315 24.7275 4 23.3844 4 21.7275L4 3.72754Z" fill="#31CB9E" fill-opacity="0.3"></path><path d="M23 5.72754L19 5.72754C18.4477 5.72754 18 5.27982 18 4.72754V0.727539L23 5.72754Z" fill="#31CB9E"></path><path d="M1.03893 9.50102C1.08191 8.83177 1.61174 8.32334 2.27409 8.2183C3.0083 8.10185 3.96438 7.92533 4.70097 7.7023C5.60487 7.4286 6.83927 6.8847 7.58863 6.53944C8.00799 6.34623 8.49201 6.34623 8.91137 6.53944C9.66073 6.8847 10.8951 7.4286 11.799 7.7023C12.5356 7.92533 13.4917 8.10185 14.2259 8.2183C14.8883 8.32334 15.4181 8.83177 15.4611 9.50102C15.6449 12.3638 15.4456 19.8611 8.66673 22.0992C8.39952 22.1874 8.10048 22.1874 7.83327 22.0992C1.05441 19.8611 0.855076 12.3638 1.03893 9.50102Z" fill="#31CB9E"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.35622 8.10465C7.92209 7.83947 8.57793 7.83947 9.14381 8.10465C9.68781 8.35958 10.4263 8.68622 10.9696 8.85659C11.3739 8.98339 11.8898 9.0922 12.3564 9.17555C13.205 9.32713 13.9462 10.0004 13.9862 10.9462C14.0361 12.1267 13.9811 14.0657 13.3085 15.9377C12.6311 17.8228 11.3154 19.6651 8.84659 20.5577C8.46304 20.6963 8.03698 20.6963 7.65343 20.5577C5.18466 19.6651 3.86889 17.8228 3.19154 15.9377C2.51893 14.0657 2.46394 12.1267 2.51384 10.9462C2.55381 10.0004 3.29506 9.32713 4.14364 9.17555C4.61024 9.0922 5.12609 8.98339 5.53041 8.85659C6.07368 8.68622 6.81221 8.35958 7.35622 8.10465ZM8.71946 9.01015C8.42245 8.87096 8.07757 8.87096 7.78056 9.01015C7.23523 9.26571 6.44318 9.61836 5.82965 9.81077C5.36415 9.95675 4.79886 10.0743 4.31949 10.16C3.84633 10.2445 3.52967 10.5927 3.51294 10.9884C3.46556 12.1094 3.52247 13.9013 4.13264 15.5995C4.73807 17.2846 5.87596 18.8517 7.99343 19.6172C8.15727 19.6765 8.34275 19.6765 8.50659 19.6172C10.6241 18.8517 11.762 17.2846 12.3674 15.5995C12.9776 13.9013 13.0345 12.1094 12.9871 10.9884C12.9704 10.5927 12.6537 10.2445 12.1805 10.16C11.7012 10.0743 11.1359 9.95675 10.6704 9.81077C10.0568 9.61836 9.2648 9.26571 8.71946 9.01015Z" fill="#065F44"></path></svg>
                            Contract Security
                        </div>

                        <div>
                            <i class="fa fa-caret-down"></i>
                        </div>
                    </button>
                </div>

                {
                    showcsecurity
                        ?
                        <div className='d-flex justify-content-between px-3 drop_option_section'>
                            <div className='d-flex justify-content-between w-50 mx-1'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF537B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>

                                    <label>
                                        Risky Item
                                    </label>
                                </div>

                                <div>
                                    <label>
                                        0
                                    </label>
                                </div>
                            </div>

                            <div className='d-flex justify-content-between w-50 mx-1'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF9901" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>

                                    <label>
                                        Attention Item
                                    </label>
                                </div>

                                <div>
                                    <label>
                                        0
                                    </label>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }
            </div>
        )
    }

    return (
        <div>
            <div className='d-flex mx-4 limit_main_section'>
                {/* Chart Section */}
                <div className='chart_section'>
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

                    <div>
                        <div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='tab-divswap d-flex'>
                                    <button className={name == 'Active Order' ? 'tab-swap active' : 'tab-swap'} onClick={() => setname('Active Order')}>Active Order</button>
                                    <button className={name == 'Order History' ? 'tab-swap active' : 'tab-swap'} onClick={() => setname('Order History')}>Order History</button>
                                </div>

                                {/* <div>
                                    <button className='btn subscribe_btn'>
                                        <i class="fa fa-bell" aria-hidden="true"></i>
                                        Subscribe
                                    </button>
                                </div> */}
                            </div>

                            <div className='d-flex align-items-center justify-content-center mt-3 px-5'>
                                <div>
                                    <select className='order_dropdown'>
                                        <option>
                                            All Active Orders
                                        </option>

                                        <option>
                                            Open Orders
                                        </option>

                                        <option>
                                            Partially Filled Orders
                                        </option>
                                    </select>
                                </div>

                                <div className='order_search_section mx-2' style={{ marginTop: "10px" }}>
                                    <input className='tab-field1 chart_search' placeholder='Select By Token symbol or token address' />
                                    <i class="fa fa-search fa-lg" aria-hidden="true" style={{ color: "rgb(80, 80, 80)" }}></i>
                                </div>
                            </div>
                            <div>
                                <table className='table order_table mt-3'>
                                    <thead>
                                        <tr>
                                            <th>Trade</th>
                                            <th>Rate</th>
                                            <th>Creaed | Expiry</th>
                                            <th>Filled% | Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td colSpan={5}>
                                                <div className='empty_cell d-flex flex-column justify-content-center mt-5'>
                                                    <i class="fa fa-info-circle fa-2x" aria-hidden="true"></i>
                                                    <label className='mt-3'>
                                                        You don't have any active orders yet
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    ActiveStore == "info"
                        ?
                        <Info />
                        :
                        <div className='limit_section1' style={{ width: '40%', marginLeft: '28px' }}>
                            <div className='swap-text'>Buy or sell tokens at customized prices</div>

                            <div className='search_section' style={{ marginTop: "10px" }}>
                                <i class="fa fa-search fa-lg" aria-hidden="true" style={{ color: "rgb(80, 80, 80)" }}></i>
                                <input className='tab-field1' placeholder='Search by Name, Contract, Symbol' />
                            </div>

                            <div className='swap-div2'>
                                <div className='sp-div1'>
                                    <div style={{ flexDirection: "row", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <div style={{ color: "rgb(169, 169, 169)", marginLeft: " 20px", marginTop: "10px", fontSize: "12px" }}>You Sell</div>
                                        <div style={{ color: "rgb(169, 169, 169)" }}><i class="fa-solid fa-wallet" style={{ color: "rgb(169, 169, 169)", marginLeft: "28vw", marginTop: "10px", marginRight: "10px" }}></i>0</div>
                                    </div>
                                    <div className='justify-content-between' style={{ flexDirection: "row", display: "flex", marginTop: "7px" }}>
                                        <input type="text" className='limit_input' style={{ fontSize: "20px", color: "#fff", fontWeight: "500", marginLeft: "20px", marginTop: "10px", backgroundColor: 'transparent', border: 'none' }} placeholder='0.0' />

                                        <div className='mx-3'>
                                            <button className='btn swap_btn2' onClick={() => { setChainModal(true) }}>
                                                <img src={require(`../Assets/${currency1Icon}`)} width={25} />
                                                <label>
                                                    {currency1}
                                                </label>
                                                <i class="fa fa-angle-down"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>

                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <div className='lmt-div1'>
                                        <div style={{ flexDirection: "row", display: "flex" }}>
                                            <div className='rate_head' style={{ color: "rgb(169, 169, 169)", marginLeft: " 20px", marginTop: "10px", fontSize: "12px" }}>Sell ETH at rate</div>
                                            <div className='wallet_balance' style={{ color: "rgb(169, 169, 169)" }}><i class="fa-solid fa-wallet" style={{ color: "rgb(169, 169, 169)", marginLeft: "16vw", marginTop: "10px", marginRight: "10px" }}></i>0</div>
                                        </div>

                                        <div className='justify-content-between limit_input_section align-items-center' style={{ flexDirection: "row", display: "flex", marginTop: "7px" }}>
                                            <input type="text" className='limit_input' style={{ width: '50%', fontSize: "20px", color: "#fff", fontWeight: "500", marginLeft: "20px", marginTop: "10px", backgroundColor: 'transparent', border: 'none' }} placeholder='0.0' />

                                            <div>
                                                <button className='btn lmt_btn2' onClick={() => { setChainModal(true) }}>
                                                    <img src={require(`../Assets/${currency2Icon}`)} width={20} />
                                                    <label>
                                                        {currency2}
                                                    </label>
                                                    <i class="fa fa-angle-down mx-1"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='lmt-div2'>
                                        <div className='lmt-droptext'>Expire In</div>
                                        {/* <div>
                            <nav>
                                <ul>
                                    <li><a href="#">7 days</a>
                                  
                                    <ul>
                                        <li><a href="#">5 minutes</a></li>
                                        <li><a href="#">10 minutes</a></li>
                                        <li><a href="#">1 hour</a></li>
                                        <li><a href="#">3 days</a></li>
                                        <li><a href="#">7 days</a></li>
                                        <li><a href="#">1 month</a></li>
                                        <li><a href="#">Custom</a></li>
                                    </ul>        
                                    </li>
                                   
                                    
                                </ul>
                            </nav>
                        </div> */}
                                        <div style={{ fontSize: "15px", marginLeft: "20px", color: "#fff", marginTop: "20px" }}>7 days</div>
                                    </div>


                                </div>

                                <div className='d-flex mx-3 mt-3 justify-content-between'>
                                    <div>
                                        <i class="fa fa-refresh mx-1" style={{ color: 'rgb(169, 169, 169)' }} sty aria-hidden="true"></i>
                                        <label style={{ fontSize: '12px', fontWeight: '500', color: 'rgb(169, 169, 169)' }}>
                                            Calculating...
                                        </label>
                                    </div>

                                    <div>
                                        {/* <label className='price_alert'>
                            <i class="fa fa-clock mx-1" ></i>
                            Price Alert
                        </label> */}

                                        <button className='swap_currency_btn' onClick={() => { SwapCurrency() }}>
                                            <i className='fa fa-exchange' />
                                        </button>
                                    </div>
                                </div>

                                <div className='sp-div1'>
                                    <div style={{ flexDirection: "row", display: "flex", justifyContent: "center" }}>
                                        <div style={{ color: "rgb(169, 169, 169)", marginLeft: " 20px", marginTop: "10px", fontSize: "12px" }}>You Sell</div>
                                        <div style={{ color: "rgb(169, 169, 169)" }}><i class="fa-solid fa-wallet" style={{ color: "rgb(169, 169, 169)", marginLeft: "28vw", marginTop: "10px", marginRight: "10px" }}></i>0</div>
                                    </div>
                                    <div className='justify-content-between' style={{ flexDirection: "row", display: "flex", marginTop: "7px" }}>
                                        {/* <div style={{ fontSize: "20px", color: "rgb(55, 55, 55)", fontWeight: "500", marginLeft: "20px", fontSize: "30px" }}>0.0</div> */}
                                        <input type="text" className='limit_input' style={{ fontSize: "20px", color: "#fff", fontWeight: "500", marginLeft: "20px", marginTop: "10px", backgroundColor: 'transparent', border: 'none' }} placeholder='0.0' />


                                        <div className='mx-3'>
                                            <button className='btn swap_btn2' onClick={() => { setChainModal(true) }}>
                                                <img src={require(`../Assets/${currency2Icon}`)} width={25} />
                                                <label>
                                                    {currency2}
                                                </label>
                                                <i class="fa fa-angle-down"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>

                                <div>
                                    <button className='conbtn-swap' onClick={() => setWalletModal(true)}>Connect wallet</button>
                                </div>

                            </div>

                        </div>
                }


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

                    <div className='mt-4 chain_list_section'>
                        <span className='chain_select'>
                            <img src={require('../Assets/eth.png')} width={20} />
                            ETH
                        </span>

                        <span className='chain_select'>
                            <img src={require('../Assets/8bitchain.png')} width={20} />
                            w8Bit
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
                            <img src={require('../Assets/fox.png')} width={20} />
                            <label>
                                Metamask
                            </label>
                        </button>

                        <button className='btn chain_names'>
                            <img src={require('../Assets/walletconnect.png')} width={20} />
                            <label>
                                Wallet Connect
                            </label>
                        </button>

                        <button className='btn chain_names'>
                            <img src={require('../Assets/brave.png')} width={20} />
                            <label>
                                Brave Wallet
                            </label>
                        </button>

                        <button className='btn chain_names'>
                            <img src={require('../Assets/coin98.png')} width={20} />
                            <label>
                                Coin98
                            </label>
                        </button>

                        <button className='btn chain_names'>
                            <img src={require('../Assets/coinbase.jpg')} width={20} />
                            <label>
                                Coinbase
                            </label>
                        </button>

                        <button className='btn chain_names'>
                            <img src={require('../Assets/trust.png')} width={20} />
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