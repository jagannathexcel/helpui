import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Articles() {
    const articles = [1, 2, 3, 4]
    return (
        <div>
            <Header />
            <div className='container my-5'>
        <div className='row'>
          <div className='col-md-8'>
            <h3 className='my-5'>How to make your HTML responsive by adding a single line of CSS</h3>
            <img className='card-img-top' src='https://miro.medium.com/v2/resize:fit:679/1*ueWmI48uuShON-hX7LwI0w.png' />
            <p>Hi all hopefully a simple answer on this one that I am missing, at the bottom of the application I would like to have the tabcontrol tab items contents re-size. I am only so far having an issue with the textbox control not resizing to the tabcontrol heght and width. Can someone explain what I am missing here. As you can see when I expand the splitter the textbox stays centered. Thanks in advance for your time!</p>
            <div className='d-flex gap-2'>
              <span>Asked:    <span className='fw-semibold'>12/23/23</span></span>
              <span>Modified: <span className='fw-semibold'>12/23/23</span></span>
              <span>Viewed:   <span className='fw-semibold'>2 times</span></span>
            </div>
            <div className='mt-3'>
              <div className='d-flex justify-content-between'>
                <h2>Answers</h2>
                <div className='gap-1'>
                  <div className="icon-shape icon-md bg-light-primary text-primary rounded-2 me-2 position-relative">
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      99+
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </div>
                  <div className="icon-shape icon-md bg-light-primary text-primary rounded-2">
                    <i className="bi bi-hand-thumbs-down"></i>
                  </div>
                </div>
              </div>
              <p>
            Hi all hopefully a simple answer on this one that I am missing, at the bottom of the application I would like to have the tabcontrol  tab items contents re-size. I am only so far having an issue with the textbox control not resizing to the tabcontrol heght and width. Can someone explain what I am missing here. As you can see when I expand the splitter the textbox stays centered. Thanks in advance for your time!
              </p>
            </div>
            <div className='d-flex gap-1'>
              <button type="button" className="btn btn-light btn-sm rounded-pill border border-1 px-3">CSS</button>
              <button type="button" className="btn btn-light btn-sm rounded-pill border border-1 px-3">Web Development</button>
            </div>

            <div className='mt-4'>
              <h2>Comments</h2>
              <table className="table">
                <tbody>
                  <tr>
                    <td>ontrol not resizing to the tabcontrol heght and width. Can someo</td>
                    <td>Otto</td>
                    <td>Edit | Delete</td>
                  </tr>
                  <tr>
                    <td>ontrol not resizing to the tabcontrol heght and width. Can someo</td>
                    <td>Thornton</td>
                    <td>Edit | Delete</td>
                  </tr>
                </tbody>
              </table>
              <textarea className='form-control' cols={5}></textarea>
            </div>
            <div className='mt-4'>
              <h2>Related Questions</h2>
              <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
              </ul>
            </div>
          </div>
          <div className='col-md-4 mt-4'>
            
          </div>
        </div>
        <hr className='my-5' />
        <div className='my-5'>
          <h2>
            Recommended from Stack Bites

          </h2>
            <div className='row'>
                <div className='col-md-8'>
                <div className="row">
              {
                articles.map(x => {
                  return <>
                    <div className="col-md-6">
                      <div className="card mt-3">
                        <div className="">
                          <img className='card-img-top my-3' src='https://miro.medium.com/v2/resize:fit:679/1*ueWmI48uuShON-hX7LwI0w.png' />
                          <div className="card-body">
                            <div>
                              <h5 className="mb-0">Learn CSS Grid in 5 Minutes</h5>
                              <p>A quick tutorial on the future of website layouts.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                })
              }
            </div>
                </div>
            </div>
        </div>
      </div>
            <Footer />
        </div>
    )
}
