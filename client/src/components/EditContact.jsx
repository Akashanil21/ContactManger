import React from 'react'
import { Link } from 'react-router-dom'

function EditContact() {

    

    return (
        <div>
            <section className='add-contact p-3 mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className='h3 text-primary fw-bold'>Edit Contact</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form action="">
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Name' />
                                </div>
                                <div className="mb-2">
                                    <input type="email" className='form-control' placeholder='Email' />
                                </div>
                                <div className="mb-2">
                                    <input type="number" className='form-control' placeholder='Number' />
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className='btn btn-primary my-2' value="Update" />
                                    <Link to='/contacts/list' className='btn btn-danger my-2 ms-2' >Cancel</Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EditContact
