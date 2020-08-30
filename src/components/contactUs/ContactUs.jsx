// 联系我们
import React from 'react'
import '../goodsCenter/GoodsCenter.css'
import './ContactUs.css'
import { Link } from 'react-router-dom'
import axios from '../../plugins/index'
import {connect} from 'react-redux'

class ContactUs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lxwm:''
        }
    }componentDidMount() {
        axios({
            method:'POST',
            url:'/imgs',
            data:{
                part:'us'
            }
        })
        .then(res => {
            this.setState({
                lxwm:res.data.data[0].imgs_url,
            })
        })
    }
    render() {
        const{http}=this.props
        return (
            <div className='GoodsCenter'>
                <div className='gscCenter'>
                    <div className='contact'>
                        <div className='rightBrandNav'>
                            <p>联系我们</p>
                            <div>
                                <Link to='/Home'>首页</Link>
                                {'>'}
                                <Link to='/NewsInfo'>联系我们</Link>
                            </div>
                        </div>
                        <div className='usInfoMap'>
                            <div>
                                <b>重庆万森家居有限公司公司</b>
                                <p>联系人：周某某 </p>
                                <p>手机(MB)13996436651 </p>
                                <p>电话(Tel)：0700-23234545 </p>
                                <p>邮箱(Email)：youxiang@163.com </p>
                                <p>公司地址：重庆市开州区智能家居产业园</p>
                            </div>
                            <div className='infoImg'>
                                <img src={http+this.state.lxwm} alt=""/>
                            </div>
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
export default connect(mapStateToProps)(ContactUs)