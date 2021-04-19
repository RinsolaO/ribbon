import React from 'react'
import './styles.css'
import CurrencyBox from '../components/CurrencyBox/index'
import CurrencyConverter from '../components/CurrencyConverter/index'
import RecentActivity from '../components/recentActivity/index'
import Menu from '../components/menu/index'



const mainscreen = () => {
    return (
        <div>
            <CurrencyBox />
            <CurrencyConverter />
            <RecentActivity />
            {/* <Menu /> */}
        </div>
    )
}


export default mainscreen
