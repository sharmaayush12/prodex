import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap-v5';
import Modalpage from './Modapagel';

export default function FarmingPool({ props }) {
    const [View, setView] = useState('');
    const [ROIModal, setROIModal] = useState(false);


    const navigate = useNavigate()
    useEffect(() => {
        setView(props)
        console.log(View)
    }, [View])
    return (
        <>
            {
                props == "Grid"
                    ?
                    <div className='pool_list_section'>
                        <div className='pool_box'>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'>
                                    <div>
                                        <img src={require('../Assets/8bitchain.png')} width={20} />
                                    </div>

                                    <div>
                                        <img src={require('../Assets/bnb.png')} width={20} />
                                    </div>

                                    <div>
                                        <label className='conins_name_label'>
                                            w8Bit - BNB
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

                                    <button className='btn options_btn' onClick={() => { setROIModal(true) }}>
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <div className='highlight'>
                                    <label className='avg_pool highlight__text'>
                                        Avg APR
                                    </label>

                                    <span class="highlight__tooltip" style={{left:'23vw',width:'37vw',top:'0'}}>
                                        <label className='ARP_txt'>
                                            Pool ARP:<b> 85.09%</b>
                                        </label>

                                        <hr/>

                                        <i>
                                            Estimated return from trading fees if you participate in the pool
                                        </i>
                                    </span>
                                </div>


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
                            </div>
                        </div>

                        <div className='pool_box'>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'>
                                    <div>
                                        <img src={require('../Assets/8bitchain.png')} width={20} />
                                    </div>

                                    <div>
                                        <img src={require('../Assets/bnb.png')} width={20} />
                                    </div>

                                    <div>
                                        <label className='conins_name_label'>
                                            w8Bit - BNB
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

                                    <button className='btn options_btn' onClick={() => { setROIModal(true) }}>
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <div className='highlight'>
                                    <label className='avg_pool highlight__text'>
                                        Avg APR
                                    </label>

                                    <span class="highlight__tooltip" style={{left:'23vw',width:'37vw',top:'0'}}>
                                        <label className='ARP_txt'>
                                            Pool ARP:<b> 85.09%</b>
                                        </label>

                                        <hr/>

                                        <i>
                                            Estimated return from trading fees if you participate in the pool
                                        </i>
                                    </span>
                                </div>


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
                            </div>
                        </div>


                    </div>
                    :
                    <table className='farm_table_view'>
                        <thead>
                            <tr>
                                <th>
                                    Token Pair | Fee
                                </th>

                                <th>
                                    TVL
                                </th>

                                <th>
                                    ARP
                                </th>

                                <th>
                                    Volume
                                </th>

                                <th>
                                    Fees
                                </th>

                                <th>
                                    My Liquidity
                                </th>

                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <div className='d-flex flex-column'>
                                        <div className='d-flex'>
                                            <div>
                                                <img src={require('../Assets/eth.png')} width={20} />
                                            </div>

                                            <div>
                                                <img src={require('../Assets/bnb.png')} width={20} />
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

                                        <div className='d-flex data_list mt-2'>
                                            <div>
                                                <i class="fa-solid fa-copy mx-2"></i>
                                                0xd8...31
                                            </div>

                                            <div>
                                                <i class="fa fa-share-alt mx-2"></i>
                                                Share
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    $2,040,544.63
                                </td>

                                <td style={{ color: '#ffba00' }}>
                                    0.00%
                                </td>

                                <td>
                                    $0.00
                                </td>

                                <td>
                                    $0.00
                                </td>

                                <td>
                                    -
                                </td>

                                <td>
                                    <div className='farm_table_action_btn'>
                                        <button onClick={() => { navigate('/Addliquidity') }}>
                                            <i class="fa fa-plus" aria-hidden="true"></i>
                                        </button>

                                        <button>
                                            <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                        </button>
                                    </div>

                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className='d-flex flex-column'>
                                        <div className='d-flex'>
                                            <div>
                                                <img src={require('../Assets/eth.png')} width={20} />
                                            </div>

                                            <div>
                                                <img src={require('../Assets/bnb.png')} width={20} />
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

                                        <div className='d-flex data_list mt-2'>
                                            <div>
                                                <i class="fa-solid fa-copy mx-2"></i>
                                                0xd8...31
                                            </div>

                                            <div>
                                                <i class="fa fa-share-alt mx-2"></i>
                                                Share
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    $2,040,544.63
                                </td>

                                <td style={{ color: '#ffba00' }}>
                                    0.00%
                                </td>

                                <td>
                                    $0.00
                                </td>

                                <td>
                                    $0.00
                                </td>

                                <td>
                                    -
                                </td>

                                <td>
                                    <div className='farm_table_action_btn'>
                                        <button onClick={() => { navigate('/Addliquidity') }}>
                                            <i class="fa fa-plus" aria-hidden="true"></i>
                                        </button>

                                        <button>
                                            <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                        </button>
                                    </div>

                                </td>
                            </tr>
                        </tbody>
                    </table>
            }

            <Modal
                show={ROIModal}
                onHide={() => { setROIModal(false) }}
                // fullscreen={true}
                centered
            >
                <Modalpage />
            </Modal>
        </>
    )
}
