import React, { useState, useEffect} from 'react'
import './GoodsCenter.css'
import axios from '../../plugins/index'
import {connect} from 'react-redux'

function Daore(props) {
    const [ data, setData ] = useState([])
    useEffect(() => {
        let goodsList = []
        axios({
            method:'POST',
            url:'/goods'
        })
        .then(res => {
            goodsList = res.data.data
            let drcp = goodsList.filter(item => item.goods_type === 1)
            setData(drcp)
        })
    }, [])
    let drDom = data.map(item => {
        const {http}=props
        return (
            <div key={item.goods_id} className='goodsItem'>
                <div className='gscCenImg'>
                        <img src={http + item.goods_pic} alt={item.goods_name}/>
                </div>
                <span>{item.goods_name}</span>
            </div>
        )
    })
    return (
        <div>
            {drDom}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        http:state.url
    }
}
export default connect(mapStateToProps)(Daore)