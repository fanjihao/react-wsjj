// 专业分享
import React from 'react'
import './Technology.css'
import axios from '../../plugins/index'
import { Link } from 'react-router-dom'

class Share extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fileList:[],
        }
    }
    componentDidMount() {
        axios({
            method:'POST',
            url:'/tech',
            data:{
                type:1
            }
        })
        .then(res => {
            this.setState({
                fileList:res.data.data
            })
        })
    }
    render() {
        let shareDom = this.state.fileList.map(item => {
            return (
                <div>
                    <Link key={item.tech_id} className='docuItem'
                to={{pathname: '/TechDetail', search:'id=' + item.tech_id}}>
                        <div className='bigChild'>
                            <p className='childTitle'>{item.tech_title}</p>
                            <span>{item.tech_content_1}</span>
                        </div>
                        <div className='smallChild'>
                            <p className='scTime'>{item.tech_time}</p>
                            <div>
                                <div>
                                    <b style={{fontSize:'35px'}}>→</b>
                                </div>
                                <div className='secJiantou'>
                                    <b style={{fontSize:'35px'}}>→</b>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })
        return (
            <div>
                {shareDom}
            </div>
        )
    }
}

export default Share