<template>
  <div class="wrap">
	<!--<div class="pop_payback">
		<div class="pop_payback_box">
			<div class="pop_payback_ttl">
				<img src="https://boss-1177.com/static/img/logo.png" alt="">
				<span class="close_payback_pop"><i class="fas fa-times" aria-hidden="true"></i></span>
			</div>
			<div class="pop_payback_info">
			</div>
			<div class="payback_info">
			</div>
		</div>
	</div>-->
	<div class="pop_user_info only_mobile" :style="{ height: isExpanded ? '100%' : '0px', overflow: isExpanded ? 'auto' : 'hidden', transition: 'height 0.3s ease' }" @click="toggleHeight">
		<div class="pui_top_box">
			<span class="pui_logo"><img src="https://boss-1177.com/static/img/logo.png" alt=""></span>
			<span class="close_user_info"><i class="fas fa-times" aria-hidden="true"></i></span>
		</div>
		<div class="pui_user_box">
			<div class="pui_user_level">
				 LEVEL<br>
				<span class="t_orange">1</span>
			</div>
			<div class="pui_user_name">
				 popo111<br>
				<span class="t_orange">기러기아부지</span>
			</div>
			<div class="pui_user_coupon" style="margin: auto">
				 보유쿠폰:&nbsp; <i class="fas fa-ticket" aria-hidden="true"></i>
				<span class="nm_coupon">0</span>장&nbsp; <i class="fas fa-ticket" style="color: #FFD43B;" aria-hidden="true"></i>
				<span class="pr_coupon">0</span>장
			</div>
		</div>
		<div class="pui_money_box">
			<div class="pui_money">
				<div class="pui_money_ttl">
					스포츠 캐쉬
				</div>
				<div class="pui_money_info">
					<span class="money">0</span> 원
				</div>
				<img src="https://boss-1177.com/static/img/scash.png" alt="">
			</div>
			<div class="pui_cmoney">
				<div class="pui_money_ttl">
					카지노 캐쉬
				</div>
				<div class="pui_money_info">
					<span class="cmoney">0</span> 원
				</div>
				<img src="https://boss-1177.com/static/img/ccash.png" alt="">
			</div>
			<div class="pui_cmoney">
				<div class="pui_money_ttl">
					홀덤 캐쉬
				</div>
				<div class="pui_money_info">
					<span class="hd_money">0</span> 원
				</div>
				<img src="https://boss-1177.com/static/img/ccash.png" alt="">
			</div>
			<div class="pui_point exchange_point">
				<div class="pui_money_ttl">
					포인트 전환
				</div>
				<div class="pui_money_info">
					<span class="point">0</span> 원
				</div>
				<img src="https://boss-1177.com/static/img/pcash.png" alt="">
			</div>
		</div>
		<div class="pui_btn_box">
			<router-link to="/deposit">
			<span class="pui_btn_icon"><i class="fas fa-arrow-down" aria-hidden="true"></i></span>
			<span class="pui_btn_ttl">입금</span>
			<span class="pui_btn_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
		    </router-link>
			<router-link to="/withdrawal">
			<span class="pui_btn_icon"><i class="fas fa-coins" aria-hidden="true"></i></span>
			<span class="pui_btn_ttl">출금</span>
			<span class="pui_btn_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
		    </router-link>
			<router-link to="/transfer">
			<span class="pui_btn_icon"><i class="fas fa-exchange-alt" aria-hidden="true"></i></span>
			<span class="pui_btn_ttl">머니이동</span>
			<span class="pui_btn_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
		    </router-link>
			<router-link to="/memo">
			<span class="pui_btn_icon"><i class="fas fa-envelope" aria-hidden="true"></i></span>
			<span class="pui_btn_ttl">쪽지</span>
			<span class="pui_btn_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
		    </router-link>
			<router-link to="/ichange">
			<span class="pui_btn_icon"><i class="fas fa-key" aria-hidden="true"></i></span>
			<span class="pui_btn_ttl">정보수정</span>
			<span class="pui_btn_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
		    </router-link>
			<router-link to="/cs_center">
			<span class="pui_btn_icon"><i class="fas fa-comments" aria-hidden="true"></i></span>
			<span class="pui_btn_ttl">문의</span>
			<span class="pui_btn_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
		    </router-link>
			<a href="#">		
			<span class="pui_btn_icon"><i class="fas fa-hand-holding-usd" aria-hidden="true"></i></span>
			<span class="pui_btn_ttl">페이백</span>
			<span class="pui_btn_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
			</a>
			<router-link to="/vote"><a href="#"><span class="pui_btn_icon"><i class="fas fa-vote-yea" aria-hidden="true"></i></span>
					<span class="pui_btn_ttl">게시판 이벤트</span>
					<span class="pui_btn_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
				</a></router-link>
			<div class="mission" data-type="daily_dp_cnt">
				<span class="pui_btn_icon"><i class="fas fa-hand-holding-usd" aria-hidden="true"></i></span>
				<span class="pui_btn_ttl">충횟수</span>
				<span class="pui_btn_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
			</div>
			<div class="mission" data-type="daily_dp_amt">
				<span class="pui_btn_icon"><i class="fas fa-hand-holding-usd" aria-hidden="true"></i></span>
				<span class="pui_btn_ttl">충금액</span>
				<span class="pui_btn_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
			</div>
			<router-link to="/roulette">
			<span class="pui_btn_icon"><i class="fas fa-gift" aria-hidden="true"></i></span>
			<span class="pui_btn_ttl">룰렛</span>
			<span class="pui_btn_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
		    </router-link>
			<router-link to="/bet_list_spo">
			<span class="pui_btn_icon"><i class="fas fa-list" aria-hidden="true"></i></span>
			<span class="pui_btn_ttl">베팅내역</span>
			<span class="pui_btn_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
		    </router-link>
			<router-link to="/att">
			<span class="pui_btn_icon"><i class="fas fa-stamp" aria-hidden="true"></i></span>
			<span class="pui_btn_ttl">출석부</span>
			<span class="pui_btn_arr"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
		    </router-link>
		</div>
		<div class="pui_logout">
			 <router-link to="/">로그아웃</router-link>
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
			<router-link to="/deposit"><a href="#" class="btn_gray mg_link"><i class="fa fa-plus" aria-hidden="true"></i> 충전</a></router-link>
			</li>
			<li>
			<router-link to="/withdrawal"><a href="#" class="btn_gray mg_link"><i class="fa fa-minus" aria-hidden="true"></i> 환전</a></router-link>
			</li>
			<li>
			<router-link to="/cs_center"><a href="#" class="btn_gray mg_link"><i class="fas fa-exclamation-circle" aria-hidden="true"></i> 문의</a></router-link>
			</li>
			<li>
			<router-link to="/sports"><a href="#">해외형스포츠</a></router-link>
			</li>
			<li>
			<router-link to="/korean2"><a href="#">국내형스포츠</a></router-link>
			</li>
			<li>
			<router-link to="/inplay"><a href="#">LIVE-스포츠</a></router-link>
			</li>
			<li>
			<router-link to="/special"><a href="#">스페셜</a></router-link>
			</li>
			<li>
			<router-link to="/es"><a href="#">E-스포츠</a></router-link>
			</li>
			<li>
			<span class="mg_link open_revolution">레볼루션홀덤</span>
			</li>
			<li>
			<router-link to="/vscall"><a href="#">가상스포츠</a></router-link>
			</li>
			<li>
			<router-link to="/gg_pwb1"><a href="#">미니게임</a></router-link>
			</li>
			<li>
			<router-link to="/hilo"><a href="#" class="mg_link">토큰게임</a></router-link>
			</li>
			<li>
			<a href="#">페이백</a>
			</li>
			<li>
			<router-link to="/money_list"><a href="#" class="mg_link">머니내역</a></router-link>
			</li>
			<li>
			<router-link to="/bet_list_spo"><a href="#" class="mg_link">배팅내역</a></router-link>
			</li>
			<li>
			<router-link to="/att"><a href="#" class="mg_link">출석부</a></router-link>
			</li>
			<li>
			<router-link to="/notice"><a href="#" class="mg_link">공지/규정</a></router-link>
			</li>
			<li>
			<router-link to="/event"><a href="#" class="mg_link">이벤트</a></router-link>
			</li>
		</ul>
		<div class="snb_btn_img">
			<router-link to="/connect"><a href="#" class="mg_link">
			<span class="btn_img_ttl dspn">카지노</span>
			<img src="https://boss-1177.com/static/img/btn_casino.jpg" alt="">
			</a></router-link>
			<router-link to="/slot"><a href="#" class="mg_link">
			<span class="btn_img_ttl dspn">슬롯</span>
			<img src="https://boss-1177.com/static/img/btn_slot.jpg" alt="">
			</a></router-link>
		</div>
		<form class="sp_sch" @submit.prevent="navigateToSports">
      <input type="hidden" name="ctr" class="ctr" value="">
      <input type="text" v-model="internationalSearchKey" class="sch_key" placeholder="스포츠 해외식 검색 (국가/리그명/팀명)">
      <router-link :to="{ path: '/sports', query: { sch_key: internationalSearchKey } }">
        <button type="submit" class="dspn">
          <span class="sch_sp_btn"><i class="fas fa-search" aria-hidden="true"></i></span>
        </button>
      </router-link>
    </form>
	<form class="sp_sch2" @submit.prevent="navigateToKorean">
      <input type="text" v-model="domesticSearchKey" class="sch_key2" placeholder="스포츠 국내식 검색 (국가/리그명/팀명)">
      <router-link :to="{ path: '/korean', query: { sch_key2: domesticSearchKey } }">
        <button type="submit" class="dspn">
          <span class="sch_sp_btn2"><i class="fas fa-search" aria-hidden="true"></i></span>
        </button>
      </router-link>
    </form>
		<!--<div class="sch_sp_box">
			<router-link to="/sports">
			<form action="#" class="sp_sch">
				<input type="hidden" name="ctr" class="ctr" value="">
				<input type="text" name="sch_key" class="sch_key" placeholder="스포츠 해외식 검색 (국가/리그명/팀명)">
				<input type="submit" class="dspn">
				<span class="sch_sp_btn"><i class="fas fa-search" aria-hidden="true"></i></span>
			</form>
		    </router-link>
			<router-link to="/korean">
			<form action="#" class="sp_sch2">
				<input type="text" name="sch_key2" class="sch_key2" placeholder="스포츠 국내식 검색 (국가/리그명/팀명)" value="">
				<input type="submit" class="dspn">
				<span class="sch_sp_btn2"><i class="fas fa-search" aria-hidden="true"></i></span>
			</form>
		    </router-link>
		</div>-->
		<div class="snb_sp_box">			
			<div class="btn_snb_sp btn_sp_soccer" data-spo="soccer" data-stat="open">
			<router-link to="/sports">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_soccer.png" alt="">
				</span>
				<span class="snb_sp_name">축구</span>
				<span class="snb_sp_cnt">136</span>
			</router-link>
			</div>
			<div class="btn_snb_sp btn_sp_basket" data-spo="basket" data-stat="open">
			<router-link to="/sports">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_basket.png" alt="">
				</span>
				<span class="snb_sp_name">농구</span>
				<span class="snb_sp_cnt">4</span>
			</router-link>
			</div>
			<div class="btn_snb_sp btn_sp_baseball" data-spo="baseball" data-stat="open">
			<router-link to="/sports">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_baseball.png" alt="">
				</span>
				<span class="snb_sp_name">야구</span>
				<span class="snb_sp_cnt">14</span>
			</router-link>
			</div>
			<div class="btn_snb_sp btn_sp_volley" data-spo="volley" data-stat="open">
			<router-link to="/sports">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_volley.png" alt="">
				</span>
				<span class="snb_sp_name">배구</span>
				<span class="snb_sp_cnt">13</span>
			</router-link>
			</div>
			<div class="btn_snb_sp btn_sp_hockey" data-spo="hockey" data-stat="open">
			<router-link to="/sports">
				<span class="icon_sp">
				<img src="/static/img/icon_hockey.png" alt="">
				</span>
				<span class="snb_sp_name">아이스 하키</span>
				<span class="snb_sp_cnt">21</span>
			</router-link>
			</div>
			<div class="btn_snb_sp btn_sp_tenis" data-spo="tenis" data-stat="open">
			<router-link to="/sports">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_tenis.png" alt="">
				</span>
				<span class="snb_sp_name">테니스</span>
				<span class="snb_sp_cnt">66</span>
			</router-link>
			</div>
			<div class="btn_snb_sp btn_sp_handball" data-spo="handball" data-stat="open">
			<router-link to="/sports">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_handball.png" alt="">
				</span>
				<span class="snb_sp_name">핸드볼</span>
				<span class="snb_sp_cnt">5</span>
			</router-link>
			</div>
			<div class="btn_snb_sp btn_sp_pp" data-spo="pp" data-stat="open">
			<router-link to="/sports">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_pp.png" alt="">
				</span>
				<span class="snb_sp_name">탁구</span>
				<span class="snb_sp_cnt">154</span>
			</router-link>
			</div>
			<div class="btn_snb_sp btn_sp_mma" data-spo="mma" data-stat="open">
			<router-link to="/sports">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_mma.png" alt="">
				</span>
				<span class="snb_sp_name">MMA</span>
				<span class="snb_sp_cnt">0</span>
			</router-link>
			</div>
			<div class="btn_snb_sp btn_sp_boxing" data-spo="boxing" data-stat="open">
			<router-link to="/sports">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_boxing.png" alt="">
				</span>
				<span class="snb_sp_name">권투</span>
				<span class="snb_sp_cnt">0</span>
			</router-link>
			</div>
			<div class="btn_snb_sp btn_sp_dart" data-spo="dart" data-stat="open">
			<router-link to="/sports">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_dart.png" alt="">
				</span>
				<span class="snb_sp_name">다트</span>
				<span class="snb_sp_cnt">15</span>
			</router-link>
			</div>
			<div class="btn_snb_sp btn_sp_egame" data-spo="egame" data-stat="open">
			<router-link to="/sports">
				<span class="icon_sp">
				<img src="https://boss-1177.com/static/img/icon_egame.png" alt="">
				</span>
				<span class="snb_sp_name">E-스포츠</span>
				<span class="snb_sp_cnt">0</span>
			</router-link>
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
				<li class="five_game" data-str="유즈니 우랄 오르스크">
					<span class="five_time">22:30</span>
	<span class="five_sport"><img src="https://boss-1177.com/static/img/icon_hockey.png" alt=""></span>
	<div class="five_team_box">
		<span class="five_team_home"><img src="https://image.turnkeyapi.com/uof_team/medium/78197.png" onerror="this.src='/static/img/noimg.png'"> 유즈니 우랄 오르스크</span>
		<span class="five_team_away"><img src="https://image.turnkeyapi.com/uof_team/medium/275943.png" onerror="this.src='/static/img/noimg.png'"> 고르냐크 우찰리</span>
	</div>
				</li>
				<li class="five_game" data-str="토로스 넵테캄스크">
					<span class="five_time">23:00</span>
	<span class="five_sport"><img src="https://boss-1177.comstatic/img/icon_hockey.png" alt=""></span>
	<div class="five_team_box">
		<span class="five_team_home"><img src="https://image.turnkeyapi.com/uof_team/medium/78195.png" onerror="this.src='/static/img/noimg.png'"> 토로스 넵테캄스크</span>
		<span class="five_team_away"><img src="https://image.turnkeyapi.com/uof_team/medium/79815.png" onerror="this.src='/static/img/noimg.png'"> 부란 보로네시</span>
	</div>
				</li>
				<li class="five_game" data-str="루빈 튜멘">
					<span class="five_time">23:00</span>
	<span class="five_sport"><img src="https://boss-1177.com/static/img/icon_hockey.png" alt=""></span>
	<div class="five_team_box">
		<span class="five_team_home"><img src="https://image.turnkeyapi.com/uof_team/medium/55171.png" onerror="this.src='/static/img/noimg.png'"> 루빈 튜멘</span>
		<span class="five_team_away"><img src="https://image.turnkeyapi.com/uof_team/medium/3942.png" onerror="this.src='/static/img/noimg.png'"> Perm</span>
	</div>
				</li>
				<li class="five_game" data-str="HC 유그라 칸티-만시스크">
					<span class="five_time">23:00</span>
	<span class="five_sport"><img src="https://boss-1177.com/static/img/icon_hockey.png" alt=""></span>
	<div class="five_team_box">
		<span class="five_team_home"><img src="https://image.turnkeyapi.com/uof_team/medium/43853.png" onerror="this.src='/static/img/noimg.png'"> HC 유그라 칸티-만시스크</span>
		<span class="five_team_away"><img src="https://image.turnkeyapi.com/uof_team/medium/116994.png" onerror="this.src='/static/img/noimg.png'"> 올림피아 키로보-체페츠크</span>
	</div>
				</li>
				<li class="five_game" data-str="HC 탐보프">
					<span class="five_time">00:30</span>
	<span class="five_sport"><img src="https://boss-1177.com/static/img/icon_hockey.png" alt=""></span>
	<div class="five_team_box">
		<span class="five_team_home"><img src="https://image.turnkeyapi.com/uof_team/medium/168814.png" onerror="this.src='/static/img/noimg.png'"> HC 탐보프</span>
		<span class="five_team_away"><img src="https://image.turnkeyapi.com/uof_team/medium/598562.png" onerror="this.src='/static/img/noimg.png'"> HK 토르페도 고르키</span>
	</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="mobile_btn_login" @click="toggleHeight">
		<i class="fas fa-user" aria-hidden="true"></i>
	</div>
	<div class="top_inner">
		<div class="top_info_box tr">
			<div class="logo_gnb">
				<router-link to="/indexsss"><a href="#" class="no_pop"><img src="https://boss-1177.com/static/img/logo.png" alt=""></a></router-link>
			</div>
			<div class="top_right_box">
				<router-link to="/deposit"><a href="#" class="mg_link"><i class="fa fa-plus" aria-hidden="true"></i> 충전</a></router-link>
				<router-link to="/withdrawal"><a href="#" class="mg_link"><i class="fa fa-minus" aria-hidden="true"></i> 환전</a></router-link>
				<router-link to="/event"><a href="#" class="mg_link"><i class="far fa-calendar-check" aria-hidden="true"></i> 이벤트</a></router-link>
				<router-link to="/vote"><a href="#" class="mg_link"><i class="fas fa-vote-yea" aria-hidden="true"></i> 게시판 이벤트</a></router-link>
				<router-link to="/notice"><a href="#" class="mg_link"><i class="fas fa-exclamation-circle" aria-hidden="true"></i> 공지/규정</a></router-link>
				<router-link to="/memo"><a href="#" class="mg_link"><i class="fa fa-paper-plane" aria-hidden="true"></i> 쪽지</a></router-link>
				<router-link to="/cs_center"><a href="#" class="mg_link"><i class="fa fa-pencil-square" aria-hidden="true"></i> 문의</a></router-link>
				<router-link to="/roulette"><a href="#" class="mg_link"><i class="fas fa-gift" aria-hidden="true"></i> 룰렛</a></router-link>
				<a href="#"><i class="fas fa-hand-holding-usd" aria-hidden="true"></i> 페이백</a>
				<span class="mission" data-type="daily_dp_cnt"><i class="fas fa-hand-holding-usd" aria-hidden="true"></i> 충횟수</span>
				<span class="mission" data-type="daily_dp_amt"><i class="fas fa-hand-holding-usd" aria-hidden="true"></i> 충금액</span>
				<router-link to="/money_list"><a href="#" class="mg_link"><i class="fas fa-clipboard-list" aria-hidden="true"></i> 머니내역</a></router-link>
				<router-link to="/bet_list_spo"><a href="#" class="mg_link"><i class="fas fa-check" aria-hidden="true"></i> 배팅내역</a></router-link>
				<span class="tel_btn"><a href="https://t.me/boss365cs" target="_BLANK"><i class="fas fa-brands fa-telegram" aria-hidden="true"></i> 텔레그램</a></span>
				<router-link to="/"><a href="#" class="btn_top_logout"><i class="fas fa-sign-out-alt" aria-hidden="true"></i> 로그아웃</a></router-link>
			</div>
		</div>
		<div class="gnb_box">
			<div class="gnb_menu_box">
				<ul>
					<li>
					<router-link to="/sports">해외형스포츠</router-link>
					</li>
					<li>
					<router-link to="/korean2">국내형스포츠</router-link>
					</li>
					<li>
					<router-link to="/special">스페셜</router-link>
					</li>
					<li>
					<router-link to="/inplay">LIVE 스포츠</router-link>
					</li>
					<li>
					<router-link to="/es">E-스포츠</router-link>
					</li>
					<li>
					<span class="mg_link open_revolution">레볼루션홀덤</span>
					</li>
					<li>
					<router-link to="/vscall">가상스포츠</router-link>
					</li>
					<li>
					<router-link to="/gg_pwb1">미니게임</router-link>
					</li>
					<li>
					<router-link to="/hilo"><a href="#" class="mg_link">토큰게임</a></router-link>
					</li>
					<li>
					<router-link to="/connect"><a href="#" class="mg_link">정식카지노</a></router-link>
					</li>
					<li>
					<router-link to="/slot"><a href="#" class="mg_link">슬롯머신</a></router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="only_mobile mobile_user_info_box">
		<div class="muib_left" style="width: 50%">
			 보유머니 : <span class="money">0</span> 원
		</div>
		<div class="muib_right" style="width: 50%">
			 카지노머니 : <i class="fas fa-undo-alt refresh_cmoney" aria-hidden="true"></i><span class="cmoney t_orange">0</span> 원
		</div>
	</div>
	<div class="bet_slip">
		<div class="out_login out_login_right">
			<div class="out_login_info_1">
				<span class="lv_1 icon_level">1</span>
				<span class="out_nick">기러기아부지</span> 님 <router-link to="/ichange"><i class="fas fa-key" aria-hidden="true"></i> 정보수정</router-link>
			</div>
			<div class="out_login_bar">
			</div>
			<div class="out_login_info_2">
				<span class="out_sub_ttl"><i class="fas fa-coins" aria-hidden="true"></i> 보유머니</span>
				<span class="money">0</span> 원
			</div>
			<div class="out_login_info_2">
				<span class="out_sub_ttl">
				<i class="fas fa-coins" aria-hidden="true"></i> 카지노머니 <span class="btn_small btn_green btn_ex_money">머니이동</span>
				</span>
				<i class="fas fa-undo-alt refresh_cmoney" aria-hidden="true"></i><span class="cmoney">0</span> 원
			</div>
			<div class="exchange_cmoney_box outer_exchange dspn">
				<div class="slot_money_box2">
					<div class="exc_ttl">
						<span class="sm_charge2">카지노머니로이동</span>
						<span class="sm_withdrawal2">보유머니로이동</span>
					</div>
					<div class="sm_charge_box2">
						<input type="text" class="sm_c_money" value="0">
						<span class="go_to_charge">충전하기</span>
						<div class="sm_btn_box2">
							<span class="select_money" data-amt="1000">1,000</span>
							<span class="select_money" data-amt="5000">5,000</span>
							<span class="select_money" data-amt="10000">10,000</span>
							<span class="select_money" data-amt="30000">30,000</span>
							<span class="select_money" data-amt="50000">50,000</span>
							<span class="select_money" data-amt="100000">100,000</span>
							<span class="select_money" data-amt="500000">500,000</span>
							<span class="select_money" data-amt="1000000">1,000,000</span>
							<span class="select_max" data-amt="MAX">MAX</span>
						</div>
					</div>
					<div class="sm_withdrawal_box2">
						<input type="text" class="sm_w_money" value="0">
						<span class="go_to_withdrawal">출금하기</span>
						<div class="sm_btn_box2">
							<span class="select_money2" data-amt="1000">1,000</span>
							<span class="select_money2" data-amt="5000">5,000</span>
							<span class="select_money2" data-amt="10000">10,000</span>
							<span class="select_money2" data-amt="30000">30,000</span>
							<span class="select_money2" data-amt="50000">50,000</span>
							<span class="select_money2" data-amt="100000">100,000</span>
							<span class="select_money2" data-amt="500000">500,000</span>
							<span class="select_money2" data-amt="1000000">1,000,000</span>
							<span class="select_max2" data-amt="MAX">전액출금</span>
						</div>
					</div>
				</div>
			</div>
			<div class="out_login_info_2">
				<span class="out_sub_ttl"><i class="fas fa-coins" aria-hidden="true"></i> 홀덤머니</span>
				<span class="hd_money">0</span> 원
			</div>
			<div class="out_login_info_4 exchange_point">
				<span class="out_sub_ttl"><i class="fas fa-parking" aria-hidden="true"></i> 포인트</span>
				<i class="fas fa-exchange-alt" aria-hidden="true"></i><span class="point">0</span> 원
			</div>
			<div class="out_login_info_5">
				<span class="out_sub_ttl"><i class="fas fa-ticket" aria-hidden="true"></i> 일반 <span class="nm_coupon">0</span> 장</span>
				<i class="fas fa-ticket" style="color: #FFD43B;" aria-hidden="true"></i> 프리미엄 <span class="pr_coupon">0</span> 장
			</div>
			<div class="out_login_info_3">
				<a href="/deposit"><i class="fas fa-plus-square" aria-hidden="true"></i> 충전</a>
				<a href="/withdrawal"><i class="fas fa-minus-square" aria-hidden="true"></i> 환전</a>
				<a href="/memo"><i class="fas fa-envelope" aria-hidden="true"></i> 쪽지</a>
				<a href="#"><i class="fas fa-hand-holding-usd" aria-hidden="true"></i> 페이백</a>
				<router-link to="/"><i class="fas fa-power-off" aria-hidden="true"></i> 로그아웃</router-link>
			</div>
		</div>
		<div class="bet_cart">
			<div class="bc_ttl">
				<input type="hidden" name="auto_ratio" class="auto_ratio" value="2">
				<div class="controll_box swc_off" data-type="auto_ratio" data-stat="2">
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
			<a href="https://t.me/boss365cs" target="_BLANK"><img src="https://boss-1177.com/static/data/upload/banner/(보스)300x120-보스공식텔레그램.gif" alt="">
			</a><img src="https://boss-1177.com/static/data/upload/banner/보스_카카오톡_배너.gif" alt="">
			<a href="https://보스사이트.COM" target="_BLANK"><img src="https://boss-1177.com/static/data/upload/banner/3001001.gif" alt="">
			</a><a href="https://bigwin.livenst.com/boss/livescore/livescore/" target="_BLANK"><img src="https://boss-1177.com/static/data/upload/banner/300x100-보스생중계TV.gif" alt="">
			</a><a href="https://www.rotowire.com " target="_BLANK"><img src="https://boss-1177.com/static/data/upload/banner/300x100-실시간라인업확인.gif" alt="">
			</a><a href="https://xn--gl-qv9iw2zsia.com/" target="_NEW"><img src="https://boss-1177.com/static/img/banner_solution.png" alt=""></a>
		</div>
	</div>
	<div class="btn_bet_slip_open">
		<span class="opened dspn">
		<img src="https://boss-1177.com/static/img/cart_count.png" alt="">
		<span class="count_bet">0</span>
		</span>
		<span class="closed dspn"><i class="far fa-window-close" aria-hidden="true"></i> CLOSE</span>
	</div>
	<div class="contents ">
	<div class="minigame_tap_t1">
		<ul>
			<li data-id="super" class="open_mini_comp " data-href="https://lg-2020.com/game/mini/sup_dr1">
			<img src="https://boss-1177.com/static/img/mini/super.png" alt="">
			슈퍼게임 </li>
			<li data-id="lotus" class="open_mini_comp " data-href="https://lg-2020.com/game/mini/bc1">
			<img src="https://boss-1177.com/static/img/mini/lotus.png" alt="">
			로투스 </li>
			<li data-id="crown" class="open_mini_comp " data-href="https://lg-2020.com/game/mini/hl">
			<img src="https://boss-1177.com/static/img/mini/crown.png" alt="">
			크라운 </li>
			<li data-id="token" class="open_mini_comp " data-href="/hilo">
			<img src="https://boss-1177.com/static/img/mini/token.png" alt="">
			토큰게임 </li>
			<li data-id="sure" class="open_mini_comp on" data-href="https://lg-2020.com/game/mini/sure_pwb1">
			<img src="https://boss-1177.com/static/img/mini/sure.png" alt="">
			슈어맨 </li>
			<li data-id="pbg" class="open_mini_comp " data-href="https://lg-2020.com/game/mini/pbg_pwb5">
			<img src="https://boss-1177.com/static/img/mini/pbg.png" alt="">
			PBG </li>
			<li data-id="boss" class="open_mini_comp " data-href="https://lg-2020.com/game/mini/star1">
			<img src="https://boss-1177.com/static/img/mini/boss.png" alt="">
			보스코어 </li>
			<li data-id="sky" class="open_mini_comp " data-href="https://lg-2020.com/game/mini/sky_bc1">
			<img src="https://boss-1177.com/static/img/mini/sky.png" alt="">
			SKY </li>
		</ul>
	</div>
	<div class="minigame_tab">
		<div class="mini_tab_area mini_ta4 dspn" data-id="named">
			<a href="https://lg-2020.com/game/mini/named_pwb3">파워볼 3분</a>
			<a href="https://lg-2020.com/game/mini/named_pwb5">파워볼 5분</a>
			<a href="https://lg-2020.com/game/mini/named_dr3">사다리 3분</a>
			<a href="https://lg-2020.com/game/mini/named_dr5">사다리 5분</a>
		</div>
		<div class="mini_tab_area mini_ta3 dspn" data-id="ntry">
			<a href="https://lg-2020.com/game/mini/pwb">파워볼</a>
			<a href="https://lg-2020.com/game/mini/pdr">파워사다리</a>
			<a href="https://lg-2020.com/game/mini/kdr">키노사다리</a>
		</div>
		<div class="mini_tab_area mini_ta2 dspn" data-id="lotus">
			<a href="https://lg-2020.com/game/mini/bc1">바카라</a>
			<a href="https://lg-2020.com/game/mini/lotus_oe">홀짝</a>
			<a href="https://lg-2020.com/game/mini/sicbo">식보</a>
		</div>
		<div class="mini_tab_area mini_ta2 dspn" data-id="mgm">
			<a href="https://lg-2020.com/game/mini/mgm_bc1">바카라</a>
			<a href="https://lg-2020.com/game/mini/mgm_oe">홀짝</a>
		</div>
		<div class="mini_tab_area mini_ta3 dspn" data-id="crown">
			<a href="https://lg-2020.com/game/mini/sutda">섯다</a>
			<a href="https://lg-2020.com/game/mini/hl">하이로우</a>
			<a href="https://lg-2020.com/game/mini/crown_oe">홀짝</a>
		</div>
		<div class="mini_tab_area mini_ta3 dspn" data-id="dh">
			<a href="https://lg-2020.com/game/mini/dh_pwb">파워볼</a>
			<a href="https://lg-2020.com/game/mini/dh_pdr">파워사다리</a>
			<a href="https://lg-2020.com/game/mini/dh_kdr">키노사다리</a>
		</div>
		<div class="mini_tab_area mini_ta4 dspn" data-id="boss">
			<a href="https://lg-2020.com/game/mini/pwb1">파워볼 1분</a>
			<a href="https://lg-2020.com/game/mini/star1">별다리 1분</a>
			<a href="https://lg-2020.com/game/mini/star2">별다리 2분</a>
			<a href="https://lg-2020.com/game/mini/star3">별다리 3분</a>
		</div>
		<div class="mini_tab_area mini_ta10 " data-id="sure">
			<a href="https://lg-2020.com/game/mini/sure_pwb1">파워볼 1분</a>
			<a href="https://lg-2020.com/game/mini/sure_pwb2">파워볼 2분</a>
			<a href="https://lg-2020.com/game/mini/sure_pwb3">파워볼 3분</a>
			<a href="/gg_pwb1" class="on">사다리 1분</a>
			<a href="https://lg-2020.com/game/mini/sure_dr2">사다리 2분</a>
			<a href="https://lg-2020.com/game/mini/sure_dr3">사다리 3분</a>
			<a href="https://lg-2020.com/game/mini/sure_rc1">레이싱 1분</a>
			<a href="https://lg-2020.com/game/mini/sure_rc2">레이싱 2분</a>
			<a href="https://lg-2020.com/game/mini/sure_rc3">레이싱 3분</a>
			<a href="https://lg-2020.com/game/mini/sure_rl1">룰렛 1분</a>
			<a href="https://lg-2020.com/game/mini/sure_rl2">룰렛 2분</a>
			<a href="https://lg-2020.com/game/mini/sure_rl3">룰렛 3분</a>
		</div>
		<div class="mini_tab_area mini_ta3 dspn" data-id="token">
			<a href="/hilo" class="mg_link ">하이로우 10초</a>
			<a href="https://lg-2020.com/game/token_game/hilo_5s" class="mg_link ">하이로우 5초</a>
			<a href="https://lg-2020.com/game/token_game/baccarat" class="mg_link ">바카라</a>
			<a href="https://lg-2020.com/game/token_game/roulette" class="mg_link ">룰렛</a>
			<a href="https://lg-2020.com/game/token_game/graph" class="mg_link ">그래프</a>
			<a href="https://lg-2020.com/game/token_game/tk_vsports" class="mg_link ">가상게임</a>
		</div>
		<div class="mini_tab_area mini_ta10 dspn" data-id="super">
			<a href="/gg_pwb1">사다리 1분</a>
			<a href="https://lg-2020.com/game/mini/sup_dr3">사다리 3분</a>
			<a href="https://lg-2020.com/game/mini/sup_dr5">사다리 5분</a>
			<a href="https://lg-2020.com/game/mini/sup_hl1">로하이 1분</a>
			<a href="https://lg-2020.com/game/mini/sup_hl3">로하이 3분</a>
			<a href="https://lg-2020.com/game/mini/sup_hl5">로하이 5분</a>
			<a href="https://lg-2020.com/game/mini/sup_sutda">섯다</a>
		</div>
		<div class="mini_tab_area mini_ta3 dspn" data-id="pbg">
			<a href="https://lg-2020.com/game/mini/pbg_pwb5">파워볼 5분</a>
		</div>
		<div class="mini_tab_area mini_ta3 dspn" data-id="sky">
			<a href="https://lg-2020.com/game/mini/sky_bc1">바카라</a>
			<a href="https://lg-2020.com/game/mini/sky_dt1">용호</a>
			<a href="https://lg-2020.com/game/mini/sky_oe1">홀짝</a>
			<a href="https://lg-2020.com/game/mini/sky_bj1">블랙잭</a>
		</div>
	</div>		
	<div class="minigame_box sure_dr1_game">
		<div class="sure_frm_box">
			<iframe src="https://www.sureladder.com/?id=one" scrolling="no" autoplay="1" allow="autoplay">
			</iframe>
		</div>
		<div class="mini_select_box">
			<div class="mini_select_inner">
				<div class="mini_bar">
				</div>
				<div class="mini_info">
					<div class="mini_sub_info">
						<div class="mini_sub_ttl">
							회차
						</div>
						<div class="mini_sub_info mini_round" data-id="891537">
							493
						</div>
					</div>
					<div class="mini_sub_info">
						<div class="mini_sub_ttl">
							마감
						</div>
						<div class="mini_sub_info mini_close_time">
							<span class="cnt_m">00</span>:<span class="cnt_s">22</span>
						</div>
					</div>
				</div>
				<div class="mini_bar">
				</div>
				<div class="pwb_ilban">
					<div class="mini_select_2 mini_sel_group">
						<ul>
							<li class="select_ttl">시작</li>
							<li class="sel_game" data-name="시작-좌" data-use="1" data-type="left" data-ratio="1.95" now-stat="open">
							<span class="disabled_sel dspn"><i class="fas fa-lock" aria-hidden="true"></i></span>
							<span class="sel_ratio">1.95</span>
							<span class="sel_name blue_circle">
							좌 </span>
							<span class="sel_stan"></span>
							</li>
							<li class="sel_game" data-name="시작-우" data-use="1" data-type="right" data-ratio="1.95" now-stat="open">
							<span class="disabled_sel dspn"><i class="fas fa-lock" aria-hidden="true"></i></span>
							<span class="sel_ratio">1.95</span>
							<span class="sel_name red_circle">
							우 </span>
							<span class="sel_stan"></span>
							</li>
						</ul>
					</div>
					<div class="mini_select_2 mini_sel_group">
						<ul>
							<li class="select_ttl">줄수</li>
							<li class="sel_game" data-name="줄수-3줄" data-use="1" data-type="line3" data-ratio="1.95" now-stat="open">
							<span class="disabled_sel dspn"><i class="fas fa-lock" aria-hidden="true"></i></span>
							<span class="sel_ratio">1.95</span>
							<span class="sel_name blue_circle">
							3 </span>
							<span class="sel_stan"></span>
							</li>
							<li class="sel_game" data-name="줄수-4줄" data-use="1" data-type="line4" data-ratio="1.95" now-stat="open">
							<span class="disabled_sel dspn"><i class="fas fa-lock" aria-hidden="true"></i></span>
							<span class="sel_ratio">1.95</span>
							<span class="sel_name red_circle">
							4 </span>
							<span class="sel_stan"></span>
							</li>
						</ul>
					</div>
					<div class="mini_select_2 mini_sel_group">
						<ul>
							<li class="select_ttl">결과</li>
							<li class="sel_game" data-name="결과-홀" data-use="1" data-type="odd" data-ratio="1.95" now-stat="open">
							<span class="disabled_sel dspn"><i class="fas fa-lock" aria-hidden="true"></i></span>
							<span class="sel_ratio">1.95</span>
							<span class="sel_name blue_circle">
							홀 </span>
							<span class="sel_stan"></span>
							</li>
							<li class="sel_game" data-name="결과-짝" data-use="1" data-type="even" data-ratio="1.95" now-stat="open">
							<span class="disabled_sel dspn"><i class="fas fa-lock" aria-hidden="true"></i></span>
							<span class="sel_ratio">1.95</span>
							<span class="sel_name red_circle">
							짝 </span>
							<span class="sel_stan"></span>
							</li>
						</ul>
					</div>
					<div class="mini_select_2 mini_sel_group">
						<ul>
							<li class="select_ttl">조합</li>
							<li class="sel_game" data-name="조합-좌3짝" data-use="1" data-type="left3" data-ratio="3.6" now-stat="open">
							<span class="disabled_sel dspn"><i class="fas fa-lock" aria-hidden="true"></i></span>
							<span class="sel_ratio">3.6</span>
							<span class="sel_name blue_circle">
							좌 </span>
							<span class="sel_name blue_circle">
							3 </span>
							<span class="sel_name red_circle">
							짝 </span>
							<span class="sel_stan"></span>
							</li>
							<li class="sel_game" data-name="조합-좌4홀" data-use="1" data-type="left4" data-ratio="3.6" now-stat="open">
							<span class="disabled_sel dspn"><i class="fas fa-lock" aria-hidden="true"></i></span>
							<span class="sel_ratio">3.6</span>
							<span class="sel_name blue_circle">
							좌 </span>
							<span class="sel_name red_circle">
							4 </span>
							<span class="sel_name blue_circle">
							홀 </span>
							<span class="sel_stan"></span>
							</li>
						</ul>
					</div>
					<div class="mini_select_2 mini_sel_group">
						<ul>
							<li class="select_ttl">조합</li>
							<li class="sel_game" data-name="조합-우3홀" data-use="1" data-type="right3" data-ratio="3.6" now-stat="open">
							<span class="disabled_sel dspn"><i class="fas fa-lock" aria-hidden="true"></i></span>
							<span class="sel_ratio">3.6</span>
							<span class="sel_name red_circle">
							우 </span>
							<span class="sel_name blue_circle">
							3 </span>
							<span class="sel_name blue_circle">
							홀 </span>
							<span class="sel_stan"></span>
							</li>
							<li class="sel_game" data-name="조합-우4짝" data-use="1" data-type="right4" data-ratio="3.6" now-stat="open">
							<span class="disabled_sel dspn"><i class="fas fa-lock" aria-hidden="true"></i></span>
							<span class="sel_ratio">3.6</span>
							<span class="sel_name red_circle">
							우 </span>
							<span class="sel_name red_circle">
							4 </span>
							<span class="sel_name red_circle">
							짝 </span>
							<span class="sel_stan"></span>
							</li>
						</ul>
					</div>
				</div>
				<div class="mini_bar sure_bar">
				</div>
			</div>
		</div>
		<div class="cb">
		</div>
		<div class="bet_list_box">
			<div class="bet_list_ttl">
				최근배팅내역
			</div>
			<div class="bet_list">
				<ul class="bet_list_ul">
					<li class="no_item">최근 배팅내역이 없습니다.</li>
				</ul>
			</div>
		</div>
	</div>
