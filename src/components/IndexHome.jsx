import React from 'react'
import './IndexHome.css'
import { Route, Link } from "react-router-dom"
import Home from './home/Home'
import TopNav from './topNav/TopNav'
import GoodsCenter from './goodsCenter/GoodsCenter'
import AboutUs from './aboutUs/AboutUs'
import NewsInfo from './newsInfo/NewsInfo'
import InfoDetail from './newsInfo/InfoDetail'
import Technology from './technical/Technology'
import Recruitment from './recruitment/Recruitment'
import ContactUs from './contactUs/ContactUs'
import TechDetail from './technical/TechDetail'

class IndexHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='indexhome'>
                <TopNav ha={this.props}/>
                <div>
                    {/* <Redirect to='Home'></Redirect> */}
                    <Route path='/Home' component={Home}></Route>
                    <Route path='/GoodsCenter' component={GoodsCenter}></Route>
                    <Route path='/AboutUs' component={AboutUs}></Route>
                    <Route path='/NewsInfo' component={NewsInfo}></Route>
                    <Route path='/InfoDetail' component={InfoDetail}></Route>
                    <Route path='/Technology' component={Technology}></Route>
                    <Route path='/Recruitment' component={Recruitment}></Route>
                    <Route path='/ContactUs' component={ContactUs}></Route>
                    <Route path='/TechDetail' component={TechDetail}></Route>
                </div>
                <div className='footLink'>
                    <div>
                        <b>友情链接：</b>
                        <Link to='/AboutUs'>关于我们</Link>
                        <Link to='/NewsInfo'>新闻资讯</Link>
                        <Link to='/GoodsCenter'>产品中心</Link>
                        <Link to='/ContactUs'>联系我们</Link>
                    </div>
                </div>
                <div className='pageFoot'>
                    Copyright © Pino 重庆万森家居有限公司
                </div>
            </div>
        )
    }
}
export default IndexHome