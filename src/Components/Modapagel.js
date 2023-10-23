import React from 'react'

export default function Modalpage() {
  return (
    <>
      <div className='pool-box2' style={{ width: '100%' }}>
        <div style={{ marginLeft: "40px", marginTop: "20px", fontSize: "18px", fontWeight: "700", textDecoration: "underline orange", color: "#fff" }}>
          ROI Calculator
        </div>

        <div className='pool2-text'>8BitChain*</div>

        <input className='pool-field' placeholder='0' />

        <div className='pool2-text1 mt-3'>
          Staked For
        </div>

        <div className='d-flex Days_btn mt-3' style={{ marginLeft: "30px" }}>
          <button className='active_days'>1D</button>
          <button>7D</button>
          <button>30D</button>
          <button>1Y</button>
          <button>5Y</button>
        </div>

        {/* <div className='cal-box d-flex align-items-center justify-content-between'>
          <div>
            <div className='cal-text1'>YIELD BOOSTER</div>
            <div className='cal-text2'>Up to 1x</div>
            <div className='cal-text3'>Enable boost by staking 8Bit</div>
          </div>

          <div className='filter_section'>
            <input type="checkbox" />
          </div>
        </div> */}

        <div className='pool2-text1 mt-3'>
          Auto Compunding Every
        </div>

        <div className='mt-3' style={{ marginLeft: "40px", display: "flex", flexDirection: "row", alignItems: 'center' }}>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />

          <div className='d-flex Days_btn' style={{ marginLeft: "30px" }}>
            <button className='active_days'>1D</button>
            <button>7D</button>
            <button>30D</button>
            <button>1Y</button>
            <button>5Y</button>
          </div>

        </div>

        <div className='cal-box2'>
          <div className='cal-text1'>Total for: 1 Day ROI</div>
          <div className='cal-text2'>ROI AT CURRENT RATES(Estimted)</div>

          <div>
            <button className='cal-btn'>~347.2</button>
          </div>
          <hr />

          <div>
            <button className='cal-btn2'>Reset Calculation</button>
          </div>

          <div className='cal-content'>This calculator and estimated calculation are provided with no guarantees. Values may differ greatly due to innacurate data provided. Other factors also may play role on calculation, please use this calculator at your own risk.</div>
        </div>




      </div>
    </>
  )
}
