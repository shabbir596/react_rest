import React from 'react'

export default function Toolbar() {
    return (
        <>
            <div className="tools w-100 px-1 px-sm-3 py-2 py-sm-2 d-flex justify-content-between align-items-center rounded-pill">
                <div className="d-flex flex-column flex-sm-row justify-content-between flex-grow-1">
                    {/* language toggle */}
                    <div className="d-flex order-2 order-sm-1 align-items-center">
                        <label
                            className="form-check-label custom-control-label ms-2 ms-sm-0 me-1"
                            htmlFor="hindi_english"
                        >
                            हिन्दी
                        </label>
                        <div className="form-check form-switch custom-control-right d-flex align-items-center">
                            <input
                                className="form-check-input me-1"
                                type="checkbox"
                                id="hindi_english"
                                defaultChecked=""
                            />
                            <label
                                className="form-check-label custom-control-label me-1"
                                htmlFor="hindi_english"
                            >
                                English
                            </label>
                        </div>
                    </div>
                </div>
                <div className="right_side d-flex flex-column flex-sm-row me-2 me-sm-0">
                    <div className="change_veg">
                        {/* check box for veg */}
                        <ul className="ks-cboxtags m-0">
                            <li className='me-2'>
                                <input
                                    type="checkbox"
                                    id="veg"
                                    defaultValue="Veg"
                                    defaultChecked=""
                                />
                                <label htmlFor="veg"> Veg</label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    id="non-veg"
                                    defaultValue="Non-veg"
                                    defaultChecked=""
                                />
                                <label htmlFor="non-veg">Non-veg</label>
                            </li>
                        </ul>
                        {/* ./check box for veg */}
                    </div>
                </div>
            </div>
        </>
    )
}
