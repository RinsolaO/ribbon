import React from 'react'
import './currencybox.css'

const CurrencyBox = () => {
    return (
            <div className="white-container">
                <div className = "mini-container">
                    <div className="grid-left">
                        <div className="circle">
                            <h5>AFYA</h5>
                        </div>
                        <h3> 143.00 </h3>
                        <h6>Balance</h6>
                            
                    </div>
                    <div className="grid-right">
                        <div className="circle">
                            <h5>ZAR</h5>
                        </div>
                        <h3> R21.00 </h3>
                        <h6>Equivalent</h6>
                            
                    </div>
                </div>
             </div>
            
        
    )
}


export default CurrencyBox
