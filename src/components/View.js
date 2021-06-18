import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const View = () => {

const contacts = useSelector(state=>state)

    return (
        
        <div className="container">
            <div className="listing">
                <div className="row list-head">
                    <div className="col-lg-8">
                        <h2>Add contact list</h2>
                    </div>
                    <div className="col-lg-4">
                        <Link to="/add" className="btn btn-primary">Add Contact</Link>
                    </div>
                    <table className="table table-hover">
                        <thead className="text-white bg-dark text-center">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Mail</th>
                                <th>Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, id) => (
                                  <tr key={id}>
                                    <td>{id+1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.mail}</td>
                                    <td>{contact.number}</td>
                                    <td>
                                        <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary mr-2">Edit</Link>
                                        <button  className="btn btn-small btn-danger">Delete</button>
                                    </td>
                                </tr>
                              )) 
                            }
                           
                            <td>

                            </td>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
