import React from 'react'
import '../goodsCenter/GoodsCenter.css'
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
            url:'/techId',
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
                    <div className='detailName'>
                        <p><b>{data.tech_title}</b></p>
                        <p>{data.tech_time}</p>
                    </div>
                    <div className='detailContent'>
                        <p>{data.tech_content_1}</p>
                        <p>{data.tech_content_2}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default InfoDetail