import React from 'react'
import '../goodsCenter/GoodsCenter.css'
import './NewsInfo.css'
import SecMenu from '../publicCom/SecMenu'
import LXWM from '../publicCom/LianXiWM'
import axios from '../../plugins/index'

class InfoDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newsList:[],
            data:[]
        }
    }
    componentDidMount() {
        axios({
            method:'POST',
            url:'/info',
            data:{
                id:this.props.history.location.search.split('=')[1]
            }
        })
        .then(res => {
            this.setState({
                data:res.data.data[0]
            })
        })
    }
    render() {
        const { data } = this.state
        return (
            <div className='GoodsCenter'>
                <div className='gscCenter'>
                    <div className='gscLeft'>
                        <SecMenu matchUrl={{url:'/NewsInfo'}}/>
                        <LXWM />
                    </div>
                    <div className='gscRight'>
                        <div className='detailName'>
                            <p><b>{data.info_name}</b></p>
                            <p>{data.info_time}</p>
                        </div>
                        <div className='detailContent'>
                            <p>{data.info_content_1}</p>
                            <p>{data.info_content_2}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default InfoDetail