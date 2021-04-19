import React from 'react'
import './currencyconverter.css'
const CurrencyConverter = () => {
    return (
        <div className = "currency-converter">
            <p> Select Currency : </p>
            
            <div className="white-container">
                <div className="input-flex">
                    <select>
                    <option value="AFYA">AFYA</option>
                    <option value="ZAR"> ZAR </option>
                    </select>
                    <input type="number" placeholder = '0.000000001'/>
                    </div>

                    <input type="button" value = 'Send'/>
                    <input type="button" value = "Receive"/>

            </div>
            
        </div>
    )
}

export default CurrencyConverter
