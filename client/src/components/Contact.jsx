import { message } from 'antd'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

function Contact({ contact, index }) {

    const deleteContact = async (id) => {

        try {

            const response = await axios.post("/api/contacts/delete-contact", {
                _id: contact._id
            })

            if (response.data.success) {
                window.location.reload();
                message.success(response.data.message)
            } else {
                message.error(response.data.message)
            }
        }


        catch (error) {

            message.error(error.message)
        }
    }



    return (
        <div className="col-md-6">
            <div className="card my-2">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-md-10">
                            <ul className='list-group'>
                                <li className='list-group-item list-group-item-action'>
                                    Name: <span className='fw-bold'>{contact.name}</span>
                                </li>
                                <li className='list-group-item list-group-item-action'>
                                    Mobile Number: <span className='fw-bold'>{contact.number}</span>
                                </li><li className='list-group-item list-group-item-action'>
                                    Email: <span className='fw-bold'>{contact.email}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <Link to={`/contacts/edit/:contactId`} className="btn btn-primary my-1"
                            >
                                Edit
                            </Link>
                            <button className="btn btn-danger my-1" onClick={() => deleteContact(index)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
