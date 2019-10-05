import React from 'react';
import './App.css';
import {connect} from "react-redux";
import updateUser from "./redux/actions";

function App(props) {
  return (
    <div className="App">
      <p>{props.products.length}</p>
      <p>{props.user}</p>
      <button onClick={() => props.updateUsers('Jane')}>액션디스패치</button>
    </div>
  );
}
//store의 state를 props 매핑하는 과정
const mapStateToProps = (state) => ({
  //왼쪽은 props, 오른쪽이 store의 state
  products : state.products,
  user : state.user
});

//액션을 디스패치하는 펑션을 props로 매핑하는 과정
const mapActionToProps = (dispatch) => ({
  //왼쪽은 props, 오른쪽이 (액션을 디스패치하는) 펑션
  updateUsers : (name) => dispatch(updateUser(name))
});

//curring펑션 : 펑션에 파라미터로 펑션을 전달해주는 것
//HoC(Higher-Order Components) : 대표적 예로 redux의 connect(), 컴포넌트를 입려받아서 새로운 컴포넌트를 생성한다는 개념
export default connect(mapStateToProps, mapActionToProps)(App);
