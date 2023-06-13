import React, { useEffect, useState } from 'react'
import Header from './Header'

export default function Display() {

    const [course,setCourse] = useState('')

    useEffect(()=>{
        let _course = localStorage.getItem('course');
        setCourse(_course);
    },[])

  return (
    <div>
        <Header />
        <div className='container'>
        <div dangerouslySetInnerHTML={{__html: course}} />
        </div>
    </div>
  )
}
