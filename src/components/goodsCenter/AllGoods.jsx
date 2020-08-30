import React from 'react'
import axios from '../../plugins/index'
import {connect} from 'react-redux'

class AllGoods extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsList:[],
        }
    }
    componentDidMount() {
        axios({
            method:'POST',
            url:'/goods'
        })
        .then(res => {
            this.setState({
                goodsList:res.data.data
            })
        })
    }
    render() {
        const {http}=this.props
        let allDom = this.state.goodsList.map(item => {
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
                {allDom}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        http:state.url
    }
}
export default connect(mapStateToProps)(AllGoods)