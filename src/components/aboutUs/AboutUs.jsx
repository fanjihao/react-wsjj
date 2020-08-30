import React from 'react'
import '../goodsCenter/GoodsCenter.css'
import './AboutUs.css'
import LXWM from '../publicCom/LianXiWM'
import { Link, Route, NavLink, Redirect } from 'react-router-dom'
import EnterpriseCertification from './EnterpriseCertification'
import EnterpriseCulture from './EnterpriseCulture'
import ComProfile from './ComProfile'

class AboutUs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bread:'>公司概要'
        }
    }
    toProfile = () => {
        this.setState({
            bread:'>公司概要'
        })
    }
    toCulture = () => {
        this.setState({
            bread:'>企业文化'
        })
    }
    toCertificate = () => {
        this.setState({
            bread:'>企业认证'
        })
    }
    render() {
        return (
            <div className='GoodsCenter'>
                <div className='gscCenter'>
                    <div className='gscLeft'>
                        <div className='comNav'>
                            <div className='navlinkBox' onClick={this.toProfile}>
                                <NavLink to='/AboutUs/ComProfile'
                                    className='navItem'>
                                        公司概要
                                </NavLink>
                            </div>
                            <div className='navlinkBox' onClick={this.toCulture}>
                                <NavLink to='/AboutUs/EnterpriseCulture'
                                    className='navItem'>
                                        企业文化
                                </NavLink>
                            </div>
                            <div className='navlinkBox' onClick={this.toCertificate}>
                                <NavLink to='/AboutUs/EnterpriseCertification'
                                    className='navItem'>
                                        企业认证
                                </NavLink>
                            </div>
                        </div>
                        <LXWM />
                    </div>
                    <div className='gscRight'>
                        <div className='rightBrandNav'>
                            <p>关于我们</p>
                            <div>
                                <Link to='/Home'>首页</Link>
                                {'>'}
                                <Link to='/AboutUs'>关于我们</Link>
                                <span>{this.state.bread}</span>
                            </div>
                        </div>
                        <div className='rightGoods'>
                            <Redirect from='/AboutUs' to='/AboutUs/ComProfile'></Redirect>
                            <Route path='/AboutUs/ComProfile' component={ComProfile}></Route>
                            <Route path='/AboutUs/EnterpriseCulture' component={EnterpriseCulture}></Route>
                            <Route path='/AboutUs/EnterpriseCertification' component={EnterpriseCertification}></Route>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AboutUs