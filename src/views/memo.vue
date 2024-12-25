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
	<div class="board_box">
		<div class="page_ttl only_pc">
			 쪽지함
		</div>
		<div class="page_tab only_mobile">
		        <a href="/notice">
				<span class="page_tab_icon"><i class="fas fa-bullhorn" aria-hidden="true"></i></span>
				공지사항 </a>
				<a href="/event">
				<span class="page_tab_icon"><i class="fas fa-gifts" aria-hidden="true"></i></span>
				이벤트 </a>
				<a href="/cs_center">
				<span class="page_tab_icon"><i class="fas fa-headset" aria-hidden="true"></i></span>
				고객센터 </a>
				<a href="/memo" class="on">
				<span class="page_tab_icon"><i class="far fa-envelope" aria-hidden="true"></i></span>
				쪽지 </a>
	</div>
		<div class="board_list">
			<form action="" class="f_list" method="post">
				<div class="btn_right_box">
					<a class="btn_mid btn_blue" href="/memo">전체읽음</a>
					<input type="submit" value="선택삭제" class="btn_list_del">
				</div>
				<table class="tb_wd_st">
				<tbody>
				<tr>
					<th>
						<input type="checkbox" class="select_all">
					</th>
					<th class="memo_no">
						번호
					</th>
					<th>
						쪽지내용
					</th>
					<th>
						보낸날짜
					</th>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="25134658">
					</td>
					<td class="memo_no">
						830
					</td>
					<td class="open_memo memo_content" data-idx="25134658" data-i="830">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						09-26 11:22
					</td>
				</tr>
				<tr class="dspn ans" data-i="830">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="25099826">
					</td>
					<td class="memo_no">
						829
					</td>
					<td class="open_memo memo_content" data-idx="25099826" data-i="829">
						 ★ 카뱅/박지환장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						09-26 11:16
					</td>
				</tr>
				<tr class="dspn ans" data-i="829">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카뱅/박지환장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="25064994">
					</td>
					<td class="memo_no">
						828
					</td>
					<td class="open_memo memo_content" data-idx="25064994" data-i="828">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-26 01:58
					</td>
				</tr>
				<tr class="dspn ans" data-i="828">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스&nbsp;운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던 구글&nbsp; 게임은&nbsp;긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!<br>
							 평생 주소 : 보스사이트<strong>.com</strong><br>
							 24시 텔레그램: @boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="25029250">
					</td>
					<td class="memo_no">
						827
					</td>
					<td class="open_memo memo_content" data-idx="25029250" data-i="827">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						09-26 00:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="827">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24994435">
					</td>
					<td class="memo_no">
						826
					</td>
					<td class="open_memo memo_content" data-idx="24994435" data-i="826">
						 ##미니게임 로투스 홀짝 게임 점검 완�
					</td>
					<td class="memo_date">
						09-25 21:25
					</td>
				</tr>
				<tr class="dspn ans" data-i="826">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##미니게임 로투스 홀짝 게임 점검 완료##<br>
							<br>
							 안녕하세요 회원님들 보스 운영진입니다.
						</p>
						<p>
							현재 로투스 홀짝 게임이 정상화되었음을 알려드립니다.
						</p>
						<p>
							&nbsp;이용에 불편을끼쳐드려 죄송합니다.^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss25cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24959635">
					</td>
					<td class="memo_no">
						825
					</td>
					<td class="open_memo memo_content" data-idx="24959635" data-i="825">
						 ###미니게임 로투스 홀짝 및 구글게임&amp;
					</td>
					<td class="memo_date">
						09-25 21:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="825">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							###미니게임 로투스 홀짝 및 구글게임&nbsp;점검 안내 ###<br>
							<br>
							 안녕하세요 회원님들 보스운영진입니다.
						</p>
						<p>
							현재 게임사 서버문제로 인해 업데이트 및 결과누락건이 다수 발견이되어 추 후 재공지 예정에 있습니다.
						</p>
						<p>
							해당 부분 게임사를 통해 확인중에 있습니다 .
						</p>
						<p>
							정상화시 재 안내 드리도록 하겠습니다
						</p>
						<p>
							&nbsp;이용에 불편을끼쳐드려 죄송합니다.^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24924825">
					</td>
					<td class="memo_no">
						824
					</td>
					<td class="open_memo memo_content" data-idx="24924825" data-i="824">
						 ★ 카뱅/박지환장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						09-25 17:35
					</td>
				</tr>
				<tr class="dspn ans" data-i="824">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카뱅/박지환장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24889070">
					</td>
					<td class="memo_no">
						823
					</td>
					<td class="open_memo memo_content" data-idx="24889070" data-i="823">
						 ##생산 유지보수 점검이 종료되었습니
					</td>
					<td class="memo_date">
						09-25 14:40
					</td>
				</tr>
				<tr class="dspn ans" data-i="823">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##생산 유지보수 점검이 종료되었습니다.##<br>
							<br>
							 안녕하세요 회원님들 보스운영진입니다.
						</p>
						<p>
							이용에 불편을끼쳐드려 죄송합니다.^^<br>
							<br>
							 평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss25cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24854237">
					</td>
					<td class="memo_no">
						822
					</td>
					<td class="open_memo memo_content" data-idx="24854237" data-i="822">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-25 09:43
					</td>
				</tr>
				<tr class="dspn ans" data-i="822">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스&nbsp;운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던 구글게임은&nbsp;긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!<br>
							 평생 주소 : 보스사이트<strong>.com</strong><br>
							 24시 텔레그램: @boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24819456">
					</td>
					<td class="memo_no">
						821
					</td>
					<td class="open_memo memo_content" data-idx="24819456" data-i="821">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-25 04:20
					</td>
				</tr>
				<tr class="dspn ans" data-i="821">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재&nbsp; 구글 게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24784674">
					</td>
					<td class="memo_no">
						820
					</td>
					<td class="open_memo memo_content" data-idx="24784674" data-i="820">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-25 00:52
					</td>
				</tr>
				<tr class="dspn ans" data-i="820">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스&nbsp;운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던 로투스 홀짝 게임은&nbsp;긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!<br>
							 평생 주소 : 보스사이트<strong>.com</strong><br>
							 24시 텔레그램: @boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24749909">
					</td>
					<td class="memo_no">
						819
					</td>
					<td class="open_memo memo_content" data-idx="24749909" data-i="819">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-25 00:19
					</td>
				</tr>
				<tr class="dspn ans" data-i="819">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 미니게임 로투스 홀짝 게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24715147">
					</td>
					<td class="memo_no">
						818
					</td>
					<td class="open_memo memo_content" data-idx="24715147" data-i="818">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						09-24 23:54
					</td>
				</tr>
				<tr class="dspn ans" data-i="818">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24680384">
					</td>
					<td class="memo_no">
						817
					</td>
					<td class="open_memo memo_content" data-idx="24680384" data-i="817">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						09-24 22:46
					</td>
				</tr>
				<tr class="dspn ans" data-i="817">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24645624">
					</td>
					<td class="memo_no">
						816
					</td>
					<td class="open_memo memo_content" data-idx="24645624" data-i="816">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						09-24 22:36
					</td>
				</tr>
				<tr class="dspn ans" data-i="816">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24610865">
					</td>
					<td class="memo_no">
						815
					</td>
					<td class="open_memo memo_content" data-idx="24610865" data-i="815">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						09-24 22:35
					</td>
				</tr>
				<tr class="dspn ans" data-i="815">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24576095">
					</td>
					<td class="memo_no">
						814
					</td>
					<td class="open_memo memo_content" data-idx="24576095" data-i="814">
						 ## 베팅금 / 당첨금 파격적인 상향 안�
					</td>
					<td class="memo_date">
						09-24 20:32
					</td>
				</tr>
				<tr class="dspn ans" data-i="814">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 베팅금 / 당첨금 파격적인 상향 안내 ##
						</p>
						<p>
							현 시간부로 회원님들의 최대 베팅금 / 당첨금액이 상향되었습니다&nbsp;
						</p>
						<p>
							최대 4억까지 당첨 가능하니 참고 바랍니다!
						</p>
						<p>
							자세한 사항은 공지란 레벨업 등급혜택란 참고 해주시길 바랍니다 ^^
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24541343">
					</td>
					<td class="memo_no">
						813
					</td>
					<td class="open_memo memo_content" data-idx="24541343" data-i="813">
						 안녕하세요 회원님들 보스 운영진입�
					</td>
					<td class="memo_date">
						09-24 20:21
					</td>
				</tr>
				<tr class="dspn ans" data-i="813">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들 보스 운영진입니다.
						</p>
						<p>
							&nbsp;보스 게시판 업데이트 안내(pc기준 우측 상단)
						</p>
						<p>
							이용해주시는 회원님들을 위해 게시판이 업데이트되었습니다&nbsp;
						</p>
						<p>
							수많은 이벤트가 게시판을 통해 진행 될 예정이니 회원님들께서는 참여 후 많은 혜택 받으시길 바랍니다^^
						</p>
						<p>
							선착순 이벤트,깜짝 돌발 퀴즈 이벤트,배당왕 이벤트 등등 매주 많은 이벤트 진행 시 게시판을 통하여 참여가능
						</p>
						<p>
							&nbsp;댓글 / 투표를 통해 당첨자에게 포인트 및 머니 즉시 지급 !
						</p>
						<p>
							<br>
							 -주의사항&nbsp;
						</p>
						<p>
							지급되는 머니 및 포인트의 롤링/출금 규정은 쪽지 및 채널방으로 안내 예정 롤링기준에 맞게 사용 시 출금 가능합니다
						</p>
						<p>
							채널방은 pc기준 우측하단 배너링크 / 모바일기준 하단 배너링크 및 우측 상단 텔레그램 버튼 클릭 후 접속해주시면 됩니다.
						</p>
						<p>
							자세한 사항은 이벤트란 게시판 업데이트 참고 해주시길 바랍니다.
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 오늘도 저희 보스를 이용해주셔서 감사합니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는라이브챗 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss25cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24506507">
					</td>
					<td class="memo_no">
						812
					</td>
					<td class="open_memo memo_content" data-idx="24506507" data-i="812">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-24 02:45
					</td>
				</tr>
				<tr class="dspn ans" data-i="812">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스&nbsp;운영진입니다. ^^
						</p>
						<p>
							<br>
							 안녕하세요 회원님 보스 운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던 구글게임은 긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^
						</p>
						<p>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24470183">
					</td>
					<td class="memo_no">
						811
					</td>
					<td class="open_memo memo_content" data-idx="24470183" data-i="811">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-23 22:09
					</td>
				</tr>
				<tr class="dspn ans" data-i="811">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 미니게임 구글게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24435377">
					</td>
					<td class="memo_no">
						810
					</td>
					<td class="open_memo memo_content" data-idx="24435377" data-i="810">
						 현재 진행중이었던 로투스/크라운 점�
					</td>
					<td class="memo_date">
						09-23 16:11
					</td>
				</tr>
				<tr class="dspn ans" data-i="810">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							현재 진행중이었던 로투스/크라운 점검 이 종료 되었습니다 .
						</p>
						<p>
							기다려 주셔서 감사합니다 .
						</p>
						<p>
							정상화 되었으니 이용에 참고 부탁드립니다 .
						</p>
						<p>
							이용에 불편을 드려 대단히 죄송합니다<br>
							 정상화 될 시 재공지 해드리겠습니다
						</p>
						<p>
							오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							<br>
							 이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss25cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24400649">
					</td>
					<td class="memo_no">
						809
					</td>
					<td class="open_memo memo_content" data-idx="24400649" data-i="809">
						 현재 진행중이었던 긴급&nbsp; 프라그�
					</td>
					<td class="memo_date">
						09-23 12:33
					</td>
				</tr>
				<tr class="dspn ans" data-i="809">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							현재 진행중이었던 긴급&nbsp; 프라그마틱 점검 ( 국제망 이슈 ) 이 종료 되었습니다 .
						</p>
						<p>
							기다려 주셔서 감사합니다 .
						</p>
						<p>
							정상화 되었으니 이용에 참고 부탁드립니다 .
						</p>
						<p>
							오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							<br>
							 이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss25cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24365928">
					</td>
					<td class="memo_no">
						808
					</td>
					<td class="open_memo memo_content" data-idx="24365928" data-i="808">
						 ##크라운게임 점검 안내##
					</td>
					<td class="memo_date">
						09-23 12:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="808">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##크라운게임 점검 안내##
						</p>
						<p>
							안녕하세요 보스 운영진입니다.
						</p>
						<p>
							크라운게임 점검 안내
						</p>
						<p>
							점검시간: 미정 정상화 시 재안내
						</p>
						<p>
							점검 사항 : 크라운 점검
						</p>
						<p>
							<br>
							 &nbsp;이용에 불편을 드려 대단히 죄송합니다<br>
							 정상화 될 시 재공지 해드리겠습니다
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							<br>
							 이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss25c
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24331208">
					</td>
					<td class="memo_no">
						807
					</td>
					<td class="open_memo memo_content" data-idx="24331208" data-i="807">
						 ##프라그마틱 전체 이슈 안내##&nbsp;
					</td>
					<td class="memo_date">
						09-23 11:42
					</td>
				</tr>
				<tr class="dspn ans" data-i="807">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##프라그마틱 전체 이슈 안내##&nbsp;
						</p>
						<p>
							프라그마틱 연결 서버의 국제망 이슈로 임시 긴급 점검 전체이슈가 발생하고있습니다.&nbsp;
						</p>
						<p>
							현재 게임사측과 대화하여 원인 파악중에있습니다.
						</p>
						<p>
							파악되는 내용 및 정상화시 공지해드리겠습니다
						</p>
						<p>
							이용에 불편드려 죄송합니다.
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							<br>
							 이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss25cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24296487">
					</td>
					<td class="memo_no">
						806
					</td>
					<td class="open_memo memo_content" data-idx="24296487" data-i="806">
						 ##로투스게임 점검 안내##
					</td>
					<td class="memo_date">
						09-23 10:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="806">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##로투스게임 점검 안내##
						</p>
						<p>
							안녕하세요 보스 운영진입니다.
						</p>
						<p>
							로투스게임 점검 안내
						</p>
						<p>
							점검시간: 오전10~16시까지예정<br>
							 점검 사항 : 로투스 보수 작업
						</p>
						<p>
							<br>
							 이용에 불편을 드려 대단히 죄송합니다<br>
							 정상화 될 시 재공지 해드리겠습니다
						</p>
						<p>
							오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							<br>
							 이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss25cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24261768">
					</td>
					<td class="memo_no">
						805
					</td>
					<td class="open_memo memo_content" data-idx="24261768" data-i="805">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-23 08:31
					</td>
				</tr>
				<tr class="dspn ans" data-i="805">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							안녕하세요 회원님들 운영진입니다.
						</p>
						<p>
							미니게임 구글게임 점검 안내&nbsp;
						</p>
						<p>
							현재 게임사 서버문제로 인해 업데이트 및 결과누락건이 다수 발견이되어 추 후 재공지 예정에 있습니다.
						</p>
						<p>
							해당 부분 게임사를 통해 확인중에 있습니다 .
						</p>
						<p>
							정상화시 재 안내 드리도록 하겠습니다
						</p>
						<p>
							&nbsp;이용에 불편을끼쳐드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24225136">
					</td>
					<td class="memo_no">
						804
					</td>
					<td class="open_memo memo_content" data-idx="24225136" data-i="804">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-22 09:44
					</td>
				</tr>
				<tr class="dspn ans" data-i="804">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							안녕하세요 회원님 히어로 운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던 구글게임은 긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^
						</p>
						<p>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24190472">
					</td>
					<td class="memo_no">
						803
					</td>
					<td class="open_memo memo_content" data-idx="24190472" data-i="803">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-22 08:16
					</td>
				</tr>
				<tr class="dspn ans" data-i="803">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							현재 전체 게임 결과처리 &nbsp;대한 오류가 발견되어 확인중에 있습니다.신속하게 확인하도록 하도록 하겠습니다. 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24155812">
					</td>
					<td class="memo_no">
						802
					</td>
					<td class="open_memo memo_content" data-idx="24155812" data-i="802">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-22 08:16
					</td>
				</tr>
				<tr class="dspn ans" data-i="802">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							현재 전체 게임 결과처리 &nbsp;대한 오류가 발견되어 확인중에 있습니다.신속하게 확인하도록 하도록 하겠습니다. 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24121149">
					</td>
					<td class="memo_no">
						801
					</td>
					<td class="open_memo memo_content" data-idx="24121149" data-i="801">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-22 01:35
					</td>
				</tr>
				<tr class="dspn ans" data-i="801">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 미니게임 가상 스포츠 게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24084661">
					</td>
					<td class="memo_no">
						800
					</td>
					<td class="open_memo memo_content" data-idx="24084661" data-i="800">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-21 23:53
					</td>
				</tr>
				<tr class="dspn ans" data-i="800">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							공홈 결과 지연
						</p>
						<p>
							현재 정상 처리 되고 있습니다.
						</p>
						<p>
							이용에 참고하시기 바랍니다.
						</p>
						<p>
							❗️이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 및 라이브 쳇 또는 카카오톡으로 문의 주세요❗️
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24050017">
					</td>
					<td class="memo_no">
						799
					</td>
					<td class="open_memo memo_content" data-idx="24050017" data-i="799">
						 ##무제한 돌발##&nbsp;
					</td>
					<td class="memo_date">
						09-21 19:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="799">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##무제한 돌발##&nbsp;
						</p>
						<p>
							분데스리가 / 프리미어리그 / 라리가 / 세리에&nbsp;&nbsp;무제한 돌발&nbsp;
						</p>
						<p>
							빅리그 축구 경기 기념&nbsp;
						</p>
						<p>
							<br>
							 보스 운영진 입니다.
						</p>
						<p>
							스포츠/미니게임 "무한 돌발 "이벤트 안내
						</p>
						<p>
							현시간부로 ~ 23:00 시까지 돌발 진행할 예정입니다
						</p>
						<p>
							<br>
							 스포츠 3폴더 충전시 20% 자동 지급
						</p>
						<p>
							스포츠 2폴더/미니게임 충전 시 10% 자동지급
						</p>
						<p>
							<br>
							 모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다.
						</p>
						<p>
							다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가한 점 참고바랍니다.^^
						</p>
						<p>
							스포츠 롤링 100%<br>
							 미니게임 롤링 400%
						</p>
						<p>
							지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다.
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^<br>
							 &nbsp;
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="24015303">
					</td>
					<td class="memo_no">
						798
					</td>
					<td class="open_memo memo_content" data-idx="24015303" data-i="798">
						 안녕하세요 회원님들 운영진입니다.
					</td>
					<td class="memo_date">
						09-21 01:48
					</td>
				</tr>
				<tr class="dspn ans" data-i="798">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들 운영진입니다.
						</p>
						<p>
							‼️미니게임 구글게임 점검 안내 ‼️
						</p>
						<p>
							현재 게임사 서버문제로 인해 업데이트 및 결과누락건이 다수 발견이되어 추 후 재공지 예정에 있습니다.
						</p>
						<p>
							해당 부분 게임사를 통해 확인중에 있습니다 .
						</p>
						<p>
							정상화시 재 안내 드리도록 하겠습니다
						</p>
						<p>
							&nbsp;이용에 불편을끼쳐드려 죄송합니다.^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23978077">
					</td>
					<td class="memo_no">
						797
					</td>
					<td class="open_memo memo_content" data-idx="23978077" data-i="797">
						 ★ 농협/황유빈장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						09-21 00:32
					</td>
				</tr>
				<tr class="dspn ans" data-i="797">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/황유빈장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23943475">
					</td>
					<td class="memo_no">
						796
					</td>
					<td class="open_memo memo_content" data-idx="23943475" data-i="796">
						 ★ **/***장 해당 계좌 입금 불가(정지)�
					</td>
					<td class="memo_date">
						09-21 00:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="796">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ **/***장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23908873">
					</td>
					<td class="memo_no">
						795
					</td>
					<td class="open_memo memo_content" data-idx="23908873" data-i="795">
						 ★ **/***장 해당 계좌 입금 불가(정지)�
					</td>
					<td class="memo_date">
						09-21 00:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="795">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ **/***장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss25cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23872381">
					</td>
					<td class="memo_no">
						794
					</td>
					<td class="open_memo memo_content" data-idx="23872381" data-i="794">
						 안녕하세요 회원님들운영진입니다.
					</td>
					<td class="memo_date">
						09-20 01:10
					</td>
				</tr>
				<tr class="dspn ans" data-i="794">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들운영진입니다.
						</p>
						<p>
							에볼루션 긴급공지&nbsp;
						</p>
						<p>
							현재 게임사 측 이슈로 에볼루션 게임사의&nbsp;
						</p>
						<p>
							전체적인 테이블의 영상 송출에 문제가 있음을 확인했습니다.
						</p>
						<p>
							게임사 측 이슈 부분 확인중에 있습니다
						</p>
						<p>
							관련부분 게임사 측 과 소통중에 있으며 ,&nbsp;
						</p>
						<p>
							이 부분 관련 하여 재 공지 안내드리도록 하겠습니다 .
						</p>
						<p>
							<br>
							 불편을드린 점 사과드리며, 빠르게 문제파악하여 정상화될수 있도록 노력하겠습니다.
						</p>
						<p>
							<br>
							 이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는라이브챗 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23837812">
					</td>
					<td class="memo_no">
						793
					</td>
					<td class="open_memo memo_content" data-idx="23837812" data-i="793">
						 안녕하세요 보스 운영진입니다!
					</td>
					<td class="memo_date">
						09-20 00:26
					</td>
				</tr>
				<tr class="dspn ans" data-i="793">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 보스 운영진입니다!
						</p>
						<p>
							&nbsp;구글게임 정상화 안내
						</p>
						<p>
							현재 구글게임 긴급점검이 종료되었습니다. 현시간 부터 정상 이용가능합니다 ^^
						</p>
						<p>
							이용에 불편을 드려 죄송합니다 ^^
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 및 라이브 쳇 또는 카카오톡으로 문의 주세요
						</p>
						<p>
							<br>
							 평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23801406">
					</td>
					<td class="memo_no">
						792
					</td>
					<td class="open_memo memo_content" data-idx="23801406" data-i="792">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-19 14:44
					</td>
				</tr>
				<tr class="dspn ans" data-i="792">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							카카오톡 아이디 변경 안내
						</p>
						<p>
							현시간부로 카카오톡 아이디가 » boss25cs 로 변경 되었습니다.
						</p>
						<p>
							문의주시기 전 아이디 한번씩 확인해 주시기 바라며 사칭의 주의해 주시기 바랍니다 ^^
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23766876">
					</td>
					<td class="memo_no">
						791
					</td>
					<td class="open_memo memo_content" data-idx="23766876" data-i="791">
						 ## 카카오톡 고객센터 제한 안내 ##
					</td>
					<td class="memo_date">
						09-19 14:21
					</td>
				</tr>
				<tr class="dspn ans" data-i="791">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 카카오톡 고객센터 제한 안내 ##
						</p>
						<p>
							현재 카카오톡 자체 점검중에 있어 카카오톡 문의가 어려운점 안내드립니다.
						</p>
						<p>
							궁금하신 사항 있을 시 텔레그램or라이브채팅으로 편하게 문의주시면 감사하겠습니다!
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23732346">
					</td>
					<td class="memo_no">
						790
					</td>
					<td class="open_memo memo_content" data-idx="23732346" data-i="790">
						 ##구글게임 정상화 안내##
					</td>
					<td class="memo_date">
						09-19 12:11
					</td>
				</tr>
				<tr class="dspn ans" data-i="790">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##구글게임 정상화 안내##
						</p>
						<p>
							현재 구글게임 긴급점검이 종료되었습니다. 현시간 부터 정상 이용가능합니다 ^^
						</p>
						<p>
							이용에 불편을 드려 죄송합니다 ^^
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 및 라이브 쳇 또는 카카오톡으로 문의 주세요
						</p>
						<p>
							<br>
							 평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23697815">
					</td>
					<td class="memo_no">
						789
					</td>
					<td class="open_memo memo_content" data-idx="23697815" data-i="789">
						 안녕하세요 회원님들운영진입니다.
					</td>
					<td class="memo_date">
						09-19 09:37
					</td>
				</tr>
				<tr class="dspn ans" data-i="789">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들운영진입니다.
						</p>
						<p>
							‼️미니게임 구글게임 점검 안내 ‼️
						</p>
						<p>
							현재 게임사 서버문제로 인해 업데이트 및 결과누락건이 다수 발견이되어 추 후 재공지 예정에 있습니다.
						</p>
						<p>
							해당 부분 게임사를 통해 확인중에 있습니다 .
						</p>
						<p>
							정상화시 재 안내 드리도록 하겠습니다
						</p>
						<p>
							&nbsp;이용에 불편을끼쳐드려 죄송합니다.^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23663286">
					</td>
					<td class="memo_no">
						788
					</td>
					<td class="open_memo memo_content" data-idx="23663286" data-i="788">
						 안녕하세요&nbsp; &nbsp;운영진입니다
					</td>
					<td class="memo_date">
						09-19 03:13
					</td>
				</tr>
				<tr class="dspn ans" data-i="788">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요&nbsp; &nbsp;운영진입니다
						</p>
						<p>
							★농협은행사 점검완료 안내
						</p>
						<p>
							현시간 부로 농협 은행사 점검이 완료가 되었으니,정상 입금 및 출금 가능하십니다.<br>
							 이용에 참고 부탁드리겠습니다.
						</p>
						<p>
							<br>
							 이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23628764">
					</td>
					<td class="memo_no">
						787
					</td>
					<td class="open_memo memo_content" data-idx="23628764" data-i="787">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						09-19 02:33
					</td>
				</tr>
				<tr class="dspn ans" data-i="787">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23594244">
					</td>
					<td class="memo_no">
						786
					</td>
					<td class="open_memo memo_content" data-idx="23594244" data-i="786">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						09-19 02:32
					</td>
				</tr>
				<tr class="dspn ans" data-i="786">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23559724">
					</td>
					<td class="memo_no">
						785
					</td>
					<td class="open_memo memo_content" data-idx="23559724" data-i="785">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						09-19 02:32
					</td>
				</tr>
				<tr class="dspn ans" data-i="785">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23525204">
					</td>
					<td class="memo_no">
						784
					</td>
					<td class="open_memo memo_content" data-idx="23525204" data-i="784">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						09-19 02:32
					</td>
				</tr>
				<tr class="dspn ans" data-i="784">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23490682">
					</td>
					<td class="memo_no">
						783
					</td>
					<td class="open_memo memo_content" data-idx="23490682" data-i="783">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-19 01:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="783">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							금일 은행사 농협은행 점검으로인해 해당 은행사 입출금은 불가하시니 점검 이후 입출금 및 계좌변경 후 이용 부탁드리겠습니다^^
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23456166">
					</td>
					<td class="memo_no">
						782
					</td>
					<td class="open_memo memo_content" data-idx="23456166" data-i="782">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						09-19 00:07
					</td>
				</tr>
				<tr class="dspn ans" data-i="782">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23421656">
					</td>
					<td class="memo_no">
						781
					</td>
					<td class="open_memo memo_content" data-idx="23421656" data-i="781">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						09-18 23:51
					</td>
				</tr>
				<tr class="dspn ans" data-i="781">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23369433">
					</td>
					<td class="memo_no">
						780
					</td>
					<td class="open_memo memo_content" data-idx="23369433" data-i="780">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-18 23:35
					</td>
				</tr>
				<tr class="dspn ans" data-i="780">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스&nbsp;운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던 카지노 에볼루션 게임은&nbsp;긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!<br>
							 평생 주소 : 보스사이트<strong>.com</strong><br>
							 24시 텔레그램: @boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23368676">
					</td>
					<td class="memo_no">
						779
					</td>
					<td class="open_memo memo_content" data-idx="23368676" data-i="779">
						 안녕하세요 운영진입니다
					</td>
					<td class="memo_date">
						09-18 23:35
					</td>
				</tr>
				<tr class="dspn ans" data-i="779">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 운영진입니다
						</p>
						<p>
							에볼루션정상화 안내
						</p>
						<p>
							현재 진행중이었던 긴급 유지보수 점검이 종료 되었습니다 .
						</p>
						<p>
							기다려 주셔서 감사합니다 .
						</p>
						<p>
							정상화 되었으니 이용에 참고 부탁드립니다 .
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23318133">
					</td>
					<td class="memo_no">
						778
					</td>
					<td class="open_memo memo_content" data-idx="23318133" data-i="778">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-18 22:09
					</td>
				</tr>
				<tr class="dspn ans" data-i="778">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 에볼루션 게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23283596">
					</td>
					<td class="memo_no">
						777
					</td>
					<td class="open_memo memo_content" data-idx="23283596" data-i="777">
						 !! 추석 떡값 이벤트 진행 안내 !!
					</td>
					<td class="memo_date">
						09-18 14:46
					</td>
				</tr>
				<tr class="dspn ans" data-i="777">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							!! 추석 떡값 이벤트 진행 안내 !!
						</p>
						<p>
							♥이용해주시는 회원님들을 위해 감사의 의미로 추석 이벤트가 업데이트 되었습니다. ♥
						</p>
						<p>
							●EVENT &nbsp;&lt;추석 떡값 이벤트&gt;●
						</p>
						<p>
							■ 9/16 ~ 9/18 ■
						</p>
						<p>
							ㅡ해당 추석 연휴 기간동안 누적충전금액에 따라 추석 기념 떡값 이벤트
						</p>
						<p>
							ㅡ500만원 - 5만원
						</p>
						<p>
							ㅡ1000만원 - 10만원
						</p>
						<p>
							ㅡ2000만원 - 20만원
						</p>
						<p>
							ㅡ5000만원 - 50만원
						</p>
						<p>
							■&nbsp;주의사항 ■
						</p>
						<p>
							ㅡ9/16 ~ 9/18 충전금액을 토대로 9/19일 고객센터로 문의 해주셔야 지급 가능합니다(19일 이후 문의 시 지급 불가)
						</p>
						<p>
							ㅡ해당 포인트는 즉시 출금이 가능합니다.
						</p>
						<p>
							ㅡ자유롭게 이용 가능하며 해당포인트 단독 사용 시 최대 출금 5배 입니다.<br>
							 (충전 금액 없이 이용 시 또는 포인트 전환 시 보유금액보다 포인트 금액이 적을 시 단독사용으로 간주됩니다)
						</p>
						<p>
							이벤트란 추석 떡값 이벤트 참고
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 오늘도 저희 보스를 이용해주셔서 감사합니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는라이브챗 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23248221">
					</td>
					<td class="memo_no">
						776
					</td>
					<td class="open_memo memo_content" data-idx="23248221" data-i="776">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-18 08:11
					</td>
				</tr>
				<tr class="dspn ans" data-i="776">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스&nbsp;운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던 구글 게임은&nbsp;긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!<br>
							 평생 주소 : 보스사이트<strong>.com</strong><br>
							 24시 텔레그램: @boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23213733">
					</td>
					<td class="memo_no">
						775
					</td>
					<td class="open_memo memo_content" data-idx="23213733" data-i="775">
						 안녕하세요 회원님들운영진입니다.
					</td>
					<td class="memo_date">
						09-18 07:22
					</td>
				</tr>
				<tr class="dspn ans" data-i="775">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들운영진입니다.
						</p>
						<p>
							‼️미니게임 구글게임 점검 안내 ‼️
						</p>
						<p>
							현재 게임사 서버문제로 인해 업데이트 및 결과누락건이 다수 발견이되어 추 후 재공지 예정에 있습니다.
						</p>
						<p>
							해당 부분 게임사를 통해 확인중에 있습니다 .
						</p>
						<p>
							정상화시 재 안내 드리도록 하겠습니다
						</p>
						<p>
							&nbsp;이용에 불편을끼쳐드려 죄송합니다.^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23179247">
					</td>
					<td class="memo_no">
						774
					</td>
					<td class="open_memo memo_content" data-idx="23179247" data-i="774">
						 안녕하세요 회원님들운영진입니다.
					</td>
					<td class="memo_date">
						09-18 07:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="774">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들운영진입니다.
						</p>
						<p>
							‼️미니게임 구글 바카라 점검 안내 ‼️
						</p>
						<p>
							현재 게임사 서버문제로 인해 업데이트 및 결과누락건이 다수 발견이되어 추 후 재공지 예정에 있습니다.
						</p>
						<p>
							해당 부분 게임사를 통해 확인중에 있습니다 .
						</p>
						<p>
							정상화시 재 안내 드리도록 하겠습니다
						</p>
						<p>
							&nbsp;이용에 불편을끼쳐드려 죄송합니다.^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23143829">
					</td>
					<td class="memo_no">
						773
					</td>
					<td class="open_memo memo_content" data-idx="23143829" data-i="773">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-17 11:33
					</td>
				</tr>
				<tr class="dspn ans" data-i="773">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							&nbsp;추석 이벤트 진행 안내
						</p>
						<p>
							&lt;추석기념 무제한 콤프 상향 이벤트&gt;
						</p>
						<p>
							9/17일 &nbsp;파격적인 콤프 상향 이벤트&nbsp;
						</p>
						<p>
							1,2레벨 스포츠 2 미니게임 0.8 카지노 0.8 슬롯 1
						</p>
						<p>
							3,4레벨 스포츠 2.2 미니게임 0.9 카지노 0.9 슬롯 1.1
						</p>
						<p>
							VIP레벨 스포츠 2.5 미니게임 1.1 카지노 1.1 슬롯 1.3
						</p>
						<p>
							-9/17 00시부터 24시간 진행됩니다.
						</p>
						<p>
							-모든 베팅 시 자동으로 콤프가 적립됩니다.
						</p>
						<p>
							주의사항&nbsp;
						</p>
						<p>
							콤프 단독사용 시 최대 출금 5배인 점 참고바랍니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23108500">
					</td>
					<td class="memo_no">
						772
					</td>
					<td class="open_memo memo_content" data-idx="23108500" data-i="772">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-17 00:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="772">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스&nbsp;운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던 미니게임 가상축구 게임은&nbsp;긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!<br>
							 평생 주소 : 보스사이트<strong>.com</strong><br>
							 24시 텔레그램: @boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23074070">
					</td>
					<td class="memo_no">
						771
					</td>
					<td class="open_memo memo_content" data-idx="23074070" data-i="771">
						 ##추석 이벤트 진행 안내##
					</td>
					<td class="memo_date">
						09-16 23:55
					</td>
				</tr>
				<tr class="dspn ans" data-i="771">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##추석 이벤트 진행 안내##
						</p>
						<p>
							&lt;추석기념 무제한 콤프 상향 이벤트&gt;
						</p>
						<p>
							9/16일 &nbsp;파격적인 콤프 상향 이벤트&nbsp;
						</p>
						<p>
							1,2레벨 스포츠 2 미니게임 0.8 카지노 0.8 슬롯 1
						</p>
						<p>
							3,4레벨 스포츠 2.2 미니게임 0.9 카지노 0.9 슬롯 1.1
						</p>
						<p>
							VIP레벨 스포츠 2.5 미니게임 1.1 카지노 1.1 슬롯 1.3
						</p>
						<p>
							9/16 00시부터 24시간 진행됩니다.
						</p>
						<p>
							-모든 베팅 시 자동으로 콤프가 적립됩니다.
						</p>
						<p>
							##주의사항##
						</p>
						<p>
							콤프 단독사용 시 최대 출금 5배인 점 참고바랍니다.
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 오늘도 저희 보스를 이용해주셔서 감사합니다
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는라이브챗 으로 문의 주세요
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23039582">
					</td>
					<td class="memo_no">
						770
					</td>
					<td class="open_memo memo_content" data-idx="23039582" data-i="770">
						 에볼루션 테이블 이슈 안내
					</td>
					<td class="memo_date">
						09-16 16:39
					</td>
				</tr>
				<tr class="dspn ans" data-i="770">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							에볼루션 테이블 이슈 안내
						</p>
						<p>
							현재 에볼루션 테이블들 실제 화재로 인해 딜러들이 대피했다고 하오니 참고 부탁드리며,&nbsp;<br>
							 진행중이던 라운드들의 처리는 어떻게 되는지 확인 요청해두었습니다.&nbsp;<br>
							 게임사 측 답변 오는대로 추가 회신드리도록 하겠습니다.
						</p>
						<p>
							이용에 불편을 드려 죄송합니다 ^^
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요➕
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="23011589">
					</td>
					<td class="memo_no">
						769
					</td>
					<td class="open_memo memo_content" data-idx="23011589" data-i="769">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						09-16 05:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="769">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22985255">
					</td>
					<td class="memo_no">
						768
					</td>
					<td class="open_memo memo_content" data-idx="22985255" data-i="768">
						 ★ 088-541-3359/농협/최동현장 해당 계좌
					</td>
					<td class="memo_date">
						09-16 04:33
					</td>
				</tr>
				<tr class="dspn ans" data-i="768">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 088-541-3359/농협/최동현장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22952410">
					</td>
					<td class="memo_no">
						767
					</td>
					<td class="open_memo memo_content" data-idx="22952410" data-i="767">
						 ★ **/***장 해당 계좌 입금 불가(정지)�
					</td>
					<td class="memo_date">
						09-16 04:32
					</td>
				</tr>
				<tr class="dspn ans" data-i="767">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ **/***장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22917128">
					</td>
					<td class="memo_no">
						766
					</td>
					<td class="open_memo memo_content" data-idx="22917128" data-i="766">
						 ## 16일 추석 감사 이벤트 진행 안내 ##
					</td>
					<td class="memo_date">
						09-16 00:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="766">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 16일 추석 감사 이벤트 진행 안내 ##
						</p>
						<p>
							이용해주시는 회원님들을 위해 감사의 의미로 추석 기간동안 진행할 이벤트가 업데이트 되었습니다.&nbsp;
						</p>
						<p>
							EVENT 1 &lt;추석 감사 리뷰 이벤트&gt;<br>
							 &nbsp; &nbsp;&nbsp;<br>
							 ㅡ 9월16일 당일 토토사이트 커뮤니티 및 카지노, 슬롯 사이트 커뮤니티 사이트 이용내역과 &lt;정성스러운 리뷰 작성시&gt; 지급되는 포인트
						</p>
						<p>
							ㅡ문의주신 시간을 기점으로 마지막 충전금액으로 참여 가능합니다.<br>
							 &nbsp;<br>
							 ex) 마지막 충전금액 15만원 참여불가&nbsp;
						</p>
						<p>
							ex) 마지막 충전금액 20만원 참여가능
						</p>
						<p>
							ㅡ20만원 이상 충전내역 확인 시 2만포지급
						</p>
						<p>
							ㅡ50만원 이상 충전내역 확인 시 5만포인트지급
						</p>
						<p>
							ㅡ100만원 이상 충전내역 확인 시 10만포인트지급
						</p>
						<p>
							ㅡ200만원 이상 충전내역 확인 시 20만포인트지급
						</p>
						<p>
							ㅡ500만원 이상 충전내역 확인 시 50만포인트지급
						</p>
						<p>
							@주의사항
						</p>
						<p>
							ㅡ-해당 이벤트 9월16일 1회만 참여 가능합니다.
						</p>
						<p>
							ㅡ-리뷰 작성글과 함께 문의 주셔야 지급 가능합니다.
						</p>
						<p>
							ㅡ -해당 포인트는 스포츠 100% 미니게임 300% 카지노 500% 롤링이 요구됩니다.<br>
							 단독 사용 시 최대 10배까지 출금 가능합니다.
						</p>
						<p>
							ㅡ리뷰 작성 및 보유금액 소진 이후 고객센터로 문의 시 지급 가능 합니다.
						</p>
						<p>
							ㅡ-입금액과는 같이 사용 불가하며 사용 시 해당 포인트로 악용하신 금액은 회수처리 됩니다(해당 포인트 단독사용만가능)
						</p>
						<p>
							ㅡ-9월 누적이용 100만원 이상부터 참여 가능합니다.
						</p>
						<p>
							ㅡ-리뷰작성은 필수적으로 3줄이상 작성해주셔야 합니다.<br>
							 (본사 판단하에 지급이 불가할수있습니다.)
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 오늘도 저희 보스를 이용해주셔서 감사합니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는라이브챗 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22882738">
					</td>
					<td class="memo_no">
						765
					</td>
					<td class="open_memo memo_content" data-idx="22882738" data-i="765">
						 ●구글게임 정상화 안내 ●
					</td>
					<td class="memo_date">
						09-15 20:50
					</td>
				</tr>
				<tr class="dspn ans" data-i="765">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							●구글게임 정상화 안내 ●
						</p>
						<p>
							현재 구글게임 긴급점검이 종료되었습니다. 현시간 부터 정상 이용가능합니다 ^^
						</p>
						<p>
							이용에 불편을 드려 죄송합니다 ^^
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							@평생도메인 : 보스사이트.com<br>
							 @텔레그램 고객센터: @Boss365cs<br>
							 @카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22848351">
					</td>
					<td class="memo_no">
						764
					</td>
					<td class="open_memo memo_content" data-idx="22848351" data-i="764">
						 @구글게임 긴급점검 안내@
					</td>
					<td class="memo_date">
						09-15 19:39
					</td>
				</tr>
				<tr class="dspn ans" data-i="764">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							@구글게임 긴급점검 안내@
						</p>
						<p>
							&nbsp;이용에 불편을 드려 대단히 죄송합니다<br>
							 정상화 될 시 재공지 해드리겠습니다
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22813938">
					</td>
					<td class="memo_no">
						763
					</td>
					<td class="open_memo memo_content" data-idx="22813938" data-i="763">
						 ## 16일 추석 감사 이벤트 진행 안내 ##
					</td>
					<td class="memo_date">
						09-15 13:28
					</td>
				</tr>
				<tr class="dspn ans" data-i="763">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 16일 추석 감사 이벤트 진행 안내 ##
						</p>
						<p>
							♥이용해주시는 회원님들을 위해 감사의 의미로 추석 기간동안 진행할 이벤트가 업데이트 되었습니다.&nbsp;♥
						</p>
						<p>
							♥EVENT 1 &lt;추석 감사 리뷰 이벤트&gt;♥<br>
							 &nbsp; &nbsp;&nbsp;<br>
							 ㅡ 9월16일 당일 토토사이트 커뮤니티 및 카지노, 슬롯 사이트 커뮤니티 사이트 이용내역과 &lt;정성스러운 리뷰 작성시&gt; 지급되는 포인트
						</p>
						<p>
							ㅡ문의주신 시간을 기점으로 마지막 충전금액으로 참여 가능합니다.<br>
							 &nbsp;<br>
							 ex) 마지막 충전금액 15만원 참여불가&nbsp;
						</p>
						<p>
							ex) 마지막 충전금액 20만원 참여가능
						</p>
						<p>
							ㅡ20만원 이상 충전내역 확인 시 2만포지급
						</p>
						<p>
							ㅡ50만원 이상 충전내역 확인 시 5만포인트지급
						</p>
						<p>
							ㅡ100만원 이상 충전내역 확인 시 10만포인트지급
						</p>
						<p>
							ㅡ200만원 이상 충전내역 확인 시 20만포인트지급
						</p>
						<p>
							ㅡ500만원 이상 충전내역 확인 시 50만포인트지급
						</p>
						<p>
							@주의사항
						</p>
						<p>
							ㅡ-해당 이벤트 9월16일 1회만 참여 가능합니다.
						</p>
						<p>
							ㅡ-리뷰 작성글과 함께 문의 주셔야 지급 가능합니다.
						</p>
						<p>
							ㅡ -해당 포인트는 스포츠 100% 미니게임 300% 카지노 500% 롤링이 요구됩니다.<br>
							 단독 사용 시 최대 10배까지 출금 가능합니다.
						</p>
						<p>
							ㅡ리뷰 작성 및 보유금액 소진 이후 고객센터로 문의 시 지급 가능 합니다.
						</p>
						<p>
							ㅡ-입금액과는 같이 사용 불가하며 사용 시 해당 포인트로 악용하신 금액은 회수처리 됩니다(해당 포인트 단독사용만가능)
						</p>
						<p>
							ㅡ-9월 누적이용 100만원 이상부터 참여 가능합니다.
						</p>
						<p>
							ㅡ-리뷰작성은 필수적으로 3줄이상 작성해주셔야 합니다.<br>
							 (본사 판단하에 지급이 불가할수있습니다.)
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 오늘도 저희 보스를 이용해주셔서 감사합니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는라이브챗 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22779578">
					</td>
					<td class="memo_no">
						762
					</td>
					<td class="open_memo memo_content" data-idx="22779578" data-i="762">
						 안녕하세요 보스 운영진입니다!
					</td>
					<td class="memo_date">
						09-15 00:52
					</td>
				</tr>
				<tr class="dspn ans" data-i="762">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 보스 운영진입니다!
						</p>
						<p>
							&nbsp; 가상축구 결과처리 지연 안내&nbsp;
						</p>
						<p>
							현재 가상축구 결과처리가 지연될 수 있는 점 이용에 참고해주시길 바랍니다.
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22744371">
					</td>
					<td class="memo_no">
						761
					</td>
					<td class="open_memo memo_content" data-idx="22744371" data-i="761">
						 안녕하세요 보스 운영진입니다!
					</td>
					<td class="memo_date">
						09-15 00:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="761">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 보스 운영진입니다!
						</p>
						<p>
							익일 국민 은행 00:00~07:00 점검 예정에 있습니다.
						</p>
						<p>
							&nbsp;국민은행 사용 중이신 회원분들께서는 점검 전 계좌변경 후 원할한 이용 해주시길 바랍니다
						</p>
						<p>
							계좌변경을 원하시는 회원분들께서는 사이트 내 고객센터로 문의 해주시길 바랍니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 및 &nbsp;카카오톡으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22716478">
					</td>
					<td class="memo_no">
						760
					</td>
					<td class="open_memo memo_content" data-idx="22716478" data-i="760">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						09-13 21:36
					</td>
				</tr>
				<tr class="dspn ans" data-i="760">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22689044">
					</td>
					<td class="memo_no">
						759
					</td>
					<td class="open_memo memo_content" data-idx="22689044" data-i="759">
						 계좌발급 안내
					</td>
					<td class="memo_date">
						09-13 18:21
					</td>
				</tr>
				<tr class="dspn ans" data-i="759">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">계좌발급 안내</span>
						</p>
						<p>
							현재 계좌가 발급이 안되는 회원님들꼐서는 자사에서 빠르게 조치를 취하고 있는중이니 넓은 양해 부탁드립니다.
						</p>
						<p>
							최대한 빠르게 처리하여 재 공지 해드릴 예정이니 이용에 참고해주시면 감사드리겠습니다.
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22656505">
					</td>
					<td class="memo_no">
						758
					</td>
					<td class="open_memo memo_content" data-idx="22656505" data-i="758">
						 ## 추석 감사 이벤트 진행 안내 !!##
					</td>
					<td class="memo_date">
						09-13 16:19
					</td>
				</tr>
				<tr class="dspn ans" data-i="758">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<br>
							 ## 추석 감사 이벤트 진행 안내 !!##<br>
							<br>
							<br>
							 안녕하세요 보스&nbsp;운영진입니다<br>
							 이용해주시는 회원님들을 위해 감사의 의미로 추석 기간동안 진행할 이벤트가 업데이트 되었습니다.&nbsp;
						</p>
						<p>
							<br>
							 &nbsp;1» 추석 감사 리뷰이벤트 (16일예정)
						</p>
						<p>
							2» 추석 떡값 이벤트 (16~18일 기간한정)
						</p>
						<p>
							3 » 파격적인 콤프 돌발 이벤트 (17일예정)
						</p>
						<p>
							자세한 사항은 이벤트란 참고 주의사항 필독 !!&nbsp;
						</p>
						<p>
							&nbsp;리뷰 이벤트는 입금액과 사용 불가 하며&nbsp;<br>
							 포인트 단독사용만 가능합니다.&nbsp;
						</p>
						<p>
							&nbsp;떡값이벤트 즉시 출금 가능포인트 지급 !!&nbsp;
						</p>
						<p>
							파격적인 콤프 돌발 이벤트 진행예정 !!<br>
							 (채널방 및 쪽지 안내 예정입니다.)
						</p>
						<p>
							지급받은 포인트 롤링 기준은 주의사항에 기재 되어있으니 참고 해주시길 바라며 많은 혜택을 받아보시길 바랍니다^^
						</p>
						<p>
							<br>
							 많은 참여와 &nbsp;이용 부탁 드리며, 오늘도 저희 히어로를 이용해주셔서 감사합니다
						</p>
						<p>
							<br>
							 많은 참여와 &nbsp;이용 부탁 드리며, 오늘도 저희 보스를 이용해주셔서 감사합니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는라이브챗 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
						<p>
							&nbsp;
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22622272">
					</td>
					<td class="memo_no">
						757
					</td>
					<td class="open_memo memo_content" data-idx="22622272" data-i="757">
						 현재 에볼루션 로비 딜레이 오류 관련
					</td>
					<td class="memo_date">
						09-13 09:10
					</td>
				</tr>
				<tr class="dspn ans" data-i="757">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							현재 에볼루션 로비 딜레이 오류 관련하여<br>
							 모바일은 정상적으로 접속 가능하오나<br>
							 PC버전에서 일부 오류가 발생되고 있습니다.
						</p>
						<p>
							게임사 측 조사 중에 있으며 정상화시 공지드리도록 하겠습니다.
						</p>
						<p>
							이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22588055">
					</td>
					<td class="memo_no">
						756
					</td>
					<td class="open_memo memo_content" data-idx="22588055" data-i="756">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						09-13 07:31
					</td>
				</tr>
				<tr class="dspn ans" data-i="756">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22553839">
					</td>
					<td class="memo_no">
						755
					</td>
					<td class="open_memo memo_content" data-idx="22553839" data-i="755">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-13 05:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="755">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							에볼루션 로비 딜레이 오류 안내
						</p>
						<p>
							현재 에볼루션 접속시 로비 무한 딜레이 현상이 간헐적으로 발생하고 있습니다.
						</p>
						<p>
							해당 부분 게임사에서 조치 중이오니 이용에 참고부탁드립니다.
						</p>
						<p>
							정상화 시 공지드리도록 하겠습니다.
						</p>
						<p>
							➕이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는라이브챗 으로 문의 주세요➕
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22518727">
					</td>
					<td class="memo_no">
						754
					</td>
					<td class="open_memo memo_content" data-idx="22518727" data-i="754">
						 추석 감사 이벤트 진행 안내 !!
					</td>
					<td class="memo_date">
						09-12 17:38
					</td>
				</tr>
				<tr class="dspn ans" data-i="754">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							추석 감사 이벤트 진행 안내 !!
						</p>
						<p>
							<br>
							 안녕하세요 보스 운영진입니다.
						</p>
						<p>
							<br>
							 이용해주시는 회원님들을 위해 감사의 의미로 추석 기간동안 진행할 이벤트가 업데이트 되었습니다.&nbsp;
						</p>
						<p>
							&nbsp;» 추석 감사 리뷰이벤트 (16일예정)
						</p>
						<p>
							&nbsp;» 추석 떡값 이벤트 (16~18일 기간한정)
						</p>
						<p>
							&nbsp;» 파격적인 콤프 돌발 이벤트&nbsp;
						</p>
						<p>
							<br>
							 자세한 사항은 이벤트란 참고 주의사항 필독 !!&nbsp;
						</p>
						<p>
							&nbsp;리뷰 이벤트는 입금액과 사용 불가 하며&nbsp;<br>
							 포인트 단독사용만 가능합니다.&nbsp;
						</p>
						<p>
							&nbsp;떡값이벤트 즉시 출금 가능포인트 지급 !!&nbsp;
						</p>
						<p>
							파격적인 콤프 돌발 이벤트 진행예정 !!<br>
							 (채널방 및 쪽지 안내 예정입니다.)
						</p>
						<p>
							&nbsp;지급받은 포인트 롤링 기준은 주의사항에 기재 되어있으니 참고 해주시길 바라며 많은 혜택을 받아보시길 바랍니다^^
						</p>
						<p>
							<br>
							 많은 참여와 &nbsp;이용 부탁 드리며, 오늘도 저희 보스를 이용해주셔서 감사합니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는라이브챗 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22484537">
					</td>
					<td class="memo_no">
						753
					</td>
					<td class="open_memo memo_content" data-idx="22484537" data-i="753">
						 &nbsp;추석 감사 이벤트 진행 안내 !!
					</td>
					<td class="memo_date">
						09-12 17:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="753">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp;추석 감사 이벤트 진행 안내 !!
						</p>
						<p>
							<br>
							 안녕하세요 보스 운영진입니다.
						</p>
						<p>
							<br>
							 이용해주시는 회원님들을 위해 감사의 의미로 추석 기간동안 진행할 이벤트가 업데이트 되었습니다.&nbsp;
						</p>
						<p>
							&nbsp;» 추석 감사 리뷰이벤트 (16일예정)
						</p>
						<p>
							&nbsp;» 추석 떡값 이벤트 (16~18일 기간한정)
						</p>
						<p>
							&nbsp;» 파격적인 콤프 돌발 이벤트&nbsp;
						</p>
						<p>
							<br>
							 자세한 사항은 이벤트란 참고 주의사항 필독 !!&nbsp;
						</p>
						<p>
							&nbsp;리뷰 이벤트는 입금액과 사용 불가 하며&nbsp;<br>
							 포인트 단독사용만 가능합니다.&nbsp;
						</p>
						<p>
							&nbsp;떡값이벤트 즉시 출금 가능포인트 지급 !!&nbsp;
						</p>
						<p>
							파격적인 콤프 돌발 이벤트 진행예정 !!<br>
							 (채널방 및 쪽지 안내 예정입니다.)
						</p>
						<p>
							&nbsp;지급받은 포인트 롤링 기준은 주의사항에 기재 되어있으니 참고 해주시길 바라며 많은 혜택을 받아보시길 바랍니다^^
						</p>
						<p>
							<br>
							 많은 참여와 &nbsp;이용 부탁 드리며, 오늘도 저희 히어로를 이용해주셔서 감사합니다
						</p>
						<p>
							<br>
							 많은 참여와 &nbsp;이용 부탁 드리며, 오늘도 저희 보스를 이용해주셔서 감사합니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는라이브챗 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22456269">
					</td>
					<td class="memo_no">
						752
					</td>
					<td class="open_memo memo_content" data-idx="22456269" data-i="752">
						 ★ 농협/심서경장 해당 계좌 정상화 �
					</td>
					<td class="memo_date">
						09-12 14:41
					</td>
				</tr>
				<tr class="dspn ans" data-i="752">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/심서경장 해당 계좌 정상화 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장 입금이 가능하도록 정상화 도와드렸습니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22429776">
					</td>
					<td class="memo_no">
						751
					</td>
					<td class="open_memo memo_content" data-idx="22429776" data-i="751">
						 ★ 카뱅/심서경 장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						09-12 13:14
					</td>
				</tr>
				<tr class="dspn ans" data-i="751">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카뱅/심서경 장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22397929">
					</td>
					<td class="memo_no">
						750
					</td>
					<td class="open_memo memo_content" data-idx="22397929" data-i="750">
						 ## 행운의 룰렛 이벤트 &nbsp;OPEN‼️ ##
					</td>
					<td class="memo_date">
						09-11 23:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="750">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<strong>## 행운의 룰렛 이벤트 &nbsp;OPEN‼️ ##</strong><br>
							 &nbsp;
						</p>
						<p>
							<br>
							<strong>☆게임이 안되실때 회원님들의 &nbsp;소소한 재미와 케어를 위해 본사에서 행운의 룰렛이벤트를 도입하였습니다!☆</strong>
						</p>
						<p>
							<br>
							<strong>@ 모바일 : 사이트 우측 상단에 사람모양 CLICK 후 하단에 &lt;룰렛&gt; CLICK 후 참여가 가능하십니다</strong>
						</p>
						<p>
							<strong>@ PC : 사이트 우측 상단에 &lt;룰렛&gt; CLICK 후 참여 가능하십니다!</strong>
						</p>
						<p>
							<br>
							<strong># 참여 방법 #</strong>
						</p>
						<p>
							<strong>&nbsp;ㅡ쿠폰 1장당 룰렛 1회 참여 가능하십니다 !</strong>
						</p>
						<p>
							<strong>&nbsp;ㅡ프리미엄룰렛은 프리미엄쿠폰으로 참여가 가능하십니다 !&nbsp;</strong>
						</p>
						<p>
							<strong>&nbsp;ㅡ쿠폰머니는 모든게임의 유형 롤링 100% 이상 / 최대출금 5배 입니다 !</strong>
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							<strong>많은 참여와 &nbsp;이용 부탁 드리며, 오늘도 저희 보스를 이용해주셔서 감사합니다.</strong>
						</p>
						<p>
							<strong>이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는라이브챗 으로 문의 주세요</strong>
						</p>
						<p>
							<strong>평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs</strong>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22363700">
					</td>
					<td class="memo_no">
						749
					</td>
					<td class="open_memo memo_content" data-idx="22363700" data-i="749">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-10 23:13
					</td>
				</tr>
				<tr class="dspn ans" data-i="749">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							게임사의 긴급점검으로 아래 게임사의 모든 게임<br>
							 이용이 불가한 것이 확인되었습니다.
						</p>
						<p>
							부운고 (BOONGO)&nbsp;<br>
							 플레이슨 (PLAYASON)
						</p>
						<p>
							게임사의 점검이 완료되어 정상화되는대로 관련 추가 공지 안내&nbsp;<br>
							 드릴 수 있도록하겠습니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22329514">
					</td>
					<td class="memo_no">
						748
					</td>
					<td class="open_memo memo_content" data-idx="22329514" data-i="748">
						 ##[레볼루션 점검완료]## 안녕하세요
					</td>
					<td class="memo_date">
						09-10 12:11
					</td>
				</tr>
				<tr class="dspn ans" data-i="748">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##[레볼루션 점검완료]##<br>
							<br>
							 안녕하세요 BOSS&nbsp;운영진입니다
						</p>
						<p>
							안녕하세요 레볼루션 고객센터입니다.<br>
							 금일 12시에 진행된 업데이트가 모두 정상적으로 완료되어<br>
							 현시간 부로 정상 이용 가능합니다.
						</p>
						<p>
							<br>
							 오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							<br>
							 평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22295417">
					</td>
					<td class="memo_no">
						747
					</td>
					<td class="open_memo memo_content" data-idx="22295417" data-i="747">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-10 00:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="747">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							전 레벨 카지노 배팅상한금 및 당첨상한금 변경 안내
						</p>
						<p>
							기존 배팅상한금 1천만원 -&gt; 2500만원 상향<br>
							 기존 당첨상한금 3천만원 -&gt; 5000만원 상향
						</p>
						<p>
							레벨별 배팅 상한금 초과의 배팅금에 대해서는 본사에서는 인정해드리지 않으니 반드시 숙지해주시고 이용 시 필히 주의 부탁드립니다.
						</p>
						<p>
							<br>
							 이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 및 &nbsp;카카오톡으로 문의 주세요.
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22266070">
					</td>
					<td class="memo_no">
						746
					</td>
					<td class="open_memo memo_content" data-idx="22266070" data-i="746">
						 ★ 농협/심서경장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						09-09 14:09
					</td>
				</tr>
				<tr class="dspn ans" data-i="746">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/심서경장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22239794">
					</td>
					<td class="memo_no">
						745
					</td>
					<td class="open_memo memo_content" data-idx="22239794" data-i="745">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						09-08 16:08
					</td>
				</tr>
				<tr class="dspn ans" data-i="745">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22213752">
					</td>
					<td class="memo_no">
						744
					</td>
					<td class="open_memo memo_content" data-idx="22213752" data-i="744">
						 ★ **/***장 해당 계좌 입금 불가(정지)�
					</td>
					<td class="memo_date">
						09-08 15:45
					</td>
				</tr>
				<tr class="dspn ans" data-i="744">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ **/***장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 기업/권현우장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22181239">
					</td>
					<td class="memo_no">
						743
					</td>
					<td class="open_memo memo_content" data-idx="22181239" data-i="743">
						 ## 스포츠/미니게임/카지노 "무한 돌발
					</td>
					<td class="memo_date">
						09-08 11:52
					</td>
				</tr>
				<tr class="dspn ans" data-i="743">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 스포츠/미니게임/카지노 "무한 돌발 "이벤트 안내 ##
						</p>
						<p>
							@12:00 시 ~ 15:00 시까지 돌발 진행할 예정입니다.&nbsp;
						</p>
						<p>
							&nbsp; &nbsp;&nbsp;<br>
							 ㅡ스포츠 3폴더 충전시 20% 자동 지급
						</p>
						<p>
							ㅡ스포츠2폴더/미니게임 충전시 10% 자동 지급
						</p>
						<p>
							ㅡ카지노 충전 시 5% 자동지급
						</p>
						<p>
							<br>
							 ㅡ모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							ㅡ환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							ㅡ환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다^^
						</p>
						<p>
							ㅡ다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가합니다^^
						</p>
						<p>
							<br>
							 @스포츠 롤링 100%<br>
							 @미니게임 롤링 400%<br>
							 @카지노 롤링 500%
						</p>
						<p>
							!!지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다.!!
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22147212">
					</td>
					<td class="memo_no">
						742
					</td>
					<td class="open_memo memo_content" data-idx="22147212" data-i="742">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-08 10:22
					</td>
				</tr>
				<tr class="dspn ans" data-i="742">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							현재 토스앱 입금이 불가한 현상이 있어, 입금이 안 될 경우 본인명의 타은행으로 입출금계좌 변경 요청 후 이용해주시면 감사하겠습니다!
						</p>
						<p>
							이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.^^<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.^^
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22113189">
					</td>
					<td class="memo_no">
						741
					</td>
					<td class="open_memo memo_content" data-idx="22113189" data-i="741">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-08 08:48
					</td>
				</tr>
				<tr class="dspn ans" data-i="741">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스&nbsp;운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던&nbsp; Astar 게임은&nbsp;긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!<br>
							 평생 주소 : 보스사이트<strong>.com</strong><br>
							 24시 텔레그램: @boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22079164">
					</td>
					<td class="memo_no">
						740
					</td>
					<td class="open_memo memo_content" data-idx="22079164" data-i="740">
						 ★ **/***장 해당 계좌 입금 불가(정지)�
					</td>
					<td class="memo_date">
						09-08 02:09
					</td>
				</tr>
				<tr class="dspn ans" data-i="740">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ **/***장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22045138">
					</td>
					<td class="memo_no">
						739
					</td>
					<td class="open_memo memo_content" data-idx="22045138" data-i="739">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-08 01:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="739">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							현재 미니게임유형 가상축구유형은 지연 현상이 있을수도 있습니다.지연 현상은 빠른 정상화예정에있습니다
						</p>
						<p>
							이용에 불편을드려 죄송합니다
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="22011111">
					</td>
					<td class="memo_no">
						738
					</td>
					<td class="open_memo memo_content" data-idx="22011111" data-i="738">
						 ## 에볼루션 테이블 점검 일정 안내 ##
					</td>
					<td class="memo_date">
						09-07 18:27
					</td>
				</tr>
				<tr class="dspn ans" data-i="738">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 에볼루션 테이블 점검 일정 안내 ##
						</p>
						<p>
							2024-09-10 18:00:00 GMT+9 ~ 2024-09-10 20:00:00 GMT+9&nbsp;<br>
							 예외적인 유지보수가 진행될 예정이며,&nbsp;<br>
							 이 시간 동안 다음 테이블들이 이용 불가합니다
						</p>
						<p>
							@테이블 대상
						</p>
						<p>
							Emperor Speed Baccarat C<br>
							 Korean Speed Baccarat A<br>
							 Emperor Dragon Tiger<br>
							 Emperor Roulette<br>
							 Emperor Speed Baccarat B<br>
							 Emperor Sic Bo<br>
							 Lotus Roulette<br>
							 Emperor Speed Baccarat A<br>
							 Lotus Speed Baccarat A<br>
							 Bonsai Speed Baccarat C<br>
							 Bonsai Speed Baccarat B<br>
							 Emperor Speed Baccarat D<br>
							 Emperor Sic Bo A<br>
							 Grand Japanese Speed Blackjack<br>
							 Imperial Quest<br>
							 Japanese Speed Baccarat B<br>
							 Japanese Speed Baccarat C<br>
							 Korean Speed Baccarat D<br>
							 Korean Speed Baccarat E<br>
							 Evo Powerball<br>
							 Emperor Bac Bo<br>
							 Japanese Speed Blackjack F<br>
							 Grand Korean Speed Blackjack<br>
							 Korean Speed Blackjack A<br>
							 Japanese Salon Prive Baccarat
						</p>
						<p>
							* 해당 게임 테이블 점검 시간 내에 &nbsp;이용불가 합니다 .<br>
							 * 한국시간(GMT+9), 24시간제 적용<br>
							 * 추가 점검 공지가 없는 경우, 해당 시간에 점검 완료
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21976979">
					</td>
					<td class="memo_no">
						737
					</td>
					<td class="open_memo memo_content" data-idx="21976979" data-i="737">
						 안녕하세요 보스 운영진입니다
					</td>
					<td class="memo_date">
						09-06 00:52
					</td>
				</tr>
				<tr class="dspn ans" data-i="737">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 보스 운영진입니다
						</p>
						<p>
							프라그마틱 전체 이슈 안내&nbsp;
						</p>
						<p>
							프라그마틱측에서 전체이슈가 발생하고있습니다.
						</p>
						<p>
							접속이 안되는 현상이 발생하고있으며&nbsp;
						</p>
						<p>
							현재 게임사측과 대화하여 원인 파악중에있습니다.
						</p>
						<p>
							파악되는 내용 및 정상화시 공지해드리겠습니다
						</p>
						<p>
							&nbsp;이용에 불편을 드려 대단히 죄송합니다<br>
							 정상화 될 시 재공지 해드리겠습니다
						</p>
						<p>
							<br>
							 &nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21943024">
					</td>
					<td class="memo_no">
						736
					</td>
					<td class="open_memo memo_content" data-idx="21943024" data-i="736">
						 ##미니게임/카지노 "무한 돌발 "이벤트
					</td>
					<td class="memo_date">
						09-05 18:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="736">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##미니게임/카지노 "무한 돌발 "이벤트 안내##
						</p>
						<p>
							@19:00시 ~ 22:00시까지&nbsp;<br>
							 스포츠2폴더 및 미니게임 / 카지노 "무한돌발"이벤트 진행합니다.
						</p>
						<p>
							ㅡ스포츠/미니게임 충전 시 10% 자동지급
						</p>
						<p>
							ㅡ카지노 충전 시 5% 자동지급
						</p>
						<p>
							ㅡ모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							ㅡ환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							ㅡ환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다^^
						</p>
						<p>
							ㅡ다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가합니다^^
						</p>
						<p>
							$스포츠 100%<br>
							 $미니게임 롤링 400%<br>
							 $카지노 롤링 500%
						</p>
						<p>
							!!지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다.!!
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21909049">
					</td>
					<td class="memo_no">
						735
					</td>
					<td class="open_memo memo_content" data-idx="21909049" data-i="735">
						 안녕하세요 보스 운영진입니다!
					</td>
					<td class="memo_date">
						09-04 21:58
					</td>
				</tr>
				<tr class="dspn ans" data-i="735">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 보스 운영진입니다!
						</p>
						<p>
							&nbsp; &nbsp; 긴급점검 공지 안내&nbsp;&nbsp;
						</p>
						<p>
							게임사의 긴급점검으로 아래 게임사의 모든 게임<br>
							 이용이 불가한 것이 확인되었습니다.
						</p>
						<p>
							부운고 (BOONGO)&nbsp;<br>
							 플레이슨 (PLAYASON)
						</p>
						<p>
							게임사의 점검이 완료되어 정상화되는대로 관련 추가 공지 안내&nbsp;<br>
							 드릴 수 있도록하겠습니다.
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21875141">
					</td>
					<td class="memo_no">
						734
					</td>
					<td class="open_memo memo_content" data-idx="21875141" data-i="734">
						 &nbsp;[ 현지 인터넷 불안정으로 인한 �
					</td>
					<td class="memo_date">
						09-04 17:32
					</td>
				</tr>
				<tr class="dspn ans" data-i="734">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp;[ 현지 인터넷 불안정으로 인한 지연 ]
						</p>
						<p>
							&nbsp;현재 현지 인터넷 불안정으로 인해 충전/환전 및 상담이 지연되는점 양해 부탁드립니다.&nbsp;
						</p>
						<p>
							정상화시 자동복구 될 예정이며
						</p>
						<p>
							정상화시 안내메세지 발송 할 예정이오니 참고해주시면 감사하겠습니다
						</p>
						<p>
							이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							&nbsp;
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21841219">
					</td>
					<td class="memo_no">
						733
					</td>
					<td class="open_memo memo_content" data-idx="21841219" data-i="733">
						 «카지노/슬롯&nbsp;정기점검 종료 안내
					</td>
					<td class="memo_date">
						09-04 11:38
					</td>
				</tr>
				<tr class="dspn ans" data-i="733">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							«카지노/슬롯&nbsp;정기점검 종료 안내»
						</p>
						<p>
							금일 연장되었던 점검이 약간 일찍 종료되어, 공지드립니다.
						</p>
						<p>
							현시간부로 정상적으로 이용 가능하며, 운영에 불편을드린점 다시 한 번 죄송하단 말씀 드립니다.
						</p>
						<p>
							기다려주셔서 감사합니다.
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21807345">
					</td>
					<td class="memo_no">
						732
					</td>
					<td class="open_memo memo_content" data-idx="21807345" data-i="732">
						 안녕하세요 회원님들 보스 운영진입�
					</td>
					<td class="memo_date">
						09-04 09:14
					</td>
				</tr>
				<tr class="dspn ans" data-i="732">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들 보스 운영진입니다.
						</p>
						<p>
							<br>
							 &nbsp;(카지노&amp;슬롯) 정기점검 2시간 연장 안내&nbsp;
						</p>
						<p>
							&lt;정기점검 시간 연장안내&nbsp;
						</p>
						<p>
							금일 진행되는 점검이 2시간 연장될 예정입니다.
						</p>
						<p>
							점검일시 : 2024-09-04 (수요일) &nbsp;04 : 00 &nbsp;~ &nbsp;12&nbsp;: 00 시까지&nbsp;
						</p>
						<p>
							<br>
							 정기 점검시간에는 카지노 및 슬롯 이용이 제한되오니 양해 부탁드립니다<br>
							 스포츠 및 미니게임 이용은 가능하오니 참고 바랍니다&nbsp;
						</p>
						<p>
							모든 시간은 한국시간(GMT+9), 24시간제 기준입니다
						</p>
						<p>
							추가 점검 시간 연장 공지가 없을 경우, 별도 공지 없이 지정 시간에 맞춰 점검이 완료됨을 알려드립니다
						</p>
						<p>
							서비스 안정화를 위한 조치인 만큼 많은 이해부탁드립니다
						</p>
						<p>
							&nbsp;머니 전환이 불가하신점 참고 바랍니다. 지속적으로 머니전환할시 접속이 불가할수있는점 참고 바랍니다.
						</p>
						<p>
							&nbsp;점검이 시작하기전 머니를 전환 해주시길 바라며 점검이 시작후 머니전환은 불가하며 점검이 끝난후 머니전환이 가능 합니다&nbsp;
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21773479">
					</td>
					<td class="memo_no">
						731
					</td>
					<td class="open_memo memo_content" data-idx="21773479" data-i="731">
						 안녕하세요 회원님들 운영진입니다.
					</td>
					<td class="memo_date">
						09-04 04:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="731">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들 운영진입니다.
						</p>
						<p>
							&nbsp;(카지노&amp;슬롯) 정기점검 안내&nbsp;
						</p>
						<p>
							2024-09-04 (수요일) SWIX(카지노&amp;슬롯) 정기 점검 공지 전달드립니다
						</p>
						<p>
							점검일시 : 2024-09-04 (수요일)&nbsp;&nbsp;<br>
							 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;‼️04 : 00 &nbsp;~ &nbsp;10 : 00 시‼️
						</p>
						<p>
							정기 점검시간에는 카지노 및 슬롯 이용이 제한되오니 양해 부탁드립니다<br>
							 스포츠 및 미니게임 이용은 가능하오니 참고 바랍니다&nbsp;
						</p>
						<p>
							모든 시간은 한국시간(GMT+9), 24시간제 기준입니다
						</p>
						<p>
							추가 점검 시간 연장 공지가 없을 경우, 별도 공지 없이 지정 시간에 맞춰 점검이 완료됨을 알려드립니다
						</p>
						<p>
							서비스 안정화를 위한 조치인 만큼 많은 이해부탁드립니다
						</p>
						<p>
							&nbsp;머니 전환이 불가하신점 참고 바랍니다. 지속적으로 머니전환할시 접속이 불가할수있는점 참고 바랍니다.
						</p>
						<p>
							&nbsp;점검이 시작하기전 머니를 전환 해주시길 바라며 점검이 시작후 머니전환은 불가하며 점검이 끝난후 머니전환이 가능 합니다&nbsp;
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21739620">
					</td>
					<td class="memo_no">
						730
					</td>
					<td class="open_memo memo_content" data-idx="21739620" data-i="730">
						 안녕하세요 회원님들 운영진입니다.
					</td>
					<td class="memo_date">
						09-04 03:34
					</td>
				</tr>
				<tr class="dspn ans" data-i="730">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들 운영진입니다.
						</p>
						<p>
							&nbsp;(카지노&amp;슬롯) 정기점검 (30분전)
						</p>
						<p>
							2024-09-04 (수요일) SWIX(카지노&amp;슬롯) 정기 점검(30분전) 공지 전달드립니다
						</p>
						<p>
							점검일시 : 2024-09-04 (수요일)&nbsp;&nbsp;<br>
							 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;‼️04 : 00 &nbsp;~ &nbsp;10 : 00 시‼️
						</p>
						<p>
							정기 점검시간에는 카지노 및 슬롯 이용이 제한되오니 양해 부탁드립니다<br>
							 스포츠 및 미니게임 이용은 가능하오니 참고 바랍니다&nbsp;
						</p>
						<p>
							모든 시간은 한국시간(GMT+9), 24시간제 기준입니다
						</p>
						<p>
							추가 점검 시간 연장 공지가 없을 경우, 별도 공지 없이 지정 시간에 맞춰 점검이 완료됨을 알려드립니다
						</p>
						<p>
							서비스 안정화를 위한 조치인 만큼 많은 이해부탁드립니다
						</p>
						<p>
							&nbsp;머니 전환이 불가하신점 참고 바랍니다. 지속적으로 머니전환할시 접속이 불가할수있는점 참고 바랍니다.
						</p>
						<p>
							&nbsp;점검이 시작하기전 머니를 전환 해주시길 바라며 점검이 시작후 머니전환은 불가하며 점검이 끝난후 머니전환이 가능 합니다&nbsp;
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21705760">
					</td>
					<td class="memo_no">
						729
					</td>
					<td class="open_memo memo_content" data-idx="21705760" data-i="729">
						 안녕하세요 회원님들운영진입니다.
					</td>
					<td class="memo_date">
						09-04 02:11
					</td>
				</tr>
				<tr class="dspn ans" data-i="729">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들운영진입니다.
						</p>
						<p>
							&nbsp;(카지노&amp;슬롯) 정기점검 안내&nbsp;
						</p>
						<p>
							2024-09-04 (수요일) SWIX(카지노&amp;슬롯) 정기 점검 공지 전달드립니다
						</p>
						<p>
							점검일시 : 2024-09-04 (수요일)&nbsp;&nbsp;<br>
							 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;‼️04 : 00 &nbsp;~ &nbsp;10 : 00 시‼️
						</p>
						<p>
							정기 점검시간에는 카지노 및 슬롯 이용이 제한되오니 양해 부탁드립니다<br>
							 스포츠 및 미니게임 이용은 가능하오니 참고 바랍니다&nbsp;
						</p>
						<p>
							모든 시간은 한국시간(GMT+9), 24시간제 기준입니다
						</p>
						<p>
							추가 점검 시간 연장 공지가 없을 경우, 별도 공지 없이 지정 시간에 맞춰 점검이 완료됨을 알려드립니다
						</p>
						<p>
							서비스 안정화를 위한 조치인 만큼 많은 이해부탁드립니다
						</p>
						<p>
							&nbsp;머니 전환이 불가하신점 참고 바랍니다. 지속적으로 머니전환할시 접속이 불가할수있는점 참고 바랍니다.
						</p>
						<p>
							&nbsp;점검이 시작하기전 머니를 전환 해주시길 바라며 점검이 시작후 머니전환은 불가하며 점검이 끝난후 머니전환이 가능 합니다&nbsp;
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21671899">
					</td>
					<td class="memo_no">
						728
					</td>
					<td class="open_memo memo_content" data-idx="21671899" data-i="728">
						 안녕하세요 회원님들 운영진입니다.
					</td>
					<td class="memo_date">
						09-04 00:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="728">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들 운영진입니다.
						</p>
						<p>
							&nbsp;(카지노&amp;슬롯) 정기점검 안내&nbsp;
						</p>
						<p>
							2024-09-04 (수요일) SWIX(카지노&amp;슬롯) 정기 점검 공지 전달드립니다
						</p>
						<p>
							점검일시 : 2024-09-04 (수요일)&nbsp;&nbsp;<br>
							 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;‼️04 : 00 &nbsp;~ &nbsp;10 : 00 시‼️
						</p>
						<p>
							정기 점검시간에는 카지노 및 슬롯 이용이 제한되오니 양해 부탁드립니다<br>
							 스포츠 및 미니게임 이용은 가능하오니 참고 바랍니다&nbsp;
						</p>
						<p>
							모든 시간은 한국시간(GMT+9), 24시간제 기준입니다
						</p>
						<p>
							추가 점검 시간 연장 공지가 없을 경우, 별도 공지 없이 지정 시간에 맞춰 점검이 완료됨을 알려드립니다
						</p>
						<p>
							서비스 안정화를 위한 조치인 만큼 많은 이해부탁드립니다
						</p>
						<p>
							&nbsp;머니 전환이 불가하신점 참고 바랍니다. 지속적으로 머니전환할시 접속이 불가할수있는점 참고 바랍니다.
						</p>
						<p>
							&nbsp;점검이 시작하기전 머니를 전환 해주시길 바라며 점검이 시작후 머니전환은 불가하며 점검이 끝난후 머니전환이 가능 합니다&nbsp;
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
						<p>
							카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21638041">
					</td>
					<td class="memo_no">
						727
					</td>
					<td class="open_memo memo_content" data-idx="21638041" data-i="727">
						 ###에볼루션 게이밍 긴급점검 종료 안�
					</td>
					<td class="memo_date">
						09-03 21:25
					</td>
				</tr>
				<tr class="dspn ans" data-i="727">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							###에볼루션 게이밍 긴급점검 종료 안내###<br>
							<br>
							 안녕하세요 보스 운영진입니다!<br>
							 &nbsp;현재 에볼루션 게이밍 긴급 점검 정상화 되었습니다.&nbsp;
						</p>
						<p>
							이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21604189">
					</td>
					<td class="memo_no">
						726
					</td>
					<td class="open_memo memo_content" data-idx="21604189" data-i="726">
						 ###벳레이더 라이브 장애### 안녕하�
					</td>
					<td class="memo_date">
						09-03 19:55
					</td>
				</tr>
				<tr class="dspn ans" data-i="726">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							###벳레이더 라이브 장애###<br>
							<br>
							 안녕하세요 보스 운영진입니다!<br>
							<br>
							 &nbsp;현재 벳레이더 라이브 배당 생성 장애로 인해, 라이브 베팅등이 원활하지 않습니다.
						</p>
						<p>
							피드사측에서 복구 작업 중이라고 하니, 정상화 되는대로 말씀드리겠습니다.&nbsp;
						</p>
						<p>
							이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							평생도메인 : 보스사이트.com (https://%EB%B3%B4%EC%8A%A4%EC%82%AC%EC%9D%B4%ED%8A%B8.com)<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21570349">
					</td>
					<td class="memo_no">
						725
					</td>
					<td class="open_memo memo_content" data-idx="21570349" data-i="725">
						 ##에볼루션 게이밍 지연현상 안내##
					</td>
					<td class="memo_date">
						09-03 19:46
					</td>
				</tr>
				<tr class="dspn ans" data-i="725">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##에볼루션 게이밍 지연현상 안내##<br>
							<br>
							 안녕하세요 보스 운영진입니다!<br>
							<br>
							 &nbsp;현재 에볼루션 게이밍 로딩 지연현상 및 베팅거절로 인해 일시적 이용이 불가하신 점 이용에 양해 부탁드리겠습니다&nbsp;
						</p>
						<p>
							이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21536475">
					</td>
					<td class="memo_no">
						724
					</td>
					<td class="open_memo memo_content" data-idx="21536475" data-i="724">
						 안녕하세요 회원님들 운영진입니다.
					</td>
					<td class="memo_date">
						09-03 07:58
					</td>
				</tr>
				<tr class="dspn ans" data-i="724">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들 운영진입니다.
						</p>
						<p>
							&nbsp;(카지노&amp;슬롯) 정기점검 안내&nbsp;
						</p>
						<p>
							2024-09-04 (수요일) SWIX(카지노&amp;슬롯) 정기 점검 공지 전달드립니다
						</p>
						<p>
							점검일시 : 2024-09-04 (수요일)&nbsp;&nbsp;<br>
							 &nbsp; &nbsp; &nbsp; &nbsp; ‼️04 : 00 &nbsp;~ &nbsp;10 : 00 시‼️
						</p>
						<p>
							정기 점검시간에는 카지노 및 슬롯 이용이 제한되오니 양해 부탁드립니다<br>
							 스포츠 및 미니게임 이용은 가능하오니 참고 바랍니다&nbsp;
						</p>
						<p>
							모든 시간은 한국시간(GMT+9), 24시간제 기준입니다
						</p>
						<p>
							추가 점검 시간 연장 공지가 없을 경우, 별도 공지 없이 지정 시간에 맞춰 점검이 완료됨을 알려드립니다
						</p>
						<p>
							서비스 안정화를 위한 조치인 만큼 많은 이해부탁드립니다
						</p>
						<p>
							&nbsp;머니 전환이 불가하신점 참고 바랍니다. 지속적으로 머니전환할시 접속이 불가할수있는점 참고 바랍니다.
						</p>
						<p>
							&nbsp;점검이 시작하기전 머니를 전환 해주시길 바라며 점검이 시작후 머니전환은 불가하며 점검이 끝난후 머니전환이 가능 합니다&nbsp;
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21502655">
					</td>
					<td class="memo_no">
						723
					</td>
					<td class="open_memo memo_content" data-idx="21502655" data-i="723">
						 안녕하세요 회원님들 운영진입니다.
					</td>
					<td class="memo_date">
						09-03 00:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="723">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들 운영진입니다.
						</p>
						<p>
							&nbsp;페이백 이벤트
						</p>
						<p>
							‼️매주 화요일 마다 지난주 화요일 ~ 월요일의 입출금 차액 5% 를 지급 합니다 ‼️
						</p>
						<p>
							페이백 계산방법
						</p>
						<p>
							해당 주 총 입금액 10만원 해당 주 총 출금액 2만원 100,000 - 20,000=80,000&nbsp;
						</p>
						<p>
							페이백 지급포인트 : 80,000x5% = 4,000 원&nbsp;
						</p>
						<p>
							&nbsp;지급 &nbsp;받으신 페이백 롤링&nbsp;<br>
							 스포츠100%/스포츠 이외 다른게임 전부 300%
						</p>
						<p>
							&nbsp;페이백 버튼 클릭하시면 자동으로 지급 되시는점 참고 바랍니다
						</p>
						<p>
							&nbsp;주 2회 입금 이상자만 참여 가능 합니다
						</p>
						<p>
							지급받은 페이백 금액에 최대 10배까지 환전 가능하니 이용에 차질없게 참고해주시기 바랍니다.&nbsp;
						</p>
						<p>
							1~2레벨 - 최대지급액 100만원<br>
							 3~4레벨 - 최대지급액 150만원<br>
							 vip 1~2레벨 - 최대지급액 200만원<br>
							 vip 3레벨 - 최대지급액300만원<br>
							 ‼️레벨 등업에 따라 지급액 한도가 변경되었으니 많은 참여 바랍니다‼️
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21468850">
					</td>
					<td class="memo_no">
						722
					</td>
					<td class="open_memo memo_content" data-idx="21468850" data-i="722">
						 ★ 기업/권현우장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						09-02 23:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="722">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 기업/권현우장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21435047">
					</td>
					<td class="memo_no">
						721
					</td>
					<td class="open_memo memo_content" data-idx="21435047" data-i="721">
						 ★ 기업/권현우장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						09-02 22:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="721">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 기업/권현우장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21401238">
					</td>
					<td class="memo_no">
						720
					</td>
					<td class="open_memo memo_content" data-idx="21401238" data-i="720">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						09-02 22:23
					</td>
				</tr>
				<tr class="dspn ans" data-i="720">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							<br>
							 &nbsp;
						</p>
						<p>
							라이브챗 시스템 오류
						</p>
						<p>
							라이브챗 시스템 오류로<br>
							 상담 및 문의는 텔레그램 으로 문의 해주시길 바랍니다.
						</p>
						<p>
							이용에 불편을 드려 죄송합니다 ^^
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 및 &nbsp;카카오톡으로 문의 주세요<br>
							 &nbsp;
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21367388">
					</td>
					<td class="memo_no">
						719
					</td>
					<td class="open_memo memo_content" data-idx="21367388" data-i="719">
						 [레볼루션 안내]
					</td>
					<td class="memo_date">
						09-02 17:09
					</td>
				</tr>
				<tr class="dspn ans" data-i="719">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							[레볼루션 안내]
						</p>
						<p>
							안녕하세요 레볼루션 고객센터입니다.<br>
							 금일 토너먼트 관련 문의가 많아 안내드립니다.
						</p>
						<p>
							글로벌 업데이트로 많은 부분에 변화가 있어,<br>
							 토너먼트 세부 내용에도 조정이 필요하다고 판단했습니다.
						</p>
						<p>
							변경 내용들을 검토하고 있으며,<br>
							 조정이 끝나는대로 개최할 예정입니다.
						</p>
						<p>
							개최 일자는 미정이며, 정해지면 안내드리겠습니다.
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21333584">
					</td>
					<td class="memo_no">
						718
					</td>
					<td class="open_memo memo_content" data-idx="21333584" data-i="718">
						 &nbsp; 스포츠/미니게임/카지노 &nbsp;
					</td>
					<td class="memo_date">
						09-02 15:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="718">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp; 스포츠/미니게임/카지노 &nbsp;
						</p>
						<p>
							<br>
							 &nbsp;<br>
							 안녕하세요 회원님들보스 운영팀입니다.
						</p>
						<p>
							미니게임/카지노 "무한 돌발 "이벤트 안내
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21299750">
					</td>
					<td class="memo_no">
						717
					</td>
					<td class="open_memo memo_content" data-idx="21299750" data-i="717">
						 ## 슬롯 게임 BNG(부운고) 프로모션 공�
					</td>
					<td class="memo_date">
						09-02 11:07
					</td>
				</tr>
				<tr class="dspn ans" data-i="717">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 슬롯 게임 BNG(부운고) 프로모션 공지 안내 ##
						</p>
						<p>
							@ 베팅레이스 프로모션 @<br>
							 본 이벤트는 09월 01일 13:00 부터 09월 08일 13:00 까지 진행됩니다!!
						</p>
						<p>
							<br>
							 @ 총 상금 52,000,000원 @
						</p>
						<p>
							1등 : 10,400,000&nbsp;<br>
							 2등 : &nbsp;5,200,000&nbsp;<br>
							 3등 : &nbsp;2,600,000&nbsp;<br>
							 4-5등 : 1,300,000&nbsp;<br>
							 6-10등 : 520,000&nbsp;<br>
							 11-50등 : 260,000<br>
							 51-100등 : 130,000<br>
							 101-200등 : 65,000<br>
							 201-400등 : 26,000
						</p>
						<p>
							# 프로모션 해당 게임 :<br>
							 BNG(부운고) 의 모든 게임<br>
							 &nbsp;
						</p>
						<p>
							프로모션 규칙 :
						</p>
						<p>
							1. 최소 13 KRW 베팅으로 BNG 게임에서 최소 1라운드 플레이
						</p>
						<p>
							2. 포인트 계산 ：스핀 당 베팅금을 기준으로 계산합니다
						</p>
						<p>
							3. 베팅금 1,300 KRW＝1 포인트<br>
							 포인트 계산의 예시 :<br>
							 플레이어가 1 라운드에서13,000 KRW 베팅하면 이 라운드에서 총 10 포인트를 획득하게 됩니다.
						</p>
						<p>
							여러분의 많은 이용 부탁드립니다!
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21265953">
					</td>
					<td class="memo_no">
						716
					</td>
					<td class="open_memo memo_content" data-idx="21265953" data-i="716">
						 ## 슬롯 게임 &lt;플레이스타&gt; 프로모
					</td>
					<td class="memo_date">
						09-02 11:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="716">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 슬롯 게임 &lt;플레이스타&gt; 프로모션 공지 안내 ##
						</p>
						<p>
							@ 중추절 골드러시 프로모션 @<br>
							 본 이벤트는 09월 02일 14:00 부터 09월 30일 14:00 까지 진행됩니다!!
						</p>
						<p>
							<br>
							 @총 상금 172,000,000원@
						</p>
						<p>
							100,000원<br>
							 50,000원<br>
							 30,000원<br>
							 20,000원<br>
							 10,000원<br>
							 8,000원<br>
							 5,000원<br>
							 2,000원<br>
							 1,000원<br>
							 0원
						</p>
						<p>
							# 프로모션 해당 게임 :
						</p>
						<p>
							포 더 호드<br>
							 피라미드 오브 플레임즈<br>
							 아테나-럭키 스프레드<br>
							 슈퍼 럭키<br>
							 미스틱 레전드 2<br>
							 카이셴 대디<br>
							 카이셴-럭키 스프레드<br>
							 럭키 에이스<br>
							 슈가 붐<br>
							 트레져스 오브 아즈텍 Z<br>
							 매죵 웨이즈 3+<br>
							 매죵 웨이즈 3
						</p>
						<p>
							프로모션 규칙 :
						</p>
						<p>
							1. 200번의 게임 플레이마다 추첨이 실행됩니다.<br>
							 (13개의 게임에서의 플레이는 각각 개별적으로 계산됩니다.)
						</p>
						<p>
							2. 1회전 = 1게임 플레이
						</p>
						<p>
							3. "슈퍼 스트라이크" 또는 "럭키 스트라이크" = 상품 획득 확률이 높아집니다.
						</p>
						<p>
							4. 당첨 확률은 100%가 아닙니다.
						</p>
						<p>
							여러분의 많은 이용 부탁드립니다
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21232154">
					</td>
					<td class="memo_no">
						715
					</td>
					<td class="open_memo memo_content" data-idx="21232154" data-i="715">
						 ##출금 정상화 안내## 안녕하세요 BOS
					</td>
					<td class="memo_date">
						09-01 21:35
					</td>
				</tr>
				<tr class="dspn ans" data-i="715">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##출금 정상화 안내##<br>
							<br>
							 안녕하세요 BOSS&nbsp;운영진입니다
						</p>
						<p>
							현재 출금 정상화 처리 되었습니다.<br>
							<br>
							 &nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							<br>
							 평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21198366">
					</td>
					<td class="memo_no">
						714
					</td>
					<td class="open_memo memo_content" data-idx="21198366" data-i="714">
						 [레볼루션 점검완료]
					</td>
					<td class="memo_date">
						09-01 19:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="714">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							[레볼루션 점검완료]
						</p>
						<p>
							안녕하세요 레볼루션 고객센터입니다.<br>
							 금일 12시에 진행된 업데이트가 모두 정상적으로 완료되어<br>
							 현시간 부로 정상 이용 가능합니다.
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21164583">
					</td>
					<td class="memo_no">
						713
					</td>
					<td class="open_memo memo_content" data-idx="21164583" data-i="713">
						 ##[레볼루션 점검 연장 안내]## 안녕�
					</td>
					<td class="memo_date">
						09-01 18:44
					</td>
				</tr>
				<tr class="dspn ans" data-i="713">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##[레볼루션 점검 연장 안내]##<br>
							<br>
							 안녕하세요 회원님들 보스 운영진입니다.
						</p>
						<p>
							점검 일 : &nbsp;2024.09.01 (일) 12:00 ~ 19:30 까지 (7시간 30분)
						</p>
						<p>
							레볼루션 점검 시간이 안내드렸던 시간에서 19:30 까지 연장됩니다.
						</p>
						<p>
							해당 시간보다 빠르거나 지연될 수 있습니다.
						</p>
						<p>
							불편을 드려 죄송합니다 정상화시 공지를 통해 안내드리겠습니다.
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요➕
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21130802">
					</td>
					<td class="memo_no">
						712
					</td>
					<td class="open_memo memo_content" data-idx="21130802" data-i="712">
						 [레볼루션 점검 연장 안내]
					</td>
					<td class="memo_date">
						09-01 17:14
					</td>
				</tr>
				<tr class="dspn ans" data-i="712">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							[레볼루션 점검 연장 안내]
						</p>
						<p>
							점검 일 : &nbsp;2024.09.01 (일) 12:00 ~ 18:30 까지 (6시간 30분)
						</p>
						<p>
							레볼루션 점검 시간이 안내드렸던 시간에서 18:30 까지 연장됩니다.
						</p>
						<p>
							※18:30 해당 시간보다 빠르거나 지연될 수 있습니다.
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21097027">
					</td>
					<td class="memo_no">
						711
					</td>
					<td class="open_memo memo_content" data-idx="21097027" data-i="711">
						 [레볼루션 점검 연장 안내]
					</td>
					<td class="memo_date">
						09-01 15:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="711">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							[레볼루션 점검 연장 안내]
						</p>
						<p>
							점검 일 : &nbsp;2024.09.01 (일) 12:00 ~ 17:30 까지 (5시간 30분)
						</p>
						<p>
							레볼루션 점검 시간이 안내드렸던 시간에서 17:30 까지 연장됩니다.
						</p>
						<p>
							※17:30 해당 시간보다 빠르거나 지연될 수 있습니다.
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21063219">
					</td>
					<td class="memo_no">
						710
					</td>
					<td class="open_memo memo_content" data-idx="21063219" data-i="710">
						 안녕하세요 회원님들 BOSS운영진입니�
					</td>
					<td class="memo_date">
						09-01 12:50
					</td>
				</tr>
				<tr class="dspn ans" data-i="710">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들 BOSS운영진입니다.
						</p>
						<p>
							##9/1 레볼루션 점검 진행##
						</p>
						<p>
							점검 예정시간:현재부터 ~16:00까지
						</p>
						<p>
							변경사항 및 추가사항<br>
							 &nbsp;<br>
							 홀덤머니<br>
							 1. '홀덤머니' 명칭의 새로운 머니 타입이 추가됩니다. 해당 머니는 이전이 불가능하며, 홀덤 보너스를 선택하여 충전가능합니다.
						</p>
						<p>
							유저 페이지 변경사항<br>
							 -홀덤머니 추가<br>
							 -환전페이지 머니타입 선택 추가<br>
							 -충/환전 내역 머니타입 컬럼 추가<br>
							 -머니내역 머니타입(일반/홀덤) 탭 추가<br>
							<br>
							 불편을 드려 죄송합니다 정상화시 공지를 통해 안내드리겠습니다.
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="21026640">
					</td>
					<td class="memo_no">
						709
					</td>
					<td class="open_memo memo_content" data-idx="21026640" data-i="709">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-30 16:07
					</td>
				</tr>
				<tr class="dspn ans" data-i="709">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20992987">
					</td>
					<td class="memo_no">
						708
					</td>
					<td class="open_memo memo_content" data-idx="20992987" data-i="708">
						 ★ 카뱅/김한산 장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						08-30 15:35
					</td>
				</tr>
				<tr class="dspn ans" data-i="708">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카뱅/김한산 장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20959332">
					</td>
					<td class="memo_no">
						707
					</td>
					<td class="open_memo memo_content" data-idx="20959332" data-i="707">
						 ★ **/***장 해당 계좌 입금 불가(정지)�
					</td>
					<td class="memo_date">
						08-30 15:15
					</td>
				</tr>
				<tr class="dspn ans" data-i="707">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ **/***장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 카카오/ 김한산장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20925678">
					</td>
					<td class="memo_no">
						706
					</td>
					<td class="open_memo memo_content" data-idx="20925678" data-i="706">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-30 15:14
					</td>
				</tr>
				<tr class="dspn ans" data-i="706">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20896668">
					</td>
					<td class="memo_no">
						705
					</td>
					<td class="open_memo memo_content" data-idx="20896668" data-i="705">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-29 18:18
					</td>
				</tr>
				<tr class="dspn ans" data-i="705">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20869187">
					</td>
					<td class="memo_no">
						704
					</td>
					<td class="open_memo memo_content" data-idx="20869187" data-i="704">
					</td>
					<td class="memo_date">
						08-29 18:18
					</td>
				</tr>
				<tr class="dspn ans" data-i="704">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20837007">
					</td>
					<td class="memo_no">
						703
					</td>
					<td class="open_memo memo_content" data-idx="20837007" data-i="703">
						 ★기업/권현우장 해당 계좌 입금 불가
					</td>
					<td class="memo_date">
						08-29 17:52
					</td>
				</tr>
				<tr class="dspn ans" data-i="703">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★기업/권현우장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20803354">
					</td>
					<td class="memo_no">
						702
					</td>
					<td class="open_memo memo_content" data-idx="20803354" data-i="702">
						 안녕하세요 회원님들&nbsp;운영진입니�
					</td>
					<td class="memo_date">
						08-28 21:24
					</td>
				</tr>
				<tr class="dspn ans" data-i="702">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들&nbsp;운영진입니다.
						</p>
						<p>
							평생 도메인(보스접속.com / 보스사이트.com) &nbsp;오류
						</p>
						<p>
							&nbsp;현재 보스 평생도메인 오류가 확인되어 빠른 정상화 중에 있습니다. 시간을 갖고 기다려주시면 감사하겠습니다^^
						</p>
						<p>
							접속은 boss-1166.com / boss-1177.com « 해당 도메인으로 접속 해주시면 됩니다 ^^
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20769735">
					</td>
					<td class="memo_no">
						701
					</td>
					<td class="open_memo memo_content" data-idx="20769735" data-i="701">
						 &nbsp;###CQ9 게이밍 점검 안내### 안녕�
					</td>
					<td class="memo_date">
						08-28 10:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="701">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp;###CQ9 게이밍 점검 안내###<br>
							<br>
							 안녕하세요 보스 운영진입니다!
						</p>
						<p>
							점검 일시 : 현시간부로 종료시간 미정
						</p>
						<p>
							&nbsp;이용에 불편을 드려 대단히 죄송합니다<br>
							 정상화 될 시 재공지 해드리겠습니다<br>
							 이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							오늘도 보스를 찾아주셔서 감사합니다!
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20736194">
					</td>
					<td class="memo_no">
						700
					</td>
					<td class="open_memo memo_content" data-idx="20736194" data-i="700">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-28 07:37
					</td>
				</tr>
				<tr class="dspn ans" data-i="700">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							&nbsp;[카지노게임사 : Asia Gaming 긴급 점검종료
						</p>
						<p>
							현재 게임사 측 국제 네트워크 문제로 인한 긴급점검이 종료되었습니다. 정상화 되었습니다.
						</p>
						<p>
							이에 게임사 측에 관련 부분에 대한 확인요청을 진행하여,<br>
							 정상화 되었으니 이용 가능하십니다.^^&nbsp;이용에 불편을끼쳐드려 죄송합니다.^^
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20702654">
					</td>
					<td class="memo_no">
						699
					</td>
					<td class="open_memo memo_content" data-idx="20702654" data-i="699">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-28 06:53
					</td>
				</tr>
				<tr class="dspn ans" data-i="699">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							&nbsp;[카지노게임사 : Asia Gaming 긴급 점검 공지 전달드립니다. ]
						</p>
						<p>
							점검일시 : 2024.08-28(수)현시간부로~ 미정 게임사 긴급 점검 진행으로 해당 게임사의 게임 이용이 불가능합니다.<br>
							 정상화시 공지를 통해 안내드리겠습니다.
						</p>
						<p>
							<br>
							 이용에 불편을 드려 죄송합니다. 보다 나은 회원님들의 배팅 환경을 위해 진행하는 부분이니 양해부탁드리겠습니다
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20669109">
					</td>
					<td class="memo_no">
						698
					</td>
					<td class="open_memo memo_content" data-idx="20669109" data-i="698">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-27 23:53
					</td>
				</tr>
				<tr class="dspn ans" data-i="698">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							[ 스포츠 3폴더 15% 매충 변경 안내]
						</p>
						<p>
							&nbsp;현시간 부로 스포츠 매충 변경 안내를 알려드립니다.스포츠 &nbsp;3폴더 15% 선택시 (1.51+1.51+1.51) 배팅 만 가능합니다&nbsp;<br>
							 &nbsp;
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20635509">
					</td>
					<td class="memo_no">
						697
					</td>
					<td class="open_memo memo_content" data-idx="20635509" data-i="697">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-26 16:30
					</td>
				</tr>
				<tr class="dspn ans" data-i="697">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20602029">
					</td>
					<td class="memo_no">
						696
					</td>
					<td class="open_memo memo_content" data-idx="20602029" data-i="696">
						 &nbsp;스포츠/미니게임/카지노 돌발
					</td>
					<td class="memo_date">
						08-26 16:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="696">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp;스포츠/미니게임/카지노 돌발
						</p>
						<p>
							<br>
							 &nbsp;<br>
							 안녕하세요 회원님들보스 운영팀입니다.
						</p>
						<p>
							미니게임/카지노 "무한 돌발 "이벤트 안내
						</p>
						<p>
							현시간 ~ 19:00시까지<br>
							 스포츠2폴더 및 미니게임 / 카지노 "무한돌발"이벤트 진행합니다.
						</p>
						<p>
							스포츠/미니게임 충전 시 10% 자동지급
						</p>
						<p>
							카지노 충전 시 5% 자동지급
						</p>
						<p>
							모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다^^
						</p>
						<p>
							다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가합니다^^
						</p>
						<p>
							스포츠 100%<br>
							 미니게임 롤링 400%<br>
							 카지노 롤링 500%
						</p>
						<p>
							지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다.
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^
						</p>
						<p>
							평생도메인 : 보스접속.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20568549">
					</td>
					<td class="memo_no">
						695
					</td>
					<td class="open_memo memo_content" data-idx="20568549" data-i="695">
						 ★ 농협/홍영훈장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						08-26 15:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="695">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/홍영훈장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20535069">
					</td>
					<td class="memo_no">
						694
					</td>
					<td class="open_memo memo_content" data-idx="20535069" data-i="694">
						 ★ 농협/홍영훈장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						08-26 15:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="694">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/홍영훈장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20501021">
					</td>
					<td class="memo_no">
						693
					</td>
					<td class="open_memo memo_content" data-idx="20501021" data-i="693">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-26 12:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="693">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 미니게임 크라운게임은 <span style="color:#d35400">점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 19:00 이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20472088">
					</td>
					<td class="memo_no">
						692
					</td>
					<td class="open_memo memo_content" data-idx="20472088" data-i="692">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-25 10:34
					</td>
				</tr>
				<tr class="dspn ans" data-i="692">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20440081">
					</td>
					<td class="memo_no">
						691
					</td>
					<td class="open_memo memo_content" data-idx="20440081" data-i="691">
						 ★ 부산/곽대희장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						08-25 10:13
					</td>
				</tr>
				<tr class="dspn ans" data-i="691">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 부산/곽대희장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20406641">
					</td>
					<td class="memo_no">
						690
					</td>
					<td class="open_memo memo_content" data-idx="20406641" data-i="690">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-25 00:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="690">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							&nbsp;프리스핀(슬롯) 이벤트
						</p>
						<p>
							‼️매주 일요일 프리스핀 DAY 이벤트 안내 드립니다 ‼️
						</p>
						<p>
							이번 프리스핀 게임사는 &lt;플레이앤고&gt; 입니다
						</p>
						<p>
							매주 금요일, 토요일 합산 입금액(슬롯) 기준&nbsp;
						</p>
						<p>
							합 입금 10만원 이상 3만 포인트 지급
						</p>
						<p>
							합 입금 50만원 이상 7만 포인트 지급
						</p>
						<p>
							합 입금 100만원 이상 10만 포인트 지급
						</p>
						<p>
							합 입금 200만원 이상 15만 포인트 지급
						</p>
						<p>
							합 입금 300만원 이상 20만 포인트 지급
						</p>
						<p>
							&nbsp;지정된 게임 이외 게임 이용 시 모든 금액 몰수처리
						</p>
						<p>
							포인트는 단독 사용만 가능하며 롤링 300% / 최대 출금 5배 입니다.
						</p>
						<p>
							&nbsp;지정 게임사 긴급 점검으로 인하여 부득이하게 변경 될 수 있습니다.
						</p>
						<p>
							&nbsp;지정 게임사는 매주 변경되니 채널방 공지 참고 해주시면 감사하겠습니다.
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20373129">
					</td>
					<td class="memo_no">
						689
					</td>
					<td class="open_memo memo_content" data-idx="20373129" data-i="689">
						 ###에볼루션 정상화 안내### 안녕하�
					</td>
					<td class="memo_date">
						08-23 14:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="689">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							###에볼루션 정상화 안내###<br>
							<br>
							 안녕하세요 보스 운영진입니다!
						</p>
						<p>
							이용에 불편을 드려 죄송합니다 ^^
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 및 &nbsp;카카오톡으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20339723">
					</td>
					<td class="memo_no">
						688
					</td>
					<td class="open_memo memo_content" data-idx="20339723" data-i="688">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-23 04:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="688">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							에볼루션 게이밍 지연현상 안내
						</p>
						<p>
							<br>
							 &nbsp;현재 에볼루션 게이밍 로딩 지연현상으로 인해 일시적 이용이 불가하신 점 이용에 양해 부탁드리겠습니다&nbsp;
						</p>
						<p>
							이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;<br>
							 &nbsp;
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20304413">
					</td>
					<td class="memo_no">
						687
					</td>
					<td class="open_memo memo_content" data-idx="20304413" data-i="687">
						 안녕하세요 회원님들보스 운영팀입니
					</td>
					<td class="memo_date">
						08-20 16:22
					</td>
				</tr>
				<tr class="dspn ans" data-i="687">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님들보스 운영팀입니다.</span>
						</p>
						<p>
							<span style="color:#f1c40f">미니게임/카지노 "무한 돌발 "이벤트 안내</span>
						</p>
						<p>
							<span style="color:#f1c40f">현시간 ~ 19:00시까지&nbsp;<br>
							 스포츠/미니게임/카지노 "무한돌발"이벤트 진행합니다.</span>
						</p>
						<p>
							<span style="color:#f1c40f">스포츠 3폴더 유형 20% 자동지급</span>
						</p>
						<p>
							<span style="color:#f1c40f">스포츠/미니게임 충전 시 10% 자동지급</span>
						</p>
						<p>
							<span style="color:#f1c40f">카지노 충전 시 5% 자동지급</span>
						</p>
						<p>
							<span style="color:#f1c40f">모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.</span>
						</p>
						<p>
							<span style="color:#f1c40f">환전내역 있으셔도 무제한 참여 가능합니다.</span>
						</p>
						<p>
							<span style="color:#f1c40f">환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다^^</span>
						</p>
						<p>
							<span style="color:#f1c40f">다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가합니다^^</span>
						</p>
						<p>
							<span style="color:#f1c40f">스포츠 100%<br>
							 미니게임 롤링 400%<br>
							 카지노 롤링 500%</span>
						</p>
						<p>
							<span style="color:#f1c40f">‼️지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다.‼️</span>
						</p>
						<p>
							<span style="color:#f1c40f">많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^</span>
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20271139">
					</td>
					<td class="memo_no">
						686
					</td>
					<td class="open_memo memo_content" data-idx="20271139" data-i="686">
						 안녕하세요 보스 운영진입니다!
					</td>
					<td class="memo_date">
						08-20 00:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="686">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 보스 운영진입니다!
						</p>
						<p>
							보스 페이백 이벤트&nbsp;
						</p>
						<p>
							매주 화요일 마다 지난주 화요일 ~ 월요일의 입출금 차액 5% 를 지급 합니다&nbsp;
						</p>
						<p>
							페이백 계산방법
						</p>
						<p>
							해당 주 총 입금액 10만원 해당 주 총 출금액 2만원 100,000 - 20,000=80,000&nbsp;
						</p>
						<p>
							페이백 지급포인트 : 80,000x5% = 4,000 원&nbsp;
						</p>
						<p>
							지급 &nbsp;받으신 페이백 롤링&nbsp;<br>
							 스포츠100%/스포츠 이외 다른게임 전부 300%
						</p>
						<p>
							페이백 버튼 클릭하시면 자동으로 지급 되시는점 참고 바랍니다
						</p>
						<p>
							&nbsp;주 2회 입금 이상자만 참여 가능 합니다
						</p>
						<p>
							지급 되신 페이백금액의 최대 환전 금액은 10배이니 이용에 차질없게 참고하여 이용해주시기 바랍니다.
						</p>
						<p>
							1~2레벨 - 최대지급액 100만원<br>
							 3~4레벨 - 최대지급액 150만원<br>
							 vip 1~2레벨 - 최대지급액 200만원<br>
							 vip 3레벨 - 최대지급액300만원<br>
							 레벨 등업에 따라 지급액 한도가 변경되었으니 많은 참여 바랍니다
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 히어로를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20235088">
					</td>
					<td class="memo_no">
						685
					</td>
					<td class="open_memo memo_content" data-idx="20235088" data-i="685">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-19 04:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="685">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							농협은행 점검 정상화 안내
						</p>
						<p>
							<br>
							 금일 농협은행 점검이 종료되었습니다&nbsp;<br>
							 &nbsp;
						</p>
						<p>
							이용에 불편을 드려 대단히 죄송합니다<br>
							 &nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20201861">
					</td>
					<td class="memo_no">
						684
					</td>
					<td class="open_memo memo_content" data-idx="20201861" data-i="684">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-19 00:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="684">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							농협은행 점검 안내
						</p>
						<p>
							익일 농협 은행 00:00~04:00 점검 예정에 있습니다.
						</p>
						<p>
							- 농협은행 사용 중이신 회원분들께서는 점검 전 계좌변경 후 원할한 이용 해주시길 바랍니다<br>
							 &nbsp;
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20168633">
					</td>
					<td class="memo_no">
						683
					</td>
					<td class="open_memo memo_content" data-idx="20168633" data-i="683">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-18 17:58
					</td>
				</tr>
				<tr class="dspn ans" data-i="683">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							현지 인터넷 불안정 정상화 안내
						</p>
						<p>
							&nbsp;현시간 부로 모든 업무가 정상화 되었습니다. 이용에 불편을 드린 모든 회원님들께 죄송하다는 말씀드립니다
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스는&nbsp;항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20135378">
					</td>
					<td class="memo_no">
						682
					</td>
					<td class="open_memo memo_content" data-idx="20135378" data-i="682">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-18 00:09
					</td>
				</tr>
				<tr class="dspn ans" data-i="682">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							익일 국민 은행 00:00~07:00 점검 예정에 있습니다.
						</p>
						<p>
							국민은행 사용 중이신 회원분들께서는 점검 전 계좌변경 후 원할한 이용 해주시길 바랍니다
						</p>
						<p>
							계좌변경을 원하시는 회원분들께서는 사이트 내 고객센터로 문의 해주시길 바랍니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 및 &nbsp;카카오톡으로 문의 주세요
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20102192">
					</td>
					<td class="memo_no">
						681
					</td>
					<td class="open_memo memo_content" data-idx="20102192" data-i="681">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-18 00:07
					</td>
				</tr>
				<tr class="dspn ans" data-i="681">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							국민은행 점검 안내
						</p>
						<p>
							익일 국민 은행 00:00~07:00 점검 예정에 있습니다.
						</p>
						<p>
							- 국민은행 사용 중이신 회원분들께서는 점검 전 계좌변경 후 원할한 이용 해주시길 바랍니다
						</p>
						<p>
							- 계좌변경을 원하시는 회원분들께서는 사이트 내 고객센터로 문의 해주시길 바랍니다.
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20069006">
					</td>
					<td class="memo_no">
						680
					</td>
					<td class="open_memo memo_content" data-idx="20069006" data-i="680">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-17 23:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="680">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							심야 이벤트 개편안내&nbsp;
						</p>
						<p>
							스포츠 이용시 : 100% [1.51 배당 초과하는 2폴더 (1.51배당+1.51배당) 이상 베팅만 인정
						</p>
						<p>
							&nbsp;단폴 이용 시 : 200%
						</p>
						<p>
							미니게임 이용은 불가합니다.
						</p>
						<p>
							주의사항<br>
							 1일1회참여가능
						</p>
						<p>
							최대 지급 포인트 50만원
						</p>
						<p>
							참여 원할 시 충전유형에서 선택 후 참여 해주시면 됩니다
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20035806">
					</td>
					<td class="memo_no">
						679
					</td>
					<td class="open_memo memo_content" data-idx="20035806" data-i="679">
						 라이브 채팅 정상화 안내
					</td>
					<td class="memo_date">
						08-17 18:11
					</td>
				</tr>
				<tr class="dspn ans" data-i="679">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">라이브 채팅 정상화 안내</span>
						</p>
						<p>
							<span style="color:#f1c40f">현 시간부로 라이브챗 응대 및 상담 가능하니 이용에 참고 부탁드립니다.</span>
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="20002630">
					</td>
					<td class="memo_no">
						678
					</td>
					<td class="open_memo memo_content" data-idx="20002630" data-i="678">
						 라이브 채팅 정상화 안내
					</td>
					<td class="memo_date">
						08-17 18:11
					</td>
				</tr>
				<tr class="dspn ans" data-i="678">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">라이브 채팅 정상화 안내</span>
						</p>
						<p>
							<span style="color:#f1c40f">현 시간부로 라이브챗 응대 및 상담 가능하니 이용에 참고 부탁드립니다.</span>
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19969451">
					</td>
					<td class="memo_no">
						677
					</td>
					<td class="open_memo memo_content" data-idx="19969451" data-i="677">
						 라이브채팅 점검 안내
					</td>
					<td class="memo_date">
						08-17 15:32
					</td>
				</tr>
				<tr class="dspn ans" data-i="677">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">라이브채팅 점검 안내</span>
						</p>
						<p>
							<span style="color:#f1c40f">현재 라이브채팅 점검으로 응대가 불가한 사항이니 참고 부탁드리며 정상화 시 재 안내 해드리겠습니다.</span>
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19936243">
					</td>
					<td class="memo_no">
						676
					</td>
					<td class="open_memo memo_content" data-idx="19936243" data-i="676">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-17 06:32
					</td>
				</tr>
				<tr class="dspn ans" data-i="676">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							스포츠 이용시 : 100% [1.51 배당 초과하는 2폴더 (1.51배당+15.51배당) 이상 베팅만 인정
						</p>
						<p>
							&nbsp;단폴 이용 시 : 200%
						</p>
						<p>
							&nbsp;미니게임 이용 불가&nbsp;
						</p>
						<p>
							주의사항
						</p>
						<p>
							<br>
							 1일1회참여가능
						</p>
						<p>
							최대 지급 포인트 50만원
						</p>
						<p>
							참여 원할 시 충전유형에서 선택 후 참여 해주시면 됩니다
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19903083">
					</td>
					<td class="memo_no">
						675
					</td>
					<td class="open_memo memo_content" data-idx="19903083" data-i="675">
						 ##CQ9 게이밍 점검 완료## 안녕하세요
					</td>
					<td class="memo_date">
						08-16 14:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="675">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##CQ9 게이밍 점검 완료##<br>
							<br>
							 안녕하세요 보스 운영진입니다!
						</p>
						<p>
							현시간부로 CQ9 정상적으로 이용가능하니 참고하여 이용해 주시기 바랍니다^^&nbsp;
						</p>
						<p>
							이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							오늘도 보스를 찾아주셔서 감사합니다!
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19869935">
					</td>
					<td class="memo_no">
						674
					</td>
					<td class="open_memo memo_content" data-idx="19869935" data-i="674">
						 ## CQ9 게이밍 점검 안내## 안녕하세�
					</td>
					<td class="memo_date">
						08-16 13:35
					</td>
				</tr>
				<tr class="dspn ans" data-i="674">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## CQ9 게이밍 점검 안내##<br>
							<br>
							 안녕하세요 보스 운영진입니다!
						</p>
						<p>
							점검 일시 : 현시간부로 종료시간 미정
						</p>
						<p>
							&nbsp;이용에 불편을 드려 대단히 죄송합니다<br>
							 정상화 될 시 재공지 해드리겠습니다<br>
							 이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							오늘도 보스를 찾아주셔서 감사합니다!
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19840175">
					</td>
					<td class="memo_no">
						673
					</td>
					<td class="open_memo memo_content" data-idx="19840175" data-i="673">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-14 23:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="673">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19814864">
					</td>
					<td class="memo_no">
						672
					</td>
					<td class="open_memo memo_content" data-idx="19814864" data-i="672">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-14 23:58
					</td>
				</tr>
				<tr class="dspn ans" data-i="672">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19788000">
					</td>
					<td class="memo_no">
						671
					</td>
					<td class="open_memo memo_content" data-idx="19788000" data-i="671">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-14 18:19
					</td>
				</tr>
				<tr class="dspn ans" data-i="671">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19756412">
					</td>
					<td class="memo_no">
						670
					</td>
					<td class="open_memo memo_content" data-idx="19756412" data-i="670">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-14 17:07
					</td>
				</tr>
				<tr class="dspn ans" data-i="670">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							&nbsp;기프티콘 이벤트
						</p>
						<p>
							금일&nbsp; 17:00~20:00 해당 시간동안&nbsp;
						</p>
						<p>
							20만원 이상 충전 시 치킨 기프티콘 발송
						</p>
						<p>
							30만원 이상 충전 시 치킨 기프티+편의점 10,000원 쿠폰 발송
						</p>
						<p>
							1인 1회만 수령 가능하며 중복 지급은 발가하며 이벤트 시간대 충전 한 인원만 참여 가능합니다.&nbsp;
						</p>
						<p>
							참여 금액 충족 후 케어팀 텔레그램&nbsp;<span style="color:#f1c40f">@Boss5942</span>&nbsp;으로 문의주시기 바랍니다&nbsp;
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19722467">
					</td>
					<td class="memo_no">
						669
					</td>
					<td class="open_memo memo_content" data-idx="19722467" data-i="669">
						 ★ 기업/박종수장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						08-14 16:40
					</td>
				</tr>
				<tr class="dspn ans" data-i="669">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 기업/박종수장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19687574">
					</td>
					<td class="memo_no">
						668
					</td>
					<td class="open_memo memo_content" data-idx="19687574" data-i="668">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-14 08:18
					</td>
				</tr>
				<tr class="dspn ans" data-i="668">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19654555">
					</td>
					<td class="memo_no">
						667
					</td>
					<td class="open_memo memo_content" data-idx="19654555" data-i="667">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-14 08:18
					</td>
				</tr>
				<tr class="dspn ans" data-i="667">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19621524">
					</td>
					<td class="memo_no">
						666
					</td>
					<td class="open_memo memo_content" data-idx="19621524" data-i="666">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-13 23:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="666">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19588516">
					</td>
					<td class="memo_no">
						665
					</td>
					<td class="open_memo memo_content" data-idx="19588516" data-i="665">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-13 23:58
					</td>
				</tr>
				<tr class="dspn ans" data-i="665">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19555508">
					</td>
					<td class="memo_no">
						664
					</td>
					<td class="open_memo memo_content" data-idx="19555508" data-i="664">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-13 21:33
					</td>
				</tr>
				<tr class="dspn ans" data-i="664">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19522505">
					</td>
					<td class="memo_no">
						663
					</td>
					<td class="open_memo memo_content" data-idx="19522505" data-i="663">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-13 21:32
					</td>
				</tr>
				<tr class="dspn ans" data-i="663">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19489455">
					</td>
					<td class="memo_no">
						662
					</td>
					<td class="open_memo memo_content" data-idx="19489455" data-i="662">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-13 11:33
					</td>
				</tr>
				<tr class="dspn ans" data-i="662">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19456468">
					</td>
					<td class="memo_no">
						661
					</td>
					<td class="open_memo memo_content" data-idx="19456468" data-i="661">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-13 09:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="661">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19423487">
					</td>
					<td class="memo_no">
						660
					</td>
					<td class="open_memo memo_content" data-idx="19423487" data-i="660">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-13 09:26
					</td>
				</tr>
				<tr class="dspn ans" data-i="660">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19390504">
					</td>
					<td class="memo_no">
						659
					</td>
					<td class="open_memo memo_content" data-idx="19390504" data-i="659">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-13 00:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="659">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19357532">
					</td>
					<td class="memo_no">
						658
					</td>
					<td class="open_memo memo_content" data-idx="19357532" data-i="658">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-13 00:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="658">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19324560">
					</td>
					<td class="memo_no">
						657
					</td>
					<td class="open_memo memo_content" data-idx="19324560" data-i="657">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-13 00:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="657">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							매주 화요일 마다 지난주 화요일 ~ 월요일의 입출금 차액 5% 를 지급 합니다 ‼️
						</p>
						<p>
							페이백 계산방법
						</p>
						<p>
							해당 주 총 입금액 10만원 해당 주 총 출금액 2만원 100,000 - 20,000=80,000&nbsp;
						</p>
						<p>
							페이백 지급포인트 : 80,000x5% = 4,000 원&nbsp;
						</p>
						<p>
							&nbsp;지급 &nbsp;받으신 페이백 롤링&nbsp;<br>
							 스포츠100%/스포츠 이외 다른게임 전부 300%
						</p>
						<p>
							&nbsp;페이백 버튼 클릭하시면 자동으로 지급 되시는점 참고 바랍니다
						</p>
						<p>
							&nbsp;주 2회 입금 이상자만 참여 가능 합니다
						</p>
						<p>
							지급받은 페이백 금액에 최대 10배까지 환전 가능하니 이용에 차질없게 참고해주시기 바랍니다.&nbsp;
						</p>
						<p>
							1~2레벨 - 최대지급액 100만원<br>
							 3~4레벨 - 최대지급액 150만원<br>
							 vip 1~2레벨 - 최대지급액 200만원<br>
							 vip 3레벨 - 최대지급액300만원<br>
							 ‼️레벨 등업에 따라 지급액 한도가 변경되었으니 많은 참여 바랍니다‼️
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19291588">
					</td>
					<td class="memo_no">
						656
					</td>
					<td class="open_memo memo_content" data-idx="19291588" data-i="656">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-12 23:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="656">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19258617">
					</td>
					<td class="memo_no">
						655
					</td>
					<td class="open_memo memo_content" data-idx="19258617" data-i="655">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-12 23:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="655">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19225646">
					</td>
					<td class="memo_no">
						654
					</td>
					<td class="open_memo memo_content" data-idx="19225646" data-i="654">
						 [ BET365 공홈 오류 정상화 안내 ]
					</td>
					<td class="memo_date">
						08-12 23:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="654">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">[ BET365 공홈 오류 정상화 안내 ]</span>
						</p>
						<p>
							<span style="color:#f1c40f">현재 공홈 오류 일시적인것으로</span>
						</p>
						<p>
							<span style="color:#f1c40f">다시 정상화 된 것으로 확인되어 게임 이용가능하신 점 참고바랍니다.</span><br>
							 &nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19192675">
					</td>
					<td class="memo_no">
						653
					</td>
					<td class="open_memo memo_content" data-idx="19192675" data-i="653">
						 현재 가상축구 공홈 자체 오류
					</td>
					<td class="memo_date">
						08-12 22:53
					</td>
				</tr>
				<tr class="dspn ans" data-i="653">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<strong>현재 가상축구 공홈 자체 오류</strong>
						</p>
						<p>
							<strong>결과 지연 및 결과 페이지 오류</strong>
						</p>
						<p>
							<strong>정상화시 공지 드리겠습니다.</strong>
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19159704">
					</td>
					<td class="memo_no">
						652
					</td>
					<td class="open_memo memo_content" data-idx="19159704" data-i="652">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-12 22:49
					</td>
				</tr>
				<tr class="dspn ans" data-i="652">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19126733">
					</td>
					<td class="memo_no">
						651
					</td>
					<td class="open_memo memo_content" data-idx="19126733" data-i="651">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-12 22:49
					</td>
				</tr>
				<tr class="dspn ans" data-i="651">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19093761">
					</td>
					<td class="memo_no">
						650
					</td>
					<td class="open_memo memo_content" data-idx="19093761" data-i="650">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-12 21:42
					</td>
				</tr>
				<tr class="dspn ans" data-i="650">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19059837">
					</td>
					<td class="memo_no">
						649
					</td>
					<td class="open_memo memo_content" data-idx="19059837" data-i="649">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-12 10:21
					</td>
				</tr>
				<tr class="dspn ans" data-i="649">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="19026828">
					</td>
					<td class="memo_no">
						648
					</td>
					<td class="open_memo memo_content" data-idx="19026828" data-i="648">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-11 12:15
					</td>
				</tr>
				<tr class="dspn ans" data-i="648">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18993869">
					</td>
					<td class="memo_no">
						647
					</td>
					<td class="open_memo memo_content" data-idx="18993869" data-i="647">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-10 13:45
					</td>
				</tr>
				<tr class="dspn ans" data-i="647">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18960938">
					</td>
					<td class="memo_no">
						646
					</td>
					<td class="open_memo memo_content" data-idx="18960938" data-i="646">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-10 12:28
					</td>
				</tr>
				<tr class="dspn ans" data-i="646">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18928049">
					</td>
					<td class="memo_no">
						645
					</td>
					<td class="open_memo memo_content" data-idx="18928049" data-i="645">
						 안녕하세요 보스 운영진입니다!
					</td>
					<td class="memo_date">
						08-10 09:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="645">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 보스 운영진입니다!
						</p>
						<p>
							<br>
							 슈퍼게임점검 종료 안내입니다.
						</p>
						<p>
							<br>
							 현시간부로 슈퍼사다리,슈퍼섯다,슈퍼 로하이 점검이 완료되었습니다.
						</p>
						<p>
							&nbsp;이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							‼️정상화 시 재안내 드리도록 하겠습니다‼️
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18895164">
					</td>
					<td class="memo_no">
						644
					</td>
					<td class="open_memo memo_content" data-idx="18895164" data-i="644">
						 프라그마틱 플레이 지연 안내
					</td>
					<td class="memo_date">
						08-10 02:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="644">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							프라그마틱 플레이 지연 안내
						</p>
						<p>
							현재 게임사 측 체크 결과 아시아 제품 전역에 네트워크 문제가 있음을 확인했습니다.
						</p>
						<p>
							이에 관련 부분이 정상화되기까지 이용에 다소 지연이 있을 수 있습니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18860500">
					</td>
					<td class="memo_no">
						643
					</td>
					<td class="open_memo memo_content" data-idx="18860500" data-i="643">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-09 17:07
					</td>
				</tr>
				<tr class="dspn ans" data-i="643">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18826751">
					</td>
					<td class="memo_no">
						642
					</td>
					<td class="open_memo memo_content" data-idx="18826751" data-i="642">
						 ★ 카카오뱅크/이상석장 해당 계좌 입
					</td>
					<td class="memo_date">
						08-09 16:21
					</td>
				</tr>
				<tr class="dspn ans" data-i="642">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카카오뱅크/이상석장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18793894">
					</td>
					<td class="memo_no">
						641
					</td>
					<td class="open_memo memo_content" data-idx="18793894" data-i="641">
						 ★ 카카오뱅크/이상석장 해당 계좌 입
					</td>
					<td class="memo_date">
						08-09 16:21
					</td>
				</tr>
				<tr class="dspn ans" data-i="641">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카카오뱅크/이상석장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18761032">
					</td>
					<td class="memo_no">
						640
					</td>
					<td class="open_memo memo_content" data-idx="18761032" data-i="640">
						 ★보스 돌발이벤트★
					</td>
					<td class="memo_date">
						08-09 16:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="640">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 돌발이벤트★
						</p>
						<p>
							안녕하세요 보스 운영팀 입니다.&nbsp;<br>
							 금일 16:00 ~ 19:00 긴급 돌발 이벤트 20% 진행 하도록 하겠습니다.&nbsp;<br>
							 스포츠 1.51배당 세폴더 이상 배팅만 참여 가능하시며, 스포츠 롤링 100% 미니게임 400%&nbsp; 참고 바랍니다.&nbsp;<br>
							 스포츠3폴더 유형 충전시 20%<strong>자동지급</strong>, 스포츠/미니게임 충전 시 10%&nbsp;<strong>자동지급</strong>입니다.&nbsp;<br>
							<br>
							 단폴더 배팅,규정외 배팅등 악용시 제재되실수 있으시니 꼭 유형에 맞추어 이용 바랍니다.&nbsp;
						</p>
						<p>
							<br>
							 오늘도 저희 보스을 찾아주셔서 감사합니다.&nbsp;<br>
							 평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18728115">
					</td>
					<td class="memo_no">
						639
					</td>
					<td class="open_memo memo_content" data-idx="18728115" data-i="639">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-09 12:13
					</td>
				</tr>
				<tr class="dspn ans" data-i="639">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18695246">
					</td>
					<td class="memo_no">
						638
					</td>
					<td class="open_memo memo_content" data-idx="18695246" data-i="638">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-09 12:13
					</td>
				</tr>
				<tr class="dspn ans" data-i="638">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18662375">
					</td>
					<td class="memo_no">
						637
					</td>
					<td class="open_memo memo_content" data-idx="18662375" data-i="637">
						 &nbsp;
					</td>
					<td class="memo_date">
						08-09 03:14
					</td>
				</tr>
				<tr class="dspn ans" data-i="637">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp;
						</p>
						<p>
							안녕하세요 보스 운영진입니다!
						</p>
						<p>
							라이브챗 시스템 오류
						</p>
						<p>
							라이브챗 시스템 오류로<br>
							 상담 및 문의는 텔레그램 으로 문의 해주시길 바랍니다.
						</p>
						<p>
							이용에 불편을 드려 죄송합니다 ^^
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 및 &nbsp;카카오톡으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18629505">
					</td>
					<td class="memo_no">
						636
					</td>
					<td class="open_memo memo_content" data-idx="18629505" data-i="636">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-08 23:28
					</td>
				</tr>
				<tr class="dspn ans" data-i="636">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18596639">
					</td>
					<td class="memo_no">
						635
					</td>
					<td class="open_memo memo_content" data-idx="18596639" data-i="635">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-08 23:28
					</td>
				</tr>
				<tr class="dspn ans" data-i="635">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18563721">
					</td>
					<td class="memo_no">
						634
					</td>
					<td class="open_memo memo_content" data-idx="18563721" data-i="634">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-08 11:17
					</td>
				</tr>
				<tr class="dspn ans" data-i="634">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18530878">
					</td>
					<td class="memo_no">
						633
					</td>
					<td class="open_memo memo_content" data-idx="18530878" data-i="633">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-08 01:40
					</td>
				</tr>
				<tr class="dspn ans" data-i="633">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18498044">
					</td>
					<td class="memo_no">
						632
					</td>
					<td class="open_memo memo_content" data-idx="18498044" data-i="632">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-07 23:32
					</td>
				</tr>
				<tr class="dspn ans" data-i="632">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18465219">
					</td>
					<td class="memo_no">
						631
					</td>
					<td class="open_memo memo_content" data-idx="18465219" data-i="631">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-07 23:30
					</td>
				</tr>
				<tr class="dspn ans" data-i="631">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18432349">
					</td>
					<td class="memo_no">
						630
					</td>
					<td class="open_memo memo_content" data-idx="18432349" data-i="630">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-07 16:42
					</td>
				</tr>
				<tr class="dspn ans" data-i="630">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18399536">
					</td>
					<td class="memo_no">
						629
					</td>
					<td class="open_memo memo_content" data-idx="18399536" data-i="629">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-07 16:42
					</td>
				</tr>
				<tr class="dspn ans" data-i="629">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18366717">
					</td>
					<td class="memo_no">
						628
					</td>
					<td class="open_memo memo_content" data-idx="18366717" data-i="628">
						 ## 카지노/슬롯 정기점검 종료안내 ##
					</td>
					<td class="memo_date">
						08-07 11:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="628">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 카지노/슬롯 정기점검 종료안내 ##
						</p>
						<p>
							변동사항이 확인될시 재공지드리겠습니다.
						</p>
						<p>
							&nbsp;기다려주셔서 감사합니다.^&amp;
						</p>
						<p>
							오늘도 보스를 찾아주셔서감사합니다&nbsp;
						</p>
						<p>
							<br>
							 &nbsp;평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18333908">
					</td>
					<td class="memo_no">
						627
					</td>
					<td class="open_memo memo_content" data-idx="18333908" data-i="627">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-07 09:13
					</td>
				</tr>
				<tr class="dspn ans" data-i="627">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							<br>
							 ⚠️ (카지노&amp;슬롯) 정기점검 1시간 연장 안내 ⚠️
						</p>
						<p>
							&lt;정기점검 시간 연장안내 »
						</p>
						<p>
							금일 진행되는 점검이 1시간 연장될 예정입니다.
						</p>
						<p>
							점검일시 : 2024-08-07 (수요일) &nbsp;04 : 00 &nbsp;~ &nbsp;11 : 00 시까지&nbsp;
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							현재 진행중인 슬롯/카지노 점검 1시간 연장되어 11:00시 점검 종료되시는점 참고 바랍니다
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18301099">
					</td>
					<td class="memo_no">
						626
					</td>
					<td class="open_memo memo_content" data-idx="18301099" data-i="626">
						 2024-08-07(수요일) (카지노&amp;슬롯) 정�
					</td>
					<td class="memo_date">
						08-07 03:51
					</td>
				</tr>
				<tr class="dspn ans" data-i="626">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							2024-08-07(수요일) (카지노&amp;슬롯) 정기 점검 공지 전달드립니다
						</p>
						<p>
							&nbsp; &nbsp; &nbsp; &nbsp; 점검일시 : 2024-08-07(수요일)&nbsp;<br>
							 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;04 : 00 &nbsp;~ &nbsp;10 : 00 시
						</p>
						<p>
							정기 점검시간에는 카지노 및 슬롯 이용이 제한되오니 양해 부탁드립니다<br>
							 스포츠 및 미니게임 이용은 가능하오니 참고 바랍니다&nbsp;
						</p>
						<p>
							모든 시간은 한국시간(GMT+9), 24시간제 기준입니다
						</p>
						<p>
							추가 점검 시간 연장 공지가 없을 경우, 별도 공지 없이 지정 시간에 맞춰 점검이 완료됨을 알려드립니다
						</p>
						<p>
							서비스 안정화를 위한 조치인 만큼 많은 이해부탁드립니다
						</p>
						<p>
							머니 전환이 불가하신점 참고 바랍니다. 지속적으로 머니전환할시 접속이 불가할수있는점 참고 바랍니다.
						</p>
						<p>
							점검이 시작하기전 머니를 전환 해주시길 바라며 점검이 시작후 머니전환은 불가하며 점검이 끝난후 머니전환이 가능 합니다&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							평생 주소:&nbsp;보스사이트<strong>.com</strong><br>
							 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 :&nbsp;boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18268293">
					</td>
					<td class="memo_no">
						625
					</td>
					<td class="open_memo memo_content" data-idx="18268293" data-i="625">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-07 00:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="625">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							2024-08-07(수요일) (카지노&amp;슬롯) 정기 점검 공지 전달드립니다
						</p>
						<p>
							&nbsp; &nbsp; &nbsp; &nbsp; 점검일시 : 2024-08-07(수요일)&nbsp;<br>
							 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;04 : 00 &nbsp;~ &nbsp;10 : 00 시
						</p>
						<p>
							정기 점검시간에는 카지노 및 슬롯 이용이 제한되오니 양해 부탁드립니다<br>
							 스포츠 및 미니게임 이용은 가능하오니 참고 바랍니다&nbsp;
						</p>
						<p>
							모든 시간은 한국시간(GMT+9), 24시간제 기준입니다
						</p>
						<p>
							추가 점검 시간 연장 공지가 없을 경우, 별도 공지 없이 지정 시간에 맞춰 점검이 완료됨을 알려드립니다
						</p>
						<p>
							서비스 안정화를 위한 조치인 만큼 많은 이해부탁드립니다
						</p>
						<p>
							머니 전환이 불가하신점 참고 바랍니다. 지속적으로 머니전환할시 접속이 불가할수있는점 참고 바랍니다.
						</p>
						<p>
							점검이 시작하기전 머니를 전환 해주시길 바라며 점검이 시작후 머니전환은 불가하며 점검이 끝난후 머니전환이 가능 합니다&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18235474">
					</td>
					<td class="memo_no">
						624
					</td>
					<td class="open_memo memo_content" data-idx="18235474" data-i="624">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-06 19:49
					</td>
				</tr>
				<tr class="dspn ans" data-i="624">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							&nbsp;SWIX(카지노&amp;슬롯) 정기점검 재안내&nbsp;
						</p>
						<p>
							2024-08-07(수요일) SWIX(카지노&amp;슬롯) 정기 점검 공지 전달드립니다
						</p>
						<p>
							점검일시 : 2024-08-07(수요일)&nbsp;&nbsp;<br>
							 &nbsp; &nbsp; &nbsp;‼️04 : 00 &nbsp;~ &nbsp;10 : 00 시‼️
						</p>
						<p>
							정기 점검시간에는 카지노 및 슬롯 이용이 제한되오니 양해 부탁드립니다<br>
							 스포츠 및 미니게임 이용은 가능하오니 참고 바랍니다&nbsp;
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18208294">
					</td>
					<td class="memo_no">
						623
					</td>
					<td class="open_memo memo_content" data-idx="18208294" data-i="623">
						 ★ 농협/최선우장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						08-06 18:19
					</td>
				</tr>
				<tr class="dspn ans" data-i="623">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/최선우장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18176182">
					</td>
					<td class="memo_no">
						622
					</td>
					<td class="open_memo memo_content" data-idx="18176182" data-i="622">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-06 18:18
					</td>
				</tr>
				<tr class="dspn ans" data-i="622">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18143399">
					</td>
					<td class="memo_no">
						621
					</td>
					<td class="open_memo memo_content" data-idx="18143399" data-i="621">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-06 18:14
					</td>
				</tr>
				<tr class="dspn ans" data-i="621">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18110616">
					</td>
					<td class="memo_no">
						620
					</td>
					<td class="open_memo memo_content" data-idx="18110616" data-i="620">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-06 18:14
					</td>
				</tr>
				<tr class="dspn ans" data-i="620">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18077832">
					</td>
					<td class="memo_no">
						619
					</td>
					<td class="open_memo memo_content" data-idx="18077832" data-i="619">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-06 17:43
					</td>
				</tr>
				<tr class="dspn ans" data-i="619">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18045049">
					</td>
					<td class="memo_no">
						618
					</td>
					<td class="open_memo memo_content" data-idx="18045049" data-i="618">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-06 17:43
					</td>
				</tr>
				<tr class="dspn ans" data-i="618">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="18012266">
					</td>
					<td class="memo_no">
						617
					</td>
					<td class="open_memo memo_content" data-idx="18012266" data-i="617">
						 ★ 농협/최선우장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						08-06 17:43
					</td>
				</tr>
				<tr class="dspn ans" data-i="617">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/최선우장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17979483">
					</td>
					<td class="memo_no">
						616
					</td>
					<td class="open_memo memo_content" data-idx="17979483" data-i="616">
						 ★ 농협/최선우장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						08-06 17:43
					</td>
				</tr>
				<tr class="dspn ans" data-i="616">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/최선우장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17945777">
					</td>
					<td class="memo_no">
						615
					</td>
					<td class="open_memo memo_content" data-idx="17945777" data-i="615">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-06 15:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="615">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17912996">
					</td>
					<td class="memo_no">
						614
					</td>
					<td class="open_memo memo_content" data-idx="17912996" data-i="614">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-06 15:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="614">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17880215">
					</td>
					<td class="memo_no">
						613
					</td>
					<td class="open_memo memo_content" data-idx="17880215" data-i="613">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-06 14:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="613">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17847421">
					</td>
					<td class="memo_no">
						612
					</td>
					<td class="open_memo memo_content" data-idx="17847421" data-i="612">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-06 14:50
					</td>
				</tr>
				<tr class="dspn ans" data-i="612">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17814639">
					</td>
					<td class="memo_no">
						611
					</td>
					<td class="open_memo memo_content" data-idx="17814639" data-i="611">
						 광주/이도원장 해당 계좌 입금 불가(�
					</td>
					<td class="memo_date">
						08-06 14:48
					</td>
				</tr>
				<tr class="dspn ans" data-i="611">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							광주/이도원장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17781857">
					</td>
					<td class="memo_no">
						610
					</td>
					<td class="open_memo memo_content" data-idx="17781857" data-i="610">
						 ★ 광주/이도원장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						08-06 14:48
					</td>
				</tr>
				<tr class="dspn ans" data-i="610">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 광주/이도원장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17749064">
					</td>
					<td class="memo_no">
						609
					</td>
					<td class="open_memo memo_content" data-idx="17749064" data-i="609">
						 안녕하세요 보스 운영진입니다!
					</td>
					<td class="memo_date">
						08-06 00:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="609">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 보스 운영진입니다!
						</p>
						<p>
							보스 페이백 이벤트&nbsp;
						</p>
						<p>
							매주 화요일 마다 지난주 화요일 ~ 월요일의 입출금 차액 5% 를 지급 합니다&nbsp;
						</p>
						<p>
							페이백 계산방법
						</p>
						<p>
							해당 주 총 입금액 10만원 해당 주 총 출금액 2만원 100,000 - 20,000=80,000&nbsp;
						</p>
						<p>
							페이백 지급포인트 : 80,000x5% = 4,000 원&nbsp;
						</p>
						<p>
							지급 &nbsp;받으신 페이백 롤링&nbsp;<br>
							 스포츠100%/스포츠 이외 다른게임 전부 300%
						</p>
						<p>
							페이백 버튼 클릭하시면 자동으로 지급 되시는점 참고 바랍니다
						</p>
						<p>
							&nbsp;주 2회 입금 이상자만 참여 가능 합니다
						</p>
						<p>
							지급 되신 페이백금액의 최대 환전 금액은 10배이니 이용에 차질없게 참고하여 이용해주시기 바랍니다.
						</p>
						<p>
							1~2레벨 - 최대지급액 100만원<br>
							 3~4레벨 - 최대지급액 150만원<br>
							 vip 1~2레벨 - 최대지급액 200만원<br>
							 vip 3레벨 - 최대지급액300만원<br>
							 레벨 등업에 따라 지급액 한도가 변경되었으니 많은 참여 바랍니다
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 히어로를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17716287">
					</td>
					<td class="memo_no">
						608
					</td>
					<td class="open_memo memo_content" data-idx="17716287" data-i="608">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-05 20:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="608">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17682885">
					</td>
					<td class="memo_no">
						607
					</td>
					<td class="open_memo memo_content" data-idx="17682885" data-i="607">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-05 16:53
					</td>
				</tr>
				<tr class="dspn ans" data-i="607">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17650128">
					</td>
					<td class="memo_no">
						606
					</td>
					<td class="open_memo memo_content" data-idx="17650128" data-i="606">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-05 16:53
					</td>
				</tr>
				<tr class="dspn ans" data-i="606">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17617333">
					</td>
					<td class="memo_no">
						605
					</td>
					<td class="open_memo memo_content" data-idx="17617333" data-i="605">
						 &nbsp;&lt;카지노 연패 이벤트&gt; 오픈
					</td>
					<td class="memo_date">
						08-05 13:15
					</td>
				</tr>
				<tr class="dspn ans" data-i="605">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp;&lt;카지노 연패 이벤트&gt; 오픈
						</p>
						<p>
							<br>
							 카지노 이용 회원분들을 위한 이벤트를 준비하였습니다
						</p>
						<p>
							최소베팅 금액 10만원부터 참여가능한 이벤트입니다.
						</p>
						<p>
							ex)에볼루션 스피드바카라 내역으로만 참여가능합니다.<br>
							 1일 1회 참여가능&nbsp;
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17584570">
					</td>
					<td class="memo_no">
						604
					</td>
					<td class="open_memo memo_content" data-idx="17584570" data-i="604">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-05 00:14
					</td>
				</tr>
				<tr class="dspn ans" data-i="604">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17551837">
					</td>
					<td class="memo_no">
						603
					</td>
					<td class="open_memo memo_content" data-idx="17551837" data-i="603">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-05 00:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="603">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17519099">
					</td>
					<td class="memo_no">
						602
					</td>
					<td class="open_memo memo_content" data-idx="17519099" data-i="602">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-04 18:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="602">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17486375">
					</td>
					<td class="memo_no">
						601
					</td>
					<td class="open_memo memo_content" data-idx="17486375" data-i="601">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-04 18:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="601">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17452778">
					</td>
					<td class="memo_no">
						600
					</td>
					<td class="open_memo memo_content" data-idx="17452778" data-i="600">
						 ★보스 전 회원&nbsp;입금계좌 변경 안�
					</td>
					<td class="memo_date">
						08-04 13:19
					</td>
				</tr>
				<tr class="dspn ans" data-i="600">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 전 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17420053">
					</td>
					<td class="memo_no">
						599
					</td>
					<td class="open_memo memo_content" data-idx="17420053" data-i="599">
						 ★보스 전 회원&nbsp;입금계좌 변경 안�
					</td>
					<td class="memo_date">
						08-04 13:19
					</td>
				</tr>
				<tr class="dspn ans" data-i="599">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 전 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17387328">
					</td>
					<td class="memo_no">
						598
					</td>
					<td class="open_memo memo_content" data-idx="17387328" data-i="598">
						 ★ 농협/주식회사비와이장 해당 계좌
					</td>
					<td class="memo_date">
						08-04 13:18
					</td>
				</tr>
				<tr class="dspn ans" data-i="598">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/주식회사비와이장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17354569">
					</td>
					<td class="memo_no">
						597
					</td>
					<td class="open_memo memo_content" data-idx="17354569" data-i="597">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-04 12:09
					</td>
				</tr>
				<tr class="dspn ans" data-i="597">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17321844">
					</td>
					<td class="memo_no">
						596
					</td>
					<td class="open_memo memo_content" data-idx="17321844" data-i="596">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-04 11:49
					</td>
				</tr>
				<tr class="dspn ans" data-i="596">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17289119">
					</td>
					<td class="memo_no">
						595
					</td>
					<td class="open_memo memo_content" data-idx="17289119" data-i="595">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-04 11:49
					</td>
				</tr>
				<tr class="dspn ans" data-i="595">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17256394">
					</td>
					<td class="memo_no">
						594
					</td>
					<td class="open_memo memo_content" data-idx="17256394" data-i="594">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-04 11:49
					</td>
				</tr>
				<tr class="dspn ans" data-i="594">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17223669">
					</td>
					<td class="memo_no">
						593
					</td>
					<td class="open_memo memo_content" data-idx="17223669" data-i="593">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-04 11:35
					</td>
				</tr>
				<tr class="dspn ans" data-i="593">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17190944">
					</td>
					<td class="memo_no">
						592
					</td>
					<td class="open_memo memo_content" data-idx="17190944" data-i="592">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-04 11:33
					</td>
				</tr>
				<tr class="dspn ans" data-i="592">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17158218">
					</td>
					<td class="memo_no">
						591
					</td>
					<td class="open_memo memo_content" data-idx="17158218" data-i="591">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-04 04:23
					</td>
				</tr>
				<tr class="dspn ans" data-i="591">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17125495">
					</td>
					<td class="memo_no">
						590
					</td>
					<td class="open_memo memo_content" data-idx="17125495" data-i="590">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-04 00:16
					</td>
				</tr>
				<tr class="dspn ans" data-i="590">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17092779">
					</td>
					<td class="memo_no">
						589
					</td>
					<td class="open_memo memo_content" data-idx="17092779" data-i="589">
						 안녕하세요 회원님들 운영진입니다.
					</td>
					<td class="memo_date">
						08-04 00:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="589">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들 운영진입니다.
						</p>
						<p>
							&nbsp;프리스핀(슬롯) 이벤트
						</p>
						<p>
							‼️매주 일요일 프리스핀 DAY 이벤트 안내 드립니다 ‼️
						</p>
						<p>
							이번 프리스핀 게임사는 &lt;플레이앤고&gt; 입니다
						</p>
						<p>
							매주 금요일, 토요일 합산 입금액(슬롯) 기준&nbsp;
						</p>
						<p>
							합 입금 10만원 이상 3만 포인트 지급
						</p>
						<p>
							합 입금 50만원 이상 7만 포인트 지급
						</p>
						<p>
							합 입금 100만원 이상 10만 포인트 지급
						</p>
						<p>
							합 입금 200만원 이상 15만 포인트 지급
						</p>
						<p>
							합 입금 300만원 이상 20만 포인트 지급
						</p>
						<p>
							&nbsp;지정된 게임 이외 게임 이용 시 모든 금액 몰수처리
						</p>
						<p>
							&nbsp;포인트는 단독 사용만 가능하며 롤링 300% / 최대 출금 5배 입니다.
						</p>
						<p>
							&nbsp;지정 게임사 긴급 점검으로 인하여 부득이하게 변경 될 수 있습니다.
						</p>
						<p>
							&nbsp;지정 게임사는 매주 변경되니 채널방 공지 참고 해주시면 감사하겠습니다.
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17060054">
					</td>
					<td class="memo_no">
						588
					</td>
					<td class="open_memo memo_content" data-idx="17060054" data-i="588">
						 ★ 농협/최선우장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						08-03 16:23
					</td>
				</tr>
				<tr class="dspn ans" data-i="588">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/최선우장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="17027348">
					</td>
					<td class="memo_no">
						587
					</td>
					<td class="open_memo memo_content" data-idx="17027348" data-i="587">
						 [레볼루션 토너먼트 변경 안내]&nbsp;
					</td>
					<td class="memo_date">
						08-03 14:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="587">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							[레볼루션 토너먼트 변경 안내]&nbsp;
						</p>
						<p>
							안녕하세요 레볼루션 고객센터입니다.<br>
							 토너먼트 상금 및 시간대 변경 안내드립니다.
						</p>
						<p>
							<br>
							 13시 : 스페셜토너먼트(300만GTD)<br>
							 - 참여금액: 30,000<br>
							 - 블라인드업 : 13min<br>
							 - 지급 칩 : 40,000<br>
							 - 리엔트리 : 제한없음
						</p>
						<p>
							17시 : 무료토너먼트(100/300만 상금)<br>
							 - 참여금액: 무료<br>
							 - 블라인드업 : 10min<br>
							 - 지급 칩 : 40,000<br>
							 - 리엔트리 : 없음
						</p>
						<p>
							20시 : 하이롤러토너먼트(800만GTD)<br>
							 - 참여금액: 80,000<br>
							 - 블라인드업 : 13min<br>
							 - 지급 칩 : 30,000<br>
							 - 리엔트리 : 제한없음
						</p>
						<p>
							23시 : 스페셜토너먼트(500만GTD)<br>
							 - 참여금액: 50,000<br>
							 - 블라인드업 : 13min<br>
							 - 지급 칩 : 30,000<br>
							 - 리엔트리 : 제한없음
						</p>
						<p>
							금일 부터 위 안내드린 토너먼트로 개최되오니<br>
							 참고하여 주시길 바랍니다.
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16994646">
					</td>
					<td class="memo_no">
						586
					</td>
					<td class="open_memo memo_content" data-idx="16994646" data-i="586">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-03 13:48
					</td>
				</tr>
				<tr class="dspn ans" data-i="586">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16961946">
					</td>
					<td class="memo_no">
						585
					</td>
					<td class="open_memo memo_content" data-idx="16961946" data-i="585">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-03 13:43
					</td>
				</tr>
				<tr class="dspn ans" data-i="585">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16929192">
					</td>
					<td class="memo_no">
						584
					</td>
					<td class="open_memo memo_content" data-idx="16929192" data-i="584">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						08-02 15:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="584">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 구글 게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16896478">
					</td>
					<td class="memo_no">
						583
					</td>
					<td class="open_memo memo_content" data-idx="16896478" data-i="583">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-02 11:48
					</td>
				</tr>
				<tr class="dspn ans" data-i="583">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16863806">
					</td>
					<td class="memo_no">
						582
					</td>
					<td class="open_memo memo_content" data-idx="16863806" data-i="582">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-02 11:48
					</td>
				</tr>
				<tr class="dspn ans" data-i="582">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16831134">
					</td>
					<td class="memo_no">
						581
					</td>
					<td class="open_memo memo_content" data-idx="16831134" data-i="581">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-02 11:44
					</td>
				</tr>
				<tr class="dspn ans" data-i="581">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16798456">
					</td>
					<td class="memo_no">
						580
					</td>
					<td class="open_memo memo_content" data-idx="16798456" data-i="580">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-02 00:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="580">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16765798">
					</td>
					<td class="memo_no">
						579
					</td>
					<td class="open_memo memo_content" data-idx="16765798" data-i="579">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-01 19:39
					</td>
				</tr>
				<tr class="dspn ans" data-i="579">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16733129">
					</td>
					<td class="memo_no">
						578
					</td>
					<td class="open_memo memo_content" data-idx="16733129" data-i="578">
						 &nbsp;[계좌안내 절차 변경안내]
					</td>
					<td class="memo_date">
						08-01 18:22
					</td>
				</tr>
				<tr class="dspn ans" data-i="578">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">&nbsp;[계좌안내 절차 변경안내]</span>
						</p>
						<p>
							<span style="color:#f1c40f">현시간부로 계좌안내 절차가 변경되었음을 알려드립니다 .</span>
						</p>
						<p>
							<span style="color:#f1c40f">계좌문의 시 팝업창안내와함께 계좌번호복사 클릭 시 자동적으로 복사가 됩니다.<br>
							 회원님들께서는 계좌문의 후 입금 시 복사기능을통해 입금 후 충전신청 해주시길 바랍니다.</span>
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16700489">
					</td>
					<td class="memo_no">
						577
					</td>
					<td class="open_memo memo_content" data-idx="16700489" data-i="577">
						 ★ 농협/최선우장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						08-01 18:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="577">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/최선우장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16667847">
					</td>
					<td class="memo_no">
						576
					</td>
					<td class="open_memo memo_content" data-idx="16667847" data-i="576">
						 ★ 농협/최선우장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						08-01 17:51
					</td>
				</tr>
				<tr class="dspn ans" data-i="576">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/최선우장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16635202">
					</td>
					<td class="memo_no">
						575
					</td>
					<td class="open_memo memo_content" data-idx="16635202" data-i="575">
						 &nbsp;[계좌안내 절차 변경안내]
					</td>
					<td class="memo_date">
						08-01 16:10
					</td>
				</tr>
				<tr class="dspn ans" data-i="575">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">&nbsp;[계좌안내 절차 변경안내]</span>
						</p>
						<p>
							<span style="color:#f1c40f">현시간부로 계좌안내 절차가 변경되었음을 알려드립니다 .</span>
						</p>
						<p>
							<span style="color:#f1c40f">계좌문의 시 팝업창안내와함께 계좌번호복사 클릭 시 자동적으로 복사가 됩니다.<br>
							 회원님들께서는 계좌문의 후 입금 시 복사기능을통해 입금 후 충전신청 해주시길 바랍니다.</span>
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16602524">
					</td>
					<td class="memo_no">
						574
					</td>
					<td class="open_memo memo_content" data-idx="16602524" data-i="574">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						08-01 14:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="574">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16569895">
					</td>
					<td class="memo_no">
						573
					</td>
					<td class="open_memo memo_content" data-idx="16569895" data-i="573">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-01 14:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="573">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16537259">
					</td>
					<td class="memo_no">
						572
					</td>
					<td class="open_memo memo_content" data-idx="16537259" data-i="572">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-01 02:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="572">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16504652">
					</td>
					<td class="memo_no">
						571
					</td>
					<td class="open_memo memo_content" data-idx="16504652" data-i="571">
						 8월한정 여름 휴가비 이벤트
					</td>
					<td class="memo_date">
						08-01 01:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="571">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							8월한정 여름 휴가비 이벤트
						</p>
						<p>
							안녕하세요 보스&nbsp;운영진입니다!
						</p>
						<p>
							<br>
							<br>
							 스포츠 5만원이상 20배 조합배팅 적중 시&nbsp;
						</p>
						<p>
							<br>
							 즉시출금 가능한 50만 포인트 지급
						</p>
						<p>
							주의사항: 해당 금액은 즉시 출금 가능<br>
							 단 단독 포인트 사용 시 최대 출금 5배
						</p>
						<p>
							해당 이벤트 충족 시 배팅내역 도메인 내 고객센터로 배팅내역첨부하여 8월한정이벤트 참여 문의 시 확인 후 포인트 지급 도와드릴 예정이니 참고바랍니다
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 우측하단 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16472049">
					</td>
					<td class="memo_no">
						570
					</td>
					<td class="open_memo memo_content" data-idx="16472049" data-i="570">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						08-01 01:24
					</td>
				</tr>
				<tr class="dspn ans" data-i="570">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16439452">
					</td>
					<td class="memo_no">
						569
					</td>
					<td class="open_memo memo_content" data-idx="16439452" data-i="569">
						 현시간부로 계좌안내 절차가 변경되�
					</td>
					<td class="memo_date">
						07-31 22:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="569">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">현시간부로 계좌안내 절차가 변경되었음을 알려드립니다 .</span>
						</p>
						<p>
							<span style="color:#f1c40f">계좌문의 시 팝업창안내와함께 계좌번호복사 클릭 시 자동적으로 복사가 됩니다.<br>
							 회원님들께서는 계좌문의 후 입금 시 복사기능을통해 입금 후 충전신청 해주시길 바랍니다.</span>
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16406863">
					</td>
					<td class="memo_no">
						568
					</td>
					<td class="open_memo memo_content" data-idx="16406863" data-i="568">
						 ★ 농협/정희철장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-31 17:53
					</td>
				</tr>
				<tr class="dspn ans" data-i="568">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/정희철장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16374293">
					</td>
					<td class="memo_no">
						567
					</td>
					<td class="open_memo memo_content" data-idx="16374293" data-i="567">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-31 16:42
					</td>
				</tr>
				<tr class="dspn ans" data-i="567">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16341685">
					</td>
					<td class="memo_no">
						566
					</td>
					<td class="open_memo memo_content" data-idx="16341685" data-i="566">
						 ★ 농협/정희철장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-30 14:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="566">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/정희철장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16309171">
					</td>
					<td class="memo_no">
						565
					</td>
					<td class="open_memo memo_content" data-idx="16309171" data-i="565">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-30 13:11
					</td>
				</tr>
				<tr class="dspn ans" data-i="565">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16276607">
					</td>
					<td class="memo_no">
						564
					</td>
					<td class="open_memo memo_content" data-idx="16276607" data-i="564">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-30 05:18
					</td>
				</tr>
				<tr class="dspn ans" data-i="564">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16244098">
					</td>
					<td class="memo_no">
						563
					</td>
					<td class="open_memo memo_content" data-idx="16244098" data-i="563">
						 계좌문의를 안하시고 입금해주신 회�
					</td>
					<td class="memo_date">
						07-30 05:18
					</td>
				</tr>
				<tr class="dspn ans" data-i="563">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							계좌문의를 안하시고 입금해주신 회원님들한테는 개별처리 제재할 예정이니
						</p>
						<p>
							입금전 계좌문의를 안하여 불이익을 보시지 않았으면합니다.
						</p>
						<p>
							입금 장은 수시로 변경되기 떄문에 참고 해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16211583">
					</td>
					<td class="memo_no">
						562
					</td>
					<td class="open_memo memo_content" data-idx="16211583" data-i="562">
						 ##보스 페이백 이벤트##
					</td>
					<td class="memo_date">
						07-30 00:13
					</td>
				</tr>
				<tr class="dspn ans" data-i="562">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##보스 페이백 이벤트##
						</p>
						<p>
							!!매주 화요일 마다 지난주 화요일 ~ 월요일의 입출금 차액 5% 를 지급 합니다 !!
						</p>
						<p>
							#페이백 계산방법
						</p>
						<p>
							@해당 주 총 입금액 10만원 해당 주 총 출금액 2만원 100,000 - 20,000=80,000&nbsp;
						</p>
						<p>
							@페이백 지급포인트 : 80,000x5% = 4,000 원&nbsp;
						</p>
						<p>
							-&nbsp; 지급 &nbsp;받으신 페이백 롤링&nbsp;<br>
							 스포츠100%/스포츠 이외 다른게임 전부 300%
						</p>
						<p>
							-&nbsp; 페이백 버튼 클릭하시면 자동으로 지급 되시는점 참고 바랍니다
						</p>
						<p>
							-&nbsp; 주 2회 입금 이상자만 참여 가능 합니다
						</p>
						<p>
							- 지급받은 페이백 금액에 최대 10배까지 환전 가능하니 이용에 차질없게 참고해주시기 바랍니다.&nbsp;
						</p>
						<p>
							@1~2레벨 - 최대지급액 100만원<br>
							 @3~4레벨 - 최대지급액 150만원<br>
							 @ vip 1~2레벨 - 최대지급액 200만원<br>
							 @ vip 3레벨 - 최대지급액300만원<br>
							 !!레벨 등업에 따라 지급액 한도가 변경되었으니 많은 참여 바랍니다!!
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요➕
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16179076">
					</td>
					<td class="memo_no">
						561
					</td>
					<td class="open_memo memo_content" data-idx="16179076" data-i="561">
						 ★ 농협/김민규장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-29 17:15
					</td>
				</tr>
				<tr class="dspn ans" data-i="561">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/김민규장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16146592">
					</td>
					<td class="memo_no">
						560
					</td>
					<td class="open_memo memo_content" data-idx="16146592" data-i="560">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-29 17:14
					</td>
				</tr>
				<tr class="dspn ans" data-i="560">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16114012">
					</td>
					<td class="memo_no">
						559
					</td>
					<td class="open_memo memo_content" data-idx="16114012" data-i="559">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-28 11:39
					</td>
				</tr>
				<tr class="dspn ans" data-i="559">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16081579">
					</td>
					<td class="memo_no">
						558
					</td>
					<td class="open_memo memo_content" data-idx="16081579" data-i="558">
						 ★ 농협/정희철장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-28 11:32
					</td>
				</tr>
				<tr class="dspn ans" data-i="558">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/정희철장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16049147">
					</td>
					<td class="memo_no">
						557
					</td>
					<td class="open_memo memo_content" data-idx="16049147" data-i="557">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-28 11:24
					</td>
				</tr>
				<tr class="dspn ans" data-i="557">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16016703">
					</td>
					<td class="memo_no">
						556
					</td>
					<td class="open_memo memo_content" data-idx="16016703" data-i="556">
						 ★ 농협/김민규장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-27 17:19
					</td>
				</tr>
				<tr class="dspn ans" data-i="556">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/김민규장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15984263">
					</td>
					<td class="memo_no">
						555
					</td>
					<td class="open_memo memo_content" data-idx="15984263" data-i="555">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-27 12:17
					</td>
				</tr>
				<tr class="dspn ans" data-i="555">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15951859">
					</td>
					<td class="memo_no">
						554
					</td>
					<td class="open_memo memo_content" data-idx="15951859" data-i="554">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-26 17:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="554">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15919507">
					</td>
					<td class="memo_no">
						553
					</td>
					<td class="open_memo memo_content" data-idx="15919507" data-i="553">
						 ★ 농협/정희철장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-26 16:38
					</td>
				</tr>
				<tr class="dspn ans" data-i="553">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/정희철장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15887110">
					</td>
					<td class="memo_no">
						552
					</td>
					<td class="open_memo memo_content" data-idx="15887110" data-i="552">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-26 08:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="552">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15854758">
					</td>
					<td class="memo_no">
						551
					</td>
					<td class="open_memo memo_content" data-idx="15854758" data-i="551">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-25 21:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="551">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15822430">
					</td>
					<td class="memo_no">
						550
					</td>
					<td class="open_memo memo_content" data-idx="15822430" data-i="550">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-25 20:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="550">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15790102">
					</td>
					<td class="memo_no">
						549
					</td>
					<td class="open_memo memo_content" data-idx="15790102" data-i="549">
						 ★ 농협/정희철장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-25 19:53
					</td>
				</tr>
				<tr class="dspn ans" data-i="549">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/정희철장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15757774">
					</td>
					<td class="memo_no">
						548
					</td>
					<td class="open_memo memo_content" data-idx="15757774" data-i="548">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						07-25 17:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="548">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							농협/정희철장 현시간부로 입금 가능합니다^^
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							입금하시기전 계좌문의는 필수 입니다 ^^
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15725451">
					</td>
					<td class="memo_no">
						547
					</td>
					<td class="open_memo memo_content" data-idx="15725451" data-i="547">
						 ★ 농협/정희철장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-25 17:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="547">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/정희철장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15693126">
					</td>
					<td class="memo_no">
						546
					</td>
					<td class="open_memo memo_content" data-idx="15693126" data-i="546">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-25 12:24
					</td>
				</tr>
				<tr class="dspn ans" data-i="546">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15660809">
					</td>
					<td class="memo_no">
						545
					</td>
					<td class="open_memo memo_content" data-idx="15660809" data-i="545">
						 ★ 카뱅/박효빈장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-25 12:10
					</td>
				</tr>
				<tr class="dspn ans" data-i="545">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카뱅/박효빈장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15628491">
					</td>
					<td class="memo_no">
						544
					</td>
					<td class="open_memo memo_content" data-idx="15628491" data-i="544">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						07-25 05:42
					</td>
				</tr>
				<tr class="dspn ans" data-i="544">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15596186">
					</td>
					<td class="memo_no">
						543
					</td>
					<td class="open_memo memo_content" data-idx="15596186" data-i="543">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-24 23:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="543">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15563898">
					</td>
					<td class="memo_no">
						542
					</td>
					<td class="open_memo memo_content" data-idx="15563898" data-i="542">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-24 20:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="542">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15531614">
					</td>
					<td class="memo_no">
						541
					</td>
					<td class="open_memo memo_content" data-idx="15531614" data-i="541">
						 ★ 농협/정희철장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-23 18:41
					</td>
				</tr>
				<tr class="dspn ans" data-i="541">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/정희철장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15499396">
					</td>
					<td class="memo_no">
						540
					</td>
					<td class="open_memo memo_content" data-idx="15499396" data-i="540">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-23 18:33
					</td>
				</tr>
				<tr class="dspn ans" data-i="540">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15467176">
					</td>
					<td class="memo_no">
						539
					</td>
					<td class="open_memo memo_content" data-idx="15467176" data-i="539">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						07-23 16:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="539">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 로투스,게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15434924">
					</td>
					<td class="memo_no">
						538
					</td>
					<td class="open_memo memo_content" data-idx="15434924" data-i="538">
						 ##미니게임 결과처리 정상화 안내 ##
					</td>
					<td class="memo_date">
						07-23 00:49
					</td>
				</tr>
				<tr class="dspn ans" data-i="538">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##미니게임 결과처리 정상화 안내 ##
						</p>
						<p>
							현재 미니게임 결과처리 정상화 처리 되고있음을 안내드립니다.
						</p>
						<p>
							이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 및 라이브 쳇 또는 카카오톡으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15402732">
					</td>
					<td class="memo_no">
						537
					</td>
					<td class="open_memo memo_content" data-idx="15402732" data-i="537">
						 안녕하세요 회원님들 운영진입니다.
					</td>
					<td class="memo_date">
						07-23 00:24
					</td>
				</tr>
				<tr class="dspn ans" data-i="537">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들 운영진입니다.
						</p>
						<p>
							미니게임 결과처리 지연안내&nbsp;
						</p>
						<p>
							현재 미니게임 일부 게임들이 무한로딩 및 접속장애 현상 오류, 결과처리 지연이 되고 있습니다.
						</p>
						<p>
							확인되는 추가내용이 있는대로&nbsp;<br>
							 공지 안내드릴 수 있도록 하겠습니다.<br>
							 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 및 라이브 쳇 또는 카카오톡으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15370542">
					</td>
					<td class="memo_no">
						536
					</td>
					<td class="open_memo memo_content" data-idx="15370542" data-i="536">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						07-23 00:23
					</td>
				</tr>
				<tr class="dspn ans" data-i="536">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							현재 미니게임 결과처리 지연되고 있으며 빠르게 확인후 처리도와드리겠습니다
						</p>
						<p>
							이용에 불편드려 죄송합니다
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15338351">
					</td>
					<td class="memo_no">
						535
					</td>
					<td class="open_memo memo_content" data-idx="15338351" data-i="535">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-22 23:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="535">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15306161">
					</td>
					<td class="memo_no">
						534
					</td>
					<td class="open_memo memo_content" data-idx="15306161" data-i="534">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-22 23:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="534">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15273968">
					</td>
					<td class="memo_no">
						533
					</td>
					<td class="open_memo memo_content" data-idx="15273968" data-i="533">
						 ★ 카뱅/박효빈장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-22 21:08
					</td>
				</tr>
				<tr class="dspn ans" data-i="533">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카뱅/박효빈장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15241787">
					</td>
					<td class="memo_no">
						532
					</td>
					<td class="open_memo memo_content" data-idx="15241787" data-i="532">
						 ★ 카카오뱅크/박효빈장 해당 계좌 입
					</td>
					<td class="memo_date">
						07-22 20:31
					</td>
				</tr>
				<tr class="dspn ans" data-i="532">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카카오뱅크/박효빈장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15209608">
					</td>
					<td class="memo_no">
						531
					</td>
					<td class="open_memo memo_content" data-idx="15209608" data-i="531">
						 ★ 카뱅/박효빈장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-22 18:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="531">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카뱅/박효빈장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15177436">
					</td>
					<td class="memo_no">
						530
					</td>
					<td class="open_memo memo_content" data-idx="15177436" data-i="530">
						 ★ 카뱅/박효빈장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-22 17:42
					</td>
				</tr>
				<tr class="dspn ans" data-i="530">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카뱅/박효빈장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15145264">
					</td>
					<td class="memo_no">
						529
					</td>
					<td class="open_memo memo_content" data-idx="15145264" data-i="529">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-22 17:28
					</td>
				</tr>
				<tr class="dspn ans" data-i="529">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15113047">
					</td>
					<td class="memo_no">
						528
					</td>
					<td class="open_memo memo_content" data-idx="15113047" data-i="528">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-21 23:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="528">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15080894">
					</td>
					<td class="memo_no">
						527
					</td>
					<td class="open_memo memo_content" data-idx="15080894" data-i="527">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-21 18:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="527">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15048698">
					</td>
					<td class="memo_no">
						526
					</td>
					<td class="open_memo memo_content" data-idx="15048698" data-i="526">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						07-21 00:40
					</td>
				</tr>
				<tr class="dspn ans" data-i="526">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							현재 현지 인터넷 불안정으로 인해 접속이 불안정한 상태입니다
						</p>
						<p>
							정상화될 시 재안내해드리겠습니다 이용에 불편을 드려 죄송합니다<br>
							 &nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="15016596">
					</td>
					<td class="memo_no">
						525
					</td>
					<td class="open_memo memo_content" data-idx="15016596" data-i="525">
						 ## 보스 프리스핀(슬롯) 이벤트 ##
					</td>
					<td class="memo_date">
						07-21 00:13
					</td>
				</tr>
				<tr class="dspn ans" data-i="525">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 보스 프리스핀(슬롯) 이벤트 ##
						</p>
						<p>
							!!매주 일요일 프리스핀 DAY 이벤트 안내 드립니다!!
						</p>
						<p>
							@이번 프리스핀 게임사는 &lt;프라그마틱&gt; 입니다@
						</p>
						<p>
							1 매주 금요일, 토요일 합산 입금액(슬롯) 기준&nbsp;
						</p>
						<p>
							2 합 입금 10만원 이상 3만 포인트 지급
						</p>
						<p>
							3 합 입금 50만원 이상 7만 포인트 지급
						</p>
						<p>
							4 합 입금 100만원 이상 10만 포인트 지급
						</p>
						<p>
							5 합 입금 200만원 이상 15만 포인트 지급
						</p>
						<p>
							6 합 입금 300만원 이상 20만 포인트 지급
						</p>
						<p>
							&nbsp;지정된 게임 이외 게임 이용 시 모든 금액 몰수처리
						</p>
						<p>
							&nbsp;포인트는 단독 사용만 가능하며 롤링 300% / 최대 출금 5배 입니다.
						</p>
						<p>
							&nbsp;지정 게임사 긴급 점검으로 인하여 부득이하게 변경 될 수 있습니다.
						</p>
						<p>
							&nbsp;지정 게임사는 매주 변경되니 채널방 공지 참고 해주시면 감사하겠습니다.
						</p>
						<p>
							@ 자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							@ 많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14984494">
					</td>
					<td class="memo_no">
						524
					</td>
					<td class="open_memo memo_content" data-idx="14984494" data-i="524">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-21 00:08
					</td>
				</tr>
				<tr class="dspn ans" data-i="524">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14952356">
					</td>
					<td class="memo_no">
						523
					</td>
					<td class="open_memo memo_content" data-idx="14952356" data-i="523">
						 ★ 카뱅/박효빈장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-20 13:46
					</td>
				</tr>
				<tr class="dspn ans" data-i="523">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카뱅/박효빈장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 절대 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14920289">
					</td>
					<td class="memo_no">
						522
					</td>
					<td class="open_memo memo_content" data-idx="14920289" data-i="522">
						 ★ **카뱅/박효빈장 해당 계좌 입금 불
					</td>
					<td class="memo_date">
						07-20 13:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="522">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ **카뱅/박효빈장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14888222">
					</td>
					<td class="memo_no">
						521
					</td>
					<td class="open_memo memo_content" data-idx="14888222" data-i="521">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-20 13:11
					</td>
				</tr>
				<tr class="dspn ans" data-i="521">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14851823">
					</td>
					<td class="memo_no">
						520
					</td>
					<td class="open_memo memo_content" data-idx="14851823" data-i="520">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-18 16:40
					</td>
				</tr>
				<tr class="dspn ans" data-i="520">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14819772">
					</td>
					<td class="memo_no">
						519
					</td>
					<td class="open_memo memo_content" data-idx="14819772" data-i="519">
						 ★ 카뱅/박효빈장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-18 16:22
					</td>
				</tr>
				<tr class="dspn ans" data-i="519">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카뱅/박효빈장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14787581">
					</td>
					<td class="memo_no">
						518
					</td>
					<td class="open_memo memo_content" data-idx="14787581" data-i="518">
						 안녕하세요 회원님들 운영진입니다.
					</td>
					<td class="memo_date">
						07-16 00:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="518">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들 운영진입니다.
						</p>
						<p>
							페이백 이벤트
						</p>
						<p>
							‼️매주 화요일 마다 지난주 화요일 ~ 월요일의 입출금 차액 5% 를 지급 합니다 ‼️
						</p>
						<p>
							페이백 계산방법
						</p>
						<p>
							해당 주 총 입금액 10만원 해당 주 총 출금액 2만원 100,000 - 20,000=80,000&nbsp;
						</p>
						<p>
							페이백 지급포인트 : 80,000x5% = 4,000 원&nbsp;
						</p>
						<p>
							&nbsp;지급 &nbsp;받으신 페이백 롤링&nbsp;<br>
							 스포츠100%/스포츠 이외 다른게임 전부 300%
						</p>
						<p>
							&nbsp;페이백 버튼 클릭하시면 자동으로 지급 되시는점 참고 바랍니다
						</p>
						<p>
							&nbsp;주 2회 입금 이상자만 참여 가능 합니다
						</p>
						<p>
							지급받은 페이백 금액에 최대 10배까지 환전 가능하니 이용에 차질없게 참고해주시기 바랍니다.&nbsp;
						</p>
						<p>
							1~2레벨 - 최대지급액 100만원<br>
							 3~4레벨 - 최대지급액 150만원<br>
							 vip 1~2레벨 - 최대지급액 200만원<br>
							 vip 3레벨 - 최대지급액300만원<br>
							 ‼️레벨 등업에 따라 지급액 한도가 변경되었으니 많은 참여 바랍니다‼️
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14755614">
					</td>
					<td class="memo_no">
						517
					</td>
					<td class="open_memo memo_content" data-idx="14755614" data-i="517">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						07-15 12:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="517">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 로투스게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14722896">
					</td>
					<td class="memo_no">
						516
					</td>
					<td class="open_memo memo_content" data-idx="14722896" data-i="516">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-15 00:27
					</td>
				</tr>
				<tr class="dspn ans" data-i="516">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14691040">
					</td>
					<td class="memo_no">
						515
					</td>
					<td class="open_memo memo_content" data-idx="14691040" data-i="515">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-15 00:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="515">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14659187">
					</td>
					<td class="memo_no">
						514
					</td>
					<td class="open_memo memo_content" data-idx="14659187" data-i="514">
						 ## 농협은행 정기점검 안내 ##
					</td>
					<td class="memo_date">
						07-14 23:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="514">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">## 농협은행 정기점검 안내 ##</span>
						</p>
						<p>
							14일 23:55~15일 04:00 농협은행 점검 있을 예정으로 입출금이 제한될 수 있는점 안내드립니다.
						</p>
						<p>
							농협은행 사용하고 계신 회원분들은 입출금계좌 변경 후 이용해주시면 되겠습니다!^^
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14627334">
					</td>
					<td class="memo_no">
						513
					</td>
					<td class="open_memo memo_content" data-idx="14627334" data-i="513">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-14 23:58
					</td>
				</tr>
				<tr class="dspn ans" data-i="513">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14595478">
					</td>
					<td class="memo_no">
						512
					</td>
					<td class="open_memo memo_content" data-idx="14595478" data-i="512">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-14 17:42
					</td>
				</tr>
				<tr class="dspn ans" data-i="512">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14563640">
					</td>
					<td class="memo_no">
						511
					</td>
					<td class="open_memo memo_content" data-idx="14563640" data-i="511">
						 ★ 카뱅/김태형장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-14 17:34
					</td>
				</tr>
				<tr class="dspn ans" data-i="511">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카뱅/김태형장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14530940">
					</td>
					<td class="memo_no">
						510
					</td>
					<td class="open_memo memo_content" data-idx="14530940" data-i="510">
						 ## 보스 프리스핀(슬롯) 이벤트 ##
					</td>
					<td class="memo_date">
						07-14 00:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="510">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 보스 프리스핀(슬롯) 이벤트 ##
						</p>
						<p>
							매주 일요일 프리스핀 DAY 이벤트 안내 드립니다&nbsp;
						</p>
						<p>
							@이번 프리스핀 게임사는 &lt;플레이앤고&gt; 입니다@
						</p>
						<p>
							1 매주 금요일, 토요일 합산 입금액(슬롯) 기준&nbsp;
						</p>
						<p>
							2 합 입금 10만원 이상 3만 포인트 지급
						</p>
						<p>
							3 합 입금 50만원 이상 7만 포인트 지급
						</p>
						<p>
							4 합 입금 100만원 이상 10만 포인트 지급
						</p>
						<p>
							5 합 입금 200만원 이상 15만 포인트 지급
						</p>
						<p>
							6 합 입금 300만원 이상 20만 포인트 지급
						</p>
						<p>
							&nbsp;@지정된 게임 이외 게임 이용 시 모든 금액 몰수처리
						</p>
						<p>
							&nbsp;@포인트는 단독 사용만 가능하며 롤링 300% / 최대 출금 5배 입니다.
						</p>
						<p>
							&nbsp;@지정 게임사 긴급 점검으로 인하여 부득이하게 변경 될 수 있습니다.
						</p>
						<p>
							&nbsp;@지정 게임사는 매주 변경되니 채널방 공지 참고 해주시면 감사하겠습니다.
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14499143">
					</td>
					<td class="memo_no">
						509
					</td>
					<td class="open_memo memo_content" data-idx="14499143" data-i="509">
						 ##레볼루션 점검 종료 안내## 안녕하
					</td>
					<td class="memo_date">
						07-13 19:41
					</td>
				</tr>
				<tr class="dspn ans" data-i="509">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##레볼루션 점검 종료 안내##<br>
							<br>
							 안녕하세요 보스 운영진입니다!
						</p>
						<p>
							현 시간부로 레볼루션 게임 이용 가능하신점 참고바랍니다.
						</p>
						<p>
							오늘도 보스를 찾아주셔서 감사합니다!
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14467357">
					</td>
					<td class="memo_no">
						508
					</td>
					<td class="open_memo memo_content" data-idx="14467357" data-i="508">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-13 17:55
					</td>
				</tr>
				<tr class="dspn ans" data-i="508">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14435523">
					</td>
					<td class="memo_no">
						507
					</td>
					<td class="open_memo memo_content" data-idx="14435523" data-i="507">
						 &nbsp; ##레볼루션 점검 안내##&nbsp; 안
					</td>
					<td class="memo_date">
						07-13 12:31
					</td>
				</tr>
				<tr class="dspn ans" data-i="507">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp; ##레볼루션 점검 안내##&nbsp;<br>
							<br>
							 안녕하세요 보스 운영진입니다!
						</p>
						<p>
							점검 일 : &nbsp;2024.07.13 (토) 1200~20:00 까지 (약 8시간)
						</p>
						<p>
							이용에 불편을 드려 죄송합니다. 해당 시간에는 게임 접속이 불가하니 참고 하여 이용에 차질없도록 해주시기 바랍니다.
						</p>
						<p>
							점검은 공지된 시간보다 빠르거나 지연될 수 있는 점 양해 부탁드립니다.<br>
							<br>
							 오늘도 보스를 찾아주셔서 감사합니다!
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14403754">
					</td>
					<td class="memo_no">
						506
					</td>
					<td class="open_memo memo_content" data-idx="14403754" data-i="506">
						 ## [레볼루션 점검 안내] ## 안녕하�
					</td>
					<td class="memo_date">
						07-13 12:08
					</td>
				</tr>
				<tr class="dspn ans" data-i="506">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## [레볼루션 점검 안내] ##<br>
							<br>
							<br>
							 안녕하세요 보스 운영진입니다!
						</p>
						<p>
							<br>
							 ## [레볼루션 점검 안내] ##
						</p>
						<p>
							점검 일 : &nbsp;2024.06.05 (수) 14:30 ~ 14:35 까지 (약 5분)
						</p>
						<p>
							이용에 불편을 드려 죄송합니다. 해당 시간에는 게임 접속이 불가하니 참고 하여 이용에 차질없도록 해주시기 바랍니다.
						</p>
						<p>
							점검은 공지된 시간보다 빠르거나 지연될 수 있는 점 양해 부탁드립니다.
						</p>
						<p>
							<br>
							 오늘도 보스를 찾아주셔서 감사합니다!
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14371987">
					</td>
					<td class="memo_no">
						505
					</td>
					<td class="open_memo memo_content" data-idx="14371987" data-i="505">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-13 01:28
					</td>
				</tr>
				<tr class="dspn ans" data-i="505">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14340187">
					</td>
					<td class="memo_no">
						504
					</td>
					<td class="open_memo memo_content" data-idx="14340187" data-i="504">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-12 13:46
					</td>
				</tr>
				<tr class="dspn ans" data-i="504">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14308470">
					</td>
					<td class="memo_no">
						503
					</td>
					<td class="open_memo memo_content" data-idx="14308470" data-i="503">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-12 00:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="503">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14276778">
					</td>
					<td class="memo_no">
						502
					</td>
					<td class="open_memo memo_content" data-idx="14276778" data-i="502">
						 ##미니게임 가상축구 긴급 점검 안내 #
					</td>
					<td class="memo_date">
						07-11 21:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="502">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##미니게임 가상축구 긴급 점검 안내 ##<br>
							<br>
							 안녕하세요 회원님들 보스 운영진입니다.
						</p>
						<p>
							현재 게임사 서버문제로 인해 업데이트 및 결과누락건이 다수 발견이되어 추 후 재공지 예정에 있습니다.
						</p>
						<p>
							해당 부분 게임사를 통해 확인중에 있습니다 .
						</p>
						<p>
							정상화시 재 안내 드리도록 하겠습니다
						</p>
						<p>
							&nbsp;이용에 불편을끼쳐드려 죄송합니다.^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14245100">
					</td>
					<td class="memo_no">
						501
					</td>
					<td class="open_memo memo_content" data-idx="14245100" data-i="501">
						 ##새로운 게임(미니게임) 슈어맨룰렛 �
					</td>
					<td class="memo_date">
						07-11 17:45
					</td>
				</tr>
				<tr class="dspn ans" data-i="501">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##새로운 게임(미니게임) 슈어맨룰렛 추가 안내&nbsp; ##<br>
							<br>
							 안녕하세요 !!보스 운영진입니다.
						</p>
						<p>
							현 시간부로 미니게임란 신규 게임이 추가되었습니다&nbsp;
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14213431">
					</td>
					<td class="memo_no">
						500
					</td>
					<td class="open_memo memo_content" data-idx="14213431" data-i="500">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-11 15:46
					</td>
				</tr>
				<tr class="dspn ans" data-i="500">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14181767">
					</td>
					<td class="memo_no">
						499
					</td>
					<td class="open_memo memo_content" data-idx="14181767" data-i="499">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-11 15:36
					</td>
				</tr>
				<tr class="dspn ans" data-i="499">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14150103">
					</td>
					<td class="memo_no">
						498
					</td>
					<td class="open_memo memo_content" data-idx="14150103" data-i="498">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-11 15:36
					</td>
				</tr>
				<tr class="dspn ans" data-i="498">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14118439">
					</td>
					<td class="memo_no">
						497
					</td>
					<td class="open_memo memo_content" data-idx="14118439" data-i="497">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-11 15:18
					</td>
				</tr>
				<tr class="dspn ans" data-i="497">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14086735">
					</td>
					<td class="memo_no">
						496
					</td>
					<td class="open_memo memo_content" data-idx="14086735" data-i="496">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-11 01:55
					</td>
				</tr>
				<tr class="dspn ans" data-i="496">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14054205">
					</td>
					<td class="memo_no">
						495
					</td>
					<td class="open_memo memo_content" data-idx="14054205" data-i="495">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						07-10 02:31
					</td>
				</tr>
				<tr class="dspn ans" data-i="495">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스&nbsp;운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던 기상스포츠 게임은&nbsp;긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!<br>
							 평생 주소 : 보스사이트<strong>.com</strong><br>
							 24시 텔레그램: @boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="14022616">
					</td>
					<td class="memo_no">
						494
					</td>
					<td class="open_memo memo_content" data-idx="14022616" data-i="494">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						07-10 01:10
					</td>
				</tr>
				<tr class="dspn ans" data-i="494">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 가상스포츠게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13990946">
					</td>
					<td class="memo_no">
						493
					</td>
					<td class="open_memo memo_content" data-idx="13990946" data-i="493">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-08 23:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="493">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13958041">
					</td>
					<td class="memo_no">
						492
					</td>
					<td class="open_memo memo_content" data-idx="13958041" data-i="492">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-08 15:47
					</td>
				</tr>
				<tr class="dspn ans" data-i="492">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13926465">
					</td>
					<td class="memo_no">
						491
					</td>
					<td class="open_memo memo_content" data-idx="13926465" data-i="491">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-08 00:10
					</td>
				</tr>
				<tr class="dspn ans" data-i="491">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13894954">
					</td>
					<td class="memo_no">
						490
					</td>
					<td class="open_memo memo_content" data-idx="13894954" data-i="490">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-07 20:32
					</td>
				</tr>
				<tr class="dspn ans" data-i="490">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13862561">
					</td>
					<td class="memo_no">
						489
					</td>
					<td class="open_memo memo_content" data-idx="13862561" data-i="489">
						 ## 보스 프리스핀(슬롯) 이벤트 ##
					</td>
					<td class="memo_date">
						07-07 00:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="489">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 보스 프리스핀(슬롯) 이벤트 ##
						</p>
						<p>
							매주 일요일 프리스핀 DAY 이벤트 안내 드립니다&nbsp;
						</p>
						<p>
							@이번 프리스핀 게임사는 CQ9 입니다@
						</p>
						<p>
							1 매주 금요일, 토요일 합산 입금액(슬롯) 기준&nbsp;
						</p>
						<p>
							2 합 입금 10만원 이상 3만 포인트 지급
						</p>
						<p>
							3 합 입금 50만원 이상 7만 포인트 지급
						</p>
						<p>
							4 합 입금 100만원 이상 10만 포인트 지급
						</p>
						<p>
							5 합 입금 200만원 이상 15만 포인트 지급
						</p>
						<p>
							6 합 입금 300만원 이상 20만 포인트 지급
						</p>
						<p>
							@ 지정된 게임 이외 게임 이용 시 모든 금액 몰수처리
						</p>
						<p>
							@ 포인트는 단독 사용만 가능하며 롤링 300% / 최대 출금 5배 입니다.
						</p>
						<p>
							@ 지정 게임사 긴급 점검으로 인하여 부득이하게 변경 될 수 있습니다.
						</p>
						<p>
							@ 지정 게임사는 매주 변경되니 채널방 공지 참고 해주시면 감사하겠습니다.
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13831110">
					</td>
					<td class="memo_no">
						488
					</td>
					<td class="open_memo memo_content" data-idx="13831110" data-i="488">
						 ★ 농협/정희철장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-06 15:22
					</td>
				</tr>
				<tr class="dspn ans" data-i="488">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 농협/정희철장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13798037">
					</td>
					<td class="memo_no">
						487
					</td>
					<td class="open_memo memo_content" data-idx="13798037" data-i="487">
						 ##누적충전 금액 및 횟수 이벤트 자동�
					</td>
					<td class="memo_date">
						07-06 00:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="487">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##누적충전 금액 및 횟수 이벤트 자동지급 안내##
						</p>
						<p>
							@ 금일부터 누적금액 및 누적충전횟수 이벤트는 자동지급 되게끔 설정하였습니다
						</p>
						<p>
							&nbsp;@ pc기준 우측 상단 / 모바일기준 메뉴란<br>
							 충횟수 / 충금액 버튼 클릭 시 조건에 맞추어 자동 지급 되오니 해당 이벤트 규정 및 주의사항 잘 확인 후 이벤트 참여 해주시면 감사하겠습니다 ^^
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13771650">
					</td>
					<td class="memo_no">
						486
					</td>
					<td class="open_memo memo_content" data-idx="13771650" data-i="486">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-05 00:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="486">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13741848">
					</td>
					<td class="memo_no">
						485
					</td>
					<td class="open_memo memo_content" data-idx="13741848" data-i="485">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-04 16:42
					</td>
				</tr>
				<tr class="dspn ans" data-i="485">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13709808">
					</td>
					<td class="memo_no">
						484
					</td>
					<td class="open_memo memo_content" data-idx="13709808" data-i="484">
						 ##에볼루션 연동오류 정상화 안내 공�
					</td>
					<td class="memo_date">
						07-04 11:47
					</td>
				</tr>
				<tr class="dspn ans" data-i="484">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##에볼루션 연동오류 정상화 안내 공지.##
						</p>
						<p>
							현재 정상화 되어 문제 없이 이용 가능합니다.
						</p>
						<p>
							해당 시간내 배팅처리에 문제가 발생한 내용이 있다면, 별도 개별 문의&nbsp;<br>
							 주시면 확인해드리도록 하겠습니다.
						</p>
						<p>
							감사합니다.
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13678652">
					</td>
					<td class="memo_no">
						483
					</td>
					<td class="open_memo memo_content" data-idx="13678652" data-i="483">
						 ## 에볼루션 연동 오류 안내 ##
					</td>
					<td class="memo_date">
						07-04 11:36
					</td>
				</tr>
				<tr class="dspn ans" data-i="483">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 에볼루션 연동 오류 안내 ##
						</p>
						<p>
							현재 에볼루션 게임사 측 연동 관련으로 오류가 확인되어&nbsp;<br>
							 지금 확인 중에 있습니다 .&nbsp;<br>
							 정상화시 다시 안내 드리도록 하겠습니다 .<br>
							 이용에 불편드려 죄송합니다 .
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13647491">
					</td>
					<td class="memo_no">
						482
					</td>
					<td class="open_memo memo_content" data-idx="13647491" data-i="482">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-04 00:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="482">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13616370">
					</td>
					<td class="memo_no">
						481
					</td>
					<td class="open_memo memo_content" data-idx="13616370" data-i="481">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-04 00:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="481">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13585247">
					</td>
					<td class="memo_no">
						480
					</td>
					<td class="open_memo memo_content" data-idx="13585247" data-i="480">
						 ★ 카뱅/황동연장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						07-03 20:52
					</td>
				</tr>
				<tr class="dspn ans" data-i="480">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카뱅/황동연장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13554146">
					</td>
					<td class="memo_no">
						479
					</td>
					<td class="open_memo memo_content" data-idx="13554146" data-i="479">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-03 20:48
					</td>
				</tr>
				<tr class="dspn ans" data-i="479">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13523046">
					</td>
					<td class="memo_no">
						478
					</td>
					<td class="open_memo memo_content" data-idx="13523046" data-i="478">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-03 20:48
					</td>
				</tr>
				<tr class="dspn ans" data-i="478">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13491901">
					</td>
					<td class="memo_no">
						477
					</td>
					<td class="open_memo memo_content" data-idx="13491901" data-i="477">
						 ##2024-07-03 (수요일) 카지노 점검 종료##
					</td>
					<td class="memo_date">
						07-03 10:09
					</td>
				</tr>
				<tr class="dspn ans" data-i="477">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##2024-07-03 (수요일) 카지노 점검 종료##<br>
							<br>
							 안녕하세요 !!보스 운영진입니다.
						</p>
						<p>
							카지노 이용 및 머니전환 가능하신점 참고 바랍니다‼️
						</p>
						<p>
							&nbsp;기다려주셔서 감사합니다.
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							평생도메인 : 보스사이트.com (https://%EB%B3%B4%EC%8A%A4%EC%82%AC%EC%9D%B4%ED%8A%B8.com)<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13460853">
					</td>
					<td class="memo_no">
						476
					</td>
					<td class="open_memo memo_content" data-idx="13460853" data-i="476">
						 ## 카지노 점검 연장 공지 전달드립니�
					</td>
					<td class="memo_date">
						07-03 10:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="476">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 카지노 점검 연장 공지 전달드립니다.##<br>
							<br>
							 안녕하세요 !!보스 운영진입니다.
						</p>
						<p>
							점검일시 : 2024-07-03 (수요일) &nbsp;<br>
							 04 : 00 &nbsp;~ &nbsp;11 : 00 시
						</p>
						<p>
							<br>
							 [ 정기 점검시간은 모든 게임 이용 제한됩니다. ]
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요➕
						</p>
						<p>
							서비스 안정화를 위한 조치인 만큼 많은 이해부탁드립니다
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13429798">
					</td>
					<td class="memo_no">
						475
					</td>
					<td class="open_memo memo_content" data-idx="13429798" data-i="475">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						07-03 03:42
					</td>
				</tr>
				<tr class="dspn ans" data-i="475">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							잠시후 04:00시부터 모든 카지노 게임사 점검예정이니 회원님들께서는 이 점 잊지마시고 참고 부탁드리겠습니다
						</p>
						<p>
							점검이 끝날 시간은 10:00입니다 점검이 끝나기전 자사에서 안내 예정에있을 예정입니다
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13398756">
					</td>
					<td class="memo_no">
						474
					</td>
					<td class="open_memo memo_content" data-idx="13398756" data-i="474">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						07-03 03:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="474">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							카지노 점검 예정시간 금일(수)&nbsp;04 : 00 &nbsp;~ &nbsp;10 : 00 시까지 점검 예정입니다.
						</p>
						<p>
							해당 점검 시간은 모든 카지노 게임 이용 불가하며,회원님들 카지노 알 충 환전도 안되오니,미리 미리 참고 해주시면 감사하겠습니다.
						</p>
						<p>
							점검이후 공지 안내 예정이니 이용에 양해 부탁드리겠습니다
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13367715">
					</td>
					<td class="memo_no">
						473
					</td>
					<td class="open_memo memo_content" data-idx="13367715" data-i="473">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						07-03 00:45
					</td>
				</tr>
				<tr class="dspn ans" data-i="473">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스&nbsp;운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던 로투스 및 엔트리 게임은&nbsp;긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!<br>
							 평생 주소 : 보스사이트<strong>.com</strong><br>
							 24시 텔레그램: @boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13336692">
					</td>
					<td class="memo_no">
						472
					</td>
					<td class="open_memo memo_content" data-idx="13336692" data-i="472">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						07-03 00:43
					</td>
				</tr>
				<tr class="dspn ans" data-i="472">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재&nbsp; 카지노 유형의 게임은 <span style="color:#d35400">긴급 점검 예정</span>에 있습니다.<br>
							 점검 예정&nbsp;시간은 &nbsp;04:00 ~ 10:00시까지 예정이며.,<u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 해당 점검 시간에는 모든 카지노 게임 이용이 불가합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13305668">
					</td>
					<td class="memo_no">
						471
					</td>
					<td class="open_memo memo_content" data-idx="13305668" data-i="471">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-03 00:07
					</td>
				</tr>
				<tr class="dspn ans" data-i="471">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13274645">
					</td>
					<td class="memo_no">
						470
					</td>
					<td class="open_memo memo_content" data-idx="13274645" data-i="470">
						 안녕하세요 !!보스 운영진입니다.
					</td>
					<td class="memo_date">
						07-02 22:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="470">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 !!보스 운영진입니다.
						</p>
						<p>
							<br>
							 로투스게임 / 엔트리게임 긴급점검 안내
						</p>
						<p>
							점검 사항 : &nbsp;게임사 영상송출
						</p>
						<p>
							&nbsp;이용에 불편을 드려 대단히 죄송합니다<br>
							 정상화 될 시 재공지 해드리겠습니다
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13243631">
					</td>
					<td class="memo_no">
						469
					</td>
					<td class="open_memo memo_content" data-idx="13243631" data-i="469">
						 항상 입금하시기 전 계좌문의 한 후 �
					</td>
					<td class="memo_date">
						07-02 15:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="469">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13212639">
					</td>
					<td class="memo_no">
						468
					</td>
					<td class="open_memo memo_content" data-idx="13212639" data-i="468">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						07-02 14:58
					</td>
				</tr>
				<tr class="dspn ans" data-i="468">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13181648">
					</td>
					<td class="memo_no">
						467
					</td>
					<td class="open_memo memo_content" data-idx="13181648" data-i="467">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-02 14:34
					</td>
				</tr>
				<tr class="dspn ans" data-i="467">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13150600">
					</td>
					<td class="memo_no">
						466
					</td>
					<td class="open_memo memo_content" data-idx="13150600" data-i="466">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-02 00:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="466">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13119647">
					</td>
					<td class="memo_no">
						465
					</td>
					<td class="open_memo memo_content" data-idx="13119647" data-i="465">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						07-01 17:49
					</td>
				</tr>
				<tr class="dspn ans" data-i="465">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13088739">
					</td>
					<td class="memo_no">
						464
					</td>
					<td class="open_memo memo_content" data-idx="13088739" data-i="464">
						 ## 로투스 게이밍 영상송출 정상화 ##
					</td>
					<td class="memo_date">
						07-01 17:39
					</td>
				</tr>
				<tr class="dspn ans" data-i="464">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 로투스 게이밍 영상송출 정상화 ##<br>
							 로투스 게이밍 영상송출 정상화로 확인되어 이용 가능한 점 알려드립니다.&nbsp;
						</p>
						<p>
							&nbsp;기다려주셔서 감사합니다.^^
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13057156">
					</td>
					<td class="memo_no">
						463
					</td>
					<td class="open_memo memo_content" data-idx="13057156" data-i="463">
						 로투스게임 긴급점검 안내
					</td>
					<td class="memo_date">
						07-01 11:24
					</td>
				</tr>
				<tr class="dspn ans" data-i="463">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							로투스게임 긴급점검 안내
						</p>
						<p>
							<br>
							 점검 사항 : 로투스 보수 작업
						</p>
						<p>
							<br>
							 이용에 불편을 드려 대단히 죄송합니다<br>
							 정상화 될 시 재공지 해드리겠습니다
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							<br>
							 이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요➕
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="13026276">
					</td>
					<td class="memo_no">
						462
					</td>
					<td class="open_memo memo_content" data-idx="13026276" data-i="462">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						07-01 02:20
					</td>
				</tr>
				<tr class="dspn ans" data-i="462">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							&nbsp;미니게임(키노사다리.파워사다리 ) 긴급점검 안내&nbsp;
						</p>
						<p>
							현재 전체 게임 결과처리 &nbsp;대한 오류가 발견되어 확인중에 있습니다.신속하게 확인하도록 하도록 하겠습니다. 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							정기 점검시간에는 미니게임(키노사다리.파워사다리 ) 이용이 제한되오니 양해 부탁드립니다.<br>
							 스포츠 및 미니게임 이용은 가능하오니 참고 바랍니다.&nbsp;
						</p>
						<p>
							서비스 안정화를 위한 조치인 만큼 많은 이해부탁드립니다.
						</p>
						<p>
							머니 전환이 불가하신점 참고 바랍니다. 지속적으로 머니전환할시 접속이 불가할수있는점 참고 바랍니다.
						</p>
						<p>
							<br>
							 &nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							<br>
							 평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12995415">
					</td>
					<td class="memo_no">
						461
					</td>
					<td class="open_memo memo_content" data-idx="12995415" data-i="461">
						 ##파워사다리,키노사다리 점검 종료##
					</td>
					<td class="memo_date">
						06-30 20:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="461">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##파워사다리,키노사다리 점검 종료##<br>
							<br>
							 안녕하세요 보스입니다
						</p>
						<p>
							현재 파워사다리,키노사다리 이용 가능하시니 참고 바랍니다.
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12964534">
					</td>
					<td class="memo_no">
						460
					</td>
					<td class="open_memo memo_content" data-idx="12964534" data-i="460">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-30 00:07
					</td>
				</tr>
				<tr class="dspn ans" data-i="460">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12933772">
					</td>
					<td class="memo_no">
						459
					</td>
					<td class="open_memo memo_content" data-idx="12933772" data-i="459">
						 안녕하세요 회원님들 운영진입니다.
					</td>
					<td class="memo_date">
						06-30 00:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="459">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들 운영진입니다.
						</p>
						<p>
							프리스핀(슬롯) 이벤트
						</p>
						<p>
							‼️매주 일요일 프리스핀 DAY 이벤트 안내 드립니다 ‼️
						</p>
						<p>
							이번 프리스핀 게임사는 [프라그마틱]입니다
						</p>
						<p>
							매주 금요일, 토요일 합산 입금액(슬롯) 기준&nbsp;
						</p>
						<p>
							합 입금 10만원 이상 3만 포인트 지급
						</p>
						<p>
							합 입금 50만원 이상 7만 포인트 지급
						</p>
						<p>
							합 입금 100만원 이상 10만 포인트 지급
						</p>
						<p>
							합 입금 200만원 이상 15만 포인트 지급
						</p>
						<p>
							합 입금 300만원 이상 20만 포인트 지급
						</p>
						<p>
							&nbsp;지정된 게임 이외 게임 이용 시 모든 금액 몰수처리
						</p>
						<p>
							&nbsp;포인트는 단독 사용만 가능하며 롤링 300% / 최대 출금 5배 입니다.
						</p>
						<p>
							&nbsp;지정 게임사 긴급 점검으로 인하여 부득이하게 변경 될 수 있습니다.
						</p>
						<p>
							&nbsp;지정 게임사는 매주 변경되니 채널방 공지 참고 해주시면 감사하겠습니다.
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12903003">
					</td>
					<td class="memo_no">
						458
					</td>
					<td class="open_memo memo_content" data-idx="12903003" data-i="458">
						 항상 입금하시기 전 계좌문의 한 후 �
					</td>
					<td class="memo_date">
						06-29 18:20
					</td>
				</tr>
				<tr class="dspn ans" data-i="458">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12872262">
					</td>
					<td class="memo_no">
						457
					</td>
					<td class="open_memo memo_content" data-idx="12872262" data-i="457">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-29 18:07
					</td>
				</tr>
				<tr class="dspn ans" data-i="457">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12841523">
					</td>
					<td class="memo_no">
						456
					</td>
					<td class="open_memo memo_content" data-idx="12841523" data-i="456">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						06-29 17:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="456">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12810785">
					</td>
					<td class="memo_no">
						455
					</td>
					<td class="open_memo memo_content" data-idx="12810785" data-i="455">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-29 17:16
					</td>
				</tr>
				<tr class="dspn ans" data-i="455">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12780006">
					</td>
					<td class="memo_no">
						454
					</td>
					<td class="open_memo memo_content" data-idx="12780006" data-i="454">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-29 00:24
					</td>
				</tr>
				<tr class="dspn ans" data-i="454">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12749297">
					</td>
					<td class="memo_no">
						453
					</td>
					<td class="open_memo memo_content" data-idx="12749297" data-i="453">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-28 17:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="453">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12718576">
					</td>
					<td class="memo_no">
						452
					</td>
					<td class="open_memo memo_content" data-idx="12718576" data-i="452">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-28 00:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="452">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12687921">
					</td>
					<td class="memo_no">
						451
					</td>
					<td class="open_memo memo_content" data-idx="12687921" data-i="451">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-28 00:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="451">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12657256">
					</td>
					<td class="memo_no">
						450
					</td>
					<td class="open_memo memo_content" data-idx="12657256" data-i="450">
						 ★ 카뱅/황동연장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						06-27 17:35
					</td>
				</tr>
				<tr class="dspn ans" data-i="450">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카뱅/황동연장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12628963">
					</td>
					<td class="memo_no">
						449
					</td>
					<td class="open_memo memo_content" data-idx="12628963" data-i="449">
						 ### 스포츠 / 미니게임 돌발 안내### &amp;
					</td>
					<td class="memo_date">
						06-27 16:26
					</td>
				</tr>
				<tr class="dspn ans" data-i="449">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							### 스포츠 / 미니게임 돌발 안내###<br>
							<br>
							 &nbsp;<br>
							 안녕하세요 회원님들보스 운영팀입니다.
						</p>
						<p>
							<br>
							 현시간~19:00 시까지 돌발 진행할 예정입니다.&nbsp;
						</p>
						<p>
							스포츠/미니게임 "무한 돌발 "이벤트 안내
						</p>
						<p>
							&nbsp; &nbsp;&nbsp;<br>
							 스포츠 3폴더 충전시 20% 자동 지급
						</p>
						<p>
							스포츠2폴더/미니게임 충전시 10% 자동 지급
						</p>
						<p>
							<br>
							 모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다^^
						</p>
						<p>
							다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가합니다^^
						</p>
						<p>
							스포츠 롤링 100%<br>
							 미니게임 롤링 400%
						</p>
						<p>
							<br>
							 ‼️지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다.‼️
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12599280">
					</td>
					<td class="memo_no">
						448
					</td>
					<td class="open_memo memo_content" data-idx="12599280" data-i="448">
						 ##서버점검 종료 안내## 안녕하세요
					</td>
					<td class="memo_date">
						06-27 16:15
					</td>
				</tr>
				<tr class="dspn ans" data-i="448">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##서버점검 종료 안내##<br>
							<br>
							 안녕하세요 보스 운영진입니다!
						</p>
						<p>
							현재 점검 종료되어 정상이용 가능하십니다
						</p>
						<p>
							&nbsp;이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							<br>
							 &nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요➕
						</p>
						<p>
							평생도메인 : 보스사이트.com (https://%EB%B3%B4%EC%8A%A4%EC%82%AC%EC%9D%B4%ED%8A%B8.com)<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12568648">
					</td>
					<td class="memo_no">
						447
					</td>
					<td class="open_memo memo_content" data-idx="12568648" data-i="447">
						 ####금일 보스 서버점검 5분전입니다###
					</td>
					<td class="memo_date">
						06-27 15:54
					</td>
				</tr>
				<tr class="dspn ans" data-i="447">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							####금일 보스 서버점검 5분전입니다####<br>
							<br>
							 안녕하세요 보스 운영진입니다!
						</p>
						<p>
							점검 일시 : 2024년 06월 27일 목요일 16시 부터 18시 까지 총 2시간
						</p>
						<p>
							점검 내용 : 서버 점검
						</p>
						<p>
							조기 종료시 쪽지드리도록 하겠습니다.
						</p>
						<p>
							해당시간에는 사이트 접속 및 이용이 불가하오니 참고 바랍니다!
						</p>
						<p>
							&nbsp;이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							<br>
							 &nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요➕
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12538017">
					</td>
					<td class="memo_no">
						446
					</td>
					<td class="open_memo memo_content" data-idx="12538017" data-i="446">
						 ###금일 보스 서버점검 30분전 안내.###
					</td>
					<td class="memo_date">
						06-27 15:31
					</td>
				</tr>
				<tr class="dspn ans" data-i="446">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							###금일 보스 서버점검 30분전 안내.###
						</p>
						<p>
							<br>
							 안녕하세요 보스 운영진입니다!<br>
							<br>
							 점검 일시 : 2024년 06월 27일 목요일 16시 부터 18시 까지 총 2시간
						</p>
						<p>
							점검 내용 : 서버 점검
						</p>
						<p>
							조기 종료시 쪽지드리도록 하겠습니다.
						</p>
						<p>
							해당시간에는 사이트 접속 및 이용이 불가하오니 참고 바랍니다!
						</p>
						<p>
							&nbsp;이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							<br>
							 오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요➕
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12507386">
					</td>
					<td class="memo_no">
						445
					</td>
					<td class="open_memo memo_content" data-idx="12507386" data-i="445">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-27 13:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="445">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12476716">
					</td>
					<td class="memo_no">
						444
					</td>
					<td class="open_memo memo_content" data-idx="12476716" data-i="444">
						 안녕하세요 보스 운영진입니다!
					</td>
					<td class="memo_date">
						06-27 12:20
					</td>
				</tr>
				<tr class="dspn ans" data-i="444">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 보스 운영진입니다!
						</p>
						<p>
							명일 보스 서버점검 안내.
						</p>
						<p>
							점검 일시 : 2024년 06월 27일 목요일 16시 부터 18시 까지 총 2시간
						</p>
						<p>
							점검 내용 : 서버 점검
						</p>
						<p>
							점검 종료시 쪽지드리도록 하겠습니다.
						</p>
						<p>
							해당시간에는 사이트 접속 및 이용이 불가하오니 참고 바랍니다!
						</p>
						<p>
							&nbsp;이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							<br>
							 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요➕
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12446089">
					</td>
					<td class="memo_no">
						443
					</td>
					<td class="open_memo memo_content" data-idx="12446089" data-i="443">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-27 00:08
					</td>
				</tr>
				<tr class="dspn ans" data-i="443">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12415475">
					</td>
					<td class="memo_no">
						442
					</td>
					<td class="open_memo memo_content" data-idx="12415475" data-i="442">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						06-26 18:49
					</td>
				</tr>
				<tr class="dspn ans" data-i="442">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12384896">
					</td>
					<td class="memo_no">
						441
					</td>
					<td class="open_memo memo_content" data-idx="12384896" data-i="441">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-26 18:37
					</td>
				</tr>
				<tr class="dspn ans" data-i="441">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12354318">
					</td>
					<td class="memo_no">
						440
					</td>
					<td class="open_memo memo_content" data-idx="12354318" data-i="440">
						 ## 스포츠/미니게임 "무한 돌발 "이벤�
					</td>
					<td class="memo_date">
						06-26 17:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="440">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 스포츠/미니게임 "무한 돌발 "이벤트 안내 ##
						</p>
						<p>
							17:00~19:00까지 2시간동안 진행됩니다 ^^
						</p>
						<p>
							<br>
							 #스포츠 3폴더 충전시 20% 자동 지급
						</p>
						<p>
							#스포츠2폴더/미니게임 충전시 10% 자동 지급
						</p>
						<p>
							<br>
							 @모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							@환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							@환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다^^
						</p>
						<p>
							@다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가합니다^^
						</p>
						<p>
							스포츠 롤링 100%<br>
							 미니게임 롤링 400%
						</p>
						<p>
							<br>
							 !!지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다.!!
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
						<p>
							카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12323745">
					</td>
					<td class="memo_no">
						439
					</td>
					<td class="open_memo memo_content" data-idx="12323745" data-i="439">
						 ##명일 보스 서버점검 안내.##
					</td>
					<td class="memo_date">
						06-26 16:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="439">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##명일 보스 서버점검 안내.##
						</p>
						<p>
							@점검 일시 : 2024년 06월 27일 목요일 16시 부터 18시 까지 총 2시간
						</p>
						<p>
							@점검 내용 : 서버 점검
						</p>
						<p>
							@점검 종료시 쪽지드리도록 하겠습니다.
						</p>
						<p>
							@해당시간에는 사이트 접속 및 이용이 불가하오니 참고 바랍니다!
						</p>
						<p>
							&nbsp;이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							<br>
							 &nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12293139">
					</td>
					<td class="memo_no">
						438
					</td>
					<td class="open_memo memo_content" data-idx="12293139" data-i="438">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						06-26 08:21
					</td>
				</tr>
				<tr class="dspn ans" data-i="438">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							금일 에볼루션 마이크로게이밍은 <span style="color:#d35400">긴급 점검 예정</span>에 있습니다.<br>
							 점검 시간은 09:30~13:00까지이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12262565">
					</td>
					<td class="memo_no">
						437
					</td>
					<td class="open_memo memo_content" data-idx="12262565" data-i="437">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						06-26 01:44
					</td>
				</tr>
				<tr class="dspn ans" data-i="437">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							프라그마틱 플레이 정상화 안내
						</p>
						<p>
							현재 게임사 측 조치가 완료되어 정상 이용 가능합니다.
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12232012">
					</td>
					<td class="memo_no">
						436
					</td>
					<td class="open_memo memo_content" data-idx="12232012" data-i="436">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						06-26 00:50
					</td>
				</tr>
				<tr class="dspn ans" data-i="436">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							현재 프라그마틱 플레이 접속 오류안내
						</p>
						<p>
							게임사 측 오류로 지속적인 로딩 현상 및 인게임 버퍼링 현상이 확인되어 게임사 측 조치중에 있습니다.
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12201465">
					</td>
					<td class="memo_no">
						435
					</td>
					<td class="open_memo memo_content" data-idx="12201465" data-i="435">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-26 00:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="435">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12170918">
					</td>
					<td class="memo_no">
						434
					</td>
					<td class="open_memo memo_content" data-idx="12170918" data-i="434">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-26 00:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="434">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12140370">
					</td>
					<td class="memo_no">
						433
					</td>
					<td class="open_memo memo_content" data-idx="12140370" data-i="433">
						 항상 입금하시기 전 계좌문의 한 후 �
					</td>
					<td class="memo_date">
						06-25 19:08
					</td>
				</tr>
				<tr class="dspn ans" data-i="433">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12109831">
					</td>
					<td class="memo_no">
						432
					</td>
					<td class="open_memo memo_content" data-idx="12109831" data-i="432">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						06-25 18:30
					</td>
				</tr>
				<tr class="dspn ans" data-i="432">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12079298">
					</td>
					<td class="memo_no">
						431
					</td>
					<td class="open_memo memo_content" data-idx="12079298" data-i="431">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-25 18:26
					</td>
				</tr>
				<tr class="dspn ans" data-i="431">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12048736">
					</td>
					<td class="memo_no">
						430
					</td>
					<td class="open_memo memo_content" data-idx="12048736" data-i="430">
						 금일 페이백&nbsp;오 지급 안내
					</td>
					<td class="memo_date">
						06-25 12:16
					</td>
				</tr>
				<tr class="dspn ans" data-i="430">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">금일 페이백&nbsp;오 지급 안내</span>
						</p>
						<p>
							<span style="color:#f1c40f">금일 1</span><span style="color:#f1c40f">레벨 ~ 4레벨 유저 회원님들중에&nbsp;</span><span style="color:#f1c40f">페이백 지급이10% 지급된 회원님들께서는 오 지급이된 부분입니다.</span>
						</p>
						<p>
							다만 지급 된 페이백은 자사측 오류로 해당 이벤트 규정에 맞게 롤링 충족 후 출금가능하며,
						</p>
						<p>
							다음주 페이백 이벤트부터는 이벤트란 페이백이벤트에&nbsp;명시되어있는 5%로 지급 될 예정입니다.
						</p>
						<p>
							페이백 당일 클릭 시 규정대로 지급 될 예정이니 이용에 참고 해주시길 바랍니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="12018220">
					</td>
					<td class="memo_no">
						429
					</td>
					<td class="open_memo memo_content" data-idx="12018220" data-i="429">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-24 23:54
					</td>
				</tr>
				<tr class="dspn ans" data-i="429">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11987719">
					</td>
					<td class="memo_no">
						428
					</td>
					<td class="open_memo memo_content" data-idx="11987719" data-i="428">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						06-24 23:32
					</td>
				</tr>
				<tr class="dspn ans" data-i="428">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							명일부터 충전유형란 심야이벤트 표기되는 점 참고바랍니다.(단 보유머니/포인트 1만원 이상 보유 시 표기란 확인되지않는 점 참고바랍니다
						</p>
						<p>
							심야이벤트 참여시간 00:00~06:00시까지
						</p>
						<p>
							보너스 첫충 10% 최대지급 50만원 스포츠 1.51배이상 2폴더 베팅만 인정 &nbsp;단폴 이용 시 200% / 미니게임 이용 시 300% /카지노,슬롯 이용불가X<br>
							 &nbsp;
						</p>
						<p>
							지정된 게임 이외 게임 이용 시 모든 금액은 몰수처리예정입니다.
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11957218">
					</td>
					<td class="memo_no">
						427
					</td>
					<td class="open_memo memo_content" data-idx="11957218" data-i="427">
						 심야이벤트 참여 원할 시 충전유형 �
					</td>
					<td class="memo_date">
						06-24 20:38
					</td>
				</tr>
				<tr class="dspn ans" data-i="427">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<br>
							 심야이벤트 참여 원할 시 충전유형 선택 안내
						</p>
						<p>
							안녕하세요 보스 운영진입니다.
						</p>
						<p>
							명일 00시부터 심야이벤트 참여를 원하시는 회원님들께서는&nbsp;
						</p>
						<p>
							고객센터로 문의가아닌 충전 시 심야이벤트 충전유형을 선택하시여 참여해주시길바랍니다.
						</p>
						<p>
							명일부터 고객센터로 문의 시 지급이 불가하며 또한 충전유형은 변경이 불가하니 참고하여 이용 부탁드립니다.
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11926049">
					</td>
					<td class="memo_no">
						426
					</td>
					<td class="open_memo memo_content" data-idx="11926049" data-i="426">
						 항상 입금하시기 전 계좌문의 한 후 �
					</td>
					<td class="memo_date">
						06-23 19:10
					</td>
				</tr>
				<tr class="dspn ans" data-i="426">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11895620">
					</td>
					<td class="memo_no">
						425
					</td>
					<td class="open_memo memo_content" data-idx="11895620" data-i="425">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-23 19:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="425">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11865191">
					</td>
					<td class="memo_no">
						424
					</td>
					<td class="open_memo memo_content" data-idx="11865191" data-i="424">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						06-23 18:50
					</td>
				</tr>
				<tr class="dspn ans" data-i="424">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11834763">
					</td>
					<td class="memo_no">
						423
					</td>
					<td class="open_memo memo_content" data-idx="11834763" data-i="423">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-23 18:33
					</td>
				</tr>
				<tr class="dspn ans" data-i="423">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11804281">
					</td>
					<td class="memo_no">
						422
					</td>
					<td class="open_memo memo_content" data-idx="11804281" data-i="422">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-23 00:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="422">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11773893">
					</td>
					<td class="memo_no">
						421
					</td>
					<td class="open_memo memo_content" data-idx="11773893" data-i="421">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-23 00:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="421">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11743505">
					</td>
					<td class="memo_no">
						420
					</td>
					<td class="open_memo memo_content" data-idx="11743505" data-i="420">
						 안녕하세요 회원님들 운영진입니다.
					</td>
					<td class="memo_date">
						06-23 00:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="420">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들 운영진입니다.
						</p>
						<p>
							프리스핀(슬롯) 이벤트
						</p>
						<p>
							‼️매주 일요일 프리스핀 DAY 이벤트 안내 드립니다 ‼️
						</p>
						<p>
							이번 프리스핀 게임사는 [플래이앤고]입니다
						</p>
						<p>
							매주 금요일, 토요일 합산 입금액(슬롯) 기준&nbsp;
						</p>
						<p>
							합 입금 10만원 이상 3만 포인트 지급
						</p>
						<p>
							합 입금 50만원 이상 7만 포인트 지급
						</p>
						<p>
							합 입금 100만원 이상 10만 포인트 지급
						</p>
						<p>
							합 입금 200만원 이상 15만 포인트 지급
						</p>
						<p>
							합 입금 300만원 이상 20만 포인트 지급
						</p>
						<p>
							&nbsp;지정된 게임 이외 게임 이용 시 모든 금액 몰수처리
						</p>
						<p>
							&nbsp;포인트는 단독 사용만 가능하며 롤링 300% / 최대 출금 5배 입니다.
						</p>
						<p>
							&nbsp;지정 게임사 긴급 점검으로 인하여 부득이하게 변경 될 수 있습니다.
						</p>
						<p>
							&nbsp;지정 게임사는 매주 변경되니 채널방 공지 참고 해주시면 감사하겠습니다.
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11713104">
					</td>
					<td class="memo_no">
						419
					</td>
					<td class="open_memo memo_content" data-idx="11713104" data-i="419">
						 항상 입금하시기 전 계좌문의 한 후 �
					</td>
					<td class="memo_date">
						06-22 15:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="419">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11682704">
					</td>
					<td class="memo_no">
						418
					</td>
					<td class="open_memo memo_content" data-idx="11682704" data-i="418">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						06-22 14:21
					</td>
				</tr>
				<tr class="dspn ans" data-i="418">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11652342">
					</td>
					<td class="memo_no">
						417
					</td>
					<td class="open_memo memo_content" data-idx="11652342" data-i="417">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-22 14:16
					</td>
				</tr>
				<tr class="dspn ans" data-i="417">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11621970">
					</td>
					<td class="memo_no">
						416
					</td>
					<td class="open_memo memo_content" data-idx="11621970" data-i="416">
						 &nbsp; 스포츠 / 미니게임 &nbsp; &nbsp; �
					</td>
					<td class="memo_date">
						06-21 17:19
					</td>
				</tr>
				<tr class="dspn ans" data-i="416">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp; 스포츠 / 미니게임<br>
							 &nbsp;<br>
							 &nbsp;<br>
							 안녕하세요 회원님들보스 운영팀입니다.
						</p>
						<p>
							<br>
							 16:00~19:00 시까지 돌발 진행할 예정입니다.&nbsp;
						</p>
						<p>
							스포츠/미니게임/카지노 "무한 돌발 "이벤트 안내
						</p>
						<p>
							&nbsp;스포츠/미니게임 "무한돌발"이벤트 진행합니다.&nbsp; &nbsp;스포츠 3폴더 충전시 20% 자동 지급스포츠2폴더/미니게임 충전시 10% 자동 지급
						</p>
						<p>
							<br>
							 모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다^^
						</p>
						<p>
							다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가합니다^^
						</p>
						<p>
							스포츠 롤링 100%<br>
							 미니게임 롤링 400%
						</p>
						<p>
							<br>
							 ‼️지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다.‼️
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11591665">
					</td>
					<td class="memo_no">
						415
					</td>
					<td class="open_memo memo_content" data-idx="11591665" data-i="415">
						 &nbsp; 스포츠 / 미니게임 &nbsp; &nbsp; �
					</td>
					<td class="memo_date">
						06-21 16:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="415">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp; 스포츠 / 미니게임<br>
							 &nbsp;<br>
							 &nbsp;<br>
							 안녕하세요 회원님들보스 운영팀입니다.
						</p>
						<p>
							<br>
							 16:00~19:00 시까지 돌발 진행할 예정입니다.&nbsp;
						</p>
						<p>
							스포츠/미니게임/카지노 "무한 돌발 "이벤트 안내
						</p>
						<p>
							현시간부터 ~ &nbsp;6/2 00시까지 스포츠/미니게임 "무한돌발"이벤트 진행합니다.<br>
							 &nbsp; &nbsp;&nbsp;<br>
							 스포츠 3폴더 충전시 20% 자동 지급<br>
							 스포츠2폴더/미니게임 충전시 10% 자동 지급
						</p>
						<p>
							<br>
							 모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다^^
						</p>
						<p>
							다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가합니다^^
						</p>
						<p>
							스포츠 롤링 100%<br>
							 미니게임 롤링 400%
						</p>
						<p>
							<br>
							 지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다.
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11561365">
					</td>
					<td class="memo_no">
						414
					</td>
					<td class="open_memo memo_content" data-idx="11561365" data-i="414">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						06-21 15:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="414">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11531066">
					</td>
					<td class="memo_no">
						413
					</td>
					<td class="open_memo memo_content" data-idx="11531066" data-i="413">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-21 14:11
					</td>
				</tr>
				<tr class="dspn ans" data-i="413">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11500716">
					</td>
					<td class="memo_no">
						412
					</td>
					<td class="open_memo memo_content" data-idx="11500716" data-i="412">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						06-21 01:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="412">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11470428">
					</td>
					<td class="memo_no">
						411
					</td>
					<td class="open_memo memo_content" data-idx="11470428" data-i="411">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-20 16:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="411">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11440179">
					</td>
					<td class="memo_no">
						410
					</td>
					<td class="open_memo memo_content" data-idx="11440179" data-i="410">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-20 14:42
					</td>
				</tr>
				<tr class="dspn ans" data-i="410">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11409848">
					</td>
					<td class="memo_no">
						409
					</td>
					<td class="open_memo memo_content" data-idx="11409848" data-i="409">
						 [레볼루션 긴급 공지사항]&nbsp;
					</td>
					<td class="memo_date">
						06-19 19:13
					</td>
				</tr>
				<tr class="dspn ans" data-i="409">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							[레볼루션 긴급 공지사항]&nbsp;
						</p>
						<p>
							현재 레볼루션 홀덤이 게임중 멈추는 상황이 확인되어&nbsp;<br>
							 빠르게 확인중에 있습니다. 이용에 불편을 드려 대단히 죄송합니다.
						</p>
						<p>
							점검은 공지된 시간보다 빠르거나 지연될 수 있는 점 양해 부탁드립니다.
						</p>
						<p>
							<br>
							 오늘도 보스를 찾아주셔서 감사합니다!
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11379713">
					</td>
					<td class="memo_no">
						408
					</td>
					<td class="open_memo memo_content" data-idx="11379713" data-i="408">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						06-19 17:07
					</td>
				</tr>
				<tr class="dspn ans" data-i="408">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							게임 에러 공지<br>
							 프라그마틱 슬롯 (Pragmatic Play)
						</p>
						<p>
							장애 발생안내.
						</p>
						<p>
							<br>
							 현재 &nbsp;프라그마틱 슬롯 게임 실행시 정상연결되지 않는 장애가 발생하여<br>
							 게임사와 개발실 확인하여 조치중에 있습니다.
						</p>
						<p>
							게임사의 작업으로 조치가 완료되는대로 별도의 정상화 공지 진행예정입니다.<br>
							<br>
							 보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11349597">
					</td>
					<td class="memo_no">
						407
					</td>
					<td class="open_memo memo_content" data-idx="11349597" data-i="407">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						06-19 16:19
					</td>
				</tr>
				<tr class="dspn ans" data-i="407">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11319488">
					</td>
					<td class="memo_no">
						406
					</td>
					<td class="open_memo memo_content" data-idx="11319488" data-i="406">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-19 16:18
					</td>
				</tr>
				<tr class="dspn ans" data-i="406">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11289374">
					</td>
					<td class="memo_no">
						405
					</td>
					<td class="open_memo memo_content" data-idx="11289374" data-i="405">
						 ★ 카뱅/성일도장 해당 계좌 입금 불�
					</td>
					<td class="memo_date">
						06-19 14:49
					</td>
				</tr>
				<tr class="dspn ans" data-i="405">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카뱅/성일도장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11259265">
					</td>
					<td class="memo_no">
						404
					</td>
					<td class="open_memo memo_content" data-idx="11259265" data-i="404">
						 ★ 카카오뱅크/성일도장 해당 계좌 입
					</td>
					<td class="memo_date">
						06-19 14:37
					</td>
				</tr>
				<tr class="dspn ans" data-i="404">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★ 카카오뱅크/성일도장 해당 계좌 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11229109">
					</td>
					<td class="memo_no">
						403
					</td>
					<td class="open_memo memo_content" data-idx="11229109" data-i="403">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-19 01:23
					</td>
				</tr>
				<tr class="dspn ans" data-i="403">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11199016">
					</td>
					<td class="memo_no">
						402
					</td>
					<td class="open_memo memo_content" data-idx="11199016" data-i="402">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-19 00:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="402">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11168932">
					</td>
					<td class="memo_no">
						401
					</td>
					<td class="open_memo memo_content" data-idx="11168932" data-i="401">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-19 00:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="401">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11138826">
					</td>
					<td class="memo_no">
						400
					</td>
					<td class="open_memo memo_content" data-idx="11138826" data-i="400">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-18 16:23
					</td>
				</tr>
				<tr class="dspn ans" data-i="400">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11108755">
					</td>
					<td class="memo_no">
						399
					</td>
					<td class="open_memo memo_content" data-idx="11108755" data-i="399">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-18 00:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="399">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11078797">
					</td>
					<td class="memo_no">
						398
					</td>
					<td class="open_memo memo_content" data-idx="11078797" data-i="398">
						 ##로투스게임 긴급점검 종료 안내##
					</td>
					<td class="memo_date">
						06-17 16:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="398">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##로투스게임 긴급점검 종료 안내##<br>
							<br>
							 안녕하세요 !!보스 운영진입니다.<br>
							<br>
							 점검 사항 : 로투스 보수 작업
						</p>
						<p>
							<br>
							 &nbsp;이용에 불편을 드려 대단히 죄송합니다<br>
							 정상화 될 시 재공지 해드리겠습니다
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다<br>
							 &nbsp;이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요➕<br>
							 평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11048909">
					</td>
					<td class="memo_no">
						397
					</td>
					<td class="open_memo memo_content" data-idx="11048909" data-i="397">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-17 15:31
					</td>
				</tr>
				<tr class="dspn ans" data-i="397">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="11019029">
					</td>
					<td class="memo_no">
						396
					</td>
					<td class="open_memo memo_content" data-idx="11019029" data-i="396">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						06-17 13:25
					</td>
				</tr>
				<tr class="dspn ans" data-i="396">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							로투스게임 긴급점검 안내
						</p>
						<p>
							<br>
							 점검 일시 : 현시간~16:00까지
						</p>
						<p>
							점검 사항 : 로투스 보수 작업
						</p>
						<p>
							<br>
							 &nbsp;이용에 불편을 드려 대단히 죄송합니다<br>
							 정상화 될 시 재공지 해드리겠습니다
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다<br>
							 &nbsp;이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10989113">
					</td>
					<td class="memo_no">
						395
					</td>
					<td class="open_memo memo_content" data-idx="10989113" data-i="395">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-17 00:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="395">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10959275">
					</td>
					<td class="memo_no">
						394
					</td>
					<td class="open_memo memo_content" data-idx="10959275" data-i="394">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-16 21:22
					</td>
				</tr>
				<tr class="dspn ans" data-i="394">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10929397">
					</td>
					<td class="memo_no">
						393
					</td>
					<td class="open_memo memo_content" data-idx="10929397" data-i="393">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-15 23:49
					</td>
				</tr>
				<tr class="dspn ans" data-i="393">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10899662">
					</td>
					<td class="memo_no">
						392
					</td>
					<td class="open_memo memo_content" data-idx="10899662" data-i="392">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-15 16:17
					</td>
				</tr>
				<tr class="dspn ans" data-i="392">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10869937">
					</td>
					<td class="memo_no">
						391
					</td>
					<td class="open_memo memo_content" data-idx="10869937" data-i="391">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-14 23:51
					</td>
				</tr>
				<tr class="dspn ans" data-i="391">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10840344">
					</td>
					<td class="memo_no">
						390
					</td>
					<td class="open_memo memo_content" data-idx="10840344" data-i="390">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-14 23:51
					</td>
				</tr>
				<tr class="dspn ans" data-i="390">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10810751">
					</td>
					<td class="memo_no">
						389
					</td>
					<td class="open_memo memo_content" data-idx="10810751" data-i="389">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						06-14 23:21
					</td>
				</tr>
				<tr class="dspn ans" data-i="389">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스&nbsp;운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던 로투스 바카라 게임은&nbsp;긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!<br>
							 평생 주소 : 보스사이트<strong>.com</strong><br>
							 24시 텔레그램: @boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10781166">
					</td>
					<td class="memo_no">
						388
					</td>
					<td class="open_memo memo_content" data-idx="10781166" data-i="388">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						06-14 22:27
					</td>
				</tr>
				<tr class="dspn ans" data-i="388">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 로투스 바카라 게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10751591">
					</td>
					<td class="memo_no">
						387
					</td>
					<td class="open_memo memo_content" data-idx="10751591" data-i="387">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-14 20:07
					</td>
				</tr>
				<tr class="dspn ans" data-i="387">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10721991">
					</td>
					<td class="memo_no">
						386
					</td>
					<td class="open_memo memo_content" data-idx="10721991" data-i="386">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-14 00:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="386">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10692485">
					</td>
					<td class="memo_no">
						385
					</td>
					<td class="open_memo memo_content" data-idx="10692485" data-i="385">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-14 00:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="385">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10662975">
					</td>
					<td class="memo_no">
						384
					</td>
					<td class="open_memo memo_content" data-idx="10662975" data-i="384">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-13 18:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="384">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10633430">
					</td>
					<td class="memo_no">
						383
					</td>
					<td class="open_memo memo_content" data-idx="10633430" data-i="383">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-12 18:53
					</td>
				</tr>
				<tr class="dspn ans" data-i="383">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10603995">
					</td>
					<td class="memo_no">
						382
					</td>
					<td class="open_memo memo_content" data-idx="10603995" data-i="382">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-12 17:52
					</td>
				</tr>
				<tr class="dspn ans" data-i="382">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10574522">
					</td>
					<td class="memo_no">
						381
					</td>
					<td class="open_memo memo_content" data-idx="10574522" data-i="381">
						 ★해당 계좌&nbsp; 농협/이금배장 입금
					</td>
					<td class="memo_date">
						06-12 12:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="381">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★해당 계좌&nbsp; 농협/이금배장 입금 불가(정지)안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10545096">
					</td>
					<td class="memo_no">
						380
					</td>
					<td class="open_memo memo_content" data-idx="10545096" data-i="380">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-12 00:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="380">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10515648">
					</td>
					<td class="memo_no">
						379
					</td>
					<td class="open_memo memo_content" data-idx="10515648" data-i="379">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						06-11 14:10
					</td>
				</tr>
				<tr class="dspn ans" data-i="379">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10486294">
					</td>
					<td class="memo_no">
						378
					</td>
					<td class="open_memo memo_content" data-idx="10486294" data-i="378">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						06-11 14:10
					</td>
				</tr>
				<tr class="dspn ans" data-i="378">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10456940">
					</td>
					<td class="memo_no">
						377
					</td>
					<td class="open_memo memo_content" data-idx="10456940" data-i="377">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-11 14:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="377">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10427580">
					</td>
					<td class="memo_no">
						376
					</td>
					<td class="open_memo memo_content" data-idx="10427580" data-i="376">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-10 23:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="376">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10398252">
					</td>
					<td class="memo_no">
						375
					</td>
					<td class="open_memo memo_content" data-idx="10398252" data-i="375">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-10 23:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="375">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10368918">
					</td>
					<td class="memo_no">
						374
					</td>
					<td class="open_memo memo_content" data-idx="10368918" data-i="374">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						06-10 18:21
					</td>
				</tr>
				<tr class="dspn ans" data-i="374">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10339606">
					</td>
					<td class="memo_no">
						373
					</td>
					<td class="open_memo memo_content" data-idx="10339606" data-i="373">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-10 18:20
					</td>
				</tr>
				<tr class="dspn ans" data-i="373">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10310285">
					</td>
					<td class="memo_no">
						372
					</td>
					<td class="open_memo memo_content" data-idx="10310285" data-i="372">
						 ★★★★★★★★★계좌변경★★★�
					</td>
					<td class="memo_date">
						06-10 15:58
					</td>
				</tr>
				<tr class="dspn ans" data-i="372">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★★★★★★★★★계좌변경★★★★★★★★★★★★★★<br>
							 ★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10280980">
					</td>
					<td class="memo_no">
						371
					</td>
					<td class="open_memo memo_content" data-idx="10280980" data-i="371">
						 ★모든 회원님들의 입금 계좌번호가 �
					</td>
					<td class="memo_date">
						06-10 15:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="371">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★모든 회원님들의 입금 계좌번호가 변경되었습니다.
						</p>
						<p>
							계좌문의 필수입니다.
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10251673">
					</td>
					<td class="memo_no">
						370
					</td>
					<td class="open_memo memo_content" data-idx="10251673" data-i="370">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-10 15:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="370">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10222370">
					</td>
					<td class="memo_no">
						369
					</td>
					<td class="open_memo memo_content" data-idx="10222370" data-i="369">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-10 15:20
					</td>
				</tr>
				<tr class="dspn ans" data-i="369">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10193068">
					</td>
					<td class="memo_no">
						368
					</td>
					<td class="open_memo memo_content" data-idx="10193068" data-i="368">
						 ★긴금 계좌 긴급점검&nbsp; **/***장 입�
					</td>
					<td class="memo_date">
						06-10 15:16
					</td>
				</tr>
				<tr class="dspn ans" data-i="368">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★긴금 계좌 긴급점검&nbsp; **/***장 입금 불가안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10163096">
					</td>
					<td class="memo_no">
						367
					</td>
					<td class="open_memo memo_content" data-idx="10163096" data-i="367">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-10 00:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="367">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10133809">
					</td>
					<td class="memo_no">
						366
					</td>
					<td class="open_memo memo_content" data-idx="10133809" data-i="366">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-10 00:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="366">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10104522">
					</td>
					<td class="memo_no">
						365
					</td>
					<td class="open_memo memo_content" data-idx="10104522" data-i="365">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-10 00:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="365">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10075189">
					</td>
					<td class="memo_no">
						364
					</td>
					<td class="open_memo memo_content" data-idx="10075189" data-i="364">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-09 14:34
					</td>
				</tr>
				<tr class="dspn ans" data-i="364">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10045830">
					</td>
					<td class="memo_no">
						363
					</td>
					<td class="open_memo memo_content" data-idx="10045830" data-i="363">
						 안녕하세요 회원님들 운영진입니다.
					</td>
					<td class="memo_date">
						06-09 00:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="363">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들 운영진입니다.
						</p>
						<p>
							## 프리스핀(슬롯) 이벤트##
						</p>
						<p>
							‼️매주 일요일 프리스핀 DAY 이벤트 안내 드립니다 ‼️
						</p>
						<p>
							이번 프리스핀 게임사는 [프라그마틱]입니다
						</p>
						<p>
							매주 금요일, 토요일 합산 입금액(슬롯) 기준&nbsp;
						</p>
						<p>
							합 입금 10만원 이상 3만 포인트 지급
						</p>
						<p>
							합 입금 50만원 이상 7만 포인트 지급
						</p>
						<p>
							합 입금 100만원 이상 10만 포인트 지급
						</p>
						<p>
							합 입금 200만원 이상 15만 포인트 지급
						</p>
						<p>
							합 입금 300만원 이상 20만 포인트 지급
						</p>
						<p>
							&nbsp;지정된 게임 이외 게임 이용 시 모든 금액 몰수처리
						</p>
						<p>
							&nbsp;포인트는 단독 사용만 가능하며 롤링 300% / 최대 출금 5배 입니다.
						</p>
						<p>
							&nbsp;지정 게임사 긴급 점검으로 인하여 부득이하게 변경 될 수 있습니다.
						</p>
						<p>
							&nbsp;지정 게임사는 매주 변경되니 채널방 공지 참고 해주시면 감사하겠습니다.
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="10016508">
					</td>
					<td class="memo_no">
						362
					</td>
					<td class="open_memo memo_content" data-idx="10016508" data-i="362">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-08 17:52
					</td>
				</tr>
				<tr class="dspn ans" data-i="362">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9987170">
					</td>
					<td class="memo_no">
						361
					</td>
					<td class="open_memo memo_content" data-idx="9987170" data-i="361">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-08 00:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="361">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9957891">
					</td>
					<td class="memo_no">
						360
					</td>
					<td class="open_memo memo_content" data-idx="9957891" data-i="360">
						 ## [pbg파워볼 점검 안내] ## 안녕하세
					</td>
					<td class="memo_date">
						06-07 19:46
					</td>
				</tr>
				<tr class="dspn ans" data-i="360">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## [pbg파워볼 점검 안내] ##<br>
							<br>
							 안녕하세요 보스 운영진입니다!
						</p>
						<p>
							점검 종료 일시:미정
						</p>
						<p>
							이용에 불편을 드려 죄송합니다. 현재 게임 접속이 불가하니 참고 하여 이용에 차질없도록 해주시기 바랍니다.<br>
							<br>
							 오늘도 보스를 찾아주셔서 감사합니다!
						</p>
						<p>
							평생도메인 : 보스사이트.com&nbsp;<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9928625">
					</td>
					<td class="memo_no">
						359
					</td>
					<td class="open_memo memo_content" data-idx="9928625" data-i="359">
						 **********계좌 변경 ************ ************
					</td>
					<td class="memo_date">
						06-07 16:50
					</td>
				</tr>
				<tr class="dspn ans" data-i="359">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							**********계좌 변경 ************<br>
							 ******************************************************<br>
							 ★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9899370">
					</td>
					<td class="memo_no">
						358
					</td>
					<td class="open_memo memo_content" data-idx="9899370" data-i="358">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-07 16:46
					</td>
				</tr>
				<tr class="dspn ans" data-i="358">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9870063">
					</td>
					<td class="memo_no">
						357
					</td>
					<td class="open_memo memo_content" data-idx="9870063" data-i="357">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						06-07 09:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="357">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스&nbsp;운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던 프라그마틱 게임은&nbsp;긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!<br>
							 평생 주소 : 보스사이트<strong>.com</strong><br>
							 24시 텔레그램: @boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9840811">
					</td>
					<td class="memo_no">
						356
					</td>
					<td class="open_memo memo_content" data-idx="9840811" data-i="356">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						06-07 08:13
					</td>
				</tr>
				<tr class="dspn ans" data-i="356">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 프라그마틱 게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9811549">
					</td>
					<td class="memo_no">
						355
					</td>
					<td class="open_memo memo_content" data-idx="9811549" data-i="355">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						06-07 00:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="355">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스&nbsp;운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던 가상축구 게임은&nbsp;긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!<br>
							 평생 주소 : 보스사이트<strong>.com</strong><br>
							 24시 텔레그램: @boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9782316">
					</td>
					<td class="memo_no">
						354
					</td>
					<td class="open_memo memo_content" data-idx="9782316" data-i="354">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-06 23:58
					</td>
				</tr>
				<tr class="dspn ans" data-i="354">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9753083">
					</td>
					<td class="memo_no">
						353
					</td>
					<td class="open_memo memo_content" data-idx="9753083" data-i="353">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						06-06 22:39
					</td>
				</tr>
				<tr class="dspn ans" data-i="353">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							가상 축구 및 가상게임 점검안내
						</p>
						<p>
							현재 서버 통신오류가 심해 배당 / 결과 / 영상 전반적 누락 과다 되는 현상이 &nbsp;발생 하여 빠르게 조치 후에 재안내 해드리도록 하겠습니다.&nbsp;
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9723856">
					</td>
					<td class="memo_no">
						352
					</td>
					<td class="open_memo memo_content" data-idx="9723856" data-i="352">
						 ★긴금 계좌 긴급점검&nbsp; 카카오뱅/�
					</td>
					<td class="memo_date">
						06-06 19:49
					</td>
				</tr>
				<tr class="dspn ans" data-i="352">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★긴금 계좌 긴급점검&nbsp; 카카오뱅/장원희장 입금 불가안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9694641">
					</td>
					<td class="memo_no">
						351
					</td>
					<td class="open_memo memo_content" data-idx="9694641" data-i="351">
						 ★긴금 계좌 긴급점검&nbsp; **/***장 입�
					</td>
					<td class="memo_date">
						06-06 19:48
					</td>
				</tr>
				<tr class="dspn ans" data-i="351">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★긴금 계좌 긴급점검&nbsp; **/***장 입금 불가안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9665426">
					</td>
					<td class="memo_no">
						350
					</td>
					<td class="open_memo memo_content" data-idx="9665426" data-i="350">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-06 19:47
					</td>
				</tr>
				<tr class="dspn ans" data-i="350">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9636169">
					</td>
					<td class="memo_no">
						349
					</td>
					<td class="open_memo memo_content" data-idx="9636169" data-i="349">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-05 23:48
					</td>
				</tr>
				<tr class="dspn ans" data-i="349">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9607009">
					</td>
					<td class="memo_no">
						348
					</td>
					<td class="open_memo memo_content" data-idx="9607009" data-i="348">
						 ★현시간부로 모든회원님들 입금계좌
					</td>
					<td class="memo_date">
						06-05 21:48
					</td>
				</tr>
				<tr class="dspn ans" data-i="348">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★현시간부로 모든회원님들 입금계좌가 변경되었습니다★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9577864">
					</td>
					<td class="memo_no">
						347
					</td>
					<td class="open_memo memo_content" data-idx="9577864" data-i="347">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-05 21:47
					</td>
				</tr>
				<tr class="dspn ans" data-i="347">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9548718">
					</td>
					<td class="memo_no">
						346
					</td>
					<td class="open_memo memo_content" data-idx="9548718" data-i="346">
						 ★긴금 계좌 긴급점검&nbsp; 농협/안주�
					</td>
					<td class="memo_date">
						06-05 21:16
					</td>
				</tr>
				<tr class="dspn ans" data-i="346">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★긴금 계좌 긴급점검&nbsp; 농협/안주현장 입금 불가안내★
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9519574">
					</td>
					<td class="memo_no">
						345
					</td>
					<td class="open_memo memo_content" data-idx="9519574" data-i="345">
						 계좌변경안내가 되었음에도 계좌문의
					</td>
					<td class="memo_date">
						06-05 20:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="345">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">계좌변경안내가 되었음에도 계좌문의를 안하시는 회원님들이 계십니다.</span>
						</p>
						<p>
							입금 전에는 항시 계좌 문의 후 이용 부탁드립니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9490432">
					</td>
					<td class="memo_no">
						344
					</td>
					<td class="open_memo memo_content" data-idx="9490432" data-i="344">
						 ★현시간부로 새로운계좌안내 ★
					</td>
					<td class="memo_date">
						06-05 20:41
					</td>
				</tr>
				<tr class="dspn ans" data-i="344">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★현시간부로 새로운계좌안내 ★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9461238">
					</td>
					<td class="memo_no">
						343
					</td>
					<td class="open_memo memo_content" data-idx="9461238" data-i="343">
						 현재 토스뱅크측 점검으로 출금이 불�
					</td>
					<td class="memo_date">
						06-05 13:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="343">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">현재 토스뱅크측 점검으로 출금이 불가한걸로 확인되고있습니다.<br>
							 정확한 사유는 파악이 되고있지않아 현재 등록계좌가 토스뱅크인 회원분들꼐서는 잠시 출금이 불가한 점 알려드립니다.</span>
						</p>
						<p>
							<span style="color:#f1c40f">이용에 불편을 드려 대단히 죄송합니다</span>
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.
						</p>
						<p>
							<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9432115">
					</td>
					<td class="memo_no">
						342
					</td>
					<td class="open_memo memo_content" data-idx="9432115" data-i="342">
						 ##카지노 및 슬롯 점검 종료 안내##
					</td>
					<td class="memo_date">
						06-05 11:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="342">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##카지노 및 슬롯 점검 종료 안내##
						</p>
						<p>
							현시간부로 카지노 및 슬롯 정상적으로 이용가능하니 참고하여 이용해주시기 바랍니다 기다려주셔서 감사합니다 ^^
						</p>
						<p>
							<br>
							 &nbsp;오늘도 보스를 찾아주셔서감사합니다&nbsp;
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9402993">
					</td>
					<td class="memo_no">
						341
					</td>
					<td class="open_memo memo_content" data-idx="9402993" data-i="341">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						06-05 09:34
					</td>
				</tr>
				<tr class="dspn ans" data-i="341">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							&lt;SWIX 정기점검 연장 안내&gt;&nbsp;<br>
							 2024-06-05(수요일) SWIX 정기 점검 연장 공지 전달드립니다.
						</p>
						<p>
							점검일시 : 2024-06-05 (수요일) ~ 11 : 00 시 종료예정이며 참고 해주시기 바랍니다!
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9373871">
					</td>
					<td class="memo_no">
						340
					</td>
					<td class="open_memo memo_content" data-idx="9373871" data-i="340">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-05 06:44
					</td>
				</tr>
				<tr class="dspn ans" data-i="340">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9344754">
					</td>
					<td class="memo_no">
						339
					</td>
					<td class="open_memo memo_content" data-idx="9344754" data-i="339">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						06-05 03:25
					</td>
				</tr>
				<tr class="dspn ans" data-i="339">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							안녕하세요 회원님 잠시후 카지노 및 슬롯유형의 모든 게임사는 점검이 있을예정입니다.
						</p>
						<p>
							점검일시 : 2024-06-05(수요일) &nbsp;04 : 00 &nbsp;~ &nbsp;10 : 00 입니다.
						</p>
						<p>
							점검시간에는 이용이 불가하오니 이용에 &nbsp;참고부탁드리며,추 후 점검이 완료될시 공지 예정에 있습니다.
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9315642">
					</td>
					<td class="memo_no">
						338
					</td>
					<td class="open_memo memo_content" data-idx="9315642" data-i="338">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-05 00:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="338">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9286537">
					</td>
					<td class="memo_no">
						337
					</td>
					<td class="open_memo memo_content" data-idx="9286537" data-i="337">
						 ##안녕하세요 회원님들 운영진입니다.
					</td>
					<td class="memo_date">
						06-05 00:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="337">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##안녕하세요 회원님들 운영진입니다.##
						</p>
						<p>
							&nbsp;SWIX(카지노&amp;슬롯) 정기점검 재안내&nbsp;
						</p>
						<p>
							2024-06-05(수요일) SWIX(카지노&amp;슬롯) 정기 점검 공지 전달드립니다
						</p>
						<p>
							점검일시 : 2024-06-05(수요일)&nbsp;&nbsp;<br>
							 &nbsp; &nbsp; &nbsp; ‼️04 : 00 &nbsp;~ &nbsp;10 : 00 시‼️
						</p>
						<p>
							정기 점검시간에는 카지노 및 슬롯 이용이 제한되오니 양해 부탁드립니다<br>
							 스포츠 및 미니게임 이용은 가능하오니 참고 바랍니다&nbsp;
						</p>
						<p>
							모든 시간은 한국시간(GMT+9), 24시간제 기준입니다
						</p>
						<p>
							추가 점검 시간 연장 공지가 없을 경우, 별도 공지 없이 지정 시간에 맞춰 점검이 완료됨을 알려드립니다
						</p>
						<p>
							서비스 안정화를 위한 조치인 만큼 많은 이해부탁드립니다
						</p>
						<p>
							&nbsp;머니 전환이 불가하신점 참고 바랍니다. 지속적으로 머니전환할시 접속이 불가할수있는점 참고 바랍니다.
						</p>
						<p>
							&nbsp;점검이 시작하기전 머니를 전환 해주시길 바라며 점검이 시작후 머니전환은 불가하며 점검이 끝난후 머니전환이 가능 합니다&nbsp;
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9257421">
					</td>
					<td class="memo_no">
						336
					</td>
					<td class="open_memo memo_content" data-idx="9257421" data-i="336">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-04 18:18
					</td>
				</tr>
				<tr class="dspn ans" data-i="336">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9228331">
					</td>
					<td class="memo_no">
						335
					</td>
					<td class="open_memo memo_content" data-idx="9228331" data-i="335">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						06-04 16:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="335">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							현재 인터넷 문제로인해 충전.&nbsp;지연되고있습니다 현재 확인중에있으며 빠르게 확인후 처리해드리겠습니다<br>
							 이용에불편드려죄송합니다.<br>
							 &nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9199211">
					</td>
					<td class="memo_no">
						334
					</td>
					<td class="open_memo memo_content" data-idx="9199211" data-i="334">
						 ★카카오뱅크/장원희장 정상입금가능
					</td>
					<td class="memo_date">
						06-04 14:36
					</td>
				</tr>
				<tr class="dspn ans" data-i="334">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★카카오뱅크/장원희장 정상입금가능안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 계좌문의 후 이용해주시면 됩니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9170134">
					</td>
					<td class="memo_no">
						333
					</td>
					<td class="open_memo memo_content" data-idx="9170134" data-i="333">
						 ★긴금 계좌 긴급점검&nbsp; 카카오뱅�
					</td>
					<td class="memo_date">
						06-04 14:08
					</td>
				</tr>
				<tr class="dspn ans" data-i="333">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★긴금 계좌 긴급점검&nbsp; 카카오뱅크/장원희장 입금 불가안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9141049">
					</td>
					<td class="memo_no">
						332
					</td>
					<td class="open_memo memo_content" data-idx="9141049" data-i="332">
						 # 페이백 이벤트#
					</td>
					<td class="memo_date">
						06-04 00:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="332">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							# 페이백 이벤트#
						</p>
						<p>
							#안녕하세요 회원님들 운영진입니다.#
						</p>
						<p>
							‼️매주 화요일 마다 지난주 화요일 ~ 월요일의 입출금 차액 5% 를 지급 합니다 ‼️
						</p>
						<p>
							페이백 계산방법
						</p>
						<p>
							해당 주 총 입금액 10만원 해당 주 총 출금액 2만원 100,000 - 20,000=80,000&nbsp;
						</p>
						<p>
							페이백 지급포인트 : 80,000x5% = 4,000 원&nbsp;
						</p>
						<p>
							&nbsp;지급 &nbsp;받으신 페이백 롤링&nbsp;<br>
							 스포츠100%/스포츠 이외 다른게임 전부 300%
						</p>
						<p>
							&nbsp;페이백 버튼 클릭하시면 자동으로 지급 되시는점 참고 바랍니다
						</p>
						<p>
							&nbsp;주 2회 입금 이상자만 참여 가능 합니다
						</p>
						<p>
							지급받은 페이백 금액에 최대 10배까지 환전 가능하니 이용에 차질없게 참고해주시기 바랍니다.&nbsp;
						</p>
						<p>
							1~2레벨 - 최대지급액 100만원<br>
							 3~4레벨 - 최대지급액 150만원<br>
							 vip 1~2레벨 - 최대지급액 200만원<br>
							 vip 3레벨 - 최대지급액300만원<br>
							 ‼️레벨 등업에 따라 지급액 한도가 변경되었으니 많은 참여 바랍니다‼️
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9111994">
					</td>
					<td class="memo_no">
						331
					</td>
					<td class="open_memo memo_content" data-idx="9111994" data-i="331">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-03 23:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="331">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9082391">
					</td>
					<td class="memo_no">
						330
					</td>
					<td class="open_memo memo_content" data-idx="9082391" data-i="330">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-03 15:11
					</td>
				</tr>
				<tr class="dspn ans" data-i="330">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9053312">
					</td>
					<td class="memo_no">
						329
					</td>
					<td class="open_memo memo_content" data-idx="9053312" data-i="329">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-03 00:20
					</td>
				</tr>
				<tr class="dspn ans" data-i="329">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌로 입금 시 처리가 불가하오니 꼭 계좌문의 후 충전신청 해주시기 바랍니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="9024293">
					</td>
					<td class="memo_no">
						328
					</td>
					<td class="open_memo memo_content" data-idx="9024293" data-i="328">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-03 00:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="328">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8995239">
					</td>
					<td class="memo_no">
						327
					</td>
					<td class="open_memo memo_content" data-idx="8995239" data-i="327">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-02 16:42
					</td>
				</tr>
				<tr class="dspn ans" data-i="327">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8966204">
					</td>
					<td class="memo_no">
						326
					</td>
					<td class="open_memo memo_content" data-idx="8966204" data-i="326">
						 [6-2일 토너먼트 개최 안내]
					</td>
					<td class="memo_date">
						06-02 15:23
					</td>
				</tr>
				<tr class="dspn ans" data-i="326">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							[6-2일 토너먼트 개최 안내]
						</p>
						<p>
							안녕하세요. 레볼루션 토너먼트 일정 안내드립니다.
						</p>
						<p>
							17시 : 프리롤 토너먼트(300만GTD)<br>
							 - 참여금액 : 0원&nbsp;<br>
							 - 블라인드업 : 10min<br>
							 - 지급 칩 : 50,000<br>
							 - 리엔트리 : 불가
						</p>
						<p>
							19시 : 데일리 토너먼트(700만GTD)<br>
							 - 참여금액 : 70,000<br>
							 - 블라인드업 : 10min<br>
							 - 지급 칩 : 30,000<br>
							 - 리엔트리 : 제한없음
						</p>
						<p>
							22시 : 하이롤러 토너먼트(1.000만GTD)<br>
							 - 참여금액: 100,000<br>
							 - 블라인드업 : 10min<br>
							 - 지급 칩 : 30,000<br>
							 - 리엔트리 : 제한없음
						</p>
						<p>
							- 더 자세한 내용은 레볼루션 토너먼트 접속 후 확인하실 수 있습니다.
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8937187">
					</td>
					<td class="memo_no">
						325
					</td>
					<td class="open_memo memo_content" data-idx="8937187" data-i="325">
						 #안녕하세요 회원님들 운영진입니다.#
					</td>
					<td class="memo_date">
						06-02 00:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="325">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							#안녕하세요 회원님들 운영진입니다.#
						</p>
						<p>
							&nbsp;프리스핀(슬롯) 이벤트
						</p>
						<p>
							‼️매주 일요일 프리스핀 DAY 이벤트 안내 드립니다 ‼️
						</p>
						<p>
							이번 프리스핀 게임사는 [플래이앤고]입니다
						</p>
						<p>
							매주 금요일, 토요일 합산 입금액(슬롯) 기준&nbsp;
						</p>
						<p>
							합 입금 10만원 이상 3만 포인트 지급
						</p>
						<p>
							합 입금 50만원 이상 7만 포인트 지급
						</p>
						<p>
							합 입금 100만원 이상 10만 포인트 지급
						</p>
						<p>
							합 입금 200만원 이상 15만 포인트 지급
						</p>
						<p>
							합 입금 300만원 이상 20만 포인트 지급
						</p>
						<p>
							&nbsp;지정된 게임 이외 게임 이용 시 모든 금액 몰수처리
						</p>
						<p>
							&nbsp;포인트는 단독 사용만 가능하며 롤링 300% / 최대 출금 5배 입니다.
						</p>
						<p>
							&nbsp;지정 게임사 긴급 점검으로 인하여 부득이하게 변경 될 수 있습니다.
						</p>
						<p>
							&nbsp;지정 게임사는 매주 변경되니 채널방 공지 참고 해주시면 감사하겠습니다.
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8908211">
					</td>
					<td class="memo_no">
						324
					</td>
					<td class="open_memo memo_content" data-idx="8908211" data-i="324">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-01 23:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="324">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8879233">
					</td>
					<td class="memo_no">
						323
					</td>
					<td class="open_memo memo_content" data-idx="8879233" data-i="323">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						06-01 21:51
					</td>
				</tr>
				<tr class="dspn ans" data-i="323">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8850264">
					</td>
					<td class="memo_no">
						322
					</td>
					<td class="open_memo memo_content" data-idx="8850264" data-i="322">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						06-01 21:50
					</td>
				</tr>
				<tr class="dspn ans" data-i="322">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8821252">
					</td>
					<td class="memo_no">
						321
					</td>
					<td class="open_memo memo_content" data-idx="8821252" data-i="321">
						 ## 6/1 토 토너먼트 개최 안내 ##
					</td>
					<td class="memo_date">
						06-01 15:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="321">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 6/1 토 토너먼트 개최 안내 ##
						</p>
						<p>
							안녕하세요. 보스입니다. 레볼루션 토너먼트 일정 안내드립니다.
						</p>
						<p>
							@17시 : 프리롤 토너먼트(300만GTD)<br>
							 - 참여금액 : 0원&nbsp;<br>
							 - 블라인드업 : 10min<br>
							 - 지급 칩 : 50,000<br>
							 - 리엔트리 : 불가
						</p>
						<p>
							@19시 : 데일리 토너먼트(700만GTD)<br>
							 - 참여금액 : 70,000<br>
							 - 블라인드업 : 10min<br>
							 - 지급 칩 : 30,000<br>
							 - 리엔트리 : 제한없음
						</p>
						<p>
							@22시 : 하이롤러 토너먼트(1.000만GTD)<br>
							 - 참여금액: 100,000<br>
							 - 블라인드업 : 10min<br>
							 - 지급 칩 : 30,000<br>
							 - 리엔트리 : 제한없음
						</p>
						<p>
							&nbsp;더 자세한 내용은 레볼루션 토너먼트 접속 후 확인하실 수 있습니다.
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8792313">
					</td>
					<td class="memo_no">
						320
					</td>
					<td class="open_memo memo_content" data-idx="8792313" data-i="320">
						 안녕하세요&nbsp;스포츠 배당 업데이트
					</td>
					<td class="memo_date">
						06-01 13:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="320">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요&nbsp;</span><strong>스포츠 배당 업데이트 이슈 안내</strong>
						</p>
						<p>
							스포츠 배당이 노출이 안되고있습니다 자사에서는 현재 이부분을 해결에 최선을 다하고있습니다.
						</p>
						<p>
							<strong>스포츠 배당 집계 업데이트중에 있으며</strong>
						</p>
						<p>
							<strong>잠시만 기다려주시면 감사하겠습니다</strong>
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8763382">
					</td>
					<td class="memo_no">
						319
					</td>
					<td class="open_memo memo_content" data-idx="8763382" data-i="319">
						 녕하세요 보스 운영진입니다!
					</td>
					<td class="memo_date">
						06-01 13:44
					</td>
				</tr>
				<tr class="dspn ans" data-i="319">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							녕하세요 보스 운영진입니다!
						</p>
						<p>
							&nbsp;[ 홈페이지 무한로딩현상 정상화 안내 ]
						</p>
						<p>
							&nbsp;현재 홈페이지가 무한로딩 및 접속이 정상화 확인되었습니다.&nbsp;
						</p>
						<p>
							이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							오늘도 보스를 찾아주셔서 감사합니다!
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8734450">
					</td>
					<td class="memo_no">
						318
					</td>
					<td class="open_memo memo_content" data-idx="8734450" data-i="318">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-31 23:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="318">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8705536">
					</td>
					<td class="memo_no">
						317
					</td>
					<td class="open_memo memo_content" data-idx="8705536" data-i="317">
						 ******************************* ★보스 회원&amp;
					</td>
					<td class="memo_date">
						05-31 14:47
					</td>
				</tr>
				<tr class="dspn ans" data-i="317">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							*******************************<br>
							 ★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8676649">
					</td>
					<td class="memo_no">
						316
					</td>
					<td class="open_memo memo_content" data-idx="8676649" data-i="316">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-31 00:08
					</td>
				</tr>
				<tr class="dspn ans" data-i="316">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8647823">
					</td>
					<td class="memo_no">
						315
					</td>
					<td class="open_memo memo_content" data-idx="8647823" data-i="315">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-30 23:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="315">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8618997">
					</td>
					<td class="memo_no">
						314
					</td>
					<td class="open_memo memo_content" data-idx="8618997" data-i="314">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-30 23:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="314">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8590158">
					</td>
					<td class="memo_no">
						313
					</td>
					<td class="open_memo memo_content" data-idx="8590158" data-i="313">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						05-30 19:27
					</td>
				</tr>
				<tr class="dspn ans" data-i="313">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8561340">
					</td>
					<td class="memo_no">
						312
					</td>
					<td class="open_memo memo_content" data-idx="8561340" data-i="312">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-30 19:26
					</td>
				</tr>
				<tr class="dspn ans" data-i="312">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8532520">
					</td>
					<td class="memo_no">
						311
					</td>
					<td class="open_memo memo_content" data-idx="8532520" data-i="311">
						 현재 계좌가 변경되었음에도 계좌문�
					</td>
					<td class="memo_date">
						05-30 18:39
					</td>
				</tr>
				<tr class="dspn ans" data-i="311">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							현재 계좌가 변경되었음에도 계좌문의를 안하시는 회원님들이 많습니다.
						</p>
						<p>
							계좌는 수시로 변경되기떄문에 입금 전 계좌문의는 필수입니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8503700">
					</td>
					<td class="memo_no">
						310
					</td>
					<td class="open_memo memo_content" data-idx="8503700" data-i="310">
						 ★카카오뱅크/장원희 계좌변경안내 �
					</td>
					<td class="memo_date">
						05-30 18:27
					</td>
				</tr>
				<tr class="dspn ans" data-i="310">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★카카오뱅크/장원희 계좌변경안내 계좌문의 필수입니다.★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8474880">
					</td>
					<td class="memo_no">
						309
					</td>
					<td class="open_memo memo_content" data-idx="8474880" data-i="309">
						 ★이용안하는 계좌입니다.&nbsp; 카카�
					</td>
					<td class="memo_date">
						05-30 17:24
					</td>
				</tr>
				<tr class="dspn ans" data-i="309">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★이용안하는 계좌입니다.&nbsp; 카카오뱅크/최준원장 입금 불가안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8446062">
					</td>
					<td class="memo_no">
						308
					</td>
					<td class="open_memo memo_content" data-idx="8446062" data-i="308">
						 &nbsp;[레볼루션 점검 완료 안내]&nbsp;
					</td>
					<td class="memo_date">
						05-30 15:19
					</td>
				</tr>
				<tr class="dspn ans" data-i="308">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp;[레볼루션 점검 완료 안내]&nbsp;
						</p>
						<p>
							레볼루션 홀덤 점검 완료되었습니다.<br>
							 현 시간부로 레볼루션 홀덤 정상적으로 접속 가능합니다.
						</p>
						<p>
							오늘도 보스를 찾아주셔서 감사합니다!
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8417252">
					</td>
					<td class="memo_no">
						307
					</td>
					<td class="open_memo memo_content" data-idx="8417252" data-i="307">
						 &nbsp;[레볼루션 점검 안내]&nbsp;
					</td>
					<td class="memo_date">
						05-30 15:10
					</td>
				</tr>
				<tr class="dspn ans" data-i="307">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp;[레볼루션 점검 안내]&nbsp;
						</p>
						<p>
							점검 일 : &nbsp;2024.05.30 (목) 15:00 ~ 16:00 까지 (약 1시간)
						</p>
						<p>
							점검 완료시 해당 공지방에서 안내 드리도록 하겠습니다.
						</p>
						<p>
							점검은 공지된 시간보다 빠르거나 지연될 수 있는 점 양해 부탁드립니다.
						</p>
						<p>
							<br>
							 오늘도 보스를 찾아주셔서 감사합니다!
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8388401">
					</td>
					<td class="memo_no">
						306
					</td>
					<td class="open_memo memo_content" data-idx="8388401" data-i="306">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-30 00:19
					</td>
				</tr>
				<tr class="dspn ans" data-i="306">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8359603">
					</td>
					<td class="memo_no">
						305
					</td>
					<td class="open_memo memo_content" data-idx="8359603" data-i="305">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-30 00:08
					</td>
				</tr>
				<tr class="dspn ans" data-i="305">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8330805">
					</td>
					<td class="memo_no">
						304
					</td>
					<td class="open_memo memo_content" data-idx="8330805" data-i="304">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-29 23:58
					</td>
				</tr>
				<tr class="dspn ans" data-i="304">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8302005">
					</td>
					<td class="memo_no">
						303
					</td>
					<td class="open_memo memo_content" data-idx="8302005" data-i="303">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-29 21:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="303">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8273176">
					</td>
					<td class="memo_no">
						302
					</td>
					<td class="open_memo memo_content" data-idx="8273176" data-i="302">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						05-29 14:26
					</td>
				</tr>
				<tr class="dspn ans" data-i="302">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							현재 현지 네트워크 사정으로 인해 충전 처리가 지연되고 있습니다. 잠시만 기다려주시면 빠르게 처리 도와드리도록 하겠습니다.&nbsp;
						</p>
						<p>
							이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8244289">
					</td>
					<td class="memo_no">
						301
					</td>
					<td class="open_memo memo_content" data-idx="8244289" data-i="301">
						 *******계좌변경안내********* ★보스 회�
					</td>
					<td class="memo_date">
						05-28 10:58
					</td>
				</tr>
				<tr class="dspn ans" data-i="301">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							*******계좌변경안내*********<br>
							 ★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8215551">
					</td>
					<td class="memo_no">
						300
					</td>
					<td class="open_memo memo_content" data-idx="8215551" data-i="300">
						 ★긴금 계좌 긴급점검 카카오뱅크/안�
					</td>
					<td class="memo_date">
						05-28 10:43
					</td>
				</tr>
				<tr class="dspn ans" data-i="300">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★긴금 계좌 긴급점검 카카오뱅크/안성민장 입금 불가안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간부로 해당 장에는 입금이 불가합니다&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8186213">
					</td>
					<td class="memo_no">
						299
					</td>
					<td class="open_memo memo_content" data-idx="8186213" data-i="299">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-27 07:33
					</td>
				</tr>
				<tr class="dspn ans" data-i="299">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8157512">
					</td>
					<td class="memo_no">
						298
					</td>
					<td class="open_memo memo_content" data-idx="8157512" data-i="298">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-27 07:19
					</td>
				</tr>
				<tr class="dspn ans" data-i="298">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8128811">
					</td>
					<td class="memo_no">
						297
					</td>
					<td class="open_memo memo_content" data-idx="8128811" data-i="297">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-27 02:55
					</td>
				</tr>
				<tr class="dspn ans" data-i="297">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8100106">
					</td>
					<td class="memo_no">
						296
					</td>
					<td class="open_memo memo_content" data-idx="8100106" data-i="296">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-27 00:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="296">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8071353">
					</td>
					<td class="memo_no">
						295
					</td>
					<td class="open_memo memo_content" data-idx="8071353" data-i="295">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-26 13:33
					</td>
				</tr>
				<tr class="dspn ans" data-i="295">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8042672">
					</td>
					<td class="memo_no">
						294
					</td>
					<td class="open_memo memo_content" data-idx="8042672" data-i="294">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-25 23:48
					</td>
				</tr>
				<tr class="dspn ans" data-i="294">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="8014001">
					</td>
					<td class="memo_no">
						293
					</td>
					<td class="open_memo memo_content" data-idx="8014001" data-i="293">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-25 17:45
					</td>
				</tr>
				<tr class="dspn ans" data-i="293">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7985351">
					</td>
					<td class="memo_no">
						292
					</td>
					<td class="open_memo memo_content" data-idx="7985351" data-i="292">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						05-25 15:13
					</td>
				</tr>
				<tr class="dspn ans" data-i="292">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							가상축구정상화 안내
						</p>
						<p>
							현시간 부로 영상송출 모두 정상화 확인되어 이용가능하니 참고하여 이용해 주시기 바랍니다 ^^
						</p>
						<p>
							일시적으로 불안정하게 작동될 수 있는 점 참고해주시길 바라며,변동사항이 확인될시 재공지드리겠습니다
						</p>
						<p>
							운영에 불편을 드려 죄송합니다.
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7956654">
					</td>
					<td class="memo_no">
						291
					</td>
					<td class="open_memo memo_content" data-idx="7956654" data-i="291">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						05-25 08:30
					</td>
				</tr>
				<tr class="dspn ans" data-i="291">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 가상축구 게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7928004">
					</td>
					<td class="memo_no">
						290
					</td>
					<td class="open_memo memo_content" data-idx="7928004" data-i="290">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-24 20:28
					</td>
				</tr>
				<tr class="dspn ans" data-i="290">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7899384">
					</td>
					<td class="memo_no">
						289
					</td>
					<td class="open_memo memo_content" data-idx="7899384" data-i="289">
						 ★현 시간 새로운 계좌안내 발급안내
					</td>
					<td class="memo_date">
						05-24 20:26
					</td>
				</tr>
				<tr class="dspn ans" data-i="289">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★현 시간 새로운 계좌안내 발급안내 계좌문의 필수입니다.★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7870763">
					</td>
					<td class="memo_no">
						288
					</td>
					<td class="open_memo memo_content" data-idx="7870763" data-i="288">
						 ★카카오뱅크/박진우장 입금 불가 계�
					</td>
					<td class="memo_date">
						05-24 19:41
					</td>
				</tr>
				<tr class="dspn ans" data-i="288">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★카카오뱅크/박진우장 입금 불가 계좌변경안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7842135">
					</td>
					<td class="memo_no">
						287
					</td>
					<td class="open_memo memo_content" data-idx="7842135" data-i="287">
						 ★전회원 입금 계좌 변경안내 계좌문�
					</td>
					<td class="memo_date">
						05-24 18:10
					</td>
				</tr>
				<tr class="dspn ans" data-i="287">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★전회원 입금 계좌 변경안내 계좌문의 필수입니다★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7813515">
					</td>
					<td class="memo_no">
						286
					</td>
					<td class="open_memo memo_content" data-idx="7813515" data-i="286">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-24 18:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="286">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7784895">
					</td>
					<td class="memo_no">
						285
					</td>
					<td class="open_memo memo_content" data-idx="7784895" data-i="285">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-24 18:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="285">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7756273">
					</td>
					<td class="memo_no">
						284
					</td>
					<td class="open_memo memo_content" data-idx="7756273" data-i="284">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-24 17:39
					</td>
				</tr>
				<tr class="dspn ans" data-i="284">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7727657">
					</td>
					<td class="memo_no">
						283
					</td>
					<td class="open_memo memo_content" data-idx="7727657" data-i="283">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-24 17:34
					</td>
				</tr>
				<tr class="dspn ans" data-i="283">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7699041">
					</td>
					<td class="memo_no">
						282
					</td>
					<td class="open_memo memo_content" data-idx="7699041" data-i="282">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-24 17:34
					</td>
				</tr>
				<tr class="dspn ans" data-i="282">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7670425">
					</td>
					<td class="memo_no">
						281
					</td>
					<td class="open_memo memo_content" data-idx="7670425" data-i="281">
						 ★농협/김재후 절대 입금 불가 입금 �
					</td>
					<td class="memo_date">
						05-24 17:32
					</td>
				</tr>
				<tr class="dspn ans" data-i="281">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★농협/김재후 절대 입금 불가 입금 시 충전처리 불가합니다.★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7641802">
					</td>
					<td class="memo_no">
						280
					</td>
					<td class="open_memo memo_content" data-idx="7641802" data-i="280">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-24 15:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="280">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7613149">
					</td>
					<td class="memo_no">
						279
					</td>
					<td class="open_memo memo_content" data-idx="7613149" data-i="279">
						 카카오뱅크&nbsp;/ 최준원장 입금 절대
					</td>
					<td class="memo_date">
						05-24 13:25
					</td>
				</tr>
				<tr class="dspn ans" data-i="279">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							카카오뱅크&nbsp;/ 최준원장 입금 절대 불가&nbsp;
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							계좌가&nbsp; 변경됬음에도&nbsp; 전계좌로 입금하시는 회원님들이 계십니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7584539">
					</td>
					<td class="memo_no">
						278
					</td>
					<td class="open_memo memo_content" data-idx="7584539" data-i="278">
						 ★입금 전 계좌문의 안할 시 충전 처�
					</td>
					<td class="memo_date">
						05-24 12:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="278">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★입금 전 계좌문의 안할 시 충전 처리불가★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7555936">
					</td>
					<td class="memo_no">
						277
					</td>
					<td class="open_memo memo_content" data-idx="7555936" data-i="277">
						 ★보스 카카오뱅크 최준원장 입금불�
					</td>
					<td class="memo_date">
						05-24 12:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="277">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 카카오뱅크 최준원장 입금불가 계좌&nbsp; 변경안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7527326">
					</td>
					<td class="memo_no">
						276
					</td>
					<td class="open_memo memo_content" data-idx="7527326" data-i="276">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-23 23:51
					</td>
				</tr>
				<tr class="dspn ans" data-i="276">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7498744">
					</td>
					<td class="memo_no">
						275
					</td>
					<td class="open_memo memo_content" data-idx="7498744" data-i="275">
						 ★회원님들의 계좌번호가 전부 변경�
					</td>
					<td class="memo_date">
						05-23 22:39
					</td>
				</tr>
				<tr class="dspn ans" data-i="275">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★회원님들의 계좌번호가 전부 변경되었스빈다★
						</p>
						<p>
							계좌문의를 안하고 전계좌 입금 시 충전처리가 절대 불가합니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7470163">
					</td>
					<td class="memo_no">
						274
					</td>
					<td class="open_memo memo_content" data-idx="7470163" data-i="274">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-23 22:35
					</td>
				</tr>
				<tr class="dspn ans" data-i="274">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">계좌문의 전 계좌로 입금 시 처리가 불가하오니 계좌문의 후 입금 해주시기 바랍니다.</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7441581">
					</td>
					<td class="memo_no">
						273
					</td>
					<td class="open_memo memo_content" data-idx="7441581" data-i="273">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-23 22:16
					</td>
				</tr>
				<tr class="dspn ans" data-i="273">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7412987">
					</td>
					<td class="memo_no">
						272
					</td>
					<td class="open_memo memo_content" data-idx="7412987" data-i="272">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-23 20:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="272">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7384395">
					</td>
					<td class="memo_no">
						271
					</td>
					<td class="open_memo memo_content" data-idx="7384395" data-i="271">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-23 18:43
					</td>
				</tr>
				<tr class="dspn ans" data-i="271">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7355795">
					</td>
					<td class="memo_no">
						270
					</td>
					<td class="open_memo memo_content" data-idx="7355795" data-i="270">
						 항상 입금하시기 전 계좌문의 한 후 �
					</td>
					<td class="memo_date">
						05-23 16:21
					</td>
				</tr>
				<tr class="dspn ans" data-i="270">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7327207">
					</td>
					<td class="memo_no">
						269
					</td>
					<td class="open_memo memo_content" data-idx="7327207" data-i="269">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						05-23 16:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="269">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7298623">
					</td>
					<td class="memo_no">
						268
					</td>
					<td class="open_memo memo_content" data-idx="7298623" data-i="268">
						 ##스포츠/미니게임 "무한 돌발 "이벤트
					</td>
					<td class="memo_date">
						05-23 15:58
					</td>
				</tr>
				<tr class="dspn ans" data-i="268">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##스포츠/미니게임 "무한 돌발 "이벤트 안내##
						</p>
						<p>
							## 16시부터 ~ 19:00시까지&nbsp;<br>
							 스포츠/미니게임 "무한돌발"이벤트 진행합니다. ##<br>
							 &nbsp; &nbsp;&nbsp;<br>
							 @스포츠 3폴더 충전시 20% 자동 지급
						</p>
						<p>
							@스포츠2폴더/미니게임 충전시 10% 자동 지급
						</p>
						<p>
							<br>
							 -모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							-환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							-환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다^^
						</p>
						<p>
							-다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가합니다^^
						</p>
						<p>
							@스포츠 롤링 100%<br>
							 @미니게임 롤링 400%
						</p>
						<p>
							<br>
							 !!지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다!!
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss77cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7270039">
					</td>
					<td class="memo_no">
						267
					</td>
					<td class="open_memo memo_content" data-idx="7270039" data-i="267">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-23 15:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="267">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7241455">
					</td>
					<td class="memo_no">
						266
					</td>
					<td class="open_memo memo_content" data-idx="7241455" data-i="266">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-23 15:54
					</td>
				</tr>
				<tr class="dspn ans" data-i="266">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7212823">
					</td>
					<td class="memo_no">
						265
					</td>
					<td class="open_memo memo_content" data-idx="7212823" data-i="265">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						05-23 02:13
					</td>
				</tr>
				<tr class="dspn ans" data-i="265">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스&nbsp;운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던 슬롯유형 프라그마틱 게임은&nbsp;긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!<br>
							 평생 주소 : 보스사이트<strong>.com</strong><br>
							 24시 텔레그램: @boss365cs
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7184254">
					</td>
					<td class="memo_no">
						264
					</td>
					<td class="open_memo memo_content" data-idx="7184254" data-i="264">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						05-23 00:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="264">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 슬롯유형 프라그마틱 게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7155690">
					</td>
					<td class="memo_no">
						263
					</td>
					<td class="open_memo memo_content" data-idx="7155690" data-i="263">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-22 23:52
					</td>
				</tr>
				<tr class="dspn ans" data-i="263">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7127105">
					</td>
					<td class="memo_no">
						262
					</td>
					<td class="open_memo memo_content" data-idx="7127105" data-i="262">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-22 19:55
					</td>
				</tr>
				<tr class="dspn ans" data-i="262">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7098550">
					</td>
					<td class="memo_no">
						261
					</td>
					<td class="open_memo memo_content" data-idx="7098550" data-i="261">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-22 18:25
					</td>
				</tr>
				<tr class="dspn ans" data-i="261">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7069953">
					</td>
					<td class="memo_no">
						260
					</td>
					<td class="open_memo memo_content" data-idx="7069953" data-i="260">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-22 00:16
					</td>
				</tr>
				<tr class="dspn ans" data-i="260">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7041415">
					</td>
					<td class="memo_no">
						259
					</td>
					<td class="open_memo memo_content" data-idx="7041415" data-i="259">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-21 18:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="259">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="7012896">
					</td>
					<td class="memo_no">
						258
					</td>
					<td class="open_memo memo_content" data-idx="7012896" data-i="258">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-21 17:34
					</td>
				</tr>
				<tr class="dspn ans" data-i="258">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6984361">
					</td>
					<td class="memo_no">
						257
					</td>
					<td class="open_memo memo_content" data-idx="6984361" data-i="257">
						 안녕하세요 회원님들보스 운영팀입�
					</td>
					<td class="memo_date">
						05-21 16:33
					</td>
				</tr>
				<tr class="dspn ans" data-i="257">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<br>
							 안녕하세요 회원님들보스 운영팀입니다.
						</p>
						<p>
							스포츠/미니게임 "무한 돌발 "이벤트 안내
						</p>
						<p>
							16시30분부터 ~ 19:30시까지&nbsp;<br>
							 스포츠/미니게임 "무한돌발"이벤트 진행합니다.<br>
							 &nbsp; &nbsp;&nbsp;<br>
							 스포츠 3폴더 충전시 20% 자동 지급
						</p>
						<p>
							스포츠2폴더/미니게임 충전시 10% 자동 지급
						</p>
						<p>
							<br>
							 모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다^^
						</p>
						<p>
							다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가합니다^^
						</p>
						<p>
							스포츠 롤링 100%<br>
							 미니게임 롤링 400%
						</p>
						<p>
							<br>
							 지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다.
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6955798">
					</td>
					<td class="memo_no">
						256
					</td>
					<td class="open_memo memo_content" data-idx="6955798" data-i="256">
						 ##스포츠,미니게임 / 카지노 "무한 돌�
					</td>
					<td class="memo_date">
						05-20 16:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="256">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##스포츠,미니게임 / 카지노 "무한 돌발 "이벤트 안내##
						</p>
						<p>
							@16시부터 ~ 19:00시까지&nbsp;<br>
							 스포츠/미니게임 "무한돌발"이벤트 진행합니다.<br>
							 &nbsp; &nbsp;&nbsp;<br>
							 - 스포츠2폴더/미니게임 충전시 10% 자동 지급
						</p>
						<p>
							- 카지노 5% 추가지급
						</p>
						<p>
							- 모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							- 환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							- 환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다^^
						</p>
						<p>
							- 다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가합니다^^
						</p>
						<p>
							@스포츠 롤링 100%<br>
							 @미니게임 롤링 400%<br>
							 @카지노 롤링 500%
						</p>
						<p>
							지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다.‼️
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6927283">
					</td>
					<td class="memo_no">
						255
					</td>
					<td class="open_memo memo_content" data-idx="6927283" data-i="255">
						 &nbsp;[크라운 게임 점검 안내]&nbsp;
					</td>
					<td class="memo_date">
						05-20 12:46
					</td>
				</tr>
				<tr class="dspn ans" data-i="255">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp;[크라운 게임 점검 안내]&nbsp;
						</p>
						<p>
							현시간 부로 17:00시까지 크라운 게임 점검 할 예정입니다. 이용에 차질이 없도록 확인 후 이용해 주시기 바랍니다.&nbsp;
						</p>
						<p>
							오늘도 보스를 찾아주셔서 감사합니다!
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6898268">
					</td>
					<td class="memo_no">
						254
					</td>
					<td class="open_memo memo_content" data-idx="6898268" data-i="254">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-19 22:37
					</td>
				</tr>
				<tr class="dspn ans" data-i="254">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6869802">
					</td>
					<td class="memo_no">
						253
					</td>
					<td class="open_memo memo_content" data-idx="6869802" data-i="253">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-19 18:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="253">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6841300">
					</td>
					<td class="memo_no">
						252
					</td>
					<td class="open_memo memo_content" data-idx="6841300" data-i="252">
						 &nbsp; ## 프리스핀(슬롯) 이벤트##
					</td>
					<td class="memo_date">
						05-18 23:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="252">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp; ## 프리스핀(슬롯) 이벤트##
						</p>
						<p>
							#안녕하세요 회원님들 운영진입니다.#
						</p>
						<p>
							‼️매주 일요일 프리스핀 DAY 이벤트 안내 드립니다 ‼️
						</p>
						<p>
							이번 프리스핀 게임사는 프라그마틱 입니다
						</p>
						<p>
							매주 금요일, 토요일 합산 입금액(슬롯) 기준&nbsp;
						</p>
						<p>
							합 입금 10만원 이상 3만 포인트 지급
						</p>
						<p>
							합 입금 50만원 이상 7만 포인트 지급
						</p>
						<p>
							합 입금 100만원 이상 10만 포인트 지급
						</p>
						<p>
							합 입금 200만원 이상 15만 포인트 지급
						</p>
						<p>
							합 입금 300만원 이상 20만 포인트 지급
						</p>
						<p>
							&nbsp;지정된 게임 이외 게임 이용 시 모든 금액 몰수처리
						</p>
						<p>
							&nbsp;포인트는 단독 사용만 가능하며 롤링 300% / 최대 출금 5배 입니다.
						</p>
						<p>
							&nbsp;지정 게임사 긴급 점검으로 인하여 부득이하게 변경 될 수 있습니다.
						</p>
						<p>
							&nbsp;지정 게임사는 매주 변경되니 채널방 공지 참고 해주시면 감사하겠습니다.
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6812784">
					</td>
					<td class="memo_no">
						251
					</td>
					<td class="open_memo memo_content" data-idx="6812784" data-i="251">
						 [레볼루션 점검 완료]
					</td>
					<td class="memo_date">
						05-18 12:28
					</td>
				</tr>
				<tr class="dspn ans" data-i="251">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							[레볼루션 점검 완료]
						</p>
						<p>
							레볼루션 홀덤 점검 완료되었습니다.<br>
							 현 시간부로 레볼루션 홀덤 정상적으로 접속 가능합니다.
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6784402">
					</td>
					<td class="memo_no">
						250
					</td>
					<td class="open_memo memo_content" data-idx="6784402" data-i="250">
						 [레볼루션 점검 안내]
					</td>
					<td class="memo_date">
						05-18 11:36
					</td>
				</tr>
				<tr class="dspn ans" data-i="250">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							[레볼루션 점검 안내]
						</p>
						<p>
							점검 일 : &nbsp;2024.05.18 (토) 12:00 ~ 13:00 까지 (약 1시간)
						</p>
						<p>
							점검 완료시 해당 공지방에서 안내 드리도록 하겠습니다.
						</p>
						<p>
							점검은 공지된 시간보다 빠르거나 지연될 수 있는 점 양해 부탁드립니다.
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							오늘도 보스를 찾아주셔서 감사합니다
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6756016">
					</td>
					<td class="memo_no">
						249
					</td>
					<td class="open_memo memo_content" data-idx="6756016" data-i="249">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-18 02:14
					</td>
				</tr>
				<tr class="dspn ans" data-i="249">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6727652">
					</td>
					<td class="memo_no">
						248
					</td>
					<td class="open_memo memo_content" data-idx="6727652" data-i="248">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-18 00:09
					</td>
				</tr>
				<tr class="dspn ans" data-i="248">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6699289">
					</td>
					<td class="memo_no">
						247
					</td>
					<td class="open_memo memo_content" data-idx="6699289" data-i="247">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-17 19:27
					</td>
				</tr>
				<tr class="dspn ans" data-i="247">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6670944">
					</td>
					<td class="memo_no">
						246
					</td>
					<td class="open_memo memo_content" data-idx="6670944" data-i="246">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-17 19:27
					</td>
				</tr>
				<tr class="dspn ans" data-i="246">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6642597">
					</td>
					<td class="memo_no">
						245
					</td>
					<td class="open_memo memo_content" data-idx="6642597" data-i="245">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-17 18:16
					</td>
				</tr>
				<tr class="dspn ans" data-i="245">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6614186">
					</td>
					<td class="memo_no">
						244
					</td>
					<td class="open_memo memo_content" data-idx="6614186" data-i="244">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-17 00:26
					</td>
				</tr>
				<tr class="dspn ans" data-i="244">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6585893">
					</td>
					<td class="memo_no">
						243
					</td>
					<td class="open_memo memo_content" data-idx="6585893" data-i="243">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-16 20:26
					</td>
				</tr>
				<tr class="dspn ans" data-i="243">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6557562">
					</td>
					<td class="memo_no">
						242
					</td>
					<td class="open_memo memo_content" data-idx="6557562" data-i="242">
						 항상 입금하시기 전 계좌문의 한 후 �
					</td>
					<td class="memo_date">
						05-16 16:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="242">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6529297">
					</td>
					<td class="memo_no">
						241
					</td>
					<td class="open_memo memo_content" data-idx="6529297" data-i="241">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						05-16 16:50
					</td>
				</tr>
				<tr class="dspn ans" data-i="241">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6501032">
					</td>
					<td class="memo_no">
						240
					</td>
					<td class="open_memo memo_content" data-idx="6501032" data-i="240">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-16 16:46
					</td>
				</tr>
				<tr class="dspn ans" data-i="240">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6472734">
					</td>
					<td class="memo_no">
						239
					</td>
					<td class="open_memo memo_content" data-idx="6472734" data-i="239">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						05-16 02:38
					</td>
				</tr>
				<tr class="dspn ans" data-i="239">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							현재 공홈 가상경기들
						</p>
						<p>
							전부 내려간 상태입니다.
						</p>
						<p>
							모니터링 후 정상 업데이트 시&nbsp;
						</p>
						<p>
							재공지 드리겠습니다
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6444495">
					</td>
					<td class="memo_no">
						238
					</td>
					<td class="open_memo memo_content" data-idx="6444495" data-i="238">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-16 00:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="238">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6416229">
					</td>
					<td class="memo_no">
						237
					</td>
					<td class="open_memo memo_content" data-idx="6416229" data-i="237">
						 ##필독 전 계좌 입금 시 충전처리 불가
					</td>
					<td class="memo_date">
						05-15 19:16
					</td>
				</tr>
				<tr class="dspn ans" data-i="237">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##필독 전 계좌 입금 시 충전처리 불가능합니다##
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6388007">
					</td>
					<td class="memo_no">
						236
					</td>
					<td class="open_memo memo_content" data-idx="6388007" data-i="236">
						 ##전 계좌 입금시 충전처리 불가능##
					</td>
					<td class="memo_date">
						05-15 18:40
					</td>
				</tr>
				<tr class="dspn ans" data-i="236">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##전 계좌 입금시 충전처리 불가능##
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6359790">
					</td>
					<td class="memo_no">
						235
					</td>
					<td class="open_memo memo_content" data-idx="6359790" data-i="235">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-15 18:39
					</td>
				</tr>
				<tr class="dspn ans" data-i="235">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6331567">
					</td>
					<td class="memo_no">
						234
					</td>
					<td class="open_memo memo_content" data-idx="6331567" data-i="234">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-14 23:30
					</td>
				</tr>
				<tr class="dspn ans" data-i="234">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 김상욱 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6303387">
					</td>
					<td class="memo_no">
						233
					</td>
					<td class="open_memo memo_content" data-idx="6303387" data-i="233">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-14 23:25
					</td>
				</tr>
				<tr class="dspn ans" data-i="233">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6278879">
					</td>
					<td class="memo_no">
						232
					</td>
					<td class="open_memo memo_content" data-idx="6278879" data-i="232">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						05-14 23:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="232">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							현재 은행사 문제로 입금안되시며 추 후 정상화시 재 쪽지 날려드리겠습니다
						</p>
						<p>
							이용에 붚편드려 죄송합니
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6252111">
					</td>
					<td class="memo_no">
						231
					</td>
					<td class="open_memo memo_content" data-idx="6252111" data-i="231">
						 안녕하세요 보스 운영진입니다!
					</td>
					<td class="memo_date">
						05-14 21:52
					</td>
				</tr>
				<tr class="dspn ans" data-i="231">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 보스 운영진입니다!
						</p>
						<p>
							&nbsp;현재 인터넷 문제로인해 충전.환전지연
						</p>
						<p>
							현재 인터넷 문제로인해 충전.환전 지연되고있습니다 현재 확인중에있으며 빠르게 확인후 처리해드리겠습니다<br>
							 이용에불편드려죄송합니다.
						</p>
						<p>
							<br>
							 오늘도 보스를 찾아주셔서감사합니다&nbsp;
						</p>
						<p>
							<br>
							 &nbsp;평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6223932">
					</td>
					<td class="memo_no">
						230
					</td>
					<td class="open_memo memo_content" data-idx="6223932" data-i="230">
						 ##전 계좌 입금시 충전처리 불가능할�
					</td>
					<td class="memo_date">
						05-14 20:27
					</td>
				</tr>
				<tr class="dspn ans" data-i="230">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##전 계좌 입금시 충전처리 불가능할수 있습니다##
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6195721">
					</td>
					<td class="memo_no">
						229
					</td>
					<td class="open_memo memo_content" data-idx="6195721" data-i="229">
						 안녕하세요. 보스 운영팀입니다.^^!
					</td>
					<td class="memo_date">
						05-14 17:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="229">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<strong>안녕하세요. 보스 운영팀입니다.^^!</strong>
						</p>
						<p>
							<strong>현재 일시적으로 충전이 많이 들어와 순차적으로 처리</strong> 진행중에 있습니다..<br>
							 최대한 빠른 시간 안에 처리 진행중이오니 잠시만 기다려 주시기 바랍니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							<strong>추가적으로 궁금하신 사항은 언제든지 문의주시기 바랍니다<br>
							 오늘도 저희 보스를&nbsp;찾아주셔서 감사합니다.<br>
							 보스는 항상 회원님의 건승을 기원합니다</strong>
						</p>
						<p>
							<strong>텔레그램 : @boss365cs</strong>
						</p>
						<p>
							고객센터 카카오톡 : boss77cs<br>
							<strong>평생 주소: </strong><strong>보스사이트</strong><strong>.com</strong>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6167500">
					</td>
					<td class="memo_no">
						228
					</td>
					<td class="open_memo memo_content" data-idx="6167500" data-i="228">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						05-14 16:39
					</td>
				</tr>
				<tr class="dspn ans" data-i="228">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							<strong>안녕하세요. 보스 운영팀입니다.^^!</strong>
						</p>
						<p>
							<strong>일시적으로 환전이 많이 들어와 순차적으로 처리</strong> 진행중에 있습니다..<br>
							 최대한 빠른 시간 안에 처리 진행중이오니 잠시만 기다려 주시기 바랍니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							<strong>추가적으로 궁금하신 사항은 언제든지 문의주시기 바랍니다<br>
							 오늘도 저희 보스를&nbsp;찾아주셔서 감사합니다.<br>
							 보스는 항상 회원님의 건승을 기원합니다</strong>
						</p>
						<p>
							<strong>텔레그램 : @boss365cs</strong>
						</p>
						<p>
							고객센터 카카오톡 : boss77cs<br>
							<strong>평생 주소: </strong><strong>보스사이트</strong><strong>.com</strong>
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6139344">
					</td>
					<td class="memo_no">
						227
					</td>
					<td class="open_memo memo_content" data-idx="6139344" data-i="227">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-14 16:31
					</td>
				</tr>
				<tr class="dspn ans" data-i="227">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							카카오뱅크 최준원장 입금불가&nbsp;<br>
							 계좌문의 안할시 충전처리 불가합니다 계좌 문의후 충전신청 해주시기 바랍니다 ^^
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6111189">
					</td>
					<td class="memo_no">
						226
					</td>
					<td class="open_memo memo_content" data-idx="6111189" data-i="226">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-14 16:26
					</td>
				</tr>
				<tr class="dspn ans" data-i="226">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6083034">
					</td>
					<td class="memo_no">
						225
					</td>
					<td class="open_memo memo_content" data-idx="6083034" data-i="225">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-14 16:20
					</td>
				</tr>
				<tr class="dspn ans" data-i="225">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6054879">
					</td>
					<td class="memo_no">
						224
					</td>
					<td class="open_memo memo_content" data-idx="6054879" data-i="224">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-14 15:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="224">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="6026710">
					</td>
					<td class="memo_no">
						223
					</td>
					<td class="open_memo memo_content" data-idx="6026710" data-i="223">
						 ##페이백 이벤트##
					</td>
					<td class="memo_date">
						05-14 00:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="223">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##페이백 이벤트##
						</p>
						<p>
							#안녕하세요 회원님들 운영진입니다.#
						</p>
						<p>
							‼️매주 화요일 마다 지난주 화요일 ~ 월요일의 입출금 차액 5% 를 지급 합니다 ‼️
						</p>
						<p>
							페이백 계산방법
						</p>
						<p>
							해당 주 총 입금액 10만원 해당 주 총 출금액 2만원 100,000 - 20,000=80,000&nbsp;
						</p>
						<p>
							페이백 지급포인트 : 80,000x5% = 4,000 원&nbsp;
						</p>
						<p>
							&nbsp;지급 &nbsp;받으신 페이백 롤링&nbsp;<br>
							 스포츠100%/스포츠 이외 다른게임 전부 300%
						</p>
						<p>
							&nbsp;페이백 버튼 클릭하시면 자동으로 지급 되시는점 참고 바랍니다
						</p>
						<p>
							&nbsp;주 2회 입금 이상자만 참여 가능 합니다
						</p>
						<p>
							지급받은 페이백 금액에 최대 10배까지 환전 가능하니 이용에 차질없게 참고해주시기 바랍니다.&nbsp;
						</p>
						<p>
							1~2레벨 - 최대지급액 50만원<br>
							 3~4레벨 - 최대지급액 100만원<br>
							 vip 1~2레벨 - 최대지급액 200만원<br>
							 vip 3레벨 - 최대지급액300만원<br>
							 ‼️레벨 등업에 따라 지급액 한도가 변경되었으니 많은 참여 바랍니다‼️
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5998584">
					</td>
					<td class="memo_no">
						222
					</td>
					<td class="open_memo memo_content" data-idx="5998584" data-i="222">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-13 23:50
					</td>
				</tr>
				<tr class="dspn ans" data-i="222">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5970456">
					</td>
					<td class="memo_no">
						221
					</td>
					<td class="open_memo memo_content" data-idx="5970456" data-i="221">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-13 20:15
					</td>
				</tr>
				<tr class="dspn ans" data-i="221">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5942289">
					</td>
					<td class="memo_no">
						220
					</td>
					<td class="open_memo memo_content" data-idx="5942289" data-i="220">
						 ★보스 카카오톡 고객센터 아이디&nbsp;
					</td>
					<td class="memo_date">
						05-13 14:50
					</td>
				</tr>
				<tr class="dspn ans" data-i="220">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 카카오톡 고객센터 아이디&nbsp;변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현 시간부로 보스 카카오톡 고객센터 아이디가 변경되었습니다!
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss77cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5913569">
					</td>
					<td class="memo_no">
						219
					</td>
					<td class="open_memo memo_content" data-idx="5913569" data-i="219">
						 ##슈퍼게임 긴급점검 종료 안내입니다
					</td>
					<td class="memo_date">
						05-12 14:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="219">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##슈퍼게임 긴급점검 종료 안내입니다.##<br>
							<br>
							 안녕하세요 보스 운영진입니다!
						</p>
						<p>
							&nbsp;이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							<br>
							 &nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요➕
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5885532">
					</td>
					<td class="memo_no">
						218
					</td>
					<td class="open_memo memo_content" data-idx="5885532" data-i="218">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-12 13:11
					</td>
				</tr>
				<tr class="dspn ans" data-i="218">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5857502">
					</td>
					<td class="memo_no">
						217
					</td>
					<td class="open_memo memo_content" data-idx="5857502" data-i="217">
						 ##전 계좌 입금 시 충전처리 불가능##
					</td>
					<td class="memo_date">
						05-12 10:47
					</td>
				</tr>
				<tr class="dspn ans" data-i="217">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##전 계좌 입금 시 충전처리 불가능##
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5829481">
					</td>
					<td class="memo_no">
						216
					</td>
					<td class="open_memo memo_content" data-idx="5829481" data-i="216">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-12 09:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="216">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5801465">
					</td>
					<td class="memo_no">
						215
					</td>
					<td class="open_memo memo_content" data-idx="5801465" data-i="215">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-12 08:08
					</td>
				</tr>
				<tr class="dspn ans" data-i="215">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5773449">
					</td>
					<td class="memo_no">
						214
					</td>
					<td class="open_memo memo_content" data-idx="5773449" data-i="214">
						 &nbsp; &nbsp; &nbsp; ##프리스핀(슬롯) 이벤
					</td>
					<td class="memo_date">
						05-12 00:08
					</td>
				</tr>
				<tr class="dspn ans" data-i="214">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp; &nbsp; &nbsp; ##프리스핀(슬롯) 이벤트##
						</p>
						<p>
							#안녕하세요 회원님들&nbsp; 운영진입니다.#
						</p>
						<p>
							‼️매주 일요일 프리스핀 DAY 이벤트 안내 드립니다 ‼️
						</p>
						<p>
							이번 프리스핀 게임사는 [플래이앤고]입니다
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5745459">
					</td>
					<td class="memo_no">
						213
					</td>
					<td class="open_memo memo_content" data-idx="5745459" data-i="213">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-11 23:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="213">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5717470">
					</td>
					<td class="memo_no">
						212
					</td>
					<td class="open_memo memo_content" data-idx="5717470" data-i="212">
						 ★카카오뱅크 점검으로 입금계좌 변�
					</td>
					<td class="memo_date">
						05-11 22:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="212">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★카카오뱅크 점검으로 입금계좌 변경 필독★
						</p>
						<p>
							안녕하세요 보스 운영팀입니다.
						</p>
						<p>
							5월12일 01:00 ~ 08:00까지 카카오뱅크 점검으로인하여 입금계좌가 변경될 예정입니다.
						</p>
						<p>
							계좌변경 이 후 전 카카오뱅크 계좌로 입금 시 충전처리가 불가하니 회원님들께서는 참고해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!
						</p>
						<p>
							평생 주소: 보스사이트.com
						</p>
						<p>
							고객센터 텔레그램 : @Boss365cs
						</p>
						<p>
							고객센터 카카오톡 : boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5689488">
					</td>
					<td class="memo_no">
						211
					</td>
					<td class="open_memo memo_content" data-idx="5689488" data-i="211">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						05-11 22:19
					</td>
				</tr>
				<tr class="dspn ans" data-i="211">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							현재 인터넷 문제로인해 환전지연
						</p>
						<p>
							현재 인터넷 문제로인해 충전.환전 지연되고있습니다 현재 확인중에있으며 빠르게 확인후 처리해드리겠습니다<br>
							 이용에불편드려죄송합니다.
						</p>
						<p>
							<br>
							 &nbsp;오늘도 보스를 찾아주셔서감사합니다&nbsp;<br>
							 &nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">카카오톡 : boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5661508">
					</td>
					<td class="memo_no">
						210
					</td>
					<td class="open_memo memo_content" data-idx="5661508" data-i="210">
						 ★카카오뱅크 점검으로 입금계좌 변�
					</td>
					<td class="memo_date">
						05-11 20:44
					</td>
				</tr>
				<tr class="dspn ans" data-i="210">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★카카오뱅크 점검으로 입금계좌 변경 필독★
						</p>
						<p>
							안녕하세요 보스&nbsp;운영팀입니다.
						</p>
						<p>
							5월12일 01:00 ~ 08:00까지 카카오뱅크 점검으로인하여 입금계좌가 변경될 예정입니다.
						</p>
						<p>
							계좌변경 이 후 전 카카오뱅크 계좌로 입금 시 충전처리가 불가하니 회원님들께서는 참고해주시길 바랍니다.
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong>
						</p>
						<p>
							고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5633479">
					</td>
					<td class="memo_no">
						209
					</td>
					<td class="open_memo memo_content" data-idx="5633479" data-i="209">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-11 18:18
					</td>
				</tr>
				<tr class="dspn ans" data-i="209">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5605435">
					</td>
					<td class="memo_no">
						208
					</td>
					<td class="open_memo memo_content" data-idx="5605435" data-i="208">
						 ###슈퍼게임 긴급점검 안내입니다.###
					</td>
					<td class="memo_date">
						05-11 14:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="208">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							###슈퍼게임 긴급점검 안내입니다.###<br>
							<br>
							 안녕하세요 보스 운영진입니다!<br>
							<br>
							 점검 일시 : 현시간부로 종료시간 미정
						</p>
						<p>
							점검 사항 : 슈퍼사다리,슈퍼섯다,슈퍼 로하이
						</p>
						<p>
							&nbsp;이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							‼️정상화 시 재안내 드리도록 하겠습니다‼️
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요➕
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5577461">
					</td>
					<td class="memo_no">
						207
					</td>
					<td class="open_memo memo_content" data-idx="5577461" data-i="207">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-11 00:17
					</td>
				</tr>
				<tr class="dspn ans" data-i="207">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5549517">
					</td>
					<td class="memo_no">
						206
					</td>
					<td class="open_memo memo_content" data-idx="5549517" data-i="206">
						 ##전 계좌 입금시 충전처리 불가##
					</td>
					<td class="memo_date">
						05-10 19:13
					</td>
				</tr>
				<tr class="dspn ans" data-i="206">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##전 계좌 입금시 충전처리 불가##
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5521593">
					</td>
					<td class="memo_no">
						205
					</td>
					<td class="open_memo memo_content" data-idx="5521593" data-i="205">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-10 17:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="205">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5493605">
					</td>
					<td class="memo_no">
						204
					</td>
					<td class="open_memo memo_content" data-idx="5493605" data-i="204">
						 &nbsp;##가상 축구 및 가상게임 벳365 공�
					</td>
					<td class="memo_date">
						05-10 14:24
					</td>
				</tr>
				<tr class="dspn ans" data-i="204">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp;##가상 축구 및 가상게임 벳365 공홈 점검 안내##<br>
							<br>
							 안녕하세요 보스 운영진입니다!
						</p>
						<p>
							공홈 결과처리 정기 점검으로 결과지연이 될 수 있습니다.
						</p>
						<p>
							점검 시간: 14:30 ~ 14:55 분 예정
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇&nbsp;<br>
							 으로 문의 주세요➕
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5465698">
					</td>
					<td class="memo_no">
						203
					</td>
					<td class="open_memo memo_content" data-idx="5465698" data-i="203">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-09 23:58
					</td>
				</tr>
				<tr class="dspn ans" data-i="203">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5437815">
					</td>
					<td class="memo_no">
						202
					</td>
					<td class="open_memo memo_content" data-idx="5437815" data-i="202">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-09 19:53
					</td>
				</tr>
				<tr class="dspn ans" data-i="202">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5409908">
					</td>
					<td class="memo_no">
						201
					</td>
					<td class="open_memo memo_content" data-idx="5409908" data-i="201">
						 ★보스 회원 박인아계좌 입금 시 처리
					</td>
					<td class="memo_date">
						05-09 15:36
					</td>
				</tr>
				<tr class="dspn ans" data-i="201">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원 박인아계좌 입금 시 처리 불가안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 카카오뱅크 박인아계좌 입금 시 처리 불가한 점 알려드립니다&nbsp;!&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5382049">
					</td>
					<td class="memo_no">
						200
					</td>
					<td class="open_memo memo_content" data-idx="5382049" data-i="200">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						05-08 23:17
					</td>
				</tr>
				<tr class="dspn ans" data-i="200">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							현제 인터넷문제로 인해 현재 환전또는충전,문의가 지연되고있습니다&nbsp;
						</p>
						<p>
							최대한 빠르게 확인후 처리해드리겠습니다 불편드려 죄송합니다
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">카카오톡 : boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5354190">
					</td>
					<td class="memo_no">
						199
					</td>
					<td class="open_memo memo_content" data-idx="5354190" data-i="199">
						 ## 전 계좌 입금시 충전처리 불가능할�
					</td>
					<td class="memo_date">
						05-08 18:41
					</td>
				</tr>
				<tr class="dspn ans" data-i="199">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 전 계좌 입금시 충전처리 불가능할수 있습니다##
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5326382">
					</td>
					<td class="memo_no">
						198
					</td>
					<td class="open_memo memo_content" data-idx="5326382" data-i="198">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-08 17:49
					</td>
				</tr>
				<tr class="dspn ans" data-i="198">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5298515">
					</td>
					<td class="memo_no">
						197
					</td>
					<td class="open_memo memo_content" data-idx="5298515" data-i="197">
						 ##스포츠 / 미니게임 돌발 이벤트## &amp;nb
					</td>
					<td class="memo_date">
						05-08 16:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="197">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##스포츠 / 미니게임 돌발 이벤트##<br>
							 &nbsp;<br>
							 &nbsp;<br>
							 안녕하세요 회원님들보스 운영팀입니다.
						</p>
						<p>
							스포츠/미니게임 "무한 돌발 "이벤트 안내
						</p>
						<p>
							16시부터 ~ 19:00시까지&nbsp;<br>
							 스포츠/미니게임 "무한돌발"이벤트 진행합니다.<br>
							 &nbsp; &nbsp;&nbsp;<br>
							 스포츠 3폴더 충전시 20% 자동 지급
						</p>
						<p>
							스포츠2폴더/미니게임 충전시 10% 자동 지급
						</p>
						<p>
							<br>
							 모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다^^
						</p>
						<p>
							다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가합니다^^
						</p>
						<p>
							스포츠 롤링 100%<br>
							 미니게임 롤링 400%
						</p>
						<p>
							<br>
							 지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다.
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5270712">
					</td>
					<td class="memo_no">
						196
					</td>
					<td class="open_memo memo_content" data-idx="5270712" data-i="196">
						 무제한 돌발&nbsp; 안녕하세요 히어로
					</td>
					<td class="memo_date">
						05-08 16:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="196">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							무제한 돌발&nbsp;<br>
							 안녕하세요 히어로 운영진 입니다.
						</p>
						<p>
							스포츠/미니게임/무한 돌발 이벤트 안내
						</p>
						<p>
							현시간부터 ~ 19:00시까지&nbsp;<br>
							 스포츠/미니게임/ "무한돌발"이벤트 진행합니다.
						</p>
						<p>
							스포츠 3폴더 20% 자동지급
						</p>
						<p>
							스포츠 2폴더/미니게임 충전 시 10% 자동지급
						</p>
						<p>
							모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다.
						</p>
						<p>
							다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가한 점 참고바랍니다.^^
						</p>
						<p>
							스포츠 롤링 100%<br>
							 미니게임 롤링 400%
						</p>
						<p>
							지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다.
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 히어로를 찾아주셔서 감사합니다.
						</p>
						<p>
							<br>
							 이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							히어로 먹튀폴리스 보증업체&nbsp;<br>
							 히어로 슈어맨보증업체<br>
							 히어로 먹튀스팟 보증업체<br>
							 평생도메인 : 히어로접속.com (https://xn--2o2b41ocndgzcr72a.com/)텔레그램 고객센터: @hero24cs<br>
							 카카오톡 고객센터: hero24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5242902">
					</td>
					<td class="memo_no">
						195
					</td>
					<td class="open_memo memo_content" data-idx="5242902" data-i="195">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-08 00:21
					</td>
				</tr>
				<tr class="dspn ans" data-i="195">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5215125">
					</td>
					<td class="memo_no">
						194
					</td>
					<td class="open_memo memo_content" data-idx="5215125" data-i="194">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-07 22:53
					</td>
				</tr>
				<tr class="dspn ans" data-i="194">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5187349">
					</td>
					<td class="memo_no">
						193
					</td>
					<td class="open_memo memo_content" data-idx="5187349" data-i="193">
						 &nbsp;[레볼루션 점검 완료 안내]&nbsp;
					</td>
					<td class="memo_date">
						05-07 19:47
					</td>
				</tr>
				<tr class="dspn ans" data-i="193">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp;[레볼루션 점검 완료 안내]&nbsp;
						</p>
						<p>
							<br>
							 레볼루션 긴급 점검 완료되었습니다.
						</p>
						<p>
							<br>
							 운영에 불편을 드려 죄송합니다.
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5159582">
					</td>
					<td class="memo_no">
						192
					</td>
					<td class="open_memo memo_content" data-idx="5159582" data-i="192">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-07 19:15
					</td>
				</tr>
				<tr class="dspn ans" data-i="192">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5131816">
					</td>
					<td class="memo_no">
						191
					</td>
					<td class="open_memo memo_content" data-idx="5131816" data-i="191">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						05-07 19:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="191">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 래볼루션 게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">24시 카카오톡&nbsp;: boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5103994">
					</td>
					<td class="memo_no">
						190
					</td>
					<td class="open_memo memo_content" data-idx="5103994" data-i="190">
						 &nbsp;[레볼루션 점검 완료 안내]&nbsp;
					</td>
					<td class="memo_date">
						05-07 14:16
					</td>
				</tr>
				<tr class="dspn ans" data-i="190">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp;[레볼루션 점검 완료 안내]&nbsp;
						</p>
						<p>
							<br>
							 레볼루션 긴급 점검 완료되었습니다.
						</p>
						<p>
							<br>
							 운영에 불편을 드려 죄송합니다.
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5076229">
					</td>
					<td class="memo_no">
						189
					</td>
					<td class="open_memo memo_content" data-idx="5076229" data-i="189">
						 ##페이백 이벤트##
					</td>
					<td class="memo_date">
						05-07 00:07
					</td>
				</tr>
				<tr class="dspn ans" data-i="189">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##페이백 이벤트##
						</p>
						<p>
							안녕하세요 회원님들 보스운영진입니다.
						</p>
						<p>
							‼️매주 화요일 마다 지난주 화요일 월요일의 입출금 차액 5% 를 지급 합니다 ‼️
						</p>
						<p>
							페이백 계산방법
						</p>
						<p>
							해당 주 총 입금액 10만원 해당 주 총 출금액 2만원 100,000 - 20,000=80,000&nbsp;
						</p>
						<p>
							페이백 지급포인트 : 80,000x5% = 4,000 원&nbsp;
						</p>
						<p>
							&nbsp;지급 &nbsp;받으신 페이백 롤링&nbsp;<br>
							 스포츠100%/스포츠 이외 다른게임 전부 300%
						</p>
						<p>
							&nbsp;페이백 버튼 클릭하시면 자동으로 지급 되시는점 참고 바랍니다
						</p>
						<p>
							&nbsp;주 2회 입금 이상자만 참여 가능 합니다
						</p>
						<p>
							지급받은 페이백 금액에 최대 10배까지 환전 가능하니 이용에 차질없게 참고해주시기 바랍니다.&nbsp;
						</p>
						<p>
							1~2레벨 - 최대지급액 50만원<br>
							 3~4레벨 - 최대지급액 100만원<br>
							 vip 1~2레벨 - 최대지급액 200만원<br>
							 vip 3레벨 - 최대지급액300만원<br>
							 ‼️레벨 등업에 따라 지급액 한도가 변경되었으니 많은 참여 바랍니다‼️
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5048500">
					</td>
					<td class="memo_no">
						188
					</td>
					<td class="open_memo memo_content" data-idx="5048500" data-i="188">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-07 00:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="188">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="5020770">
					</td>
					<td class="memo_no">
						187
					</td>
					<td class="open_memo memo_content" data-idx="5020770" data-i="187">
						 ## 레볼루션 무료토너먼트 개최 안내 #
					</td>
					<td class="memo_date">
						05-06 21:39
					</td>
				</tr>
				<tr class="dspn ans" data-i="187">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 레볼루션 무료토너먼트 개최 안내 ##
						</p>
						<p>
							@일자 : 5월 6일 19시 부터 ~ 매일 19시 개최<br>
							 (마감 공지 안내 전까지 진행)
						</p>
						<p>
							평일상금 : 100만 GTD<br>
							 주말상금 : 300만 GTD
						</p>
						<p>
							@안녕하세요. 무료 토너먼트 개최 안내드립니다.<br>
							 주 7일 매일 19시에 개최되며,<br>
							 회원들의 참가비는 무료입니다.
						</p>
						<p>
							평일은 100만원의 상금,&nbsp;<br>
							 주말은 300만원의 상금으로 개최됩니다.
						</p>
						<p>
							@금액별 상금의 세부 내용은 아래와 같습니다.@
						</p>
						<p>
							상금 100만원 (매주 월 ~ 금 오후 7시)
						</p>
						<p>
							1등 400,000원<br>
							 2등 300,000원<br>
							 3등 150,000원<br>
							 4등 100,000원<br>
							 5등 &nbsp;50,000원<br>
							 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ<br>
							 상금 300만원 (매주 토 ~ 일 오후 7시)
						</p>
						<p>
							1등 1,200,000원<br>
							 2등 600,000원<br>
							 3등 300,000원<br>
							 4등 240,000원<br>
							 5등 180,000원<br>
							 6등 150,000원<br>
							 7등 120,000원<br>
							 8등 90,000원<br>
							 9등 60,000원<br>
							 10등 60,000원<br>
							 상금은 자동지급 되십니다!!
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4993051">
					</td>
					<td class="memo_no">
						186
					</td>
					<td class="open_memo memo_content" data-idx="4993051" data-i="186">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-06 21:28
					</td>
				</tr>
				<tr class="dspn ans" data-i="186">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4965333">
					</td>
					<td class="memo_no">
						185
					</td>
					<td class="open_memo memo_content" data-idx="4965333" data-i="185">
						 항상 입금하시기 전 계좌문의 한 후 �
					</td>
					<td class="memo_date">
						05-06 20:14
					</td>
				</tr>
				<tr class="dspn ans" data-i="185">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4937621">
					</td>
					<td class="memo_no">
						184
					</td>
					<td class="open_memo memo_content" data-idx="4937621" data-i="184">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-06 20:09
					</td>
				</tr>
				<tr class="dspn ans" data-i="184">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4909340">
					</td>
					<td class="memo_no">
						183
					</td>
					<td class="open_memo memo_content" data-idx="4909340" data-i="183">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						05-06 12:17
					</td>
				</tr>
				<tr class="dspn ans" data-i="183">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4881655">
					</td>
					<td class="memo_no">
						182
					</td>
					<td class="open_memo memo_content" data-idx="4881655" data-i="182">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-06 12:07
					</td>
				</tr>
				<tr class="dspn ans" data-i="182">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4853969">
					</td>
					<td class="memo_no">
						181
					</td>
					<td class="open_memo memo_content" data-idx="4853969" data-i="181">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-06 11:24
					</td>
				</tr>
				<tr class="dspn ans" data-i="181">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4826285">
					</td>
					<td class="memo_no">
						180
					</td>
					<td class="open_memo memo_content" data-idx="4826285" data-i="180">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						05-06 10:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="180">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							2024-05-06(월요일) 게임사 점검 공지 전달드립니다.
						</p>
						<p>
							게임사 : WM Live (WM 카지노)<br>
							 점검일시 : 2024-05-06(월요일) 10:00 ~ 14:00&nbsp;
						</p>
						<p>
							게임사 정기 점검 진행으로 해당 게임사의 게임 이용이 불가능합니다.<br>
							 점검시간이 변경될 경우 별도로 공지해드리겠습니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">카카오톡 : boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4798602">
					</td>
					<td class="memo_no">
						179
					</td>
					<td class="open_memo memo_content" data-idx="4798602" data-i="179">
						 ##로투스 게이밍 정기점검 안내입니다
					</td>
					<td class="memo_date">
						05-06 09:34
					</td>
				</tr>
				<tr class="dspn ans" data-i="179">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##로투스 게이밍 정기점검 안내입니다.##
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							안녕하세요 보스 운영진입니다!
						</p>
						<p>
							점검 일시 : 2024년 05월 06일 월요일 10시 부터 16시 까지 총6시간
						</p>
						<p>
							점검 사항 : 서버 안정화, 스튜디오 정리 작업
						</p>
						<p>
							<br>
							 로투스 토큰 게임은 정상 진행합니다.
						</p>
						<p>
							점검 종료시 쪽지드리도록 하겠습니다.
						</p>
						<p>
							&nbsp;이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4770917">
					</td>
					<td class="memo_no">
						178
					</td>
					<td class="open_memo memo_content" data-idx="4770917" data-i="178">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-06 00:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="178">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4743242">
					</td>
					<td class="memo_no">
						177
					</td>
					<td class="open_memo memo_content" data-idx="4743242" data-i="177">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-05 23:13
					</td>
				</tr>
				<tr class="dspn ans" data-i="177">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4715568">
					</td>
					<td class="memo_no">
						176
					</td>
					<td class="open_memo memo_content" data-idx="4715568" data-i="176">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-05 21:15
					</td>
				</tr>
				<tr class="dspn ans" data-i="176">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4687877">
					</td>
					<td class="memo_no">
						175
					</td>
					<td class="open_memo memo_content" data-idx="4687877" data-i="175">
						 항상 입금하시기 전 계좌문의 한 후 �
					</td>
					<td class="memo_date">
						05-05 20:47
					</td>
				</tr>
				<tr class="dspn ans" data-i="175">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4660210">
					</td>
					<td class="memo_no">
						174
					</td>
					<td class="open_memo memo_content" data-idx="4660210" data-i="174">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						05-05 20:45
					</td>
				</tr>
				<tr class="dspn ans" data-i="174">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4632544">
					</td>
					<td class="memo_no">
						173
					</td>
					<td class="open_memo memo_content" data-idx="4632544" data-i="173">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-05 20:11
					</td>
				</tr>
				<tr class="dspn ans" data-i="173">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4604880">
					</td>
					<td class="memo_no">
						172
					</td>
					<td class="open_memo memo_content" data-idx="4604880" data-i="172">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-05 18:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="172">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4577126">
					</td>
					<td class="memo_no">
						171
					</td>
					<td class="open_memo memo_content" data-idx="4577126" data-i="171">
						 ‼️ [레볼루션 점검 안내] ‼️
					</td>
					<td class="memo_date">
						05-05 06:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="171">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							‼️ [레볼루션 점검 안내] ‼️
						</p>
						<p>
							<br>
							 레볼루션 긴급 점검 완료되었습니다.
						</p>
						<p>
							<br>
							 현 시간에 대한 이슈는 원인을 파악중에 있으며 현시간 부로 이용가능하니 참고 하여 이용해주시기 바랍니다.
						</p>
						<p>
							운영에 불편을 드려 죄송합니다.
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4549487">
					</td>
					<td class="memo_no">
						170
					</td>
					<td class="open_memo memo_content" data-idx="4549487" data-i="170">
						 ‼️ [레볼루션 점검 안내] ‼️
					</td>
					<td class="memo_date">
						05-05 05:33
					</td>
				</tr>
				<tr class="dspn ans" data-i="170">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							‼️ [레볼루션 점검 안내] ‼️
						</p>
						<p>
							현재 레볼루션 서버 이슈로인해 정상적으로 이용이 불가하여 불가피하게 긴급점검을 하게 되었습니다.
						</p>
						<p>
							점검 완료시 해당 공지방에서 안내 드리도록 하겠습니다.
						</p>
						<p>
							<br>
							 점검은 공지된 시간보다 빠르거나 지연될 수 있는 점 양해 부탁드립니다.
						</p>
						<p>
							운영에 불편을 드려 죄송합니다.
						</p>
						<p>
							<br>
							 &nbsp;평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4521846">
					</td>
					<td class="memo_no">
						169
					</td>
					<td class="open_memo memo_content" data-idx="4521846" data-i="169">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						05-05 00:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="169">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							&nbsp;프리스핀(슬롯) 이벤트
						</p>
						<p>
							‼️매주 일요일 프리스핀 DAY 이벤트 안내 드립니다 ‼️
						</p>
						<p>
							이번 프리스핀 게임사는 CQ9 입니다
						</p>
						<p>
							매주 금요일, 토요일 합산 입금액(슬롯) 기준&nbsp;
						</p>
						<p>
							합 입금 10만원 이상 3만 포인트 지급
						</p>
						<p>
							합 입금 50만원 이상 7만 포인트 지급
						</p>
						<p>
							합 입금 100만원 이상 10만 포인트 지급
						</p>
						<p>
							합 입금 200만원 이상 15만 포인트 지급
						</p>
						<p>
							합 입금 300만원 이상 20만 포인트 지급
						</p>
						<p>
							&nbsp;지정된 게임 이외 게임 이용 시 모든 금액 몰수처리
						</p>
						<p>
							포인트는 단독 사용만 가능하며 롤링 300% / 최대 출금 5배 입니다.
						</p>
						<p>
							&nbsp;지정 게임사 긴급 점검으로 인하여 부득이하게 변경 될 수 있습니다.
						</p>
						<p>
							&nbsp;지정 게임사는 매주 변경되니 채널방 공지 참고 해주시면 감사하겠습니다.
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">카카오톡 : boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4494221">
					</td>
					<td class="memo_no">
						168
					</td>
					<td class="open_memo memo_content" data-idx="4494221" data-i="168">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-05 00:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="168">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4466570">
					</td>
					<td class="memo_no">
						167
					</td>
					<td class="open_memo memo_content" data-idx="4466570" data-i="167">
						 항상 입금하시기 전 계좌문의 한 후 �
					</td>
					<td class="memo_date">
						05-04 22:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="167">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4438952">
					</td>
					<td class="memo_no">
						166
					</td>
					<td class="open_memo memo_content" data-idx="4438952" data-i="166">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						05-04 21:35
					</td>
				</tr>
				<tr class="dspn ans" data-i="166">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4411337">
					</td>
					<td class="memo_no">
						165
					</td>
					<td class="open_memo memo_content" data-idx="4411337" data-i="165">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-04 21:31
					</td>
				</tr>
				<tr class="dspn ans" data-i="165">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4383722">
					</td>
					<td class="memo_no">
						164
					</td>
					<td class="open_memo memo_content" data-idx="4383722" data-i="164">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-04 21:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="164">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4356104">
					</td>
					<td class="memo_no">
						163
					</td>
					<td class="open_memo memo_content" data-idx="4356104" data-i="163">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-04 18:52
					</td>
				</tr>
				<tr class="dspn ans" data-i="163">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4328423">
					</td>
					<td class="memo_no">
						162
					</td>
					<td class="open_memo memo_content" data-idx="4328423" data-i="162">
						 ##전 계좌 입금시 충전지연 안내 ##
					</td>
					<td class="memo_date">
						05-04 05:19
					</td>
				</tr>
				<tr class="dspn ans" data-i="162">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##전 계좌 입금시 충전지연 안내 ##
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							전 걔좌 입금시 충전처리가 안되실수도 있는 점 참고바랍니다
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4300835">
					</td>
					<td class="memo_no">
						161
					</td>
					<td class="open_memo memo_content" data-idx="4300835" data-i="161">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-04 00:14
					</td>
				</tr>
				<tr class="dspn ans" data-i="161">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4273249">
					</td>
					<td class="memo_no">
						160
					</td>
					<td class="open_memo memo_content" data-idx="4273249" data-i="160">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-03 16:44
					</td>
				</tr>
				<tr class="dspn ans" data-i="160">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4245697">
					</td>
					<td class="memo_no">
						159
					</td>
					<td class="open_memo memo_content" data-idx="4245697" data-i="159">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-03 16:37
					</td>
				</tr>
				<tr class="dspn ans" data-i="159">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4218101">
					</td>
					<td class="memo_no">
						158
					</td>
					<td class="open_memo memo_content" data-idx="4218101" data-i="158">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-03 00:17
					</td>
				</tr>
				<tr class="dspn ans" data-i="158">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4190576">
					</td>
					<td class="memo_no">
						157
					</td>
					<td class="open_memo memo_content" data-idx="4190576" data-i="157">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-02 18:15
					</td>
				</tr>
				<tr class="dspn ans" data-i="157">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4163013">
					</td>
					<td class="memo_no">
						156
					</td>
					<td class="open_memo memo_content" data-idx="4163013" data-i="156">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						05-02 11:27
					</td>
				</tr>
				<tr class="dspn ans" data-i="156">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							배팅거절이슈 정상화되었습니다.&nbsp;
						</p>
						<p>
							이용에 불편을 드려서 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">카카오톡 : boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4135546">
					</td>
					<td class="memo_no">
						155
					</td>
					<td class="open_memo memo_content" data-idx="4135546" data-i="155">
						 ## 카지노/슬롯 배팅거절이슈 안내 ##
					</td>
					<td class="memo_date">
						05-02 11:21
					</td>
				</tr>
				<tr class="dspn ans" data-i="155">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 카지노/슬롯 배팅거절이슈 안내 ##
						</p>
						<p>
							현재 정기점검 종료후 배팅거절이슈가있어 확인중에 있습니다.&nbsp;<br>
							 잠시만 기다려주시면 재공지해드리도록하겠습니다
						</p>
						<p>
							이용에 불편을 드려 죄송합니다
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4108079">
					</td>
					<td class="memo_no">
						154
					</td>
					<td class="open_memo memo_content" data-idx="4108079" data-i="154">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						05-02 11:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="154">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스&nbsp;운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던 게임은&nbsp;긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!<br>
							 평생 주소 : 보스사이트<strong>.com</strong><br>
							 24시 텔레그램: @boss365cs
						</p>
						<p>
							24시 카카오톡: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4080611">
					</td>
					<td class="memo_no">
						153
					</td>
					<td class="open_memo memo_content" data-idx="4080611" data-i="153">
						 ## SWIX(카지노&amp;슬롯) 정기점검 재안�
					</td>
					<td class="memo_date">
						05-02 03:48
					</td>
				</tr>
				<tr class="dspn ans" data-i="153">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## SWIX(카지노&amp;슬롯) 정기점검 재안내 ##<br>
							<br>
							 안녕하세요 회원님들 보스 운영진입니다.
						</p>
						<p>
							2024-05-02(목요일) SWIX(카지노&amp;슬롯) 정기 점검 공지 전달드립니다
						</p>
						<p>
							점검일시 : 2024-05-02(목요일)&nbsp;&nbsp;<br>
							 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;‼️04 : 00 &nbsp;~ &nbsp;11 : 00 시‼️
						</p>
						<p>
							정기 점검시간에는 카지노 및 슬롯 이용이 제한되오니 양해 부탁드립니다<br>
							 스포츠 및 미니게임 이용은 가능하오니 참고 바랍니다&nbsp;
						</p>
						<p>
							모든 시간은 한국시간(GMT+9), 24시간제 기준입니다
						</p>
						<p>
							추가 점검 시간 연장 공지가 없을 경우, 별도 공지 없이 지정 시간에 맞춰 점검이 완료됨을 알려드립니다
						</p>
						<p>
							서비스 안정화를 위한 조치인 만큼 많은 이해부탁드립니다
						</p>
						<p>
							머니 전환이 불가하신점 참고 바랍니다. 지속적으로 머니전환할시 접속이 불가할수있는점 참고 바랍니다.
						</p>
						<p>
							점검이 시작하기전 머니를 전환 해주시길 바라며 점검이 시작후 머니전환은 불가하며 점검이 끝난후 머니전환이 가능 합니다&nbsp;
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요➕
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss2
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="4025699">
					</td>
					<td class="memo_no">
						152
					</td>
					<td class="open_memo memo_content" data-idx="4025699" data-i="152">
						 ## [레볼루션 점검 안내] ## 안녕하세
					</td>
					<td class="memo_date">
						05-02 01:20
					</td>
				</tr>
				<tr class="dspn ans" data-i="152">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## [레볼루션 점검 안내] ##<br>
							<br>
							 안녕하세요 회원님들 보스운영진입니다
						</p>
						<p>
							현재 레볼루션 서버 이슈로인해 정상적으로 이용이 불가하여 불가피하게 긴급점검을 하게 되었습니다.
						</p>
						<p>
							점검 완료시 해당 공지방에서 안내 드리도록 하겠습니다.
						</p>
						<p>
							<br>
							 점검은 공지된 시간보다 빠르거나 지연될 수 있는 점 양해 부탁드립니다.
						</p>
						<p>
							운영에 불편을 드려 죄송합니다.
						</p>
						<p>
							<br>
							 평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3998251">
					</td>
					<td class="memo_no">
						151
					</td>
					<td class="open_memo memo_content" data-idx="3998251" data-i="151">
						 ##안녕하세요 회원님들 보스 운영진입
					</td>
					<td class="memo_date">
						05-02 01:16
					</td>
				</tr>
				<tr class="dspn ans" data-i="151">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##안녕하세요 회원님들 보스 운영진입니다.##
						</p>
						<p>
							&nbsp;‼️ e스포츠 긴급 점검 안내 ‼️
						</p>
						<p>
							e스포츠 게임자체가 네트워크 문제로 긴급 점검이 진행됩니다.
						</p>
						<p>
							점검 시간 : 현재 ~ 미정 (완료 후 즉시 공지 예정)
						</p>
						<p>
							해당 시간동안 불안정하게 작동될 수 있는 점 참고해주시길 바라며,변동사항이 확인될시 재공지드리겠습니다.
						</p>
						<p>
							운영에 불편을 드려 죄송합니다.
						</p>
						<p>
							<br>
							 평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3970803">
					</td>
					<td class="memo_no">
						150
					</td>
					<td class="open_memo memo_content" data-idx="3970803" data-i="150">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-02 00:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="150">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3943351">
					</td>
					<td class="memo_no">
						149
					</td>
					<td class="open_memo memo_content" data-idx="3943351" data-i="149">
						 안녕하세요 회원님들 보스운영진입니
					</td>
					<td class="memo_date">
						05-01 20:19
					</td>
				</tr>
				<tr class="dspn ans" data-i="149">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들 보스운영진입니다.
						</p>
						<p>
							&nbsp;SWIX(카지노&amp;슬롯) 정기점검 재안내&nbsp;
						</p>
						<p>
							2024-05-02(목요일) SWIX(카지노&amp;슬롯) 정기 점검 공지 전달드립니다
						</p>
						<p>
							점검일시 : 2024-05-02(목요일)&nbsp;&nbsp;<br>
							 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;04 : 00 &nbsp;~ &nbsp;11 : 00 시
						</p>
						<p>
							정기 점검시간에는 카지노 및 슬롯 이용이 제한되오니 양해 부탁드립니다<br>
							 스포츠 및 미니게임 이용은 가능하오니 참고 바랍니다
						</p>
						<p>
							모든 시간은 한국시간(GMT+9), 24시간제 기준입니다
						</p>
						<p>
							추가 점검 시간 연장 공지가 없을 경우, 별도 공지 없이 지정 시간에 맞춰 점검이 완료됨을 알려드립니다
						</p>
						<p>
							서비스 안정화를 위한 조치인 만큼 많은 이해부탁드립니다
						</p>
						<p>
							&nbsp;머니 전환이 불가하신점 참고 바랍니다. 지속적으로 머니전환할시 접속이 불가할수있는점 참고 바랍니다.
						</p>
						<p>
							&nbsp;점검이 시작하기전 머니를 전환 해주시길 바라며 점검이 시작후 머니전환은 불가하며 점검이 끝난후 머니전환이 가능 합니다&nbsp;
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다&nbsp;
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3915864">
					</td>
					<td class="memo_no">
						148
					</td>
					<td class="open_memo memo_content" data-idx="3915864" data-i="148">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						05-01 16:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="148">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스&nbsp;운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던 게임은&nbsp;긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!<br>
							 평생 주소 : 보스사이트<strong>.com</strong><br>
							 24시 텔레그램: @boss365cs
						</p>
						<p>
							24시 카카오톡: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3888477">
					</td>
					<td class="memo_no">
						147
					</td>
					<td class="open_memo memo_content" data-idx="3888477" data-i="147">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						05-01 15:15
					</td>
				</tr>
				<tr class="dspn ans" data-i="147">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 레볼 게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">24시 카카오톡&nbsp;: boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3861089">
					</td>
					<td class="memo_no">
						146
					</td>
					<td class="open_memo memo_content" data-idx="3861089" data-i="146">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-01 12:41
					</td>
				</tr>
				<tr class="dspn ans" data-i="146">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3833705">
					</td>
					<td class="memo_no">
						145
					</td>
					<td class="open_memo memo_content" data-idx="3833705" data-i="145">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-01 01:45
					</td>
				</tr>
				<tr class="dspn ans" data-i="145">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3806341">
					</td>
					<td class="memo_no">
						144
					</td>
					<td class="open_memo memo_content" data-idx="3806341" data-i="144">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-01 01:42
					</td>
				</tr>
				<tr class="dspn ans" data-i="144">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3778977">
					</td>
					<td class="memo_no">
						143
					</td>
					<td class="open_memo memo_content" data-idx="3778977" data-i="143">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-01 01:36
					</td>
				</tr>
				<tr class="dspn ans" data-i="143">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3751616">
					</td>
					<td class="memo_no">
						142
					</td>
					<td class="open_memo memo_content" data-idx="3751616" data-i="142">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						05-01 00:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="142">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3724258">
					</td>
					<td class="memo_no">
						141
					</td>
					<td class="open_memo memo_content" data-idx="3724258" data-i="141">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						04-30 20:44
					</td>
				</tr>
				<tr class="dspn ans" data-i="141">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 홀덤 게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">24시 카카오톡&nbsp;: boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3696918">
					</td>
					<td class="memo_no">
						140
					</td>
					<td class="open_memo memo_content" data-idx="3696918" data-i="140">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						04-30 20:41
					</td>
				</tr>
				<tr class="dspn ans" data-i="140">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 홀덤 게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">24시 카카오톡&nbsp;: boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3669539">
					</td>
					<td class="memo_no">
						139
					</td>
					<td class="open_memo memo_content" data-idx="3669539" data-i="139">
						 안녕하세요. 보스 운영팀입니다.^^!
					</td>
					<td class="memo_date">
						04-30 17:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="139">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<strong>안녕하세요. 보스 운영팀입니다.^^!</strong>
						</p>
						<p>
							<strong>현재 일시적으로 충전이 많이 들어와 순차적으로 처리</strong> 진행중에 있습니다..<br>
							 최대한 빠른 시간 안에 처리 진행중이오니 잠시만 기다려 주시기 바랍니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							<strong>추가적으로 궁금하신 사항은 언제든지 문의주시기 바랍니다<br>
							 오늘도 저희 보스를&nbsp;찾아주셔서 감사합니다.<br>
							 보스는 항상 회원님의 건승을 기원합니다</strong>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3642214">
					</td>
					<td class="memo_no">
						138
					</td>
					<td class="open_memo memo_content" data-idx="3642214" data-i="138">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-30 15:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="138">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3614892">
					</td>
					<td class="memo_no">
						137
					</td>
					<td class="open_memo memo_content" data-idx="3614892" data-i="137">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-30 15:24
					</td>
				</tr>
				<tr class="dspn ans" data-i="137">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3587538">
					</td>
					<td class="memo_no">
						136
					</td>
					<td class="open_memo memo_content" data-idx="3587538" data-i="136">
						 ##부운고 긴급 점검 종료 안내## 안�
					</td>
					<td class="memo_date">
						04-30 01:17
					</td>
				</tr>
				<tr class="dspn ans" data-i="136">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##부운고 긴급 점검 종료 안내##<br>
							<br>
							 안녕하세요 회원님들 보스 운영진입니다.<br>
							<br>
							 긴급 점검이 종료되었습니다.
						</p>
						<p>
							<br>
							 &nbsp;이용에 불편을끼쳐드려 죄송합니다.^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3560212">
					</td>
					<td class="memo_no">
						135
					</td>
					<td class="open_memo memo_content" data-idx="3560212" data-i="135">
						 &nbsp;##부운고 게임 긴급 점검 안내##
					</td>
					<td class="memo_date">
						04-29 23:49
					</td>
				</tr>
				<tr class="dspn ans" data-i="135">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp;##부운고 게임 긴급 점검 안내##<br>
							<br>
							 안녕하세요 회원님들 보스 운영진입니다.
						</p>
						<p>
							게임사 측 네트워크 문제로 긴급 점검이 진행됩니다.
						</p>
						<p>
							점검 시간 : 현재 ~ 미정 (완료 후 즉시 공지 예정)
						</p>
						<p>
							해당 시간동안 불안정하게 작동될 수 있는 점 참고해주시길 바라며,
						</p>
						<p>
							변동사항이 확인될시 재공지드리겠습니다.
						</p>
						<p>
							운영에 불편을 드려 죄송합니다.
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3532350">
					</td>
					<td class="memo_no">
						134
					</td>
					<td class="open_memo memo_content" data-idx="3532350" data-i="134">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-29 10:24
					</td>
				</tr>
				<tr class="dspn ans" data-i="134">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3505059">
					</td>
					<td class="memo_no">
						133
					</td>
					<td class="open_memo memo_content" data-idx="3505059" data-i="133">
						 ##전 계좌 입금시 충전처�
					</td>
					<td class="memo_date">
						04-29 05:27
					</td>
				</tr>
				<tr class="dspn ans" data-i="133">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<table>
						<tbody>
						<tr>
							<td>
								<p>
									##전 계좌 입금시 충전처리 불가능하실수 있습니다##
								</p>
							</td>
						</tr>
						</tbody>
						</table>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3477772">
					</td>
					<td class="memo_no">
						132
					</td>
					<td class="open_memo memo_content" data-idx="3477772" data-i="132">
						 ##전 계좌 입금시 충전처리 불가능하�
					</td>
					<td class="memo_date">
						04-29 04:42
					</td>
				</tr>
				<tr class="dspn ans" data-i="132">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##전 계좌 입금시 충전처리 불가능하실수 있습니다##
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3450488">
					</td>
					<td class="memo_no">
						131
					</td>
					<td class="open_memo memo_content" data-idx="3450488" data-i="131">
						 ##보스 회원&nbsp;입금계좌 변경 안내##
					</td>
					<td class="memo_date">
						04-29 04:42
					</td>
				</tr>
				<tr class="dspn ans" data-i="131">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##보스 회원&nbsp;입금계좌 변경 안내##
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3423201">
					</td>
					<td class="memo_no">
						130
					</td>
					<td class="open_memo memo_content" data-idx="3423201" data-i="130">
						 ##전 계좌 입금시 충전처리 안되시는�
					</td>
					<td class="memo_date">
						04-28 23:35
					</td>
				</tr>
				<tr class="dspn ans" data-i="130">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##전 계좌 입금시 충전처리 안되시는점 참고바랍니다##
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3395933">
					</td>
					<td class="memo_no">
						129
					</td>
					<td class="open_memo memo_content" data-idx="3395933" data-i="129">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-28 23:34
					</td>
				</tr>
				<tr class="dspn ans" data-i="129">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3368663">
					</td>
					<td class="memo_no">
						128
					</td>
					<td class="open_memo memo_content" data-idx="3368663" data-i="128">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-28 19:32
					</td>
				</tr>
				<tr class="dspn ans" data-i="128">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3341324">
					</td>
					<td class="memo_no">
						127
					</td>
					<td class="open_memo memo_content" data-idx="3341324" data-i="127">
						 ##부운고/플레이슨 긴급 점검 종료 안�
					</td>
					<td class="memo_date">
						04-28 05:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="127">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##부운고/플레이슨 긴급 점검 종료 안내 ##
						</p>
						<p>
							긴급 점검이 종료되었습니다.
						</p>
						<p>
							변동사항이 확인될시 재공지드리겠습니다.
						</p>
						<p>
							&nbsp;이용에 불편을끼쳐드려 죄송합니다.^^
						</p>
						<p>
							평생도메인 : 보스사이트.com (https://%EB%B3%B4%EC%8A%A4%EC%82%AC%EC%9D%B4%ED%8A%B8.com)<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3314098">
					</td>
					<td class="memo_no">
						126
					</td>
					<td class="open_memo memo_content" data-idx="3314098" data-i="126">
						 ##보스 프리스핀(슬롯) 이벤트##
					</td>
					<td class="memo_date">
						04-28 00:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="126">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##보스 프리스핀(슬롯) 이벤트##
						</p>
						<p>
							안녕하세요 회원님들 보스 운영진입니다.
						</p>
						<p>
							매주 일요일 프리스핀 DAY 이벤트 안내 드립니다&nbsp;
						</p>
						<p>
							이번 프리스핀 게임사는 프라그마틱 입니다
						</p>
						<p>
							매주 금요일, 토요일 합산 입금액(슬롯) 기준&nbsp;
						</p>
						<p>
							합 입금 10만원 이상 3만 포인트 지급
						</p>
						<p>
							합 입금 50만원 이상 7만 포인트 지급
						</p>
						<p>
							합 입금 100만원 이상 10만 포인트 지급
						</p>
						<p>
							합 입금 200만원 이상 15만 포인트 지급
						</p>
						<p>
							합 입금 300만원 이상 20만 포인트 지급
						</p>
						<p>
							&nbsp;지정된 게임 이외 게임 이용 시 모든 금액 몰수처리
						</p>
						<p>
							&nbsp;포인트는 단독 사용만 가능하며 롤링 300% / 최대 출금 5배 입니다.
						</p>
						<p>
							&nbsp;지정 게임사 긴급 점검으로 인하여 부득이하게 변경 될 수 있습니다.
						</p>
						<p>
							&nbsp;지정 게임사는 매주 변경되니 채널방 공지 참고 해주시면 감사하겠습니다.
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com (https://%EB%B3%B4%EC%8A%A4%EC%82%AC%EC%9D%B4%ED%8A%B8.com)<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 고객센터 카카오톡 :&nbsp;boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3286890">
					</td>
					<td class="memo_no">
						125
					</td>
					<td class="open_memo memo_content" data-idx="3286890" data-i="125">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-27 23:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="125">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3259682">
					</td>
					<td class="memo_no">
						124
					</td>
					<td class="open_memo memo_content" data-idx="3259682" data-i="124">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-27 21:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="124">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3232423">
					</td>
					<td class="memo_no">
						123
					</td>
					<td class="open_memo memo_content" data-idx="3232423" data-i="123">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						04-27 18:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="123">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							금일 텔레그램 오류건은 현재 정상화 되었으니 이용에 참고해주시면 감사하겠습니다&nbsp;
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">카카오톡 : boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3205234">
					</td>
					<td class="memo_no">
						122
					</td>
					<td class="open_memo memo_content" data-idx="3205234" data-i="122">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						04-27 17:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="122">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							현재 자사 텔레그램 오류로 인하여 문의사항 있을시 자사 고객센터 및 카카오톡 및 라이브 채팅으로 문의 주시면 감사하겠습니다 추 후 안정화될시 재공지 예정에 있으니 이용에 참고 부탁드립니다
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">카카오톡 : boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3178041">
					</td>
					<td class="memo_no">
						121
					</td>
					<td class="open_memo memo_content" data-idx="3178041" data-i="121">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						04-27 01:14
					</td>
				</tr>
				<tr class="dspn ans" data-i="121">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							현재 텔레그램 응대가 불가한 상태로 문의사항 카카오톡으로 문의주시면 감사하겠습니다.
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">카카오톡 : boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3150901">
					</td>
					<td class="memo_no">
						120
					</td>
					<td class="open_memo memo_content" data-idx="3150901" data-i="120">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						04-27 01:13
					</td>
				</tr>
				<tr class="dspn ans" data-i="120">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							현재 텔레그램 무한로딩 현상이 있는걸로 확인되어 텔레그램 응대가 불가한 상태입니다.&nbsp;
						</p>
						<p>
							문의사항 사이트 내 고객센터로 문의주시면 감사하겠습니다.&nbsp;
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">카카오톡 : boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3123761">
					</td>
					<td class="memo_no">
						119
					</td>
					<td class="open_memo memo_content" data-idx="3123761" data-i="119">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-27 00:31
					</td>
				</tr>
				<tr class="dspn ans" data-i="119">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3096618">
					</td>
					<td class="memo_no">
						118
					</td>
					<td class="open_memo memo_content" data-idx="3096618" data-i="118">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-26 18:10
					</td>
				</tr>
				<tr class="dspn ans" data-i="118">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3069429">
					</td>
					<td class="memo_no">
						117
					</td>
					<td class="open_memo memo_content" data-idx="3069429" data-i="117">
						 안녕하세요 회원님들보스 운영팀입�
					</td>
					<td class="memo_date">
						04-26 16:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="117">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<br>
							 안녕하세요 회원님들보스 운영팀입니다.
						</p>
						<p>
							##스포츠/미니게임 "무한 돌발 "이벤트 안내##
						</p>
						<p>
							##16시부터 ~ 19:00시까지 ##<br>
							 스포츠/미니게임 "무한돌발"이벤트 진행합니다.<br>
							 &nbsp; &nbsp;&nbsp;<br>
							 #스포츠 3폴더 충전시 20% 자동 지급
						</p>
						<p>
							#스포츠2폴더/미니게임 충전시 10% 자동 지급
						</p>
						<p>
							<br>
							 #모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							#환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							#환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다^^
						</p>
						<p>
							#다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가합니다^^
						</p>
						<p>
							#스포츠 롤링 100%<br>
							 #미니게임 롤링 400%
						</p>
						<p>
							<br>
							 ‼️지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다.‼️
						</p>
						<p>
							#많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^
						</p>
						<p>
							#평생도메인 : 보스사이트.com<br>
							 #텔레그램 고객센터: @Boss365cs<br>
							 #카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3042333">
					</td>
					<td class="memo_no">
						116
					</td>
					<td class="open_memo memo_content" data-idx="3042333" data-i="116">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						04-26 02:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="116">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 프로그마틱 게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">24시 카카오톡&nbsp;: boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="3015278">
					</td>
					<td class="memo_no">
						115
					</td>
					<td class="open_memo memo_content" data-idx="3015278" data-i="115">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-26 01:18
					</td>
				</tr>
				<tr class="dspn ans" data-i="115">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2988224">
					</td>
					<td class="memo_no">
						114
					</td>
					<td class="open_memo memo_content" data-idx="2988224" data-i="114">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-26 01:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="114">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2961165">
					</td>
					<td class="memo_no">
						113
					</td>
					<td class="open_memo memo_content" data-idx="2961165" data-i="113">
						 ★카카오뱅크 최준원장 입금 줄가 안�
					</td>
					<td class="memo_date">
						04-25 18:20
					</td>
				</tr>
				<tr class="dspn ans" data-i="113">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★카카오뱅크 최준원장 입금 줄가 안내
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2934011">
					</td>
					<td class="memo_no">
						112
					</td>
					<td class="open_memo memo_content" data-idx="2934011" data-i="112">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-24 19:55
					</td>
				</tr>
				<tr class="dspn ans" data-i="112">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2907051">
					</td>
					<td class="memo_no">
						111
					</td>
					<td class="open_memo memo_content" data-idx="2907051" data-i="111">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-24 19:28
					</td>
				</tr>
				<tr class="dspn ans" data-i="111">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2880054">
					</td>
					<td class="memo_no">
						110
					</td>
					<td class="open_memo memo_content" data-idx="2880054" data-i="110">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						04-23 22:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="110">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스&nbsp;운영진입니다. ^^
						</p>
						<p>
							현재 점검중이었던가상축구 게임은&nbsp;긴급 점검이 완료되었습니다.
						</p>
						<p>
							현시간부로 정상이용가능합니다.
						</p>
						<p>
							많은 이용 부탁드리겠습니다. ^^<br>
							 &nbsp;
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!<br>
							 평생 주소 : 보스사이트<strong>.com</strong><br>
							 24시 텔레그램: @boss365cs
						</p>
						<p>
							24시 카카오톡: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2853151">
					</td>
					<td class="memo_no">
						109
					</td>
					<td class="open_memo memo_content" data-idx="2853151" data-i="109">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						04-23 21:34
					</td>
				</tr>
				<tr class="dspn ans" data-i="109">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 미니게임 가상축구 게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">24시 카카오톡&nbsp;: boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2826263">
					</td>
					<td class="memo_no">
						108
					</td>
					<td class="open_memo memo_content" data-idx="2826263" data-i="108">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-23 18:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="108">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2799335">
					</td>
					<td class="memo_no">
						107
					</td>
					<td class="open_memo memo_content" data-idx="2799335" data-i="107">
						 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &amp;
					</td>
					<td class="memo_date">
						04-23 00:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="107">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;##페이백이벤트##
						</p>
						<p>
							‼️매주 화요일 마다 지난주 화요일 ~ 월요일의 입출금 차액 5% 를 지급 합니다 ‼️
						</p>
						<p>
							페이백 계산방법해당 주 총 입금액 10만원 해당 주 총 출금액 2만원 100,000 - 20,000=80,000&nbsp;
						</p>
						<p>
							페이백 지급포인트 : 80,000x5% = 4,000 원&nbsp;
						</p>
						<p>
							&nbsp;지급 &nbsp;받으신 페이백 롤링&nbsp;<br>
							 스포츠100%/스포츠 이외 다른게임 전부 300%
						</p>
						<p>
							&nbsp;페이백 버튼 클릭하시면 자동으로 지급 되시는점 참고 바랍니다
						</p>
						<p>
							&nbsp;주 2회 입금 이상자만 참여 가능 합니다
						</p>
						<p>
							지급받은 페이백 금액에 최대 10배까지 환전 가능하니 이용에 차질없게 참고해주시기 바랍니다.&nbsp;
						</p>
						<p>
							1~2레벨 - 최대지급액 50만원<br>
							 3~4레벨 - 최대지급액 100만원<br>
							 vip 1~2레벨 - 최대지급액 200만원<br>
							 vip 3레벨 - 최대지급액300만원<br>
							 ‼️레벨 등업에 따라 지급액 한도가 변경되었으니 많은 참여 바랍니다‼️
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2772353">
					</td>
					<td class="memo_no">
						106
					</td>
					<td class="open_memo memo_content" data-idx="2772353" data-i="106">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-22 02:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="106">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2745577">
					</td>
					<td class="memo_no">
						105
					</td>
					<td class="open_memo memo_content" data-idx="2745577" data-i="105">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						04-21 18:40
					</td>
				</tr>
				<tr class="dspn ans" data-i="105">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다. ^^</span>
						</p>
						<p>
							현재 미니게임 가상축구 게임은 <span style="color:#d35400">긴급 점검 중</span>에 있습니다.<br>
							 점검 완료 시간은 현재 미정이며, <u>점검이 완료되면 재 안내드리겠습니다.</u><br>
							 빠른 처리를 위해 확인 및 노력 중이며, 이용에 불편을 드려 죄송합니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">24시 텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">24시 카카오톡&nbsp;: boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2718775">
					</td>
					<td class="memo_no">
						104
					</td>
					<td class="open_memo memo_content" data-idx="2718775" data-i="104">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-21 14:14
					</td>
				</tr>
				<tr class="dspn ans" data-i="104">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2692033">
					</td>
					<td class="memo_no">
						103
					</td>
					<td class="open_memo memo_content" data-idx="2692033" data-i="103">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						04-21 09:12
					</td>
				</tr>
				<tr class="dspn ans" data-i="103">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							에볼루션 영상 송출 이슈안내&nbsp;
						</p>
						<p>
							현재 블랙잭 영상 송출에 대한 이슈가 발생하고 있는 것으로 확인 하였습니다 .
						</p>
						<p>
							해당 부분 게임사를 통해 확인중에 있습니다 .
						</p>
						<p>
							정상화시 재 안내 드리도록 하겠습니다
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">카카오톡 : boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2665306">
					</td>
					<td class="memo_no">
						102
					</td>
					<td class="open_memo memo_content" data-idx="2665306" data-i="102">
						 프리스핀(슬롯) 이벤트
					</td>
					<td class="memo_date">
						04-21 00:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="102">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<table>
						<tbody>
						<tr>
							<td>
								<p>
									프리스핀(슬롯) 이벤트
								</p>
								<p>
									‼️매주 일요일 프리스핀 DAY 이벤트 안내 드립니다 ‼️
								</p>
								<p>
									이번 프리스핀 게임사는 &lt;플레이앤고&gt; 입니다
								</p>
								<p>
									매주 금요일, 토요일 합산 입금액(슬롯) 기준&nbsp;
								</p>
								<p>
									합 입금 10만원 이상 3만 포인트 지급
								</p>
								<p>
									합 입금 50만원 이상 7만 포인트 지급
								</p>
								<p>
									합 입금 100만원 이상 10만 포인트 지급
								</p>
								<p>
									합 입금 200만원 이상 15만 포인트 지급
								</p>
								<p>
									합 입금 300만원 이상 20만 포인트 지급
								</p>
								<p>
									지정된 게임 이외 게임 이용 시 모든 금액 몰수처리
								</p>
								<p>
									&nbsp;포인트는 단독 사용만 가능하며 롤링 300% / 최대 출금 5배 입니다.
								</p>
								<p>
									&nbsp;지정 게임사 긴급 점검으로 인하여 부득이하게 변경 될 수 있습니다.
								</p>
								<p>
									&nbsp;지정 게임사는 매주 변경되니 채널방 공지 참고 해주시면 감사하겠습니다.
								</p>
								<p>
									자세한 내용은 이벤트 란 참고 바랍니다
								</p>
								<p>
									많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
								</p>
								<p>
									이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
								</p>
								<p>
									평생도메인 : 보스사이트.com<br>
									 텔레그램 고객센터: @Boss365cs
								</p>
								<p>
									카카오톡 고객센터: boss24cs
								</p>
							</td>
						</tr>
						</tbody>
						</table>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2638596">
					</td>
					<td class="memo_no">
						101
					</td>
					<td class="open_memo memo_content" data-idx="2638596" data-i="101">
						 프리스핀(슬롯) 이벤트
					</td>
					<td class="memo_date">
						04-21 00:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="101">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							프리스핀(슬롯) 이벤트
						</p>
						<p>
							‼️매주 일요일 프리스핀 DAY 이벤트 안내 드립니다 ‼️
						</p>
						<p>
							이번 프리스핀 게임사는 &lt;플레이앤고&gt; 입니다
						</p>
						<p>
							매주 금요일, 토요일 합산 입금액(슬롯) 기준&nbsp;
						</p>
						<p>
							합 입금 10만원 이상 3만 포인트 지급
						</p>
						<p>
							합 입금 50만원 이상 7만 포인트 지급
						</p>
						<p>
							합 입금 100만원 이상 10만 포인트 지급
						</p>
						<p>
							합 입금 200만원 이상 15만 포인트 지급
						</p>
						<p>
							합 입금 300만원 이상 20만 포인트 지급
						</p>
						<p>
							지정된 게임 이외 게임 이용 시 모든 금액 몰수처리
						</p>
						<p>
							&nbsp;포인트는 단독 사용만 가능하며 롤링 300% / 최대 출금 5배 입니다.
						</p>
						<p>
							&nbsp;지정 게임사 긴급 점검으로 인하여 부득이하게 변경 될 수 있습니다.
						</p>
						<p>
							&nbsp;지정 게임사는 매주 변경되니 채널방 공지 참고 해주시면 감사하겠습니다.
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요➕
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
						<p>
							카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2611882">
					</td>
					<td class="memo_no">
						100
					</td>
					<td class="open_memo memo_content" data-idx="2611882" data-i="100">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-20 19:41
					</td>
				</tr>
				<tr class="dspn ans" data-i="100">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2585191">
					</td>
					<td class="memo_no">
						99
					</td>
					<td class="open_memo memo_content" data-idx="2585191" data-i="99">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-20 18:40
					</td>
				</tr>
				<tr class="dspn ans" data-i="99">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2558435">
					</td>
					<td class="memo_no">
						98
					</td>
					<td class="open_memo memo_content" data-idx="2558435" data-i="98">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-19 23:47
					</td>
				</tr>
				<tr class="dspn ans" data-i="98">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2531807">
					</td>
					<td class="memo_no">
						97
					</td>
					<td class="open_memo memo_content" data-idx="2531807" data-i="97">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-19 20:09
					</td>
				</tr>
				<tr class="dspn ans" data-i="97">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2505187">
					</td>
					<td class="memo_no">
						96
					</td>
					<td class="open_memo memo_content" data-idx="2505187" data-i="96">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-19 19:19
					</td>
				</tr>
				<tr class="dspn ans" data-i="96">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2478528">
					</td>
					<td class="memo_no">
						95
					</td>
					<td class="open_memo memo_content" data-idx="2478528" data-i="95">
						 ##스포츠/미니게임 "무한 돌발 "이벤트
					</td>
					<td class="memo_date">
						04-19 15:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="95">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##스포츠/미니게임 "무한 돌발 "이벤트 안내##
						</p>
						<p>
							@16시부터 ~ 19:00시까지&nbsp;<br>
							 스포츠/미니게임 "무한돌발"이벤트 진행합니다.<br>
							 &nbsp; &nbsp;&nbsp;<br>
							 - 스포츠 3폴더 충전시 20% 자동 지급
						</p>
						<p>
							- 스포츠2폴더/미니게임 충전시 10% 자동 지급
						</p>
						<p>
							<br>
							 - 모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							- 환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							- 환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다^^
						</p>
						<p>
							- 다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가합니다^^
						</p>
						<p>
							@스포츠 롤링 100%<br>
							 @미니게임 롤링 400%
						</p>
						<p>
							<br>
							 !!지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다!!
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2451918">
					</td>
					<td class="memo_no">
						94
					</td>
					<td class="open_memo memo_content" data-idx="2451918" data-i="94">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-19 11:41
					</td>
				</tr>
				<tr class="dspn ans" data-i="94">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2425305">
					</td>
					<td class="memo_no">
						93
					</td>
					<td class="open_memo memo_content" data-idx="2425305" data-i="93">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-18 21:27
					</td>
				</tr>
				<tr class="dspn ans" data-i="93">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2398721">
					</td>
					<td class="memo_no">
						92
					</td>
					<td class="open_memo memo_content" data-idx="2398721" data-i="92">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-18 18:51
					</td>
				</tr>
				<tr class="dspn ans" data-i="92">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2372149">
					</td>
					<td class="memo_no">
						91
					</td>
					<td class="open_memo memo_content" data-idx="2372149" data-i="91">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						04-18 17:16
					</td>
				</tr>
				<tr class="dspn ans" data-i="91">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2345534">
					</td>
					<td class="memo_no">
						90
					</td>
					<td class="open_memo memo_content" data-idx="2345534" data-i="90">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-18 17:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="90">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2318969">
					</td>
					<td class="memo_no">
						89
					</td>
					<td class="open_memo memo_content" data-idx="2318969" data-i="89">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						04-18 01:35
					</td>
				</tr>
				<tr class="dspn ans" data-i="89">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							현시간 부로 카지노 게임 배팅상한금 및 당첨상한금 상향 안내
						</p>
						<p>
							변경 전: 카지노 배팅상한 500만원 당첨상한 1500만원
						</p>
						<p>
							변경 후: 카지노 배팅상한 1000만원 당첨상한 3000만원&nbsp;
						</p>
						<p>
							vip레벨을 제외 한 전레벨에게 적용되는 금액이며 레벨별 배팅 상한금 초과의 배팅과 당첨금에 대해서는 본사에서 인정해드리지 않으니 이용에 차질 없게 반드시 숙지 후 배팅해주시기 바랍니다.&nbsp;
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">카카오톡 : boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2292432">
					</td>
					<td class="memo_no">
						88
					</td>
					<td class="open_memo memo_content" data-idx="2292432" data-i="88">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-18 00:07
					</td>
				</tr>
				<tr class="dspn ans" data-i="88">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2265902">
					</td>
					<td class="memo_no">
						87
					</td>
					<td class="open_memo memo_content" data-idx="2265902" data-i="87">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-18 00:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="87">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2239366">
					</td>
					<td class="memo_no">
						86
					</td>
					<td class="open_memo memo_content" data-idx="2239366" data-i="86">
						 ##CQ9 점검 종료 안내##
					</td>
					<td class="memo_date">
						04-17 17:47
					</td>
				</tr>
				<tr class="dspn ans" data-i="86">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##CQ9 점검 종료 안내##
						</p>
						<p>
							CQ9 점검이 완료되었습니다.
						</p>
						<p>
							정상운영 가능합니다.
						</p>
						<p>
							&nbsp;기다려주셔서 감사합니다.^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2212857">
					</td>
					<td class="memo_no">
						85
					</td>
					<td class="open_memo memo_content" data-idx="2212857" data-i="85">
						 항상 입금하시기 전 계좌문의 한 후 �
					</td>
					<td class="memo_date">
						04-17 16:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="85">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2186359">
					</td>
					<td class="memo_no">
						84
					</td>
					<td class="open_memo memo_content" data-idx="2186359" data-i="84">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-17 15:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="84">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2159811">
					</td>
					<td class="memo_no">
						83
					</td>
					<td class="open_memo memo_content" data-idx="2159811" data-i="83">
						 24-04-17(수요일) 게임사 점검 공지 전달
					</td>
					<td class="memo_date">
						04-17 11:31
					</td>
				</tr>
				<tr class="dspn ans" data-i="83">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							24-04-17(수요일) 게임사 점검 공지 전달드립니다.
						</p>
						<p>
							게임사 : CQ9 ( 씨큐나인 &nbsp;)<br>
							 점검일시 : 2024-04-17(수요일) 현 시간부터 ~ 종료공지 까지&nbsp;
						</p>
						<p>
							해당 게임사의 게임 이용이 불가능합니다.<br>
							 점검시간이 변경될 경우 별도로 공지해드리겠습니다.
						</p>
						<p>
							서비스 운영에 참고 부탁드립니다.
						</p>
						<p>
							*모든 시간은 한국시간(GMT+9), 24시간제 기준입니다.<br>
							 *추가 점검 시간 연장 공지가 없을 경우, 별도 공지 없이 지정 시간에 맞춰 점검이 완료됨을 알려드립니다.
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2133323">
					</td>
					<td class="memo_no">
						82
					</td>
					<td class="open_memo memo_content" data-idx="2133323" data-i="82">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-16 23:50
					</td>
				</tr>
				<tr class="dspn ans" data-i="82">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2106863">
					</td>
					<td class="memo_no">
						81
					</td>
					<td class="open_memo memo_content" data-idx="2106863" data-i="81">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						04-16 22:55
					</td>
				</tr>
				<tr class="dspn ans" data-i="81">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							한신 VS 요미우리 경기 강우 콜드 여부 확인 중에 있습니다.
						</p>
						<p>
							결과값은 확인 후에 정확하게 처리될 예정이오니,
						</p>
						<p>
							배팅해주신 회원님들께서는 착오가 없으시기 바랍니다.
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">카카오톡 : boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2080372">
					</td>
					<td class="memo_no">
						80
					</td>
					<td class="open_memo memo_content" data-idx="2080372" data-i="80">
						 항상 입금하시기 전 계좌문의 한 후 �
					</td>
					<td class="memo_date">
						04-16 20:25
					</td>
				</tr>
				<tr class="dspn ans" data-i="80">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2053922">
					</td>
					<td class="memo_no">
						79
					</td>
					<td class="open_memo memo_content" data-idx="2053922" data-i="79">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-16 19:36
					</td>
				</tr>
				<tr class="dspn ans" data-i="79">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2027474">
					</td>
					<td class="memo_no">
						78
					</td>
					<td class="open_memo memo_content" data-idx="2027474" data-i="78">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-16 16:26
					</td>
				</tr>
				<tr class="dspn ans" data-i="78">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="2001041">
					</td>
					<td class="memo_no">
						77
					</td>
					<td class="open_memo memo_content" data-idx="2001041" data-i="77">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-16 16:26
					</td>
				</tr>
				<tr class="dspn ans" data-i="77">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1974533">
					</td>
					<td class="memo_no">
						76
					</td>
					<td class="open_memo memo_content" data-idx="1974533" data-i="76">
						 ##보스 페이백 이벤트 ##
					</td>
					<td class="memo_date">
						04-16 00:04
					</td>
				</tr>
				<tr class="dspn ans" data-i="76">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##보스 페이백 이벤트 ##
						</p>
						<p>
							안녕하세요 회원님들 보스 운영진입니다.
						</p>
						<p>
							매주 화요일 마다 지난주 화요일 ~ 월요일의 입출금 차액 5% 를 지급 합니다&nbsp;
						</p>
						<p>
							페이백 계산방법
						</p>
						<p>
							해당 주 총 입금액 10만원 해당 주 총 출금액 2만원 100,000 - 20,000=80,000&nbsp;
						</p>
						<p>
							페이백 지급포인트 : 80,000x5% = 4,000 원&nbsp;
						</p>
						<p>
							&nbsp;지급 &nbsp;받으신 페이백 롤링&nbsp;<br>
							 스포츠100%/스포츠 이외 다른게임 전부 300%
						</p>
						<p>
							&nbsp;페이백 버튼 클릭하시면 자동으로 지급 되시는점 참고 바랍니다
						</p>
						<p>
							&nbsp;주 2회 입금 이상자만 참여 가능 합니다
						</p>
						<p>
							지급받은 페이백 금액에 최대 10배까지 환전 가능하니 이용에 차질없게 참고해주시기 바랍니다.&nbsp;
						</p>
						<p>
							1~2레벨 - 최대지급액 50만원<br>
							 3~4레벨 - 최대지급액 100만원<br>
							 vip 1~2레벨 - 최대지급액 200만원<br>
							 vip 3레벨 - 최대지급액300만원<br>
							 레벨 등업에 따라 지급액 한도가 변경되었으니 많은 참여 바랍니다
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com (https://%EB%B3%B4%EC%8A%A4%EC%82%AC%EC%9D%B4%ED%8A%B8.com)<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1948128">
					</td>
					<td class="memo_no">
						75
					</td>
					<td class="open_memo memo_content" data-idx="1948128" data-i="75">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-15 23:55
					</td>
				</tr>
				<tr class="dspn ans" data-i="75">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1921721">
					</td>
					<td class="memo_no">
						74
					</td>
					<td class="open_memo memo_content" data-idx="1921721" data-i="74">
						 &nbsp;##가상 축구 벳365 점검 종료 안내#
					</td>
					<td class="memo_date">
						04-15 21:44
					</td>
				</tr>
				<tr class="dspn ans" data-i="74">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp;##가상 축구 벳365 점검 종료 안내##
						</p>
						<p>
							현재 서버 통신오류가 심해 배당 / 결과 / 영상 전반적 누락 과다 되는 현상이 문제가 있었지만, 현재 정상화 되어 점검이 종료되었습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 및 라이브 쳇 또는 카카오톡으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1895330">
					</td>
					<td class="memo_no">
						73
					</td>
					<td class="open_memo memo_content" data-idx="1895330" data-i="73">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						04-15 20:02
					</td>
				</tr>
				<tr class="dspn ans" data-i="73">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1868943">
					</td>
					<td class="memo_no">
						72
					</td>
					<td class="open_memo memo_content" data-idx="1868943" data-i="72">
						 현시간 부로 계좌가 변경되었음을 알�
					</td>
					<td class="memo_date">
						04-15 18:40
					</td>
				</tr>
				<tr class="dspn ans" data-i="72">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1842560">
					</td>
					<td class="memo_no">
						71
					</td>
					<td class="open_memo memo_content" data-idx="1842560" data-i="71">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-15 18:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="71">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1815581">
					</td>
					<td class="memo_no">
						70
					</td>
					<td class="open_memo memo_content" data-idx="1815581" data-i="70">
						 안녕하세요 회원님 보스&nbsp;운영진입
					</td>
					<td class="memo_date">
						04-15 00:40
					</td>
				</tr>
				<tr class="dspn ans" data-i="70">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#f1c40f">안녕하세요 회원님 보스&nbsp;운영진입니다.</span>
						</p>
						<p>
							금일 농협은행 점검으로 04:00시 까지 농협은행 사용해 주시고 계신 회원님들은 환전이 불가한점 안내 드립니다.&nbsp;
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							보스은 항상 회원님들의 건승을 기원하겠습니다.<br>
							 오늘도 저희 보스을&nbsp;이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							<span style="color:#f1c40f">평생 주소: </span>보스사이트<strong>.com</strong><br>
							<span style="color:#f1c40f">텔레그램 : @Boss365cs</span>
						</p>
						<p>
							<span style="color:#f1c40f">카카오톡 : boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1789223">
					</td>
					<td class="memo_no">
						69
					</td>
					<td class="open_memo memo_content" data-idx="1789223" data-i="69">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-14 23:54
					</td>
				</tr>
				<tr class="dspn ans" data-i="69">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1762831">
					</td>
					<td class="memo_no">
						68
					</td>
					<td class="open_memo memo_content" data-idx="1762831" data-i="68">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-14 16:36
					</td>
				</tr>
				<tr class="dspn ans" data-i="68">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1736492">
					</td>
					<td class="memo_no">
						67
					</td>
					<td class="open_memo memo_content" data-idx="1736492" data-i="67">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-14 15:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="67">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1710155">
					</td>
					<td class="memo_no">
						66
					</td>
					<td class="open_memo memo_content" data-idx="1710155" data-i="66">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-14 00:09
					</td>
				</tr>
				<tr class="dspn ans" data-i="66">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1683860">
					</td>
					<td class="memo_no">
						65
					</td>
					<td class="open_memo memo_content" data-idx="1683860" data-i="65">
						 ##프리스핀(슬롯) 이벤트##
					</td>
					<td class="memo_date">
						04-14 00:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="65">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##프리스핀(슬롯) 이벤트##
						</p>
						<p>
							매주 일요일 프리스핀 DAY 이벤트 안내 드립니다&nbsp;
						</p>
						<p>
							이번 프리스핀 게임사는 &lt;CQ9&gt; 입니다
						</p>
						<p>
							매주 금요일, 토요일 합산 입금액(슬롯) 기준&nbsp;
						</p>
						<p>
							합 입금 10만원 이상 3만 포인트 지급
						</p>
						<p>
							합 입금 50만원 이상 7만 포인트 지급
						</p>
						<p>
							합 입금 100만원 이상 10만 포인트 지급
						</p>
						<p>
							합 입금 200만원 이상 15만 포인트 지급
						</p>
						<p>
							합 입금 300만원 이상 20만 포인트 지급
						</p>
						<p>
							&nbsp;지정된 게임 이외 게임 이용 시 모든 금액 몰수처리
						</p>
						<p>
							포인트는 단독 사용만 가능하며 롤링 300% / 최대 출금 5배 입니다.
						</p>
						<p>
							&nbsp;지정 게임사 긴급 점검으로 인하여 부득이하게 변경 될 수 있습니다.
						</p>
						<p>
							지정 게임사는 매주 변경되니 채널방 공지 참고 해주시면 감사하겠습니다.
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1657540">
					</td>
					<td class="memo_no">
						64
					</td>
					<td class="open_memo memo_content" data-idx="1657540" data-i="64">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-13 16:24
					</td>
				</tr>
				<tr class="dspn ans" data-i="64">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1631283">
					</td>
					<td class="memo_no">
						63
					</td>
					<td class="open_memo memo_content" data-idx="1631283" data-i="63">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-13 16:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="63">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1605029">
					</td>
					<td class="memo_no">
						62
					</td>
					<td class="open_memo memo_content" data-idx="1605029" data-i="62">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-13 15:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="62">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1578763">
					</td>
					<td class="memo_no">
						61
					</td>
					<td class="open_memo memo_content" data-idx="1578763" data-i="61">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-12 23:11
					</td>
				</tr>
				<tr class="dspn ans" data-i="61">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1552542">
					</td>
					<td class="memo_no">
						60
					</td>
					<td class="open_memo memo_content" data-idx="1552542" data-i="60">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-12 16:41
					</td>
				</tr>
				<tr class="dspn ans" data-i="60">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1526341">
					</td>
					<td class="memo_no">
						59
					</td>
					<td class="open_memo memo_content" data-idx="1526341" data-i="59">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-12 16:28
					</td>
				</tr>
				<tr class="dspn ans" data-i="59">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1500071">
					</td>
					<td class="memo_no">
						58
					</td>
					<td class="open_memo memo_content" data-idx="1500071" data-i="58">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-12 12:40
					</td>
				</tr>
				<tr class="dspn ans" data-i="58">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1473868">
					</td>
					<td class="memo_no">
						57
					</td>
					<td class="open_memo memo_content" data-idx="1473868" data-i="57">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-12 01:22
					</td>
				</tr>
				<tr class="dspn ans" data-i="57">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1447685">
					</td>
					<td class="memo_no">
						56
					</td>
					<td class="open_memo memo_content" data-idx="1447685" data-i="56">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-12 00:08
					</td>
				</tr>
				<tr class="dspn ans" data-i="56">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1421505">
					</td>
					<td class="memo_no">
						55
					</td>
					<td class="open_memo memo_content" data-idx="1421505" data-i="55">
						 안녕하세요 회원님들 보스입니다
					</td>
					<td class="memo_date">
						04-11 22:07
					</td>
				</tr>
				<tr class="dspn ans" data-i="55">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들 보스입니다
						</p>
						<p>
							금일 가상축구 서버 통신오류가 심해&nbsp;
						</p>
						<p>
							배당 / 결과 / 영상 전반적 누락 과다.
						</p>
						<p>
							물리적인 조치 불가하여 모니터링 중
						</p>
						<p>
							안정화에 빠른 조치 하겠습니다.
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1395333">
					</td>
					<td class="memo_no">
						54
					</td>
					<td class="open_memo memo_content" data-idx="1395333" data-i="54">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-11 21:13
					</td>
				</tr>
				<tr class="dspn ans" data-i="54">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1369083">
					</td>
					<td class="memo_no">
						53
					</td>
					<td class="open_memo memo_content" data-idx="1369083" data-i="53">
						 현시간 부로 계좌가 변경되었음을 알�
					</td>
					<td class="memo_date">
						04-11 16:38
					</td>
				</tr>
				<tr class="dspn ans" data-i="53">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1342919">
					</td>
					<td class="memo_no">
						52
					</td>
					<td class="open_memo memo_content" data-idx="1342919" data-i="52">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						04-11 16:22
					</td>
				</tr>
				<tr class="dspn ans" data-i="52">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1316755">
					</td>
					<td class="memo_no">
						51
					</td>
					<td class="open_memo memo_content" data-idx="1316755" data-i="51">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-11 16:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="51">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1290585">
					</td>
					<td class="memo_no">
						50
					</td>
					<td class="open_memo memo_content" data-idx="1290585" data-i="50">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-11 01:34
					</td>
				</tr>
				<tr class="dspn ans" data-i="50">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1264446">
					</td>
					<td class="memo_no">
						49
					</td>
					<td class="open_memo memo_content" data-idx="1264446" data-i="49">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-11 00:08
					</td>
				</tr>
				<tr class="dspn ans" data-i="49">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1238309">
					</td>
					<td class="memo_no">
						48
					</td>
					<td class="open_memo memo_content" data-idx="1238309" data-i="48">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-10 23:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="48">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1212173">
					</td>
					<td class="memo_no">
						47
					</td>
					<td class="open_memo memo_content" data-idx="1212173" data-i="47">
						 ## 보스 업데이트로 인해 추 후 발매 �
					</td>
					<td class="memo_date">
						04-10 21:13
					</td>
				</tr>
				<tr class="dspn ans" data-i="47">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 보스 업데이트로 인해 추 후 발매 예정이었던 미니게임 추가 안내##
						</p>
						<p>
							@슈퍼 사다리 1분 , 3분 , 5분<br>
							 @슈퍼 로하이 1분<br>
							 @슈퍼 섯다 1분&nbsp;
						</p>
						<p>
							@엔트리 파워사다리 5분<br>
							 @엔트리 키노사다리 5분
						</p>
						<p>
							- 자사에 현재 7개 커스텀 미니게임 추가 되었습니다 많은 이용 부탁드립니다-
						</p>
						<p>
							<br>
							 이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 및 라이브 쳇 또는 카카오톡으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss24cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1186036">
					</td>
					<td class="memo_no">
						46
					</td>
					<td class="open_memo memo_content" data-idx="1186036" data-i="46">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						04-10 19:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="46">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1159906">
					</td>
					<td class="memo_no">
						45
					</td>
					<td class="open_memo memo_content" data-idx="1159906" data-i="45">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-10 17:58
					</td>
				</tr>
				<tr class="dspn ans" data-i="45">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1133753">
					</td>
					<td class="memo_no">
						44
					</td>
					<td class="open_memo memo_content" data-idx="1133753" data-i="44">
						 ★보스 회원&nbsp;입금계좌 변경 안내 �
					</td>
					<td class="memo_date">
						04-10 17:35
					</td>
				</tr>
				<tr class="dspn ans" data-i="44">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내 계좌문의 필수★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss24cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1107613">
					</td>
					<td class="memo_no">
						43
					</td>
					<td class="open_memo memo_content" data-idx="1107613" data-i="43">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-10 00:07
					</td>
				</tr>
				<tr class="dspn ans" data-i="43">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1081533">
					</td>
					<td class="memo_no">
						42
					</td>
					<td class="open_memo memo_content" data-idx="1081533" data-i="42">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-10 00:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="42">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1055445">
					</td>
					<td class="memo_no">
						41
					</td>
					<td class="open_memo memo_content" data-idx="1055445" data-i="41">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						04-09 19:32
					</td>
				</tr>
				<tr class="dspn ans" data-i="41">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1029348">
					</td>
					<td class="memo_no">
						40
					</td>
					<td class="open_memo memo_content" data-idx="1029348" data-i="40">
						 ★입금 전 계좌문의 필수 강력안내★
					</td>
					<td class="memo_date">
						04-09 18:39
					</td>
				</tr>
				<tr class="dspn ans" data-i="40">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★입금 전 계좌문의 필수 강력안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="1003292">
					</td>
					<td class="memo_no">
						39
					</td>
					<td class="open_memo memo_content" data-idx="1003292" data-i="39">
						 ★보스 회원&nbsp;입금계좌 변경 안내 �
					</td>
					<td class="memo_date">
						04-09 18:29
					</td>
				</tr>
				<tr class="dspn ans" data-i="39">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내 전계좌 입금 시 처리불가★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
						<p>
							고객센터 카카오톡 : <span style="color:#f1c40f">boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="977236">
					</td>
					<td class="memo_no">
						38
					</td>
					<td class="open_memo memo_content" data-idx="977236" data-i="38">
						 « 에볼루션 정상화 안내 »
					</td>
					<td class="memo_date">
						04-09 18:09
					</td>
				</tr>
				<tr class="dspn ans" data-i="38">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							« 에볼루션 정상화 안내 »
						</p>
						<p>
							게임사 측 문제가 해결되어 정상화 된것으로 확인됩니다.
						</p>
						<p>
							운영에 참고해주시길 바랍니다.
						</p>
						<p>
							감사합니다.
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="951184">
					</td>
					<td class="memo_no">
						37
					</td>
					<td class="open_memo memo_content" data-idx="951184" data-i="37">
						 안녕하세요 &nbsp; 운영팀 입니다
					</td>
					<td class="memo_date">
						04-09 17:39
					</td>
				</tr>
				<tr class="dspn ans" data-i="37">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 &nbsp; 운영팀 입니다
						</p>
						<p>
							[ 에볼루션 게임사 ] 접속이슈 안내.
						</p>
						<p>
							현재 게임사측 이슈로 인해, 접속이 불가한 내용이 확인되었습니다. 게임사측에서 확인및 조사 / 조치중이며<br>
							 추가적으로 확인되는 내용이나&nbsp;<br>
							 정상화시 재공지 드릴 수 있도록 하겠습니다.
						</p>
						<p>
							이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="925133">
					</td>
					<td class="memo_no">
						36
					</td>
					<td class="open_memo memo_content" data-idx="925133" data-i="36">
						 ## 스포츠/미니게임 "무한 돌발 "이벤�
					</td>
					<td class="memo_date">
						04-09 16:31
					</td>
				</tr>
				<tr class="dspn ans" data-i="36">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 스포츠/미니게임 "무한 돌발 "이벤트 안내 ##
						</p>
						<p>
							@현 시간부터 ~ 20:00시까지 @<br>
							 스포츠/미니게임 "무한돌발"이벤트 진행합니다.<br>
							 &nbsp; &nbsp;&nbsp;<br>
							 스포츠 3폴더 충전시 20% 자동 지급
						</p>
						<p>
							스포츠2폴더/미니게임 충전시 10% 자동 지급
						</p>
						<p>
							<br>
							 - 모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							- 환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							- 환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다^^
						</p>
						<p>
							- 다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가합니다^^
						</p>
						<p>
							@스포츠 롤링 100%<br>
							 @미니게임 롤링 400%
						</p>
						<p>
							<br>
							 ‼️지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다.‼️
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs<br>
							 카카오톡 고객센터: boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="899069">
					</td>
					<td class="memo_no">
						35
					</td>
					<td class="open_memo memo_content" data-idx="899069" data-i="35">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-09 00:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="35">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="873041">
					</td>
					<td class="memo_no">
						34
					</td>
					<td class="open_memo memo_content" data-idx="873041" data-i="34">
						 ## 보스 페이백 이벤트## 안녕하세요
					</td>
					<td class="memo_date">
						04-09 00:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="34">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 보스 페이백 이벤트##<br>
							<br>
							 안녕하세요 회원님들 운영진입니다.
						</p>
						<p>
							매주 화요일 마다 지난주 화요일 ~ 월요일의 입출금 차액 5% 를 지급 합니다&nbsp;
						</p>
						<p>
							페이백 계산방법
						</p>
						<p>
							해당 주 총 입금액 10만원 해당 주 총 출금액 2만원 100,000 - 20,000=80,000&nbsp;
						</p>
						<p>
							페이백 지급포인트 : 80,000x5% = 4,000 원&nbsp;
						</p>
						<p>
							&nbsp;지급 &nbsp;받으신 페이백 롤링&nbsp;<br>
							 스포츠100%/스포츠 이외 다른게임 전부 300%
						</p>
						<p>
							&nbsp;페이백 버튼 클릭하시면 자동으로 지급 되시는점 참고 바랍니다
						</p>
						<p>
							&nbsp;주 2회 입금 이상자만 참여 가능 합니다
						</p>
						<p>
							지급받은 페이백 금액에 최대 10배까지 환전 가능하니 이용에 차질없게 참고해주시기 바랍니다.&nbsp;
						</p>
						<p>
							1~2레벨 - 최대지급액 50만원<br>
							 3~4레벨 - 최대지급액 100만원<br>
							 vip 1~2레벨 - 최대지급액 200만원<br>
							 vip 3레벨 - 최대지급액300만원<br>
							 레벨 등업에 따라 지급액 한도가 변경되었으니 많은 참여 바랍니다
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="846993">
					</td>
					<td class="memo_no">
						33
					</td>
					<td class="open_memo memo_content" data-idx="846993" data-i="33">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						04-08 18:58
					</td>
				</tr>
				<tr class="dspn ans" data-i="33">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="820980">
					</td>
					<td class="memo_no">
						32
					</td>
					<td class="open_memo memo_content" data-idx="820980" data-i="32">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-08 17:16
					</td>
				</tr>
				<tr class="dspn ans" data-i="32">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="794967">
					</td>
					<td class="memo_no">
						31
					</td>
					<td class="open_memo memo_content" data-idx="794967" data-i="31">
						 ★보스 회원&nbsp;입금계좌 변경 안내 �
					</td>
					<td class="memo_date">
						04-08 17:06
					</td>
				</tr>
				<tr class="dspn ans" data-i="31">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내 계좌문의 필수★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="768945">
					</td>
					<td class="memo_no">
						30
					</td>
					<td class="open_memo memo_content" data-idx="768945" data-i="30">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-08 16:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="30">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="742931">
					</td>
					<td class="memo_no">
						29
					</td>
					<td class="open_memo memo_content" data-idx="742931" data-i="29">
						 ## 로투스 게임 점검 종료안내 ##
					</td>
					<td class="memo_date">
						04-08 16:24
					</td>
				</tr>
				<tr class="dspn ans" data-i="29">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 로투스 게임 점검 종료안내 ##
						</p>
						<p>
							로투스 게임 점검이 종료되어 정상화 되었습니다.
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다.
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="716352">
					</td>
					<td class="memo_no">
						28
					</td>
					<td class="open_memo memo_content" data-idx="716352" data-i="28">
						 ##로투스 게이밍 정기점검 안내입니다
					</td>
					<td class="memo_date">
						04-08 08:41
					</td>
				</tr>
				<tr class="dspn ans" data-i="28">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##로투스 게이밍 정기점검 안내입니다##
						</p>
						<p>
							안녕하세요 보스 운영진입니다!
						</p>
						<p>
							점검 일시 : 2024년 04월 08일 월요일 10시 부터 16시 까지 총 6시간
						</p>
						<p>
							점검 내용:서버 안정화, 스튜디오 정리 작업
						</p>
						<p>
							다음 정기 점검일 : 2024년 04월 22일 월요일 (내부 사정으로 변경 될수 있습니다)
						</p>
						<p>
							로투스 토큰 게임은 정상 진행합니다.
						</p>
						<p>
							점검 종료시 쪽지드리도록 하겠습니다.
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="690359">
					</td>
					<td class="memo_no">
						27
					</td>
					<td class="open_memo memo_content" data-idx="690359" data-i="27">
						 ##로투스 게이밍 정기점검 안내입니다
					</td>
					<td class="memo_date">
						04-08 08:17
					</td>
				</tr>
				<tr class="dspn ans" data-i="27">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##로투스 게이밍 정기점검 안내입니다##
						</p>
						<p>
							안녕하세요 보스 운영진입니다!
						</p>
						<p>
							점검 일시 : 2024년 04월 08일 월요일 14시 부터 16시 까지 총 2시간
						</p>
						<p>
							일정에 따라서 변경될 수 있으니 이 점 양해 부탁드리겠습니다
						</p>
						<p>
							점검 내용:웹서버 및 DB 서버 업데이트
						</p>
						<p>
							&nbsp;이용에 불편을 드려 대단히 죄송합니다
						</p>
						<p>
							&nbsp;오늘도 저희 보스를 찾아주셔서 감사합니다
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="664365">
					</td>
					<td class="memo_no">
						26
					</td>
					<td class="open_memo memo_content" data-idx="664365" data-i="26">
						 ##신규이벤트 슬롯 당일 페이백안내 ##
					</td>
					<td class="memo_date">
						04-08 01:00
					</td>
				</tr>
				<tr class="dspn ans" data-i="26">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							##신규이벤트 슬롯 당일 페이백안내 ##
						</p>
						<p>
							안녕하세요 회원님들 보스 운영진입니다.
						</p>
						<p>
							슬롯회원님들을 위한 당일페이백 이벤트가 시작되었습니다&nbsp;
						</p>
						<p>
							슬롯 유저회원님들만 참여 가능합니다.
						</p>
						<p>
							당일 충전 - 환전 - 보유금액에 대한 루징금액 10% 익일지급이 됩니다.
						</p>
						<p>
							다음날 00시 이 후로 고객센터 문의 시 지급처리 됩니다^^
						</p>
						<p>
							슬롯 이용자만 참여가능 / 다른 게임 이용 시 지급 불가
						</p>
						<p>
							&nbsp;페이백 롤링 300% / 입금액과 동시 사용 시 200% (입금액이 페이백보다 클 시 )
						</p>
						<p>
							자세한 사항은 이벤트란 슬롯 당일 페이백 이벤트 참고 해주시길 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="638374">
					</td>
					<td class="memo_no">
						25
					</td>
					<td class="open_memo memo_content" data-idx="638374" data-i="25">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-07 23:51
					</td>
				</tr>
				<tr class="dspn ans" data-i="25">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="612391">
					</td>
					<td class="memo_no">
						24
					</td>
					<td class="open_memo memo_content" data-idx="612391" data-i="24">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-07 20:49
					</td>
				</tr>
				<tr class="dspn ans" data-i="24">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="586418">
					</td>
					<td class="memo_no">
						23
					</td>
					<td class="open_memo memo_content" data-idx="586418" data-i="23">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-07 20:35
					</td>
				</tr>
				<tr class="dspn ans" data-i="23">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="560401">
					</td>
					<td class="memo_no">
						22
					</td>
					<td class="open_memo memo_content" data-idx="560401" data-i="22">
						 &nbsp; ##스포츠 / 미니게임## &nbsp;&nbsp;
					</td>
					<td class="memo_date">
						04-07 11:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="22">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp; ##스포츠 / 미니게임##<br>
							 &nbsp;&nbsp;<br>
							 &nbsp;<br>
							 !!안녕하세요 회원님들보스 운영팀입니다.!!
						</p>
						<p>
							!스포츠/미니게임 "무한 돌발 "이벤트 안내!
						</p>
						<p>
							!12:00시부터 ~ 15:00시까지 !<br>
							 스포츠/미니게임 "무한돌발"이벤트 진행합니다.<br>
							 &nbsp; &nbsp;&nbsp;<br>
							 스포츠 3폴더 충전시 20% 자동 지급
						</p>
						<p>
							스포츠2폴더/미니게임 충전시 10% 자동 지급
						</p>
						<p>
							<br>
							 모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다^^
						</p>
						<p>
							다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가합니다^^
						</p>
						<p>
							스포츠 롤링 100%<br>
							 미니게임 롤링 400%
						</p>
						<p>
							<br>
							 ‼️지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다.‼️
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="534431">
					</td>
					<td class="memo_no">
						21
					</td>
					<td class="open_memo memo_content" data-idx="534431" data-i="21">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-07 00:22
					</td>
				</tr>
				<tr class="dspn ans" data-i="21">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="508488">
					</td>
					<td class="memo_no">
						20
					</td>
					<td class="open_memo memo_content" data-idx="508488" data-i="20">
						 안녕하세요 회원님들운영진입니다.
					</td>
					<td class="memo_date">
						04-07 00:08
					</td>
				</tr>
				<tr class="dspn ans" data-i="20">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님들운영진입니다.
						</p>
						<p>
							&nbsp;프리스핀(슬롯) 이벤트
						</p>
						<p>
							매주 일요일 프리스핀 DAY 이벤트 안내 드립니다&nbsp;
						</p>
						<p>
							이번 프리스핀 게임사는 프라그마틱 입니다
						</p>
						<p>
							매주 금요일, 토요일 합산 입금액(슬롯) 기준&nbsp;
						</p>
						<p>
							합 입금 10만원 이상 3만 포인트 지급
						</p>
						<p>
							합 입금 50만원 이상 7만 포인트 지급
						</p>
						<p>
							합 입금 100만원 이상 10만 포인트 지급
						</p>
						<p>
							합 입금 200만원 이상 15만 포인트 지급
						</p>
						<p>
							합 입금 300만원 이상 20만 포인트 지급
						</p>
						<p>
							&nbsp;지정된 게임 이외 게임 이용 시 모든 금액 몰수처리
						</p>
						<p>
							포인트는 단독 사용만 가능하며 롤링 300% / 최대 출금 5배 입니다.
						</p>
						<p>
							&nbsp;지정 게임사 긴급 점검으로 인하여 부득이하게 변경 될 수 있습니다.
						</p>
						<p>
							&nbsp;지정 게임사는 매주 변경되니 채널방 공지 참고 해주시면 감사하겠습니다.
						</p>
						<p>
							자세한 내용은 이벤트 란 참고 바랍니다
						</p>
						<p>
							많은 참여와 &nbsp;이용 부탁 드리며, 이제부터 저희 보스를 찾아주시면 더욱 감사 드리겠습니다.
						</p>
						<p>
							이해가 되지 않거나 불편하신 사항이 있으시면 본사텔레그램 또는 라이브 쳇 으로 문의 주세요
						</p>
						<p>
							평생도메인 : 보스사이트.com (https://%EB%B3%B4%EC%8A%A4%EC%82%AC%EC%9D%B4%ED%8A%B8.com)<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="482546">
					</td>
					<td class="memo_no">
						19
					</td>
					<td class="open_memo memo_content" data-idx="482546" data-i="19">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-06 23:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="19">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="456605">
					</td>
					<td class="memo_no">
						18
					</td>
					<td class="open_memo memo_content" data-idx="456605" data-i="18">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-06 22:03
					</td>
				</tr>
				<tr class="dspn ans" data-i="18">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="430669">
					</td>
					<td class="memo_no">
						17
					</td>
					<td class="open_memo memo_content" data-idx="430669" data-i="17">
						 ※전 계좌 입금 시 충전 처리 어려운 �
					</td>
					<td class="memo_date">
						04-06 18:37
					</td>
				</tr>
				<tr class="dspn ans" data-i="17">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="404752">
					</td>
					<td class="memo_no">
						16
					</td>
					<td class="open_memo memo_content" data-idx="404752" data-i="16">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-06 18:05
					</td>
				</tr>
				<tr class="dspn ans" data-i="16">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="378833">
					</td>
					<td class="memo_no">
						15
					</td>
					<td class="open_memo memo_content" data-idx="378833" data-i="15">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-06 17:43
					</td>
				</tr>
				<tr class="dspn ans" data-i="15">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="352916">
					</td>
					<td class="memo_no">
						14
					</td>
					<td class="open_memo memo_content" data-idx="352916" data-i="14">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-06 17:39
					</td>
				</tr>
				<tr class="dspn ans" data-i="14">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="326996">
					</td>
					<td class="memo_no">
						13
					</td>
					<td class="open_memo memo_content" data-idx="326996" data-i="13">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-06 13:42
					</td>
				</tr>
				<tr class="dspn ans" data-i="13">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="301043">
					</td>
					<td class="memo_no">
						12
					</td>
					<td class="open_memo memo_content" data-idx="301043" data-i="12">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-05 23:51
					</td>
				</tr>
				<tr class="dspn ans" data-i="12">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="275151">
					</td>
					<td class="memo_no">
						11
					</td>
					<td class="open_memo memo_content" data-idx="275151" data-i="11">
						 ★보스 회원 입금계좌 변경 안내★
					</td>
					<td class="memo_date">
						04-05 18:59
					</td>
				</tr>
				<tr class="dspn ans" data-i="11">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원 입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="249282">
					</td>
					<td class="memo_no">
						10
					</td>
					<td class="open_memo memo_content" data-idx="249282" data-i="10">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-05 18:52
					</td>
				</tr>
				<tr class="dspn ans" data-i="10">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="223414">
					</td>
					<td class="memo_no">
						9
					</td>
					<td class="open_memo memo_content" data-idx="223414" data-i="9">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-05 18:23
					</td>
				</tr>
				<tr class="dspn ans" data-i="9">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="197548">
					</td>
					<td class="memo_no">
						8
					</td>
					<td class="open_memo memo_content" data-idx="197548" data-i="8">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-05 18:21
					</td>
				</tr>
				<tr class="dspn ans" data-i="8">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="171681">
					</td>
					<td class="memo_no">
						7
					</td>
					<td class="open_memo memo_content" data-idx="171681" data-i="7">
						 &nbsp;
					</td>
					<td class="memo_date">
						04-05 16:01
					</td>
				</tr>
				<tr class="dspn ans" data-i="7">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							&nbsp;
						</p>
						<p>
							## 16:00시부터 ~ 19:00시까지&nbsp;스포츠/미니게임 "무한돌발"이벤트 진행합니다. ##<br>
							 &nbsp; &nbsp;&nbsp;<br>
							 - 스포츠 3폴더 충전시 20% 자동 지급
						</p>
						<p>
							- 스포츠2폴더/미니게임 충전시 10% 자동 지급
						</p>
						<p>
							<br>
							 - 모든 돌발이벤트 포인트는 충전 유형 선택 시 자동지급 입니다.
						</p>
						<p>
							- 환전내역 있으셔도 무제한 참여 가능합니다.
						</p>
						<p>
							- 환전내역 있으신 회원님들께서는 고객센터로 문의 시 지급 도와드리겠습니다^^
						</p>
						<p>
							다만, 돌발 시간 대 출금 내역이 있을 시 지급이 불가합니다^^
						</p>
						<p>
							@스포츠 롤링 100%<br>
							 @미니게임 롤링 400%
						</p>
						<p>
							<br>
							 !!지급 받으신 포인트 포함 전액 롤링&nbsp;<br>
							 기준입니다.!!
						</p>
						<p>
							많은 참여 부탁 드리며, 오늘도 저희 보스를 찾아주셔서 감사합니다^^
						</p>
						<p>
							평생도메인 : 보스사이트.com<br>
							 텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="145793">
					</td>
					<td class="memo_no">
						6
					</td>
					<td class="open_memo memo_content" data-idx="145793" data-i="6">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-05 00:56
					</td>
				</tr>
				<tr class="dspn ans" data-i="6">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="119957">
					</td>
					<td class="memo_no">
						5
					</td>
					<td class="open_memo memo_content" data-idx="119957" data-i="5">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-04 21:10
					</td>
				</tr>
				<tr class="dspn ans" data-i="5">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="94135">
					</td>
					<td class="memo_no">
						4
					</td>
					<td class="open_memo memo_content" data-idx="94135" data-i="4">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-04 20:57
					</td>
				</tr>
				<tr class="dspn ans" data-i="4">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="68313">
					</td>
					<td class="memo_no">
						3
					</td>
					<td class="open_memo memo_content" data-idx="68313" data-i="3">
						 ★보스 회원&nbsp;입금계좌 변경 안내�
					</td>
					<td class="memo_date">
						04-04 20:45
					</td>
				</tr>
				<tr class="dspn ans" data-i="3">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							★보스 회원&nbsp;입금계좌 변경 안내★
						</p>
						<p>
							안녕하세요 [보스] 운영팀입니다 !
						</p>
						<p>
							현시간 부로 계좌가 변경되었음을 알립니다 !&nbsp;
						</p>
						<p>
							항상 입금하시기 전 계좌문의 한 후 해당 계좌에 맞게 입금 부탁드리겠습니다.
						</p>
						<p>
							<span style="color:#ffff00"><span style="font-size:16px">※전 계좌 입금 시 충전 처리 어려운 점 인지 부탁드리겠습니다※</span></span>
						</p>
						<p>
							평생 주소: 보스사이트<strong>.com</strong><br>
							 고객센터 텔레그램 : <span style="color:#f1c40f">@Boss365cs</span>
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="42448">
					</td>
					<td class="memo_no">
						2
					</td>
					<td class="open_memo memo_content" data-idx="42448" data-i="2">
						 ## 레볼루션 홀덤 오픈 안내 ##
					</td>
					<td class="memo_date">
						04-04 16:33
					</td>
				</tr>
				<tr class="dspn ans" data-i="2">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							## 레볼루션 홀덤 오픈 안내 ##
						</p>
						<p>
							자체점검 예정시간보다 일찍 종료 되었습니다!
						</p>
						<p>
							레볼루션 게임사 이벤트도 새롭게 생성되었으니 이벤트란 참고 부탁드립니다^^&nbsp;
						</p>
						<p>
							<br>
							 - 레볼루션 자세한 규정사항은 규정란 참고 해주시길 바랍니다.
						</p>
						<p>
							- 모든 규정 및 이벤트 숙지 후 이용해주시면 감사하겠습니다.
						</p>
						<p>
							<br>
							 !!국내최초 타사이트 유저들과 운이 아닌 진정한 실력 승부!!
						</p>
						<p>
							@많은 관심과 이용 부탁드리며 회원님들의 건승을 기원합니다@
						</p>
						<p>
							@평생도메인 : 보스사이트.com<br>
							 @텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				<tr>
					<td class="memo_chk">
						<input type="checkbox" name="chk[]" class="chk" value="16633">
					</td>
					<td class="memo_no">
						1
					</td>
					<td class="open_memo memo_content" data-idx="16633" data-i="1">
						 안녕하세요 회원님 보스 운영진입니�
					</td>
					<td class="memo_date">
						04-04 16:31
					</td>
				</tr>
				<tr class="dspn ans" data-i="1">
					<td>
					</td>
					<td class="memo_no">
					</td>
					<td class="memo_content">
						<p>
							안녕하세요 회원님 보스 운영진입니다.&nbsp;
						</p>
						<p>
							새로운 솔루션 개발로 인하여 이 전 보유 머니 및 카지노머니에 차질이 생기신 회원님들께서는
						</p>
						<p>
							상담 및 텔레그램으로 문의를 주시면 확인 후 지급처리 도와드리겠습니다^^
						</p>
						<p>
							보다 더 나은 베팅환경을 위한 조치이니 회원님들의 넓은 양해 부탁드립니다^^
						</p>
						<p>
							<br>
							 &nbsp;
						</p>
						<p>
							오늘도 저희 보스를 이용해 주셔서 대단히 감사합니다!!
						</p>
						<p>
							@평생도메인 : 보스사이트.com<br>
							 @텔레그램 고객센터: @Boss365cs
						</p>
					</td>
					<td>
					</td>
				</tr>
				</tbody>
				</table>
				<div class="btn_right_box">
					<a class="btn_mid btn_blue" href="/memo">전체읽음</a>
					<input type="submit" value="선택삭제" class="btn_list_del">
				</div>
			</form>
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
  name: 'memoPage',

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