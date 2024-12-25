<template>
  <div class="wrap">	
	<div class="pop_login">
		<div class="pop_login_box">
			<div class="pop_login_ttl">
				<img src="/static/img/logo.png" alt="">
				<span class="close_login_pop"><i class="fas fa-times" aria-hidden="true"></i></span>
			</div>
			<form action="/game/login_check" method="post">
				<input type="hidden" name="page" value="/">
				<div class="pop_login_sub_ttl">
					아이디
				</div>
				<input type="text" name="login_id" placeholder="아이디" class="out_login_ip pop_focus" tabindex="1">
				<div class="pop_login_sub_ttl">
					비밀번호
				</div>
				<input type="password" name="login_pw" placeholder="패스워드" class="out_login_ip" tabindex="2">
				<button class="pop_login_btn" tabindex="3"><i class="fas fa-sign-in-alt" aria-hidden="true"></i> 로그인</button>
				<span class="btn_pop_join join_btn">회원가입</span>
				<span class="btn_pop_tel tel_btn"><i class="fas fa-brands fa-telegram" aria-hidden="true"></i> 텔레그램 문의</span>
			</form>
		</div>
	</div>
	<div class="pop_join">
		<div class="pop_join_box">
			<div class="pop_join_ttl">
				<img src="/static/img/logo.png" alt="">
				<span class="close_join_pop"><i class="fas fa-times" aria-hidden="true"></i></span>
			</div>
			<div class="pop_join_info">
			코드확인
			</div>
			<input type="text" name="code" required="" class="ip_id tc ip_code" value="" placeholder="추천코드">
			<span class="ip_sm next_step">다음단계로</span>
			<div class="code_info">
			가입 코드 없을 시 미기재
			</div>
		</div>
	</div>
	<div class="refresh_btn only_mobile">
		<i class="fas fa-redo-alt" aria-hidden="true"></i>
	</div>
	<div class="telegram_btn tel_btn only_mobile">
		<img src="/static/img/icon_tele.png?v=4">
	</div>
	<div class="snb_btn">
		<div class="snb_in">
			<div class="snb_arrow">
				<i class="fas fa-bars" aria-hidden="true"></i>
			</div>
		</div>
	</div>
	<div class="snb_left">
		<ul>
			<li>
			<a href="/customer/deposit" class="btn_gray mg_link"><i class="fa fa-plus" aria-hidden="true"></i> 충전</a>
			</li>
			<li>
			<a href="/customer/withdrawal" class="btn_gray mg_link"><i class="fa fa-minus" aria-hidden="true"></i> 환전</a>
			</li>
			<li>
			<a href="/customer/cs_center" class="btn_gray mg_link"><i class="fas fa-exclamation-circle" aria-hidden="true"></i> 문의</a>
			</li>
			<li>
			<a href="/game/sports">해외형스포츠</a>
			</li>
			<li>
			<a href="/game/korean2">국내형스포츠</a>
			</li>
			<li>
			<a href="/game/inplay">LIVE-스포츠</a>
			</li>
			<li>
			<a href="/sports/special">스페셜</a>
			</li>
			<li>
			<a href="/esports/es">E-스포츠</a>
			</li>
			<li>
			<span class="mg_link open_revolution">레볼루션홀덤</span>
			</li>
			<li>
			<a href="/game/vspo/vsc/all">가상스포츠</a>
			</li>
			<li>
			<a href="/game/mini/gg_pwb1">미니게임</a>
			</li>
			<li>
			<a href="/game/token_game/hilo" class="mg_link">토큰게임</a>
			</li>
			<li>
			<a href="javascript:open_payback();">페이백</a>
			</li>
			<li>
			<a href="/customer/money_list" class="mg_link">머니내역</a>
			</li>
			<li>
			<a href="/customer/bet_list_spo" class="mg_link">배팅내역</a>
			</li>
			<li>
			<a href="/customer/att" class="mg_link">출석부</a>
			</li>
			<li>
			<a href="/customer/notice" class="mg_link">공지/규정</a>
			</li>
			<li>
			<a href="/customer/event" class="mg_link">이벤트</a>
			</li>
		</ul>
		<div class="snb_btn_img">
			<a href="/casino/connect" class="mg_link">
			<span class="btn_img_ttl dspn">카지노</span>
			<img src="/static/img/btn_casino.jpg" alt="">
			</a>
			<a href="/casino/slot" class="mg_link">
			<span class="btn_img_ttl dspn">슬롯</span>
			<img src="/static/img/btn_slot.jpg" alt="">
			</a>
		</div>
		<div class="sch_sp_box">
			<form action="/game/sports" class="sp_sch">
				<input type="hidden" name="ctr" class="ctr" value="">
				<input type="text" name="sch_key" class="sch_key" placeholder="스포츠 해외식 검색 (국가/리그명/팀명)">
				<input type="submit" class="dspn">
				<span class="sch_sp_btn"><i class="fas fa-search" aria-hidden="true"></i></span>
			</form>
			<form action="/game/korean" class="sp_sch2">
				<input type="text" name="sch_key2" class="sch_key2" placeholder="스포츠 국내식 검색 (국가/리그명/팀명)" value="">
				<input type="submit" class="dspn">
				<span class="sch_sp_btn2"><i class="fas fa-search" aria-hidden="true"></i></span>
			</form>
		</div>
		<div class="snb_sp_box">
			<div class="btn_snb_sp btn_sp_soccer" data-spo="soccer" data-stat="close">
				<span class="icon_sp">
				<img src="/static/img/icon_soccer.png" alt="">
				</span>
				<span class="snb_sp_name">축구</span>
				<span class="snb_sp_cnt">642</span>
			</div>
			<div class="btn_snb_sp btn_sp_basket" data-spo="basket" data-stat="close">
				<span class="icon_sp">
				<img src="/static/img/icon_basket.png" alt="">
				</span>
				<span class="snb_sp_name">농구</span>
				<span class="snb_sp_cnt">45</span>
			</div>
			<div class="btn_snb_sp btn_sp_baseball" data-spo="baseball" data-stat="close">
				<span class="icon_sp">
				<img src="/static/img/icon_baseball.png" alt="">
				</span>
				<span class="snb_sp_name">야구</span>
				<span class="snb_sp_cnt">22</span>
			</div>
			<div class="btn_snb_sp btn_sp_volley" data-spo="volley" data-stat="close">
				<span class="icon_sp">
				<img src="/static/img/icon_volley.png" alt="">
				</span>
				<span class="snb_sp_name">배구</span>
				<span class="snb_sp_cnt">14</span>
			</div>
			<div class="btn_snb_sp btn_sp_hockey" data-spo="hockey" data-stat="close">
				<span class="icon_sp">
				<img src="/static/img/icon_hockey.png" alt="">
				</span>
				<span class="snb_sp_name">아이스 하키</span>
				<span class="snb_sp_cnt">71</span>
			</div>
			<div class="btn_snb_sp btn_sp_tenis" data-spo="tenis" data-stat="close">
				<span class="icon_sp">
				<img src="/static/img/icon_tenis.png" alt="">
				</span>
				<span class="snb_sp_name">테니스</span>
				<span class="snb_sp_cnt">73</span>
			</div>
			<div class="btn_snb_sp btn_sp_handball" data-spo="handball" data-stat="close">
				<span class="icon_sp">
				<img src="/static/img/icon_handball.png" alt="">
				</span>
				<span class="snb_sp_name">핸드볼</span>
				<span class="snb_sp_cnt">61</span>
			</div>
			<div class="btn_snb_sp btn_sp_pp" data-spo="pp" data-stat="close">
				<span class="icon_sp">
				<img src="/static/img/icon_pp.png" alt="">
				</span>
				<span class="snb_sp_name">탁구</span>
				<span class="snb_sp_cnt">136</span>
			</div>
			<div class="btn_snb_sp btn_sp_mma" data-spo="mma" data-stat="close">
				<span class="icon_sp">
				<img src="/static/img/icon_mma.png" alt="">
				</span>
				<span class="snb_sp_name">MMA</span>
				<span class="snb_sp_cnt">0</span>
			</div>
			<div class="btn_snb_sp btn_sp_boxing" data-spo="boxing" data-stat="close">
				<span class="icon_sp">
				<img src="/static/img/icon_boxing.png" alt="">
				</span>
				<span class="snb_sp_name">권투</span>
				<span class="snb_sp_cnt">0</span>
			</div>
			<div class="btn_snb_sp btn_sp_dart" data-spo="dart" data-stat="close">
				<span class="icon_sp">
				<img src="/static/img/icon_dart.png" alt="">
				</span>
				<span class="snb_sp_name">다트</span>
				<span class="snb_sp_cnt">6</span>
			</div>
			<div class="btn_snb_sp btn_sp_egame" data-spo="egame" data-stat="close">
				<span class="icon_sp">
				<img src="/static/img/icon_egame.png" alt="">
				</span>
				<span class="snb_sp_name">E-스포츠</span>
				<span class="snb_sp_cnt">0</span>
			</div>
			<div class="snb_national">
			</div>
			<div class="snb_leagues">
			</div>
		</div>
		<div class="five_spo">
			<div class="left_ttl">
				<img src="/static/img/icon_favor.png" alt="">
				최신 인기게임
			</div>
			<ul>
				<li class="five_game" data-str="헤타페 CF">
				<span class="five_time">21:00</span>
				<span class="five_sport"><img src="/static/img/icon_soccer.png" alt=""></span>
				<div class="five_team_box">
					<span class="five_team_home"><img src="https://image.turnkeyapi.com/uof_team/medium/2859.png" onerror="this.src='/static/img/noimg.png'"> 헤타페 CF</span>
					<span class="five_team_away"><img src="https://image.turnkeyapi.com/uof_team/medium/2845.png" onerror="this.src='/static/img/noimg.png'"> CD 레가네스</span>
				</div>
				</li>
				<li class="five_game" data-str="자우랄리에 쿠르간">
				<span class="five_time">21:00</span>
				<span class="five_sport"><img src="/static/img/icon_hockey.png" alt=""></span>
				<div class="five_team_box">
					<span class="five_team_home"><img src="https://image.turnkeyapi.com/uof_team/medium/78199.png" onerror="this.src='/static/img/noimg.png'"> 자우랄리에 쿠르간</span>
					<span class="five_team_away"><img src="https://image.turnkeyapi.com/uof_team/medium/116994.png" onerror="this.src='/static/img/noimg.png'"> 올림피아 키로보-체페츠크</span>
				</div>
				</li>
				<li class="five_game" data-str="루빈 튜멘">
				<span class="five_time">21:00</span>
				<span class="five_sport"><img src="/static/img/icon_hockey.png" alt=""></span>
				<div class="five_team_box">
					<span class="five_team_home"><img src="https://image.turnkeyapi.com/uof_team/medium/55171.png" onerror="this.src='/static/img/noimg.png'"> 루빈 튜멘</span>
					<span class="five_team_away"><img src="https://image.turnkeyapi.com/uof_team/medium/78183.png" onerror="this.src='/static/img/noimg.png'"> 이즈스탈 이젭스크</span>
				</div>
				</li>
				<li class="five_game" data-str="ASK 니제고로드스카야 오블라스트">
				<span class="five_time">23:00</span>
				<span class="five_sport"><img src="/static/img/icon_volley.png" alt=""></span>
				<div class="five_team_box">
					<span class="five_team_home"><img src="https://image.turnkeyapi.com/uof_team/medium/364316.png" onerror="this.src='/static/img/noimg.png'"> ASK 니제고로드스카야 오블라스트</span>
					<span class="five_team_away"><img src="https://image.turnkeyapi.com/uof_team/medium/45023.png" onerror="this.src='/static/img/noimg.png'"> 벨로고리 벨고로드</span>
				</div>
				</li>
				<li class="five_game" data-str="아틀레틱 빌바오">
				<span class="five_time">23:15</span>
				<span class="five_sport"><img src="/static/img/icon_soccer.png" alt=""></span>
				<div class="five_team_box">
					<span class="five_team_home"><img src="https://image.turnkeyapi.com/uof_team/medium/2825.png" onerror="this.src='/static/img/noimg.png'"> 아틀레틱 빌바오</span>
					<span class="five_team_away"><img src="https://image.turnkeyapi.com/uof_team/medium/2821.png" onerror="this.src='/static/img/noimg.png'"> 셀타비고</span>
				</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="top_inner">
		<div class="top_info_box tr">
			<div class="logo_gnb">
				<a href="/" class="no_pop"><img src="/static/img/logo.png" alt=""></a>
			</div>
			<div class="top_right_box">
				<a href="/customer/deposit" class="mg_link"><i class="fa fa-plus" aria-hidden="true"></i> 충전</a>
				<a href="/customer/withdrawal" class="mg_link"><i class="fa fa-minus" aria-hidden="true"></i> 환전</a>
				<a href="/customer/event" class="mg_link"><i class="far fa-calendar-check" aria-hidden="true"></i> 이벤트</a>
				<a href="/customer/notice" class="mg_link"><i class="fas fa-exclamation-circle" aria-hidden="true"></i> 공지/규정</a>
				<a href="/customer/memo" class="mg_link"><i class="fa fa-paper-plane" aria-hidden="true"></i> 쪽지</a>
				<a href="/customer/cs_center" class="mg_link"><i class="fa fa-pencil-square" aria-hidden="true"></i> 문의</a>
				<a href="/event/roulette" class="mg_link"><i class="fas fa-gift" aria-hidden="true"></i> 룰렛</a>
				<a href="javascript:open_payback();"><i class="fas fa-hand-holding-usd" aria-hidden="true"></i> 페이백</a>
				<span class="mission" data-type="daily_dp_cnt"><i class="fas fa-hand-holding-usd" aria-hidden="true"></i> 충횟수</span>
				<span class="mission" data-type="daily_dp_amt"><i class="fas fa-hand-holding-usd" aria-hidden="true"></i> 충금액</span>
				<a href="/customer/money_list" class="mg_link"><i class="fas fa-clipboard-list" aria-hidden="true"></i> 머니내역</a>
				<a href="/customer/bet_list_spo" class="mg_link"><i class="fas fa-check" aria-hidden="true"></i> 배팅내역</a>
				<span class="tel_btn"><i class="fas fa-brands fa-telegram" aria-hidden="true"></i> 텔레그램</span>
				<span class="btn_top_login mg_link">로그인</span>
				<span class="btn_top_join join_btn no_pop">회원가입</span>
			</div>
		</div>
		<div class="gnb_box">
			<div class="gnb_menu_box">
				<ul>
					<li>
					<a href="/game/sports">해외형스포츠</a>
					</li>
					<li>
					<a href="/game/korean2">국내형스포츠</a>
					</li>
					<li>
					<a href="/sports/special">스페셜</a>
					</li>
					<li>
					<a href="/game/inplay">LIVE 스포츠</a>
					</li>
					<li>
					<a href="/esports/es">E-스포츠</a>
					</li>
					<li>
					<span class="mg_link open_revolution">레볼루션홀덤</span>
					</li>
					<li>
					<a href="/game/vspo/vsc/all">가상스포츠</a>
					</li>
					<li>
					<a href="/game/mini/gg_pwb1">미니게임</a>
					</li>
					<li>
					<a href="/game/token_game/hilo" class="mg_link">토큰게임</a>
					</li>
					<li>
					<a href="/casino/connect" class="mg_link">정식카지노</a>
					</li>
					<li>
					<a href="/casino/slot" class="mg_link">슬롯머신</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="bet_slip">
		<div class="bet_cart">
			<div class="bc_ttl">
				<input type="hidden" name="auto_ratio" class="auto_ratio" value="">
				<div class="controll_box swc_off" data-type="auto_ratio" data-stat="">
					<div class="circle">
					</div>
				</div>
				실시간배당 <span class="bc_da"><i class="fas fa-trash-alt" aria-hidden="true"></i> Delete All</span>
			</div>
			<div class="bc_select">
				<ul>
					<li class="no_data">선택된 배팅내역이 없습니다.</li>
				</ul>
			</div>
			<div class="bet_count dspn">
				<span class="wait_chk">
				배당확인중입니다<br>
				<i class="fas fa-circle-notch" aria-hidden="true"></i>
				</span>
				<span class="chk_okay dspn">
				배팅되었습니다<br>
				<i class="fas fa-check" aria-hidden="true"></i>
				</span>
			</div>
			<div class="bc_money">
				<div class="bc_money_top">
					배팅 <span class="money_box">
					<input type="hidden" class="bonus_fd" value="">
					<i class="fas fa-undo-alt reset_money" aria-hidden="true"></i>
					<input type="text" class="bet_money" name="bet_money" value="0">
					</span>
				</div>
				<div class="money_btn_box">
					<span class="btn_money" data-amt="5000">오천</span>
					<span class="btn_money" data-amt="10000">일만</span>
					<span class="btn_money" data-amt="50000">오만</span>
					<span class="btn_money" data-amt="100000">십만</span>
					<span class="btn_money" data-amt="1000000">백만</span>
					<span class="btn_money" data-amt="MAX">최대</span>
				</div>
			</div>
			<div class="bc_info_box">
				<ul>
					<li>
					<span class="info_left">총 배당</span>
					<span class="bc_total_ratio">0.00</span> 배 </li>
					<li>
					<span class="info_left">총 당첨금</span>
					<span class="bc_get_money">0</span> 원 </li>
					<li>
					<span class="info_left info_white">최소 배팅금액</span>
					<span class="bc_min_bet">0</span> 원 </li>
					<li>
					<span class="info_left info_white">최대 배팅금액</span>
					<span class="bc_max_bet">0</span> 원 </li>
					<li>
					<span class="info_left info_white">최대 당첨금액</span>
					<span class="bc_max_get">0</span> 원 </li>
					<li>
					<span class="info_left info_white">최대 배당</span>
					<span class="bc_max_ratio">0</span> 배 </li>
				</ul>
			</div>
			<div class="bc_btn_box">
				<span class="btn_bet">배팅하기</span>
				<span class="btn_cancel bc_da reset_money dspn"><i class="fas fa-trash" aria-hidden="true"></i> 전체취소</span>
			</div>
		</div>
		<div class="banner_box">
			<a href="https://t.me/boss365cs" target="_BLANK"><img src="/static/data/upload/banner/(보스)300x120-보스공식텔레그램.gif" alt="">
			</a><img src="/static/data/upload/banner/보스_카카오톡_배너.gif" alt="">
			<a href="https://보스사이트.COM" target="_BLANK"><img src="/static/data/upload/banner/3001001.gif" alt="">
			</a><a href="https://bigwin.livenst.com/boss/livescore/livescore/" target="_BLANK"><img src="/static/data/upload/banner/300x100-보스생중계TV.gif" alt="">
			</a><a href="https://www.rotowire.com " target="_BLANK"><img src="/static/data/upload/banner/300x100-실시간라인업확인.gif" alt="">
			</a><a href="https://xn--gl-qv9iw2zsia.com/" target="_NEW"><img src="/static/img/banner_solution.png" alt=""></a>
		</div>
	</div>
	<div class="btn_bet_slip_open">
		<span class="opened dspn">
		<img src="/static/img/cart_count.png" alt="">
		<span class="count_bet">0</span>
		</span>
		<span class="closed dspn"><i class="far fa-window-close" aria-hidden="true"></i> CLOSE</span>
	</div>
	<div class="contents contents_nouser">
		<div class="contents_join_box only_mobile">
			<span class="login_btn btn_ct_login"><i class="fas fa-sign-in-alt" aria-hidden="true"></i> 로그인</span>
			<span class="btn_ct_join join_btn"><i class="fas fa-user" aria-hidden="true"></i> 회원가입</span>
		</div>
		<div class="inner">
			<div class="mb_pc_box only_pc">
				<div class="mb_box mb_box_left">
					<img src="/static/img/bg_main_banner.png" alt="">
					<img src="/static/data/upload/banner/대문.png" class="main_banner mb_01" data-od="1" alt="">
				</div>
				<div class="mb_box mb_box_right">
					<img src="/static/img/bg_main_banner.png" alt="">
					<img src="/static/data/upload/banner/우측_3.png" class="main_banner mb_11" data-od="1" alt="" style="left: -100%;">
					<img src="/static/data/upload/banner/boss2.png" class="main_banner mb_12" data-od="2" alt="" style="left: 0px;">
					<img src="/static/data/upload/banner/보스대문.png" class="main_banner mb_13" data-od="3" alt="" style="left: -100%;">
					<img src="/static/data/upload/banner/b4.png" class="main_banner mb_14" data-od="4" alt="" style="left: -100%;">
					<div class="mb_ctr_arr2 mb_arr_left" data-type="left">
						<i class="fas fa-chevron-left" aria-hidden="true"></i>
					</div>
					<div class="mb_ctr_arr2 mb_arr_right" data-type="right">
						<i class="fas fa-chevron-right" aria-hidden="true"></i>
					</div>
					<div class="mb_ctr_box">
						<ul>
							<li class="btn_mb_ctr2 ctr_11" data-id="1"></li>
							<li class="btn_mb_ctr2 ctr_12 btn_mb_ctr_on" data-id="2"></li>
							<li class="btn_mb_ctr2 ctr_13" data-id="3"></li>
							<li class="btn_mb_ctr2 ctr_14" data-id="4"></li>
						</ul>
					</div>					
				</div>
			</div>
			<div class="mb_box only_mobile">
				<img src="/static/img/bg_main_banner.png" alt="">
				<img src="/static/data/upload/banner/대문.png" class="main_banner mb_21" data-od="1" alt="" style="left: 0px;">
				<img src="/static/data/upload/banner/우측_3.png" class="main_banner mb_22" data-od="2" alt="" style="left: -100%;">
				<img src="/static/data/upload/banner/boss2.png" class="main_banner mb_23" data-od="3" alt="" style="left: -100%;">
				<img src="/static/data/upload/banner/보스대문.png" class="main_banner mb_24" data-od="4" alt="" style="left: -100%;">
				<img src="/static/data/upload/banner/b4.png" class="main_banner mb_25" data-od="5" alt="" style="left: -100%;">
				<div class="mb_ctr_arr3 mb_arr_left" data-type="left">
					<i class="fas fa-chevron-left" aria-hidden="true"></i>
				</div>
				<div class="mb_ctr_arr3 mb_arr_right" data-type="right">
					<i class="fas fa-chevron-right" aria-hidden="true"></i>
				</div>
				<div class="mb_ctr_box">
					<ul>
						<li class="btn_mb_ctr3 ctr_21 btn_mb_ctr_on" data-id="1"></li>
						<li class="btn_mb_ctr3 ctr_22" data-id="2"></li>
						<li class="btn_mb_ctr3 ctr_23" data-id="3"></li>
						<li class="btn_mb_ctr3 ctr_24" data-id="4"></li>
						<li class="btn_mb_ctr3 ctr_25" data-id="5"></li>
					</ul>
				</div>				
			</div>
			<div class="main_bbs only_pc">
				<div class="notice_area">
					<div class="main_bbs_ttl">
						<i class="fas fa-bullhorn" aria-hidden="true"></i> 공지/규정 <span class="main_bbs_sub only_pc">NOTICE/RULE</span>
						<a href="/customer/notice" class="view_more mg_link">MORE</a>
					</div>
					<div class="main_bbs_list only_pc">
						<ul>
							<li>
							<a href="/customer/nt_view/15">
							<span class="main_thumb"><img src="/static/data/upload/notice/레벨별등급혜택.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 레벨별등급혜택</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/nt_view/16">
							<span class="main_thumb"><img src="/static/data/upload/notice/양방베팅강력제재안내.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 양방베팅강력제재안내</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/nt_view/17">
							<span class="main_thumb"><img src="/static/data/upload/notice/롤링규정안내.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 롤링규정안내</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/nt_view/18">
							<span class="main_thumb"><img src="/static/data/upload/notice/미니게임토큰게임규정.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 미니&amp;토큰게임규정</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/nt_view/19">
							<span class="main_thumb"><img src="/static/data/upload/notice/스포츠통합규정.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 스포츠통합규정</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/nt_view/20">
							<span class="main_thumb"><img src="/static/data/upload/notice/입금규정안내.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 입금규정안내</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/nt_view/23">
							<span class="main_thumb"><img src="/static/data/upload/notice/bosslevel.png" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 레벨별콤프안내</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/nt_view/21">
							<span class="main_thumb"><img src="/static/data/upload/notice/충전및환전규정.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 충전 및 환전규정</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/nt_view/22">
							<span class="main_thumb"><img src="/static/data/upload/notice/카지노슬롯게임규정.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 카지노&amp;슬롯규정</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/nt_view/24">
							<span class="main_thumb"><img src="/static/data/upload/notice/1boss.png" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 레볼루션 홀덤 규정</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/nt_view/25">
							<span class="main_thumb"><img src="/static/data/upload/notice/2boss.png" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 홀덤 기본규칙&amp;기본용어</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="event_area">
					<div class="main_bbs_ttl">
						<i class="fas fa-gifts" aria-hidden="true"></i> 이벤트 <span class="main_bbs_sub only_pc">EVENT</span>
						<a href="/customer/event" class="view_more mg_link">MORE</a>
					</div>
					<div class="main_bbs_list only_pc">
						<ul>
							<li>
							<a href="/customer/ev_view/57">
							<span class="main_thumb"><img src="/static/data/upload/event/보스_카지노연패_썸네일.png" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT - </strong></span>카지노 연패 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/55">
							<span class="main_thumb"><img src="/static/data/upload/event/보스_콤프.png" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT - </strong></span> 레벨별 콤프 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/54">
							<span class="main_thumb"><img src="/static/data/upload/event/3boss.png" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT - </strong></span> 레볼루션 포인트 더블 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/52">
							<span class="main_thumb"><img src="/static/data/upload/event/b1.png" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT - </strong></span> 프리스핀 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/51">
							<span class="main_thumb"><img src="/static/data/upload/event/eventboss.png" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 슬롯당일페이백이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/40">
							<span class="main_thumb"><img src="/static/data/upload/event/썸네일(300x300)-첫충전매충전이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 첫충전 매충전 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/27">
							<span class="main_thumb"><img src="/static/data/upload/event/bosss.png" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 신규가입 입플 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/37">
							<span class="main_thumb"><img src="/static/data/upload/event/복귀자이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 복귀자이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/36">
							<span class="main_thumb"><img src="/static/data/upload/event/페이백이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 페이백이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/25">
							<span class="main_thumb"><img src="/static/data/upload/event/채널방입장이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 채널방 입장 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/30">
							<span class="main_thumb"><img src="/static/data/upload/event/일일누적금액이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 누적금액이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/31">
							<span class="main_thumb"><img src="/static/data/upload/event/일일누적충전횟수이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 충전횟수이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/29">
							<span class="main_thumb"><img src="/static/data/upload/event/photo_2024-08-17_03-18-29.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 심야이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/22">
							<span class="main_thumb"><img src="/static/data/upload/event/미니게임연승연패이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 미니연승&amp;연패 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/43">
							<span class="main_thumb"><img src="/static/data/upload/event/보스썸네일-슬롯잭팟이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 슬롯잭팟이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/21">
							<span class="main_thumb"><img src="/static/data/upload/event/리뷰작성이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 리뷰작성이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/23">
							<span class="main_thumb"><img src="/static/data/upload/event/생일이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 생일이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/24">
							<span class="main_thumb"><img src="/static/data/upload/event/스포츠다폴더이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 스포츠다폴더이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/26">
							<span class="main_thumb"><img src="/static/data/upload/event/스포츠한폴낙올미당이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 한폴낙&amp;올미당이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/28">
							<span class="main_thumb"><img src="/static/data/upload/event/연속출석이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 연속출석이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/32">
							<span class="main_thumb"><img src="/static/data/upload/event/제보이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 제보이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/34">
							<span class="main_thumb"><img src="/static/data/upload/event/VIP리치레벨이동이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa21"><strong>EVENT -</strong></span> VIP리치레벨이동이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/35">
							<span class="main_thumb"><img src="/static/data/upload/event/파격지인추천이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 지인추천이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/ev_view/39">
							<span class="main_thumb"><img src="/static/data/upload/event/레벨업이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 레벨업 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="main_middle_box only_pc">
				<a href="/game/sports">
				<img src="/static/img/main/main_middle_sports.png" alt="">
				<span class="hoverb">
				<img src="/static/img/logo.png" alt="">
				<span class="mmb_in_ttl">스포츠</span>
				<span class="mmb_in_btn">배팅하러 가기</span>
				</span>
				</a>
				<a href="/game/inplay">
				<img src="/static/img/main/main_middle_inplay.png" alt="">
				<span class="hoverb">
				<img src="/static/img/logo.png" alt="">
				<span class="mmb_in_ttl">라이브</span>
				<span class="mmb_in_btn">배팅하러 가기</span>
				</span>
				</a>
				<a href="/game/mini/gg_pwb1">
				<img src="/static/img/main/main_middle_mini.png" alt="">
				<span class="hoverb">
				<img src="/static/img/logo.png" alt="">
				<span class="mmb_in_ttl">미니게임</span>
				<span class="mmb_in_btn">배팅하러 가기</span>
				</span>
				</a>
				<a href="/casino/connect" class="mg_link">
				<img src="/static/img/main/main_middle_casino.png" alt="">
				<span class="hoverb">
				<img src="/static/img/logo.png" alt="">
				<span class="mmb_in_ttl">카지노</span>
				<span class="mmb_in_btn">배팅하러 가기</span>
				</span>
				</a>
				<a href="/game/vspo/vsc/all">
				<img src="/static/img/main/main_middle_vspo.png" alt="">
				<span class="hoverb">
				<img src="/static/img/logo.png" alt="">
				<span class="mmb_in_ttl">슬롯</span>
				<span class="mmb_in_btn">배팅하러 가기</span>
				</span>
				</a>
			</div>
			<div class="cb">
			</div>
			<div class="main_btn_box only_mobile">
				<a href="/game/sports"><img src="/static/img/main/icon_sports.png" alt="">해외형스포츠</a>
				<a href="/game/korean2"><img src="/static/img/main/icon_korean.png" alt="">국내형스포츠</a>
				<a href="/game/inplay"><img src="/static/img/main/icon_live.png" alt="">LIVE스포츠</a>
				<a href="/esports/es" class=" mg_link"><img src="/static/img/main/icon_esports.png" alt="">E스포츠</a>
				<a href="/game/special"><img src="/static/img/main/icon_special.png" alt="">스페셜</a>
				<a href="/game/vspo/vsc/all"><img src="/static/img/main/icon_vspo.png" alt="">가상스포츠</a>
				<a href="#" class="open_revolution mg_link"><img src="/static/img/main/icon_holdem.png" alt="">홀덤</a>
				<a href="/casino/connect" class="mg_link"><img src="/static/img/main/icon_casino.png" alt="">카지노</a>
				<a href="/casino/slot" class="mg_link"><img src="/static/img/main/icon_slot.png" alt="">슬롯</a>
				<a href="/game/mini/gg_pwb1"><img src="/static/img/main/icon_mini.png" alt="">미니게임</a>
				<a href="/game/mini/pbg_pwb5" class=" mg_link"><img src="/static/img/main/icon_pbg.png?v=2" alt="">파워볼</a>
				<a href="/customer/att" class="mg_link"><img src="/static/img/main/icon_att.png" alt="">출석체크</a>
				<a href="/customer/cs_center" class="mg_link"><img src="/static/img/main/icon_cs.png" alt="">고객센터</a>
				<a href="/customer/notice" class=" mg_link"><img src="/static/img/main/icon_notice.png" alt="">공지/규정</a>
				<a href="/customer/event" class=" mg_link"><img src="/static/img/main/icon_event.png" alt="">이벤트</a>
				<a href="/customer/deposit" class="mg_link"><img src="/static/img/main/icon_deposit.png" alt="">충전</a>
				<a href="/customer/withdrawal" class="mg_link"><img src="/static/img/main/icon_withdrawal.png" alt="">환전</a>
				<a href="/customer/bet_list_spo" class=" mg_link"><img src="/static/img/main/icon_bet.png" alt="">배팅내역</a>
			</div>
			<div class="banner_box only_mobile">
				<a href="https://t.me/boss365cs" target="_BLANK"><img src="/static/data/upload/banner/(보스)300x120-보스공식텔레그램.gif" alt="">
				</a><img src="/static/data/upload/banner/보스_카카오톡_배너.gif" alt="">
				<a href="https://보스사이트.COM" target="_BLANK"><img src="/static/data/upload/banner/3001001.gif" alt="">
				</a><a href="https://bigwin.livenst.com/boss/livescore/livescore/" target="_BLANK"><img src="/static/data/upload/banner/300x100-보스생중계TV.gif" alt="">
				</a><a href="https://www.rotowire.com " target="_BLANK"><img src="/static/data/upload/banner/300x100-실시간라인업확인.gif" alt="">
				</a><a href="https://xn--gl-qv9iw2zsia.com/" target="_NEW"><img src="/static/img/banner_solution.png" alt=""></a>
			</div>
			<div class="footer only_pc">
				<div class="footer_logos">
					<ul>
						<li class="ft_logos_01"></li>
						<li class="ft_logos_02"></li>
						<li class="ft_logos_03"></li>
						<li class="ft_logos_04"></li>
						<li class="ft_logos_05"></li>
						<li class="ft_logos_06"></li>
						<li class="ft_logos_07"></li>
						<li class="ft_logos_08"></li>
						<li class="ft_logos_09"></li>
						<li class="ft_logos_10"></li>
						<li class="ft_logos_11"></li>
						<li class="ft_logos_12"></li>
						<li class="ft_logos_13"></li>
						<li class="ft_logos_14"></li>
						<li class="ft_logos_15"></li>
						<li class="ft_logos_16"></li>
						<li class="ft_logos_17"></li>
						<li class="ft_logos_18"></li>
						<li class="ft_logos_19"></li>
						<li class="ft_logos_20"></li>
						<li class="ft_logos_21"></li>
						<li class="ft_logos_22"></li>
						<li class="ft_logos_23"></li>
						<li class="ft_logos_24"></li>
						<li class="ft_logos_25"></li>
						<li class="ft_logos_26"></li>
						<li class="ft_logos_27"></li>
						<li class="ft_logos_28"></li>
						<li class="ft_logos_29"></li>
						<li class="ft_logos_30"></li>
						<li class="ft_logos_31"></li>
						<li class="ft_logos_32"></li>
						<li class="ft_logos_33"></li>
						<li class="ft_logos_34"></li>
					</ul>
				</div>
				<div class="copyright">
					Copyright © GL. All Rights Reserved.
				</div>
			</div>
		</div>
	</div>
	<a href="/customer/memo" class="new_memo blink">
	<span class="">
	<i class="fas fa-envelope" aria-hidden="true"></i>
	신규쪽지가 있습니다. </span>
	</a>
	<div class="cb">
	</div>
