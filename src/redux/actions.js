//액션 creator : 액션을 만드는 함수
const updateUser = (name) => ({
	type:'updateUser',
	payload: name
});

export default updateUser;