import React, { useEffect, useState } from 'react'
import Header from './Header'
import owner from './../images/owner.png'
import { getAllData, getWikiDetails } from '../services/ProxyService';
import Footer from './Footer';

export default function Home() {
    // const courseList = ['ReactJS', 'SPSS', 'Swagger', 'Swagger', 'Swagger', 'Swagger',
    //     'Swagger', 'Swagger', 'Swagger', 'Swagger', 'Swagger', 'Swagger',
    //     'ReactJS', 'SPSS', 'Swagger', 'Swagger', 'Swagger', 'Swagger',
    //     'ReactJS', 'SPSS', 'Swagger', 'Swagger', 'Swagger', 'Swagger']
    const [courseList, setCourseList] = useState([1,2,3]);
    const imgList = ['laravel', 'reactjs']
    const theme = localStorage.getItem('theme');

    const getTagsImage = async (name) => {
        const img = await getWikiDetails(name);
        const object = {
            id: 1,
            link: img?.data?.originalimage?.source
        }
        console.log(object)
        return object;
    }
    useEffect(() => {
        console.log('home');
        // getAllData('questions').then((res) => {
        //     console.log(res);
        //     setCourseList(res.data.items);
        // })
    }, [])
    return (
        <div className={`bg-light text-dark`}>
            <Header />
            <div className='px-2 row bg-dark' style={{maxHeight:'23rem'}}>
                <div className='offset-md-2 col-md-8 d-flex justify-content-center'>
                    <div className='py-5 mt-5 text-center text-white'>
                        {/* <h1 className='App-logo'>
                    <i className="bi bi-box"></i>
                    </h1> */}
                        <div className='typewritter'>
                            <h1>Stack Bites</h1>
                        </div>
                        <h3>With the world's largest web developer site.</h3>

                        <div className={`text-light alert alert-${theme == 'light' ? 'primary' : 'dark'}`} height={400} role="alert">
                            Free, high quality, open source icon library with over 1,800 icons. Include them anyway you like—SVGs, SVG sprite, or web fonts. Use them with or without Bootstrap in any project.
                        </div>
                        <div className="input-group">
                            <input type="text" className={`mt-5 shadow py-3 form-control rounded-pill ${theme == 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`} placeholder="Search our tutorials, e.g.HTML" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            {/* <span className="input-group-text rounded-end-circle" id="basic-addon2">@</span> */}
                        </div>
                    </div>
                </div>
                {/* <div className='col-md-4 d-flex justify-content-center'>
                            <img className='w-100' src={owner} />
                        </div> */}
            </div>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <div className="pb-5">
                        <div className='row mt-5 pt-3'>
                            {courseList.map((x) => {
                                return <div className='col-md-4 mb-3'>
                                    <div className={`card card-body p-3 shadow rounded bg-${theme == 'light' ? 'light' : 'dark'}`} style={{ height: '18rem' }}>
                                        <div className="d-flex flex-row mb-3">
                                            {/* <div className="p-2">Tags:</div> */}
                                            {/* <div>
                                                <img id={'img_'+i} src={()=>{getWikiDetails('laravel').then(res=> {return res.data.originalimage.source})}} /> 
                                            </div> */}
                                            {/* <div className="btn btn-secondary">React</div> */}
                                            <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/50px-Laravel.svg.png'} />
                                        </div>
                                        <h5>Test</h5>
                                        <p>
                                        Which pandas module can be used read parquet file in parallel?
                                        </p>
                                        <p>
                                            Solution:For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Note that
                                        </p>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className='col-md-2'></div>
            </div>
            <Footer />
        </div>
    )
}
