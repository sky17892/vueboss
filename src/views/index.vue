<template>
  <div class="wrap" style="overflow: hidden;">
	<!--<div class="pop_blind_box dspn">
		<div class="popup_box popup_21 ui-draggable ui-draggable-handle dspn" style="left: 650px; top: 200px; z-index: 11001; cursor: move;">
			<div class="popup_btn_box">
				<span class="btn_one_day" data-id="21"><i class="fas fa-ban fa-rotate-90" aria-hidden="true"></i> 그만보기</span>
				<span class="btn_close" data-id="21"><i class="fas fa-times" aria-hidden="true"></i></span>
			</div>
			<div class="popup_content" style="width:300px;height:600px">
				<p style="text-align:center">
					<img src="https://boss-1177.com/static/data/upload/images/b1.png" style="height:548px; width:350px">
				</p>
			</div>
		</div>
		<div class="popup_box popup_26 ui-draggable ui-draggable-handle dspn" style="left: 1250px; top: 200px; z-index: 11003; cursor: move;">
			<div class="popup_btn_box">
				<span class="btn_one_day" data-id="26"><i class="fas fa-ban fa-rotate-90" aria-hidden="true"></i> 그만보기</span>
				<span class="btn_close" data-id="26"><i class="fas fa-times" aria-hidden="true"></i></span>
			</div>
			<div class="popup_content" style="width:300px;height:600px">
				<p style="text-align:center">
					<img src="https://boss-1177.com/static/data/upload/images/1(1).png" style="height:548px; width:350px">
				</p>
			</div>
		</div>
		<div class="popup_box popup_28 ui-draggable ui-draggable-handle dspn" style="left: 950px; top: 200px; z-index: 11002; cursor: move;">
			<div class="popup_btn_box">
				<span class="btn_one_day" data-id="28"><i class="fas fa-ban fa-rotate-90" aria-hidden="true"></i> 그만보기</span>
				<span class="btn_close" data-id="28"><i class="fas fa-times" aria-hidden="true"></i></span>
			</div>
			<div class="popup_content" style="width:300px;height:600px">
				<p style="text-align:center">
					<img src="https://boss-1177.com/static/data/upload/images/%EB%B3%B4%EC%8A%A4(1).png" style="height:548px; width:350px">
				</p>
			</div>
		</div>
		<div class="popup_box popup_31 ui-draggable ui-draggable-handle dspn" style="left: 350px; top: 200px; z-index: 11000; cursor: move;">
			<div class="popup_btn_box">
				<span class="btn_one_day" data-id="31"><i class="fas fa-ban fa-rotate-90" aria-hidden="true"></i> 그만보기</span>
				<span class="btn_close" data-id="31"><i class="fas fa-times" aria-hidden="true"></i></span>
			</div>
			<div class="popup_content" style="width:300px;height:600px">
				<p>
					<img src="https://boss-1177.com/static/data/upload/images/b3.png">
				</p>
			</div>
		</div>
	</div>-->
  <div ref="pop_login" class="pop_login" :style="{ display: isLoginVisible ? 'block' : 'none' }">
		<div class="pop_login_box">
			<div class="pop_login_ttl">
				<img src="https://boss-1177.com/static/img/logo.png" alt="">
				<span class="close_login_pop" @click="hideLogin"><i class="fas fa-times" aria-hidden="true"></i></span>
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
				<router-link to="/indexsss"><button class="pop_login_btn" tabindex="3"><i class="fas fa-sign-in-alt" aria-hidden="true"></i> 로그인</button></router-link>
				<span class="btn_pop_join join_btn" @click="showJoin">회원가입</span>
				<span class="btn_pop_tel tel_btn"><i class="fas fa-brands fa-telegram" aria-hidden="true"></i> 텔레그램 문의</span>
			</form>
		</div>
	</div>
	<div ref="pop_join" class="pop_join" :style="{ display: isJoinVisible ? 'block' : 'none',  }">
		<div class="pop_join_box">
			<div class="pop_join_ttl">
				<img src="https://boss-1177.com/static/img/logo.png" alt="">
				<span class="close_join_pop" @click="hideJoin"><i class="fas fa-times" aria-hidden="true"></i></span>
			</div>
			<div class="pop_join_info">
				 코드확인
			</div>
			<input type="text" name="code" required="" class="ip_id tc ip_code" value="" v-model="code" placeholder="추천코드">
			<span class="ip_sm next_step" @click="showJoin2">다음단계로</span>
			<div class="code_info">
				 가입 코드 없을 시 미기재
			</div>
		</div>
	</div>
	<div class="refresh_btn only_mobile">
		<a href="javascript:void(0);" @click="refreshPage">
		<i class="fas fa-redo-alt" aria-hidden="true"></i>
		</a>
	</div>
	<div class="telegram_btn tel_btn only_mobile">
		<a href="https://t.me/boss365cs" target="_BLANK"><img src="https://boss-1177.com/static/img/icon_tele.png?v=4"></a>
	</div>
	<div ref="snb_btn" :class="['snb_btn', { menu_opened: isMenuOpened }]" @click="toggleMenu">
		<div class="snb_in">
			<div class="snb_arrow">
				<i class="fas fa-bars" aria-hidden="true"></i>
			</div>
		</div>
	</div>
	<div class="snb_left" :class="{ menu_opened: isMenuOpened }">
		<ul>
			<li>
			<a href="#" @click="showLogin" class="btn_gray mg_link"><i class="fa fa-plus" aria-hidden="true"></i> 충전</a>
			</li>
			<li>
			<a href="#" @click="showLogin" class="btn_gray mg_link"><i class="fa fa-minus" aria-hidden="true"></i> 환전</a>
			</li>
			<li>
			<a href="#" @click="showLogin" class="btn_gray mg_link"><i class="fas fa-exclamation-circle" aria-hidden="true"></i> 문의</a>
			</li>
			<li>
			<a href="#" @click="showLogin">해외형스포츠</a>
			</li>
			<li>
			<a href="#" @click="showLogin">국내형스포츠</a>
			</li>
			<li>
			<a href="#" @click="showLogin">LIVE-스포츠</a>
			</li>
			<li>
			<a href="#" @click="showLogin">스페셜</a>
			</li>
			<li>
			<a href="#" @click="showLogin">E-스포츠</a>
			</li>
			<li>
			<span class="mg_link open_revolution">레볼루션홀덤</span>
			</li>
			<li>
			<a href="#" @click="showLogin">가상스포츠</a>
			</li>
			<li>
			<a href="#" @click="showLogin">미니게임</a>
			</li>
			<li>
			<a href="#" @click="showLogin" class="mg_link">토큰게임</a>
			</li>
			<li>
			<a href="#" @click="showLogin">페이백</a>
			</li>
			<li>
			<a href="#" @click="showLogin" class="mg_link">머니내역</a>
			</li>
			<li>
			<a href="#" @click="showLogin" class="mg_link">배팅내역</a>
			</li>
			<li>
			<a href="#" @click="showLogin" class="mg_link">출석부</a>
			</li>
			<li>
			<a href="#" @click="showLogin" class="mg_link">공지/규정</a>
			</li>
			<li>
			<a href="#" @click="showLogin" class="mg_link">이벤트</a>
			</li>
		</ul>
		<div class="snb_btn_img">
			<a href="#" @click="showLogin" class="mg_link">
			<span class="btn_img_ttl dspn">카지노</span>
			<img src="https://boss-1177.com/static/img/btn_casino.jpg" alt="">
			</a>
			<a href="#" @click="showLogin" class="mg_link">
			<span class="btn_img_ttl dspn">슬롯</span>
			<img src="https://boss-1177.com/static/img/btn_slot.jpg" alt="">
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
				<img src="https://boss-1177.com/static/img/icon_soccer.png" alt="">
				</span>
				<span class="snb_sp_name">축구</span>
				<span class="snb_sp_cnt">134</span>
			</div>
			<div class="btn_snb_sp btn_sp_basket" data-spo="basket" data-stat="close">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_basket.png" alt="">
				</span>
				<span class="snb_sp_name">농구</span>
				<span class="snb_sp_cnt">11</span>
			</div>
			<div class="btn_snb_sp btn_sp_baseball" data-spo="baseball" data-stat="close">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_baseball.png" alt="">
				</span>
				<span class="snb_sp_name">야구</span>
				<span class="snb_sp_cnt">11</span>
			</div>
			<div class="btn_snb_sp btn_sp_volley" data-spo="volley" data-stat="close">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_volley.png" alt="">
				</span>
				<span class="snb_sp_name">배구</span>
				<span class="snb_sp_cnt">14</span>
			</div>
			<div class="btn_snb_sp btn_sp_hockey" data-spo="hockey" data-stat="close">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_hockey.png" alt="">
				</span>
				<span class="snb_sp_name">아이스 하키</span>
				<span class="snb_sp_cnt">23</span>
			</div>
			<div class="btn_snb_sp btn_sp_tenis" data-spo="tenis" data-stat="close">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_tenis.png" alt="">
				</span>
				<span class="snb_sp_name">테니스</span>
				<span class="snb_sp_cnt">66</span>
			</div>
			<div class="btn_snb_sp btn_sp_handball" data-spo="handball" data-stat="close">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_handball.png" alt="">
				</span>
				<span class="snb_sp_name">핸드볼</span>
				<span class="snb_sp_cnt">5</span>
			</div>
			<div class="btn_snb_sp btn_sp_pp" data-spo="pp" data-stat="close">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_pp.png" alt="">
				</span>
				<span class="snb_sp_name">탁구</span>
				<span class="snb_sp_cnt">153</span>
			</div>
			<div class="btn_snb_sp btn_sp_mma" data-spo="mma" data-stat="close">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_mma.png" alt="">
				</span>
				<span class="snb_sp_name">MMA</span>
				<span class="snb_sp_cnt">0</span>
			</div>
			<div class="btn_snb_sp btn_sp_boxing" data-spo="boxing" data-stat="close">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_boxing.png" alt="">
				</span>
				<span class="snb_sp_name">권투</span>
				<span class="snb_sp_cnt">0</span>
			</div>
			<div class="btn_snb_sp btn_sp_dart" data-spo="dart" data-stat="close">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_dart.png" alt="">
				</span>
				<span class="snb_sp_name">다트</span>
				<span class="snb_sp_cnt">15</span>
			</div>
			<div class="btn_snb_sp btn_sp_egame" data-spo="egame" data-stat="close">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_egame.png" alt="">
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
				<img src="https://boss-1177.com/static/img/icon_favor.png" alt="">
				최신 인기게임
			</div>
			<ul>
				<li class="five_game" data-str="뉴욕메츠">
				<span class="five_time">08:15</span>
				<span class="five_sport"><img src="https://boss-1177.com/static/img/icon_baseball.png" alt=""></span>
				<div class="five_team_box">
					<span class="five_team_home"><img src="https://image.turnkeyapi.com/uof_team/medium/3629.png" onerror="this.src='/static/img/noimg.png'"> 뉴욕메츠</span>
					<span class="five_team_away"><img src="https://image.turnkeyapi.com/uof_team/medium/3635.png" onerror="this.src='/static/img/noimg.png'"> 필라델피아 필리스</span>
				</div>
				</li>
				<li class="five_game" data-str="산호세 샤크스">
				<span class="five_time">09:00</span>
				<span class="five_sport"><img src="https://boss-1177.com/static/img/icon_hockey.png" alt=""></span>
				<div class="five_team_box">
					<span class="five_team_home"><img src="https://image.turnkeyapi.com/uof_team/medium/3696.png" onerror="this.src='/static/img/noimg.png'"> 산호세 샤크스</span>
					<span class="five_team_away"><img src="https://image.turnkeyapi.com/uof_team/medium/344158.png" onerror="this.src='/static/img/noimg.png'"> 베거스</span>
				</div>
				</li>
				<li class="five_game" data-str="라스베이거스 에이시스">
				<span class="five_time">11:00</span>
				<span class="five_sport"><img src="https://boss-1177.com/static/img/icon_basket.png" alt=""></span>
				<div class="five_team_box">
					<span class="five_team_home"><img src="https://image.turnkeyapi.com/uof_team/medium/35550.png" onerror="this.src='/static/img/noimg.png'"> 라스베이거스 에이시스</span>
					<span class="five_team_away"><img src="https://image.turnkeyapi.com/uof_team/medium/3448.png" onerror="this.src='/static/img/noimg.png'"> 시애틀 스톰</span>
				</div>
				</li>
				<li class="five_game" data-str="Seattle Kraken">
				<span class="five_time">11:00</span>
				<span class="five_sport"><img src="https://boss-1177.com/static/img/icon_hockey.png" alt=""></span>
				<div class="five_team_box">
					<span class="five_team_home"><img src="https://image.turnkeyapi.com/uof_team/medium/794340.png" onerror="this.src='/static/img/noimg.png'"> Seattle Kraken</span>
					<span class="five_team_away"><img src="https://image.turnkeyapi.com/uof_team/medium/3679.png" onerror="this.src='/static/img/noimg.png'"> 캘거리 플레임스</span>
				</div>
				</li>
				<li class="five_game" data-str="주니치 ">
				<span class="five_time">14:00</span>
				<span class="five_sport"><img src="https://boss-1177.com/static/img/icon_baseball.png" alt=""></span>
				<div class="five_team_box">
					<span class="five_team_home"><img src="https://image.turnkeyapi.com/uof_team/medium/67104.png" onerror="this.src='/static/img/noimg.png'"> 주니치 </span>
					<span class="five_team_away"><img src="https://image.turnkeyapi.com/uof_team/medium/67106.png" onerror="this.src='/static/img/noimg.png'"> 히로시마 </span>
				</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="top_inner">
		<div class="top_info_box tr">
			<div class="logo_gnb">
				<a href="/" class="no_pop"><img src="https://boss-1177.com/static/img/logo.png" alt=""></a>
			</div>
			<div class="top_right_box">
				<a href="#" @click="showLogin" class="mg_link"><i class="fa fa-plus" aria-hidden="true"></i> 충전</a>
				<a href="#" @click="showLogin" class="mg_link"><i class="fa fa-minus" aria-hidden="true"></i> 환전</a>
				<a href="#" @click="showLogin" class="mg_link"><i class="far fa-calendar-check" aria-hidden="true"></i> 이벤트</a>
				<a href="#" @click="showLogin" class="mg_link"><i class="fas fa-vote-yea" aria-hidden="true"></i> 게시판 이벤트</a>
				<a href="#" @click="showLogin" class="mg_link"><i class="fas fa-exclamation-circle" aria-hidden="true"></i> 공지/규정</a>
				<a href="#" @click="showLogin" class="mg_link"><i class="fa fa-paper-plane" aria-hidden="true"></i> 쪽지</a>
				<a href="#" @click="showLogin" class="mg_link"><i class="fa fa-pencil-square" aria-hidden="true"></i> 문의</a>
				<a href="#" @click="showLogin" class="mg_link"><i class="fas fa-gift" aria-hidden="true"></i> 룰렛</a>
				<a href="#" @click="showLogin"><i class="fas fa-hand-holding-usd" aria-hidden="true"></i> 페이백</a>
				<span class="mission" data-type="daily_dp_cnt"><i class="fas fa-hand-holding-usd" aria-hidden="true"></i> 충횟수</span>
				<span class="mission" data-type="daily_dp_amt"><i class="fas fa-hand-holding-usd" aria-hidden="true"></i> 충금액</span>
				<a href="#" @click="showLogin" class="mg_link"><i class="fas fa-clipboard-list" aria-hidden="true"></i> 머니내역</a>
				<a href="#" @click="showLogin" class="mg_link"><i class="fas fa-check" aria-hidden="true"></i> 배팅내역</a>
				<span class="tel_btn"><i class="fas fa-brands fa-telegram" aria-hidden="true"></i> 텔레그램</span>
				<span class="btn_top_login mg_link" @click="showLogin">로그인</span>
				<span class="btn_top_join join_btn no_pop" @click="showJoin">회원가입</span>
			</div>
		</div>
		<div class="gnb_box">
			<div class="gnb_menu_box">
				<ul>
					<li>
					<a href="#" @click="showLogin">해외형스포츠</a>
					</li>
					<li>
					<a href="#" @click="showLogin">국내형스포츠</a>
					</li>
					<li>
					<a href="#" @click="showLogin">스페셜</a>
					</li>
					<li>
					<a href="#" @click="showLogin">LIVE 스포츠</a>
					</li>
					<li>
					<a href="#" @click="showLogin">E-스포츠</a>
					</li>
					<li>
					<span class="mg_link open_revolution">레볼루션홀덤</span>
					</li>
					<li>
					<a href="#" @click="showLogin">가상스포츠</a>
					</li>
					<li>
					<a href="#" @click="showLogin">미니게임</a>
					</li>
					<li>
					<a href="#" @click="showLogin" class="mg_link">토큰게임</a>
					</li>
					<li>
					<a href="#" @click="showLogin" class="mg_link">정식카지노</a>
					</li>
					<li>
					<a href="#" @click="showLogin" class="mg_link">슬롯머신</a>
					</li>
				</ul>
			</div>
		</div>
	</div> 
	<div ref="bet_slip bet_slip_on" class="bet_slip bet_slip_on" :style="{ display: isLoginVisible2 ? 'block' : 'none' }">
		<div class="bet_cart">
			<div class="bc_ttl">
				<input type="hidden" name="auto_ratio" class="auto_ratio" value="">
				<div class="controll_box swc_off" data-type="auto_ratio" data-stat="">
					<div class="circle">
					</div>
				</div>
				실시간배당 <span class="bc_da"><i class="fas fa-trash-alt" aria-hidden="true"></i> <button @click="hideLogin2">Delete All</button></span>
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
			</a><img src="https://boss-1177.com/static/data/upload/banner/보스_카카오톡_배너.gif" alt="">
			<a href="https://보스사이트.COM" target="_BLANK"><img src="/static/data/upload/banner/3001001.gif" alt="">
			</a><a href="https://bigwin.livenst.com/boss/livescore/livescore/" target="_BLANK"><img src="/static/data/upload/banner/300x100-보스생중계TV.gif" alt="">
			</a><a href="https://www.rotowire.com " target="_BLANK"><img src="/static/data/upload/banner/300x100-실시간라인업확인.gif" alt="">
			</a><a href="https://xn--gl-qv9iw2zsia.com/" target="_NEW"><img src="/static/img/banner_solution.png" alt=""></a>
		</div>
	</div>
	<div class="btn_bet_slip_open open_bet_slip_btn">
		<span class="opened dspn">
		<img src="https://boss-1177.com/static/img/cart_count.png" alt="">
		<span class="count_bet">0</span>
		</span>
		<span class="closed"><i class="far fa-window-close" aria-hidden="true"></i> CLOSE</span>
	</div>
	<div class="contents contents_nouser">
		<div class="contents_join_box only_mobile">
			<span class="login_btn btn_ct_login"><i class="fas fa-sign-in-alt" aria-hidden="true"></i> <button @click="showLogin">로그인</button></span>
			<span class="btn_ct_join join_btn"><i class="fas fa-user" aria-hidden="true"></i> <button @click="showJoin">회원가입</button></span>
		</div>
		<div class="inner">
			<div class="mb_pc_box only_pc">
				<div class="mb_box mb_box_left">
					<img src="https://boss-1177.com/static/img/bg_main_banner.png" alt="">
					<img src="https://boss-1177.com/static/data/upload/banner/대문.png" class="main_banner mb_01" data-od="1" alt="">
				</div>
				<div class="mb_box mb_box_right">
					<img src="https://boss-1177.com/static/img/bg_main_banner.png" alt="">
					<img src="https://boss-1177.com/static/data/upload/banner/우측_3.png" class="main_banner mb_11" data-od="1" alt="" style="left: -100%;">
					<img src="https://boss-1177.com/static/data/upload/banner/boss2.png" class="main_banner mb_12" data-od="2" alt="" style="left: -100%;">
					<img src="https://boss-1177.com/static/data/upload/banner/보스대문.png" class="main_banner mb_13" data-od="3" alt="" style="left: -100%;">
					<img src="https://boss-1177.com/static/data/upload/banner/b4.png" class="main_banner mb_14" data-od="4" alt="" style="left: 0px;">
					<div class="mb_ctr_arr2 mb_arr_left" data-type="left">
						<i class="fas fa-chevron-left" aria-hidden="true"></i>
					</div>
					<div class="mb_ctr_arr2 mb_arr_right" data-type="right">
						<i class="fas fa-chevron-right" aria-hidden="true"></i>
					</div>
					<div class="mb_ctr_box">
						<ul>
							<li class="btn_mb_ctr2 ctr_11 btn_mb_ctr_on" data-id="1"></li>
							<li class="btn_mb_ctr2 ctr_12" data-id="2"></li>
							<li class="btn_mb_ctr2 ctr_13" data-id="3"></li>
							<li class="btn_mb_ctr2 ctr_14" data-id="4"></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="mb_box only_mobile">
				<img src="https://boss-1177.com/static/img/bg_main_banner.png" alt="">
				<img src="https://boss-1177.com/static/data/upload/banner/대문.png" class="main_banner mb_21" data-od="1" alt="" style="left: -100%;">
				<img src="https://boss-1177.com/static/data/upload/banner/우측_3.png" class="main_banner mb_22" data-od="2" alt="" style="left: 0px;">
				<img src="https://boss-1177.com/static/data/upload/banner/boss2.png" class="main_banner mb_23" data-od="3" alt="" style="left: -100%;">
				<img src="https://boss-1177.com/static/data/upload/banner/보스대문.png" class="main_banner mb_24" data-od="4" alt="" style="left: -100%;">
				<img src="https://boss-1177.com/static/data/upload/banner/b4.png" class="main_banner mb_25" data-od="5" alt="" style="left: -100%;">
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
						<a href="#" @click="showLogin" class="view_more mg_link">MORE</a>
					</div>
					<div class="main_bbs_list only_pc">
						<ul>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/notice/레벨별등급혜택.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 레벨별등급혜택</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/notice/양방베팅강력제재안내.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 양방베팅강력제재안내</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/notice/롤링규정안내.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 롤링규정안내</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/notice/미니게임토큰게임규정.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 미니&amp;토큰게임규정</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/notice/스포츠통합규정.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 스포츠통합규정</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/notice/입금규정안내.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 입금규정안내</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/notice/bosslevel.png" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 레벨별콤프안내</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/notice/충전및환전규정.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 충전 및 환전규정</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/notice/카지노슬롯게임규정.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 카지노&amp;슬롯규정</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/notice/1boss.png" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>RULE -</strong></span> 레볼루션 홀덤 규정</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="/customer/nt_view/25">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/notice/2boss.png" alt=""></span>
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
						<a href="#" @click="showLogin" class="view_more mg_link">MORE</a>
					</div>
					<div class="main_bbs_list only_pc">
						<ul>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/보스_카지노연패_썸네일.png" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT - </strong></span>카지노 연패 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/보스_콤프.png" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT - </strong></span> 레벨별 콤프 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/3boss.png" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT - </strong></span> 레볼루션 포인트 더블 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/b1.png" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT - </strong></span> 프리스핀 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/eventboss.png" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 슬롯당일페이백이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/썸네일(300x300)-첫충전매충전이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 첫충전 매충전 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/bosss.png" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 신규가입 입플 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/복귀자이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 복귀자이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/페이백이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 페이백이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/채널방입장이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 채널방 입장 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/일일누적금액이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 누적금액이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/일일누적충전횟수이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 충전횟수이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/photo_2024-08-17_03-18-29.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 심야이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/미니게임연승연패이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 미니연승&amp;연패 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/보스썸네일-슬롯잭팟이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 슬롯잭팟이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/리뷰작성이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 리뷰작성이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/생일이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 생일이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/스포츠다폴더이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 스포츠다폴더이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/스포츠한폴낙올미당이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 한폴낙&amp;올미당이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/연속출석이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 연속출석이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/제보이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 제보이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/VIP리치레벨이동이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa21"><strong>EVENT -</strong></span> VIP리치레벨이동이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/파격지인추천이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 지인추천이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
							<li>
							<a href="#" @click="showLogin">
							<span class="main_thumb"><img src="https://boss-1177.com/static/data/upload/event/레벨업이벤트.jpg" alt=""></span>
							<span class="main_list_ttl"><span style="color:#e5aa06"><strong>EVENT -</strong></span> 레벨업 이벤트</span>
							<span class="main_list_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
							</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="main_middle_box only_pc">
				<a href="#" @click="showLogin">
				<img src="https://boss-1177.com/static/img/main/main_middle_sports.png" alt="">
				<span class="hoverb">
				<img src="https://boss-1177.com/static/img/logo.png" alt="">
				<span class="mmb_in_ttl">스포츠</span>
				<span class="mmb_in_btn">배팅하러 가기</span>
				</span>
				</a>
				<a href="#" @click="showLogin">
				<img src="https://boss-1177.com/static/img/main/main_middle_inplay.png" alt="">
				<span class="hoverb">
				<img src="https://boss-1177.com/static/img/logo.png" alt="">
				<span class="mmb_in_ttl">라이브</span>
				<span class="mmb_in_btn">배팅하러 가기</span>
				</span>
				</a>
				<a href="#" @click="showLogin">
				<img src="https://boss-1177.com/static/img/main/main_middle_mini.png" alt="">
				<span class="hoverb">
				<img src="https://boss-1177.com/static/img/logo.png" alt="">
				<span class="mmb_in_ttl">미니게임</span>
				<span class="mmb_in_btn">배팅하러 가기</span>
				</span>
				</a>
				<a href="#" @click="showLogin" class="mg_link">
				<img src="https://boss-1177.com/static/img/main/main_middle_casino.png" alt="">
				<span class="hoverb">
				<img src="https://boss-1177.com/static/img/logo.png" alt="">
				<span class="mmb_in_ttl">카지노</span>
				<span class="mmb_in_btn">배팅하러 가기</span>
				</span>
				</a>
				<a href="#" @click="showLogin">
				<img src="https://boss-1177.com/static/img/main/main_middle_vspo.png" alt="">
				<span class="hoverb">
				<img src="https://boss-1177.com/static/img/logo.png" alt="">
				<span class="mmb_in_ttl">슬롯</span>
				<span class="mmb_in_btn">배팅하러 가기</span>
				</span>
				</a>
			</div>
			<div class="cb">
			</div>
			<div class="main_btn_box only_mobile">
				<a href="#" @click="showLogin"><img src="https://boss-1177.com/static/img/main/icon_sports.png" alt="">해외형스포츠</a>
				<a href="#" @click="showLogin"><img src="https://boss-1177.com/static/img/main/icon_korean.png" alt="">국내형스포츠</a>
				<a href="#" @click="showLogin"><img src="https://boss-1177.com/static/img/main/icon_live.png" alt="">LIVE스포츠</a>
				<a href="#" @click="showLogin" class=" mg_link"><img src="https://boss-1177.com/static/img/main/icon_esports.png" alt="">E스포츠</a>
				<a href="#" @click="showLogin"><img src="https://boss-1177.com/static/img/main/icon_special.png" alt="">스페셜</a>
				<a href="#" @click="showLogin"><img src="https://boss-1177.com/static/img/main/icon_vspo.png" alt="">가상스포츠</a>
				<a href="#" class="open_revolution mg_link"><img src="https://boss-1177.com/static/img/main/icon_holdem.png" alt="">홀덤</a>
				<a href="#" @click="showLogin" class="mg_link"><img src="https://boss-1177.com/static/img/main/icon_casino.png" alt="">카지노</a>
				<a href="#" @click="showLogin" class="mg_link"><img src="https://boss-1177.com/static/img/main/icon_slot.png" alt="">슬롯</a>
				<a href="#" @click="showLogin"><img src="https://boss-1177.com/static/img/main/icon_mini.png" alt="">미니게임</a>
				<a href="#" @click="showLogin" class=" mg_link"><img src="https://boss-1177.com/static/img/main/icon_pbg.png?v=2" alt="">파워볼</a>
				<a href="#" @click="showLogin" class="mg_link"><img src="https://boss-1177.com/static/img/main/icon_att.png" alt="">출석체크</a>
				<a href="#" @click="showLogin" class="mg_link"><img src="https://boss-1177.com/static/img/main/icon_cs.png" alt="">고객센터</a>
				<a href="#" @click="showLogin" class=" mg_link"><img src="https://boss-1177.com/static/img/main/icon_notice.png" alt="">공지/규정</a>
				<a href="#" @click="showLogin" class=" mg_link"><img src="https://boss-1177.com/static/img/main/icon_event.png" alt="">이벤트</a>
				<a href="#" @click="showLogin" class="mg_link"><img src="https://boss-1177.com/static/img/main/icon_deposit.png" alt="">충전</a>
				<a href="#" @click="showLogin" class="mg_link"><img src="https://boss-1177.com/static/img/main/icon_withdrawal.png" alt="">환전</a>
				<a href="#" @click="showLogin" class=" mg_link"><img src="https://boss-1177.com/static/img/main/icon_bet.png" alt="">배팅내역</a>
			</div>
			<div class="banner_box only_mobile">
				<a href="https://t.me/boss365cs" target="_BLANK"><img src="https://boss-1177.com/static/data/upload/banner/(보스)300x120-보스공식텔레그램.gif" alt="">
				</a><img src="https://boss-1177.com/static/data/upload/banner/보스_카카오톡_배너.gif" alt="">
				<a href="https://보스사이트.COM" target="_BLANK"><img src="https://boss-1177.com/static/data/upload/banner/3001001.gif" alt="">
				</a><a href="https://bigwin.livenst.com/boss/livescore/livescore/" target="_BLANK"><img src="https://boss-1177.com/static/data/upload/banner/300x100-보스생중계TV.gif" alt="">
				</a><a href="https://www.rotowire.com " target="_BLANK"><img src="https://boss-1177.com/static/data/upload/banner/300x100-실시간라인업확인.gif" alt="">
				</a><a href="https://xn--gl-qv9iw2zsia.com/" target="_NEW"><img src="https://boss-1177.com/static/img/banner_solution.png" alt=""></a>
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
	<div ref="pop_join2" class="pop_join" :style="{ display: isJoinVisible2 ? 'block' : 'none', zIndex: 1000, marginTop: '50px' }">
	<div class="pop_join_box">
		<div class="pop_join_ttl">
			<img src="https://boss-1177.com/static/img/logo.png" alt="">
			<span class="close_join_pop" @click="hideJoin"><i class="fas fa-times" aria-hidden="true"></i></span>
		</div>
		<div class="pop_join_info">
			 정보입력
		</div>
		<form action="http://localhost:3000/customer/register_update" method="get" class="join_form">
									
			<div class="pop_join_sub_ttl">
				아이디
			</div>
			<div class="pop_join_input_box">
				<input type="text" name="user_id" class="ip_join_st" placeholder="아이디" autocomplete="off" required="">
				<div class="chk_id">
				</div>
			</div>
			<div class="pop_join_sub_ttl">
				닉네임
			</div>
			<div class="pop_join_input_box">
				<input type="text" name="user_nick" class="ip_join_st" placeholder="닉네임" required="">
				<div class="chk_nick">
				</div>
			</div>
			<div class="pop_join_sub_ttl">
				비밀번호
			</div>
			<div class="pop_join_input_box">
				<input type="password" name="user_pw" class="ip_join_st" placeholder="비밀번호" autocomplete="off" required="">
			</div>
			<div class="pop_join_sub_ttl">
				비밀번호 확인
			</div>
			<div class="pop_join_input_box">
				<input type="password" name="user_pw_re" class="ip_join_st" placeholder="비밀번호 확인" required="">
			</div>
			<div class="pop_join_input_box">
			</div>
			<div class="pop_join_input_box t_info">
				 영문+숫자 6자리 이상 설정해야하며<br>
				 동일문자 4회 및 아이디는 포함 불가
			</div>
			<div class="pop_join_sub_ttl">
				연락처
			</div>
			<div class="pop_join_input_box">
				<!--<select name="hp1" class="hp" id="">
					<option value="010">010</option>
					<option value="011">011</option>
					<option value="016">016</option>
					<option value="017">017</option>
					<option value="018">018</option>
					<option value="019">019</option>
				</select>
				<input type="text" name="hp2" class="hp" required="">
				<input type="text" name="hp3" class="hp" required="">-->
				<input type="text" name="hp" class="bank_name ip_join_st" required="" placeholder="휴대폰번호를 입력해주세요">
			</div>
			<div class="pop_join_sub_ttl">
				인증번호
			</div>
			<div class="pop_join_input_box">
				<input type="hidden" name="hp_chk_crypt">
				<span class="btn_mid btn_delete send_sms">인증문자발송</span>
				<input type="text" name="hp_chk" class="dspn ip_join_st" required="" placeholder="1분내로 입력해주세요">
			</div>
			<div class="pop_join_sub_ttl">
				은행
			</div>
			<div class="pop_join_input_box">
				<input type="hidden" name="mb_bank" class="mb_bank" value="">
				<input type="hidden" name="mb_bank_code" class="mb_bank_code" value="">
				<select name="bank_name" class="bank_name ip_join_st" required="">
					<option value="">선택하세요</option>
					<option value="24">토스뱅크</option>
					<option value="11">카카오뱅크</option>
					<option value="0">국민은행</option>
					<option value="2">신한은행</option>
					<option value="6">기업은행</option>
					<option value="7">농협</option>
					<option value="8">단위농협</option>
					<option value="1">우리은행</option>
					<option value="3">하나은행</option>
					<option value="13">신협</option>
					<option value="12">수협</option>
					<option value="4">SC제일은행</option>
					<option value="5">씨티은행</option>
					<option value="58">산업은행</option>
					<option value="18">광주은행</option>
					<option value="17">경남은행</option>
					<option value="21">제주은행</option>
					<option value="19">대구은행</option>
					<option value="22">우체국</option>
					<option value="20">전북은행</option>
					<option value="16">부산은행</option>
					<option value="9">새마을금고</option>
					<option value="10">케이뱅크</option>
					<option value="65">HSBC은행</option>
					<option value="35">하이투자증권</option>
					<option value="33">우리투자증권</option>
					<option value="31">대우증권</option>
					<option value="29">현대증권</option>
					<option value="27">jp모간</option>
					<option value="23">한국투자증권</option>
					<option value="37">키움증권</option>
					<option value="15">상호저축은행</option>
					<option value="70">토스증권</option>
					<option value="66">도이치은행</option>
					<option value="64">BOA은행</option>
					<option value="59">모건스탠리</option>
					<option value="53">KB증권</option>
					<option value="49">LIG투자증권</option>
					<option value="47">부국증권</option>
					<option value="43">신한금융투자</option>
					<option value="41">한화투자증권</option>
					<option value="39">대신증권</option>
					<option value="34">교보증권</option>
					<option value="32">삼성증권</option>
					<option value="30">미래에셋증권</option>
					<option value="28">동양증권</option>
					<option value="26">bnp파리바</option>
					<option value="36">HMC투자증권</option>
					<option value="14">산림조합</option>
					<option value="54">SK증권</option>
					<option value="67">미쓰비시도쿄UFJ은행</option>
					<option value="56">카카오페이증권</option>
					<option value="52">NH농협투자증권</option>
					<option value="48">신영증권</option>
					<option value="46">메리츠증권</option>
					<option value="44">동부증권</option>
					<option value="42">하나대투증권</option>
					<option value="38">이트레이드증권</option>
				</select>
			</div>
			<div class="pop_join_sub_ttl">
				계좌번호
			</div>
			<div class="pop_join_input_box">
				<input type="text" name="bank_no" placeholder="계좌번호" class="ip_join_st" required="">
			</div>
			<div class="pop_join_sub_ttl">
				예금주
			</div>
			<div class="pop_join_input_box">
				<input type="text" name="bank_account" placeholder="예금주" class="ip_join_st" required="">
			</div>
			<input type="hidden" name="rec"  v-model="code" value="">		
			<br>
			<input type="submit" class="ip_sm " value="회원가입신청">
			<div class="pop_join_input_box t_info">
			</div>
			<div class="pop_join_input_box t_info3">
				 가입 후 24시간 내에 충전이력이 없는경우<br>
				 자동탈퇴 처리됩니다
			</div>
		</form>
	</div>
