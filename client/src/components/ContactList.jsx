import { message } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../resources/contact.css'
import Contact from './Contact'
import Footer from './Footer'
import Navbar from './Navbar'

function ContactList() {

    const [contacts, setContacts] = useState([])

    const getContacts = async () => {
        try {

            const response = await axios.get("/api/contacts/get-contacts-by-id", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            })

            if (response.data.success) {
                setContacts(response.data.data)
            } else {
                message.error(response.data.message)
            }
        } catch (error) {
            message.error(error.message)
        }
    };

    useEffect(() => {
        getContacts()
    }, [])


    return (
        <div>
            <Navbar />
            <section className='contact-search p-3'>
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className='h3'>Contact Manager
                                    <Link to={'/contacts/add'} className="btn btn-primary ms-2">Add Contact</Link>
                                </p>
                                <p className='fst-italic'>Effortlessly organize and streamline your contacts with our intuitive contact manager application. Stay connected and up-to-date with your network through a user-friendly interface that allows you to easily add, edit, and search contacts. Simplify your life and increase productivity with our efficient contact management solution</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <form className='row' action="">
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="text" className='form-control' placeholder='Search...' />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="submit" className='btn btn-outline-dark' value="Search" />
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row mt-3">
                        <h4>Saved Contacts</h4>

                        {contacts.map((contact, index) => (
                            <Contact key={contact._id} contact={contact} index={index}/>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ContactList
