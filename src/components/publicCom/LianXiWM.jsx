import React from 'react'
import './LXWM.css'

const LianXiWM = () => {
    return (
        <div className='telInfo'>
            <div className='infoTitle'>
                联系我们
            </div>
            <div className='companyInfo'>
                <p>重庆万森家居有限公司</p> 
                <p>联系人：周某某</p> 
                <p>手机(MB)：13996436651 </p>
                <p>电话(Tel)：0700-23234545 </p> 
                <p>网址(TheURL)：www.cqwansen.com</p>  
                <p>公司地址：重庆市开州区智能家居产业园</p>
            </div>
            <div className='QrCodeBox'>
                <div className='QrCode'>二维码</div>
            </div>
        </div>
    )
}
export default LianXiWM