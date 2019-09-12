import React,{useEffect, useState} from 'react';

function Slice(props){
    const {cp, radius, stroke, sliceColour, dasharray, dashoffset, ctrl } = props.data;
    const dashAnim = [
        //2 : fills up the donut with fixed point clockwise
        100,
        // 4 : fills up the donut with rotation clockwise
        200,
        // 1 : rotates donut multipletimes;spin
        dashoffset*10,
        // 6 : fills up the donut with random rotation ; between 25 and 100
        Math.floor((Math.random() * 75)+25)
    ]
    const [dash, setDash] = useState(['0 200', `${dashAnim[ctrl]}`]);
    useEffect(()=>{
        setDash(['0 200', `${dashAnim[ctrl]}`])
        setTimeout(()=>{setDash([dasharray,dashoffset])},1000)
    },[setDash,dasharray,dashoffset,ctrl])
    return(
        <circle
            className="donut-segment"
            fill="transparent"
            cx={cp}
            cy={cp}
            r={radius}
            strokeWidth={stroke}
            stroke={sliceColour}
            strokeDasharray={dash[0]}
            strokeDashoffset={dash[1]}>

        </circle>
    )
}
export default Slice;

// // 0 : rotates donut 360%;rotate
//  dashoffset-100,
// // 1 : rotates donut multipletimes;spin
// dashoffset*10,
// //2 : fills up the donut with fixed point clockwise
// 100,
// // 3 : fills up the donut with fixed point counterclockwise
// -1*dashoffset,
// // 4 : fills up the donut with rotation clockwise
// 200,
// // 5 : fills up the donut with rotation counterclockwise
// -100,
// // 6 : fills up the donut with random rotation ; between 25 and 100
// Math.floor((Math.random() * 75)+25)
