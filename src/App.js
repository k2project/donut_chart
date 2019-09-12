import React,{useState, useEffect} from 'react';
import './App.css';
import Donut from './donut/Donut';


function App() {
    const [slices, setSlices] = useState([5,5,5,5])
    const [ctrl, setCtrl] = useState(0)
    const donutData={
        slices,
        ctrl
    }
    function handleInputChange(e){
        const n = e.target.value;
        if(n&&n>1){
            if(n>1 && n<=20){
                const arr = [];
                for(let k=0; k<n; k++){
                    const num = generateRandomNumMultipleOf5();
                    arr.push(num)
                }
                setSlices(arr)
            }else{
                setSlices([5,5,5,5])
            }
        }
        return;

    }
    useEffect(()=>{
        const input = document.querySelector('input');
        input.value = slices.length;
    })
    return (
    <div className="App">
        <Donut data={donutData}/>
        <div className="donut-input">
            <input type="text" onChange={handleInputChange}/>
            <p>Enter a number between <br/> 2 and 20</p>
        </div>
        <Controllers setCtrl={setCtrl} ctrl={ctrl}/>
        <p>https://k2project.github.io/donut_chart/</p>
    </div>
    );
}

export default App;

function Controllers(props){
    const ctrls = ['Fill Up','Rotate & Fill Up', 'Spin',  'Random'];

    function handleClick(e){
        const t = e.target.closest('.btn');
        if(t){
            props.setCtrl(t.dataset.index)
            const btns = document.querySelectorAll('.btn');
            btns.forEach((btn,index)=>{
                btn.classList = 'btn';
            })
            t.classList = 'btn current';
        }
    }
    const btns = ctrls.map((ctrl,i)=>{
        let cls = "btn"
        if(i===props.ctrl){
            cls = "btn current"
        }
        return <div key={'ctrl_'+i} data-index= {i} className={cls} >{ctrl}</div>
    });

    return(
        <div onClick={handleClick}> {btns} </div>
    )

}

function generateRandomNumMultipleOf5(){
    const max = 100;
    const min = 20;
    let random = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(random % 5 !== 0){
        random = random + (5-random%5);
    }
    return random;
}
