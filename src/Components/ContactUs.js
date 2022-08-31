import React from 'react'
import './style/ContactUs.css'

export default function ContactUs() {
    return (
        <>
        <section className="container-fluid w-100  main" id='main-container' >
            <div className="container p-0">
                <div className="container" id="contactus">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper">
                                <div className="row no-gutters justify-content-center">
                                    <div className="col-md-10">
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3 className="mb-4">Contact Us</h3>
                                            <form
                                                method="POST"
                                                id="contactForm"
                                                name="contactForm"
                                                className="contactForm"
                                            >
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="name">
                                                                Full Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="name"
                                                                id="name"
                                                                placeholder="Name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="email">
                                                                Email Address
                                                            </label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                name="email"
                                                                id="email"
                                                                placeholder="Email"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="subject">
                                                                Subject
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="subject"
                                                                id="subject"
                                                                placeholder="Subject"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="#">
                                                                Message
                                                            </label>
                                                            <textarea
                                                                name="message"
                                                                className="form-control"
                                                                id="message"
                                                                cols={30}
                                                                rows={4}
                                                                placeholder="Message"
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <button
                                                                type="submit"
                                                                value="Send Message"
                                                                className="css-v4xe61"
                                                            >
                                                                Submit
                                                            </button>
                                                            <div className="submitting" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="row contacts_icon">
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-map-marker" />
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <span>Address:</span> <br />
                                                    198 West 21th Street, Suite 721 New York NY 10016
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-phone" />
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <span>Phone:</span>
                                                    <br /> <a href="tel://1234567920">+ 1235 2355 98</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-paper-plane" />
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <span>Email:</span> <br />{" "}
                                                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-globe" />
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <span>Website</span> <br /> <a href="#">yoursite.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
