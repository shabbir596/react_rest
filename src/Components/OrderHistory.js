import React from 'react'
import './style/OrderHistory.css'

export default function orderhistory() {
    return (
        <section className="container-fluid w-100  main" id='main-container' >
            <div className="container p-0">
                <section className="" id="OrderHistory">
                    <div className="container-lg">
                        <div className="row mb-5 ">
                            <div className="col-12 summary ">
                                <h3>
                                    Recent <i className="fas fa-clock" />
                                </h3>
                                <ul className="list-group list-group-flush list-unstyled history ">
                                    <li data-bs-toggle="collapse" data-bs-target="#recent_order1" aria-expanded="false" aria-controls="recent_order1" >
                                        <div className="d-flex justify-content-between">
                                            <div className="fw-bold">Order 1</div>
                                            <div>Total Qty 3</div>
                                            <div>Total Amt ₹40.00</div>
                                        </div>
                                        <div className="collapse" id="recent_order1">
                                            <div className="table-responsive mt-3">
                                                <table className="table table-striped table-borderless border-0 border-b-2 brc-default-l1">
                                                    <thead className="">
                                                        <tr className="text-secondary border-top">
                                                            <th className="">#</th>
                                                            <th>Name.</th>
                                                            <th>Qty</th>
                                                            <th>@Unit</th>
                                                            <th>Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className=" text-95 text-secondary-d3">
                                                        <tr className="">
                                                            <td>1.</td>
                                                            <td>Bhaji</td>
                                                            <td>2</td>
                                                            <td>₹10</td>
                                                            <td>₹20.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2.</td>
                                                            <td>sdaskjdfjndjfjdn </td>
                                                            <td>2</td>
                                                            <td>₹10</td>
                                                            <td>₹20.00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-bs-toggle="collapse" data-bs-target="#recent_order2" aria-expanded="false" aria-controls="recent_order2" >
                                        <div className="d-flex justify-content-between">
                                            <div className="fw-bold">Order 2</div>
                                            <div>Total Qty 3</div>
                                            <div>Total Amt ₹40.00</div>
                                        </div>
                                        <div className="collapse" id="recent_order2">
                                            <div className="table-responsive mt-3">
                                                <table className="table table-striped table-borderless border-0 border-b-2 brc-default-l1">
                                                    <thead className="">
                                                        <tr className="text-secondary border-top">
                                                            <th className="">#</th>
                                                            <th>Name.</th>
                                                            <th>Qty</th>
                                                            <th>@Unit</th>
                                                            <th>Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className=" text-95 text-secondary-d3">
                                                        <tr className="">
                                                            <td>1.</td>
                                                            <td>Bhaji</td>
                                                            <td>2</td>
                                                            <td>₹10</td>
                                                            <td>₹20.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2.</td>
                                                            <td>sdaskjdfjndjfjdn </td>
                                                            <td>2</td>
                                                            <td>₹10</td>
                                                            <td>₹20.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2.</td>
                                                            <td>sdaskjdfjndjfjdn </td>
                                                            <td>2</td>
                                                            <td>₹10</td>
                                                            <td>₹20.00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex justify-content-between">
                                            <div />
                                            <div />
                                            <div className="border-top fw-bolder border-dark">
                                                Grand Total : ₹80.00
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </section>

    )
}
