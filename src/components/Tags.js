import React from 'react'
import Header from './Header'

export default function Tags() {
  const tiles = [{
    "has_synonyms": true,
    "is_moderator_only": false,
    "is_required": false,
    "count": 2498611,
    "name": "javascript"
  },
  {
    "has_synonyms": true,
    "is_moderator_only": false,
    "is_required": false,
    "count": 2142287,
    "name": "python"
  },
  {
    "has_synonyms": true,
    "is_moderator_only": false,
    "is_required": false,
    "count": 1899290,
    "name": "java"
  },
  {
    "has_synonyms": true,
    "is_moderator_only": false,
    "is_required": false,
    "count": 1593945,
    "name": "c#"
  },
  {
    "has_synonyms": true,
    "is_moderator_only": false,
    "is_required": false,
    "count": 1459412,
    "name": "php"
  },
  {
    "has_synonyms": true,
    "is_moderator_only": false,
    "is_required": false,
    "count": 1405400,
    "name": "android"
  },
  {
    "has_synonyms": true,
    "is_moderator_only": false,
    "is_required": false,
    "count": 1175456,
    "name": "html"
  },
  {
    "has_synonyms": true,
    "is_moderator_only": false,
    "is_required": false,
    "count": 1034045,
    "name": "jquery"
  },
  {
    "has_synonyms": true,
    "is_moderator_only": false,
    "is_required": false,
    "count": 795076,
    "name": "c++"
  },
  {
    "has_synonyms": true,
    "is_moderator_only": false,
    "is_required": false,
    "count": 793481,
    "name": "css"
  },
  {
    "has_synonyms": true,
    "is_moderator_only": false,
    "is_required": false,
    "count": 681437,
    "name": "ios"
  },
  {
    "has_synonyms": true,
    "is_moderator_only": false,
    "is_required": false,
    "count": 661920,
    "name": "sql"
  }];
  return (
    <div>
      <Header />
      <div className='container mt-6'>
        <div className="row">
          {
            tiles.map(x => {
              return <>
                <div className="col-md-3">
                  <div className="card mt-3 w-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div><h4 className="mb-0">{x?.name}</h4></div>
                        <div className="icon-shape icon-md bg-light-primary text-primary rounded-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="18" height="18" fill="currentColor"><path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"></path></svg>
                        </div>
                      </div>
                      <div><h1 className="fw-bold">18</h1><p className="mb-0"><span classname="text-dark me-2">{x?.count}</span> Completed</p></div>
                    </div>
                  </div>
                </div>
              </>
            })
          }
        </div>
        <div className="mt-5 row">
          <div className="col-md-12">
            <div className="card">
              <div className="bg-white  py-3 card-header d-flex justify-content-between border-bottom border-2">
                <h4 className="mb-0">Active Tags</h4>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">New </button>
              </div>
              <div className="table-responsive">
                <table className="text-nowrap mb-0 table">
                  <thead className='table-light'>
                    <tr>
                      <th scope="col">SL</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tiles.map((x,i) => {
                      return <tr>
                        <th scope="row">{i+1}</th>
                        <td>{x?.name}</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>

                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Understood</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
