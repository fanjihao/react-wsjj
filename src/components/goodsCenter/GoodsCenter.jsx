import React from 'react'
import './GoodsCenter.css'
import { Link, Route, NavLink } from 'react-router-dom'
import LXWM from '../publicCom/LianXiWM'
import AllGoods from './AllGoods'
import Daore from './Daore'
import Sanre from './Sanre'
import Jianzhen from './Jianzhen'
import Jueyuan from './Jueyuan'

class GoodsCenter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            bread:''
        }
    }

    allDaoRe = () => {
        this.setState({
            bread:'>镶嵌叉色系列'
        })
    }
    allSanRe = () => {
        this.setState({
            bread:'>时尚简约系列'
        })
    }
    allJianZhen = () => {
        this.setState({
            bread:'>贴画扣线系列'
        })
    }
    allJueYuan = () => {
        this.setState({
            bread:'>轻奢极简系列'
        })
    }
    render() {
        return (
            <div className='GoodsCenter'>
                <div className='gscCenter'>
                    <div className='gscLeft'>
                        <div className='goodsNav'>
                            <div onClick={this.allDaoRe}>
                                <NavLink to='/GoodsCenter/drcp'>
                                镶嵌叉色系列
                                </NavLink>
                            </div>
                            <div onClick={this.allSanRe}>
                                <NavLink to='/GoodsCenter/srcp'>
                                时尚简约系列
                                </NavLink>
                            </div>
                            <div onClick={this.Jianzhen}>
                                <NavLink to='/GoodsCenter/jzmf'>
                                贴画扣线系列
                                </NavLink>
                            </div>
                            <div onClick={this.Jueyuan}>
                                <NavLink to='/GoodsCenter/jycl'>
                                轻奢极简系列
                                </NavLink>
                            </div>
                        </div>
                        <LXWM />
                    </div>
                    <div className='gscRight'>
                        <div className='rightBrandNav'>
                            <p>产品中心</p>
                            <div>
                                <Link to='/Home'>首页</Link>
                                {'>'}
                                <Link to='/GoodsCenter'>产品中心</Link>
                                <span>{this.state.bread}</span>
                            </div>
                        </div>
                        <div className='rightGoods'>
                            <Route exact path='/GoodsCenter' component={AllGoods}></Route>
                            <Route path='/GoodsCenter/drcp' component={Daore} data={'das'}></Route>
                            <Route path='/GoodsCenter/srcp' component={Sanre}></Route>
                            <Route path='/GoodsCenter/jzmf' component={Jianzhen}></Route>
                            <Route path='/GoodsCenter/jycl' component={Jueyuan}></Route>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default GoodsCenter