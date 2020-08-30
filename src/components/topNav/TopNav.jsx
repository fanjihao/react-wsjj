import React from 'react'
import './TopNav.css'
// import { Input } from 'antd'
import { NavLink } from "react-router-dom"
import axios from '../../plugins/index'
import { connect } from 'react-redux'

// 公用顶部
class TopNav extends React.Component { // 公司概要
    constructor(props) {
        super(props)
        this.state = {
            searchVal: '',
            logo:'',
            tel:''
        }
    }

    componentDidMount() {
        axios({
            method:'POST',
            url:'/imgs',
            data:{
                part:'nav'
            }
        })
        .then(res => {
            this.setState({
                logo:res.data.data[0].imgs_url,
                tel:res.data.data[1].imgs_url,
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    changeVal = (e) => {
        this.setState({
            searchVal: e.target.value
        })
    }
    enter = (e) => {
        if(e.keyCode === 13) {
            if(this.state.searchVal === '') {

            }else {
                axios({
                    url:'search',
                    method:'POST',
                    data:{
                        searchVal:this.state.searchVal
                    }
                })
                .then(res => {
                    console.log(res)
                })
            }
        }
    }
    render() {
        const { logo, tel } = this.state
        const { http } = this.props
        
        return (
            <div className=''>
                <div className='toptip'>
                    <div>
                        您好，欢迎访问重庆万森家居有限公司！
                    </div>
                </div>
                <div className='topLogo'>
                    {/* <div className='search'>
                        <Input
                            placeholder="输入产品信息按回车搜索"
                            value={searchVal}
                            onChange={(e) => this.changeVal(e)}
                            onKeyUp={this.enter} />
                    </div> */}
                    <div className='logo'>
                        <img src={http + logo} alt="logo"/>
                    </div>
                    <div className='tel'>
                        <img style={{width:'40px',height:'40px'}} src={http + tel} alt="tel"/>
                        <div>
                            <p>咨询热线</p>
                            <p className='gTel'>13996436651</p>
                        </div>
                    </div>
                </div>
                <div className='navBox'>
                    <div>
                        <div>
                            <NavLink to='/Home' activeClassName='navActive'>首页</NavLink>
                        </div>
                        <div>
                            <NavLink to='/GoodsCenter' activeClassName='navActive'>产品中心</NavLink>
                        </div>
                        <div>
                            <NavLink to='/AboutUs' activeClassName='navActive'>关于我们</NavLink>
                        </div>
                        {/* <div>
                            <NavLink to='/NewsInfo' activeClassName='navActive'>新闻资讯</NavLink>
                        </div>
                        <div>
                            <NavLink to='/Technology' activeClassName='navActive'>技术交流</NavLink>
                        </div> */}
                        <div>
                            <NavLink to='/Recruitment' activeClassName='navActive'>人才招聘</NavLink>
                        </div>
                        <div>
                            <NavLink to='/ContactUs' activeClassName='navActive'>联系我们</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        http:state.url
    }
}
export default connect(mapStateToProps)(TopNav)