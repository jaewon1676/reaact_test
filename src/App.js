/* eslint-disable */
import './App.css';
import React, {useState} from 'react';

function App() {

    let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '판교 원룸']);
    let [따봉, 따봉변경] = useState(0);
    let posts = '강남 고기 맛집';
    return(
        <div className='app'>
            <div className='black-nav'>
                <div>개발 Blog</div>
            </div>
            <div className='list'>
                <h3 onClick = { () => {따봉변경(따봉 + 1)}}> {글제목[0]} {따봉} </h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>
            <div className='list'>
                <h3> {글제목[1]} </h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>
            <div className='list'>
                <h3> {글제목[2]} </h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>
        </div> 
        
    );
}


export default App;
