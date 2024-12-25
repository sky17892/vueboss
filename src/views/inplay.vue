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
	<div class="page_ttl only_pc">
		 LIVE 스포츠
	</div>
	<div class="page_tab page_tab2 only_mobile">
		<a href="/sports">
		해외형 </a>
		<a href="/korean2">
		국내형 </a>
		<a href="/inplay" class="on">
		LIVE </a>
		<a href="/special">
		스페셜 </a>
		<a href="/es">
		E스포츠 </a>
	</div>
	<div class="sport_out_box">
		<div class="sport_list_box">
			<div class="sports_tab_out_box">
				<div class="sport_tab_box">
					<span class="btn_inplay_tab btn_inplay_tab_on" data-cate="all">
					<strong>96</strong>
					<span class="sport_name">전체</span>
					</span>
					<span class="btn_inplay_tab" data-cate="soccer">
					<strong>56</strong>
					<span class="sport_name">축구</span>
					</span>
					<span class="btn_inplay_tab" data-cate="basket">
					<strong>17</strong>
					<span class="sport_name">농구</span>
					</span>
					<span class="btn_inplay_tab" data-cate="baseball">
					<strong>8</strong>
					<span class="sport_name">야구</span>
					</span>
					<span class="btn_inplay_tab" data-cate="volley">
					<strong>6</strong>
					<span class="sport_name">배구</span>
					</span>
					<span class="btn_inplay_tab" data-cate="hockey">
					<strong>9</strong>
					<span class="sport_name">아이스하키</span>
					</span>
					<span class="btn_inplay_tab" data-cate="egame">
					<strong>0</strong>
					<span class="sport_name">E스포츠</span>
					</span>
				</div>
			</div>
			<div class="inplay_list">
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/GRC.png"> 그리스컵
				</div>
				<div class="sports_box sports_sc" data-id="inp53087037" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53087037" data-spo="축구" data-lg="그리스컵" data-flag="67" data-home="Erani Filiatron" data-away="Pas Sparti">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53087037" data-spo="축구" data-lg="그리스컵" data-flag="67" data-home="Erani Filiatron" data-away="Pas Sparti">
							<span class="open_markets" data-id="inp53087037">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Erani Filiatron</span><span class="info_home_score">2</span><span class="info_vs">VS</span><span class="info_away_score">1</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Pas Sparti</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/AUS.png"> West State League Division 1,reserve
				</div>
				<div class="sports_box sports_sc" data-id="inp53029469" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53029469" data-spo="축구" data-lg="West State League Division 1,reserve" data-flag="34" data-home="Uwa Nedlands FC Reserves" data-away="Gosnells City FC Reserves">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53029469" data-spo="축구" data-lg="West State League Division 1,reserve" data-flag="34" data-home="Uwa Nedlands FC Reserves" data-away="Gosnells City FC Reserves">
							<span class="open_markets" data-id="inp53029469">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Uwa Nedlands FC Reserves</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Gosnells City FC Reserves</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/RUS.png"> Saint-Petersburg U21 Championship
				</div>
				<div class="sports_box sports_sc" data-id="inp52744377" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp52744377" data-spo="축구" data-lg="Saint-Petersburg U21 Championship" data-flag="21" data-home="Dussh Lokomotiv U21" data-away="Shor 2 Nevskogo Rayona U21">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp52744377" data-spo="축구" data-lg="Saint-Petersburg U21 Championship" data-flag="21" data-home="Dussh Lokomotiv U21" data-away="Shor 2 Nevskogo Rayona U21">
							<span class="open_markets" data-id="inp52744377">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Dussh Lokomotiv U21</span><span class="info_home_score">1</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Shor 2 Nevskogo Rayona U21</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> UEFA WCL
				</div>
				<div class="sports_box sports_sc" data-id="inp51299469" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp51299469" data-spo="축구" data-lg="UEFA WCL" data-flag="393" data-home="Valur Reykjavik" data-away="ZFK Ljuboten">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp51299469" data-spo="축구" data-lg="UEFA WCL" data-flag="393" data-home="Valur Reykjavik" data-away="ZFK Ljuboten">
							<span class="open_markets" data-id="inp51299469">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/37184.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Valur Reykjavik</span><span class="info_home_score">2</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							ZFK Ljuboten</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/RUS.png"> Saint Petersburg Higher League
				</div>
				<div class="sports_box sports_sc" data-id="inp52744811" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp52744811" data-spo="축구" data-lg="Saint Petersburg Higher League" data-flag="21" data-home="Chernie Medvedi-Politeh" data-away="Rwchallenge">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp52744811" data-spo="축구" data-lg="Saint Petersburg Higher League" data-flag="21" data-home="Chernie Medvedi-Politeh" data-away="Rwchallenge">
							<span class="open_markets" data-id="inp52744811">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Chernie Medvedi-Politeh</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">1</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Rwchallenge</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> UEFA WCL
				</div>
				<div class="sports_box sports_sc" data-id="inp51299481" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp51299481" data-spo="축구" data-lg="UEFA WCL" data-flag="393" data-home="Apollon Ladies Limassol" data-away="FC Pyunik Yerevan">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp51299481" data-spo="축구" data-lg="UEFA WCL" data-flag="393" data-home="Apollon Ladies Limassol" data-away="FC Pyunik Yerevan">
							<span class="open_markets" data-id="inp51299481">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/36709.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Apollon Ladies Limassol</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							FC Pyunik Yerevan</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/RUS.png"> Moscow Championship
				</div>
				<div class="sports_box sports_sc" data-id="inp52854113" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp52854113" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Impuls-M" data-away="Novator Moscow">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp52854113" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Impuls-M" data-away="Novator Moscow">
							<span class="open_markets" data-id="inp52854113">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Impuls-M</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Novator Moscow</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_sc" data-id="inp52854117" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp52854117" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Krasnogvardeets" data-away="Ym Spartak">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp52854117" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Krasnogvardeets" data-away="Ym Spartak">
							<span class="open_markets" data-id="inp52854117">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Krasnogvardeets</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">3</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Ym Spartak</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_sc" data-id="inp52854105" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp52854105" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Csp Dinamo" data-away="Smena Moscow">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp52854105" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Csp Dinamo" data-away="Smena Moscow">
							<span class="open_markets" data-id="inp52854105">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Csp Dinamo</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">1</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Smena Moscow</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> Club Friendly Games, Women
				</div>
				<div class="sports_box sports_bk" data-id="inp53251649" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53251649" data-spo="농구" data-lg="Club Friendly Games, Women" data-flag="103" data-home="B&amp;P Costa Masnaga" data-away="Elite Virtus La Spezia">
							<span class="s_type"><i class="fas fa-basketball-ball" aria-hidden="true"></i></span><span class="s_time">2쿼터</span><span class="now_time">15:54</span>
						</div>
						<div class="sports_markets " data-id="inp53251649" data-spo="농구" data-lg="Club Friendly Games, Women" data-flag="103" data-home="B&amp;P Costa Masnaga" data-away="Elite Virtus La Spezia">
							<span class="open_markets" data-id="inp53251649">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							B&amp;P Costa Masnaga</span><span class="info_home_score">31</span><span class="info_vs">VS</span><span class="info_away_score">14</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/119156.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Elite Virtus La Spezia</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> UEFA WCL
				</div>
				<div class="sports_box sports_sc" data-id="inp53298001" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53298001" data-spo="축구" data-lg="UEFA WCL" data-flag="393" data-home="Glentoran Belfast" data-away="FC Pyunik Yerevan">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53298001" data-spo="축구" data-lg="UEFA WCL" data-flag="393" data-home="Glentoran Belfast" data-away="FC Pyunik Yerevan">
							<span class="open_markets" data-id="inp53298001">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/36706.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Glentoran Belfast</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							FC Pyunik Yerevan</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> 클럽 친선경기
				</div>
				<div class="sports_box sports_bk" data-id="inp53289919" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53289919" data-spo="농구" data-lg="클럽 친선경기" data-flag="103" data-home="Virtus Roma" data-away="ASD Latina Basket">
							<span class="s_type"><i class="fas fa-basketball-ball" aria-hidden="true"></i></span><span class="s_time">1쿼터</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53289919" data-spo="농구" data-lg="클럽 친선경기" data-flag="103" data-home="Virtus Roma" data-away="ASD Latina Basket">
							<span class="open_markets" data-id="inp53289919">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3573.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Virtus Roma</span><span class="info_home_score">6</span><span class="info_vs">VS</span><span class="info_away_score">12</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/37521.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							ASD Latina Basket</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> ITF Tunisia 18A, Women Singles
				</div>
				<div class="sports_box sports_vb" data-id="inp53364745" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53364745" data-spo="배구" data-lg="ITF Tunisia 18A, Women Singles" data-flag="136" data-home="Suriname U23" data-away="Peru">
							<span class="s_type"><i class="fas fa-volleyball-ball" aria-hidden="true"></i></span><span class="s_time">1세트</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53364745" data-spo="배구" data-lg="ITF Tunisia 18A, Women Singles" data-flag="136" data-home="Suriname U23" data-away="Peru">
							<span class="open_markets" data-id="inp53364745">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Suriname U23</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Peru</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/THA.png"> 리그 컵
				</div>
				<div class="sports_box sports_sc" data-id="inp53256191" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53256191" data-spo="축구" data-lg="리그 컵" data-flag="485" data-home="Pluak Daeng Rayong United FC" data-away="Marines Eureka">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53256191" data-spo="축구" data-lg="리그 컵" data-flag="485" data-home="Pluak Daeng Rayong United FC" data-away="Marines Eureka">
							<span class="open_markets" data-id="inp53256191">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Pluak Daeng Rayong United FC</span><span class="info_home_score">1</span><span class="info_vs">VS</span><span class="info_away_score">2</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Marines Eureka</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_sc" data-id="inp53291609" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53291609" data-spo="축구" data-lg="리그 컵" data-flag="485" data-home="Customs United FC" data-away="Padriew City">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53291609" data-spo="축구" data-lg="리그 컵" data-flag="485" data-home="Customs United FC" data-away="Padriew City">
							<span class="open_markets" data-id="inp53291609">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Customs United FC</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">1</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Padriew City</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/PRT.png"> 타사 드 포르투갈
				</div>
				<div class="sports_box sports_sc" data-id="inp52257133" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp52257133" data-spo="축구" data-lg="타사 드 포르투갈" data-flag="44" data-home="C. Futebol Benfica" data-away="Uf Comercio E Industria Setubal">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp52257133" data-spo="축구" data-lg="타사 드 포르투갈" data-flag="44" data-home="C. Futebol Benfica" data-away="Uf Comercio E Industria Setubal">
							<span class="open_markets" data-id="inp52257133">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							C. Futebol Benfica</span><span class="info_home_score">1</span><span class="info_vs">VS</span><span class="info_away_score">1</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Uf Comercio E Industria Setubal</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> Club Friendly Games, Women
				</div>
				<div class="sports_box sports_bk" data-id="inp53256155" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53256155" data-spo="농구" data-lg="Club Friendly Games, Women" data-flag="103" data-home="Pays Voironnais Basket Club" data-away="ZKK Zadar">
							<span class="s_type"><i class="fas fa-basketball-ball" aria-hidden="true"></i></span><span class="s_time">2쿼터</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53256155" data-spo="농구" data-lg="Club Friendly Games, Women" data-flag="103" data-home="Pays Voironnais Basket Club" data-away="ZKK Zadar">
							<span class="open_markets" data-id="inp53256155">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Pays Voironnais Basket Club</span><span class="info_home_score">31</span><span class="info_vs">VS</span><span class="info_away_score">17</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/25740.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							ZKK Zadar</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> 클럽 친선경기
				</div>
				<div class="sports_box sports_bk" data-id="inp53404611" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53404611" data-spo="농구" data-lg="클럽 친선경기" data-flag="103" data-home="Rheinstars Cologne" data-away="Deutzer TV">
							<span class="s_type"><i class="fas fa-basketball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53404611" data-spo="농구" data-lg="클럽 친선경기" data-flag="103" data-home="Rheinstars Cologne" data-away="Deutzer TV">
							<span class="open_markets" data-id="inp53404611">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">Rheinstars Cologne</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">Deutzer TV</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/KOR.png"> College, Women
				</div>
				<div class="sports_box sports_bk" data-id="inp53502649" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53502649" data-spo="농구" data-lg="College, Women" data-flag="375" data-home="Kwangju University" data-away="Ulsan University">
							<span class="s_type"><i class="fas fa-basketball-ball" aria-hidden="true"></i></span><span class="s_time">4쿼터</span><span class="now_time">39:00</span>
						</div>
						<div class="sports_markets " data-id="inp53502649" data-spo="농구" data-lg="College, Women" data-flag="375" data-home="Kwangju University" data-away="Ulsan University">
							<span class="open_markets" data-id="inp53502649">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Kwangju University</span><span class="info_home_score">55</span><span class="info_vs">VS</span><span class="info_away_score">56</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Ulsan University</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> Club Friendly Games
				</div>
				<div class="sports_box sports_vb" data-id="inp53537015" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53537015" data-spo="배구" data-lg="Club Friendly Games" data-flag="136" data-home="Uvc Weberzeile Ried Im Innkreis" data-away="Olimpia Sulecin">
							<span class="s_type"><i class="fas fa-volleyball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53537015" data-spo="배구" data-lg="Club Friendly Games" data-flag="136" data-home="Uvc Weberzeile Ried Im Innkreis" data-away="Olimpia Sulecin">
							<span class="open_markets" data-id="inp53537015">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">Uvc Weberzeile Ried Im Innkreis</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">Olimpia Sulecin</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/RUS.png"> Moscow Championship
				</div>
				<div class="sports_box sports_sc" data-id="inp53254591" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53254591" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Csp Dinamo" data-away="Sever U19">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53254591" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Csp Dinamo" data-away="Sever U19">
							<span class="open_markets" data-id="inp53254591">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Csp Dinamo</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Sever U19</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_sc" data-id="inp53254601" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53254601" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Ym Torpedo" data-away="Ym Spartak">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53254601" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Ym Torpedo" data-away="Ym Spartak">
							<span class="open_markets" data-id="inp53254601">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Ym Torpedo</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Ym Spartak</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_sc" data-id="inp53254603" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53254603" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Rosich-2" data-away="Zelenograd-2">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53254603" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Rosich-2" data-away="Zelenograd-2">
							<span class="open_markets" data-id="inp53254603">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Rosich-2</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Zelenograd-2</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_sc" data-id="inp53254595" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53254595" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="FC Devjatka Od-80" data-away="Novator Moscow">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53254595" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="FC Devjatka Od-80" data-away="Novator Moscow">
							<span class="open_markets" data-id="inp53254595">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							FC Devjatka Od-80</span><span class="info_home_score">1</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Novator Moscow</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/MEX.png"> LNBP
				</div>
				<div class="sports_box sports_bk" data-id="inp50719175" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp50719175" data-spo="농구" data-lg="LNBP" data-flag="395" data-home="알코네스 로호스" data-away="Freseros de Irapuato">
							<span class="s_type"><i class="fas fa-basketball-ball" aria-hidden="true"></i></span><span class="s_time">1쿼터</span><span class="now_time">6:01</span>
						</div>
						<div class="sports_markets " data-id="inp50719175" data-spo="농구" data-lg="LNBP" data-flag="395" data-home="알코네스 로호스" data-away="Freseros de Irapuato">
							<span class="open_markets" data-id="inp50719175">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/121766.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							알코네스 로호스</span><span class="info_home_score">20</span><span class="info_vs">VS</span><span class="info_away_score">19</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Freseros de Irapuato</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/RUS.png"> Moscow Championship
				</div>
				<div class="sports_box sports_sc" data-id="inp53318229" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53318229" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Novator Moscow" data-away="Smena Moscow">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53318229" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Novator Moscow" data-away="Smena Moscow">
							<span class="open_markets" data-id="inp53318229">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Novator Moscow</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">2</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Smena Moscow</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_sc" data-id="inp53318219" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53318219" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Akademiya Kantera" data-away="Krasnogvardeets">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53318219" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Akademiya Kantera" data-away="Krasnogvardeets">
							<span class="open_markets" data-id="inp53318219">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Akademiya Kantera</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Krasnogvardeets</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_sc" data-id="inp53318223" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53318223" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Zelenograd-2" data-away="Ym Torpedo">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53318223" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Zelenograd-2" data-away="Ym Torpedo">
							<span class="open_markets" data-id="inp53318223">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Zelenograd-2</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Ym Torpedo</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/PRT.png"> 타사 드 포르투갈
				</div>
				<div class="sports_box sports_sc" data-id="inp53404783" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53404783" data-spo="축구" data-lg="타사 드 포르투갈" data-flag="44" data-home="UD Tocha" data-away="FC Penafiel">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53404783" data-spo="축구" data-lg="타사 드 포르투갈" data-flag="44" data-home="UD Tocha" data-away="FC Penafiel">
							<span class="open_markets" data-id="inp53404783">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							UD Tocha</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3017.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							FC Penafiel</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_sc" data-id="inp53404853" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53404853" data-spo="축구" data-lg="타사 드 포르투갈" data-flag="44" data-home="Electrico FC" data-away="Amarante FC">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53404853" data-spo="축구" data-lg="타사 드 포르투갈" data-flag="44" data-home="Electrico FC" data-away="Amarante FC">
							<span class="open_markets" data-id="inp53404853">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/81829.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Electrico FC</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/226202.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Amarante FC</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/KOR.png"> College
				</div>
				<div class="sports_box sports_bk" data-id="inp53162279" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53162279" data-spo="농구" data-lg="College" data-flag="375" data-home="Sungkyunkwan University" data-away="Korea University">
							<span class="s_type"><i class="fas fa-basketball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53162279" data-spo="농구" data-lg="College" data-flag="375" data-home="Sungkyunkwan University" data-away="Korea University">
							<span class="open_markets" data-id="inp53162279">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">Sungkyunkwan University</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">Korea University</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/RUS.png"> Zone Moscow
				</div>
				<div class="sports_box sports_sc" data-id="inp53495043" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53495043" data-spo="축구" data-lg="Zone Moscow" data-flag="21" data-home="FSM Moscow" data-away="FK Rosich">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53495043" data-spo="축구" data-lg="Zone Moscow" data-flag="21" data-home="FSM Moscow" data-away="FK Rosich">
							<span class="open_markets" data-id="inp53495043">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							FSM Moscow</span><span class="info_home_score">1</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							FK Rosich</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/JOR.png"> Jordan Cup, Women
				</div>
				<div class="sports_box sports_sc" data-id="inp53785467" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53785467" data-spo="축구" data-lg="Jordan Cup, Women" data-flag="329" data-home="Orthodox" data-away="Al-Ittihad">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53785467" data-spo="축구" data-lg="Jordan Cup, Women" data-flag="329" data-home="Orthodox" data-away="Al-Ittihad">
							<span class="open_markets" data-id="inp53785467">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Orthodox</span><span class="info_home_score">2</span><span class="info_vs">VS</span><span class="info_away_score">1</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Al-Ittihad</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/SVN.png"> 슬로베니아 컵
				</div>
				<div class="sports_box sports_sc" data-id="inp53536951" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53536951" data-spo="축구" data-lg="슬로베니아 컵" data-flag="24" data-home="SD Marjeta Na Dravskem Polju" data-away="NK Maribor">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53536951" data-spo="축구" data-lg="슬로베니아 컵" data-flag="24" data-home="SD Marjeta Na Dravskem Polju" data-away="NK Maribor">
							<span class="open_markets" data-id="inp53536951">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							SD Marjeta Na Dravskem Polju</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">3</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/2420.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							NK Maribor</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> 챔피언스리그
				</div>
				<div class="sports_box sports_vb" data-id="inp51619199" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp51619199" data-spo="배구" data-lg="챔피언스리그" data-flag="136" data-home="Orion Doetinchem" data-away="Selver/Taltech">
							<span class="s_type"><i class="fas fa-volleyball-ball" aria-hidden="true"></i></span><span class="s_time">After golden set</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp51619199" data-spo="배구" data-lg="챔피언스리그" data-flag="136" data-home="Orion Doetinchem" data-away="Selver/Taltech">
							<span class="open_markets" data-id="inp51619199">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/45746.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Orion Doetinchem</span><span class="info_home_score">3</span><span class="info_vs">VS</span><span class="info_away_score">1</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Selver/Taltech</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_vb" data-id="inp51619211" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp51619211" data-spo="배구" data-lg="챔피언스리그" data-flag="136" data-home="SL Benfica" data-away="CV Guaguas">
							<span class="s_type"><i class="fas fa-volleyball-ball" aria-hidden="true"></i></span><span class="s_time">After golden set</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp51619211" data-spo="배구" data-lg="챔피언스리그" data-flag="136" data-home="SL Benfica" data-away="CV Guaguas">
							<span class="open_markets" data-id="inp51619211">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/122964.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							SL Benfica</span><span class="info_home_score">3</span><span class="info_vs">VS</span><span class="info_away_score">1</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							CV Guaguas</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/RUS.png"> Moscow Championship
				</div>
				<div class="sports_box sports_sc" data-id="inp53811721" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53811721" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Sever U19" data-away="Novator Moscow">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53811721" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Sever U19" data-away="Novator Moscow">
							<span class="open_markets" data-id="inp53811721">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Sever U19</span><span class="info_home_score">1</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Novator Moscow</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_sc" data-id="inp53526227" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53526227" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="소콜 모스크바" data-away="Ym Spartak">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53526227" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="소콜 모스크바" data-away="Ym Spartak">
							<span class="open_markets" data-id="inp53526227">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							소콜 모스크바</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Ym Spartak</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_sc" data-id="inp53526223" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53526223" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Csp Dinamo" data-away="Lfk Sokol">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53526223" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Csp Dinamo" data-away="Lfk Sokol">
							<span class="open_markets" data-id="inp53526223">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Csp Dinamo</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">1</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Lfk Sokol</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_sc" data-id="inp53526233" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53526233" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Rosich-2" data-away="Akademiya Kantera">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53526233" data-spo="축구" data-lg="Moscow Championship" data-flag="21" data-home="Rosich-2" data-away="Akademiya Kantera">
							<span class="open_markets" data-id="inp53526233">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Rosich-2</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Akademiya Kantera</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/IRQ.png"> 이라크 리그
				</div>
				<div class="sports_box sports_sc" data-id="inp53808763" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53808763" data-spo="축구" data-lg="이라크 리그" data-flag="490" data-home="알 자우라" data-away="AL Karkh">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53808763" data-spo="축구" data-lg="이라크 리그" data-flag="490" data-home="알 자우라" data-away="AL Karkh">
							<span class="open_markets" data-id="inp53808763">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/35888.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							알 자우라</span><span class="info_home_score">1</span><span class="info_vs">VS</span><span class="info_away_score">1</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							AL Karkh</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> 클럽 친선경기
				</div>
				<div class="sports_box sports_bk" data-id="inp54007673" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp54007673" data-spo="농구" data-lg="클럽 친선경기" data-flag="103" data-home="Beirut SC" data-away="AL Wahda">
							<span class="s_type"><i class="fas fa-basketball-ball" aria-hidden="true"></i></span><span class="s_time">일시정지</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp54007673" data-spo="농구" data-lg="클럽 친선경기" data-flag="103" data-home="Beirut SC" data-away="AL Wahda">
							<span class="open_markets" data-id="inp54007673">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Beirut SC</span><span class="info_home_score">44</span><span class="info_vs">VS</span><span class="info_away_score">28</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							AL Wahda</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/RWA.png"> 북아메리카프로미식축구리그
				</div>
				<div class="sports_box sports_sc" data-id="inp52560961" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp52560961" data-spo="축구" data-lg="북아메리카프로미식축구리그" data-flag="951" data-home="Bugesera FC" data-away="Gasogi United">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp52560961" data-spo="축구" data-lg="북아메리카프로미식축구리그" data-flag="951" data-home="Bugesera FC" data-away="Gasogi United">
							<span class="open_markets" data-id="inp52560961">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/380060.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Bugesera FC</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/528591.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Gasogi United</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/FRA.png"> 쿠프 드 프랑스
				</div>
				<div class="sports_box sports_sc" data-id="inp54004765" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp54004765" data-spo="축구" data-lg="쿠프 드 프랑스" data-flag="7" data-home="ES Nanterre" data-away="CS Meaux Academy">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp54004765" data-spo="축구" data-lg="쿠프 드 프랑스" data-flag="7" data-home="ES Nanterre" data-away="CS Meaux Academy">
							<span class="open_markets" data-id="inp54004765">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/655387.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							ES Nanterre</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">1</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/83559.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							CS Meaux Academy</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> U20 AFC Asian Cup
				</div>
				<div class="sports_box sports_sc" data-id="inp53720341" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53720341" data-spo="축구" data-lg="U20 AFC Asian Cup" data-flag="392" data-home="Sri Lanka" data-away="Malaysia">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">후반전</span><span class="now_time">75:51</span>
						</div>
						<div class="sports_markets " data-id="inp53720341" data-spo="축구" data-lg="U20 AFC Asian Cup" data-flag="392" data-home="Sri Lanka" data-away="Malaysia">
							<span class="open_markets" data-id="inp53720341">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Sri Lanka</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">1</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/22694.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Malaysia</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/RUS.png"> Saint-Petersburg U21 Championship
				</div>
				<div class="sports_box sports_sc" data-id="inp52768167" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp52768167" data-spo="축구" data-lg="Saint-Petersburg U21 Championship" data-flag="21" data-home="Sdyushor Zenit St. Petersburg" data-away="Kirovets Voshozhdenie">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp52768167" data-spo="축구" data-lg="Saint-Petersburg U21 Championship" data-flag="21" data-home="Sdyushor Zenit St. Petersburg" data-away="Kirovets Voshozhdenie">
							<span class="open_markets" data-id="inp52768167">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Sdyushor Zenit St. Petersburg</span><span class="info_home_score">1</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Kirovets Voshozhdenie</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/HRV.png"> Croatia Cup, Women
				</div>
				<div class="sports_box sports_sc" data-id="inp53610313" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53610313" data-spo="축구" data-lg="Croatia Cup, Women" data-flag="14" data-home="Znk Sesvetski Kraljevec" data-away="Znk Agram">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53610313" data-spo="축구" data-lg="Croatia Cup, Women" data-flag="14" data-home="Znk Sesvetski Kraljevec" data-away="Znk Agram">
							<span class="open_markets" data-id="inp53610313">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Znk Sesvetski Kraljevec</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">3</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Znk Agram</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/TGO.png"> Championnat National Women
				</div>
				<div class="sports_box sports_sc" data-id="inp53969297" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53969297" data-spo="축구" data-lg="Championnat National Women" data-flag="866" data-home="Entente 2" data-away="Athleta FC">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp53969297" data-spo="축구" data-lg="Championnat National Women" data-flag="866" data-home="Entente 2" data-away="Athleta FC">
							<span class="open_markets" data-id="inp53969297">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Entente 2</span><span class="info_home_score">1</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Athleta FC</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/USA.png"> NHL 프리시즌
				</div>
				<div class="sports_box sports_ih" data-id="inp51253533" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp51253533" data-spo="아이스 하키" data-lg="NHL 프리시즌" data-flag="37" data-home="버펄로 세이버스" data-away="디트로이트 레드윙스">
							<span class="s_type"><i class="fas fa-hockey-puck" aria-hidden="true"></i></span><span class="s_time">Second break</span><span class="now_time">39:53</span>
						</div>
						<div class="sports_markets " data-id="inp51253533" data-spo="아이스 하키" data-lg="NHL 프리시즌" data-flag="37" data-home="버펄로 세이버스" data-away="디트로이트 레드윙스">
							<span class="open_markets" data-id="inp51253533">+31 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3678.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							버펄로 세이버스</span><span class="info_home_score">2</span><span class="info_vs">VS</span><span class="info_away_score">1</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3685.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							디트로이트 레드윙스</span>
						</div>
						<div class="s_odds">
							<div class="sel_odds team_home " data-m="승무패" data-bid="i5125353311" data-gid="inp51253533" data-ratio="1.44" data-stat="1">
								<span><span class="odds_name">버펄로 세이버스</span></span>
								<div class="sp_icon_box">
									<img src="https://boss-1177.com/static/img/icon_1x2.png"><span class="odds_ratio">1.44</span>
								</div>
							</div>
							<div class="sel_odds team_draw " data-m="승무패" data-bid="i5125353312" data-gid="inp51253533" data-ratio="3.46" data-stat="1">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.46</span>
							</div>
							<div class="sel_odds team_away " data-m="승무패" data-bid="i5125353313" data-gid="inp51253533" data-ratio="7.12" data-stat="1">
								<div class="sp_icon_box">
									<span class="odds_ratio">7.12</span><img src="https://boss-1177.com/static/img/icon_1x2.png">
								</div>
								<span><span class="odds_name">디트로이트 레드윙스</span></span>
							</div>
						</div>
					</div>
				</div>
				<div class="sports_box sports_ih" data-id="inp51253535" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp51253535" data-spo="아이스 하키" data-lg="NHL 프리시즌" data-flag="37" data-home="콜럼버스 블루재키츠" data-away="워싱턴 카피털스">
							<span class="s_type"><i class="fas fa-hockey-puck" aria-hidden="true"></i></span><span class="s_time">2피리어드</span><span class="now_time">39:36</span>
						</div>
						<div class="sports_markets " data-id="inp51253535" data-spo="아이스 하키" data-lg="NHL 프리시즌" data-flag="37" data-home="콜럼버스 블루재키츠" data-away="워싱턴 카피털스">
							<span class="open_markets" data-id="inp51253535">+24 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3683.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							콜럼버스 블루재키츠</span><span class="info_home_score">1</span><span class="info_vs">VS</span><span class="info_away_score">2</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3691.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							워싱턴 카피털스</span>
						</div>
						<div class="s_odds">
							<div class="sel_odds team_home " data-m="승무패" data-bid="i5125353511" data-gid="inp51253535" data-ratio="10.92" data-stat="1">
								<span><span class="odds_name">콜럼버스 블루재키츠</span></span>
								<div class="sp_icon_box">
									<img src="https://boss-1177.com/static/img/icon_1x2.png"><span class="odds_ratio">10.92</span>
								</div>
							</div>
							<div class="sel_odds team_draw " data-m="승무패" data-bid="i5125353512" data-gid="inp51253535" data-ratio="4.03" data-stat="1">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">4.03</span>
							</div>
							<div class="sel_odds team_away " data-m="승무패" data-bid="i5125353513" data-gid="inp51253535" data-ratio="1.28" data-stat="1">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.28</span><img src="https://boss-1177.com/static/img/icon_1x2.png">
								</div>
								<span><span class="odds_name">워싱턴 카피털스</span></span>
							</div>
						</div>
					</div>
				</div>
				<div class="sports_box sports_ih" data-id="inp51253539" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp51253539" data-spo="아이스 하키" data-lg="NHL 프리시즌" data-flag="37" data-home="뉴욕 아일랜더스" data-away="필라델피아 프라이어">
							<span class="s_type"><i class="fas fa-hockey-puck" aria-hidden="true"></i></span><span class="s_time">Second break</span><span class="now_time">40:00</span>
						</div>
						<div class="sports_markets " data-id="inp51253539" data-spo="아이스 하키" data-lg="NHL 프리시즌" data-flag="37" data-home="뉴욕 아일랜더스" data-away="필라델피아 프라이어">
							<span class="open_markets" data-id="inp51253539">+32 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3703.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							뉴욕 아일랜더스</span><span class="info_home_score">3</span><span class="info_vs">VS</span><span class="info_away_score">2</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3699.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							필라델피아 프라이어</span>
						</div>
						<div class="s_odds">
							<div class="sel_odds team_home disabled" data-m="승무패" data-bid="i5125353911" data-gid="inp51253539" data-ratio="1.23" data-stat="2">
								<span><span class="odds_name">뉴욕 아일랜더스</span></span>
								<div class="sp_icon_box">
									<img src="https://boss-1177.com/static/img/icon_1x2.png"><span class="odds_ratio">1.23</span>
								</div>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
							<div class="sel_odds team_draw " data-m="승무패" data-bid="i5125353912" data-gid="inp51253539" data-ratio="4.46" data-stat="1">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">4.46</span>
							</div>
							<div class="sel_odds team_away " data-m="승무패" data-bid="i5125353913" data-gid="inp51253539" data-ratio="14.25" data-stat="1">
								<div class="sp_icon_box">
									<span class="odds_ratio">14.25</span><img src="https://boss-1177.com/static/img/icon_1x2.png">
								</div>
								<span><span class="odds_name">필라델피아 프라이어</span></span>
							</div>
						</div>
					</div>
				</div>
				<div class="sports_box sports_ih" data-id="inp51253537" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp51253537" data-spo="아이스 하키" data-lg="NHL 프리시즌" data-flag="37" data-home="플로리다 팬서스" data-away="탬파베이 라이트닝">
							<span class="s_type"><i class="fas fa-hockey-puck" aria-hidden="true"></i></span><span class="s_time">Second break</span><span class="now_time">39:55</span>
						</div>
						<div class="sports_markets " data-id="inp51253537" data-spo="아이스 하키" data-lg="NHL 프리시즌" data-flag="37" data-home="플로리다 팬서스" data-away="탬파베이 라이트닝">
							<span class="open_markets" data-id="inp51253537">+28 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3687.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							플로리다 팬서스</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">2</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3694.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							탬파베이 라이트닝</span>
						</div>
						<div class="s_odds">
							<div class="sel_odds team_home " data-m="승무패" data-bid="i5125353711" data-gid="inp51253537" data-ratio="19.00" data-stat="1">
								<span><span class="odds_name">플로리다 팬서스</span></span>
								<div class="sp_icon_box">
									<img src="https://boss-1177.com/static/img/icon_1x2.png"><span class="odds_ratio">19.00</span>
								</div>
							</div>
							<div class="sel_odds team_draw " data-m="승무패" data-bid="i5125353712" data-gid="inp51253537" data-ratio="6.17" data-stat="1">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">6.17</span>
							</div>
							<div class="sel_odds team_away disabled" data-m="승무패" data-bid="i5125353713" data-gid="inp51253537" data-ratio="1.56" data-stat="2">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.56</span><img src="https://boss-1177.com/static/img/icon_1x2.png">
								</div>
								<span><span class="odds_name">탬파베이 라이트닝</span></span>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="sports_box sports_ih" data-id="inp51253525" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp51253525" data-spo="아이스 하키" data-lg="NHL 프리시즌" data-flag="37" data-home="디트로이트 레드윙스" data-away="피츠버그 펭귄스">
							<span class="s_type"><i class="fas fa-hockey-puck" aria-hidden="true"></i></span><span class="s_time">1피리어드</span><span class="now_time"></span>
						</div>
						<div class="sports_markets " data-id="inp51253525" data-spo="아이스 하키" data-lg="NHL 프리시즌" data-flag="37" data-home="디트로이트 레드윙스" data-away="피츠버그 펭귄스">
							<span class="open_markets" data-id="inp51253525">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3685.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							디트로이트 레드윙스</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3697.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							피츠버그 펭귄스</span>
						</div>
						<div class="s_odds">
							<div class="sel_odds team_home disabled" data-m="승무패" data-bid="i5125352511" data-gid="inp51253525" data-ratio="1.71" data-stat="2">
								<span><span class="odds_name">디트로이트 레드윙스</span></span>
								<div class="sp_icon_box">
									<img src="https://boss-1177.com/static/img/icon_1x2.png"><span class="odds_ratio">1.71</span>
								</div>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
							<div class="sel_odds team_draw disabled" data-m="승무패" data-bid="i5125352512" data-gid="inp51253525" data-ratio="4.03" data-stat="2">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">4.03</span>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
							<div class="sel_odds team_away disabled" data-m="승무패" data-bid="i5125352513" data-gid="inp51253525" data-ratio="3.32" data-stat="2">
								<div class="sp_icon_box">
									<span class="odds_ratio">3.32</span><img src="https://boss-1177.com/static/img/icon_1x2.png">
								</div>
								<span><span class="odds_name">피츠버그 펭귄스</span></span>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="sports_box sports_ih" data-id="inp51253543" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp51253543" data-spo="아이스 하키" data-lg="NHL 프리시즌" data-flag="37" data-home="뉴저지 데블스" data-away="뉴욕 레인저스">
							<span class="s_type"><i class="fas fa-hockey-puck" aria-hidden="true"></i></span><span class="s_time">2피리어드</span><span class="now_time">40:00</span>
						</div>
						<div class="sports_markets " data-id="inp51253543" data-spo="아이스 하키" data-lg="NHL 프리시즌" data-flag="37" data-home="뉴저지 데블스" data-away="뉴욕 레인저스">
							<span class="open_markets" data-id="inp51253543">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3704.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							뉴저지 데블스</span><span class="info_home_score">2</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3701.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							뉴욕 레인저스</span>
						</div>
						<div class="s_odds">
							<div class="sel_odds team_home disabled" data-m="승무패" data-bid="i5125354311" data-gid="inp51253543" data-ratio="1.23" data-stat="2">
								<span><span class="odds_name">뉴저지 데블스</span></span>
								<div class="sp_icon_box">
									<img src="https://boss-1177.com/static/img/icon_1x2.png"><span class="odds_ratio">1.23</span>
								</div>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
							<div class="sel_odds team_draw disabled" data-m="승무패" data-bid="i5125354312" data-gid="inp51253543" data-ratio="5.22" data-stat="2">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">5.22</span>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
							<div class="sel_odds team_away disabled" data-m="승무패" data-bid="i5125354313" data-gid="inp51253543" data-ratio="16.62" data-stat="2">
								<div class="sp_icon_box">
									<span class="odds_ratio">16.62</span><img src="https://boss-1177.com/static/img/icon_1x2.png">
								</div>
								<span><span class="odds_name">뉴욕 레인저스</span></span>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/MEX.png"> 리가 MX, 여자, 에페르투라
				</div>
				<div class="sports_box sports_sc" data-id="inp50859827" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp50859827" data-spo="축구" data-lg="리가 MX, 여자, 에페르투라" data-flag="12" data-home="Club Puebla" data-away="Queretaro FC">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">후반전</span><span class="now_time">76:41</span>
						</div>
						<div class="sports_markets " data-id="inp50859827" data-spo="축구" data-lg="리가 MX, 여자, 에페르투라" data-flag="12" data-home="Club Puebla" data-away="Queretaro FC">
							<span class="open_markets" data-id="inp50859827">+12 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/458511.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Club Puebla</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">1</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/376768.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Queretaro FC</span>
						</div>
						<div class="s_odds">
							<div class="sel_odds team_home disabled" data-m="승무패" data-bid="i5085982711" data-gid="inp50859827" data-ratio="28.50" data-stat="2">
								<span><span class="odds_name">Club Puebla</span></span>
								<div class="sp_icon_box">
									<img src="https://boss-1177.com/static/img/icon_1x2.png"><span class="odds_ratio">28.50</span>
								</div>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
							<div class="sel_odds team_draw disabled" data-m="승무패" data-bid="i5085982712" data-gid="inp50859827" data-ratio="4.37" data-stat="2">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">4.37</span>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
							<div class="sel_odds team_away disabled" data-m="승무패" data-bid="i5085982713" data-gid="inp50859827" data-ratio="1.12" data-stat="2">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.12</span><img src="https://boss-1177.com/static/img/icon_1x2.png">
								</div>
								<span><span class="odds_name">Queretaro FC</span></span>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/PRY.png"> 세군다 디비전
				</div>
				<div class="sports_box sports_sc" data-id="inp53950667" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53950667" data-spo="축구" data-lg="세군다 디비전" data-flag="280" data-home="스포르티보 산 로렌조" data-away="CA Colegiales">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">후반전</span><span class="now_time">79:57</span>
						</div>
						<div class="sports_markets " data-id="inp53950667" data-spo="축구" data-lg="세군다 디비전" data-flag="280" data-home="스포르티보 산 로렌조" data-away="CA Colegiales">
							<span class="open_markets" data-id="inp53950667">+12 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/90972.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							스포르티보 산 로렌조</span><span class="info_home_score">3</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/463347.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							CA Colegiales</span>
						</div>
						<div class="s_odds">
							<div class="sel_odds team_home disabled" data-m="승무패" data-bid="i5395066711" data-gid="inp53950667" data-ratio="1.18" data-stat="2">
								<span><span class="odds_name">스포르티보 산 로렌조</span></span>
								<div class="sp_icon_box">
									<img src="https://boss-1177.com/static/img/icon_1x2.png"><span class="odds_ratio">1.18</span>
								</div>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
							<div class="sel_odds team_draw " data-m="승무패" data-bid="i5395066712" data-gid="inp53950667" data-ratio="9.97" data-stat="1">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">9.97</span>
							</div>
							<div class="sel_odds team_away " data-m="승무패" data-bid="i5395066713" data-gid="inp53950667" data-ratio="95.00" data-stat="1">
								<div class="sp_icon_box">
									<span class="odds_ratio">95.00</span><img src="https://boss-1177.com/static/img/icon_1x2.png">
								</div>
								<span><span class="odds_name">CA Colegiales</span></span>
							</div>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/URY.png"> 프리메라 디비전
				</div>
				<div class="sports_box sports_sc" data-id="inp53753105" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53753105" data-spo="축구" data-lg="프리메라 디비전" data-flag="57" data-home="CA 페냐롤" data-away="라싱 클루브 데 몬테비데오">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">후반전</span><span class="now_time">78:38</span>
						</div>
						<div class="sports_markets " data-id="inp53753105" data-spo="축구" data-lg="프리메라 디비전" data-flag="57" data-home="CA 페냐롤" data-away="라싱 클루브 데 몬테비데오">
							<span class="open_markets" data-id="inp53753105">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3227.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							CA 페냐롤</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/25010.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							라싱 클루브 데 몬테비데오</span>
						</div>
						<div class="s_odds">
							<div class="sel_odds team_home disabled" data-m="승무패" data-bid="i5375310511" data-gid="inp53753105" data-ratio="3.27" data-stat="2">
								<span><span class="odds_name">CA 페냐롤</span></span>
								<div class="sp_icon_box">
									<img src="https://boss-1177.com/static/img/icon_1x2.png"><span class="odds_ratio">3.27</span>
								</div>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
							<div class="sel_odds team_draw disabled" data-m="승무패" data-bid="i5375310512" data-gid="inp53753105" data-ratio="1.37" data-stat="2">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">1.37</span>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
							<div class="sel_odds team_away disabled" data-m="승무패" data-bid="i5375310513" data-gid="inp53753105" data-ratio="7.60" data-stat="2">
								<div class="sp_icon_box">
									<span class="odds_ratio">7.60</span><img src="https://boss-1177.com/static/img/icon_1x2.png">
								</div>
								<span><span class="odds_name">라싱 클루브 데 몬테비데오</span></span>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/CHL.png"> 프리메라 디비젼
				</div>
				<div class="sports_box sports_sc" data-id="inp47445529" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp47445529" data-spo="축구" data-lg="프리메라 디비젼" data-flag="49" data-home="아우닥스 이탈리아노" data-away="오이긴스 FC">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">후반전</span><span class="now_time">47:25</span>
						</div>
						<div class="sports_markets " data-id="inp47445529" data-spo="축구" data-lg="프리메라 디비젼" data-flag="49" data-home="아우닥스 이탈리아노" data-away="오이긴스 FC">
							<span class="open_markets" data-id="inp47445529">+12 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3162.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							아우닥스 이탈리아노</span><span class="info_home_score">1</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3163.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							오이긴스 FC</span>
						</div>
						<div class="s_odds">
							<div class="sel_odds team_home " data-m="승무패" data-bid="i4744552911" data-gid="inp47445529" data-ratio="1.34" data-stat="1">
								<span><span class="odds_name">아우닥스 이탈리아노</span></span>
								<div class="sp_icon_box">
									<img src="https://boss-1177.com/static/img/icon_1x2.png"><span class="odds_ratio">1.34</span>
								</div>
							</div>
							<div class="sel_odds team_draw " data-m="승무패" data-bid="i4744552912" data-gid="inp47445529" data-ratio="3.46" data-stat="1">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.46</span>
							</div>
							<div class="sel_odds team_away " data-m="승무패" data-bid="i4744552913" data-gid="inp47445529" data-ratio="8.78" data-stat="1">
								<div class="sp_icon_box">
									<span class="odds_ratio">8.78</span><img src="https://boss-1177.com/static/img/icon_1x2.png">
								</div>
								<span><span class="odds_name">오이긴스 FC</span></span>
							</div>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/BRA.png"> 브라질 세리에 B
				</div>
				<div class="sports_box sports_sc" data-id="inp48424427" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp48424427" data-spo="축구" data-lg="브라질 세리에 B" data-flag="13" data-home="그레미우 노보리존치누" data-away="AA 폰치 프레타">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time">36:55</span>
						</div>
						<div class="sports_markets " data-id="inp48424427" data-spo="축구" data-lg="브라질 세리에 B" data-flag="13" data-home="그레미우 노보리존치누" data-away="AA 폰치 프레타">
							<span class="open_markets" data-id="inp48424427">+0 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/135514.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							그레미우 노보리존치누</span><span class="info_home_score">1</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/1969.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							AA 폰치 프레타</span>
						</div>
						<div class="s_odds">
							<div class="sel_odds team_home disabled" data-m="승무패" data-bid="i4842442711" data-gid="inp48424427" data-ratio="1.09" data-stat="2">
								<span><span class="odds_name">그레미우 노보리존치누</span></span>
								<div class="sp_icon_box">
									<img src="https://boss-1177.com/static/img/icon_1x2.png"><span class="odds_ratio">1.09</span>
								</div>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
							<div class="sel_odds team_draw disabled" data-m="승무패" data-bid="i4842442712" data-gid="inp48424427" data-ratio="5.41" data-stat="2">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">5.41</span>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
							<div class="sel_odds team_away disabled" data-m="승무패" data-bid="i4842442713" data-gid="inp48424427" data-ratio="19.95" data-stat="2">
								<div class="sp_icon_box">
									<span class="odds_ratio">19.95</span><img src="https://boss-1177.com/static/img/icon_1x2.png">
								</div>
								<span><span class="odds_name">AA 폰치 프레타</span></span>
								<div class="sel_lock">
									<i class="fas fa-lock" aria-hidden="true"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/ARG.png"> 수퍼리가
				</div>
				<div class="sports_box sports_sc" data-id="inp46656997" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp46656997" data-spo="축구" data-lg="수퍼리가" data-flag="48" data-home="라싱 클루브" data-away="CA 플라텐세">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time">35:21</span>
						</div>
						<div class="sports_markets " data-id="inp46656997" data-spo="축구" data-lg="수퍼리가" data-flag="48" data-home="라싱 클루브" data-away="CA 플라텐세">
							<span class="open_markets" data-id="inp46656997">+39 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3215.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							라싱 클루브</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">1</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/36837.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							CA 플라텐세</span>
						</div>
						<div class="s_odds">
							<div class="sel_odds team_home " data-m="승무패" data-bid="i4665699711" data-gid="inp46656997" data-ratio="3.18" data-stat="1">
								<span><span class="odds_name">라싱 클루브</span></span>
								<div class="sp_icon_box">
									<img src="https://boss-1177.com/static/img/icon_1x2.png"><span class="odds_ratio">3.18</span>
								</div>
							</div>
							<div class="sel_odds team_draw " data-m="승무패" data-bid="i4665699712" data-gid="inp46656997" data-ratio="2.75" data-stat="1">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">2.75</span>
							</div>
							<div class="sel_odds team_away " data-m="승무패" data-bid="i4665699713" data-gid="inp46656997" data-ratio="2.13" data-stat="1">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.13</span><img src="https://boss-1177.com/static/img/icon_1x2.png">
								</div>
								<span><span class="odds_name">CA 플라텐세</span></span>
							</div>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/CAN.png"> 캐나다 프리미어 리그
				</div>
				<div class="sports_box sports_sc" data-id="inp47412837" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp47412837" data-spo="축구" data-lg="캐나다 프리미어 리그" data-flag="388" data-home="Valour FC" data-away="Pacific FC">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time">26:43</span>
						</div>
						<div class="sports_markets " data-id="inp47412837" data-spo="축구" data-lg="캐나다 프리미어 리그" data-flag="388" data-home="Valour FC" data-away="Pacific FC">
							<span class="open_markets" data-id="inp47412837">+28 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/543885.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Valour FC</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/543883.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Pacific FC</span>
						</div>
						<div class="s_odds">
							<div class="sel_odds team_home " data-m="승무패" data-bid="i4741283711" data-gid="inp47412837" data-ratio="2.70" data-stat="1">
								<span><span class="odds_name">Valour FC</span></span>
								<div class="sp_icon_box">
									<img src="https://boss-1177.com/static/img/icon_1x2.png"><span class="odds_ratio">2.70</span>
								</div>
							</div>
							<div class="sel_odds team_draw " data-m="승무패" data-bid="i4741283712" data-gid="inp47412837" data-ratio="2.70" data-stat="1">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">2.70</span>
							</div>
							<div class="sel_odds team_away " data-m="승무패" data-bid="i4741283713" data-gid="inp47412837" data-ratio="2.47" data-stat="1">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.47</span><img src="https://boss-1177.com/static/img/icon_1x2.png">
								</div>
								<span><span class="odds_name">Pacific FC</span></span>
							</div>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/ARG.png"> 수퍼리가
				</div>
				<div class="sports_box sports_sc" data-id="inp46657009" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp46657009" data-spo="축구" data-lg="수퍼리가" data-flag="48" data-home="CA 라누스" data-away="힘나시아 라플라타">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time">22:32</span>
						</div>
						<div class="sports_markets " data-id="inp46657009" data-spo="축구" data-lg="수퍼리가" data-flag="48" data-home="CA 라누스" data-away="힘나시아 라플라타">
							<span class="open_markets" data-id="inp46657009">+39 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3218.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							CA 라누스</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3205.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							힘나시아 라플라타</span>
						</div>
						<div class="s_odds">
							<div class="sel_odds team_home " data-m="승무패" data-bid="i4665700911" data-gid="inp46657009" data-ratio="2.04" data-stat="1">
								<span><span class="odds_name">CA 라누스</span></span>
								<div class="sp_icon_box">
									<img src="https://boss-1177.com/static/img/icon_1x2.png"><span class="odds_ratio">2.04</span>
								</div>
							</div>
							<div class="sel_odds team_draw " data-m="승무패" data-bid="i4665700912" data-gid="inp46657009" data-ratio="2.47" data-stat="1">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">2.47</span>
							</div>
							<div class="sel_odds team_away " data-m="승무패" data-bid="i4665700913" data-gid="inp46657009" data-ratio="3.99" data-stat="1">
								<div class="sp_icon_box">
									<span class="odds_ratio">3.99</span><img src="https://boss-1177.com/static/img/icon_1x2.png">
								</div>
								<span><span class="odds_name">힘나시아 라플라타</span></span>
							</div>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/BRA.png"> 브라질 세리에 B
				</div>
				<div class="sports_box sports_sc" data-id="inp48424423" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp48424423" data-spo="축구" data-lg="브라질 세리에 B" data-flag="13" data-home="구아라니 FC" data-away="아바이 FC">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time">5:56</span>
						</div>
						<div class="sports_markets " data-id="inp48424423" data-spo="축구" data-lg="브라질 세리에 B" data-flag="13" data-home="구아라니 FC" data-away="아바이 FC">
							<span class="open_markets" data-id="inp48424423">+39 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/1972.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							구아라니 FC</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/7315.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							아바이 FC</span>
						</div>
						<div class="s_odds">
							<div class="sel_odds team_home " data-m="승무패" data-bid="i4842442311" data-gid="inp48424423" data-ratio="2.13" data-stat="1">
								<span><span class="odds_name">구아라니 FC</span></span>
								<div class="sp_icon_box">
									<img src="https://boss-1177.com/static/img/icon_1x2.png"><span class="odds_ratio">2.13</span>
								</div>
							</div>
							<div class="sel_odds team_draw " data-m="승무패" data-bid="i4842442312" data-gid="inp48424423" data-ratio="2.56" data-stat="1">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">2.56</span>
							</div>
							<div class="sel_odds team_away " data-m="승무패" data-bid="i4842442313" data-gid="inp48424423" data-ratio="3.46" data-stat="1">
								<div class="sp_icon_box">
									<span class="odds_ratio">3.46</span><img src="https://boss-1177.com/static/img/icon_1x2.png">
								</div>
								<span><span class="odds_name">아바이 FC</span></span>
							</div>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/JAM.png"> 프리미어 리그
				</div>
				<div class="sports_box sports_sc" data-id="inp53651105" data-stat="now_playing">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53651105" data-spo="축구" data-lg="프리미어 리그" data-flag="502" data-home="Portmore United" data-away="Tivoli Gardens">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">전반전</span><span class="now_time">4:36</span>
						</div>
						<div class="sports_markets " data-id="inp53651105" data-spo="축구" data-lg="프리미어 리그" data-flag="502" data-home="Portmore United" data-away="Tivoli Gardens">
							<span class="open_markets" data-id="inp53651105">+28 추가 배팅옵션</span>
						</div>
						<div class="sports_info">
							<span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/124528.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Portmore United</span><span class="info_home_score">0</span><span class="info_vs">VS</span><span class="info_away_score">0</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/173734.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Tivoli Gardens</span>
						</div>
						<div class="s_odds">
							<div class="sel_odds team_home " data-m="승무패" data-bid="i5365110511" data-gid="inp53651105" data-ratio="2.80" data-stat="1">
								<span><span class="odds_name">Portmore United</span></span>
								<div class="sp_icon_box">
									<img src="https://boss-1177.com/static/img/icon_1x2.png"><span class="odds_ratio">2.80</span>
								</div>
							</div>
							<div class="sel_odds team_draw " data-m="승무패" data-bid="i5365110512" data-gid="inp53651105" data-ratio="2.85" data-stat="1">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">2.85</span>
							</div>
							<div class="sel_odds team_away " data-m="승무패" data-bid="i5365110513" data-gid="inp53651105" data-ratio="2.28" data-stat="1">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.28</span><img src="https://boss-1177.com/static/img/icon_1x2.png">
								</div>
								<span><span class="odds_name">Tivoli Gardens</span></span>
							</div>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/USA.png"> NHL 프리시즌
				</div>
				<div class="sports_box sports_ih" data-id="inp51253645" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp51253645" data-spo="아이스 하키" data-lg="NHL 프리시즌" data-flag="37" data-home="에드먼턴 오일러스" data-away="밴쿠버 커넉스">
							<span class="s_type"><i class="fas fa-hockey-puck" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 10:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3686.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							에드먼턴 오일러스</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3692.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							밴쿠버 커넉스</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_ih" data-id="inp51253647" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp51253647" data-spo="아이스 하키" data-lg="NHL 프리시즌" data-flag="37" data-home="캘거리 플레임스" data-away="Seattle Kraken">
							<span class="s_type"><i class="fas fa-hockey-puck" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 10:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3679.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							캘거리 플레임스</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/794340.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Seattle Kraken</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/CRI.png"> 프리메라 디비젼, 아페르투라
				</div>
				<div class="sports_box sports_sc" data-id="inp50915873" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp50915873" data-spo="축구" data-lg="프리메라 디비젼, 아페르투라" data-flag="289" data-home="Sporting FC" data-away="Puntarenas FC">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 10:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/313515.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Sporting FC</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/7046.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Puntarenas FC</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/USA.png"> NHL 프리시즌
				</div>
				<div class="sports_box sports_ih" data-id="inp51253649" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp51253649" data-spo="아이스 하키" data-lg="NHL 프리시즌" data-flag="37" data-home="애너하임 덕스" data-away="로스앤젤레스 킹스">
							<span class="s_type"><i class="fas fa-hockey-puck" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 11:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3675.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							애너하임 덕스</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/3688.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							로스앤젤레스 킹스</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/KOR.png"> College, Women
				</div>
				<div class="sports_box sports_bk" data-id="inp54105431" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp54105431" data-spo="농구" data-lg="College, Women" data-flag="375" data-home="Gwangju University" data-away="Pusan National University">
							<span class="s_type"><i class="fas fa-basketball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 14:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Gwangju University</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Pusan National University</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/KOR.png"> College
				</div>
				<div class="sports_box sports_bk" data-id="inp54044481" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp54044481" data-spo="농구" data-lg="College" data-flag="375" data-home="Myongji University" data-away="Dongguk University">
							<span class="s_type"><i class="fas fa-basketball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 15:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Myongji University</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Dongguk University</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/KOR.png"> KOVO 컵, 여자
				</div>
				<div class="sports_box sports_vb" data-id="inp53475851" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53475851" data-spo="배구" data-lg="KOVO 컵, 여자" data-flag="447" data-home="Gimcheon Hi-Pass" data-away="Gwangju Ai Peppers">
							<span class="s_type"><i class="fas fa-volleyball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 15:30:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/229252.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Gimcheon Hi-Pass</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/842316.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Gwangju Ai Peppers</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> 클럽 친선경기
				</div>
				<div class="sports_box sports_bk" data-id="inp54140323" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp54140323" data-spo="농구" data-lg="클럽 친선경기" data-flag="103" data-home="KCC Egis" data-away="Sangmu Phoenix">
							<span class="s_type"><i class="fas fa-basketball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 15:30:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/126292.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							KCC Egis</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Sangmu Phoenix</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> AFC 챔피언스리그
				</div>
				<div class="sports_box sports_sc" data-id="inp52647587" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp52647587" data-spo="축구" data-lg="AFC 챔피언스리그" data-flag="393" data-home="Central Coast Mariners" data-away="Buriram United">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 17:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/5966.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Central Coast Mariners</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/34218.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Buriram United</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/KOR.png"> KBO
				</div>
				<div class="sports_box sports_bs" data-id="inp53952687" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53952687" data-spo="야구" data-lg="KBO" data-flag="384" data-home="NC 다이노스" data-away=" 롯데 자이언츠">
							<span class="s_type"><i class="fas fa-baseball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 17:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/249973.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							NC 다이노스</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/249971.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							 롯데 자이언츠</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_bs" data-id="inp54141851" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp54141851" data-spo="야구" data-lg="KBO" data-flag="384" data-home="KT" data-away="SSG 랜더스">
							<span class="s_type"><i class="fas fa-baseball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 17:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/249967.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							KT</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/249979.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							SSG 랜더스</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/JPN.png"> NPB
				</div>
				<div class="sports_box sports_bs" data-id="inp47095189" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp47095189" data-spo="야구" data-lg="NPB" data-flag="211" data-home="라쿠텐" data-away="치바 롯데 ">
							<span class="s_type"><i class="fas fa-baseball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 18:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/67118.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							라쿠텐</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/67112.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							치바 롯데 </span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_bs" data-id="inp47095187" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp47095187" data-spo="야구" data-lg="NPB" data-flag="211" data-home=" 세이부 " data-away="니혼햄">
							<span class="s_type"><i class="fas fa-baseball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 18:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/67120.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							 세이부 </span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/67114.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							니혼햄</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_bs" data-id="inp47095185" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp47095185" data-spo="야구" data-lg="NPB" data-flag="211" data-home=" 소프트뱅크" data-away="오릭스 ">
							<span class="s_type"><i class="fas fa-baseball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 18:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/67122.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							 소프트뱅크</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/67116.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							오릭스 </span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_bs" data-id="inp54132673" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp54132673" data-spo="야구" data-lg="NPB" data-flag="211" data-home="요코하마 " data-away="히로시마 ">
							<span class="s_type"><i class="fas fa-baseball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 18:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/67110.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							요코하마 </span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/67106.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							히로시마 </span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/PHL.png"> PBA, 거버너 컵
				</div>
				<div class="sports_box sports_bk" data-id="inp54038677" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp54038677" data-spo="농구" data-lg="PBA, 거버너 컵" data-flag="539" data-home="Rain or Shine Elasto Painters" data-away="Timplados Hotshots">
							<span class="s_type"><i class="fas fa-basketball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 18:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/96585.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Rain or Shine Elasto Painters</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/96587.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Timplados Hotshots</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> 클럽 친선경기
				</div>
				<div class="sports_box sports_bk" data-id="inp53809579" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53809579" data-spo="농구" data-lg="클럽 친선경기" data-flag="103" data-home="Tbilisi State University" data-away="BC Orbi">
							<span class="s_type"><i class="fas fa-basketball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 18:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Tbilisi State University</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							BC Orbi</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> AFC 챔피언스리그
				</div>
				<div class="sports_box sports_sc" data-id="inp52647591" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp52647591" data-spo="축구" data-lg="AFC 챔피언스리그" data-flag="393" data-home="FC Pohang Steelers" data-away="Shanghai Port FC">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 19:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/7650.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							FC Pohang Steelers</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/41537.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Shanghai Port FC</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_sc" data-id="inp52647589" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp52647589" data-spo="축구" data-lg="AFC 챔피언스리그" data-flag="393" data-home="Kawasaki Frontale" data-away="Gwangju FC">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 19:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/5127.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Kawasaki Frontale</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/48912.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Gwangju FC</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/KOR.png"> KOVO 컵, 여자
				</div>
				<div class="sports_box sports_vb" data-id="inp53475853" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53475853" data-spo="배구" data-lg="KOVO 컵, 여자" data-flag="447" data-home="Seoul KIXX" data-away="Suwon Hillstate">
							<span class="s_type"><i class="fas fa-volleyball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 19:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/195566.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Seoul KIXX</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/195574.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Suwon Hillstate</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> U20 COSAFA Championship, Group B
				</div>
				<div class="sports_box sports_sc" data-id="inp53527617" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53527617" data-spo="축구" data-lg="U20 COSAFA Championship, Group B" data-flag="392" data-home="Zambia" data-away="Namibia">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 19:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Zambia</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Namibia</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> UEFA YL
				</div>
				<div class="sports_box sports_sc" data-id="inp53298567" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53298567" data-spo="축구" data-lg="UEFA YL" data-flag="392" data-home="VfB Stuttgart" data-away="Sparta Prague">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 19:30:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/43732.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							VfB Stuttgart</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/44164.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Sparta Prague</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/TPE.png"> CPBL
				</div>
				<div class="sports_box sports_bs" data-id="inp54133887" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp54133887" data-spo="야구" data-lg="CPBL" data-flag="397" data-home="중신 브라더스" data-away="타이강 호크스">
							<span class="s_type"><i class="fas fa-baseball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 19:35:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/477520.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							중신 브라더스</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/991405.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							타이강 호크스</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_bs" data-id="inp54133893" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp54133893" data-spo="야구" data-lg="CPBL" data-flag="397" data-home="푸본 가디언스" data-away="라쿠텐 몽키스">
							<span class="s_type"><i class="fas fa-baseball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 19:35:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/477522.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							푸본 가디언스</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/597404.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							라쿠텐 몽키스</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> Arab Club Championship
				</div>
				<div class="sports_box sports_bk" data-id="inp54141121" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp54141121" data-spo="농구" data-lg="Arab Club Championship" data-flag="103" data-home="AS De Sale" data-away="Club Antonin Sportif">
							<span class="s_type"><i class="fas fa-basketball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 20:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							AS De Sale</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Club Antonin Sportif</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_bk" data-id="inp54145735" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp54145735" data-spo="농구" data-lg="Arab Club Championship" data-flag="103" data-home="AL Sharjah" data-away="AL Arabi (Qat)">
							<span class="s_type"><i class="fas fa-basketball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 20:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							AL Sharjah</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							AL Arabi (Qat)</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> 클럽 친선경기
				</div>
				<div class="sports_box sports_bk" data-id="inp53809585" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53809585" data-spo="농구" data-lg="클럽 친선경기" data-flag="103" data-home="BC Kutaisi" data-away="BC Vsa">
							<span class="s_type"><i class="fas fa-basketball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 20:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							BC Kutaisi</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://boss-1177.com/static/img/noimg.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							BC Vsa</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/PHL.png"> PBA, 거버너 컵
				</div>
				<div class="sports_box sports_bk" data-id="inp54038675" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp54038675" data-spo="농구" data-lg="PBA, 거버너 컵" data-flag="539" data-home="Road Warriors" data-away="Tropang Giga">
							<span class="s_type"><i class="fas fa-basketball-ball" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 20:30:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/96571.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Road Warriors</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/96589.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Tropang Giga</span>
						</div>
					</div>
				</div>
				<div class="info_league">
					<img src="https://boss-1177.com/static/img/flag/000.png"> UEFA YL
				</div>
				<div class="sports_box sports_sc" data-id="inp53298581" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53298581" data-spo="축구" data-lg="UEFA YL" data-flag="392" data-home="Slovan Bratislava" data-away="Manchester City FC">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 21:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/110757.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Slovan Bratislava</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/120856.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Manchester City FC</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_sc" data-id="inp53298579" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53298579" data-spo="축구" data-lg="UEFA YL" data-flag="392" data-home="PSV Eindhoven" data-away="Sporting CP">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 21:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/90140.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							PSV Eindhoven</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/78151.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Sporting CP</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_sc" data-id="inp53298571" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53298571" data-spo="축구" data-lg="UEFA YL" data-flag="392" data-home="Bayer 04 Leverkusen" data-away="AC Milan">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 21:00:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/43716.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Bayer 04 Leverkusen</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/120874.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							AC Milan</span>
						</div>
					</div>
				</div>
				<div class="sports_box sports_sc" data-id="inp53298577" data-stat="not_yet">
					<div class="inplay_box">
						<div class="sports_time " data-id="inp53298577" data-spo="축구" data-lg="UEFA YL" data-flag="392" data-home="Inter Milano" data-away="FK Crvena Zvezda">
							<span class="s_type"><i class="fas fa-futbol" aria-hidden="true"></i></span><span class="s_time">경기전</span><span class="now_time"></span>
						</div>
						<div class="sports_info">
							<span class="ny_time">2024-10-01 21:30:00</span><span class="info_home">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/42728.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							Inter Milano</span><span class="info_vs">VS</span><span class="info_away">
							<div class="team_img">
								<img src="https://image.turnkeyapi.com/uof_team/medium/206249.png" onerror="this.src='https://boss-1177.com/static/img/noimg.png'">
							</div>
							FK Crvena Zvezda</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="detail_game no_select">
			<div class="d_info3">
				<p style="text-align:center">
					<img src="https://lg-2020.com/static/data/upload/images/%EB%9D%BC%EC%9D%B4%EB%B8%8C%26%EC%9D%B8%ED%94%8C%EB%A0%88%EC%9D%B4%EA%B7%9C%EC%A0%95(2).jpg" style="height:2307px; width:1000px">
				</p>
			</div>
		</div>
		<div class="detail_game dspn" data-idx="">
			<div class="d_info">
				 인포메이션
			</div>
			<div class="live_tracker">
			</div>
			<div class="detail_box">
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
import '@/assets/index.js';
import '@/static/js/inplay.js?v=1727743010';
//import { open_payback } from '@/static/js/base.ts';
//import '@/assets/tracking.js';
import loadLiveChat from '@/assets/livechat.js';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'inplayPage',

  setup() {
    const isMenuOpened = ref(false);
    const isLoginVisible = ref(false);
    const isLoginVisible2 = ref(true);
	  const isExpanded = ref(false);
	  
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
@import url('@/assets/sports.css');
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
				<style scoped>
				.sports_tab_out_box {
    overflow-y: hidden;
    overflow-x: overay;
    padding-top: 10px;
    padding-bottom: 20px;
}
								</style>