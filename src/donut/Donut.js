import React from 'react';
import {svgStyle, SliceData} from './svgData';
import Slice from './Slice';


function Donut(props){
    const {slices, ctrl} = props.data;
    const{height, width, stroke, viewBox, cp, bg, radius}= svgStyle;
    //get percentage breakdown re each of figure provided
    // get total amount
    // ircumference = 100
    const slicedCirlcles = slices.map((slice,sliceIndex)=>{
        const{dasharray, dashoffset, sliceColour} = new SliceData(slices,sliceIndex).getData();
        const data = {cp, radius, stroke, sliceColour, dasharray, dashoffset, ctrl};
        return <Slice key={sliceIndex+'_svg-circle'} data={data} />

    })
    return(
        <svg width={width} height={height} viewBox={viewBox} className="svg-donut">
              <circle className="donut-ring" cx={cp} cy={cp} r={radius} fill="transparent" stroke={bg} strokeWidth={stroke}></circle>
              {slicedCirlcles}

        </svg>
    )
}
export default Donut;



// {/* <circle class="donut-segment"  cx={cp} cy={cp} r={radius} fill="transparent" stroke="#b1c94e" stroke-width={stroke} stroke-dasharray="15 85" stroke-dashoffset="0"></circle> */}
// {/* 100 - 15  */}
// {/* <circle class="donut-segment "  cx={cp} cy={cp} r={radius} fill="transparent" stroke="#ce4b99" stroke-width={stroke} stroke-dasharray="50 50" stroke-dashoffset="85"></circle> */}
// {/* 100 - (15 + 50) */}
// {/* <circle class="donut-segment "  cx={cp} cy={cp} r={radius} fill="transparent" stroke="#377bbc" stroke-width={stroke} stroke-dasharray="10 90" stroke-dashoffset="35"></circle> */}
// {/* 100 - (15 + 50 + 10) */}
// {/* <circle class="donut-segment "  cx={cp} cy={cp} r={radius} fill="transparent" stroke="#472b6c" stroke-width={stroke} stroke-dasharray="25 75" stroke-dashoffset={cp}></circle> */}
