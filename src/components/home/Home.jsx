import React from 'react'
import './Home.css'
import { Form, Input, Button, Carousel} from 'antd'
import { Link } from 'react-router-dom'
import '../../plugins/index'
import axios from '../../plugins/index'
import {connect} from 'react-redux'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstList:[],
            secondList:[],
            thirdList:[],
            forthList:[],
            lunboo:'',
            lunbot:'',
            more1:'',
            more2:'',
            more3:'',
            more4:'',
            more5:'',
            icons:'',
            quanwu:'',
            telphone:'',
            comInfo:'',
            homemore:''
        }
    }

    componentDidMount() {
        axios({
            method:'POST',
            url:'/imgs',
            data:{
                part:'home'
            }
        })
        .then(res => {
            this.setState({
                lunboo:res.data.data[0].imgs_url,
                lunbot:res.data.data[1].imgs_url,
                more1:res.data.data[2].imgs_url,
                more2:res.data.data[3].imgs_url,
                more3:res.data.data[4].imgs_url,
                more4:res.data.data[5].imgs_url,
                more5:res.data.data[6].imgs_url,
                icons:res.data.data[7].imgs_url,
                quanwu:res.data.data[8].imgs_url,
                telphone:res.data.data[9].imgs_url,
                comInfo:res.data.data[10].imgs_url,
            })
        })
        axios({
            method:'POST',
            url:'/goods'
        })
        .then(res => {
            let data = res.data.data
            let one = data.filter(item => item.goods_type === 1).slice(0, 4)
            let two = data.filter(item => item.goods_type === 2).slice(0, 4)
            let three = data.filter(item => item.goods_type === 3).slice(0, 4)
            let forth = data.filter(item => item.goods_type === 4).slice(0, 4)
            this.setState({
                firstList:one,
                secondList:two,
                thirdList:three,
                forthList:forth,
            })
        })
        axios({
            url:'/homemore',
            method:'POST'
        })
        .then(res => {
            this.setState({
                homemore:res.data.data[0]
            })
        })
    }

    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        }
        const onFinish = values => {
            if(values.user.name === undefined) {
                alert('姓名不能为空')
            } else if(values.user.tel === undefined) {
                alert('联系方式不能为空')
            } else{
                axios({
                    url:'/msgAdd',
                    method:'POST',
                    data:{
                        name:values.user.name,
                        tel:values.user.tel,
                        info:values.user.introduction
                    }
                })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }
        const { firstList, secondList, thirdList, forthList,
                lunboo, lunbot,more1,more2,more3,more4,more5,icons,quanwu,comInfo,telphone,
                homemore
             } = this.state
            const {http} = this.props
        // 第一组商品
        const firstListDom = firstList.map(item => {
            return (
                <div key={item.goods_id} className='gsItem'>
                    <div className='goodsImg'>
                        <img src={http + item.goods_pic} alt={item.goods_name}/>
                    </div>
                    <span>{item.goods_name}</span>
                </div>
            )
        })
        // 第2组商品
        const secondListDom = secondList.map(item => {
            return (
                <div key={item.goods_id} className='gsItem'>
                    <div className='goodsImg'>
                        <img src={http + item.goods_pic} alt={item.goods_name}/>
                    </div>
                    <span>{item.goods_name}</span>
                </div>
            )
        })
        // 第3组商品
        const thirdListDom = thirdList.map(item => {
            return (
                <div key={item.goods_id} className='gsItem'>
                    <div className='goodsImg'>
                        <img src={http + item.goods_pic} alt={item.goods_name}/>
                    </div>
                    <span>{item.goods_name}</span>
                </div>
            )
        })
        // 第4组商品
        const forthListDom = forthList.map(item => {
            return (
                <div key={item.goods_id} className='gsItem'>
                    <div className='goodsImg'>
                        <img src={http + item.goods_pic} alt={item.goods_name}/>
                    </div>
                    <span>{item.goods_name}</span>
                </div>
            )
        })
        return (
            <div className='home'>
                <Carousel autoplay={true}>
                    <div className='viewImg'>
                        <img style={{width:'100%',height:'100%'}} src={http + lunboo} alt=""/>
                    </div>
                    <div className='viewImg'>
                        <img style={{width:'100%',height:'100%'}} src={http + lunbot} alt=""/>
                    </div>
                </Carousel>
                <div className='goodsService'>
                    <div className='serviceTop'>
                        <h3>PRODUCTS AND SERVICES</h3>
                        <h2 className='title'>产品及服务</h2>
                    </div>
                    <div className='goodsList'>
                        <div className='goodsMore'>
                            <p className='titleMore'><b>镶嵌叉色系列</b></p>
                            <p className='titleMorelit'>Thermal products</p>
                            <div className='shortLine'></div>
                            <Link to='/GoodsCenter/drcp' className='moreBtn'>查看更多</Link>
                        </div>
                        <div>
                            {firstListDom}
                        </div>
                    </div>
                    <div className='goodsList'>
                        <div className='goodsMoreOther'>
                            <p className='titleMore'><b>时尚简约系列</b></p>
                            <p className='titleMorelit'>Heat dissipation products</p>
                            <div className='shortLine'></div>
                            <Link to='/GoodsCenter/srcp' className='moreBtn'>查看更多</Link>
                        </div>
                        <div>
                            {secondListDom}
                        </div>
                    </div>
                    <div className='goodsList'>
                        <div className='goodsMore'>
                            <p className='titleMore'><b>贴画扣线系列</b></p>
                            <p className='titleMorelit'>PORON 材料</p>
                            <div className='shortLine'></div>
                            <Link to='/GoodsCenter/jzmf' className='moreBtn'>查看更多</Link>
                        </div>
                        <div>
                            {thirdListDom}
                        </div>
                    </div>
                    <div className='goodsList'>
                        <div className='goodsMoreOther'>
                            <p className='titleMore'><b>轻奢极简系列</b></p>
                            <p className='titleMorelit'>Insulation Materials</p>
                            <div className='shortLine'></div>
                            <Link to='/GoodsCenter/jycl' className='moreBtn'>查看更多</Link>
                        </div>
                        <div>
                            {forthListDom}
                        </div>
                    </div>
                </div>
                <div className='showMore'>
                    <div className='childOfShow'>
                        <div className='roundOfChild'>
                            <div className='roundImg'>
                                <img src={http + more1} alt=""/>
                            </div>
                        </div>
                        <div className='insOfChild'>
                            <p className='insTitle'>01/05</p>
                            <span>{homemore.one_title}</span>
                            <div className='shortLine blueLine'></div>
                            <p style={{textIndent:'2rem'}}>
                            {homemore.one_con}
                            </p>
                        </div>
                    </div>
                    <div className='childOfShow'>
                        <div className='insOfChild'>
                            <p className='insTitle'>02/05</p>
                            <span>{homemore.two_title}</span>
                            <div className='shortLine blueLine'></div>
                            <p style={{textIndent:'2rem'}}>
                            {homemore.two_con}
                            </p>
                        </div>
                        <div className='roundOfChild'>
                            <div className='roundImg'>
                                <img src={http + more2} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className='childOfShow'>
                        <div className='roundOfChild'>
                            <div className='roundImg'>
                                <img src={http + more3} alt=""/>
                            </div>
                        </div>
                        <div className='insOfChild'>
                            <p className='insTitle'>03/05</p>
                            <span>{homemore.three_title}</span>
                            <div className='shortLine blueLine'></div>
                            <p style={{textIndent:'2rem'}}>
                            {homemore.three_con}
                            </p>
                        </div>
                    </div>
                    <div className='childOfShow'>
                        <div className='insOfChild'>
                            <p className='insTitle'>04/05</p>
                            <span>{homemore.four_title}</span>
                            <div className='shortLine blueLine'></div>
                            <p style={{textIndent:'2rem'}}>
                            {homemore.four_con}
                            </p>
                        </div>
                        <div className='roundOfChild'>
                            <div className='roundImg'>
                                <img src={http + more4} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className='childOfShow'>
                        <div className='roundOfChild'>
                            <div className='roundImg'>
                                <img src={http + more5} alt=""/>
                            </div>
                        </div>
                        <div className='insOfChild'>
                            <p className='insTitle'>05/05</p>
                            <span>{homemore.five_title}</span>
                            <div className='shortLine blueLine'></div>
                            <p style={{textIndent:'2rem'}}>
                            {homemore.five_con}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='aboutNew'>
                    <div className='aboutLeft'>
                        <div>
                            <div className='firstOne'>
                                <span className='leftTitle'>关于万森家居</span>
                                <span>ABOUT WANSEN HOUSEHOLD</span>
                            </div>
                            <div className='targetItem'>
                                <div className='roundLittle'>
                                    <img src={http + icons} alt=""/>
                                </div>
                                <div className='verticalLine'></div>
                                <div>
                                    <p><b className='boldP'>我们的愿景</b></p>
                                    <p>营造高雅的家居生活</p>
                                </div>
                            </div>
                            <div className='targetItem'>
                                <div className='roundLittle'>
                                    <img src={http + icons} alt=""/>
                                </div>
                                <div className='verticalLine'></div>
                                <div>
                                    <p><b className='boldP'>我们的使命</b></p>
                                    <p>持续为客户创造最大的价值</p>
                                </div>
                            </div>
                            <div className='targetItem'>
                                <div className='roundLittle'>
                                    <img src={http + icons} alt=""/>
                                </div>
                                <div className='verticalLine'></div>
                                <div>
                                    <p><b className='boldP'>我们的价值观</b></p>
                                    <p>拥抱变化，不断创新，专业专精，客户满意、诚实守信，积极乐观</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='aboutRight'>
                         <img src={http + comInfo} alt=""/>
                    </div>
                </div>
                {/* <div className='partner'>
                    <div className='serviceTop'>
                        <h3>COOPERATION</h3>
                        <h2 className='title'>合作伙伴</h2>
                    </div>
                    <div className='swiper'>

                    </div>
                </div> */}
                <div className='leaveMsg'>
                    <div>
                        <div className='msgLeft'>
                            <div>
                                <p className='telTop'>咨询热线</p>
                                <div className='telRound'>
                                    <div className='telIcon'>
                                        <img src={http + telphone} alt=""/>
                                    </div>
                                    <span>定制咨询</span>
                                    <span>13996436651</span>
                                    <div className='horLine'></div>
                                </div>
                            </div>
                            <div className='msgImg'>
                                <img src={http + quanwu} alt=""/>
                            </div>
                        </div>
                        <div className='msgRight'>
                            <p className='telTop'>在线留言</p>
                            <p><b className='tishi'>温馨提示</b></p>
                            <p>为确保信息的有效性，请您填写真实的姓名和联系方式，谢谢</p>
                            <Form {...layout} name="nest-messages" onFinish={onFinish}>
                                <Form.Item name={['user', 'name']} label="姓名">
                                    <Input />
                                </Form.Item>
                                <Form.Item name={['user', 'tel']} label="电话">
                                    <Input />
                                </Form.Item>
                                <Form.Item name={['user', 'introduction']} label="留言">
                                    <Input.TextArea />
                                </Form.Item>
                                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                    <Button type="primary" htmlType="submit">
                                        提交
                                    </Button>
                                </Form.Item>
                            </Form>
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
export default connect(mapStateToProps)(Home)