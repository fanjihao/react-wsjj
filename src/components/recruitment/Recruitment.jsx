// 人才招聘
import React from 'react'
import '../goodsCenter/GoodsCenter.css'
import './Recruitment.css'
import SecMenu from '../publicCom/SecMenu'
import LXWM from '../publicCom/LianXiWM'
import { Link } from 'react-router-dom'

class Recruitment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='GoodsCenter'>
                <div className='gscCenter'>
                    <div className='gscLeft'>
                        <SecMenu matchUrl={this.props.match}/>
                        <LXWM />
                    </div>
                    <div className='gscRight'>
                        <div className='rightBrandNav'>
                            <p>人才招聘</p>
                            <div>
                                <Link to='/Home'>首页</Link>
                                {'>'}
                                <Link to='/NewsInfo'>人才招聘</Link>
                            </div>
                        </div>
                        <div className='rightGoods'>
                            <div className='zhaopinImg'>
                                <img src="" alt="招聘图片"/>
                            </div>
                            <p className='emailInfo'><span>有意者可将简历投递至邮箱：</span>YOUXIANG@163.com</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Recruitment