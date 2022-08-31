import React,{useEffect, useState} from 'react'
import './style/LogIn.css'
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
    const [scanResultWebCam, setScanResultWebCam] =  useState('');

    const handleErrorWebCam = (error) => {
        // console.log(error);
    }
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem('login')
        if(login === 'true'){
            console.log('redirect page');
            navigate('/')
        }
    })
    const handleScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result);
            localStorage.setItem('login',true)
            localStorage.setItem('login_id', JSON.stringify(result))
            navigate('/',{ state: { id: scanResultWebCam } })
        }
    }
    const [tapScan, setTapScan] = useState('scan_false')
    const [taplogo, setTaplogo] = useState('scan_false')
    const handleScanBtn = () => {
        console.log('button clicked');
        navigator.permissions.query({name: 'camera'})
        .then((permissionObj) => {
        console.log(permissionObj.state);
        })
        .catch((error) => {
        console.log('Got error :', error);
        })
        var now = Date.now();
        navigator.mediaDevices.getUserMedia({video: true})
        .then(function(stream) {
        console.log('Got stream, time diff :', Date.now() - now);
        })
        .catch(function(err) {
        console.log('GUM failed with error, time diff: ', Date.now() - now);
        });
        setTapScan('scan_true')
        setTaplogo('scan_true')

      
}
    const redirect =(page) => {
        navigate(page)
    }
  
    useEffect(() => {
        let loader = document.getElementById('preloader')
        setTimeout(()=>{
                loader.classList.add("d-none")
            },1000)
    }, []); // here

  return (
    <>
    <div className="bg-img"></div>
        <div className="container-fluid" >
            <div className="row justify-content-center pt-5" style={{ minHeight: "80vh" }}>
                <div className="col-12 col-sm-8" >
                <div className="card card-body h-100 shadow" style={{height: '100%',zIndex: '2'}}>
                    <div className="row justify-content-between align-items-center">
                    <div className="col-12">
                        <h3 className="text-center" style={{ color: "#0E4719" }}>
                        Welcome! To Resturant
                        </h3>
                    </div>
                    <Logo tapscan={taplogo}/>
                    </div>
                    <div className="row">
                    <div className="col-12 p-4 d-flex justify-content-center align-items-center" style={{height: '60vh'}}>
                        <div className={tapScan}>
                            <Scanner tapscan={tapScan} handleErrorWebCam={handleErrorWebCam} handleScanWebCam={handleScanWebCam} />
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-auto">
                        <div>
                        <button onClick={() => redirect('/aboutus')} className="about_btn">About Us</button>
                        <button className="scan_btn mx-4" onClick={() => handleScanBtn()}>Scan</button>
                        <button onClick={() => redirect('/contactus')} className="about_btn">Contact Us</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

function Logo(props) {
    if (props.taplogo === 'scan_true'){
        return (
          <div className="col-3 d-flex justify-content-end">
              <div className="avater d-flex justify-content-center align-items-center">
                  R
              </div>
          </div>
        )
    }else{
        return ''
    }
}
function Scanner(props) {
  if (props.tapscan === 'scan_false' ){
    return (
        <div className="main-logo d-flex justify-content-end">
            <div className="avater d-flex justify-content-center align-items-center">
                R
            </div>
        </div>
    )
  }else{
    return (
        <QrReader
            delay={300}
            style={{width: '100%',height: '100%'}}
            onError={props.handleErrorWebCam}
            onScan={props.handleScanWebCam}
            onResult={props.handleScanWebCam}
        />
    )
  }
}
