import React from 'react'

export default function Claim() {
    return (
        <div>
            <div className='stake_box p-3 mt-3'>
                <div>
                    <div className='d-flex flex-column stake_amount_details'>
                        <label>
                            Earned Reward:
                        </label>

                        <label>
                            <i class="fa-solid fa-landmark-dome"></i>
                            2000
                        </label>
                    </div>

                    <div className='d-flex flex-column  mt-3'>
                        <label>Claim Amount</label>

                        <div className='unstake_amount mt-3'>
                            <input type="text" value='0' />

                            <button>
                                Max
                            </button>
                        </div>
                    </div>

                    <div className='d-flex align-items-center justify-content-between mt-3'>
                        <div className='tokens_stake_details'>
                            <button>
                                <i class="fa-solid fa-landmark-dome"></i>
                                Claim
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className='note_claim'>
                            Note:- in unstake section there is one typo.
                            update w8Bit in your wallet as Your staked w8Bit

                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}
