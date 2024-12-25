import $ from 'jquery';
import logon from 'vue';

var max_folder = 10;
var min_bet = 5000;
var max_bet = 2000000;
var max_get = 10000000;
var max_ratio = 200;
var max_one = 500000;
var nt;
var un_number = true;
var only_number_format = true;
var number_format = function(number) {
    // 숫자가 아닌 경우 문자열로 반환
    if (isNaN(number)) {
        return number.toString(); 
    }
    // 숫자를 문자열로 변환하고 3자리마다 쉼표를 추가
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
var tg = true;
var get_stats = true;
var s_type = true;
var sratio = true;
var atv = true;
var autor = true;
var selh = true;
var sela = true;
var seld = true;
var gid = true;
var bet_stat = true;
$(document).ready(function(){
	set_game();
	var tcate = $(this).attr('data-cate');
	var cc;
	//var chk_lst = setInterval("check_list('all');",5000);
	get_list('all');	
	//var ltre = setInterval("lt_resize();",1500);
	$(window).resize(function(){
		lt_resize();
	});
	$('.btn_inplay_tab').on('click',function(){
		$('.detail_game').attr('data-idx','');
		$('.detail_game').addClass('dspn');
		$('.sport_list_box').after($('.detail_game'));
		$('.no_select').removeClass('dspn');
		var tcate = $(this).attr('data-cate');
		$('.btn_inplay_tab').removeClass('btn_inplay_tab_on');
		$(this).addClass('btn_inplay_tab_on');
		get_list(tcate);
		//clearInterval(chk_lst);
		//chk_lst = setInterval("check_list('"+tcate+"');",5000);
	});
	$(document).on('click','.btn_page',function(){
		$('.detail_game').attr('data-idx','');
		$('.detail_game').addClass('dspn');
		$('.no_select').removeClass('dspn');
		var tcate = $('.btn_inplay_tab_on').attr('data-cate');
		var tpage = $(this).attr('data-page');
		get_list(tcate);
	});
	$(document).on('click','.del_sel',function(){
		var bid = $(this).attr('data-bid');
		var gid = $(this).attr('data-gid');
		$('.b'+bid).remove();
		$('div[data-bid='+bid+']').removeClass('game_on');
		$('.sports_markets[data-id='+gid+']').removeClass('on_the_cart');
		if ($('.bc_select ul li').length < 1)
		{
			$('.sel_odds').removeClass('game_on');
			$('.on_the_cart').removeClass('on_the_cart');
			$('.bc_select ul').html('<li class="no_data">선택된 배팅내역이 없습니다.</li>');
			$('.bc_total_ratio').html('0.00');
			$('.bc_get_money').html(0);
			clearInterval(cc);
		} else {
			var rt = 1;
			$('.bc_select ul li').each(function(){
				rt = eval(rt) * eval($(this).children('.c_ratio').html());
				//rt = Math.floor(eval(rt) * 100) / 100;
			});
			rt = Math.floor(eval(rt) * 100) / 100;
			$('.bc_total_ratio').html(rt);
			calc_cart();
		}
		scart();
	});
	$(document).on('click','.sel_odds',function(){
		if (logon != 'on'){
			if(!$(this).hasClass('join_btn')) {
				$('.pop_login').fadeIn(500);
				$('.pop_focus').focus();
				return false;
			}
			return false;
		}
		if (bet_stat == false)
		{
			return false;
		}
		var bid = $(this).attr('data-bid');
		var gid = $(this).attr('data-gid');
		var ratio = $(this).attr('data-ratio');
		var stan = $(this).children('span').children('.odds_stan').html();
		var s_name = $(this).children('span').children('.odds_name').html();
		var spo = $('.sports_time[data-id='+gid+']').attr('data-spo');
		var mk = $(this).attr('data-m')+'<i class="fas fa-times del_sel" data-bid="'+bid+'" data-gid="'+gid+'"></i>';
		var spo_icon = $('.sports_time[data-id='+gid+']').children('.s_type').html();
		var s_time = $('.sports_time[data-id='+gid+']').children('.s_time').html();
		var league = $('.sports_time[data-id='+gid+']').attr('data-lg');
		var home = $('.sports_time[data-id='+gid+']').attr('data-home');
		var away = $('.sports_time[data-id='+gid+']').attr('data-away');
		var flag = $('.sports_time[data-id='+gid+']').attr('data-flag');
		var now_money = un_number($('.money').html());
		if (!stan)
		{
			stan = '';
		}
		clearInterval(cc);
		//alert(spo+'|'+home+' vs '+away+'|'+gid+'|'+bid+'|'+stan+'|'+ratio);
		if ($('.bc_select ul li').hasClass('no_data'))
		{
			$('.sports_time[data-id='+gid+']').addClass('on_the_cart');
			$('.bc_select ul').html('<li class="g'+gid+' b'+bid+'" data-gid="'+gid+'" data-bid="'+bid+'" data-ratio="'+ratio+'" data-sratio="'+ratio+'" data-home="'+home+'" data-away="'+away+'" data-mk="'+$(this).attr('data-m')+'" data-stan="'+stan+'" data-sel="'+s_name+'"><div class="c_team">'+home+' vs '+away+'</div><div class="c_mk">'+mk+'</div><span class="c_select">'+s_name+'</span><span class="s_stan">'+stan+'</span><span class="c_ratio">'+ratio+'</span></li>');
			$('div[data-bid='+bid+']').addClass('game_on');
		} else {
			if ($('.bc_select ul li').hasClass('b'+bid))
			{
				$('.b'+bid).remove();
				$('div[data-bid='+bid+']').removeClass('game_on');
				$('.sports_time[data-id='+gid+']').removeClass('on_the_cart');
				if ($('.bc_select ul li').length == 0)
				{
					clearInterval(cc);
					$('.bc_select ul').html('<li class="no_data">선택된 항목이 없습니다.</li>');
				}
			} else if($('.bc_select ul li').hasClass('g'+gid)) {
				$('.g'+gid).remove();
				$('.sel_odds[data-gid='+gid+']').removeClass('game_on');
				$('div[data-bid='+bid+']').addClass('game_on');
				$('.bc_select ul').append('<li class="g'+gid+' b'+bid+'" data-gid="'+gid+'" data-bid="'+bid+'" data-ratio="'+ratio+'" data-sratio="'+ratio+'" data-home="'+home+'" data-away="'+away+'" data-mk="'+$(this).attr('data-m')+'" data-stan="'+stan+'" data-sel="'+s_name+'"><div class="c_team">'+home+' vs '+away+'</div><div class="c_mk">'+mk+'</div><span class="c_select">'+s_name+'</span><span class="s_stan">'+stan+'</span><span class="c_ratio">'+ratio+'</span></li>');
			} else {
				$('div[data-bid='+bid+']').addClass('game_on');
				$('.sports_time[data-id='+gid+']').addClass('on_the_cart');
				$('.bc_select ul').append('<li class="g'+gid+' b'+bid+'" data-gid="'+gid+'" data-bid="'+bid+'" data-ratio="'+ratio+'" data-sratio="'+ratio+'" data-home="'+home+'" data-away="'+away+'" data-mk="'+$(this).attr('data-m')+'" data-stan="'+stan+'" data-sel="'+s_name+'"><div class="c_team">'+home+' vs '+away+'</div><div class="c_mk">'+mk+'</div><span class="c_select">'+s_name+'</span><span class="s_stan">'+stan+'</span><span class="c_ratio">'+ratio+'</span></li>');
			}
		}
		var rt = 1;
		if (!$('.bc_select ul li').hasClass('no_data')) {
			$('.bc_select ul li').each(function(){
				rt = eval(rt) * eval($(this).children('.c_ratio').html());
				//rt = Math.floor(eval(rt) * 100) / 100;
			});
			rt = Math.floor(eval(rt) * 100) / 100;
			if (rt > max_ratio)
			{
				$('div[data-bid='+bid+']').removeClass('game_on');
				alert('최대배당은 '+max_ratio+'를 초과할 수 없습니다.');
				$('.sports_time[data-id='+gid+']').removeClass('on_the_cart');
				$('.bc_select ul li:last-child').remove();
				rt = 1;
				$('.bc_select ul li').each(function(){
					rt = eval(rt) * eval($(this).children('.c_ratio').html());
					//rt = Math.floor(eval(rt) * 100) / 100;
				});
				rt = Math.floor(eval(rt) * 100) / 100;
			}
			$('.bc_total_ratio').html(rt);
			if (now_money > 0)
			{
				calc_cart();
			}
			$('.opened').removeClass('dspn');
			$('.count_bet').html($('.bc_select ul li').length);
			clearInterval(cc);
			cc = setInterval('check_cart();',5000);
		} else {
			clearInterval(cc);
			$('.bc_total_ratio').html('0.00');
		}
		scart();
	});
	$('.reset_money').on('click',function(){
		$('.bet_money').val(0);
		$('.bc_get_money').html(0);
	});
	$('.bet_money').on('focus', function(){
		$(this).val('')
	});
	$('.bet_money').on('keyup', function(){
		only_number_format(this);
	});
	$('.bet_money').on('focusout', function(){
		if ($(this).val()=='')
		{
			$(this).val(0);
		}else{
			calc_cart();
		}
	});
	$('.btn_bet').on('click',function(){
		if ($('.bc_select ul li').hasClass('no_data'))
		{
			alert('배팅항목을 선택해주세요.');
			return false;
		}
		clearInterval(cc);

		var bmoney = un_number($('.bet_money').val());
		if (bmoney < 1)
		{
			alert('배팅금액을 설정해주세요.');
			return false;
		}
		if (bmoney < min_bet)
		{
			alert('최소 배팅금액은 '+number_format(min_bet)+'원 입니다.');
			return false;
		}
		if (bmoney > max_bet)
		{
			alert('최대 배팅금액은 '+number_format(max_bet)+'원 입니다.');
			return false;
		}

		bet_stat = false;
		var check = check_cart();
		if (check == 'ok')
		{
			$('.bet_count').removeClass('dspn');
			setTimeout("$('.bet_count i').addClass('scnt');",100);
			setTimeout("go_bet();",12000);
		} else {
			alert('배당이 변경되거나 마감된 경기가 있습니다.');
			cc = setInterval('check_cart();',5000);
			bet_stat = true;
		}
	});
	$('.btn_money').on('click',function(){
		var sel_money = $(this).attr('data-amt');
		var bet_money = un_number($('.bet_money').val());
		switch (sel_money)
		{
			case 'MAX':
				bet_max();
				break;
			default :
				bet_money = eval(bet_money) + eval(sel_money);
				if(bet_money > max_bet) {
					alert('최대배팅금액은 '+number_format(max_bet)+'원 입니다.');
					return false;
				}
				$('.bet_money').val(number_format(bet_money));
				var chk = calc_cart();
				break;
		}
	});
	$('.bc_da').on('click',function(){
		$('.sel_odds').removeClass('game_on');
		$('.on_the_cart').removeClass('on_the_cart');
		$('.bc_select ul').html('<li class="no_data">선택된 항목이 없습니다.</li>');
		$('.bc_total_ratio').html(0);
		$('.bc_get_money').html(0);
		clearInterval(cc);
		scart();
	});
	var rfrs;
	$(document).on('click','.sports_markets',function(){
		clearInterval(rfrs);
		var id = $(this).attr('data-id');
		var sports = $(this).attr('data-spo');
		var box_name;
		if ($('.detail_game[data-idx='+id+']').length > 0)
		{
			$('.detail_game').attr('data-idx','');
			$('.detail_game').addClass('dspn');
			$('.no_select').removeClass('dspn');
			return false;
		}
		$(this).parent('.inplay_box').parent('.sports_box').after($('.detail_game'));
		$('.detail_game').addClass('dspn');
		$('.detail_game').attr('data-idx','');
		$('.detail_game').animate( { scrollTop : 0 }, 200 );
		$('.detail_odds').html('');
		$('.detail_box').html('');
		$('.live_tracker').html('');
		$('.live_tracker').removeClass('now_tracker');
		$.ajax({
			type: "get",
			url: '/sports/in_game/'+id,
			dataType:'json',
			success: function(data){
				$('.detail_game').attr('data-idx',id);
				$('.detail_game').removeClass('dspn');
				$('.live_tracker').html('<iframe src="https://lt.gl-odds.com/LiveTracker.php?id='+id+'" scrolling="no" frameborder="0"></iframe>');
				$('.live_tracker').addClass('now_tracker');
				$('.no_select').addClass('dspn');
				$('.d_info').html('<span class="home_ttl"><div class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/'+data.HomeFlag+'.png" onerror="this.src=\'/static/img/noimg.png\'"></div>'+data.HomeName+'</span><span class="vs"><img src="/static/img/vs.png" alt=""></span><span class="away_ttl"><div class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/'+data.AwayFlag+'.png" onerror="this.src=\'/static/img/noimg.png\'"></div>'+data.AwayName+'</span>');
				$('.g_home_name').html(data.HomeName);
				$('.g_away_name').html(data.AwayName);
				$('.d_box').addClass('dspn');
				var game_head = '.detail_game[data-idx='+id+'] .detail_box';
				var bname = '';
				var gameC = '';
				var Line = '';
				var stan = '';
				var mk = '';
				var ustan = 'no';
				var sel1;
				$.each(data.Bets, function(k, el){
					if ($('.b'+el.b_id).length > 0)
					{
						sel1 = 'game_on';
					} else {
						sel1 = '';
					}
					var bet_odds = 0;
					switch (el.m_id)
					{
						case '1' :
						case '52' :
						case '226' :
							bet_odds = el.b_odds;
							break;
						default :
							bet_odds = el.b_odds2;
							break;
					}
					if (eval(bet_odds) < 1)
					{
						bet_odds = '1.00';
					}
					gameC = 'game_2';
					mk = el.m_name.replace(' ','');
					switch (el.m_id)
					{
						case '1':
						case '7':
						case '10':
						case '60':
						case '61':
						case '63':
						case '83':
						case '85':
						case '102':
						case '105':
						case '108':
						case '113':
						case '114':
						case '119':
						case '136':
						case '162':
						case '173':
						case '253':
						case '274':
						case '279':
						case '287':
						case '293':
						case '315':
						case '370':
						case '498':
							gameC = 'game_3';
							ustan = 'no';
							stan = '';
							break;
						case '14':
						case '16':
						case '18':
						case '19':
						case '20':
						case '36':
						case '37':
						case '65':
						case '66':
						case '68':
						case '69':
						case '70':
						case '79':
						case '87':
						case '88':
						case '90':
						case '91':
						case '92':
						case '104':
						case '107':
						case '110':
						case '116':
						case '117':
						case '120':
						case '128':
						case '129':
						case '134':
						case '138':
						case '139':
						case '140':
						case '141':
						case '151':
						case '152':
						case '153':
						case '154':
						case '165':
						case '166':
						case '167':
						case '168':
						case '176':
						case '177':
						case '178':
						case '179':
						case '187':
						case '188':
						case '189':
						case '190':
						case '191':
						case '203':
						case '204':
						case '223':
						case '225':
						case '226':
						case '227':
						case '228':
						case '231':
						case '232':
						case '236':
						case '237':
						case '238':
						case '246':
						case '247':
						case '254':
						case '256':
						case '258':
						case '259':
						case '260':
						case '261':
						case '275':
						case '276':
						case '277':
						case '278':
						case '280':
						case '281':
						case '282':
						case '283':
						case '284':
						case '285':
						case '286':
						case '288':
						case '292':
						case '303':
						case '309':
						case '310':
						case '314':
						case '317':
						case '318':
						case '319':
						case '323':
						case '326':
						case '327':
						case '328':
						case '331':
						case '349':
						case '350':
						case '352':
						case '353':
						case '356':
						case '357':
						case '358':
						case '367':
						case '372':
						case '376':
						case '383':
						case '384':
						case '385':
						case '386':
						case '388':
						case '389':
						case '390':
						case '408':
						case '410':
						case '412':
						case '413':
						case '414':
						case '415':
						case '445':
						case '446':
						case '447':
						case '448':
						case '460':
						case '476':
						case '477':
						case '478':
						case '479':
						case '480':
						case '485':
						case '486':
						case '487':
						case '488':
						case '489':
						case '493':
						case '494':
						case '500':
						case '501':
						case '544':
						case '547':
						case '740':
						case '741':
						case '746':
						case '756':
						case '757':
						case '818':
						case '854':
						case '855':
						case '856':
						case '857':
						case '858':
						case '859':
							stan = '<span class="odds_stan">'+el.b_line+'</span>';
							ustan = 'yes';
							break;
						case '265':
						case '262':
						case '297':
						case '424':
							gameC = 'game_3';
							stan = '<span class="odds_stan">'+el.b_line+'</span>';
							ustan = 'yes';
							break;
						default :
							stan = '';
							ustan = 'no';
							break;
					}
					switch (el.b_name)
					{
						case '홈팀' :
							bname = data.HomeName;
							break;
						case '원정팀' :
							bname = data.AwayName;
							break;
						case '무' :
							bname = '무승부';
							break;
						case '1X' :
							bname = '홈승/무승부';
							break;
						case 'X2' :
							bname = '원정승/무승부';
							break;
						case '12' :
							bname = '홈승/원정승';
							break;
						case 'Over':
							bname = '오버';
							break;
						case 'Under':
							bname = '언더';
							break;
						case 'Odd':
							bname = '홀';
							break;
						case 'Even':
							bname = '짝';
							break;
						case 'No Goal' :
							bname = '노골';
							break;
						case '1 And Over' :
							bname = data.HomeName+' <br>+ 오버';
							break;
						case '1 And Under' :
							bname = data.HomeName+' <br>+ 언더';
							break;
						case '2 And Over' :
							bname = data.AwayName+' <br>+ 오버';
							break;
						case '2 And Under' :
							bname = data.AwayName+' <br>+ 언더';
							break;
						case 'Any Other Score' :
							return true;
							//break;
						default :
							bname = el.b_name;
							break;
					}
					if (ustan=='yes')
					{
						Line = 'data-line="'+el.b_stan.replace('.','_')+'"';
					} else {
						Line = '';
					}
					if(ustan == 'yes') {
						tg = game_head+' .m_'+el.m_id+'[data-line='+el.b_stan.replace('.','_').replace(':','-')+']';
					} else {
						tg = game_head+' .m_'+el.m_id;
					}
					switch(el.m_id) {
						case '202' :
						case '235' :
						case '236' :
						case '266' :
						case '287' :
						case '288' :
						case '301' :
						case '302' :
						case '303' :
						case '304' :
						case '309' :
						case '443' :
						case '444' :
						case '446' :
						case '452' :
						case '457' :
						case '459' :
						case '460' :
						case '462' :
						case '529' :
						case '746' :
						case '756' :
						case '757' :
							if ($(game_head + ' .d_box[data-id=' + el.m_id + '][data-name=' + el.m_name.replace(/\s/gi, '') + ']').length < 1) {
								$(game_head).append('<div class="d_box" data-id="' + el.m_id + '" data-name="' + el.m_name.replace(/\s/gi, '').replace('/', '-') + '"><div class="detail_ttl">' + el.m_name + '</div><div class="detail_odds"></div></div>');
							}
							if ($(tg + '[data-name=' + el.m_name.replace(/\s/gi, '').replace('/', '-') + ']').length > 0) {
								$(tg + '[data-name=' + el.m_name.replace(/\s/gi, '').replace('/', '-') + ']').append('<div class="' + gameC + ' sel_odds ' + sel1 + '" data-m="' + mk + '" data-bid="' + el.b_id + '" data-gid="' + id + '" data-ratio="' + bet_odds + '" data-stat="' + el.b_status + '"><span class="icon_rt_change"></span><span class="name_space"><span class="odds_name">' + bname + '</span>' + stan + '</span><span class="odds_ratio">' + bet_odds + '</span></div>');
							} else {
								$(game_head + ' .d_box[data-id=' + el.m_id + '][data-name=' + el.m_name.replace(/\s/gi, '').replace('/', '-') + '] .detail_odds').append('<div class="m_' + el.m_id + '" ' + Line + ' data-name="' + el.m_name.replace(/\s/gi, '').replace('/', '-') + '"><div class="' + gameC + ' sn_' + el.b_name + ' sel_odds ' + sel1 + '" data-m="' + mk + '" data-bid="' + el.b_id + '" data-gid="' + id + '" data-ratio="' + bet_odds + '" data-stat="' + el.b_status + '"><span class="icon_rt_change"></span><span class="name_space"><span class="odds_name">' + bname + '</span>' + stan + '</span><span class="odds_ratio">' + bet_odds + '</span></div></div>');
							}
							break;
						default:
							$('.d_box[data-id=' + el.m_id + ']').removeClass('dspn');
							var shd = '';
							switch(data.SportId) {
								case '1' :
									shd = 1;
									break;
								case '2' :
									shd = 219;
									break;
								case '3' :
									shd = 251;
									break;
								case '23' :
									shd = 186;
									break;
								case '4' :
									shd = 1;
									break;
								default :
									shd = 1;
									break;
							}
							switch(el.m_id) {
								case '16' :
								case '18' :
								case '223' :
								case '225' :
								case '237' :
								case '238' :
								case '256' :
								case '258' :
									if($(game_head+' .d_box[data-id='+el.m_id+']').length < 1) {
										if($('.d_box[data-id='+shd+']').length < 1) {
											$(game_head).prepend('<div class="d_box" data-id="'+el.m_id+'"><div class="detail_ttl">'+el.m_name+'</div><div class="detail_odds"></div></div>');
										} else {
											$('.d_box[data-id=' + shd + ']').after('<div class="d_box" data-id="' + el.m_id + '"><div class="detail_ttl">' + el.m_name + '</div><div class="detail_odds"></div></div>');
										}
									}
									break;
								case '251' :
								case '219' :
									if($(game_head+' .d_box[data-id='+el.m_id+']').length < 1) {
										$(game_head).prepend('<div class="d_box" data-id="'+el.m_id+'"><div class="detail_ttl">'+el.m_name+'</div><div class="detail_odds"></div></div>');
									}
									break;
								default :
									if ($(game_head + ' .d_box[data-id=' + el.m_id + ']').length < 1) {
										$(game_head).append('<div class="d_box" data-id="' + el.m_id + '"><div class="detail_ttl">' + el.m_name + '</div><div class="detail_odds"></div></div>');
									}
									break;
							}
							if (ustan == 'yes' && $('.m_' + el.m_id + '[data-line=' + el.b_stan.replace('.', '_') + ']').length > 0) {
								switch (el.b_name) {
									case '오버':
									case '예':
									case '홈팀':
										$('.m_' + el.m_id + '[data-line=' + el.b_stan.replace('.', '_') + ']').prepend('<div class="' + gameC + ' sn_1 sel_odds ' + sel1 + '" data-m="' + mk + '" data-bid="' + el.b_id + '" data-gid="' + id + '" data-stat="' + el.b_status + '" data-ratio="' + bet_odds + '"><span class="name_space"><span class="icon_rt_change"></span><span class="odds_name">' + bname + '</span>' + stan + '</span><span class="odds_ratio">' + bet_odds + '</span></div>');
										break;
									default :
										$('.m_' + el.m_id + '[data-line=' + el.b_stan.replace('.', '_') + ']').append('<div class="' + gameC + ' sn_' + el.b_name + ' sel_odds ' + sel1 + '" data-m="' + mk + '" data-bid="' + el.b_id + '" data-gid="' + id + '" data-stat="' + el.b_status + '" data-ratio="' + bet_odds + '"><span class="icon_rt_change"></span><span class="name_space"><span class="odds_name">' + bname + '</span>' + stan + '</span><span class="odds_ratio">' + bet_odds + '</span></div>');
										break;
								}
							} else if (ustan == 'no' && $('.m_' + el.m_id).length > 0) {
								$('.m_' + el.m_id).append('<div class="' + gameC + ' sel_odds ' + sel1 + '" data-m="' + mk + '" data-bid="' + el.b_id + '" data-gid="' + id + '" data-stat="' + el.b_status + '" data-ratio="' + bet_odds + '"><span class="icon_rt_change"></span><span class="name_space"><span class="odds_name">' + bname + '</span>' + stan + '</span><span class="odds_ratio">' + bet_odds + '</span></div>');
							} else {
								$('.d_box[data-id=' + el.m_id + '] .detail_odds').append('<div class="m_' + el.m_id + '" ' + Line + '><div class="' + gameC + ' sn_' + el.b_name + ' sel_odds ' + sel1 + '" data-m="' + mk + '" data-bid="' + el.b_id + '" data-gid="' + id + '" data-stat="' + el.b_status + '" data-ratio="' + bet_odds + '"><span class="icon_rt_change"></span><span class="name_space"><span class="odds_name">' + bname + '</span>' + stan + '</span><span class="odds_ratio">' + bet_odds + '</span></div></div>');
							}
							break;
					}
				});
				$('.detail_odds .sel_odds[data-stat=2]').addClass('dspn');
				clearInterval(rfrs);
				rfrs = setInterval("refresh_ratio('"+id+"');",2000);
				clear_odds();
			}
		});
	});
});
function go_bet(){
	var i = 0;
	var bids = Array();
	var ratios = Array();
	var bid;
	var ratio;
	var bmoney = un_number($('.bet_money').val());
	bet_stat = true;
	$('.bc_select ul li').each(function(){
		bid = $(this).attr('data-bid');
		ratio = $(this).attr('data-ratio');
		bids.push(bid);
		ratios.push(ratio);
		i++;
	});
	$.ajax({
		type: "post",
		data: {ids:bids,rts:ratios,bm:bmoney},
		url: '/sports/bet_inplay',
		dataType:'json',
		async: false,
		success: function(data){
			if (data.code=='okay')
			{
				$('.wait_chk').addClass('dspn');
				$('.chk_okay').removeClass('dspn');
				setTimeout("reset_bet_count();",2000);
				$('.bc_da').click();
				$('.reset_money').click();
				$('.btn_bet_slip_open').click();
				get_stats();
			} else {
				alert(data.msg);
				reset_bet_count();
			}
			return false;
		}
	});
}
function reset_bet_count(){
	$('.wait_chk').removeClass('dspn');
	$('.chk_okay').addClass('dspn');
	$('.bet_count').addClass('dspn');
	$('.bet_count i').removeClass('scnt');
}
function refresh_ratio(id){
	var sports = $('.sports_time[data-id='+id+']').attr('data-spo');
	$.ajax({
		type: "get",
		url: '/sports/in_check/'+id,
		dataType:'json',
		//async: false,
		cache : false,
		success: function(data){
			var bname = '';
			var gameC = '';
			var Line = '';
			var stan = '';
			var mk = '';
			var ustan = 'no';
			var sel1;
			var brt;
			$.each(data.Bets, function(k, el){
				if ($('.b'+el.b_id).length > 0)
				{
					sel1 = 'game_on';
				} else {
					sel1 = '';
				}
				var bet_odds = 0;
				bet_odds = el.b_odds;
				if (eval(bet_odds) < 1)
				{
					bet_odds = '1.00';
				}

				gameC = 'game_2';
				mk = el.m_name.replace(' ','');
				switch (el.m_id)
				{
					case '1':
					case '7':
					case '10':
					case '60':
					case '61':
					case '63':
					case '83':
					case '85':
					case '102':
					case '105':
					case '108':
					case '113':
					case '114':
					case '119':
					case '136':
					case '162':
					case '173':
					case '253':
					case '274':
					case '279':
					case '287':
					case '293':
					case '315':
					case '370':
					case '498':
						gameC = 'game_3';
						ustan = 'no';
						stan = '';
						break;
					case '14':
					case '16':
					case '18':
					case '19':
					case '20':
					case '36':
					case '37':
					case '65':
					case '66':
					case '68':
					case '69':
					case '70':
					case '79':
					case '87':
					case '88':
					case '90':
					case '91':
					case '92':
					case '104':
					case '107':
					case '110':
					case '116':
					case '117':
					case '120':
					case '128':
					case '129':
					case '134':
					case '138':
					case '139':
					case '140':
					case '141':
					case '151':
					case '152':
					case '153':
					case '154':
					case '165':
					case '166':
					case '167':
					case '168':
					case '176':
					case '177':
					case '178':
					case '179':
					case '187':
					case '188':
					case '189':
					case '190':
					case '191':
					case '203':
					case '204':
					case '223':
					case '225':
					case '226':
					case '227':
					case '228':
					case '231':
					case '232':
					case '236':
					case '237':
					case '238':
					case '246':
					case '247':
					case '254':
					case '256':
					case '258':
					case '259':
					case '260':
					case '261':
					case '275':
					case '276':
					case '277':
					case '278':
					case '280':
					case '281':
					case '282':
					case '283':
					case '284':
					case '285':
					case '286':
					case '288':
					case '292':
					case '303':
					case '309':
					case '310':
					case '314':
					case '317':
					case '318':
					case '319':
					case '323':
					case '326':
					case '327':
					case '328':
					case '331':
					case '349':
					case '350':
					case '352':
					case '353':
					case '356':
					case '357':
					case '358':
					case '367':
					case '372':
					case '376':
					case '383':
					case '384':
					case '385':
					case '386':
					case '388':
					case '389':
					case '390':
					case '408':
					case '410':
					case '412':
					case '413':
					case '414':
					case '415':
					case '445':
					case '446':
					case '447':
					case '448':
					case '460':
					case '476':
					case '477':
					case '478':
					case '479':
					case '480':
					case '485':
					case '486':
					case '487':
					case '488':
					case '489':
					case '493':
					case '494':
					case '500':
					case '501':
					case '544':
					case '547':
					case '740':
					case '741':
					case '746':
					case '756':
					case '757':
					case '818':
					case '854':
					case '855':
					case '856':
					case '857':
					case '858':
					case '859':
						stan = '<span class="odds_stan">'+el.b_line+'</span>';
						ustan = 'yes';
						break;
					case '265':
					case '262':
					case '297':
					case '424':
						gameC = 'game_3';
						stan = '<span class="odds_stan">'+el.b_line+'</span>';
						ustan = 'yes';
						break;
					default :
						stan = '';
						ustan = 'no';
						break;
				}
				switch (el.b_name)
				{
					case '홈팀' :
						bname = data.HomeName;
						break;
					case '원정팀' :
						bname = data.AwayName;
						break;
					case '무' :
						bname = '무승부';
						break;
					case '1X' :
						bname = '홈승/무승부';
						break;
					case 'X2' :
						bname = '원정승/무승부';
						break;
					case '12' :
						bname = '홈승/원정승';
						break;
					case 'Over':
						bname = '오버';
						break;
					case 'Under':
						bname = '언더';
						break;
					case 'Odd':
						bname = '홀';
						break;
					case 'Even':
						bname = '짝';
						break;
					case 'No Goal' :
						bname = '노골';
						break;
					case '1 And Over' :
						bname = data.HomeName+' <br>+ 오버';
						break;
					case '1 And Under' :
						bname = data.HomeName+' <br>+ 언더';
						break;
					case '2 And Over' :
						bname = data.AwayName+' <br>+ 오버';
						break;
					case '2 And Under' :
						bname = data.AwayName+' <br>+ 언더';
						break;
					case 'Any Other Score' :
						return true;
						//break;
					default :
						bname = el.b_name;
						break;
				}
				if (ustan=='yes')
				{
					Line = 'data-line="'+el.b_stan.replace('.','_')+'"';
				} else {
					Line = '';
				}
				var add_mname = '';
				switch(el.m_id) {
					case '202' :
					case '235' :
					case '236' :
					case '266' :
					case '287' :
					case '288' :
					case '301' :
					case '302' :
					case '303' :
					case '304' :
					case '309' :
					case '443' :
					case '444' :
					case '446' :
					case '452' :
					case '457' :
					case '459' :
					case '460' :
					case '462' :
					case '529' :
					case '746' :
					case '756' :
					case '757' :
						add_mname = "[data-name=" + el.m_name.replace(/\s/gi, '') + "]";
						break;
				}
				$('.d_box[data-id='+el.m_id+']').removeClass('dspn');
				$('.sel_odds[data-bid='+el.b_id+']').attr('data-chk','1');
				if($('.m_'+el.m_id+' .sel_odds[data-bid='+el.b_id+']').length > 0) {
					brt = $('.sel_odds[data-bid='+el.b_id+'] .odds_ratio').html();
					if (eval(brt)!=eval(bet_odds))
					{
						$('.sel_odds[data-bid='+el.b_id+'] .icon_rt_change').addClass('blink2');
						$('.sel_odds[data-bid='+el.b_id+'] .odds_ratio').html(bet_odds);
						$('.sel_odds[data-bid='+el.b_id+']').attr('data-ratio',bet_odds);
					}
					$('.sel_odds[data-bid='+el.b_id+']').attr('data-stat',el.b_status);
				} else {
					if (ustan=='yes'&&$('.m_'+el.m_id+'[data-line='+el.b_stan.replace('.','_')+']'+add_mname).length > 0)
					{
						switch (el.b_name)
						{
							case '오버':
							case '예':
							case '홈팀':
								$('.m_'+el.m_id+'[data-line='+el.b_stan.replace('.','_')+']'+add_mname).prepend('<div class="'+gameC+' sn_1 sel_odds '+sel1+'" data-m="'+mk+'" data-bid="'+el.b_id+'" data-gid="'+id+'" data-ratio="'+bet_odds+'" data-stat="'+el.b_status+'"><span class="icon_rt_change"></span><span class="name_space"><span class="odds_name">'+bname+'</span>'+stan+'</span><span class="odds_ratio">'+bet_odds+'</span></div>');
								break;
							default :
								$('.m_'+el.m_id+'[data-line='+el.b_stan.replace('.','_')+']'+add_mname).append('<div class="'+gameC+' sn_'+el.b_name+' sel_odds '+sel1+'" data-m="'+mk+'" data-bid="'+el.b_id+'" data-gid="'+id+'" data-ratio="'+bet_odds+'" data-stat="'+el.b_status+'"><span class="icon_rt_change"></span><span class="name_space"><span class="odds_name">'+bname+'</span>'+stan+'</span><span class="odds_ratio">'+bet_odds+'</span></div>');
								break;
						}
					} else if(ustan=='no'&&$('.m_'+el.m_id+add_mname).length > 0) {
						$('.m_'+el.m_id+add_mname).append('<div class="'+gameC+' sel_odds '+sel1+'" data-m="'+mk+'" data-bid="'+el.b_id+'" data-gid="'+id+'" data-ratio="'+bet_odds+'" data-stat="'+el.b_status+'"><span class="icon_rt_change"></span><span class="name_space"><span class="odds_name">'+bname+'</span>'+stan+'</span><span class="odds_ratio">'+bet_odds+'</span></div>');
					} else {
						$('.d_box[data-id='+el.m_id+']'+add_mname+' .detail_odds').append('<div class="m_'+el.m_id+'" '+Line+'><div class="'+gameC+' sn_'+el.b_name+' sel_odds '+sel1+'" data-m="'+mk+'" data-bid="'+el.b_id+'" data-gid="'+id+'" data-ratio="'+bet_odds+'" data-stat="'+el.b_status+'"><span class="icon_rt_change"></span><span class="name_space"><span class="odds_name">'+bname+'</span>'+stan+'</span><span class="odds_ratio">'+bet_odds+'</span></div></div>');
					}
				}
				if (el.b_status == '1')
				{
					$('.d_box[data-id='+el.m_id+']').removeClass('dspn');
				}
			});
			$('.sel_odds[data-stat=1]').removeClass('dspn');
			$('.detail_odds .sel_odds[data-stat=2]').remove();
			clear_odds();
		}
	});
	setTimeout('reset_blink();',1500);
}
function scart(){
	var i = 0;
	var gids = Array();
	var bids = Array();
	var ratios = Array();
	var stans = Array();
	var mks = Array();
	var homes = Array();
	var aways = Array();
	var selects = Array();
	var sratios = Array();
	var bid;
	var ratio;
	var stan;
	var mk;
	var home;
	var away;
	var sel;
	var bmoney = un_number($('.bet_money').val());
	$('.bc_select ul li').each(function(){
		gid = $(this).attr('data-gid');
		bid = $(this).attr('data-bid');
		ratio = $(this).attr('data-ratio');
		sratio = $(this).attr('data-sratio');
		stan = $(this).attr('data-stan');
		home = $(this).attr('data-home');
		away = $(this).attr('data-away');
		sel = $(this).attr('data-sel');
		mk = $(this).attr('data-mk');
		gids.push(gid);
		bids.push(bid);
		ratios.push(ratio);
		sratios.push(sratio);
		stans.push(stan);
		mks.push(mk);
		homes.push(home);
		aways.push(away);
		selects.push(sel);
		i++;
	});
	$.ajax({
		type: "post",
		data: {gds:gids,ids:bids,rts:ratios,srts:sratios,hms:homes,aws:aways,sts:stans,ms:mks,sels:selects,bm:bmoney},
		url: '/sports/scart/inplay',
		dataType:'json',
		async: false,
		success: function(data){
		}
	});
}
function check_cart(){
	if (atv==true)
	{
		var i = 0;
		var bids = Array();
		$('.bc_select ul li').each(function(){
			var bid = $(this).attr('data-bid');
			bids.push(bid);
			i++;
		});
		var nrt;
		var art;
		var aid;
		$.ajax({
			type: "post",
			data: {ids:bids},
			url: '/sports/check_carti',
			dataType:'json',
			success: function(data){
				for (var j = 0;j < data.bid.length ;j++ )
				{
					aid = data.bid[j];
					art = data.ratio[j];
					nrt = $('.b'+aid).attr('data-ratio');
					if (data.stat[j] != '1')
					{
						if(!$('.b'+aid).hasClass('lock_select')) {
							$('.b'+aid).addClass('lock_select');
						}
					} else {
						if (nrt != art)
						{
							if (autor=='1')
							{
								if (nrt > art)
								{
									$('.b'+aid+' .c_ratio').after('<div class="c_ratio_icon c_ratio_down blinking"><i class="fas fa-caret-down"></i></div>');
								} else if (nrt < art) {
									$('.b'+aid+' .c_ratio').after('<div class="c_ratio_icon c_ratio_up blinking"><i class="fas fa-caret-up"></i></div>');
								} else {
								}
								$('.b'+aid).attr('data-ratio',art);
								$('.b'+aid+' .c_ratio').html(art);
							} else {
								if(!$('.b'+aid).hasClass('lock_select')) {
									$('.b'+aid).addClass('lock_select');
								}
							}
						} else {
							if($('.b'+aid).hasClass('lock_select')) {
								$('.b'+aid).removeClass('lock_select');
							}
						}
					}
				}
			}
		});
		if ($('.lock_select').length > 0)
		{
			return 'no';
		} else {
			return 'ok';
		}
	}
}
function bet_max() {
	var sel_ratio = $('.bc_total_ratio').html();
	var now_money = un_number($('.money').html());
	if (eval(sel_ratio) == 0)	{
		if (max_bet > now_money)
		{
			$('.bet_money').val(number_format(now_money));
		} else {
			$('.bet_money').val(number_format(max_bet));
		}
	} else {
		if (max_bet > now_money)
		{
			var bet_money = now_money;
		} else {
			bet_money = max_bet;
		}
		var get_money = eval(sel_ratio) * eval(bet_money);
		if (eval(get_money) > eval(max_get)) {
			bet_money = Math.floor(eval(max_get) / eval(sel_ratio));
			$('.bet_money').val(number_format(bet_money));
		}else{
			$('.bet_money').val(number_format(bet_money));
		}
	}
	calc_cart();
}
function calc_cart(){
	var bet_money = eval(un_number($('.bet_money').val()));
	var now_money = eval(un_number($('.money').html()));
	if (bet_money > now_money)
	{
		alert(now_money+'보유금액이 부족합니다.');
		bet_max();
		return false;
	}
	if (bet_money > max_bet)
	{
		alert('최대배팅금은 '+number_format(max_bet)+'원 입니다.');
		bet_max();
		return false;
	}
	if (bet_money == 0) {
		$('.bc_get_money').html('0');
		return false;
	}
	var t_ratio = $('.bc_total_ratio').html();
	if (t_ratio == 0) {
		$('.bc_get_money').html('0');
		return false;
	}
	var get_money = Math.floor(eval(bet_money) * eval(t_ratio));
	if (get_money > max_get)
	{
		alert('최대당첨금은 '+number_format(max_get)+'원 입니다.');
		bet_max();
		return false;
	}
	$('.bc_get_money').html(number_format(get_money));
}
function set_game(){
	$('.bc_min_bet').html(number_format(min_bet));
	$('.bc_max_bet').html(number_format(max_bet));
	$('.bc_max_get').html(number_format(max_get));
	$('.bc_max_ratio').html(number_format(max_ratio));
}
function get_list(cate){
	$.ajax({
		type: "get",
		url: '/in_play/'+cate,
		dataType:'json',
		success: function(data){
			$('.btn_inplay_tab[data-cate=all] strong').html(data.all);
			$('.btn_inplay_tab[data-cate=soccer] strong').html(data.soccer);
			$('.btn_inplay_tab[data-cate=basket] strong').html(data.basket);
			$('.btn_inplay_tab[data-cate=baseball] strong').html(data.baseball);
			$('.btn_inplay_tab[data-cate=volley] strong').html(data.volley);
			$('.btn_inplay_tab[data-cate=hockey] strong').html(data.hockey);
			$('.btn_inplay_tab[data-cate=egame] strong').html(data.egame);
			//$('.cnt_game').html(number_format(data.total));
			var add_in = '';
			var s_date = '';
			if (data.stat=='no')
			{
				$('.inplay_list').html('<div class="no_item">경기가 없습니다.</div>');
			} else {
				var sel1;
				var sel2;
				var sel3;
				var selg;
				var stats;
				var league = '';
				for (var i = 0;i < data.list.length ;i++ )
				{
					if (i==0)
					{
						$('.inplay_list').html('');
					}
					if (s_date != data.date[i])
					{
						//$('.inplay_list').append('<div class="info_date">'+data.date[i]+'</div>');
						s_date = data.date[i];
					}
					var s_ou = '';
					var s_hd = '';
					var s_odds = '';
					var s_time = '';
					var spo = '';
					var odds_home = '';
					var odds_away = '';
					var odds_draw = '';
					var data_m = '';
					var add_odds = '';
					switch (data.list[i].SportName)
					{
						case '축구':
							s_type = '<i class="fas fa-futbol"></i>';
							spo = 'sc';
							data_m = '승무패';
							break;
						case '농구':
							s_type = '<i class="fas fa-basketball-ball"></i>';
							spo = 'bk';
							odds_draw = 'VS';
							data_m = '승패';
							break;
						case '야구':
							s_type = '<i class="fas fa-baseball-ball"></i>';
							spo = 'bs';
							odds_draw = 'VS';
							data_m = '승패';
							break;
						case '배구':
							s_type = '<i class="fas fa-volleyball-ball"></i>';
							spo = 'vb';
							odds_draw = 'VS';
							data_m = '승패';
							break;
						case '아이스 하키':
							s_type = '<i class="fas fa-hockey-puck"></i>';
							spo = 'ih';
							data_m = '승무패';
							break;
						case 'E게임':
							s_type = '<i class="fas fa-gamepad"></i>';
							spo = 'eg';
							odds_draw = 'VS';
							data_m = '승패';
							break;
						default :
							s_type = data.list[i].SportName;
							break;
					}
					if ($('.g'+data.list[i].MatchId).length > 0)
					{
						selg = 'on_the_cart';
					} else {
						selg = '';
					}
					stats = data.list[i].StatusName;
					if (league != data.list[i].LeagueName)
					{
						$('.inplay_list').append('<div class="info_league"><img src="/static/img/flag/'+data.list[i].isoId+'.png" /> '+data.list[i].LeagueName+'</div>');
						league = data.list[i].LeagueName;
					}
					if (data.st[i] == 'not_yet'||stats == '경기전')
					{
						$('.inplay_list').append('<div class="sports_box sports_'+spo+'" data-id="'+data.list[i].MatchId+'" data-stat="not_yet"><div class="inplay_box"><div class="sports_time '+selg+'" data-id="'+data.list[i].MatchId+'" data-spo="'+data.list[i].SportName+'" data-lg="'+data.list[i].LeagueName+'" data-flag="'+data.list[i].LocationId+'" data-home="'+data.list[i].HomeName+'" data-away="'+data.list[i].AwayName+'"><span class="s_type">'+s_type+'</span> <span class="s_time">'+stats+'</span> <span class="now_time">'+s_time+'</span></div><div class="sports_info"><span class="ny_time">'+data.list[i].StartDate+'</span><span class="info_home"><div class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/'+data.list[i].HomeFlag+'.png" onerror="this.src=\'/static/img/noimg.png\'"></div>'+data.list[i].HomeName+'</span><span class="info_vs">VS</span><span class="info_away"><div class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/'+data.list[i].AwayFlag+'.png" onerror="this.src=\'/static/img/noimg.png\'"></div>'+data.list[i].AwayName+'</span></div></div></div>');
					} else {
						if(data.list[i].LiveTime) {
							s_time = data.list[i].LiveTime;
						} else {
							s_time = '';
						}
						if (data.odds[i].home != 'nope')
						{
							if ($('.b'+data.odds[i].home.b_id).length > 0)
							{
								selh = 'game_on';
							} else {
								selh = '';
							}
							if ($('.b'+data.odds[i].away.b_id).length > 0)
							{
								sela = 'game_on';
							} else {
								sela = '';
							}
							odds_home = '<div class="sel_odds team_home '+selh+'" data-m="'+data_m+'" data-bid="'+data.odds[i].home.b_id+'" data-gid="'+data.odds[i].home.MatchId+'" data-ratio="'+data.odds[i].home.b_odds+'" data-stat="'+data.odds[i].home.b_status+'"><span><span class="odds_name">'+data.list[i].HomeName+'</span></span><div class="sp_icon_box"><img src="/static/img/icon_1x2.png"><span class="odds_ratio">'+data.odds[i].home.b_odds+'</span></div></div>';
							odds_away = '<div class="sel_odds team_away '+sela+'" data-m="'+data_m+'" data-bid="'+data.odds[i].away.b_id+'" data-gid="'+data.odds[i].away.MatchId+'" data-ratio="'+data.odds[i].away.b_odds+'" data-stat="'+data.odds[i].away.b_status+'"><div class="sp_icon_box"><span class="odds_ratio">'+data.odds[i].away.b_odds+'</span><img src="/static/img/icon_1x2.png"></div><span><span class="odds_name">'+data.list[i].AwayName+'</span></span></div>';
							if (odds_draw=='VS')
							{
								odds_draw = '<div class="team_draw">VS</div>';
							} else {
								if ($('.b'+data.odds[i].draw.b_id).length > 0)
								{
									seld = 'game_on';
								} else {
									seld = '';
								}
								odds_draw = '<div class="sel_odds team_draw '+seld+'" data-m="'+data_m+'" data-bid="'+data.odds[i].draw.b_id+'" data-gid="'+data.odds[i].draw.MatchId+'" data-ratio="'+data.odds[i].draw.b_odds+'" data-stat="'+data.odds[i].draw.b_status+'"><span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">'+data.odds[i].draw.b_odds+'</span></div>';
							}
							add_odds = '<div class="s_odds">'+odds_home+odds_draw+odds_away+'</div>';
						} else {
							add_odds = '';
						}
						$('.inplay_list').append('<div class="sports_box sports_'+spo+'" data-id="'+data.list[i].MatchId+'" data-stat="now_playing"><div class="inplay_box"><div class="sports_time '+selg+'" data-id="'+data.list[i].MatchId+'" data-spo="'+data.list[i].SportName+'" data-lg="'+data.list[i].LeagueName+'" data-flag="'+data.list[i].LocationId+'" data-home="'+data.list[i].HomeName+'" data-away="'+data.list[i].AwayName+'"><span class="s_type">'+s_type+'</span> <span class="s_time">'+stats+'</span> <span class="now_time">'+s_time+'</span></div><div class="sports_markets '+selg+'" data-id="'+data.list[i].MatchId+'" data-spo="'+data.list[i].SportName+'" data-lg="'+data.list[i].LeagueName+'" data-flag="'+data.list[i].LocationId+'" data-home="'+data.list[i].HomeName+'" data-away="'+data.list[i].AwayName+'"><span class="open_markets" data-id="'+data.list[i].MatchId+'">+'+data.markets[i]+' 추가 배팅옵션</span></div><div class="sports_info"><span class="info_home"><div class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/'+data.list[i].HomeFlag+'.png" onerror="this.src=\'/static/img/noimg.png\'"></div>'+data.list[i].HomeName+'</span><span class="info_home_score">'+data.list[i].HomeScore+'</span><span class="info_vs">VS</span><span class="info_away_score">'+data.list[i].AwayScore+'</span><span class="info_away"><div class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/'+data.list[i].AwayFlag+'.png" onerror="this.src=\'/static/img/noimg.png\'"></div>'+data.list[i].AwayName+'</span></div>'+add_odds+'</div></div>');
					}
				}
				$('.sel_odds[data-stat=2]').append('<div class="sel_lock"><i class="fas fa-lock"></i></div>');
				$('.sel_odds[data-stat=2]').addClass('disabled');
			}
		}
	});
}
/*function check_list(cate){
	if (atv==true)
	{
		$.ajax({
			type: "get",
			url: '/in_play/'+cate,
			dataType:'json',
			success: function(data){
				//$('.cnt_game').html(number_format(data.total));
				var add_in = '';
				var s_date = '';
				if (data.stat=='no')
				{
					$('.inplay_list').html('<div class="no_item">경기가 없습니다.</div>');
				} else {
					var sel1;
					var sel2;
					var sel3;
					var selg;
					var stats;
					var spo = '';
					var odds_home = '';
					var odds_away = '';
					var odds_draw = '';
					var data_m = '';
					var add_odds = '';
					for (var i = 0;i < data.list.length ;i++ )
					{
						var s_time = '';
						stats = data.list[i].StatusName;
						switch (data.list[i].SportName)
						{
							case '축구':
								s_type = '<i class="fas fa-futbol"></i>';
								spo = 'sc';
								data_m = '승무패';
								break;
							case '농구':
								s_type = '<i class="fas fa-basketball-ball"></i>';
								spo = 'bk';
								odds_draw = 'VS';
								data_m = '승패';
								break;
							case '야구':
								s_type = '<i class="fas fa-baseball-ball"></i>';
								spo = 'bs';
								odds_draw = 'VS';
								data_m = '승패';
								break;
							case '배구':
								s_type = '<i class="fas fa-volleyball-ball"></i>';
								spo = 'vb';
								odds_draw = 'VS';
								data_m = '승패';
								break;
							case '아이스 하키':
								s_type = '<i class="fas fa-hockey-puck"></i>';
								spo = 'ih';
								data_m = '승무패';
								break;
							case 'E게임':
								s_type = '<i class="fas fa-gamepad"></i>';
								spo = 'eg';
								odds_draw = 'VS';
								data_m = '승패';
								break;
							default :
								s_type = data.list[i].SportName;
								break;
						}
						if ($('.g'+data.list[i].MatchId).length > 0)
						{
							selg = 'on_the_cart';
						} else {
							selg = '';
						}
						if(data.list[i].LiveTime) {
							s_time = data.list[i].LiveTime;
						} else {
							s_time = '';
						}
						if (data.st[i] != 'not_yet')
						{
							if ($('.sports_box[data-id='+data.list[i].MatchId+']').attr('data-stat') == 'not_yet')
							{
								if (data.odds[i].home != 'nope')
								{
									if ($('.b'+data.odds[i].home.b_id).length > 0)
									{
										selh = 'game_on';
									} else {
										selh = '';
									}
									if ($('.b'+data.odds[i].away.b_id).length > 0)
									{
										sela = 'game_on';
									} else {
										sela = '';
									}
									odds_home = '<div class="sel_odds team_home '+selh+'" data-m="'+data_m+'" data-bid="'+data.odds[i].home.b_id+'" data-gid="'+data.odds[i].home.MatchId+'" data-ratio="'+data.odds[i].home.b_odds+'" data-stat="'+data.odds[i].home.b_status+'"><span><span class="odds_name">'+data.list[i].HomeName+'</span></span><div class="sp_icon_box"><img src="/static/img/icon_1x2.png"><span class="odds_ratio">'+data.odds[i].home.b_odds+'</span></div></div>';
									odds_away = '<div class="sel_odds team_away '+sela+'" data-m="'+data_m+'" data-bid="'+data.odds[i].away.b_id+'" data-gid="'+data.odds[i].away.MatchId+'" data-ratio="'+data.odds[i].away.b_odds+'" data-stat="'+data.odds[i].away.b_status+'"><div class="sp_icon_box"><span class="odds_ratio">'+data.odds[i].away.b_odds+'</span><img src="/static/img/icon_1x2.png"></div><span><span class="odds_name">'+data.list[i].AwayName+'</span></span></div>';
									if (odds_draw=='VS')
									{
										odds_draw = '<div class="team_draw">VS</div>';
									} else {
										if ($('.b'+data.odds[i].draw.b_id).length > 0)
										{
											seld = 'game_on';
										} else {
											seld = '';
										}
										odds_draw = '<div class="sel_odds team_draw '+seld+'" data-m="'+data_m+'" data-bid="'+data.odds[i].draw.b_id+'" data-gid="'+data.odds[i].draw.MatchId+'" data-ratio="'+data.odds[i].draw.b_odds+'" data-stat="'+data.odds[i].draw.b_status+'"><span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">'+data.odds[i].draw.b_odds+'</span></div>';
									}
									add_odds = '<div class="s_odds">'+odds_home+odds_draw+odds_away+'</div>';
								} else {
									add_odds = '';
								}
								$('.sports_box[data-id='+data.list[i].MatchId+']').html('<div class="inplay_box"><div class="sports_time '+selg+'" data-id="'+data.list[i].MatchId+'" data-spo="'+data.list[i].SportName+'" data-lg="'+data.list[i].LeagueName+'" data-flag="'+data.list[i].LocationId+'" data-home="'+data.list[i].HomeName+'" data-away="'+data.list[i].AwayName+'"><span class="s_type">'+s_type+'</span> <span class="s_time">'+stats+'</span> <span class="now_time">'+s_time+'</span></div><div class="sports_markets '+selg+'" data-id="'+data.list[i].MatchId+'" data-spo="'+data.list[i].SportName+'" data-lg="'+data.list[i].LeagueName+'" data-flag="'+data.list[i].LocationId+'" data-home="'+data.list[i].HomeName+'" data-away="'+data.list[i].AwayName+'"><span class="open_markets" data-id="'+data.list[i].MatchId+'">+'+data.markets[i]+' 추가 배팅옵션</span></div><div class="sports_info"><span class="info_home">'+data.list[i].HomeName+'</span><span class="info_home_score">'+data.list[i].HomeScore+'</span><span class="info_vs">VS</span><span class="info_away_score">'+data.list[i].AwayScore+'</span><span class="info_away">'+data.list[i].AwayName+'</span></div>'+add_odds+'</div>');
								$('.sports_box[data-id='+data.list[i].MatchId+']').attr('data-stat','now_playing');
							} else {
								if (data.odds[i].home != 'nope') {
									$('.sel_odds[data-bid=' + data.odds[i].home.b_id + ']').attr('data-ratio', data.odds[i].home.b_odds);
									$('.sel_odds[data-bid=' + data.odds[i].home.b_id + '] .odds_ratio').html(data.odds[i].home.b_odds);
									$('.sel_odds[data-bid=' + data.odds[i].away.b_id + ']').attr('data-ratio', data.odds[i].away.b_odds);
									$('.sel_odds[data-bid=' + data.odds[i].away.b_id + '] .odds_ratio').html(data.odds[i].away.b_odds);
									if ($('.sports_box[data-id=' + data.list[i].MatchId + '] .team_draw').html() != 'VS') {
										$('.sel_odds[data-bid=' + data.odds[i].draw.b_id + ']').attr('data-ratio', data.odds[i].draw.b_odds);
										$('.sel_odds[data-bid=' + data.odds[i].draw.b_id + '] .odds_ratio').html(data.odds[i].draw.b_odds);
									}
								}
							}
						}
						$('div[data-id='+data.list[i].MatchId+'] span.s_time').html(stats);
						$('div[data-id='+data.list[i].MatchId+'] span.now_time').html(s_time);
						$('.sports_markets[data-id='+data.list[i].MatchId+']').html('<span class="open_markets" data-id="'+data.list[i].MatchId+'">+'+data.markets[i]+' 추가 배팅옵션</span>');
						$('div[data-id='+data.list[i].MatchId+'] span.info_home_score').html(data.list[i].HomeScore);
						$('div[data-id='+data.list[i].MatchId+'] span.info_away_score').html(data.list[i].AwayScore);
					}
				}
			}
		});
	}
}*/
function lt_resize(){
	if ($('.now_tracker').length > 0)
	{
		var ltht = 0;
		if ($('.live_tracker').width() > 615)
		{
			ltht = 500;
		} else if ($('.live_tracker').width() > 495)
		{
			ltht = 400;
		} else {
			ltht = 350;
		}
		ltht = $('.live_tracker').width() / 1.19;
		//if(ltht > 378) ltht = 378;
		//ltht = $('.live_tracker iframe').height();
		$('.live_tracker').height(ltht);
	}
}
function clear_odds(){
	$('.detail_odds div').each(function(){
		if ($(this).children('div').length == 1)
		{
			$(this).remove();
		}
	});
	$('.d_box').each(function() {
		if($(this).children('div').children('div').children('div').length < 1) {
			$(this).addClass('dspn');
		}
	});
}

function reset_blink() {
	$('.blink2').removeClass('blink2');
}