</div>
<audio id="jj_sound"></audio>
<canvas id="ocrext-canOrig" class="ocrext-element" width="480" height="320" style="display: none;"></canvas>
<div id="bro-container" style="display: none;">
	<div id="translator-icon" style="background-image: url(chrome-extension://mnlohknjofogcljbcknkakphddjpijak/assets/img/icon280.png)">
	</div>
	<div id="speak-icon" class="c12b5a4e69860bc968b47223fd-position-center">
		<img src="chrome-extension://mnlohknjofogcljbcknkakphddjpijak/assets/Images/icon_sound_active.svg" class="c12b5a4e69860bc968b47223fd-sound_activate" alt="play sound">
		<img src="chrome-extension://mnlohknjofogcljbcknkakphddjpijak/assets/Images/icon_sound.svg" class="c12b5a4e69860bc968b47223fd-sound_inactive" alt="play sound">
		<img src="chrome-extension://mnlohknjofogcljbcknkakphddjpijak/assets/Images/spin.gif" class="c12b5a4e69860bc968b47223fd-sound_loader" alt="loader">
	</div>
</div>
<div id="c12b5a4e69860bc968b47223fd-translator-div-container" class="c12b5a4e69860bc968b47223fd-translator ui-draggable ui-draggable-handle" style="display: none;">
	<div class="c12b5a4e69860bc968b47223fd-header-container" id="c12b5a4e69860bc968b47223fd-regular-translator-header">
		<img src="chrome-extension://mnlohknjofogcljbcknkakphddjpijak/assets/Images/logo_white.png" class="c12b5a4e69860bc968b47223fd-logo_text" alt="logo with text">
		<div class="c12b5a4e69860bc968b47223fd-tab-container">
			<div data-tab="translate" class="c12b5a4e69860bc968b47223fd-tab-container-item">
				<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewbox="-3 0 29 23" fill="none" id="c12b5a4e69860bc968b47223fd-translate-img" class="c12b5a4e69860bc968b47223fd-tab-container-icon c12b5a4e69860bc968b47223fd-activeSvg">
				<path d="M 18.604 16.111 c 0.018 0.276 0.048 0.531 0.092 0.758 c -0.583 0.106 -0.606 -0.469 -0.092 -0.758 Z m -4.354 0.16 h 0.996 l -0.498 -1.43 l -0.498 1.43 Z m 2.75 -6.105 c 3.697 0 7 2.465 7 5.837 c 0 1.196 -0.432 2.37 -1.193 3.281 c -0.033 1.068 0.596 2.6 1.162 3.715 c -1.518 -0.274 -3.676 -0.88 -4.654 -1.48 c -5.387 1.313 -9.315 -1.984 -9.315 -5.516 c 0 -3.39 3.326 -5.837 7 -5.837 Z m -0.437 7.584 l -1.44 -3.792 h -0.76 l -1.447 3.792 h 0.812 l 0.312 -0.875 h 1.422 l 0.313 0.875 h 0.788 Z m 3.988 -2.296 l 0.079 -0.353 l -0.642 -0.125 l -0.064 0.292 c -0.215 -0.032 -0.445 -0.036 -0.679 -0.012 l 0.028 -0.458 h 0.717 v -0.608 h -0.631 l 0.084 -0.335 l -0.627 -0.188 c -0.046 0.154 -0.084 0.304 -0.123 0.523 h -0.715 v 0.608 h 0.638 c -0.018 0.196 -0.026 0.399 -0.03 0.605 c -0.704 0.259 -1.002 0.751 -1.002 1.198 c 0 0.528 0.416 0.992 1.074 0.932 c 0.817 -0.074 1.362 -0.691 1.682 -1.45 c 0.332 0.19 0.471 0.511 0.346 0.807 c -0.115 0.275 -0.455 0.536 -1.104 0.523 v 0.654 c 0.721 0.011 1.429 -0.262 1.707 -0.923 c 0.27 -0.647 -0.041 -1.352 -0.738 -1.69 Z m -1.25 1.073 c 0.17 -0.177 0.305 -0.401 0.407 -0.626 c -0.147 -0.013 -0.306 -0.009 -0.462 0.012 c 0.011 0.22 0.028 0.425 0.055 0.614 Z m -10.492 2.703 c -1.887 -0.271 -3.571 -1.165 -4.827 -2.478 c -0.182 -0.189 -0.315 -0.636 -0.019 -0.819 l 0.302 -0.078 c 0.235 -0.199 -0.221 -1.009 -0.04 -1.14 c 0.561 -0.401 0.295 -0.893 -0.051 -1.299 c -0.146 -0.172 -0.948 -1 -1.038 -0.853 c 0.067 -0.226 -0.146 -0.772 -0.274 -0.987 c -0.217 -0.362 -0.502 -0.585 -0.617 -0.982 c -0.046 -0.158 -0.046 -0.64 -0.139 -0.751 c -0.038 -0.045 -0.327 -0.167 -0.317 -0.233 c 0.278 -1.655 1.044 -3.143 2.149 -4.318 l 0.746 -0.301 c 0.468 -0.703 0.495 -0.158 0.916 -0.341 c 0.141 0 0.301 -0.578 0.452 -0.667 c 0.261 -0.169 0.062 -0.169 0.013 -0.245 c -0.104 -0.168 2.191 -1.003 2.229 -0.853 c 0.032 0.127 -1.135 0.734 -1.007 0.716 c -0.296 0.039 -0.352 0.571 -0.297 0.568 c 0.147 -0.005 1.074 -0.704 1.506 -0.555 c 0.423 0.146 1.183 -0.336 1.48 -0.582 c 0.149 -0.125 0.286 -0.344 0.483 -0.344 c 0.909 0 2.268 0.374 2.579 0.56 c 0.474 0.283 -0.204 0.263 -0.277 0.447 c -0.058 0.142 -0.19 0.335 -0.249 0.412 c -0.102 0.133 -0.399 0.077 -0.341 -0.082 c 0.059 -0.167 0.348 -0.231 -0.086 -0.271 c -0.445 -0.041 -0.568 -0.341 -1.014 0.034 c -0.134 0.113 -0.234 0.286 -0.321 0.433 c -0.123 0.21 -0.42 0.201 -0.544 0.396 c -0.12 0.192 0.07 0.512 0.304 0.371 c 0.062 -0.038 0.765 0.645 0.674 0.095 c -0.059 -0.364 0.196 -0.612 0.201 -0.887 c 0.003 -0.184 0.28 -0.066 0.206 0.03 c -0.097 0.121 -0.203 0.534 0.051 0.554 c 0.096 0.008 0.339 -0.158 0.425 -0.084 c -0.096 -0.002 -0.315 0.383 -0.3 0.376 c -0.108 0.048 -0.233 -0.021 -0.15 0.21 c 0.074 0.228 -0.408 0.201 -0.495 0.247 c -0.037 0.02 -0.417 -0.114 -0.408 -0.028 c -0.131 -0.109 0.037 -0.379 -0.072 -0.422 c -0.11 0.168 -0.058 0.512 -0.294 0.512 c -0.202 0 -0.482 0.229 -0.604 0.369 c -0.087 0.097 -0.609 0.308 -0.666 0.302 c 0.299 0.031 0.286 0.25 0.261 0.437 c -0.06 0.433 -0.995 0.032 -0.956 0.196 c 0.038 0.158 -0.107 0.586 -0.139 0.724 c -0.029 0.125 0.402 0.205 0.378 0.267 c 0.002 -0.007 0.583 -0.199 0.64 -0.25 l 0.131 -0.293 c 0.11 -0.073 0.226 -0.133 0.35 -0.179 l 0.149 -0.258 c 0.05 -0.02 0.645 -0.112 0.686 -0.092 c 0.149 0.068 0.428 0.353 0.532 0.483 c 0.036 0.047 0.227 0.117 0.227 0.188 c 0.069 0.107 -0.051 0.148 -0.006 0.223 c 0.104 0.193 0.132 -0.401 0.087 -0.29 c 0 -0.189 0.142 0.071 0.174 0.049 l -0.657 -0.654 c -0.204 -0.342 0.543 0.183 0.64 0.247 c 0.096 0.063 0.285 0.629 0.537 0.501 c 0.158 -0.08 -0.004 -0.139 0.106 -0.229 l 0.449 -0.09 c -0.357 0.261 0.279 0.602 0.182 0.556 c 0.16 0.074 0.254 -0.058 0.354 -0.021 c 0.057 0.022 0.663 0.015 0.566 -0.082 c 0.151 0.076 0.082 0.748 -0.044 0.851 c -0.204 0.169 -1.182 0.1 -1.399 -0.057 c -0.361 -0.262 -0.297 0.279 -0.473 0.352 c -0.344 0.142 -0.857 -0.463 -1.218 -0.482 c 0.176 0.026 0.015 -0.445 0.015 -0.478 c -0.139 -0.171 -1.02 0.019 -1.252 0.05 c -0.434 0.058 -0.89 0.052 -1.223 0.324 c -0.234 0.189 -0.237 0.5 -0.477 0.651 c -0.156 0.095 -0.325 0.064 -0.456 0.189 c -0.234 0.222 -0.504 0.552 -0.637 0.845 c -0.054 0.123 0.072 0.416 0.041 0.574 c -0.307 0.967 0.076 2.308 1.248 2.456 c 0.25 0.032 0.506 0.144 0.759 0.117 c 1.332 -2.88 4.568 -4.92 8.347 -4.92 c 0.932 0 1.831 0.124 2.678 0.354 c -1.105 -4.322 -5.012 -7.521 -9.678 -7.521 c -5.523 0 -10 4.477 -10 10 s 4.477 10 10 10 l 0.074 -0.004 c -0.509 -0.533 -0.931 -1.128 -1.265 -1.766 Z m 4.778 -13.035 c 0.068 -0.008 -0.089 0.138 -0.089 0.138 c 0.027 0.212 0.183 0.327 0.479 0.435 c 0.36 0.129 0.03 0.375 -0.176 0.317 c -0.114 -0.032 -0.704 -0.21 -0.725 0.021 c 0 0.138 -0.56 0.001 -0.473 -0.145 c 0.061 -0.098 0.041 -0.319 0.152 -0.464 c 0.16 -0.21 0.313 -0.096 0.318 0.026 c 0.002 0.327 0.332 -0.306 0.514 -0.328 Z m -4.532 -0.292 c 0.08 0.113 0.688 -0.163 0.591 -0.146 c 0.187 -0.094 0.024 -0.104 -0.082 -0.159 c -0.035 -0.179 -0.065 -0.456 -0.177 -0.566 l 0.074 -0.085 c -0.173 -0.249 -0.301 0.302 -0.301 0.302 l 0.09 -0.026 l -0.042 0.113 c 0.071 0.129 0.019 0.207 0.007 0.277 l -0.124 0.077 c -0.045 0.055 0.215 0.062 0.217 0.071 c 0.009 0.028 -0.313 0.074 -0.253 0.142 Z m -0.396 -0.286 c -0.069 0.071 0.002 0.116 0.073 0.085 c 0.104 -0.045 0.244 -0.044 0.26 -0.183 l 0.066 -0.084 c 0.029 -0.043 -0.057 -0.114 -0.092 -0.121 l -0.124 0.086 l -0.061 0.016 l -0.056 0.072 l 0.006 0.04 l -0.072 0.089 Z m 2.634 2.107 c -0.055 0 -0.369 0.029 -0.34 0.084 c 0.178 0.293 0.403 -0.076 0.34 -0.084 Z" );="" fill="#FCFCFCFF"></path>
				</svg>
			</div>
			<div data-tab="history" class="c12b5a4e69860bc968b47223fd-tab-container-item">
				<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" id="c12b5a4e69860bc968b47223fd-history-img" class="c12b5a4e69860bc968b47223fd-tab-container-icon" viewbox="0 0 30 30" fill="none">
				<mask id="path-1-inside-1" fill="white">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M7.81799 22.1428C7.43217 21.7099 7.54012 21.0491 8.00939 20.7084C8.47867 20.3677 9.13088 20.4775 9.5274 20.9006C10.6695 22.1194 12.1554 22.9762 13.7997 23.3489C15.7872 23.7994 17.8707 23.5121 19.662 22.5403C21.4534 21.5686 22.8303 19.9788 23.5364 18.0671C24.2425 16.1555 24.2295 14.0523 23.4999 12.1494C22.7703 10.2466 21.3739 8.67391 19.5707 7.72435C17.7675 6.77478 15.6807 6.51312 13.6989 6.9881C11.7171 7.46309 9.97557 8.64233 8.79877 10.3061C8.21701 11.1286 7.79288 12.0418 7.53834 12.9999H8.87221C9.40299 12.9999 9.67236 13.6384 9.30196 14.0186L6.8271 16.5588C6.59159 16.8005 6.20311 16.8005 5.96759 16.5588L3.49273 14.0186C3.12233 13.6384 3.39171 12.9999 3.92249 12.9999H5.38062C5.67321 11.606 6.24866 10.2749 7.08428 9.09347C8.55529 7.01373 10.7322 5.53967 13.2094 4.94594C15.6866 4.35221 18.2952 4.67929 20.5492 5.86624C22.8032 7.0532 24.5487 9.01908 25.4607 11.3976C26.3727 13.7762 26.3889 16.4051 25.5063 18.7947C24.6237 21.1843 22.9025 23.1716 20.6634 24.3862C18.4242 25.6009 15.8199 25.9601 13.3355 25.397C11.1939 24.9115 9.26745 23.7692 7.81799 22.1428ZM14 10.9999C14 10.4476 14.4477 9.99991 15 9.99991C15.5523 9.99991 16 10.4476 16 10.9999V15.5773L18.464 16.9999C18.9423 17.2761 19.1062 17.8876 18.8301 18.3659C18.5539 18.8442 17.9423 19.0081 17.464 18.732L14.5063 17.0243C14.1734 16.8321 13.9928 16.4774 14.0069 16.1182C14.0023 16.0794 14 16.0399 14 15.9999V10.9999Z"></path>
				</mask>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M7.81799 22.1428C7.43217 21.7099 7.54012 21.0491 8.00939 20.7084C8.47867 20.3677 9.13088 20.4775 9.5274 20.9006C10.6695 22.1194 12.1554 22.9762 13.7997 23.3489C15.7872 23.7994 17.8707 23.5121 19.662 22.5403C21.4534 21.5686 22.8303 19.9788 23.5364 18.0671C24.2425 16.1555 24.2295 14.0523 23.4999 12.1494C22.7703 10.2466 21.3739 8.67391 19.5707 7.72435C17.7675 6.77478 15.6807 6.51312 13.6989 6.9881C11.7171 7.46309 9.97557 8.64233 8.79877 10.3061C8.21701 11.1286 7.79288 12.0418 7.53834 12.9999H8.87221C9.40299 12.9999 9.67236 13.6384 9.30196 14.0186L6.8271 16.5588C6.59159 16.8005 6.20311 16.8005 5.96759 16.5588L3.49273 14.0186C3.12233 13.6384 3.39171 12.9999 3.92249 12.9999H5.38062C5.67321 11.606 6.24866 10.2749 7.08428 9.09347C8.55529 7.01373 10.7322 5.53967 13.2094 4.94594C15.6866 4.35221 18.2952 4.67929 20.5492 5.86624C22.8032 7.0532 24.5487 9.01908 25.4607 11.3976C26.3727 13.7762 26.3889 16.4051 25.5063 18.7947C24.6237 21.1843 22.9025 23.1716 20.6634 24.3862C18.4242 25.6009 15.8199 25.9601 13.3355 25.397C11.1939 24.9115 9.26745 23.7692 7.81799 22.1428ZM14 10.9999C14 10.4476 14.4477 9.99991 15 9.99991C15.5523 9.99991 16 10.4476 16 10.9999V15.5773L18.464 16.9999C18.9423 17.2761 19.1062 17.8876 18.8301 18.3659C18.5539 18.8442 17.9423 19.0081 17.464 18.732L14.5063 17.0243C14.1734 16.8321 13.9928 16.4774 14.0069 16.1182C14.0023 16.0794 14 16.0399 14 15.9999V10.9999Z" fill="#FCFCFCFF"></path>
				<path d="M7.81799 22.1428L8.56455 21.4775H8.56455L7.81799 22.1428ZM9.5274 20.9006L8.79772 21.5844H8.79772L9.5274 20.9006ZM13.7997 23.3489L14.0208 22.3737L13.7997 23.3489ZM19.662 22.5403L20.1389 23.4193L19.662 22.5403ZM23.5364 18.0671L24.4745 18.4136V18.4136L23.5364 18.0671ZM23.4999 12.1494L24.4337 11.7914V11.7914L23.4999 12.1494ZM19.5707 7.72435L19.1048 8.60916V8.60916L19.5707 7.72435ZM13.6989 6.9881L13.4658 6.01564L13.6989 6.9881ZM8.79877 10.3061L7.98235 9.72867H7.98235L8.79877 10.3061ZM7.53834 12.9999L6.57187 12.7431L6.23798 13.9999H7.53834V12.9999ZM9.30196 14.0186L8.58571 13.3208H8.58571L9.30196 14.0186ZM6.8271 16.5588L7.54336 17.2566H7.54336L6.8271 16.5588ZM5.96759 16.5588L5.25133 17.2566H5.25134L5.96759 16.5588ZM3.49273 14.0186L2.77647 14.7164H2.77647L3.49273 14.0186ZM5.38062 12.9999V13.9999H6.19251L6.3593 13.2053L5.38062 12.9999ZM7.08428 9.09347L6.26786 8.51601V8.51602L7.08428 9.09347ZM13.2094 4.94594L13.4425 5.9184L13.2094 4.94594ZM20.5492 5.86624L21.0152 4.98143V4.98143L20.5492 5.86624ZM25.4607 11.3976L26.3945 11.0396V11.0396L25.4607 11.3976ZM25.5063 18.7947L26.4444 19.1412V19.1412L25.5063 18.7947ZM13.3355 25.397L13.5566 24.4217L13.5566 24.4217L13.3355 25.397ZM16 15.5773H15V16.1546L15.5 16.4433L16 15.5773ZM18.464 16.9999L17.964 17.8659L18.464 16.9999ZM18.8301 18.3659L17.964 17.8659V17.8659L18.8301 18.3659ZM17.464 18.732L16.964 19.598L16.964 19.598L17.464 18.732ZM14.5063 17.0243L15.0063 16.1583L15.0063 16.1583L14.5063 17.0243ZM14.0069 16.1182L15.0062 16.1574L15.0092 16.0791L15 16.0012L14.0069 16.1182ZM7.42192 19.8992C6.53003 20.5467 6.24708 21.8831 7.07144 22.8081L8.56455 21.4775C8.56628 21.4794 8.56937 21.4834 8.57263 21.4893C8.57585 21.4952 8.57846 21.5015 8.58029 21.5079C8.58398 21.5208 8.5834 21.5295 8.58298 21.5325C8.58238 21.5366 8.5827 21.5279 8.59687 21.5177L7.42192 19.8992ZM10.2571 20.2168C9.56976 19.4834 8.35983 19.2183 7.42192 19.8992L8.59687 21.5177C8.60365 21.5127 8.61897 21.5031 8.65789 21.5085C8.70174 21.5146 8.75527 21.5391 8.79772 21.5844L10.2571 20.2168ZM14.0208 22.3737C12.5722 22.0453 11.2632 21.2905 10.2571 20.2168L8.79772 21.5844C10.0758 22.9482 11.7385 23.9071 13.5787 24.3242L14.0208 22.3737ZM19.1852 21.6613C17.6072 22.5174 15.7717 22.7706 14.0208 22.3737L13.5787 24.3242C15.8028 24.8283 18.1343 24.5067 20.1389 23.4193L19.1852 21.6613ZM22.5984 17.7207C21.9763 19.4048 20.7633 20.8053 19.1852 21.6613L20.1389 23.4193C22.1434 22.3319 23.6843 20.5529 24.4745 18.4136L22.5984 17.7207ZM22.5662 12.5075C23.209 14.1838 23.2204 16.0366 22.5984 17.7207L24.4745 18.4136C25.2646 16.2743 25.2501 13.9208 24.4337 11.7914L22.5662 12.5075ZM19.1048 8.60916C20.6933 9.44568 21.9235 10.8312 22.5662 12.5075L24.4337 11.7914C23.6172 9.66208 22.0545 7.90214 20.0367 6.83954L19.1048 8.60916ZM13.932 7.96056C15.6778 7.54212 17.5163 7.77263 19.1048 8.60916L20.0367 6.83954C18.0188 5.77693 15.6835 5.48411 13.4658 6.01564L13.932 7.96056ZM9.61519 10.8836C10.6519 9.41786 12.1861 8.379 13.932 7.96056L13.4658 6.01564C11.2481 6.54718 9.29925 7.86681 7.98235 9.72867L9.61519 10.8836ZM8.50481 13.2567C8.72905 12.4126 9.10268 11.6082 9.61519 10.8836L7.98235 9.72867C7.33133 10.6491 6.8567 11.671 6.57187 12.7431L8.50481 13.2567ZM8.87221 11.9999H7.53834V13.9999H8.87221V11.9999ZM10.0182 14.7164C11.006 13.7026 10.2876 11.9999 8.87221 11.9999V13.9999C8.51835 13.9999 8.33877 13.5742 8.58571 13.3208L10.0182 14.7164ZM7.54336 17.2566L10.0182 14.7164L8.58571 13.3208L6.11084 15.861L7.54336 17.2566ZM5.25134 17.2566C5.87937 17.9013 6.91532 17.9013 7.54336 17.2566L6.11085 15.861C6.26785 15.6998 6.52684 15.6998 6.68385 15.861L5.25134 17.2566ZM2.77647 14.7164L5.25133 17.2566L6.68385 15.861L4.20899 13.3208L2.77647 14.7164ZM3.92249 11.9999C2.50707 11.9999 1.78874 13.7026 2.77647 14.7164L4.20899 13.3208C4.45592 13.5742 4.27634 13.9999 3.92249 13.9999V11.9999ZM5.38062 11.9999H3.92249V13.9999H5.38062V11.9999ZM6.26786 8.51602C5.35265 9.80996 4.72239 11.2679 4.40195 12.7945L6.3593 13.2053C6.62403 11.9441 7.14467 10.7398 7.90071 9.67093L6.26786 8.51602ZM12.9763 3.97348C10.2632 4.62376 7.87896 6.2382 6.26786 8.51601L7.90071 9.67093C9.23161 7.78925 11.2012 6.45559 13.4425 5.9184L12.9763 3.97348ZM21.0152 4.98143C18.5465 3.68143 15.6895 3.3232 12.9763 3.97348L13.4425 5.9184C15.6838 5.38121 18.044 5.67714 20.0833 6.75105L21.0152 4.98143ZM26.3945 11.0396C25.3956 8.43454 23.4838 6.28143 21.0152 4.98143L20.0833 6.75105C22.1225 7.82497 23.7019 9.60362 24.527 11.7556L26.3945 11.0396ZM26.4444 19.1412C27.4111 16.524 27.3933 13.6447 26.3945 11.0396L24.527 11.7556C25.3522 13.9076 25.3668 16.2862 24.5683 18.4483L26.4444 19.1412ZM21.1402 25.2652C23.5926 23.9349 25.4777 21.7584 26.4444 19.1412L24.5683 18.4483C23.7697 20.6103 22.2124 22.4083 20.1866 23.5072L21.1402 25.2652ZM13.1144 26.3722C15.8354 26.989 18.6878 26.5956 21.1402 25.2652L20.1866 23.5072C18.1607 24.6062 15.8043 24.9312 13.5566 24.4217L13.1144 26.3722ZM7.07144 22.8081C8.65895 24.5895 10.7689 25.8405 13.1144 26.3722L13.5566 24.4217C11.619 23.9825 9.87596 22.949 8.56455 21.4775L7.07144 22.8081ZM15 8.99991C13.8954 8.99991 13 9.89534 13 10.9999H15V8.99991ZM17 10.9999C17 9.89534 16.1046 8.99991 15 8.99991V10.9999H17ZM17 15.5773V10.9999H15V15.5773H17ZM15.5 16.4433L17.964 17.8659L18.964 16.1339L16.5 14.7113L15.5 16.4433ZM17.964 17.8659L19.6961 18.8659C20.2484 17.9094 19.9206 16.6862 18.964 16.1339L17.964 17.8659ZM17.964 17.8659L17.964 17.8659L16.964 19.598C17.9206 20.1503 19.1438 19.8225 19.6961 18.8659L17.964 17.8659ZM17.964 17.8659L15.0063 16.1583L14.0063 17.8903L16.964 19.598L17.964 17.8659ZM15.0063 16.1583L15.0062 16.1574L13.0077 16.0791C12.9796 16.7945 13.3393 17.5052 14.0063 17.8903L15.0063 16.1583ZM13 15.9999C13 16.0792 13.0047 16.1578 13.0138 16.2353L15 16.0012C15 16.0011 15 16.0007 15 15.9999H13ZM13 10.9999V15.9999H15V10.9999H13Z" fill="#FCFCFCFF" mask="url(#path-1-inside-1)"></path>
				</svg>
			</div>
			<div data-tab="vocabulary" class="c12b5a4e69860bc968b47223fd-tab-container-item">
				<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewbox="0 0 30 22" fill="none" id="c12b5a4e69860bc968b47223fd-vocabulary-img" class="c12b5a4e69860bc968b47223fd-tab-container-icon">
				<path d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z" fill="#FCFCFCFF"></path>
				<path d="m32.008 471.199c-.441 22.436 18.344 40.801 40.784 40.801h391.208c8.837 0 16-7.163 16-16v-59c0-2.761-2.239-5-5-5h-403c-21.795 0-39.565 17.471-39.992 39.199z" fill="#FCFCFCFF"></path>
				<path d="m96 395.04v-390.08c0-2.739-2.221-4.96-4.96-4.96h-3.04c-30.928 0-56 25.072-56 56v347.445c0 3.737 3.953 6.082 7.28 4.38 10.006-5.118 21.152-7.825 32.72-7.825h19.04c2.739 0 4.96-2.221 4.96-4.96z" fill="#FCFCFCFF"></path>
				<path d="m464 0h-331.04c-2.739 0-4.96 2.221-4.96 4.96v390.08c0 2.739 2.221 4.96 4.96 4.96h342.04c2.761 0 5-2.239 5-5v-379c0-8.837-7.163-16-16-16zm-176 120h-61.69c3.03 10.47 8.78 19.73 15.39 27.6 3.8-3.82 7-7.71 9.16-11.51 4.37-7.68 14.14-10.37 21.82-6s10.36 14.14 6 21.82c-3.41 5.99-8.05 11.76-13.28 17.17 7.8 5.54 13.62 8.54 13.79 8.63 7.87 3.98 11.05 13.59 7.09 21.47-3.963 7.884-13.553 11.073-21.44 7.13-1.12-.57-11.81-6.02-24.67-16.1-12.52 8.84-23.39 14.71-25.69 15.93-7.814 4.137-17.494 1.146-21.62-6.66-4.13-7.81-1.15-17.49 6.66-21.62 3.86-2.05 10.15-5.71 17.11-10.33-10.64-12.81-19.78-28.71-23.19-47.53h-1.44c-8.84 0-16-7.16-16-16s7.16-16 16-16h32v-8c0-8.84 7.16-16 16-16s16 7.16 16 16v8h32c8.84 0 16 7.16 16 16s-7.16 16-16 16zm133.06 151.18c-8.287 2.763-17.411-1.658-20.24-10.12l-4.35-13.06h-40.94l-4.35 13.06c-2.8 8.38-11.86 12.92-20.24 10.12s-12.91-11.86-10.12-20.24c18.165-54.497 7.313-21.928 29.47-88.41 3.7-11.08 14.03-18.53 25.71-18.53s22.01 7.45 25.71 18.53c18.146 54.447 12.497 37.49 29.47 88.41 2.79 8.38-1.74 17.44-10.12 20.24z" fill="#FCFCFCFF"></path>
				<path d="m366.2 216h19.6l-9.8-29.4z" fill="#FCFCFCFF"></path>
				</svg>
			</div>
			<div data-tab="bookmark" class="c12b5a4e69860bc968b47223fd-tab-container-item">
				<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewbox="0 0 30 26" fill="none" id="c12b5a4e69860bc968b47223fd-bookmark-img" class="c12b5a4e69860bc968b47223fd-tab-container-icon">
				<mask id="mask0" mask-type="alpha" maskunits="userSpaceOnUse" x="0" y="0" width="30" height="26">
				<rect width="30" height="26" fill="#FCFCFCFF"></rect>
				</mask>
				<g mask="url(#mask0)">
				<path d="M14.0469 5.00105C14.3422 4.0713 15.6578 4.07131 15.9531 5.00106L17.4288 9.64786C17.5615 10.0654 17.9505 10.3481 18.3886 10.3451L23.264 10.3127C24.2395 10.3062 24.646 11.5575 23.853 12.1256L19.8897 14.9651C19.5335 15.2202 19.3849 15.6775 19.5231 16.0933L21.0605 20.7201C21.3681 21.6458 20.3038 22.4191 19.5184 21.8405L15.5932 18.9486C15.2404 18.6887 14.7596 18.6887 14.4068 18.9486L10.4816 21.8405C9.69625 22.4191 8.63188 21.6458 8.93949 20.7201L10.4769 16.0933C10.6151 15.6775 10.4665 15.2202 10.1103 14.9651L6.14698 12.1256C5.35398 11.5575 5.76053 10.3062 6.73602 10.3127L11.6114 10.3451C12.0495 10.3481 12.4385 10.0654 12.5712 9.64786L14.0469 5.00105Z" fill="#FCFCFCFF" stroke="#FCFCFCFF"></path>
				</g>
				</svg>
			</div>
			<div data-tab="settings" class="c12b5a4e69860bc968b47223fd-tab-container-item">
				<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewbox="0 0 32 26" fill="none" id="c12b5a4e69860bc968b47223fd-settings-img" class="c12b5a4e69860bc968b47223fd-tab-container-icon">
				<mask id="mask0" mask-type="alpha" maskunits="userSpaceOnUse" x="0" y="0" width="32" height="32">
				<rect width="32" height="32" fill="#FCFCFCFF"></rect>
				</mask>
				<g mask="url(#mask0)">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M18.621,12.397l-0.546-1.295c0,0,1.267-2.859,1.157-2.969l-1.678-1.639c-0.117-0.113-2.978,1.191-2.978,1.191l-1.32-0.533 c0,0-1.169-2.898-1.327-2.898h-2.37c-0.164,0-1.242,2.906-1.242,2.906L6.998,7.695c0,0-2.922-1.242-3.034-1.135L2.287,8.203 c-0.116,0.115,1.219,2.916,1.219,2.916l-0.544,1.295c0,0-2.962,1.139-2.962,1.295v2.322c0,0.16,2.969,1.217,2.969,1.217 l0.545,1.291c0,0-1.268,2.861-1.157,2.971l1.679,1.641c0.113,0.111,2.976-1.195,2.976-1.195l1.321,0.537 c0,0,1.166,2.896,1.326,2.896h2.37c0.163,0,1.244-2.906,1.244-2.906l1.32-0.535c0,0,2.918,1.242,3.031,1.135l1.678-1.643 c0.115-0.111-1.221-2.914-1.221-2.914l0.546-1.295c0,0,2.963-1.143,2.963-1.299v-2.32C21.591,13.453,18.621,12.397,18.621,12.397z M10.795,18.207c-1.905,0-3.459-1.52-3.459-3.387c0-1.865,1.554-3.385,3.459-3.385c1.908,0,3.459,1.52,3.459,3.385 C14.254,16.688,12.703,18.207,10.795,18.207z" fill="#FCFCFCFF"></path>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M28.538,9.693l0.014-0.676c0,0,1.118-1.006,1.091-1.076l-0.414-1.048c-0.031-0.072-1.544-0.062-1.544-0.062l-0.474-0.492 c0,0,0.058-1.502-0.013-1.533l-1.041-0.467c-0.074-0.033-1.117,1.035-1.117,1.035l-0.684-0.027c0,0-1.039-1.119-1.109-1.092 l-1.061,0.393c-0.071,0.025-0.036,1.518-0.036,1.518l-0.495,0.463c0,0-1.523-0.082-1.554-0.014l-0.457,1.02 c-0.032,0.072,1.065,1.119,1.065,1.119l-0.014,0.672c0,0-1.117,1.008-1.09,1.078l0.415,1.049c0.03,0.07,1.543,0.059,1.543,0.059 l0.473,0.494c0,0-0.055,1.502,0.016,1.533l1.041,0.465c0.072,0.033,1.116-1.029,1.116-1.029l0.685,0.023 c0,0,1.037,1.119,1.109,1.094l1.058-0.393c0.073-0.025,0.038-1.52,0.038-1.52l0.494-0.459c0,0,1.523,0.078,1.555,0.01l0.457-1.02 C29.634,10.74,28.538,9.693,28.538,9.693z M26.145,9.9c-0.367,0.82-1.347,1.184-2.187,0.809c-0.836-0.373-1.22-1.346-0.853-2.168 c0.365-0.818,1.348-1.18,2.184-0.807C26.126,8.111,26.51,9.082,26.145,9.9z" fill="#FCFCFCFF"></path>
				</g></svg>
			</div>
		</div>
	</div>
	<div class="c12b5a4e69860bc968b47223fd-header-container" id="c12b5a4e69860bc968b47223fd-setting-translator-header" style="display: none">
		<div class="c12b5a4e69860bc968b47223fd-class-trn-close-div">
			<img src="chrome-extension://mnlohknjofogcljbcknkakphddjpijak/assets/Images/back.svg" alt="close button">
		</div>
		<h2 class="c12b5a4e69860bc968b47223fd-translator-setting-headline">Settings</h2>
	</div>