</div>
	<a href="#" @click="showLogin" class="new_memo blink">
	<span class="">
	<i class="fas fa-envelope" aria-hidden="true"></i>
	신규쪽지가 있습니다. </span>
	</a>
	<div class="cb">
	</div>
	<a href="https://www.livechat.com/chat-witget/15710244/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a>
</div>
<audio id="jj_sound"></audio>
<div id="chat-widget-container" style="opacity: 1; visibility: visible; z-index: 2147483639; position: fixed; bottom: 0px; width: 84px; height: 84px; max-width: 100%; max-height: calc(100% + 0px); min-height: 0px; min-width: 0px; background-color: transparent; border: 0px; overflow: hidden; right: 0px; transition: none !important;">
	<iframe allow="clipboard-read; clipboard-write; autoplay; microphone *; camera *; display-capture *; picture-in-picture *; fullscreen *;" src="https://secure.livechatinc.com/customer/action/open_chat?license_id=15710244&amp;group=0&amp;embedded=1&amp;widget_version=3&amp;unique_groups=0&amp;use_parent_storage=1" allowtransparency="true" id="chat-widget" name="chat-widget" title="LiveChat chat widget" scrolling="no" style="width: 100%; height: 100%; min-height: 0px; min-width: 0px; margin: 0px; padding: 0px; background-image: none; background-position: 0% 0%; background-size: initial; background-attachment: scroll; background-origin: initial; background-clip: initial; background-color: rgba(0, 0, 0, 0); border-width: 0px; float: none; color-scheme: normal; position: absolute; inset: 0px; transition: none !important; display: none; visibility: hidden;">
	</iframe>
	<iframe allowtransparency="true" id="chat-widget-minimized" name="chat-widget-minimized" title="LiveChat chat widget" scrolling="no" style="width: 100%; height: 100%; min-height: 0px; min-width: 0px; margin: 0px; padding: 0px; background-image: none; background-position: 0% 0%; background-size: initial; background-attachment: scroll; background-origin: initial; background-clip: initial; background-color: rgba(0, 0, 0, 0); border-width: 0px; float: none; color-scheme: normal; display: block;">
	</iframe>
