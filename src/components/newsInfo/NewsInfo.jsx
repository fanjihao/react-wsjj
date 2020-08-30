import React from 'react'
import '../goodsCenter/GoodsCenter.css'
import './NewsInfo.css'
import SecMenu from '../publicCom/SecMenu'
import LXWM from '../publicCom/LianXiWM'
import InfoDetail from './InfoDetail'
import { Link, Route } from 'react-router-dom'
import { Pagination } from 'antd'
import axios from '../../plugins/index'

class NewsInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newsList:[],
            data:[]
        }
    }
    getInfo = () => {
        axios({
            method:'POST',
            url:'/infoAll'
        })
        .then(res => {
            this.setState({
                data:res.data.data
            })
        })
    }
    componentDidMount() {
        this.getInfo()
        this.changePage(1,3)
    }
    changePage = (page, pageSize) => {
        let pageCon = this.state.newsList.slice((page-1)*pageSize, (page-1)*pageSize + pageSize)
        this.setState({
            data:pageCon
        })
    }
    // InfoDetail = (i) => {
    //     this.props.history.push({pathname:"/query",query: { name : i }})
    // }
    render() {
        const { data, newsList } = this.state
        let newsDom = data.map(item => {
            return (
                <Link key={item.info_id} className='newsItem' 
                to={{pathname: '/InfoDetail', search:'id=' + item.info_id}}>
                    <div className='newsImg newsItemChild'>
                        <img src="" alt={item.info_img}/>
                    </div>
                    <div className='newsCon'>
                        <p className='newsTitle'>{item.info_name}</p>
                        <p className='newsContent'>{item.info_content_1}</p>
                    </div>
                    <div className='newsDetail'>
                        <div className='readMore'>{item.info_time}</div>
                        <div className='readMore mornBtn'>
                            <div>
                                {'more >'}
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })
        return (
            <div className='GoodsCenter'>
                <div className='gscCenter'>
                    <div className='gscLeft'>
                        <SecMenu matchUrl={this.props.match}/>
                        <LXWM />
                    </div>
                    <div className='gscRight'>
                        <div className='rightBrandNav'>
                            <p>新闻资讯</p>
                            <div>
                                <Link to='/Home'>首页</Link>
                                {'>'}
                                <Link to='/NewsInfo'>新闻资讯</Link>
                            </div>
                        </div>
                        <div className='rightGoods'>
                            {newsDom}
                            <Route path='/InfoDetail' component={InfoDetail}></Route>
                        </div>
                        <div className='Pagination'>
                            <Pagination 
                                onChange={(page, pageSize) => this.changePage(page, pageSize)}
                                hideOnSinglePage='true'
                                defaultPageSize={3}
                                total={newsList.length}>

                            </Pagination>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsInfo