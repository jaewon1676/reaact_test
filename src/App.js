/* eslint-disable */
import './App.css';
import React, {useState} from 'react';

function App() {

    let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '판교 원룸']);
    let [따봉, 따봉변경] = useState(0);
    let [modal, modal변경] = useState(false);
    let posts = '강남 고기 맛집';
    let [누른제목, 누른제목변경] = useState(0);
    let [입력값, 입력값변경] = useState('');


    function 코트변경(){
        var array = [...글제목];
        array[0] = '여자 코트 추천';
        글제목변경(array);
    }

    return(
        <div className='app'>
            <div className='black-nav'>
                <div>개발 Blog</div>
            </div>
            
            <button onClick={코트변경}>코트변경</button>

            {
                글제목.map(function(a, i){
                    return (
                    <div className='list'>
                    <h4 onClick = { () => {누른제목변경(i)}}>{ a }</h4>
                    <p>2월 17일 발행<span onClick={ () => {따봉변경(따봉 + 1)}}> Θ </span>{따봉}</p>
                    <hr/>
                    </div>)
                })
            }

            
        {/* <button onClick={ () => {누른제목변경(누른제목 = 0)}}>버튼1</button>
            <button onClick={ () => {누른제목변경(누른제목 = 1)}}>버튼2</button>
            <button onClick={ () => {누른제목변경(누른제목 = 2)}}>버튼3</button> */}


    
            <div className='publish'>
                <input onChange={(e) => {입력값변경(e.target.value)}} />
                <button onClick = {() => {
                    var array = [...글제목];
                    array.unshift(입력값);
                    글제목변경(array);
                    }}>저장</button>
            </div>

           <button onClick={() => {modal변경(!modal)}}>모달</button>
           {
               modal === true ? <Modal 글제목 = {글제목} 누른제목 = {누른제목}/> : null
           }
        </div>
    );
}

function Modal(props){
    return(
        <div>
            <div className='modal'>
            <h2>{props.글제목[props.누른제목]}</h2>
            <p>날짜</p>
            <p>상세내용</p>
            </div>
        </div>
    )
}

export default App;