</div>
</template>

<script>
import '@/assets/index.js'; 
import '@/assets/join.js'; 
//import '@/assets/tracking.js';
import loadLiveChat from '@/assets/livechat.js';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'indexPage',

  data() {
    return {
      code: '', // 추천코드를 저장할 데이터 속성
    };
  },
  setup() {
    const isMenuOpened = ref(false);
    const isLoginVisible = ref(false);
    const isLoginVisible2 = ref(true);
	const isJoinVisible = ref(false);	
	const isJoinVisible2 = ref(false);	

    const toggleMenu = () => {
      isMenuOpened.value = !isMenuOpened.value;
    };

    const showLogin = () => {
      isLoginVisible.value = true;
    };

    const hideLogin = () => {
      isLoginVisible.value = false;	  
    };

    const showLogin2 = () => {
      isLoginVisible2.value = true;
    };	

    const hideLogin2 = () => {
      isLoginVisible2.value = false;
    };

	const showJoin = () => {
	  isJoinVisible2.value = false;
	  isLoginVisible.value = false;	
	  isJoinVisible.value =  true;	  
    };

	const showJoin2 = () => { 
	  isJoinVisible.value = false;
	  isJoinVisible2.value = true;
    };	
	
	const hideJoin = () => {
	  isLoginVisible.value = false;
	  isJoinVisible.value = false;
	  isJoinVisible2.value = false;		  
    };

    return {
      isMenuOpened,
      toggleMenu,
      isLoginVisible,
      isLoginVisible2,
      showLogin,
      hideLogin,
      showLogin2,
      hideLogin2,
	  isJoinVisible,
	  isJoinVisible2,
	  showJoin,
	  showJoin2,
	  hideJoin
    };       
  },

  async mounted() {
    const scripts = [
      '/static/js/jquery-3.6.0.min.js',
      '/static/js/jquery.cookie.js',
      '/static/js/base.js?v=37',
      '/static/js/sweetalert2.min.js?v=1',
      'https://kit.fontawesome.com/f4e3549fc3.js',
      '/assets/tracking.js',
    ];

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadScriptsSequentially = async () => {
      for (const src of scripts) {
        try {
          await loadScript(src);
        } catch (error) {
          console.error(`Failed to load script: ${src}`, error);
        }
      }
    };

    await loadScriptsSequentially();

    loadLiveChat();

  },
  methods: {
    refreshPage() {
      location.reload();
    },
  }  
});
</script>

<style scoped>
@import url('@/assets/base.css');
@import url('@/assets/sweetalert2.min.css');
@import url('@/assets/im.css');
@import url('@/assets/all.min.css');
@import url('https://boss-1177.com/static/css/min.css?v=22') screen and (max-width:767px);
@import url('https://boss-1177.com/static/css/max.css?v=12') screen and (min-width:768px);
</style>

<style scoped>
.wrap{
  height:100%;
  background:#090909;
}
</style>
<style scoped>
.cls-1{fill:#858e99;}
				</style>