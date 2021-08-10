
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Display = () => {

   

    const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 })
    const [interv, setInterv] = useState();
    
  
    var updatedH = time.h, updatedM = time.m, updatedS = time.s, updatedMs = time.ms;

    const start = () => {
        run();
        setInterv(setInterval(run, 10));
        
    }

    const run = () => {
        if (updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        if (updatedM === 60) {
            updatedH++;
            updatedM = 0
        }
        updatedMs++;
        return setTime({ h: updatedH, m: updatedM, s: updatedS, ms: updatedMs });
    }

    const stop = () => {
        clearInterval(interv);
        fetch(" http://localhost:3003/users",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(time)
        }).then(result => {
            console.log("result",result);
        })
    }

   

    const reset = () => {
        clearInterval(interv);
        return setTime({ h: 0, m: 0, s: 0, ms: 0 })
    }

    return (
        <div >
            <div className="bg-secondary text-center text-white fs-1 p-5 ">
                <span className="bg-secondary text-white" >{time.h >= 10 ? time.h : "0" + time.h}</span>:
                <span className="bg-secondary text-white" >{time.m >= 10 ? time.m : "0" + time.m}</span>:
                <span className="bg-secondary text-white" >{time.s >= 10 ? time.s : "0" + time.s}</span>:
                <span className="bg-secondary text-white" >{time.ms >= 10 ? time.ms : "0" + time.ms}</span>
            </div>
            <div className="d-flex justify-content-center mt-2">
                <button className="btn btn-success mx-2" onClick={start}>Start</button>
                <button className="btn btn-danger mx-2" onClick={stop}>Stop</button>
                <button className="btn btn-primary mx-2" onClick={reset}>Reset</button>
            </div>

            <div className="d-grid gap-2   fs-1 p-5 ">
                <Link to="/history" className="btn btn-secondary fixed-bottom ">View History</Link>
            </div>
        </div>
    )
}

export default Display
