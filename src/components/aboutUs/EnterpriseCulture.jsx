import React, { useState, useEffect} from 'react'
import '../goodsCenter/GoodsCenter.css'
import './AboutUs.css'
import axios from '../../plugins/index'
import {connect} from 'react-redux'

// tab 选项子组件

const EnterpriseCulture = (props) => { // 企业文化
    const [ data, setData ] = useState([])
    const [ cul, setCul ] = useState('')
    useEffect(() => {
        axios({
            method:'POST',
            url:'/imgs',
            data:{
                part:'about'
            }
        })
        .then(res => {
            let goodsList = res.data.data[0].imgs_url
            setData(goodsList)
        })
        axios({
            method:'POST',
            url:'/wsjjculture',
        })
        .then(res => {
            setCul(res.data.data[0])
        })
    }, [])
    const {http}=props
    return (
        <div className='Comprofile'>
            <p style={{textIndent:'2rem'}}>
                {cul.culture_con}
            </p>
            <div className='cultureImg'>
                <img src={http+data} alt="dd" className='CImgs' />
            </div>
            <p className='slogan'>
                <b>{cul.cul_yuanjing}</b>
            </p>
            <p className='slogan'>
                <b>{cul.cul_shiming}</b>
            </p>
            <p className='slogan'>
                <b>{cul.cul_jiazhi}</b>
            </p>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        http:state.url
    }
}
export default connect(mapStateToProps)(EnterpriseCulture)