</div>
<div id="chat-widget-container" style="opacity: 1; visibility: visible; z-index: 2147483639; position: fixed; bottom: 0px; width: 84px; height: 84px; max-width: 100%; max-height: calc(100% + 0px); min-height: 0px; min-width: 0px; background-color: transparent; border: 0px; overflow: hidden; right: 0px; transition: none !important;">
	<iframe allow="clipboard-read; clipboard-write; autoplay; microphone *; camera *; display-capture *; picture-in-picture *; fullscreen *;" src="https://secure.livechatinc.com/customer/action/open_chat?license_id=15710244&amp;group=0&amp;embedded=1&amp;widget_version=3&amp;unique_groups=0&amp;use_parent_storage=1" allowtransparency="true" id="chat-widget" name="chat-widget" title="LiveChat chat widget" scrolling="no" style="width: 100%; height: 100%; min-height: 0px; min-width: 0px; margin: 0px; padding: 0px; background-image: none; background-position: 0% 0%; background-size: initial; background-attachment: scroll; background-origin: initial; background-clip: initial; background-color: rgba(0, 0, 0, 0); border-width: 0px; float: none; color-scheme: normal; position: absolute; inset: 0px; transition: none !important; display: none; visibility: hidden;">
	</iframe>
	<iframe allowtransparency="true" id="chat-widget-minimized" name="chat-widget-minimized" title="LiveChat chat widget" scrolling="no" style="width: 100%; height: 100%; min-height: 0px; min-width: 0px; margin: 0px; padding: 0px; background-image: none; background-position: 0% 0%; background-size: initial; background-attachment: scroll; background-origin: initial; background-clip: initial; background-color: rgba(0, 0, 0, 0); border-width: 0px; float: none; color-scheme: normal; display: block;">
	</iframe>
</div>
</template>
<script>
export default {
  name: 'indexPage',
  
}
</script>
<style scoped>
.cls-1{fill:#858e99;}
				</style>
