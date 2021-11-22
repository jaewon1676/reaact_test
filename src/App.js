import './App.css';
import React, {useState} from 'react';

function App() {

    let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
    let [따봉, 따봉변경] = useState(0);
    let [modal, modal변경] = useState(false);
    let posts = '강남 고기 맛집';
    let [누른제목, 누른제목변경] = useState(0);
    let [입력값, 입력값변경] = useState('');

    function 반복된UI(){
        
        var array = []
        for (let i=0; i<3; i++){
            array.push(<div>안녕</div>)
        }
        
        return array
    }


    function 제목바꾸기() {
        var newArray = [...글제목];
        newArray[0] = ['여자 코트 추천']
        글제목변경(newArray);
    }


    return (
        <div className="App">
            <div className='black-nav'>
                <div>개발 Blog</div>
            </div>
            <button onClick={제목바꾸기}>버튼!</button>

            
            {
                글제목.map(function (n, i) {
                    return (
                        <div className='list' key={i}>
                            <h3 onClick={ () => { 누른제목변경(i) }} >
                        <span onClick={ () => {따봉변경(따봉+1)}  }>{n} ★{따봉}</span> </h3>
                            <p>2월 17일 발행</p>
                            <hr/>
                        </div>
                    )
                })
            }


            <div className='publish'>
                <input onChange = { (e) => {입력값변경(e.target.value)} }/>
                <button onClick = { () => {
                    var array = [...글제목];
                    array.unshift(입력값);
                    글제목변경(array);
                }}>저장</button>
            </div>


            <button onClick = { () => { modal변경(!modal)}}>모달창 열고닫기</button>
            
            {
                modal === true
                    ? <Modal 글제목 = {글제목} 누른제목 = {누른제목}></Modal>
                    : null
            }
            
            
        </div>
    );

}

function Modal(props) {
    return (
        <div className='modal'>
            <h3>{props.글제목[props.누른제목]}</h3>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
