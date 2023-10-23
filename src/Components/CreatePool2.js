import React from 'react'
import { useState } from 'react'
import Stake from './stake';
import Unstake from './Unstake';
import { useNavigate } from 'react-router-dom';

export default function CreatePool2() {

  const [activeStep, setActivestep] = useState('Add or create pool');
  const [stakeactive, setStakeactive] = useState('stake');
  const [locktime, setLocktime] = useState('30 days');
  const [lock, setLock] = useState();

  const [Lockshow, setLockShow] = useState(false);
  const [LockName, setLockName] = useState("No");

  const navigate = useNavigate();

  function PoolCreate() {
    return (
      <>
        <div className='pool2-text mt-3'>NFT Contract*</div>

        <input className='pool-field' placeholder='Enter Here......' />

        <div className='pool2-text1 mt-3'>
          Contract Address of token/coin* (Rewards)
        </div>

        <input className='pool-field' placeholder='Enter Here......' />

        <div className='pool2-text1 mt-3'>
          Value of 1 NFT in token/coin*
        </div>

        <input className='pool-field' placeholder='Enter Here......' />

        <div className='row sm-box mt-3'>
          <div className='col-2 sm-text'>
            APY*
          </div>
          <div className='col-2 sm-text'>
            Performance Fee(%)*
          </div>

          <div className='col-2 sm-text'>
            Early Unstake Penalty(%)*
          </div>
          <div className='col-4'></div>
        </div>

        <div className='row sm-box'>
          <div className='col-2'><input className="pool-fieldsm" placeholder='0' /></div>
          <div className='col-2'><input className="pool-fieldsm" placeholder='0' /></div>
          <div className='col-2'><input className="pool-fieldsm" placeholder='0' /></div>
          {/* <div className='col-2'><input className="pool-fieldsm" placeholder='0' /></div> */}
          <div className='col-4'></div>
        </div>

        <div className='pool2-text1 mt-3'>
          Duration
        </div>

        <input className='pool-field' placeholder='Duration as Stake Duration (Days)' />

        <div className='mt-3 d-flex align-items-center' style={{ color: "#fff", marginLeft: "40px" }}>
          Lock*
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
        </div>

        {
          LockName === 'Yes'
            ?
            <input className='pool-field' placeholder='Enter Lock Time Here......' />
            :
            console.log(lock)
        }

        {/* {
          lock == 'Yes'
            ?
            <div>
              <div style={{ marginTop: '20px', marginLeft: '30px' }}>
                <span className={locktime == '1 week' ? 'lock_tabs active_lock' : 'lock_tabs'} onClick={() => { setLocktime('1 week') }}>
                  30 Days
                </span>

                <span className={locktime == '1 month' ? 'lock_tabs active_lock' : 'lock_tabs'} onClick={() => { setLocktime('1 month') }}>
                  90 Days
                </span>

                <span className={locktime == '3 month' ? 'lock_tabs active_lock' : 'lock_tabs'} onClick={() => { setLocktime('3 month') }}>
                  180 Days
                </span>

                <span className={locktime == '6 month' ? 'lock_tabs active_lock' : 'lock_tabs'} onClick={() => { setLocktime('6 month') }}>
                  365  Days
                </span>

                <span className={locktime == '1 year' ? 'lock_tabs active_lock' : 'lock_tabs'} onClick={() => { setLocktime('1 year') }}>
                  1 Year
                </span>
              </div>
            </div>
            :
            null
        } */}



        {/* <div className='row sm-box'>
          <div className='col-1'>
            <button className='pool-btnsm'>1 Week</button>
          </div>
          <div className='col-1'>
            <button className='pool-btnsm'>1 Month</button>
          </div>
          <div className='col-1'>
            <button className='pool-btnsm'>3 Month</button>
          </div>
          <div className='col-1'>
            <button className='pool-btnsm'>6 Month</button>
          </div>
          <div className='col-1'>
            <button className='pool-btnsm'>1 Year</button>
          </div> */}
        {/* <div className='col-2 checkbox'>
            <input type="checkbox" />
            <label for="vehicle1" className='lable-cs'>
              use custom period?
            </label>
          </div> */}
        {/* <div className='col-5'></div>
        </div> */}

        <div className='d-flex'>
          {
            activeStep == "Add or create pool"
              ?
              null
              :
              <button className='pool-btn' onClick={() => { setActivestep('Add or create pool') }}>Previous</button>
          }

          <button className='pool-btn' onClick={() => { setActivestep('pool details') }}>Create Pool Contract</button>
        </div>
      </>
    )
  }

  function PoolDetails() {
    return (
      <>
        <table className='table overview_table'>
          <tr>
            <td>
              Token Contract
            </td>

            <td>
              0x000..023
            </td>
          </tr>

          <tr>
            <td>
              Contract Address of token/coin*
            </td>

            <td>
              0x902fs...230f0
            </td>
          </tr>

          <tr>
            <td>
              Value of 1 NFT in token/coin*
            </td>

            <td>
              4.609
            </td>
          </tr>

          <tr>
            <td>
              APY*
            </td>

            <td>
              10%
            </td>
          </tr>

          <tr>
            <td>
              Performance Fee(%)*
            </td>

            <td>
              2%
            </td>
          </tr>

          <tr>
            <td>
              Early Stake Period(Days)*
            </td>

            <td>
              5 Days
            </td>
          </tr>

          <tr>
            <td>
              Early Unstake Penalty(%)*
            </td>

            <td>
              2%
            </td>
          </tr>

          <tr>
            <td>
              Lock
            </td>

            <td>
              Yes
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

          <button className='pool-btn' onClick={() => { navigate("/NFT") }}>View Pool</button>
        </div>
        {/* <>
        <div style={{ marginLeft: "40px", marginTop: "20px" }}>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1" className='lable-cs'> You already have a pool,just want to list it?</label>
        </div>

        <div className='pool2-text'>Token Contract*</div>

        <input className='pool-field' placeholder='Enter Here......' />

        <div className='pool2-text1'>
          Contract Address of token/coin*
        </div>

        <input className='pool-field' placeholder='Enter Here......' />

        <div className='pool2-text1'>
          Value of 1 NFT in token/coin*
        </div>

        <input className='pool-field' placeholder='Enter Here......' />

        <div className='row sm-box'>
          <div className='col-2 sm-text'>
            APY*
          </div>
          <div className='col-2 sm-text'>
            Performance Fee(%)*
          </div>
          <div className='col-2 sm-text'>
            Early Stake Period(Days)*
          </div>
          <div className='col-2 sm-text'>
            Early Unstake Penalty(%)*
          </div>
          <div className='col-4'></div>
        </div>

        <div className='row sm-box'>
          <div className='col-2'><input className="pool-fieldsm" placeholder='0' /></div>
          <div className='col-2'><input className="pool-fieldsm" placeholder='0' /></div>
          <div className='col-2'><input className="pool-fieldsm" placeholder='0' /></div>
          <div className='col-2'><input className="pool-fieldsm" placeholder='0' /></div>
          <div className='col-4'></div>
        </div>

        <div style={{ color: "#fff", marginLeft: "40px", marginTop: "40px" }}>Lock*</div>

        <div className='row sm-box'>
          <div className='col-1'>
            <button className='pool-btnsm'>1 Week</button>
          </div>
          <div className='col-1'>
            <button className='pool-btnsm'>1 Month</button>
          </div>
          <div className='col-1'>
            <button className='pool-btnsm'>3 Month</button>
          </div>
          <div className='col-1'>
            <button className='pool-btnsm'>6 Month</button>
          </div>
          <div className='col-1'>
            <button className='pool-btnsm'>1 Year</button>
          </div>
          <div className='col-2 checkbox'>
            <input type="checkbox" />
            <label for="vehicle1" className='lable-cs'>
              use custom period?
            </label>
          </div>
          <div className='col-5'></div>
        </div>

        <div style={{ marginLeft: "40px", marginTop: "10px" }}>
          <input type="checkbox" />
          <label for="vehicle1" className='lable-cs'>Is Auto Staking Enabled?</label>
        </div>

        <div className='d-flex'>
          {
            activeStep == "Add or create pool"
              ?
              null
              :
              <button className='pool-btn' onClick={() => { setActivestep('Add or create pool') }}>Previous</button>
          }

          <button className='pool-btn' onClick={() => { setActivestep('View Pool') }}>Create Pool Contract</button>
        </div>
      </> */}
      </>
    )
  }

  // function ViewPool() {
  //   return (
  //     <>
  //       <div>
  //         <div className='d-flex align-items-center  mt-3 justify-content-center'>
  //           <button className={stakeactive == 'stake' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('stake') }}>Stake</button>
  //           <button className={stakeactive == 'unstake' ? 'unstake_btn active_stake' : 'unstake_btn'} onClick={() => { setStakeactive('unstake') }}>Unstake</button>
  //         </div>

  //         <div>
  //           {
  //             stakeactive == 'stake'
  //               ?
  //               <Stake viewset={false} />
  //               :
  //               <Unstake viewset={false} />
  //           }
  //         </div>

  //         <div className='d-flex'>
  //           {
  //             activeStep == "Add or create pool"
  //               ?
  //               null
  //               :
  //               <button className='pool-btn' onClick={() => { setActivestep('pool details') }}>Previous</button>
  //           }

  //           <button className='pool-btn'>Create Pool Contract</button>
  //         </div>
  //       </div>
  //     </>
  //   )
  // }
  return (
    <>
      <div className='pool-box2 mt-2 mx-2'>
        <div className='d-flex justify-content-between align-items-center mx-3 my-4 NFT_pool_levels_section'>
          <div className={activeStep == "Add or create pool" ? 'pool_level active_pool_level' : 'pool_level'}>
            <i class="fa fa-pencil"></i>
            <label>
              Add or create pool
            </label>
          </div>

          <hr />

          <div className={activeStep == "pool details" ? 'pool_level active_pool_level' : 'pool_level'}>
            <i class="fa fa-file"></i>
            <label>
              Overview
            </label>
          </div>

          {/* <hr /> */}

          <div>
            <button className='cross_btn' onClick={() => navigate('/NFT')}>
              <i class="fa fa-times fa-lg"></i>
            </button>
          </div>
        </div>

        {
          activeStep == "Add or create pool"
            ?
            PoolCreate()
            :
            // activeStep == "pool details"
            //   ?
            PoolDetails()
          // :
          // activeStep == "View Pool"
          //   ?
          //   ViewPool()
          //   :
          //   null
        }

      </div>
    </>
  )
}
