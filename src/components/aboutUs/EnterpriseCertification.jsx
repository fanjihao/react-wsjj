import React, { useState, useEffect } from 'react'
import './AboutUs.css'
import axios from '../../plugins/index'

const EnterpriseCertification = () => {
    const [CertificList, setstate] = useState([])
    useEffect(() => {
        axios({
            method:'POST',
            url:''
        })
        .then(res => {
            setstate(res.data.data)
        })
        setstate([
            {
                id:1,
                name:'证书1'
            },
            {
                id:2,
                name:'证书2'
            },
            {
                id:3,
                name:'证书3'
            },
            {
                id:4,
                name:'证书4'
            },
        ])
    }, [])
    let dom = CertificList.map(item => {
        return (
            <div key={item.id} className='certificateBox'>
                <img src="" alt={item.name} className='certificate' />
            </div>
        )
    })
    return (
        <div className='Comprofile'>
            {dom}
        </div>
    )
}

export default EnterpriseCertification