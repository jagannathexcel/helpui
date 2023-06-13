import React, { useEffect, useState } from 'react'
import Header from './Header'
import { getAllData } from '../services/ProxyService'



export default function AddCourse() {

  const [course, setCourse] = useState([])

  const getCouses = async () => {
    await getAllData('course').then(res => {
      console.log(res.data);
      setCourse(res.data);
    })
  }

  useEffect(() => {
    // getCouses();
  }, [])

  return (
    <>
      <Header />
      <div className='container mt-6'>
        <div className='row'>
          {/* <div className='col-md-1'></div> */}
          <div className='col-md-12'>
            <div className='row mt-3'>
              <div className='col-md-6'>
                <div className='card card-body'>
                  <h5>Add Course</h5>
                  <div>

                    <div className="form-floating">
                      <input type="text" className="form-control" id="floatingInputGrid" placeholder="Course Name" />
                      <label htmlFor="floatingInputGrid">Course Name</label>
                    </div>
                    <div className="form-floating mt-3">
                      <input type="text" className="form-control" id="floatingInputGrid" placeholder="Details" />
                      <label htmlFor="floatingInputGrid">About</label>
                    </div>
                    <div className="d-grid gap-2">
                      <button className='btn-block btn btn-primary mt-3'>Add</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card card-body'>
                  <h5>Tables display sets of data. They can be fully customized</h5>
                  <table className="table caption-top">
                    <caption>List of users</caption>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
