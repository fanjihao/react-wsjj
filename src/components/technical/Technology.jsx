import React from 'react'
import '../goodsCenter/GoodsCenter.css'
import './Technology.css'
import LXWM from '../publicCom/LianXiWM'
import { Link, Route, NavLink } from 'react-router-dom'
import Allfile from './Allfile'
import Share from './Share'
import Experimental from './Experimental'

class Technology extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bread:''
        }
    }
    toShare = () => {
        this.setState({
            bread:'>专业分享'
        })
    }
    toExper = () => {
        this.setState({
            bread:'>试验研发'
        })
    }
    render() {
        return (
            <div className='GoodsCenter'>
                <div className='gscCenter'>
                    <div className='gscLeft'>
                        <div className='techNav'>
                            <div className='navlinkBox' onClick={this.toShare}>
                                <NavLink to='/Technology/Share'
                                    className='navItem'>
                                        专业分享
                                </NavLink>
                            </div>
                            <div className='navlinkBox' onClick={this.toExper}>
                                <NavLink to='/Technology/Experimental'
                                    className='navItem'>
                                        试验研发
                                </NavLink>
                            </div>
                        </div>
                        <LXWM />
                    </div>
                    <div className='gscRight'>
                        <div className='rightBrandNav'>
                            <p>技术交流</p>
                            <div>
                                <Link to='/Home'>首页</Link>
                                {'>'}
                                <Link to='/Technology'>技术交流</Link>
                                <span>{this.state.bread}</span>
                            </div>
                        </div>
                        <div className='rightGoods'>
                            <Route exact path='/Technology' component={Allfile}></Route>
                            <Route path='/Technology/Share' component={Share}></Route>
                            <Route path='/Technology/Experimental' component={Experimental}></Route>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Technology