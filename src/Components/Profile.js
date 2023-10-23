import React from 'react'
import { useNavigate } from 'react-router-dom'
import truncateEthAddress from 'truncate-eth-address'

export default function Profile() {
    const navigate=useNavigate();
    return (
        <div className='profile-box px-3'>
            <div className='profile-heading'>
                <label>Profile Details</label>
            </div>

            <div className='row profile-div2'>
                <div className='col-1'><i class="fa fa-info-circle fa-lg pdiv2-icon"></i></div>
                <div className='col-9 pdiv2-text'>You are not signed in with this wallet address click sign in to link your wallet to a profile. This will allow us to offer you a better experience. Read more here</div>
                <div className='col-2'>
                    <button className='pdiv2-btn'>Sign-in</button>
                </div>
            </div>

            <hr />

            <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                    <div>
                        <label style={{ marginLeft: 50 }}>Username (Optional)</label><br />
                        <input className='profile-input' placeholder='your nickname'></input>
                    </div>

                    <div style={{ marginTop: 20 }}>
                        <label style={{ marginLeft: 50 }}>Email Address (Optional)</label><br />
                        <input className='profile-input' placeholder='example@email.com'></input>
                    </div>
                </div>

                <div className='profile_btn'>
                    <div className='profile-img d-flex flex-column align-items-center'>
                        <label>Profile Picture</label>
                        <div className='d-flex flex-column overflow-hidden'>
                            <img src={require('../Assets/user.png')} width={100} />
                            <button className='btn edit_btn'>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
                <div className='pro-btn'>
                    <button className='pro-btn1'><i class="fa fa-save" style={{ marginRight: "10px", color: "#6d6d6f" }} aria-hidden="true"></i>Save</button>
                </div>

                <div className='pro-btn'>
                    <button className='pro-btn2'><i class="fa-solid fa-file-export" style={{ marginRight: "10px", color: "#6d6d6f" }} aria-hidden="true"></i>Export</button>
                </div>
            </div>

            <table className='farm_table_view profile_transaction'>
                <thead>
                    <tr>
                        <th>
                            Token Pair | Fee
                        </th>

                        <th>
                            Time
                        </th>

                        <th>
                            TXL Hash
                        </th>

                        <th>
                            Txn Type
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
                            14/2/23 12:00 AM
                        </td>

                        <td style={{ color: '#ffba00' }}>
                        {truncateEthAddress('0x395723e3e9bac559ddf8339d4d2368baf7e023c71d73fcab0e6e2d2be581a81e')}
                        </td>

                        <td>
                           Staking
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
                            14/2/23 12:00 AM
                        </td>

                        <td style={{ color: '#ffba00' }}>
                        {truncateEthAddress('0x395723e3e9bac559ddf8339d4d2368baf7e023c71d73fcab0e6e2d2be581a81e')}
                        </td>

                        <td>
                           NFT
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
                            14/2/23 12:00 AM
                        </td>

                        <td style={{ color: '#ffba00' }}>
                        {truncateEthAddress('0x395723e3e9bac559ddf8339d4d2368baf7e023c71d73fcab0e6e2d2be581a81e')}
                        </td>

                        <td>
                           NFT
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
                            14/2/23 12:00 AM
                        </td>

                        <td style={{ color: '#ffba00' }}>
                        {truncateEthAddress('0x395723e3e9bac559ddf8339d4d2368baf7e023c71d73fcab0e6e2d2be581a81e')}
                        </td>

                        <td>
                           NFT
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
                            14/2/23 12:00 AM
                        </td>

                        <td style={{ color: '#ffba00' }}>
                        {truncateEthAddress('0x395723e3e9bac559ddf8339d4d2368baf7e023c71d73fcab0e6e2d2be581a81e')}
                        </td>

                        <td>
                           NFT
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
                            14/2/23 12:00 AM
                        </td>

                        <td style={{ color: '#ffba00' }}>
                        {truncateEthAddress('0x395723e3e9bac559ddf8339d4d2368baf7e023c71d73fcab0e6e2d2be581a81e')}
                        </td>

                        <td>
                           NFT
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
                            14/2/23 12:00 AM
                        </td>

                        <td style={{ color: '#ffba00' }}>
                        {truncateEthAddress('0x395723e3e9bac559ddf8339d4d2368baf7e023c71d73fcab0e6e2d2be581a81e')}
                        </td>

                        <td>
                           NFT
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
                            14/2/23 12:00 AM
                        </td>

                        <td style={{ color: '#ffba00' }}>
                        {truncateEthAddress('0x395723e3e9bac559ddf8339d4d2368baf7e023c71d73fcab0e6e2d2be581a81e')}
                        </td>

                        <td>
                           NFT
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
                            14/2/23 12:00 AM
                        </td>

                        <td style={{ color: '#ffba00' }}>
                        {truncateEthAddress('0x395723e3e9bac559ddf8339d4d2368baf7e023c71d73fcab0e6e2d2be581a81e')}
                        </td>

                        <td>
                           NFT
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
                            14/2/23 12:00 AM
                        </td>

                        <td style={{ color: '#ffba00' }}>
                        {truncateEthAddress('0x395723e3e9bac559ddf8339d4d2368baf7e023c71d73fcab0e6e2d2be581a81e')}
                        </td>

                        <td>
                           NFT
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
                            14/2/23 12:00 AM
                        </td>

                        <td style={{ color: '#ffba00' }}>
                        {truncateEthAddress('0x395723e3e9bac559ddf8339d4d2368baf7e023c71d73fcab0e6e2d2be581a81e')}
                        </td>

                        <td>
                           NFT
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
                            14/2/23 12:00 AM
                        </td>

                        <td style={{ color: '#ffba00' }}>
                        {truncateEthAddress('0x395723e3e9bac559ddf8339d4d2368baf7e023c71d73fcab0e6e2d2be581a81e')}
                        </td>

                        <td>
                           NFT
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
        </div>
    )
}