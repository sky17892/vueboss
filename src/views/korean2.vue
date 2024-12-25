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
	<div class="koran_wrap">
		<div class="page_ttl only_pc">
			 국내형 스포츠
		</div>
		<div class="page_tab page_tab2 only_mobile">
			<a href="/sports">
			해외형 </a>
			<a href="/korean2" class="on">
			국내형 </a>
			<a href="/inplay">
			LIVE </a>
			<a href="/special">
			스페셜 </a>
			<!--        <a href="/esports/es">-->
			<!--            E스포츠-->
			<!--        </a>-->
		</div>
		<div class="sport_out_box2 onselectstart=" return="" false="">
			<div class="korean_list_box">
				<div class="sch_sp_box only_mobile sch_in_game">
					<form action="/korean2" class="sp_sch2">
						<input type="text" name="sch_key2" class="sch_key2" placeholder="스포츠 국내식 검색 (국가/리그명/팀명)" value="">
						<input type="submit" class="dspn">
						<button class="sch_sp_button"><i class="fas fa-search" aria-hidden="true"></i></button>
					</form>
				</div>
				<div class="sports_tab_out_box slider">
					<div class="sport_tab_box">
						<a href="/korean2" class="btn_sports_tab2 btn_sports_tab2_on" data-cate="all">
						<strong>53</strong>
						<span>전체</span>
						</a>
						<a href="https://lg-2020.com/game/korean?cate=soccer" class="btn_sports_tab2 " data-cate="soccer">
						<strong>23</strong>
						<span>축구</span>
						</a>
						<a href="https://lg-2020.com/game/korean?cate=basket" class="btn_sports_tab2 " data-cate="basket">
						<strong>0</strong>
						<span>농구</span>
						</a>
						<a href="https://lg-2020.com/game/korean?cate=baseball" class="btn_sports_tab2 " data-cate="baseball">
						<strong>12</strong>
						<span>야구</span>
						</a>
						<a href="https://lg-2020.com/game/korean?cate=volley" class="btn_sports_tab2 " data-cate="volley">
						<strong>8</strong>
						<span>배구</span>
						</a>
						<a href="https://lg-2020.com/game/korean?cate=hockey" class="btn_sports_tab2 " data-cate="hockey">
						<strong>10</strong>
						<span>아이스하키</span>
						</a>
						<!--					<a href="/game/korean?cate=egame" class="btn_sports_tab2 -->
						<!--" data-cate="egame">-->
						<!--                        <strong>-->
						<!--</strong>-->
						<!--                        <span>E스포츠</span>-->
						<!--                    </a>-->
						<a href="https://lg-2020.com/game/korean?cate=mma" class="btn_sports_tab2 " data-cate="mma">
						<strong>0</strong>
						<span>MMA</span>
						</a>
					</div>
				</div>				
				<div class="page_box">
				</div>
				<div class="sport_list">
					<div class="bonus_box">
						<div class="in_ttl">
							<i class="fa fa-star text-red" aria-hidden="true"></i> 다폴더 보너스 추가 배당
						</div>
						<span class="btn_bonus" data-fd="3" data-stat="no" data-ratio="1.03">
						<span class="bonus_name">3폴 이상</span>
						<span class="bonus_ratio">1.03</span>
						</span>
						<span class="btn_bonus" data-fd="6" data-stat="no" data-ratio="1.06">
						<span class="bonus_name">6폴 이상</span>
						<span class="bonus_ratio">1.06</span>
						</span>
						<span class="btn_bonus" data-fd="9" data-stat="no" data-ratio="1.10">
						<span class="bonus_name">9폴 이상</span>
						<span class="bonus_ratio">1.10</span>
						</span>
					</div>
					<div class="sp_notice_box korean_notice_box">
						<span class="korean_open_all" data-stat="opened">전체 닫기</span>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/RUS.png" alt="">
						Pro League <img src="https://lg-2020.com/static/img/sports/23.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-01 13:30:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-01 13:30
								<div class="gdata dspn" data-id="pre54138285" data-spo="배구" data-lg="Pro League" data-flag="262" data-home="Feniks Tver" data-away="Sokol-Pro">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p541382851864" data-gid="pre54138285" data-ratio="1.70">
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">Feniks Tver</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.70</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p541382851865" data-gid="pre54138285" data-ratio="1.83">
								<span class="sp_icon_box"><span class="odds_ratio">1.83</span></span>
								<span class="odds_name_box">
								<span class="odds_name">Sokol-Pro</span>
								</span>
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-01 15:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-01 15:00
								<div class="gdata dspn" data-id="pre54138397" data-spo="배구" data-lg="Pro League" data-flag="262" data-home="Molot" data-away="비티아즈 해연">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p541383971864" data-gid="pre54138397" data-ratio="2.29">
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">Molot</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">2.29</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p541383971865" data-gid="pre54138397" data-ratio="1.42">
								<span class="sp_icon_box"><span class="odds_ratio">1.42</span></span>
								<span class="odds_name_box">
								<span class="odds_name">비티아즈 해연</span>
								</span>
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p541383972376D51714" data-gid="pre54138397" data-ratio="1.78">
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">Molot</span>
								</span>
								<span class="odds_stan dspn">6.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.78</span>
								</div>
							</div>
							<div class="team_stan">
								6.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p541383972376D51715" data-gid="pre54138397" data-ratio="1.79">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.79</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">비티아즈 해연</span>
								</span>
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-6.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p54138397238179D512" data-gid="pre54138397" data-ratio="1.79">
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">179.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.79</span>
								</div>
							</div>
							<div class="team_stan">
								179.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p54138397238179D513" data-gid="pre54138397" data-ratio="1.79">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.79</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">179.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-01 16:50:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-01 16:50
								<div class="gdata dspn" data-id="pre54138399" data-spo="배구" data-lg="Pro League" data-flag="262" data-home="Payp" data-away="Titans">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p541383991864" data-gid="pre54138399" data-ratio="1.45">
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">Payp</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.45</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p541383991865" data-gid="pre54138399" data-ratio="2.22">
								<span class="sp_icon_box"><span class="odds_ratio">2.22</span></span>
								<span class="odds_name_box">
								<span class="odds_name">Titans</span>
								</span>
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p54138399237M5D51714" data-gid="pre54138399" data-ratio="1.80">
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">Payp</span>
								</span>
								<span class="odds_stan dspn">-5.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.80</span>
								</div>
							</div>
							<div class="team_stan">
								-5.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p54138399237M5D51715" data-gid="pre54138399" data-ratio="1.78">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.78</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">Titans</span>
								</span>
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">5.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p54138399238180D512" data-gid="pre54138399" data-ratio="1.77">
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">180.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.77</span>
								</div>
							</div>
							<div class="team_stan">
								180.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p54138399238180D513" data-gid="pre54138399" data-ratio="1.81">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.81</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">180.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:#ffdc00">
						<img src="https://lg-2020.com/static/img/flag/KOR.png" alt="">
						KBO <img src="https://lg-2020.com/static/img/sports/3.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-01 17:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-01 17:00
								<div class="gdata dspn" data-id="pre54141851" data-spo="야구" data-lg="KBO" data-flag="384" data-home="KT" data-away="SSG 랜더스">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p541418512514" data-gid="pre54141851" data-ratio="1.63">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/249967.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">KT</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.63</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p541418512515" data-gid="pre54141851" data-ratio="1.89">
								<span class="sp_icon_box"><span class="odds_ratio">1.89</span></span>
								<span class="odds_name_box">
								<span class="odds_name">SSG 랜더스</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/249979.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p541418512589D512" data-gid="pre54141851" data-ratio="1.75">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/249967.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">9.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.75</span>
								</div>
							</div>
							<div class="team_stan">
								9.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p541418512589D513" data-gid="pre54141851" data-ratio="1.88">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.88</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/249979.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">9.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-01 17:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-01 17:00
								<div class="gdata dspn" data-id="pre53952687" data-spo="야구" data-lg="KBO" data-flag="384" data-home="NC 다이노스" data-away=" 롯데 자이언츠">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p539526872514" data-gid="pre53952687" data-ratio="2.07">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/249973.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">NC 다이노스</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">2.07</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p539526872515" data-gid="pre53952687" data-ratio="1.51">
								<span class="sp_icon_box"><span class="odds_ratio">1.51</span></span>
								<span class="odds_name_box">
								<span class="odds_name"> 롯데 자이언츠</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/249971.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p539526872561D51714" data-gid="pre53952687" data-ratio="1.72">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/249973.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">NC 다이노스</span>
								</span>
								<span class="odds_stan dspn">1.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.72</span>
								</div>
							</div>
							<div class="team_stan">
								1.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p539526872561D51715" data-gid="pre53952687" data-ratio="1.91">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.91</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name"> 롯데 자이언츠</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/249971.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-1.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p5395268725810D512" data-gid="pre53952687" data-ratio="1.81">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/249973.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">10.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.81</span>
								</div>
							</div>
							<div class="team_stan">
								10.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p5395268725810D513" data-gid="pre53952687" data-ratio="1.80">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.80</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/249971.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">10.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:#ffdc00">
						<img src="https://lg-2020.com/static/img/flag/JPN.png" alt="">
						NPB <img src="https://lg-2020.com/static/img/sports/3.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-01 18:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-01 18:00
								<div class="gdata dspn" data-id="pre47095187" data-spo="야구" data-lg="NPB" data-flag="211" data-home=" 세이부 " data-away="니혼햄">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p470951872514" data-gid="pre47095187" data-ratio="1.88">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67120.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name"> 세이부 </span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.88</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p470951872515" data-gid="pre47095187" data-ratio="1.64">
								<span class="sp_icon_box"><span class="odds_ratio">1.64</span></span>
								<span class="odds_name_box">
								<span class="odds_name">니혼햄</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67114.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p470951872585D512" data-gid="pre47095187" data-ratio="1.98">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67120.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">5.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.98</span>
								</div>
							</div>
							<div class="team_stan">
								5.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p470951872585D513" data-gid="pre47095187" data-ratio="1.66">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.66</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67114.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">5.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-01 18:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-01 18:00
								<div class="gdata dspn" data-id="pre47095185" data-spo="야구" data-lg="NPB" data-flag="211" data-home=" 소프트뱅크" data-away="오릭스 ">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p470951852514" data-gid="pre47095185" data-ratio="1.70">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67122.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name"> 소프트뱅크</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.70</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p470951852515" data-gid="pre47095185" data-ratio="1.80">
								<span class="sp_icon_box"><span class="odds_ratio">1.80</span></span>
								<span class="odds_name_box">
								<span class="odds_name">오릭스 </span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67116.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p470951852586D512" data-gid="pre47095185" data-ratio="1.82">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67122.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">6.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.82</span>
								</div>
							</div>
							<div class="team_stan">
								6.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p470951852586D513" data-gid="pre47095185" data-ratio="1.79">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.79</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67116.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">6.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-01 18:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-01 18:00
								<div class="gdata dspn" data-id="pre47095189" data-spo="야구" data-lg="NPB" data-flag="211" data-home="라쿠텐" data-away="치바 롯데 ">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p470951892514" data-gid="pre47095189" data-ratio="2.26">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67118.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">라쿠텐</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">2.26</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p470951892515" data-gid="pre47095189" data-ratio="1.42">
								<span class="sp_icon_box"><span class="odds_ratio">1.42</span></span>
								<span class="odds_name_box">
								<span class="odds_name">치바 롯데 </span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67112.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p470951892561D51714" data-gid="pre47095189" data-ratio="1.65">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67118.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">라쿠텐</span>
								</span>
								<span class="odds_stan dspn">1.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.65</span>
								</div>
							</div>
							<div class="team_stan">
								1.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p470951892561D51715" data-gid="pre47095189" data-ratio="2.01">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.01</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">치바 롯데 </span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67112.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-1.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p470951892585D512" data-gid="pre47095189" data-ratio="1.73">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67118.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">5.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.73</span>
								</div>
							</div>
							<div class="team_stan">
								5.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p470951892585D513" data-gid="pre47095189" data-ratio="1.89">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.89</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67112.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">5.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-01 18:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-01 18:00
								<div class="gdata dspn" data-id="pre54132673" data-spo="야구" data-lg="NPB" data-flag="211" data-home="요코하마 " data-away="히로시마 ">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p541326732514" data-gid="pre54132673" data-ratio="1.41">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67110.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">요코하마 </span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.41</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p541326732515" data-gid="pre54132673" data-ratio="2.28">
								<span class="sp_icon_box"><span class="odds_ratio">2.28</span></span>
								<span class="odds_name_box">
								<span class="odds_name">히로시마 </span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67106.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p54132673256M1D51714" data-gid="pre54132673" data-ratio="2.05">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67110.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">요코하마 </span>
								</span>
								<span class="odds_stan dspn">-1.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">2.05</span>
								</div>
							</div>
							<div class="team_stan">
								-1.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p54132673256M1D51715" data-gid="pre54132673" data-ratio="1.62">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.62</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">히로시마 </span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67106.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">1.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p541326732586D512" data-gid="pre54132673" data-ratio="1.66">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67110.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">6.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.66</span>
								</div>
							</div>
							<div class="team_stan">
								6.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p541326732586D513" data-gid="pre54132673" data-ratio="1.99">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.99</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67106.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">6.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/RUS.png" alt="">
						Pro League <img src="https://lg-2020.com/static/img/sports/23.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-01 18:20:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-01 18:20
								<div class="gdata dspn" data-id="pre54138437" data-spo="배구" data-lg="Pro League" data-flag="262" data-home="Tornado" data-away="Alliance">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p541384371864" data-gid="pre54138437" data-ratio="1.53">
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">Tornado</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.53</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p541384371865" data-gid="pre54138437" data-ratio="2.05">
								<span class="sp_icon_box"><span class="odds_ratio">2.05</span></span>
								<span class="odds_name_box">
								<span class="odds_name">Alliance</span>
								</span>
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p54138437237M3D51714" data-gid="pre54138437" data-ratio="1.76">
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">Tornado</span>
								</span>
								<span class="odds_stan dspn">-3.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.76</span>
								</div>
							</div>
							<div class="team_stan">
								-3.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p54138437237M3D51715" data-gid="pre54138437" data-ratio="1.82">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.82</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">Alliance</span>
								</span>
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">3.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p54138437238181D512" data-gid="pre54138437" data-ratio="1.81">
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">181.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.81</span>
								</div>
							</div>
							<div class="team_stan">
								181.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p54138437238181D513" data-gid="pre54138437" data-ratio="1.77">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.77</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">181.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/TPE.png" alt="">
						CPBL <img src="https://lg-2020.com/static/img/sports/3.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-01 19:35:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-01 19:35
								<div class="gdata dspn" data-id="pre54133887" data-spo="야구" data-lg="CPBL" data-flag="397" data-home="중신 브라더스" data-away="타이강 호크스">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p541338872514" data-gid="pre54133887" data-ratio="1.30">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/477520.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">중신 브라더스</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.30</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p541338872515" data-gid="pre54133887" data-ratio="2.63">
								<span class="sp_icon_box"><span class="odds_ratio">2.63</span></span>
								<span class="odds_name_box">
								<span class="odds_name">타이강 호크스</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/991405.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p54133887256M1D51714" data-gid="pre54133887" data-ratio="1.72">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/477520.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">중신 브라더스</span>
								</span>
								<span class="odds_stan dspn">-1.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.72</span>
								</div>
							</div>
							<div class="team_stan">
								-1.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p54133887256M1D51715" data-gid="pre54133887" data-ratio="1.90">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.90</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">타이강 호크스</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/991405.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">1.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p541338872589D512" data-gid="pre54133887" data-ratio="1.76">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/477520.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">9.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.76</span>
								</div>
							</div>
							<div class="team_stan">
								9.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p541338872589D513" data-gid="pre54133887" data-ratio="1.86">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.86</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/991405.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">9.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-01 19:35:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-01 19:35
								<div class="gdata dspn" data-id="pre54133893" data-spo="야구" data-lg="CPBL" data-flag="397" data-home="푸본 가디언스" data-away="라쿠텐 몽키스">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p541338932514" data-gid="pre54133893" data-ratio="1.98">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/477522.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">푸본 가디언스</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.98</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p541338932515" data-gid="pre54133893" data-ratio="1.56">
								<span class="sp_icon_box"><span class="odds_ratio">1.56</span></span>
								<span class="odds_name_box">
								<span class="odds_name">라쿠텐 몽키스</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/597404.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p541338932561D51714" data-gid="pre54133893" data-ratio="1.60">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/477522.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">푸본 가디언스</span>
								</span>
								<span class="odds_stan dspn">1.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.60</span>
								</div>
							</div>
							<div class="team_stan">
								1.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p541338932561D51715" data-gid="pre54133893" data-ratio="2.07">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.07</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">라쿠텐 몽키스</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/597404.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-1.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p541338932588D512" data-gid="pre54133893" data-ratio="1.90">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/477522.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">8.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.90</span>
								</div>
							</div>
							<div class="team_stan">
								8.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p541338932588D513" data-gid="pre54133893" data-ratio="1.72">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.72</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/597404.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">8.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/RUS.png" alt="">
						Pro League <img src="https://lg-2020.com/static/img/sports/23.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-01 20:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-01 20:00
								<div class="gdata dspn" data-id="pre54138475" data-spo="배구" data-lg="Pro League" data-flag="262" data-home="Plamya Pro" data-away="Eagles-Pro">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p541384751864" data-gid="pre54138475" data-ratio="1.41">
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">Plamya Pro</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.41</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p541384751865" data-gid="pre54138475" data-ratio="2.33">
								<span class="sp_icon_box"><span class="odds_ratio">2.33</span></span>
								<span class="odds_name_box">
								<span class="odds_name">Eagles-Pro</span>
								</span>
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p54138475237M6D51714" data-gid="pre54138475" data-ratio="1.79">
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">Plamya Pro</span>
								</span>
								<span class="odds_stan dspn">-6.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.79</span>
								</div>
							</div>
							<div class="team_stan">
								-6.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p54138475237M6D51715" data-gid="pre54138475" data-ratio="1.79">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.79</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">Eagles-Pro</span>
								</span>
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">6.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p54138475238179D512" data-gid="pre54138475" data-ratio="1.79">
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">179.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.79</span>
								</div>
							</div>
							<div class="team_stan">
								179.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p54138475238179D513" data-gid="pre54138475" data-ratio="1.79">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.79</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">179.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/RUS.png" alt="">
						KHL <img src="https://lg-2020.com/static/img/sports/4.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-01 23:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-01 23:00
								<div class="gdata dspn" data-id="pre50707971" data-spo="아이스 하키" data-lg="KHL" data-flag="101" data-home="살라바트 우파" data-away="쿤룬 레드 스타">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5070797111" data-gid="pre50707971" data-ratio="1.28">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3944.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">살라바트 우파</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.28</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5070797112" data-gid="pre50707971" data-ratio="5.36">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">5.36</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5070797113" data-gid="pre50707971" data-ratio="6.36">
								<span class="sp_icon_box"><span class="odds_ratio">6.36</span></span>
								<span class="odds_name_box">
								<span class="odds_name">쿤룬 레드 스타</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/268875.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5070797116M2D51714" data-gid="pre50707971" data-ratio="2.03">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3944.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">살라바트 우파</span>
								</span>
								<span class="odds_stan dspn">-2.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">2.03</span>
								</div>
							</div>
							<div class="team_stan">
								-2.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5070797116M2D51715" data-gid="pre50707971" data-ratio="1.57">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.57</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">쿤룬 레드 스타</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/268875.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">2.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p50707971185D512" data-gid="pre50707971" data-ratio="1.64">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3944.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">5.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.64</span>
								</div>
							</div>
							<div class="team_stan">
								5.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p50707971185D513" data-gid="pre50707971" data-ratio="1.91">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.91</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/268875.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">5.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-01 23:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-01 23:00
								<div class="gdata dspn" data-id="pre50707969" data-spo="아이스 하키" data-lg="KHL" data-flag="101" data-home="예카테린부르크" data-away="로코모티브 야로슬라블">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5070796911" data-gid="pre50707969" data-ratio="2.81">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/36346.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">예카테린부르크</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">2.81</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5070796912" data-gid="pre50707969" data-ratio="3.81">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">3.81</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5070796913" data-gid="pre50707969" data-ratio="2.01">
								<span class="sp_icon_box"><span class="odds_ratio">2.01</span></span>
								<span class="odds_name_box">
								<span class="odds_name">로코모티브 야로슬라블</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3948.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p50707969160D51714" data-gid="pre50707969" data-ratio="1.62">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/36346.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">예카테린부르크</span>
								</span>
								<span class="odds_stan dspn">0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.62</span>
								</div>
							</div>
							<div class="team_stan">
								0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p50707969160D51715" data-gid="pre50707969" data-ratio="1.95">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.95</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">로코모티브 야로슬라블</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3948.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p50707969184D512" data-gid="pre50707969" data-ratio="1.78">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/36346.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">4.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.78</span>
								</div>
							</div>
							<div class="team_stan">
								4.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p50707969184D513" data-gid="pre50707969" data-ratio="1.75">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.75</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3948.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">4.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/RUS.png" alt="">
						수퍼리그 <img src="https://lg-2020.com/static/img/sports/23.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-01 23:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-01 23:00
								<div class="gdata dspn" data-id="pre52125325" data-spo="배구" data-lg="수퍼리그" data-flag="262" data-home="가스프롬-우그라 수르구트" data-away="우랄 UFA">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p521253251864" data-gid="pre52125325" data-ratio="2.69">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45220.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">가스프롬-우그라 수르구트</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">2.69</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p521253251865" data-gid="pre52125325" data-ratio="1.30">
								<span class="sp_icon_box"><span class="odds_ratio">1.30</span></span>
								<span class="odds_name_box">
								<span class="odds_name">우랄 UFA</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45224.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p521253252377D51714" data-gid="pre52125325" data-ratio="1.81">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45220.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">가스프롬-우그라 수르구트</span>
								</span>
								<span class="odds_stan dspn">7.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.81</span>
								</div>
							</div>
							<div class="team_stan">
								7.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p521253252377D51715" data-gid="pre52125325" data-ratio="1.77">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.77</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">우랄 UFA</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45224.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-7.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p52125325238181D512" data-gid="pre52125325" data-ratio="1.75">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45220.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">181.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.75</span>
								</div>
							</div>
							<div class="team_stan">
								181.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p52125325238181D513" data-gid="pre52125325" data-ratio="1.83">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.83</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45224.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">181.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-01 23:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-01 23:00
								<div class="gdata dspn" data-id="pre52125327" data-spo="배구" data-lg="수퍼리그" data-flag="262" data-home="네프트야닉 오렌부르크" data-away="로코모티브 노보시비르스크">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p521253271864" data-gid="pre52125327" data-ratio="8.14">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/150904.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">네프트야닉 오렌부르크</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">8.14</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p521253271865" data-gid="pre52125327" data-ratio="1.00">
								<span class="sp_icon_box"><span class="odds_ratio">1.00</span></span>
								<span class="odds_name_box">
								<span class="odds_name">로코모티브 노보시비르스크</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45223.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5212532723715D51714" data-gid="pre52125327" data-ratio="1.78">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/150904.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">네프트야닉 오렌부르크</span>
								</span>
								<span class="odds_stan dspn">15.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.78</span>
								</div>
							</div>
							<div class="team_stan">
								15.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5212532723715D51715" data-gid="pre52125327" data-ratio="1.79">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.79</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">로코모티브 노보시비르스크</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45223.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-15.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p52125327238142D512" data-gid="pre52125327" data-ratio="1.79">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/150904.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">142.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.79</span>
								</div>
							</div>
							<div class="team_stan">
								142.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p52125327238142D513" data-gid="pre52125327" data-ratio="1.79">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.79</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45223.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">142.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/RUS.png" alt="">
						VHL <img src="https://lg-2020.com/static/img/sports/4.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 00:30:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 00:30
								<div class="gdata dspn" data-id="pre51576283" data-spo="아이스 하키" data-lg="VHL" data-flag="101" data-home="HK 토르페도 고르키" data-away="히미크 보스크레센스크">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5157628311" data-gid="pre51576283" data-ratio="3.81">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/598562.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">HK 토르페도 고르키</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">3.81</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5157628312" data-gid="pre51576283" data-ratio="4.26">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">4.26</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5157628313" data-gid="pre51576283" data-ratio="1.60">
								<span class="sp_icon_box"><span class="odds_ratio">1.60</span></span>
								<span class="odds_name_box">
								<span class="odds_name">히미크 보스크레센스크</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/25433.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p51576283160D51714" data-gid="pre51576283" data-ratio="2.02">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/598562.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">HK 토르페도 고르키</span>
								</span>
								<span class="odds_stan dspn">0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">2.02</span>
								</div>
							</div>
							<div class="team_stan">
								0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p51576283160D51715" data-gid="pre51576283" data-ratio="1.57">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.57</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">히미크 보스크레센스크</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/25433.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p51576283185D512" data-gid="pre51576283" data-ratio="1.95">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/598562.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">5.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.95</span>
								</div>
							</div>
							<div class="team_stan">
								5.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p51576283185D513" data-gid="pre51576283" data-ratio="1.62">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.62</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/25433.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">5.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 00:30:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 00:30
								<div class="gdata dspn" data-id="pre51576279" data-spo="아이스 하키" data-lg="VHL" data-flag="101" data-home="네프트자닉 알메티옙스크" data-away="루빈 튜멘">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5157627911" data-gid="pre51576279" data-ratio="2.51">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/77651.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">네프트자닉 알메티옙스크</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">2.51</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5157627912" data-gid="pre51576279" data-ratio="4.06">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">4.06</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5157627913" data-gid="pre51576279" data-ratio="2.13">
								<span class="sp_icon_box"><span class="odds_ratio">2.13</span></span>
								<span class="odds_name_box">
								<span class="odds_name">루빈 튜멘</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/55171.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p51576279160D51714" data-gid="pre51576279" data-ratio="1.55">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/77651.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">네프트자닉 알메티옙스크</span>
								</span>
								<span class="odds_stan dspn">0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.55</span>
								</div>
							</div>
							<div class="team_stan">
								0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p51576279160D51715" data-gid="pre51576279" data-ratio="2.06">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.06</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">루빈 튜멘</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/55171.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p51576279185D512" data-gid="pre51576279" data-ratio="1.95">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/77651.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">5.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.95</span>
								</div>
							</div>
							<div class="team_stan">
								5.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p51576279185D513" data-gid="pre51576279" data-ratio="1.62">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.62</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/55171.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">5.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 01:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 01:00
								<div class="gdata dspn" data-id="pre51576281" data-spo="아이스 하키" data-lg="VHL" data-flag="101" data-home="HK 첼니" data-away="자우랄리에 쿠르간">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5157628111" data-gid="pre51576281" data-ratio="3.36">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/116988.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">HK 첼니</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">3.36</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5157628112" data-gid="pre51576281" data-ratio="4.26">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">4.26</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5157628113" data-gid="pre51576281" data-ratio="1.71">
								<span class="sp_icon_box"><span class="odds_ratio">1.71</span></span>
								<span class="odds_name_box">
								<span class="odds_name">자우랄리에 쿠르간</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/78199.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p51576281160D51714" data-gid="pre51576281" data-ratio="1.88">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/116988.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">HK 첼니</span>
								</span>
								<span class="odds_stan dspn">0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.88</span>
								</div>
							</div>
							<div class="team_stan">
								0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p51576281160D51715" data-gid="pre51576281" data-ratio="1.67">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.67</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">자우랄리에 쿠르간</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/78199.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p51576281185D512" data-gid="pre51576281" data-ratio="1.82">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/116988.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">5.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.82</span>
								</div>
							</div>
							<div class="team_stan">
								5.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p51576281185D513" data-gid="pre51576281" data-ratio="1.72">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.72</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/78199.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">5.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 01:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 01:00
								<div class="gdata dspn" data-id="pre51576277" data-spo="아이스 하키" data-lg="VHL" data-flag="101" data-home="바스 카잔" data-away="HC 유그라 칸티-만시스크">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5157627711" data-gid="pre51576277" data-ratio="5.16">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/79785.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">바스 카잔</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">5.16</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5157627712" data-gid="pre51576277" data-ratio="4.66">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">4.66</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5157627713" data-gid="pre51576277" data-ratio="1.40">
								<span class="sp_icon_box"><span class="odds_ratio">1.40</span></span>
								<span class="odds_name_box">
								<span class="odds_name">HC 유그라 칸티-만시스크</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/43853.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/RUS.png" alt="">
						KHL <img src="https://lg-2020.com/static/img/sports/4.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 01:10:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 01:10
								<div class="gdata dspn" data-id="pre50707979" data-spo="아이스 하키" data-lg="KHL" data-flag="101" data-home="디나모 민스크" data-away="블라디보스토크">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5070797911" data-gid="pre50707979" data-ratio="1.65">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/24983.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">디나모 민스크</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.65</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5070797912" data-gid="pre50707979" data-ratio="4.26">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">4.26</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5070797913" data-gid="pre50707979" data-ratio="3.56">
								<span class="sp_icon_box"><span class="odds_ratio">3.56</span></span>
								<span class="odds_name_box">
								<span class="odds_name">블라디보스토크</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/111039.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5070797916M0D51714" data-gid="pre50707979" data-ratio="1.62">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/24983.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">디나모 민스크</span>
								</span>
								<span class="odds_stan dspn">-0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.62</span>
								</div>
							</div>
							<div class="team_stan">
								-0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5070797916M0D51715" data-gid="pre50707979" data-ratio="1.95">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.95</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">블라디보스토크</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/111039.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p50707979185D512" data-gid="pre50707979" data-ratio="1.86">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/24983.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">5.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.86</span>
								</div>
							</div>
							<div class="team_stan">
								5.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p50707979185D513" data-gid="pre50707979" data-ratio="1.69">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.69</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/111039.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">5.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 01:30:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 01:30
								<div class="gdata dspn" data-id="pre50707975" data-spo="아이스 하키" data-lg="KHL" data-flag="101" data-home="디나모 모스크바" data-away="CSKA 모스크바">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5070797511" data-gid="pre50707975" data-ratio="2.51">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/43854.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">디나모 모스크바</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">2.51</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5070797512" data-gid="pre50707975" data-ratio="4.06">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">4.06</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5070797513" data-gid="pre50707975" data-ratio="2.11">
								<span class="sp_icon_box"><span class="odds_ratio">2.11</span></span>
								<span class="odds_name_box">
								<span class="odds_name">CSKA 모스크바</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3946.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p50707975160D51714" data-gid="pre50707975" data-ratio="1.56">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/43854.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">디나모 모스크바</span>
								</span>
								<span class="odds_stan dspn">0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.56</span>
								</div>
							</div>
							<div class="team_stan">
								0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p50707975160D51715" data-gid="pre50707975" data-ratio="2.04">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.04</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">CSKA 모스크바</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3946.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p50707975185D512" data-gid="pre50707975" data-ratio="1.73">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/43854.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">5.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.73</span>
								</div>
							</div>
							<div class="team_stan">
								5.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p50707975185D513" data-gid="pre50707975" data-ratio="1.81">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.81</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3946.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">5.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 01:30:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 01:30
								<div class="gdata dspn" data-id="pre50707973" data-spo="아이스 하키" data-lg="KHL" data-flag="101" data-home="소치" data-away="세버스탈 체레포베츠">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5070797311" data-gid="pre50707973" data-ratio="3.71">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/168244.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">소치</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">3.71</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5070797312" data-gid="pre50707973" data-ratio="4.46">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">4.46</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5070797313" data-gid="pre50707973" data-ratio="1.60">
								<span class="sp_icon_box"><span class="odds_ratio">1.60</span></span>
								<span class="odds_name_box">
								<span class="odds_name">세버스탈 체레포베츠</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3943.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p50707973161D51714" data-gid="pre50707973" data-ratio="1.58">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/168244.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">소치</span>
								</span>
								<span class="odds_stan dspn">1.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.58</span>
								</div>
							</div>
							<div class="team_stan">
								1.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p50707973161D51715" data-gid="pre50707973" data-ratio="2.00">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.00</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">세버스탈 체레포베츠</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3943.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-1.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p50707973185D512" data-gid="pre50707973" data-ratio="1.58">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/168244.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">5.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.58</span>
								</div>
							</div>
							<div class="team_stan">
								5.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p50707973185D513" data-gid="pre50707973" data-ratio="2.01">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.01</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3943.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">5.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 01:30:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 01:30
								<div class="gdata dspn" data-id="pre50707977" data-spo="아이스 하키" data-lg="KHL" data-flag="101" data-home="스파르타크 모스크바" data-away="T. 첼랴빈스크">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5070797711" data-gid="pre50707977" data-ratio="1.94">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3937.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">스파르타크 모스크바</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.94</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5070797712" data-gid="pre50707977" data-ratio="4.06">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">4.06</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5070797713" data-gid="pre50707977" data-ratio="2.81">
								<span class="sp_icon_box"><span class="odds_ratio">2.81</span></span>
								<span class="odds_name_box">
								<span class="odds_name">T. 첼랴빈스크</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/6333.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5070797716M0D51714" data-gid="pre50707977" data-ratio="1.89">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3937.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">스파르타크 모스크바</span>
								</span>
								<span class="odds_stan dspn">-0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.89</span>
								</div>
							</div>
							<div class="team_stan">
								-0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5070797716M0D51715" data-gid="pre50707977" data-ratio="1.66">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.66</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">T. 첼랴빈스크</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/6333.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p50707977185D512" data-gid="pre50707977" data-ratio="1.92">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3937.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">5.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.92</span>
								</div>
							</div>
							<div class="team_stan">
								5.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p50707977185D513" data-gid="pre50707977" data-ratio="1.63">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.63</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/6333.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">5.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/RUS.png" alt="">
						수퍼리그 <img src="https://lg-2020.com/static/img/sports/23.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 01:30:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 01:30
								<div class="gdata dspn" data-id="pre52125329" data-spo="배구" data-lg="수퍼리그" data-flag="262" data-home="제니트 세인트 피터즈버그" data-away="벨로고리 벨고로드">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p521253291864" data-gid="pre52125329" data-ratio="2.14">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/366530.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">제니트 세인트 피터즈버그</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">2.14</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p521253291865" data-gid="pre52125329" data-ratio="1.49">
								<span class="sp_icon_box"><span class="odds_ratio">1.49</span></span>
								<span class="odds_name_box">
								<span class="odds_name">벨로고리 벨고로드</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45023.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p521253292374D51714" data-gid="pre52125329" data-ratio="1.78">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/366530.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">제니트 세인트 피터즈버그</span>
								</span>
								<span class="odds_stan dspn">4.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.78</span>
								</div>
							</div>
							<div class="team_stan">
								4.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p521253292374D51715" data-gid="pre52125329" data-ratio="1.80">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.80</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">벨로고리 벨고로드</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45023.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-4.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p52125329238183D512" data-gid="pre52125329" data-ratio="1.78">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/366530.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">183.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.78</span>
								</div>
							</div>
							<div class="team_stan">
								183.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p52125329238183D513" data-gid="pre52125329" data-ratio="1.80">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.80</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45023.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">183.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/000.png" alt="">
						UEFA 챔피언스리그 <img src="https://lg-2020.com/static/img/sports/1.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 01:45:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 01:45
								<div class="gdata dspn" data-id="pre53151989" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="FC 레드불 잘츠부르크" data-away="스타드 브레스트 29">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5315198911" data-gid="pre53151989" data-ratio="1.40">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2046.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">FC 레드불 잘츠부르크</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.40</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5315198912" data-gid="pre53151989" data-ratio="3.30">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">3.30</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5315198913" data-gid="pre53151989" data-ratio="4.00">
								<span class="sp_icon_box"><span class="odds_ratio">4.00</span></span>
								<span class="odds_name_box">
								<span class="odds_name">스타드 브레스트 29</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/1715.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5315198916M0D51714" data-gid="pre53151989" data-ratio="1.37">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2046.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">FC 레드불 잘츠부르크</span>
								</span>
								<span class="odds_stan dspn">-0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.37</span>
								</div>
							</div>
							<div class="team_stan">
								-0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5315198916M0D51715" data-gid="pre53151989" data-ratio="1.69">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.69</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">스타드 브레스트 29</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/1715.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p53151989182D512" data-gid="pre53151989" data-ratio="1.37">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2046.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">2.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.37</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p53151989182D513" data-gid="pre53151989" data-ratio="1.69">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.69</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/1715.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">2.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 01:45:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 01:45
								<div class="gdata dspn" data-id="pre53151991" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="VfB 슈투트가르트" data-away="AC 스파르타 프라하">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5315199111" data-gid="pre53151991" data-ratio="1.08">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2677.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">VfB 슈투트가르트</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.08</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5315199112" data-gid="pre53151991" data-ratio="4.60">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">4.60</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5315199113" data-gid="pre53151991" data-ratio="5.70">
								<span class="sp_icon_box"><span class="odds_ratio">5.70</span></span>
								<span class="odds_name_box">
								<span class="odds_name">AC 스파르타 프라하</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2218.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5315199116M1D51714" data-gid="pre53151991" data-ratio="1.64">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2677.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">VfB 슈투트가르트</span>
								</span>
								<span class="odds_stan dspn">-1.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.64</span>
								</div>
							</div>
							<div class="team_stan">
								-1.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5315199116M1D51715" data-gid="pre53151991" data-ratio="1.41">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.41</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">AC 스파르타 프라하</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2218.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">1.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p53151991183D512" data-gid="pre53151991" data-ratio="1.62">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2677.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">3.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.62</span>
								</div>
							</div>
							<div class="team_stan">
								3.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p53151991183D513" data-gid="pre53151991" data-ratio="1.42">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.42</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2218.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">3.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/DZA.png" alt="">
						리그 1 <img src="https://lg-2020.com/static/img/sports/1.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 02:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 02:00
								<div class="gdata dspn" data-id="pre51614243" data-spo="축구" data-lg="리그 1" data-flag="304" data-home="JS 카빌리" data-away="MC 알제">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5161424311" data-gid="pre51614243" data-ratio="2.35">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/42202.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">JS 카빌리</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">2.35</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5161424312" data-gid="pre51614243" data-ratio="2.55">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">2.55</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5161424313" data-gid="pre51614243" data-ratio="2.40">
								<span class="sp_icon_box"><span class="odds_ratio">2.40</span></span>
								<span class="odds_name_box">
								<span class="odds_name">MC 알제</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/42204.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:#ffdc00">
						<img src="https://lg-2020.com/static/img/flag/USA.png" alt="">
						MLB <img src="https://lg-2020.com/static/img/sports/3.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 03:32:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 03:32
								<div class="gdata dspn" data-id="pre54106367" data-spo="야구" data-lg="MLB" data-flag="16" data-home="휴스턴 애스트로스" data-away="디트로이트 타이거스">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p541063672514" data-gid="pre54106367" data-ratio="1.55">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3655.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">휴스턴 애스트로스</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.55</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p541063672515" data-gid="pre54106367" data-ratio="2.00">
								<span class="sp_icon_box"><span class="odds_ratio">2.00</span></span>
								<span class="odds_name_box">
								<span class="odds_name">디트로이트 타이거스</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3648.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p541063672586D512" data-gid="pre54106367" data-ratio="1.84">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3655.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">6.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.84</span>
								</div>
							</div>
							<div class="team_stan">
								6.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p541063672586D513" data-gid="pre54106367" data-ratio="1.78">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.78</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3648.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">6.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/ENG.png" alt="">
						EFL 챔피언십 <img src="https://lg-2020.com/static/img/sports/1.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 03:45:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 03:45
								<div class="gdata dspn" data-id="pre51095135" data-spo="축구" data-lg="EFL 챔피언십" data-flag="1" data-home="노리치 시티 FC" data-away="리즈 유나이티드 FC">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5109513511" data-gid="pre51095135" data-ratio="3.25">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/263.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">노리치 시티 FC</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">3.25</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5109513512" data-gid="pre51095135" data-ratio="3.00">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">3.00</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5109513513" data-gid="pre51095135" data-ratio="1.64">
								<span class="sp_icon_box"><span class="odds_ratio">1.64</span></span>
								<span class="odds_name_box">
								<span class="odds_name">리즈 유나이티드 FC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/34.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p51095135160D51714" data-gid="pre51095135" data-ratio="1.44">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/263.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">노리치 시티 FC</span>
								</span>
								<span class="odds_stan dspn">0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.44</span>
								</div>
							</div>
							<div class="team_stan">
								0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p51095135160D51715" data-gid="pre51095135" data-ratio="1.60">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.60</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">리즈 유나이티드 FC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/34.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p51095135182D512" data-gid="pre51095135" data-ratio="1.48">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/263.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">2.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.48</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p51095135182D513" data-gid="pre51095135" data-ratio="1.55">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.55</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/34.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">2.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 03:45:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 03:45
								<div class="gdata dspn" data-id="pre51095065" data-spo="축구" data-lg="EFL 챔피언십" data-flag="1" data-home="루턴 타운 FC" data-away="옥스포드 유나이티드 FC">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5109506511" data-gid="pre51095065" data-ratio="1.34">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/72.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">루턴 타운 FC</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.34</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5109506512" data-gid="pre51095065" data-ratio="3.50">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">3.50</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5109506513" data-gid="pre51095065" data-ratio="4.10">
								<span class="sp_icon_box"><span class="odds_ratio">4.10</span></span>
								<span class="odds_name_box">
								<span class="odds_name">옥스포드 유나이티드 FC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/95.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5109506516M0D51714" data-gid="pre51095065" data-ratio="1.32">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/72.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">루턴 타운 FC</span>
								</span>
								<span class="odds_stan dspn">-0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.32</span>
								</div>
							</div>
							<div class="team_stan">
								-0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5109506516M0D51715" data-gid="pre51095065" data-ratio="1.77">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.77</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">옥스포드 유나이티드 FC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/95.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p51095065182D512" data-gid="pre51095065" data-ratio="1.42">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/72.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">2.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.42</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p51095065182D513" data-gid="pre51095065" data-ratio="1.63">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.63</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/95.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">2.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 03:45:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 03:45
								<div class="gdata dspn" data-id="pre51095059" data-spo="축구" data-lg="EFL 챔피언십" data-flag="1" data-home="번리 FC" data-away="플리머스 아가일 FC">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5109505911" data-gid="pre51095059" data-ratio="1.10">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/6.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">번리 FC</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.10</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5109505912" data-gid="pre51095059" data-ratio="4.20">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">4.20</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5109505913" data-gid="pre51095059" data-ratio="5.90">
								<span class="sp_icon_box"><span class="odds_ratio">5.90</span></span>
								<span class="odds_name_box">
								<span class="odds_name">플리머스 아가일 FC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/71.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5109505916M1D51714" data-gid="pre51095059" data-ratio="1.74">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/6.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">번리 FC</span>
								</span>
								<span class="odds_stan dspn">-1.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.74</span>
								</div>
							</div>
							<div class="team_stan">
								-1.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5109505916M1D51715" data-gid="pre51095059" data-ratio="1.34">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.34</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">플리머스 아가일 FC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/71.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">1.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p51095059182D512" data-gid="pre51095059" data-ratio="1.22">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/6.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">2.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.22</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p51095059182D513" data-gid="pre51095059" data-ratio="1.96">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.96</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/71.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">2.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 03:45:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 03:45
								<div class="gdata dspn" data-id="pre51095129" data-spo="축구" data-lg="EFL 챔피언십" data-flag="1" data-home="선덜랜드 AFC" data-away="더비 카운티 FC">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5109512911" data-gid="pre51095129" data-ratio="1.33">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/41.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">선덜랜드 AFC</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.33</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5109512912" data-gid="pre51095129" data-ratio="3.35">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">3.35</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5109512913" data-gid="pre51095129" data-ratio="4.30">
								<span class="sp_icon_box"><span class="odds_ratio">4.30</span></span>
								<span class="odds_name_box">
								<span class="odds_name">더비 카운티 FC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/27.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5109512916M0D51714" data-gid="pre51095129" data-ratio="1.31">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/41.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">선덜랜드 AFC</span>
								</span>
								<span class="odds_stan dspn">-0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.31</span>
								</div>
							</div>
							<div class="team_stan">
								-0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5109512916M0D51715" data-gid="pre51095129" data-ratio="1.79">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.79</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">더비 카운티 FC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/27.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p51095129182D512" data-gid="pre51095129" data-ratio="1.61">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/41.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">2.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.61</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p51095129182D513" data-gid="pre51095129" data-ratio="1.44">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.44</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/27.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">2.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 03:45:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 03:45
								<div class="gdata dspn" data-id="pre51095061" data-spo="축구" data-lg="EFL 챔피언십" data-flag="1" data-home="카디프 시티" data-away="밀월 FC">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5109506111" data-gid="pre51095061" data-ratio="2.70">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/61.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">카디프 시티</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">2.70</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5109506112" data-gid="pre51095061" data-ratio="2.75">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">2.75</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5109506113" data-gid="pre51095061" data-ratio="1.98">
								<span class="sp_icon_box"><span class="odds_ratio">1.98</span></span>
								<span class="odds_name_box">
								<span class="odds_name">밀월 FC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/25.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p51095061160D51714" data-gid="pre51095061" data-ratio="1.25">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/61.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">카디프 시티</span>
								</span>
								<span class="odds_stan dspn">0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.25</span>
								</div>
							</div>
							<div class="team_stan">
								0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p51095061160D51715" data-gid="pre51095061" data-ratio="1.90">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.90</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">밀월 FC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/25.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p51095061182D512" data-gid="pre51095061" data-ratio="1.99">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/61.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">2.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.99</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p51095061182D513" data-gid="pre51095061" data-ratio="1.21">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.21</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/25.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">2.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 03:45:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 03:45
								<div class="gdata dspn" data-id="pre51095063" data-spo="축구" data-lg="EFL 챔피언십" data-flag="1" data-home="코번트리 시티 FC" data-away="블랙번 로버스">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5109506311" data-gid="pre51095063" data-ratio="1.70">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/11.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">코번트리 시티 FC</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.70</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5109506312" data-gid="pre51095063" data-ratio="3.05">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">3.05</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5109506313" data-gid="pre51095063" data-ratio="3.00">
								<span class="sp_icon_box"><span class="odds_ratio">3.00</span></span>
								<span class="odds_name_box">
								<span class="odds_name">블랙번 로버스</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/46.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5109506316M0D51714" data-gid="pre51095063" data-ratio="1.65">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/11.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">코번트리 시티 FC</span>
								</span>
								<span class="odds_stan dspn">-0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.65</span>
								</div>
							</div>
							<div class="team_stan">
								-0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5109506316M0D51715" data-gid="pre51095063" data-ratio="1.40">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.40</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">블랙번 로버스</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/46.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p51095063182D512" data-gid="pre51095063" data-ratio="1.40">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/11.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">2.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.40</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p51095063182D513" data-gid="pre51095063" data-ratio="1.65">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.65</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/46.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">2.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 03:45:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 03:45
								<div class="gdata dspn" data-id="pre51095067" data-spo="축구" data-lg="EFL 챔피언십" data-flag="1" data-home="퀸즈 파크 레인저스" data-away="헐 시티 AFC">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5109506711" data-gid="pre51095067" data-ratio="2.07">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/1.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">퀸즈 파크 레인저스</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">2.07</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5109506712" data-gid="pre51095067" data-ratio="2.95">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">2.95</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5109506713" data-gid="pre51095067" data-ratio="2.40">
								<span class="sp_icon_box"><span class="odds_ratio">2.40</span></span>
								<span class="odds_name_box">
								<span class="odds_name">헐 시티 AFC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/96.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5109506716M0D51714" data-gid="pre51095067" data-ratio="1.98">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/1.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">퀸즈 파크 레인저스</span>
								</span>
								<span class="odds_stan dspn">-0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.98</span>
								</div>
							</div>
							<div class="team_stan">
								-0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5109506716M0D51715" data-gid="pre51095067" data-ratio="1.21">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.21</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">헐 시티 AFC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/96.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p51095067182D512" data-gid="pre51095067" data-ratio="1.52">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/1.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">2.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.52</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p51095067182D513" data-gid="pre51095067" data-ratio="1.51">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.51</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/96.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">2.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/ENG.png" alt="">
						EFL Cup <img src="https://lg-2020.com/static/img/sports/1.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 03:45:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 03:45
								<div class="gdata dspn" data-id="pre53903915" data-spo="축구" data-lg="EFL Cup" data-flag="1" data-home="뉴캐슬 유나이티드 FC" data-away="AFC 윔블던">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5390391511" data-gid="pre53903915" data-ratio="1.00">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/39.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">뉴캐슬 유나이티드 FC</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.00</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5390391512" data-gid="pre53903915" data-ratio="6.90">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">6.90</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5390391513" data-gid="pre53903915" data-ratio="14.70">
								<span class="sp_icon_box"><span class="odds_ratio">14.70</span></span>
								<span class="odds_name_box">
								<span class="odds_name">AFC 윔블던</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/23957.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5390391516M2D51714" data-gid="pre53903915" data-ratio="1.72">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/39.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">뉴캐슬 유나이티드 FC</span>
								</span>
								<span class="odds_stan dspn">-2.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.72</span>
								</div>
							</div>
							<div class="team_stan">
								-2.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5390391516M2D51715" data-gid="pre53903915" data-ratio="1.35">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.35</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">AFC 윔블던</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/23957.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">2.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p53903915183D512" data-gid="pre53903915" data-ratio="1.62">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/39.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">3.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.62</span>
								</div>
							</div>
							<div class="team_stan">
								3.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p53903915183D513" data-gid="pre53903915" data-ratio="1.42">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.42</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/23957.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">3.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/000.png" alt="">
						UEFA 챔피언스리그 <img src="https://lg-2020.com/static/img/sports/1.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 04:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 04:00
								<div class="gdata dspn" data-id="pre53152001" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="FC 바르셀로나" data-away="BSC 영 보이즈">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5315200111" data-gid="pre53152001" data-ratio="1.00">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2817.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">FC 바르셀로나</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.00</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5315200112" data-gid="pre53152001" data-ratio="8.70">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">8.70</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5315200113" data-gid="pre53152001" data-ratio="19.70">
								<span class="sp_icon_box"><span class="odds_ratio">19.70</span></span>
								<span class="odds_name_box">
								<span class="odds_name">BSC 영 보이즈</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2445.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5315200116M2D51714" data-gid="pre53152001" data-ratio="1.34">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2817.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">FC 바르셀로나</span>
								</span>
								<span class="odds_stan dspn">-2.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.34</span>
								</div>
							</div>
							<div class="team_stan">
								-2.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5315200116M2D51715" data-gid="pre53152001" data-ratio="1.75">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.75</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">BSC 영 보이즈</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2445.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">2.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p53152001183D512" data-gid="pre53152001" data-ratio="1.27">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2817.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">3.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.27</span>
								</div>
							</div>
							<div class="team_stan">
								3.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p53152001183D513" data-gid="pre53152001" data-ratio="1.87">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.87</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2445.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">3.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 04:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 04:00
								<div class="gdata dspn" data-id="pre53152003" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="FC 인터 밀란" data-away="FK 츠르베나 즈베즈다">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5315200311" data-gid="pre53152003" data-ratio="1.00">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2697.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">FC 인터 밀란</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.00</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5315200312" data-gid="pre53152003" data-ratio="6.70">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">6.70</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5315200313" data-gid="pre53152003" data-ratio="11.70">
								<span class="sp_icon_box"><span class="odds_ratio">11.70</span></span>
								<span class="odds_name_box">
								<span class="odds_name">FK 츠르베나 즈베즈다</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/5149.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5315200316M2D51714" data-gid="pre53152003" data-ratio="1.74">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2697.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">FC 인터 밀란</span>
								</span>
								<span class="odds_stan dspn">-2.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.74</span>
								</div>
							</div>
							<div class="team_stan">
								-2.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5315200316M2D51715" data-gid="pre53152003" data-ratio="1.34">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.34</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">FK 츠르베나 즈베즈다</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/5149.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">2.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p53152003183D512" data-gid="pre53152003" data-ratio="1.43">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2697.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">3.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.43</span>
								</div>
							</div>
							<div class="team_stan">
								3.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p53152003183D513" data-gid="pre53152003" data-ratio="1.61">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.61</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/5149.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">3.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 04:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 04:00
								<div class="gdata dspn" data-id="pre53152005" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="PSV 에인트호번" data-away="스포르팅 CP">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5315200511" data-gid="pre53152005" data-ratio="2.10">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2952.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">PSV 에인트호번</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">2.10</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5315200512" data-gid="pre53152005" data-ratio="3.10">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">3.10</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5315200513" data-gid="pre53152005" data-ratio="2.30">
								<span class="sp_icon_box"><span class="odds_ratio">2.30</span></span>
								<span class="odds_name_box">
								<span class="odds_name">스포르팅 CP</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3001.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p53152005183D512" data-gid="pre53152005" data-ratio="1.91">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2952.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">3.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.91</span>
								</div>
							</div>
							<div class="team_stan">
								3.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p53152005183D513" data-gid="pre53152005" data-ratio="1.24">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.24</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3001.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">3.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 04:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 04:00
								<div class="gdata dspn" data-id="pre53152009" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="SK 슬로반 브라티슬라바" data-away="맨체스터 시티">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5315200911" data-gid="pre53152009" data-ratio="26.70">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2404.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">SK 슬로반 브라티슬라바</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">26.70</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5315200912" data-gid="pre53152009" data-ratio="10.70">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">10.70</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5315200913" data-gid="pre53152009" data-ratio="1.00">
								<span class="sp_icon_box"><span class="odds_ratio">1.00</span></span>
								<span class="odds_name_box">
								<span class="odds_name">맨체스터 시티</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/17.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p53152009163D51714" data-gid="pre53152009" data-ratio="1.32">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2404.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">SK 슬로반 브라티슬라바</span>
								</span>
								<span class="odds_stan dspn">3.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.32</span>
								</div>
							</div>
							<div class="team_stan">
								3.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p53152009163D51715" data-gid="pre53152009" data-ratio="1.77">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.77</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">맨체스터 시티</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/17.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-3.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p53152009184D512" data-gid="pre53152009" data-ratio="1.87">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2404.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">4.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.87</span>
								</div>
							</div>
							<div class="team_stan">
								4.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p53152009184D513" data-gid="pre53152009" data-ratio="1.27">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.27</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/17.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">4.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 04:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 04:00
								<div class="gdata dspn" data-id="pre53151995" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="바이어 04 레버쿠젠" data-away="AC 밀란">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5315199511" data-gid="pre53151995" data-ratio="1.28">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2681.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">바이어 04 레버쿠젠</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.28</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5315199512" data-gid="pre53151995" data-ratio="3.70">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">3.70</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5315199513" data-gid="pre53151995" data-ratio="4.30">
								<span class="sp_icon_box"><span class="odds_ratio">4.30</span></span>
								<span class="odds_name_box">
								<span class="odds_name">AC 밀란</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2692.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5315199516M0D51714" data-gid="pre53151995" data-ratio="1.26">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2681.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">바이어 04 레버쿠젠</span>
								</span>
								<span class="odds_stan dspn">-0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.26</span>
								</div>
							</div>
							<div class="team_stan">
								-0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5315199516M0D51715" data-gid="pre53151995" data-ratio="1.89">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.89</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">AC 밀란</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2692.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p53151995183D512" data-gid="pre53151995" data-ratio="1.89">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2681.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">3.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.89</span>
								</div>
							</div>
							<div class="team_stan">
								3.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p53151995183D513" data-gid="pre53151995" data-ratio="1.26">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.26</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2692.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">3.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 04:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 04:00
								<div class="gdata dspn" data-id="pre53151997" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="보루시아 도르트문트" data-away="셀틱 FC">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5315199711" data-gid="pre53151997" data-ratio="1.17">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2673.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">보루시아 도르트문트</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.17</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5315199712" data-gid="pre53151997" data-ratio="4.10">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">4.10</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5315199713" data-gid="pre53151997" data-ratio="4.90">
								<span class="sp_icon_box"><span class="odds_ratio">4.90</span></span>
								<span class="odds_name_box">
								<span class="odds_name">셀틱 FC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2352.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5315199716M1D51714" data-gid="pre53151997" data-ratio="1.86">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2673.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">보루시아 도르트문트</span>
								</span>
								<span class="odds_stan dspn">-1.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.86</span>
								</div>
							</div>
							<div class="team_stan">
								-1.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5315199716M1D51715" data-gid="pre53151997" data-ratio="1.27">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.27</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">셀틱 FC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2352.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">1.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p53151997183D512" data-gid="pre53151997" data-ratio="1.83">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2673.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">3.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.83</span>
								</div>
							</div>
							<div class="team_stan">
								3.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p53151997183D513" data-gid="pre53151997" data-ratio="1.29">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.29</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2352.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">3.5</span>
							</div>
						</div>
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 04:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 04:00
								<div class="gdata dspn" data-id="pre53151993" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="아스널 FC" data-away="파리 생제르맹 FC">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5315199311" data-gid="pre53151993" data-ratio="1.35">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/42.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">아스널 FC</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.35</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5315199312" data-gid="pre53151993" data-ratio="3.35">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">3.35</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5315199313" data-gid="pre53151993" data-ratio="4.20">
								<span class="sp_icon_box"><span class="odds_ratio">4.20</span></span>
								<span class="odds_name_box">
								<span class="odds_name">파리 생제르맹 FC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/1644.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5315199316M0D51714" data-gid="pre53151993" data-ratio="1.33">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/42.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">아스널 FC</span>
								</span>
								<span class="odds_stan dspn">-0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.33</span>
								</div>
							</div>
							<div class="team_stan">
								-0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5315199316M0D51715" data-gid="pre53151993" data-ratio="1.76">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.76</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">파리 생제르맹 FC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/1644.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p53151993182D512" data-gid="pre53151993" data-ratio="1.37">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/42.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">2.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.37</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p53151993182D513" data-gid="pre53151993" data-ratio="1.70">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.70</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/1644.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">2.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/ENG.png" alt="">
						EFL 챔피언십 <img src="https://lg-2020.com/static/img/sports/1.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 04:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 04:00
								<div class="gdata dspn" data-id="pre51095131" data-spo="축구" data-lg="EFL 챔피언십" data-flag="1" data-home="웨스트 브로미치 앨비언" data-away="미들즈브러 FC">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5109513111" data-gid="pre51095131" data-ratio="2.02">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/8.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">웨스트 브로미치 앨비언</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">2.02</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5109513112" data-gid="pre51095131" data-ratio="2.90">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">2.90</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5109513113" data-gid="pre51095131" data-ratio="2.50">
								<span class="sp_icon_box"><span class="odds_ratio">2.50</span></span>
								<span class="odds_name_box">
								<span class="odds_name">미들즈브러 FC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/36.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5109513116M0D51714" data-gid="pre51095131" data-ratio="1.94">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/8.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">웨스트 브로미치 앨비언</span>
								</span>
								<span class="odds_stan dspn">-0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.94</span>
								</div>
							</div>
							<div class="team_stan">
								-0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5109513116M0D51715" data-gid="pre51095131" data-ratio="1.23">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.23</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">미들즈브러 FC</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/36.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p51095131182D512" data-gid="pre51095131" data-ratio="1.59">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/8.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">2.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.59</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p51095131182D513" data-gid="pre51095131" data-ratio="1.45">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.45</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/36.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">2.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:#ffdc00">
						<img src="https://lg-2020.com/static/img/flag/USA.png" alt="">
						MLB <img src="https://lg-2020.com/static/img/sports/3.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 05:08:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 05:08
								<div class="gdata dspn" data-id="pre54106371" data-spo="야구" data-lg="MLB" data-flag="16" data-home="볼티모어 오리올스" data-away="캔자스시티 로열스">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p541063712514" data-gid="pre54106371" data-ratio="1.49">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3652.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">볼티모어 오리올스</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.49</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p541063712515" data-gid="pre54106371" data-ratio="2.12">
								<span class="sp_icon_box"><span class="odds_ratio">2.12</span></span>
								<span class="odds_name_box">
								<span class="odds_name">캔자스시티 로열스</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3651.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p54106371256M1D51714" data-gid="pre54106371" data-ratio="2.20">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3652.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">볼티모어 오리올스</span>
								</span>
								<span class="odds_stan dspn">-1.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">2.20</span>
								</div>
							</div>
							<div class="team_stan">
								-1.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p54106371256M1D51715" data-gid="pre54106371" data-ratio="1.53">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.53</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">캔자스시티 로열스</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3651.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">1.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p541063712586D512" data-gid="pre54106371" data-ratio="1.68">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3652.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">6.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.68</span>
								</div>
							</div>
							<div class="team_stan">
								6.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p541063712586D513" data-gid="pre54106371" data-ratio="1.96">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.96</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3651.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">6.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/ECU.png" alt="">
						리가프로 프리메라 B <img src="https://lg-2020.com/static/img/sports/1.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 05:30:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 05:30
								<div class="gdata dspn" data-id="pre48222883" data-spo="축구" data-lg="리가프로 프리메라 B" data-flag="165" data-home="Gualaceo SC" data-away="Club Leones Del Norte">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p4822288311" data-gid="pre48222883" data-ratio="1.60">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/319227.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">Gualaceo SC</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.60</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p4822288312" data-gid="pre48222883" data-ratio="2.70">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">2.70</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p4822288313" data-gid="pre48222883" data-ratio="3.80">
								<span class="sp_icon_box"><span class="odds_ratio">3.80</span></span>
								<span class="odds_name_box">
								<span class="odds_name">Club Leones Del Norte</span>
								</span>
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p4822288316M0D51714" data-gid="pre48222883" data-ratio="1.56">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/319227.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">Gualaceo SC</span>
								</span>
								<span class="odds_stan dspn">-0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.56</span>
								</div>
							</div>
							<div class="team_stan">
								-0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p4822288316M0D51715" data-gid="pre48222883" data-ratio="1.48">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.48</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">Club Leones Del Norte</span>
								</span>
								<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">0.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/ARG.png" alt="">
						수퍼리가 <img src="https://lg-2020.com/static/img/sports/1.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 06:30:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 06:30
								<div class="gdata dspn" data-id="pre53764875" data-spo="축구" data-lg="수퍼리가" data-flag="48" data-home="CA 티그레" data-away="CA 인데펜디엔테">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5376487511" data-gid="pre53764875" data-ratio="2.95">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/7628.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">CA 티그레</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">2.95</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5376487512" data-gid="pre53764875" data-ratio="2.50">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">2.50</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5376487513" data-gid="pre53764875" data-ratio="2.00">
								<span class="sp_icon_box"><span class="odds_ratio">2.00</span></span>
								<span class="odds_name_box">
								<span class="odds_name">CA 인데펜디엔테</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3209.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p53764875160D51714" data-gid="pre53764875" data-ratio="1.24">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/7628.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">CA 티그레</span>
								</span>
								<span class="odds_stan dspn">0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.24</span>
								</div>
							</div>
							<div class="team_stan">
								0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p53764875160D51715" data-gid="pre53764875" data-ratio="1.92">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.92</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">CA 인데펜디엔테</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3209.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-0.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p53764875181D512" data-gid="pre53764875" data-ratio="1.27">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/7628.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">1.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.27</span>
								</div>
							</div>
							<div class="team_stan">
								1.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p53764875181D513" data-gid="pre53764875" data-ratio="1.86">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.86</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3209.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">1.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:#ffdc00">
						<img src="https://lg-2020.com/static/img/flag/USA.png" alt="">
						MLB <img src="https://lg-2020.com/static/img/sports/3.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 06:32:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 06:32
								<div class="gdata dspn" data-id="pre54148025" data-spo="야구" data-lg="MLB" data-flag="16" data-home="밀워키 브루어스" data-away="뉴욕메츠">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p541480252514" data-gid="pre54148025" data-ratio="1.58">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3630.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">밀워키 브루어스</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.58</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p541480252515" data-gid="pre54148025" data-ratio="1.96">
								<span class="sp_icon_box"><span class="odds_ratio">1.96</span></span>
								<span class="odds_name_box">
								<span class="odds_name">뉴욕메츠</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3629.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p541480252587D512" data-gid="pre54148025" data-ratio="1.87">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3630.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">7.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.87</span>
								</div>
							</div>
							<div class="team_stan">
								7.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p541480252587D513" data-gid="pre54148025" data-ratio="1.75">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.75</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3629.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">7.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/ARG.png" alt="">
						수퍼리가 <img src="https://lg-2020.com/static/img/sports/1.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 08:30:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 08:30
								<div class="gdata dspn" data-id="pre53785495" data-spo="축구" data-lg="수퍼리가" data-flag="48" data-home="로사리오 센트랄" data-away="벨레스 사르스피엘드">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5378549511" data-gid="pre53785495" data-ratio="2.85">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3217.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">로사리오 센트랄</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">2.85</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5378549512" data-gid="pre53785495" data-ratio="2.60">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">2.60</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5378549513" data-gid="pre53785495" data-ratio="2.00">
								<span class="sp_icon_box"><span class="odds_ratio">2.00</span></span>
								<span class="odds_name_box">
								<span class="odds_name">벨레스 사르스피엘드</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3208.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p53785495160D51714" data-gid="pre53785495" data-ratio="1.24">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3217.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">로사리오 센트랄</span>
								</span>
								<span class="odds_stan dspn">0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.24</span>
								</div>
							</div>
							<div class="team_stan">
								0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p53785495160D51715" data-gid="pre53785495" data-ratio="1.92">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.92</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">벨레스 사르스피엘드</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3208.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">-0.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:#ffdc00">
						<img src="https://lg-2020.com/static/img/flag/USA.png" alt="">
						MLB <img src="https://lg-2020.com/static/img/sports/3.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 09:38:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 09:38
								<div class="gdata dspn" data-id="pre54148021" data-spo="야구" data-lg="MLB" data-flag="16" data-home="샌디에이고 파드리스" data-away="애틀란타 브레이브스">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p541480212514" data-gid="pre54148021" data-ratio="1.51">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3636.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">샌디에이고 파드리스</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.51</span></span>
							</div>
							<div class="team_draw">
								VS
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p541480212515" data-gid="pre54148021" data-ratio="2.06">
								<span class="sp_icon_box"><span class="odds_ratio">2.06</span></span>
								<span class="odds_name_box">
								<span class="odds_name">애틀란타 브레이브스</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3656.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p54148021256M1D51714" data-gid="pre54148021" data-ratio="2.25">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3636.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">샌디에이고 파드리스</span>
								</span>
								<span class="odds_stan dspn">-1.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">2.25</span>
								</div>
							</div>
							<div class="team_stan">
								-1.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p54148021256M1D51715" data-gid="pre54148021" data-ratio="1.51">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.51</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">애틀란타 브레이브스</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3656.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">1.5</span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-bid="p541480212586D512" data-gid="pre54148021" data-ratio="1.65">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3636.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">오버</span>
								</span>
								<span class="odds_stan dspn">6.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i>
									<span class="odds_ratio">1.65</span>
								</div>
							</div>
							<div class="team_stan">
								6.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-bid="p541480212586D513" data-gid="pre54148021" data-ratio="2.00">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.00</span>
									<i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">언더</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3656.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">6.5</span>
							</div>
						</div>
					</div>
					<div class="info_league" style="color:">
						<img src="https://lg-2020.com/static/img/flag/COL.png" alt="">
						코파 콜롬비아 <img src="https://lg-2020.com/static/img/sports/1.png" class="korean_ball">
					</div>
					<div class="sports_box opened">
						<div class="sports_time">
							2024-10-02 10:00:00
						</div>
						<div class="s_odds">
							<div class="team_head">
								 10-02 10:00
								<div class="gdata dspn" data-id="pre54002405" data-spo="축구" data-lg="코파 콜롬비아" data-flag="274" data-home="미요나리오스 FC" data-away="아틀레티코 부카라망가">
								</div>
							</div>
							<div class="team_home team_3 sel_odds" data-m="승무패" data-bid="p5400240511" data-gid="pre54002405" data-ratio="1.28">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/6117.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box"><span class="odds_name">미요나리오스 FC</span></span>
								<span class="sp_icon_box"><span class="odds_ratio">1.28</span></span>
							</div>
							<div class="team_draw team_3 sel_odds" data-m="승무패" data-bid="p5400240512" data-gid="pre54002405" data-ratio="3.05">
								<span class="odds_name dspn">무승부</span>
								<span class="sp_icon_box"><span class="odds_ratio">3.05</span></span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-bid="p5400240513" data-gid="pre54002405" data-ratio="5.70">
								<span class="sp_icon_box"><span class="odds_ratio">5.70</span></span>
								<span class="odds_name_box">
								<span class="odds_name">아틀레티코 부카라망가</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/6103.png" onerror="this.src='/static/img/noimg.png'"></span>
							</div>
						</div>
						<div class="s_odds s_am">
							<div class="team_head">
								핸디캡
							</div>
							<div class="team_hd_home team_2 sel_odds" data-m="핸디캡" data-bid="p5400240516M0D51714" data-gid="pre54002405" data-ratio="1.26">
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/6117.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_name_box">
								<span class="odds_name">미요나리오스 FC</span>
								</span>
								<span class="odds_stan dspn">-0.5</span>
								<div class="sp_icon_box">
									<i class="fas fa-heading" aria-hidden="true"></i>
									<span class="odds_ratio">1.26</span>
								</div>
							</div>
							<div class="team_stan">
								-0.5
							</div>
							<div class="team_hd_away team_2 sel_odds" data-m="핸디캡" data-bid="p5400240516M0D51715" data-gid="pre54002405" data-ratio="1.88">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.88</span>
									<i class="fas fa-heading" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box">
								<span class="odds_name">아틀레티코 부카라망가</span>
								</span>
								<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/6103.png" onerror="this.src='/static/img/noimg.png'"></span>
								<span class="odds_stan dspn">0.5</span>
							</div>
						</div>
					</div>
				</div>
				<div class="page_box">
				</div>
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
//import { open_payback } from '@/static/js/base.ts';
//import '@/assets/tracking.js';
import loadLiveChat from '@/assets/livechat.js';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'korean2Page',

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