</div>
	<router-link to="/memo">
	<a href="#" class="new_memo blink" style="bottom: -201px;">
	<span class="">
	<i class="fas fa-envelope" aria-hidden="true"></i>
	신규쪽지가 있습니다. </span>
	</a>
    </router-link>
	<div class="cb">
  </div>
  <a href="https://www.livechat.com/chat-with/15710244/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a>
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
import $ from 'jquery';
import '@/assets/index.js';
//import { open_payback } from '@/static/js/base.ts';
//import '@/assets/tracking.js';
import loadLiveChat from '@/assets/livechat.js';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'gg_pwb1Page',

  setup() {
    const isMenuOpened = ref(false);
    const isLoginVisible = ref(false);
    const isLoginVisible2 = ref(true);
	const isExpanded = ref(false);
	var game_cate = 'sure_dr1';
	var min_bet = 5000;
	var max_bet = 3000000;
	var max_get = 10000000;
	var max_ratio = 12;
	var nt;

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

	const toggleHeight = () => {
      isExpanded.value = !isExpanded.value;
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
	    isExpanded,
      toggleHeight,
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

	$(document).ready(function(){
	$('.open_mini_comp').on('click',function(){
            var link = $(this).attr('data-href');
            location.replace(link);
            $('.open_mini_comp').removeClass('on');
            $(this).addClass('on');
            var game = $(this).attr('data-id');
            $('.mini_tab_area').addClass('dspn');
            $('.mini_tab_area[data-id='+game+']').removeClass('dspn');
        });
	});
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