import React from 'react'
import { Link } from 'react-router-dom'
import './SecMenu.css'

const SecMenu = (props) => {
    console.log(props)
    return (
        <div className='secMenu'>
            <div className='oneM cpzx'>
                <Link className='oneLevel' to='/GoodsCenter'>产品中心</Link>
                <div>
                    <Link className='twoM' to='/GoodsCenter/drcp'>镶嵌叉色系列</Link>
                </div>
                <div>
                    <Link className='twoM' to='/GoodsCenter/srcp'>时尚简约系列</Link>
                </div>
                <div>
                    <Link className='twoM' to='/GoodsCenter/jzmf'>贴画扣线系列</Link>
                </div>
                <div>
                    <Link className='twoM' to='/GoodsCenter/jycl'>轻奢极简系列</Link>
                </div>
            </div>
            <div className='oneM gywm'>
                <Link className='oneLevel' to='/AboutUs'>关于我们</Link>
                <div>
                    <Link className='twoM' to='/AboutUs/ComProfile'>公司概要</Link>
                </div>
                <div>
                    <Link className='twoM' to='/AboutUs/EnterpriseCulture'>企业文化</Link>
                </div>
                <div>
                    <Link className='twoM' to='/AboutUs/EnterpriseCertification'>企业认证</Link>
                </div>
            </div>
            {/* <div className='oneM xwzx'>
                <Link className={props.matchUrl.url === '/NewsInfo' ? 'active' : 'oneLevel'} to='/NewsInfo'>新闻资讯</Link>
            </div> */}
            {/* <div className='oneM jsjl'>
                <Link className='oneLevel' to='/Technology'>技术交流</Link>
                <div>
                    <Link className='twoM' to='/Technology/Share'>专业分享</Link>
                </div>
                <div>
                    <Link className='twoM' to='/Technology/Experimental'>试验研发</Link>
                </div>
            </div> */}
            <div className='oneM rczp'>
                <Link className={props.matchUrl.url === '/Recruitment' ? 'active' : 'oneLevel'} to='/Recruitment'>人才招聘</Link>
            </div>
            <div className='oneM lxwm'>
                <Link className={props.matchUrl.url === '/ContactUs' ? 'active' : 'oneLevel'} to='/ContactUs'>联系我们</Link>
            </div>
        </div>
    )
}
export default SecMenu