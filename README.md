리덕스
1.store에 가입(subscribe)
2.store에 변경전파(dispatch)
3.가입자들에게 데이터 제공
4.store : state + action + reducer
5.recducer : state를 가지고 있는 상태에서 action이 들어오면 state를 변경시켜주는 놈

설치
1.redux 모듈 : 리액트와 상관없는 리덕스 모듈
2.react-redux : 리액트에 적용된 리덕스 모듈


소스짜기
1.store 생성 //reducer를 꼭 넣어줘야함
const reducer = () => {
	return 'State';
}
const store = createStore(reducer);

2.액션을 받음 action dispatch
const action = {
	type: 'changeState',
	payload : {
		newState : 'New State'
	}
}

store.dispatch(action);

3.reducer 2개이상사용시 combineReducers()사용해 결합
const allReducers = combineReducers({
	products : productReducer,
	user: userReducer
});


4.redux devtools 보는법
1)왼편은 dispatch 된 것들
@@INIT은 처음에 무조건 생성되는것
 2)오른편은 각각의 dispath에 해당하는 값들
3)하단에 dispatcher로 직접 dispatch 해볼수도있음
