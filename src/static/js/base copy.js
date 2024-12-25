import $ from 'jquery';
import 'expose-loader?$!expose-loader?jQuery!jquery';

function number_format(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function un_number(x){
	return x.replace(/,/gi,'');
}
function only_number_format(i){
	$(i).val(number_format(un_number($(i).val())));
}
function numberPad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}
function get_stats(){
	if (atv==true)
	{
		$.ajax({
			type: "get",
			url: '/game/get_now_stat',
			dataType:'json',
			success: function(data) {
				if (data.stat == 'logout')
				{
					location.replace('/');
				}else{
					$('.money').html(number_format(data.money));
					$('.point').html(number_format(data.point));
					//홀덤머니
					$('.hd_money').html(number_format(data.hd_money));
					$('.nm_coupon').html(number_format(data.nm_coupon));
					$('.pr_coupon').html(number_format(data.pr_coupon));
					$('.memo_cnt').html(data.memo);
					if (eval(data.memo) > 0)
					{
						if (memo == 'here')
						{
							$('.new_memo').css('bottom','50px');
						} else {
							location.replace('/customer/memo');
						}
					} else {
						$('.new_memo').css('bottom','-201px');
					}
					if (data.new_deposit > 0)
					{
						switch (data.new_deposit)
						{
						case '1':
							alert('충전이 완료되었습니다.');
						break;
						case '2':
							alert('충전이 취소되었습니다.\n취소 사유를 확인하시려면 고객센터로 문의 바랍니다.');
						break;
						}
						chk_new_deposit();
					}
					if (data.new_withdrawal > 0)
					{
						switch (data.new_withdrawal)
						{
						case '1':
							alert('환전이 완료되었습니다.');
						break;
						case '2':
							alert('환전이 취소되었습니다.\n취소 사유를 확인하시려면 고객센터로 문의 바랍니다.');
						break;
						}
						chk_new_withdrawal();
					}
					//계좌안내 클립보드
					if (data.cs > 0)
					{
						//alert('고객센터 문의에 답변이 등록되었습니다.');
						//open_qna_deposit();
						location.replace('/customer/cs_center');
					}
					if (data.csd > 0)
					{
						//alert('고객센터 문의에 답변이 등록되었습니다.');
						open_qna_deposit();
						//location.replace('/customer/cs_center');
					}
				}
			}
		});
	}
}
//계좌안내 클립보드
function open_qna_deposit(){
	$.ajax({
		type: "get",
		url: '/customer/last_answer',
		dataType:'json',
		success: function(data) {
			Swal.fire({
				title: "계좌안내",
				html: data.info+'<br><div class="alert_text">은행명: '+data.bank_name+'<br>예금주: '+data.bank_acc+'<br>계좌번호: <span class="btn_copy_bank" data-txt="'+data.bank_no+'"><i class="fas fa-copy"></i> 복사하기</span><span class="bank_hidden_info"></span><input type="hidden" id="copy_bank_no" value=""></div>',
				width: 600,
				padding: "3em",
				color: "#fff",
				background: "#333",
				backdrop: `
					rgba(0,0,0,1)
				  `,
				allowOutsideClick: false
				});
		}
	});
}
$(document).on('click','.btn_copy_bank',function() {
	var txt = $(this).attr('data-txt');
	$(this).remove();
	copyToClipboard(txt);
});
function copyToClipboard(text) {
	navigator.clipboard.writeText(text).then(function() {
		$('.bank_hidden_info').html('계좌번호가 클립보드에 복사되었습니다.');
	}).catch(function(error) {
		console.error('텍스트 복사 실패:', error);
	});
}
function chk_new_deposit(){
	$.ajax({
		type: "get",
		url: '/customer/check_new_deposit',
		dataType:'json',
		success: function(data) {
		}
	});
}
function chk_new_withdrawal(){
	$.ajax({
		type: "get",
		url: '/customer/check_new_withdrawal',
		dataType:'json',
		success: function(data) {
		}
	});
}
var payback_stat = false;
function open_payback(){
	if (payback_stat == false)
	{
		payback_stat = true;
		$('.pop_payback').css('display','block');
		$.ajax({
			type: "get",
			url: '/payback',
			dataType:'json',
			success: function(data) {
				$('.pop_payback_info').text('페이백 이벤트');
				$('.payback_info').html(data.msg);
				$('.pop_payback').css('display','block');
				$('.pop_payback').removeClass('dspn');
			}
		});
	}
}
function get_prematch_cnt(){
	$.ajax({
		type: "get",
		url: '/game/prematch_cnt',
		dataType:'json',
		success: function(data){
			$('.btn_sports_tab[data-cate=all] strong').html(data.all);
			$('.btn_sports_tab[data-cate=soccer] strong').html(data.soccer);
			$('.btn_sports_tab[data-cate=basket] strong').html(data.basket);
			$('.btn_sports_tab[data-cate=baseball] strong').html(data.baseball);
			$('.btn_sports_tab[data-cate=volley] strong').html(data.volley);
			$('.btn_sports_tab[data-cate=hockey] strong').html(data.hockey);
			$('.btn_sports_tab[data-cate=egame] strong').html(data.egame);
			$('.btn_sp_soccer .snb_sp_cnt').html(data.soccer);
			$('.btn_sp_basket .snb_sp_cnt').html(data.basket);
			$('.btn_sp_baseball .snb_sp_cnt').html(data.baseball);
			$('.btn_sp_volley .snb_sp_cnt').html(data.volley);
			$('.btn_sp_hockey .snb_sp_cnt').html(data.hockey);
			$('.btn_sp_handball .snb_sp_cnt').html(data.handball);
			$('.btn_sp_dart .snb_sp_cnt').html(data.dart);
			$('.btn_sp_pp .snb_sp_cnt').html(data.pp);
			$('.btn_sp_tenis .snb_sp_cnt').html(data.tenis);
			$('.btn_sp_mma .snb_sp_cnt').html(data.mma);
			$('.btn_sp_boxing .snb_sp_cnt').html(data.boxing);
			$('.btn_sp_egame .snb_sp_cnt').html(data.egame);
		}
	});
}
var atv = true;
var snb_stat = 'close';
var betslip_stat = 'close';
$(document).ready(function(){
	if (logon == 'on')
	{
		get_stats();
		int_stat = setInterval("get_stats();",5000);
	}
	get_prematch_cnt();
	$('.open_revolution').on('click',function(){
		if (logon == 'on')
		{
			window.open( "/game/revolution", "SlotWin" );
		}
	});
	var mission_stat1 = false;
	var mission_stat2 = false;
	$('.mission').on('click',function(){
		let m_type = $(this).attr('data-type');
		switch (m_type) {
			case 'daily_dp_cnt' :
				if(!mission_stat1) {
					$.ajax({
						type: "get",
						url: '/mission/daily/'+m_type,
						dataType:'json',
						success: function(data) {
							$('.pop_payback_info').text(data.title);
							$('.payback_info').html(data.msg);
							$('.pop_payback').css('display','block');
							$('.pop_payback').removeClass('dspn');
						}
					});
					mission_stat1 = true;
				}
				break;
			case 'daily_dp_amt' :
				if(!mission_stat2) {
					$.ajax({
						type: "get",
						url: '/mission/daily/'+m_type,
						dataType:'json',
						success: function(data) {
							$('.pop_payback_info').text(data.title);
							$('.payback_info').html(data.msg);
							$('.pop_payback').css('display','block');
							$('.pop_payback').removeClass('dspn');
						}
					});
					mission_stat2 = true;
				}
				break;
		}
	});
	$('.close_payback_pop').on('click',function(){
		$('.pop_payback').addClass('dspn');
	});
	$('.btn_snb_sp').on('click',function(){
		var spo = $(this).attr('data-spo');
		var st = $(this).attr('data-stat');
		var oj = $(this);
		if(spo=='egame') {
			location.replace('/esports/es');
			return false;
		}
		if (st=='open')
		{
			$(this).attr('data-stat','close');
			$('.snb_national').html('');
		} else {
			$('.btn_snb_sp').attr('data-stat','close');
			$(this).attr('data-stat','open');
			$.ajax({
				type: "get",
				url: '/sports/get_national/'+spo,
				dataType:'json',
				success: function(data){
					oj.after($('.snb_national'));
					$('.snb_national').html('');
					$.each(data, function(k, el){
						$('.snb_national').append('<div class="btn_national" data-id="'+el.lo_id+'" data-name="'+el.lo_name+'" data-stat="close" data-cate="'+spo+'"><i class="icon_circle"></i><span class="nt_name"><img src="/static/img/flag/'+el.isoId+'.png" alt="">'+el.lo_name+'</span><span class="nt_cnt">'+el.cnt+'</span></div>');
					});
					if ($('.snb_leagues').length < 1)
					{
						$('.snb_national').after('<div class="snb_leagues"></div>');
					}
				}
			});
		}
	});
	$(document).on('click','.five_game',function(){
		var str = $(this).attr('data-str');
		$('.sch_key').val(str);
		if (snb_stat=='open')
		{
			$('.snb_btn').removeClass('snb_opened');
			$('.snb_icon_open').removeClass('dspn');
			$('.snb_icon_close').addClass('dspn');
			$('.snb_left').removeClass('menu_opened');
			$('.snb_btn_open').removeClass('fa-rotate-180');
			$('body').css('overflow','overlay');
			$('.detail_game').attr('data-idx','');
			$('.detail_game').addClass('dspn');
			$('.no_select').removeClass('dspn');
			snb_stat = 'close';
		}
		$('.sp_sch').submit();
	});
	$(document).on('click','.btn_national',function(){
		var loid = $(this).attr('data-id');
		var st = $(this).attr('data-stat');
		var spo = $(this).attr('data-cate');
		var oj = $(this);
		$('.snb_leagues').html('');
		if (st=='open')
		{
			$(this).attr('data-stat','close');
		} else {
			$('.btn_national').attr('data-stat','close');
			$(this).attr('data-stat','open');
			$.ajax({
				type: "get",
				url: '/sports/get_leagues/'+spo+'/'+loid,
				dataType:'json',
				success: function(data){
					oj.after($('.snb_leagues'));
					$.each(data, function(k, el){
						$('.snb_leagues').append('<div class="btn_league" data-id="'+el.lg_id+'" data-name="'+el.lg_name+'" data-lo="'+loid+'" data-spo="'+spo+'"><span class="nt_name"><i class="fas fa-chevron-right"></i> '+el.lg_name+'</span><span class="nt_cnt">'+el.cnt+'</span></div>');
					});
				}
			});
		}
	});
	$(document).on('click','.btn_league',function(){
		var str = $(this).attr('data-name');
		var ctr = $(this).attr('data-lo');
		var spo = $(this).attr('data-spo');
		$('.btn_sports_tab').removeClass('btn_sports_tab_on');
		$('.btn_sports_tab[data-cate='+spo+']').addClass('btn_sports_tab_on');
		$('.sch_key').val(str);
		$('.ctr').val(ctr);
		$('body').css('overflow','overlay');
		$('.detail_game').attr('data-idx','');
		$('.detail_game').addClass('dspn');
		$('.no_select').removeClass('dspn');
		$('.sp_sch').attr('action','/game/sports');
		$('.sp_sch').submit();
	});
	$('.btn_top_login').on('click',function(){
		$('.btn_bet_slip_open').click();
	});
	$('.mobile_btn_login').on('click',function(){
		$('.pop_user_info').css('height','100%');
	});
	$('.close_user_info').on('click',function(){
		$('.pop_user_info').css('height','0');
	});
	$('.auto_ratio').on('change',function(){
		var ar = $(this).val();
	});
	$('.controll_box').on('click',function(){
		var type = $(this).attr('data-type');
		var stat = $(this).attr('data-stat');
		switch (stat)
		{
		case '1':
			$(this).removeClass('swc_on');
			$(this).addClass('swc_off');
			$(this).attr('data-stat','2');
			$('.'+type).val('2');
			autor = '2';
		break;
		case '2':
			$(this).removeClass('swc_off');
			$(this).addClass('swc_on');
			$(this).attr('data-stat','1');
			$('.'+type).val('1');
			autor = '1';
		break;
		default :
			$(this).removeClass('swc_off');
			$(this).addClass('swc_on');
			$(this).attr('data-stat','1');
			$('.'+type).val('1');
		break;
		}
		$.ajax({
			type: "get",
			url: '/game/auto_ratio/'+autor,
			dataType:'json',
			success: function(data) {
			}
		});
	});
//	$(window).blur(function(){
//		atv = false;
//	});
//	$(window).focus(function(){
//		atv = true;
//	});
	$('.refresh_btn').on('click',function(){
		location.reload();
	});
	$('.contents').on('click',function(){
		if (snb_stat=='open')
		{
			$('.snb_btn').removeClass('snb_opened');
			$('.snb_icon_open').removeClass('dspn');
			$('.snb_icon_close').addClass('dspn');
			$('.snb_left').removeClass('menu_opened');
			$('.snb_btn_open').removeClass('fa-rotate-180');
			$('body').css('overflow','overlay');
			snb_stat = 'close';
		}
		if (betslip_stat=='open')
		{
			$('.bet_slip').removeClass('bet_slip_on');
			$('.btn_bet_slip_open .closed').addClass('dspn');
			if (!$('.bc_select ul li').hasClass('no_data')) {
				$('.btn_bet_slip_open .opened').removeClass('dspn');
			}
			$('.btn_bet_slip_open').removeClass('open_bet_slip_btn');
			betslip_stat = 'close';
		}
	});
	$('.snb_btn').on('click',function(){
		switch (snb_stat)
		{
		case 'close':
			$(this).addClass('snb_opened');
			$('.snb_icon_open').addClass('dspn');
			$('.snb_icon_close').removeClass('dspn');
			$('.snb_left').addClass('menu_opened');
			$('.snb_btn_open').addClass('fa-rotate-180');
			$('body').css('overflow','hidden');
			snb_stat = 'open';
			if (betslip_stat=='open')
			{
				$('.bet_slip').removeClass('bet_slip_on');
				$('.btn_bet_slip_open .closed').addClass('dspn');
				$('.btn_bet_slip_open .opened').removeClass('dspn');
				$('.btn_bet_slip_open').removeClass('open_bet_slip_btn');
				betslip_stat = 'close';
			}
		break;
		case 'open':
			$(this).removeClass('snb_opened');
			$('.snb_icon_open').removeClass('dspn');
			$('.snb_icon_close').addClass('dspn');
			$('.snb_left').removeClass('menu_opened');
			$('.snb_btn_open').removeClass('fa-rotate-180');
			$('body').css('overflow','overlay');
			snb_stat = 'close';
		break;
		}
	});
	$('.btn_bet_slip_open').on('click',function(){
		switch (betslip_stat)
		{
		case 'close':
			$('.bet_slip').addClass('bet_slip_on');
			$('.btn_bet_slip_open .closed').removeClass('dspn');
			$('.btn_bet_slip_open .opened').addClass('dspn');
			$(this).addClass('open_bet_slip_btn');
			betslip_stat = 'open';
			if (snb_stat=='open')
			{
				$('.snb_btn').removeClass('snb_opened');
				$('.snb_icon_open').removeClass('dspn');
				$('.snb_icon_close').addClass('dspn');
				$('.snb_left').removeClass('menu_opened');
				$('.snb_btn_open').removeClass('fa-rotate-180');
				snb_stat = 'close';
			}
		break;
		case 'open':
			$('.bet_slip').removeClass('bet_slip_on');
			$('.btn_bet_slip_open .closed').addClass('dspn');
			$('.btn_bet_slip_open .opened').removeClass('dspn');
			$(this).removeClass('open_bet_slip_btn');
			betslip_stat = 'close';
		break;
		}
	});
	$('.mg_casino').on('click',function(){
		var game = $(this).attr('data-id');
		var game_name = $(this).attr('data-name');
		if (logon=='on')
		{
			if (game=='maintenance')
			{
				alert('점검중입니다.');
				return false;
			} else {
				window.open( "/game/open_casino/"+game+"/"+game_name, "SlotWin" );
			}
		} else {
			$('.pop_login').fadeIn(500);
			$(document).scrollTop(0);
			//$('.pop_focus').focus();
			$('.wrap').css('overflow','hidden');
			return false;
		}
	});
	$('.mg_link').on('click',function(){
		if (logon!='on')
		{
			$('.pop_login').fadeIn(500);
			$(document).scrollTop(0);
			//$('.pop_focus').focus();
			$('.wrap').css('overflow','hidden');
			return false;
		}
	});
	$('.login_btn').on('click',function(){
		$('.pop_login').fadeIn(500);
		$(document).scrollTop(0);
		//$('.pop_focus').focus();
		$('.wrap').css('overflow','hidden');
		return false;
	});
	$('.mg_sdapi').on('click',function(){
		var game = $(this).attr('data-id');
		var game_name = $(this).attr('data-name');
		if (logon=='on')
		{
			if (game=='maintenance')
			{
				alert('점검중입니다.');
				return false;
			} else {
				window.open( "/casino/open_sdapi/"+game_name+"/"+game, "SlotWin" );
			}
		} else {
			$('.pop_login').fadeIn(500);
			$(document).scrollTop(0);
			//$('.pop_focus').focus();
			$('.wrap').css('overflow','hidden');
			return false;
		}
	});
	$('.go_to_withdrawal').on('click',function(){
		money_refresh();
		var mm = un_number($('.cmoney').html());
		var amt = un_number($('.sm_w_money').val());
		if (eval(amt) < 1)
		{
			alert('출금하실 금액을 설정해주세요.');
			return false;
		} else if (eval(amt) > eval(mm)) {
			alert('카지노머니가 부족합니다.');
			return false;
		} else if (confirm('카지노머니를 보유머니로 전환하시겠습니까?')) {
			$.ajax({
				type: "post",
				url: '/casino/withdrawal_slot',
				data: {money:amt},
				dataType:'json',
				success: function(data){
					alert(data.msg);
					if (data.code == '1')
					{
						$('.sm_w_money').val(0)
						$('.slot_money_box').css('height','20px');
						money_refresh();
					}
					return false;
				}
			});
		}else{
			alert('취소되었습니다.');
		}
	});
	if (logon!='on')
	{
		$('a').on('click',function(){
			if (!$(this).hasClass('no_pop')&&1==2)
			{
				$('.pop_login').fadeIn(500);
				$(document).scrollTop(0);
				//$('.pop_focus').focus();
				$('.wrap').css('overflow','hidden');
				return false;
			}
		});
	}
	$('.close_login_pop').on('click',function(){
		$('.pop_login').fadeOut(500);
	});
	$('.exchange_point').on('click',function(){
		var now_point = un_number($('.point').html());
		if(now_point < 1000) {
			alert('포인트 전환은 1000 포인트부터 가능합니다.');
			return false;
		}
		if (confirm('포인트를 머니로 전환하시겠습니까?'))
		{
			$.ajax({
				type: "get",
				url: '/game/exchange_point/',
				dataType:'json',
				success: function(data) {
					switch (data.code)
					{
					case 'okay':
						alert(number_format(data.amt)+'원 머니로 전환되었습니다.');
						get_stats();
						return false;
					break;
					case 'no_point':
						alert('포인트가 부족합니다.');
						return false;
					break;
					case 'err':
						alert('고객센터로 문의주세요.');
						return false;
					break;
					}
				}
			});
		}
	});

	$('.sm_withdrawal2').on('click',function(){
		var nh = $('.slot_money_box2').css('height');
		if (nh == '161px')
		{
			$('.slot_money_box2').css('height','20px');
		}else{
			$('.slot_money_box2').css('height','161px');
		}
		$('.sm_charge_box2').addClass('dspn');
		$('.sm_withdrawal_box2').removeClass('dspn');
	});
	$('.sm_charge2').on('click',function(){
		var nh = $('.slot_money_box2').css('height');
		if (nh == '160px')
		{
			$('.slot_money_box2').css('height','20px');
		}else{
			$('.slot_money_box2').css('height','160px');
		}
		$('.sm_charge_box2').removeClass('dspn');
		$('.sm_withdrawal_box2').addClass('dspn');
	});
	$('.sm_c_money').on('focus', function(){
		$(this).val('')
	});
	$('.sm_c_money').on('keyup', function(){
		only_number_format(this);
	});
	$('.sm_c_money').on('focusout', function(){
		if ($(this).val() == '' || $(this).val() < 1000)
		{
			$(this).val('0');
		}
	});
	$('.select_money').on('click',function(){
		var nm = un_number($('.sm_c_money').val());
		var sm = un_number($(this).attr('data-amt'));
		var mm = un_number($('.money').html());
		var total = eval(nm) + eval(sm);
		if(eval(total) > eval(mm)) {
			alert('보유금이 부족합니다.');
			return false;
		}
		$('.sm_c_money').val(total);
		only_number_format('.sm_c_money');
	});
	$('.select_money2').on('click',function(){
		var nm = un_number($('.sm_w_money').val());
		var sm = un_number($(this).attr('data-amt'));
		var mm = un_number($('.cmoney').html());
		var total = eval(nm) + eval(sm);
		if(eval(total) > eval(mm)) {
			alert('카지노머니가 부족합니다.');
			return false;
		}
		$('.sm_w_money').val(total);
		only_number_format('.sm_w_money');
	});
	$('.select_max').on('click',function(){
		var mm = un_number($('.money').html());
		$('.sm_c_money').val(mm);
		only_number_format('.sm_c_money');
	});
	$('.select_max2').on('click',function(){
		money_refresh();
		if (confirm('카지노머니를 보유머니로 전환하시겠습니까?'))
		{
			$.ajax({
				type: "post",
				url: '/casino/withdrawal_slot',
				data: {money:'all'},
				dataType:'json',
				success: function(data){
					if (data.code == '1')
					{
						$('.cmoney').html('0');
						$('.slot_money_box').css('height','20px');
						$('.slot_money_box2').css('height','20px');
					} else {
						alert(data.msg);
					}
					return false;
				}
			});
		}else{
			alert('취소되었습니다.');
		}
	});
	$('.sm_refresh').on('click',function(){
		money_refresh();
	});
	$('.go_to_charge').on('click',function(){
		var nm = un_number($('.sm_c_money').val());
		var mm = un_number($('.money').html());
		if (eval(nm) < 1000)
		{
			alert("충전금액을 확인해주세요.");
			return false;
		}
		if(eval(nm) > eval(mm)) {
			alert('보유금이 부족합니다.');
			return false;
		}
		if (confirm('보유머니를 카지노머니로 전환하시겠습니까?')) {
			$.ajax({
				type: "post",
				url: '/casino/charge_slot',
				data: {money: nm},
				dataType: 'json',
				success: function (data) {
					if (data.code == '1') {
						alert(data.msg);
						$('.sm_c_money').val('0');
						$('.slot_money_box').css('height', '20px');
						$('.slot_money_box2').css('height', '20px');
						money_refresh();
					} else {
						alert(data.msg);
					}
					return false;
				}
			});
		}
	});
	$('.btn_ex_money').on('click',function(){
		if ($('.outer_exchange').hasClass('dspn'))
		{
			money_refresh();
			$('.outer_exchange').removeClass('dspn');
		} else {
			$('.outer_exchange').addClass('dspn');
		}
	});
	$('.refresh_cmoney').on('click',function(){
		$('.refresh_cmoney').addClass('dspn');
		money_refresh();
		setTimeout("$('.refresh_cmoney').removeClass('dspn');",5000);
	});
	$('.sch_sp_btn').on('click',function(){
		$('.sp_sch').submit();
	});
	$('.sch_sp_btn2').on('click',function(){
		$('.sp_sch2').submit();
	});
	$('.tel_btn').on('click',function (){
		window.open('https://t.me/'+tele_id);
	});
});
function money_refresh(){
	$.ajax({
		type: "get",
		url: '/casino/get_slot_money/',
		dataType:'json',
		success: function(data){
			if (data.code != '1')
			{
				alert("머니조회실패. 고객센터에 문의해주세요.");
			} else {
				$('.cmoney').html(data.money);
			}
		}
	});
}