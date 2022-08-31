import React from 'react'
import './style/Order.css';
export default function Order() {
    return (
        <section className="container-fluid w-100  main"  id='main-container' >
            <div className="container p-0">
                <section className="" id="Order">
                    <div className="container-lg">
                        <div className="row mb-5 " >
                            <div className="col-12 col-md-12 mt-4" id="card_progress_container">
                                <div className="card card-timeline  mb-4  border-none">
                                    <h4 className=" s-heading card-header text-center">
                                        <small style={{ fontSize: ".675em" }}>Order NO. 1</small>
                                        <div className="loading">
                                            <span className="text">Progress</span>
                                            <span className="blob1 blob"></span>
                                            <span className="blob2 blob"></span>
                                            <span className="blob3 blob"></span>
                                        </div>
                                    </h4>
                                    <ul className="bs4-order-tracking mt-5  d-flex justify-content-center">
                                        <li className="step active">
                                            <div className="circle-wrapper">
                                                <div className="circle"></div>
                                                <div className="icon">
                                                    <i className="fas fa-clipboard animate__animated"></i>
                                                </div>
                                            </div>Order Receiving...
                                        </li>
                                        <li className="step">
                                            <div className="circle-wrapper">
                                                <div className="circle"></div>
                                                <div className="icon">
                                                    <i className="fas fa-bread-slice animate__animated"></i>
                                                </div>
                                            </div>  In Progress
                                        </li>
                                        <li className="step ">
                                            <div className="circle-wrapper">
                                                <div className="circle"></div>
                                                <div className="icon">
                                                    <i className="fa fa-check animate__animated"></i>
                                                </div>
                                            </div>  At Your Table
                                        </li>
                                    </ul>

                                    <div className="w-100 d-flex justify-content-center">
                                        <div className="short_summary">
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex flex-column justify-content-between ">
                                                    <div className="pe-1">Request Time: <span className="request_time" ststyle={{ color: "rgb(80, 80, 80)" }}>7:04 PM</span></div>
                                                    <div className="pe-1">Request Accept: <span className="request_accept" ststyle={{ color: "rgb(80, 80, 80)" }}>Pending</span></div>
                                                </div>
                                                <div className="d-flex flex-column justify-content-between">
                                                    <div>Total Amount: <span style={{ color: "rgb(80, 80, 80)" }}>&#8377;100</span></div>
                                                    <div className="item_collaps collapsed" data-bs-toggle="collapse" data-bs-target="#order1" aria-expanded="false" aria-controls="order1">Total Item: <span style={{ color: "rgb(80, 80, 80)" }}>2 <i className="fas fa-caret-down"></i></span> </div>
                                                </div>
                                            </div>
                                            <div className="table-responsive collapse" id="order1">
                                                <table className="table table-borderless" style={{borderRadius: 10, color: "rgb(80, 80, 80)", backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                                                    <tbody className=" text-95 rounded-3 text-secondary-d3">
                                                        <tr className="rounded-top">
                                                            <td className=" p-0 ps-2">dalfry</td>
                                                            <td className="text-center p-0">1 X &#8377;100</td>
                                                            <td className="text-center p-0">&#8377;100.00</td>
                                                        </tr>
                                                        <tr className="rounded-top">
                                                            <td className=" p-0 ps-2">dalfry</td>
                                                            <td className="text-center p-0">1 X &#8377;100</td>
                                                            <td className="text-center p-0">&#8377;100.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td className="text-center border-top border-dark p-0">&#8377;200.00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
