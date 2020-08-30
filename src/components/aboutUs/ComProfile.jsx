import React, { useState, useEffect} from 'react'
import '../goodsCenter/GoodsCenter.css'
import './AboutUs.css'
import axios from '../../plugins/index'
import {connect} from 'react-redux'

// tab 选项子组件
const ComProfile = (props) => { // 公司概要
    const [ data, setData ] = useState([])
    const [ file, setFile ] = useState('')
    useEffect(() => {
        axios({
            method:'POST',
            url:'/imgs',
            data:{
                part:'about'
            }
        })
        .then(res => {
            let goodsList = res.data.data[1].imgs_url
            setData(goodsList)
        })
        axios({
            method:'POST',
            url:'/comProfile',
        })
        .then(res => {
            console.log(res)
            setFile(res.data.data[0])
        })
    }, [])
    const {http}=props
    return (
        <div className='Comprofile'>
            <img src={http + data} alt="" className='comprofileImg' />
            <h2>{file.profile_title_one}</h2>
            <p className='profile' style={{textIndent:'2rem'}}>
                {file.profile_con_one}
            </p>
            <h2>{file.profile_title_two}</h2>
            <p className='profile' style={{textIndent:'2rem'}}>
                {file.profile_con_two}
            </p>
            <h2>{file.profile_title_three}</h2>
            <p className='profile' style={{textIndent:'2rem'}}>
                {file.profile_con_three}
            </p>
            <p className='profile' style={{textIndent:'2rem'}}>
                {file.profile_foot}
            </p>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        http:state.url
    }
}
export default connect(mapStateToProps)(ComProfile)