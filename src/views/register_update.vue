<template>
	<div>
	  <form @submit.prevent="registerUser">
		<input type="text" name="user_id" v-model="id" placeholder="아이디" required />
		<input type="text" name="user_nick" v-model="nick" placeholder="닉네임" required />
		<input type="password" name="user_pw" v-model="pw" placeholder="비밀번호" required />
		<input type="password" name="user_pw_re" v-model="pw2" placeholder="비밀번호 확인" required />
		<input type="text" name="user_nick" v-model="bname" placeholder="닉네임" required />
		<input type="text" name="bank_no" v-model="bank_no" placeholder="계좌번호" required />
		<input type="text" name="bank_name" v-model="bc" placeholder="은행명" required />
		<input type="text" name="hiddenCode" v-model="code" placeholder="추천코드" />
		<button type="submit">회원가입</button>
	  </form>
	</div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
	data() {
	  return {
		id: '',
		nick: '',
		pw: '',
		pw2: '',
		bname: '',
		bank_no: '',
		bc: '',
		code: '',
		today: new Date().toISOString().split('T')[0],
	  };
	},
	methods: {
	  async registerUser() {
		try {
		  // API 호출
		  await axios.post('http://localhost:3000/customer/register_update', {
			id: this.id,
			nick: this.nick,
			pw: this.pw,
			pw2: this.pw2,
			bname: this.bname,
			bank_no: this.bank_no,
			bc: this.bc,
			code: this.code,
			today: this.today,
		  });
  
		  // 성공 후 페이지 이동
		  this.$router.push('/indexsss'); // 원하는 경로로 수정
		} catch (error) {
		  console.error(error);
		  alert('등록 중 오류가 발생했습니다.');
		}
	  },
	},
  };
  </script>
  
  <style scoped>
  /* 스타일 추가 가능 */
  </style>
  