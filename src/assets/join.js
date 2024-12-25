import $ from 'jquery';

$(document).ready(function(){
	$('.join_btn').on('click',function(){
		$('.pop_login').fadeOut(500);
		$('.pop_join').fadeIn(500);
	});
	$(document).on('click','.close_join_pop',function(){
		$('.pop_join').fadeOut(500);
	});
	$(document).on('change','.bank_name',function(){
		var bname = $('.bank_name option:selected').html();
		var bcode = $('.bank_name option:selected').val();
		$('.mb_bank').val(bname);
		$('.mb_bank_code').val(bcode);
	});
	$(document).on('submit','.join_form',function(){
		var nid = $('input[name=user_id]').val();
		var id = $('input[name=user_id]').val();
		var pw = $('input[name=user_pw]').val();
		var pw2 = $('input[name=user_pw_re]').val();
		var nick = $('input[name=user_nick]').val();
		var chk = checkPassword(pw,id);
		var bno = $('input[name=bank_no]').val();
		var bname = $('input[name=bank_name]').val();
		var hp = $('input[name=hp]').val();
		var hp2 = $('input[name=hp2]').val();
		var hp3 = $('input[name=hp3]').val();
		var bc = $('input[name=bank_account]').val();		
		var code = $('input[name=chiddenCode]').val();
		var bank_no = $('input[name=bank_no]').val();
		var crypt = $('input[name=hp_chk_crypt]').val();
		var today = new Date().toISOString().split('T')[0];
		var regType1 = /^(?=.*[a-z0-9]).{4,20}$/;
		if (!regType1.test(id))
		{
			alert('아이디는 4자이상 20자이하 영문 및 숫자로 입력 가능합니다.');
			return false;
		}
		/*if(!$.isNumeric(hp2)){
			alert('휴대폰번호는 숫자로만 입력 가능합니다.');
			return false;
		}
		if(!$.isNumeric(hp3)){
			alert('휴대폰번호는 숫자로만 입력 가능합니다.');
			return false;
		}*/
		if(!$.isNumeric(bank_no)){
			alert('계좌번호는 숫자로만 입력 가능합니다.');
			return false;
		}
		if (chk==false)
		{
			return false;
		}
		var pwre = $('input[name=user_pw_re]').val();
		if (pw!=pwre)
		{
			alert('비밀번호확인이 비밀번호와 일치하지 않습니다.');
			return false;
		}
		if(pw.length < 4) {
			alert('비밀번호는 4자이상 입력 가능합니다.');
			return false;
		}
		if(id.length < 4 || id.length > 12) {
			alert('아이디는 4자이상 12자이하 영문 및 숫자로 입력 가능합니다.');
			return false;
		}
		if(nick.length < 2) {
			alert('닉네임은 2자이상 한글로 입력 가능합니다.');
			return false;
		}
		/*if (crypt=='')
		{
			alert('휴대폰 문자인증을 진행해주세요.');
			return false;
		}*/
		$.ajax({
			type: "post",
			url: 'https://boss-1177.com/customer/chk_register',
			data: {uid:id,unick:nick,ubank:bno},
			dataType:'json',
			success: function(data){
				if (data.chkid != 'okay')
				{
					alert('사용 불가능한 아이디 입니다.');
					return false;
				}
				if (data.chknick != 'okay')
				{
					alert('사용 불가능한 닉네임 입니다.');
					return false;
				}
				if (data.chkbank != 'okay')
				{
					alert('사용 불가능한 계좌번호 입니다.');
					return false;
				}
			}
		});
		//$(this).attr('action','http://localhost:3000/customer/register_update');
	});
	$(document).on('focusout','input[name=user_id]',function(){
		var id = $(this).val();
		checkId(id);
		if(id.length < 4 || id.length > 12) {
			$('.chk_id').removeClass('chk_id_g');
			$('.chk_id').addClass('chk_id_r');
			$('.chk_id').html('아이디는 4~12자로 입력 가능합니다.');
			return false;
		} else {
			$.ajax({
				type: "post",
				url: 'https://boss-1177.com/customer/chk_id',
				data: {uid:id},
				dataType:'json',
				success: function(data){
					if (data.code == 'okay')
					{
						$('.chk_id').removeClass('chk_id_r');
						$('.chk_id').addClass('chk_id_g');
						$('.chk_id').html('사용가능한 아이디입니다.');
					} else {
						$('.chk_id').removeClass('chk_id_g');
						$('.chk_id').addClass('chk_id_r');
						$('.chk_id').html('이미사용중인 아이디입니다.');
					}
					return false;
				}
			});
		}
	});
	$(document).on('focusout','input[name=user_nick]',function(){
		var nick = $(this).val();
		var pattern_num = /[0-9]/;	// 숫자 
		var pattern_eng = /[a-zA-Z]/;	// 문자 
		var pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
		if(pattern_spc.test(nick) || pattern_eng.test(nick) || pattern_num.test(nick) ){
			$('.chk_nick').removeClass('chk_nick_g');
			$('.chk_nick').addClass('chk_nick_r');
			$('.chk_nick').html('닉네임은 한글로 2자이상 가능합니다.');
			return false;
		}
		$.ajax({
			type: "post",
			url: '/customer/chk_nick',
			data: {uid:nick},
			dataType:'json',
			success: function(data){
				if (data.code == 'okay')
				{
					$('.chk_nick').removeClass('chk_nick_r');
					$('.chk_nick').addClass('chk_nick_g');
					$('.chk_nick').html('사용가능한 닉네임입니다.');
				} else if (data.code == 'short')
				{
					$('.chk_nick').removeClass('chk_nick_g');
					$('.chk_nick').addClass('chk_nick_r');
					$('.chk_nick').html('닉네임은 한글로 2자이상 가능합니다.');
				} else {
					$('.chk_nick').removeClass('chk_nick_g');
					$('.chk_nick').addClass('chk_nick_r');
					$('.chk_nick').html('이미사용중인 닉네임입니다.');
				}
				return false;
			}
		});
	});
	$(document).on('click','.send_sms',function(){
		var hp_1 = $('select[name=hp1]').val();
		var hp_2 = $('input[name=hp2]').val();
		var hp_3 = $('input[name=hp3]').val();
		/*if (hp_2.length < 4||hp_3.length < 4)
		{
			alert('휴대폰번호를 올바르게 입력해주세요.');
			return false;
		}*/
		$(this).addClass('dspn');
		$(this).removeClass('btn_mid');
		$('input[name=hp_chk]').removeClass('dspn');
		$.ajax({
			type: "post",
			url: '/sms/make_num',
			data: {hp1:hp_1,hp2:hp_2,hp3:hp_3},
			dataType:'json',
			success: function(data){
				$('input[name=hp_chk_crypt]').val(data.crypt);
				if(data.crypt=='123456') {
					$('input[name=hp_chk]').val('7942');
				}
				alert(data.msg);
				return false;
			}
		});
	});
});
function checkPassword(password,id){

	if(!/^(?=.*[a-zA-Z])(?=.*[0-9]).{4,25}$/.test(password)){
		//alert('비밀번호는 숫자+영문자 조합으로 4자리 이상 사용해야 합니다.');
		//$('#password').val('').focus();
		//return false;
	}
	var checkNumber = password.search(/[0-9]/g);
	var checkEnglish = password.search(/[a-z]/ig);
	if(checkNumber <0 || checkEnglish <0){
		//alert("비밀번호는 숫자와 영문자를 혼용하여야 합니다.");
		//$('#password').val('').focus();
		//return false;
	}
	if(/(\w)\1\1\1/.test(password)){
		//alert('비밀번호는 같은 문자를 4번 이상 사용하실 수 없습니다.');
		//$('#password').val('').focus();
		//return false;
	}

	if(password.search(id) > -1){
		//alert("비밀번호는 비밀번호에 아이디가 포함되었습니다.");
		//$('#password').val('').focus();
		//return false;
	}
	return true;
}
function checkId(str){
	var pattern_num = /[0-9]/;	// 숫자 
	var pattern_eng = /[a-zA-Z]/;	// 문자 
	var pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
	var pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크
	if(!(pattern_spc.test(str)) && !(pattern_kor.test(str)) ){
		return true;
	}else{
		alert("아이디는 영문 및 숫자만 입력 가능합니다.");
		return false;
	}
}