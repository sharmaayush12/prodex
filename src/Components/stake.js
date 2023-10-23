import React from 'react'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { Link } from 'react-router-dom';

export default function Stake(poolView) {

    return (
        <div className='stake_box p-3 mt-3'>
            <div className='d-flex'>
                <div className='d-flex flex-column stake_amount_details'>
                    <label>
                        $w8Bit in your wallet:
                    </label>

                    <label>
                        <i class="fa-solid fa-wallet"></i>
                        0.00
                    </label>
                </div>
            </div>

            <div className='mt-3'>
                <div className='d-flex flex-column  mt-3'>
                    <label>stake Amount</label>

                    <div className='unstake_amount mt-3'>
                        <input type="text" value='0' />

                        <button>
                            Max
                        </button>
                    </div>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-between mt-3'>
                <div className='tokens_stake_details'>
                    <label>
                        Tokens:0 8Bit Chain
                    </label>
                </div>

                <div className='tokens_stake_details'>
                    <button>
                        <i class="fa-solid fa-landmark-dome"></i>
                        Stake
                    </button>
                </div>
            </div>

            {
                poolView.viewset === false
                    ?
                    <div className='d-flex justify-content-between mt-5'>
                        <div className='d-flex align-items-center'>
                            <label className='mx-2'>
                                Total staked:
                            </label>

                            <div className='d-flex align-items-center'>
                                <img src={require('../Assets/8bitchain.png')} width={30} alt="currency" />

                                <label style={{ textAlign: 'left', marginLeft: '10px', color: '#fff' }}>
                                    8BitChain: 0.00
                                    <br />
                                    USD: $0.00
                                </label>
                            </div>
                        </div>

                        <div className='stake_footer'>
                            <label>
                                <Link>
                                    See token info <i class="fa fa-external-link" aria-hidden="true"></i>
                                </Link>
                            </label>

                            <label>
                                <Link>
                                    View project info <i class="fa fa-external-link" aria-hidden="true"></i>
                                </Link>
                            </label>

                            <label>
                                <Link>
                                    View contract <i class="fa fa-external-link" aria-hidden="true"></i>
                                </Link>
                            </label>
                        </div>
                    </div>
                    :
                    null
            }


        </div >
    )
}
