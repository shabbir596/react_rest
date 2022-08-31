import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';

export default function Protected(props) {
    const { Component, Topnav } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login')
        if (login !== 'true') {
            navigate('/login')
        }
    });
  return (
    <>
        <Topnav />
        <Component/>
    </>
  )
}
