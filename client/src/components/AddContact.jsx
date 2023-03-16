import { message } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AddContact() {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const values = {
            name: name,
            email: email,
            number: number,
        }

        try {

            const response = await axios.post("/api/contacts/add", values,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                  },
            })

            if (response.data.success) {
                message.success(response.data.message)
                navigate("/contacts/list")
            } else {
                message.error(response.data.message)
            }
        } catch (error) {

            message.error(error.message)
        }
    }


    return (
        <div>
            <section className='add-contact p-3 mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className='h3 text-success fw-bold'>Create Contact</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="mb-2">
                                    <input type="text"
                                        className='form-control'
                                        placeholder='Name'
                                        name='name'
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-2">
                                    <input type="email"
                                        className='form-control'
                                        placeholder='Email'
                                        name='email'
                                        onChange={(e) => { setEmail(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-2">
                                    <input type="number"
                                        className='form-control'
                                        placeholder='Number'
                                        name='number'
                                        onChange={(e) => { setNumber(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className='btn btn-success my-2' value="Create" />
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

export default AddContact
