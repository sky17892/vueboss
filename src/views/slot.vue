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
	<div class="cs_img_box">
		<img src="https://boss-1177.com/static/data/upload/banner/슬롯상단(1225x219).jpg" alt="">
	</div>
	<div class="main_game_ttl">
		카지노머니 <span class="main_game_sub_ttl">(머니이전)</span>
	</div>
	<div class="slot_money_box">
		<div class="slot_money_box3">
			<span :class="['sm_charge', { on: isChargeActive }]" @click="toggleCharge">카지노로이동</span>
			<span :class="['sm_withdrawal', { on: isWithdrawalActive }]" @click="toggleWithdrawal">보유머니로이동</span>
		</div>
		<div class="cb">
		</div>
		<div v-if="isChargeActive" class="sm_charge_box">
      <input type="text" class="sm_c_money" v-model="smCMoney" />
			<span class="go_to_charge">이동하기</span>
			<div class="sm_btn_box">				
        <span v-for="amt in amounts" :key="amt" class="select_money" :data-amt="amt" @click="selectMoney(amt)">
      {{ amt }}
    </span>    
			</div>
		</div>		
		<div v-if="isWithdrawalActive" class="sm_withdrawal_box">
    <input type="text" class="sm_w_money" v-model="smWMoney" />
    <span class="go_to_withdrawal">이동하기</span>
    <div class="sm_btn_box">
        <span v-for="amt2 in amounts2" :key="amt2" class="select_money2" :data-amt="amt2" @click="selectMoney2(amt2)">
            {{ amt2 }}
        </span>
        </div>
		</div>
	</div>
	<div class="page_ttl">
		슬롯 게임사별 전체보기 <span class="main_game_sub_ttl">(클릭 시 이동)</span>
	</div>
	<div class="slot_box">
		<div class="open_slot open_slot2" game-id="7" game-name="프라그매틱">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/pragmatic.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('프라그매틱')">프라그매틱</span>
		</div>
		<div class="open_slot open_slot2" game-id="55" game-name="마이크로 게이밍">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/mg.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('마이크로 게이밍')">마이크로 게이밍</span>
		</div>
		<div class="open_slot open_slot2" game-id="25" game-name="하바네로">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/habanero.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('하바네로')">하바네로</span>
		</div>
		<div class="open_slot open_slot2" game-id="9" game-name="부운고">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/bng.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('부운고')">부운고</span>
		</div>
		<div class="open_slot open_slot2" game-id="26" game-name="플레이앤고">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/playngo.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('플레이앤고')">플레이앤고</span>
		</div>
		<div class="open_slot open_slot2" game-id="17" game-name="와즈단">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/wzd.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('와즈단')">와즈단</span>
		</div>
		<div class="open_slot open_slot2" game-id="40" game-name="블루프린트">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/blue.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('블루프린트')">블루프린트</span>
		</div>
		<div class="open_slot open_slot2" game-id="4" game-name="씨큐나인">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/cq9.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('씨큐나인')">씨큐나인</span>
		</div>
		<div class="open_slot open_slot2" game-id="3" game-name="에보플레이">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="/static/img/slot/evoplay.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('에보플레이')">에보플레이</span>
		</div>
		<div class="open_slot open_slot2" game-id="24" game-name="플레이스타">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="/static/img/slot/playstar.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('플레이스타')">플레이스타</span>
		</div>
		<div class="open_slot open_slot2" game-id="34" game-name=" TPG-슬롯">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/tpg.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('TPG-슬롯')"> TPG-슬롯</span>
		</div>
		<div class="open_slot open_slot2" game-id="0000" game-name="게임아트">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<span class="slot_subttl" @click="showslot('게임아트')">게임아트</span>
		</div>
		<div class="open_slot open_slot2" game-id="42" game-name="노리밋시티">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/nolimit.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('노리밋시티')">노리밋시티</span>
		</div>
		<div class="open_slot open_slot2" game-id="41" game-name="썬더킥">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/kick.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('썬더킥')">썬더킥</span>
		</div>
		<div class="open_slot open_slot2" game-id="44" game-name="플레리펄스">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/pp.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('플레리펄스')">플레리펄스</span>
		</div>
		<div class="open_slot open_slot2" game-id="0000" game-name="릴렉스게임">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<span class="slot_subttl" @click="showslot('릴렉스게임')">릴렉스게임</span>
		</div>
		<div class="open_slot open_slot2" game-id="49" game-name="원엑스투">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/1x2.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('원엑스투')">원엑스투</span>
		</div>
		<div class="open_slot open_slot2" game-id="43" game-name="모빌롯츠">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/mobilots.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('모빌롯츠')">모빌롯츠</span>
		</div>
		<div class="open_slot open_slot2" game-id="45" game-name="드라군">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/dragon.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('드라군')">드라군</span>
		</div>
		<div class="open_slot open_slot2" game-id="50" game-name="ELK">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/elk.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('ELK')">ELK</span>
		</div>
		<div class="open_slot open_slot2" game-id="37" game-name="PG소프트">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/pgsoft.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('PG소프트')">PG소프트</span>
		</div>
		<div class="open_slot open_slot2" game-id="52" game-name="릴킹덤">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/rk.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('릴킹덤')">릴킹덤</span>
		</div>
		<div class="open_slot open_slot2" game-id="23" game-name="플레이슨">
			<img src="https://boss-1177.com/static/img/slot/default_slot.png" alt="">
			<div class="comp_img">
				<img src="https://boss-1177.com/static/img/slot/playson.png" alt="">
			</div>
			<span class="slot_subttl" @click="showslot('플레이슨')">플레이슨</span>
		</div>
	</div>
	<div class="slot_game_box" :style="{ display: isJoinVisible123 ? 'block' : 'none'}">
	<div class="slot_top">
		<span class="s_name">{{ currentGameName }}</span>
		<div class="close_box" @click="hideslot">
			<i class="far fa-times-circle" aria-hidden="true"></i>
		</div>
		<div class="slot_search_box">
			<input type="text" class="sch_slot" value="" placeholder="게임검색">
		</div>
	</div>
	<div class="slot_games_inner">
		<ul class="slot_games"><li class="open_slot_game" data-id="SGLoonyBlox" data-name="루니 블록스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGLoonyBlox.png" alt="">
		<span class="slot_ttl">루니 블록스</span>
</li>
<li class="open_slot_game" data-id="SGKnockoutFootballRush" data-name="넉 아웃 풋볼 Rush" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGKnockoutFootballRush.png" alt="">
		<span class="slot_ttl">넉 아웃 풋볼 Rush</span>
</li>
<li class="open_slot_game" data-id="SGColossalGems" data-name="콜로살 젬스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGColossalGems.png" alt="">
		<span class="slot_ttl">콜로살 젬스</span>
</li>
<li class="open_slot_game" data-id="SGHotHotHalloween" data-name="핫 핫 할로윈" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGHotHotHalloween.png" alt="">
		<span class="slot_ttl">핫 핫 할로윈</span>
</li>
<li class="open_slot_game" data-id="SGLuckyFortuneCat" data-name="럭키 포츈 캣" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGLuckyFortuneCat.png" alt="">
		<span class="slot_ttl">럭키 포츈 캣</span>
</li>
<li class="open_slot_game" data-id="SGWizardsWantWar" data-name="위자즈 원트 워!" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGWizardsWantWar.png" alt="">
		<span class="slot_ttl">위자즈 원트 워!</span>
</li>
<li class="open_slot_game" data-id="SGHotHotFruit" data-name="핫 핫 프루트" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGHotHotFruit.png" alt="">
		<span class="slot_ttl">핫 핫 프루트</span>
</li>
<li class="open_slot_game" data-id="SG5LuckyLions" data-name="5 럭키 라이온스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SG5LuckyLions.png" alt="">
		<span class="slot_ttl">5 럭키 라이온스</span>
</li>
<li class="open_slot_game" data-id="SGMountMazuma" data-name="마운트 마주마" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGMountMazuma.png" alt="">
		<span class="slot_ttl">마운트 마주마</span>
</li>
<li class="open_slot_game" data-id="SGWildTrucks" data-name="와일드 트럭스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGWildTrucks.png" alt="">
		<span class="slot_ttl">와일드 트럭스</span>
</li>
<li class="open_slot_game" data-id="SGLuckyLucky" data-name="럭키 럭키" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGLuckyLucky.png" alt="">
		<span class="slot_ttl">럭키 럭키</span>
</li>
<li class="open_slot_game" data-id="SGKnockoutFootball" data-name="넉 아웃 풋볼" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGKnockoutFootball.png" alt="">
		<span class="slot_ttl">넉 아웃 풋볼</span>
</li>
<li class="open_slot_game" data-id="SGEgyptianDreamsDeluxe" data-name="이집션 드림스 Deluxe" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGEgyptianDreamsDeluxe.png" alt="">
		<span class="slot_ttl">이집션 드림스 Deluxe</span>
</li>
<li class="open_slot_game" data-id="SGJump" data-name="점프!" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGJump.png" alt="">
		<span class="slot_ttl">점프!</span>
</li>
<li class="open_slot_game" data-id="SGPumpkinPatch" data-name="펌프킨 패치" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGPumpkinPatch.png" alt="">
		<span class="slot_ttl">펌프킨 패치</span>
</li>
<li class="open_slot_game" data-id="SGHappiestChristmasTree" data-name="해피스트 크리스마스 트리" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGHappiestChristmasTree.png" alt="">
		<span class="slot_ttl">해피스트 크리스마스 트리</span>
</li>
<li class="open_slot_game" data-id="SGSantasVillage" data-name="산타스 빌리지" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGSantasVillage.png" alt="">
		<span class="slot_ttl">산타스 빌리지</span>
</li>
<li class="open_slot_game" data-id="SGPresto" data-name="프레스토!" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGPresto.png" alt="">
		<span class="slot_ttl">프레스토!</span>
</li>
<li class="open_slot_game" data-id="SGWaysOfFortune" data-name="웨이 오프 포츈" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGWaysOfFortune.png" alt="">
		<span class="slot_ttl">웨이 오프 포츈</span>
</li>
<li class="open_slot_game" data-id="SGFortuneDogs" data-name="포츈 도그스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGFortuneDogs.png" alt="">
		<span class="slot_ttl">포츈 도그스</span>
</li>
<li class="open_slot_game" data-id="SGLondonHunter" data-name="런던 헌터" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGLondonHunter.png" alt="">
		<span class="slot_ttl">런던 헌터</span>
</li>
<li class="open_slot_game" data-id="SGMagicOak" data-name="매직 오크" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGMagicOak.png" alt="">
		<span class="slot_ttl">매직 오크</span>
</li>
<li class="open_slot_game" data-id="SGRollingRoger" data-name="롤링 로저" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGRollingRoger.png" alt="">
		<span class="slot_ttl">롤링 로저</span>
</li>
<li class="open_slot_game" data-id="SGFourDivineBeasts" data-name="포 디바인 비스츠" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGFourDivineBeasts.png" alt="">
		<span class="slot_ttl">포 디바인 비스츠</span>
</li>
<li class="open_slot_game" data-id="SGScruffyScallywags" data-name="스크러피 스캘리웨그스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGScruffyScallywags.png" alt="">
		<span class="slot_ttl">스크러피 스캘리웨그스</span>
</li>
<li class="open_slot_game" data-id="SGNuwa" data-name="누와" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGNuwa.png" alt="">
		<span class="slot_ttl">누와</span>
</li>
<li class="open_slot_game" data-id="SGTheKoiGate" data-name="코이 게이트" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGTheKoiGate.png" alt="">
		<span class="slot_ttl">코이 게이트</span>
</li>
<li class="open_slot_game" data-id="SGCakeValley" data-name="케이크 밸리" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGCakeValley.png" alt="">
		<span class="slot_ttl">케이크 밸리</span>
</li>
<li class="open_slot_game" data-id="SG5Mariachis" data-name="5 마리아치스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SG5Mariachis.png" alt="">
		<span class="slot_ttl">5 마리아치스</span>
</li>
<li class="open_slot_game" data-id="SGFireRooster" data-name="파이어 루스터" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGFireRooster.png" alt="">
		<span class="slot_ttl">파이어 루스터</span>
</li>
<li class="open_slot_game" data-id="SGBirdOfThunder" data-name="버드 오브 썬더" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGBirdOfThunder.png" alt="">
		<span class="slot_ttl">버드 오브 썬더</span>
</li>
<li class="open_slot_game" data-id="SGTheDeadEscape" data-name="더 데드 이스케이프" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGTheDeadEscape.png" alt="">
		<span class="slot_ttl">더 데드 이스케이프</span>
</li>
<li class="open_slot_game" data-id="SGPandaPanda" data-name="판다 판다" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGPandaPanda.png" alt="">
		<span class="slot_ttl">판다 판다</span>
</li>
<li class="open_slot_game" data-id="SGOceansCall" data-name="오션스 콜" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGOceansCall.png" alt="">
		<span class="slot_ttl">오션스 콜</span>
</li>
<li class="open_slot_game" data-id="SGFenghuang" data-name="펑후앙" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGFenghuang.png" alt="">
		<span class="slot_ttl">펑후앙</span>
</li>
<li class="open_slot_game" data-id="SGGangsters" data-name="갱스터스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGGangsters.png" alt="">
		<span class="slot_ttl">갱스터스</span>
</li>
<li class="open_slot_game" data-id="SGRuffledUp" data-name="러플드 업" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGRuffledUp.png" alt="">
		<span class="slot_ttl">러플드 업</span>
</li>
<li class="open_slot_game" data-id="SGFaCaiShen" data-name="파 카이 센" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGFaCaiShen.png" alt="">
		<span class="slot_ttl">파 카이 센</span>
</li>
<li class="open_slot_game" data-id="SG12Zodiacs" data-name="12 조디악스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SG12Zodiacs.png" alt="">
		<span class="slot_ttl">12 조디악스</span>
</li>
<li class="open_slot_game" data-id="SGSparta" data-name="스파르타" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGSparta.png" alt="">
		<span class="slot_ttl">스파르타</span>
</li>
<li class="open_slot_game" data-id="SGBombsAway" data-name="밤스 어웨이" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGBombsAway.png" alt="">
		<span class="slot_ttl">밤스 어웨이</span>
</li>
<li class="open_slot_game" data-id="SGGoldRush" data-name="골드 러쉬" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGGoldRush.png" alt="">
		<span class="slot_ttl">골드 러쉬</span>
</li>
<li class="open_slot_game" data-id="SGDragonsThrone" data-name="드래곤스 쓰론" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGDragonsThrone.png" alt="">
		<span class="slot_ttl">드래곤스 쓰론</span>
</li>
<li class="open_slot_game" data-id="SGWickedWitch" data-name="위키드 위치" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGWickedWitch.png" alt="">
		<span class="slot_ttl">위키드 위치</span>
</li>
<li class="open_slot_game" data-id="SGSuperTwister" data-name="슈퍼 트위스터" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGSuperTwister.png" alt="">
		<span class="slot_ttl">슈퍼 트위스터</span>
</li>
<li class="open_slot_game" data-id="SGRomanEmpire" data-name="로만 엠파이어" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGRomanEmpire.png" alt="">
		<span class="slot_ttl">로만 엠파이어</span>
</li>
<li class="open_slot_game" data-id="SGCoyoteCrash" data-name="코요테 크래쉬" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGCoyoteCrash.png" alt="">
		<span class="slot_ttl">코요테 크래쉬</span>
</li>
<li class="open_slot_game" data-id="SGGalacticCash" data-name="갈라틱 캐시" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGGalacticCash.png" alt="">
		<span class="slot_ttl">갈라틱 캐시</span>
</li>
<li class="open_slot_game" data-id="SGZeus2" data-name="제우스2" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGZeus2.png" alt="">
		<span class="slot_ttl">제우스2</span>
</li>
<li class="open_slot_game" data-id="SGBuggyBonus" data-name="버기 보너스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGBuggyBonus.png" alt="">
		<span class="slot_ttl">버기 보너스</span>
</li>
<li class="open_slot_game" data-id="SGGlamRock" data-name="글램 락" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGGlamRock.png" alt="">
		<span class="slot_ttl">글램 락</span>
</li>
<li class="open_slot_game" data-id="SGTreasureDiver" data-name="트레져 다이버" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGTreasureDiver.png" alt="">
		<span class="slot_ttl">트레져 다이버</span>
</li>
<li class="open_slot_game" data-id="SGKanesInferno" data-name="케인스 인페르노" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGKanesInferno.png" alt="">
		<span class="slot_ttl">케인스 인페르노</span>
</li>
<li class="open_slot_game" data-id="SGTreasureTomb" data-name="트레져 톰" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGTreasureTomb.png" alt="">
		<span class="slot_ttl">트레져 톰</span>
</li>
<li class="open_slot_game" data-id="SGArcaneElements" data-name="아케인 엘리먼츠" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGArcaneElements.png" alt="">
		<span class="slot_ttl">아케인 엘리먼츠</span>
</li>
<li class="open_slot_game" data-id="SGJugglenaut" data-name="정글넛" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGJugglenaut.png" alt="">
		<span class="slot_ttl">정글넛</span>
</li>
<li class="open_slot_game" data-id="SGKingTutsTomb" data-name="킹 투츠 톰" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGKingTutsTomb.png" alt="">
		<span class="slot_ttl">킹 투츠 톰</span>
</li>
<li class="open_slot_game" data-id="SGCarnivalCash" data-name="카니발 캐쉬" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGCarnivalCash.png" alt="">
		<span class="slot_ttl">카니발 캐쉬</span>
</li>
<li class="open_slot_game" data-id="SGShaolinFortunes100" data-name="샤올린 포츈스 100" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGShaolinFortunes100.png" alt="">
		<span class="slot_ttl">샤올린 포츈스 100</span>
</li>
<li class="open_slot_game" data-id="SGShaolinFortunes243" data-name="샤올린 포츈스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGShaolinFortunes243.png" alt="">
		<span class="slot_ttl">샤올린 포츈스</span>
</li>
<li class="open_slot_game" data-id="SGTheDragonCastle" data-name="드래곤 캐슬" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGTheDragonCastle.png" alt="">
		<span class="slot_ttl">드래곤 캐슬</span>
</li>
<li class="open_slot_game" data-id="SGDrFeelgood" data-name="닥터 필굿" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGDrFeelgood.png" alt="">
		<span class="slot_ttl">닥터 필굿</span>
</li>
<li class="open_slot_game" data-id="SGVikingsPlunder" data-name="바이킹스 플런더" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGVikingsPlunder.png" alt="">
		<span class="slot_ttl">바이킹스 플런더</span>
</li>
<li class="open_slot_game" data-id="SGDoubleODollars" data-name="더블 O 달러스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGDoubleODollars.png" alt="">
		<span class="slot_ttl">더블 O 달러스</span>
</li>
<li class="open_slot_game" data-id="SGLittleGreenMoney" data-name="리틀 그린 머니" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGLittleGreenMoney.png" alt="">
		<span class="slot_ttl">리틀 그린 머니</span>
</li>
<li class="open_slot_game" data-id="SGMonsterMashCash" data-name="몬스터 매쉬 캐쉬" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGMonsterMashCash.png" alt="">
		<span class="slot_ttl">몬스터 매쉬 캐쉬</span>
</li>
<li class="open_slot_game" data-id="SGBlackbeardsBounty" data-name="블랙버즈 바운티" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGBlackbeardsBounty.png" alt="">
		<span class="slot_ttl">블랙버즈 바운티</span>
</li>
<li class="open_slot_game" data-id="SGZeus" data-name="제우스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGZeus.png" alt="">
		<span class="slot_ttl">제우스</span>
</li>
<li class="open_slot_game" data-id="SGPoolShark" data-name="풀 샤크" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGPoolShark.png" alt="">
		<span class="slot_ttl">풀 샤크</span>
</li>
<li class="open_slot_game" data-id="SGWeirdScience" data-name="위어드 사이언스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGWeirdScience.png" alt="">
		<span class="slot_ttl">위어드 사이언스</span>
</li>
<li class="open_slot_game" data-id="SGSOS" data-name="에스 오 에스!" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGSOS.png" alt="">
		<span class="slot_ttl">에스 오 에스!</span>
</li>
<li class="open_slot_game" data-id="SGBarnstormerBucks" data-name="반스토머스 벅스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGBarnstormerBucks.png" alt="">
		<span class="slot_ttl">반스토머스 벅스</span>
</li>
<li class="open_slot_game" data-id="SGSuperStrike" data-name="슈퍼 스트라이크" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGSuperStrike.png" alt="">
		<span class="slot_ttl">슈퍼 스트라이크</span>
</li>
<li class="open_slot_game" data-id="SGJungleRumble" data-name="정글 럼블" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGJungleRumble.png" alt="">
		<span class="slot_ttl">정글 럼블</span>
</li>
<li class="open_slot_game" data-id="SGSpaceFortune" data-name="스페이스 포츈" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGSpaceFortune.png" alt="">
		<span class="slot_ttl">스페이스 포츈</span>
</li>
<li class="open_slot_game" data-id="SGPamperMe" data-name="팸퍼 미" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGPamperMe.png" alt="">
		<span class="slot_ttl">팸퍼 미</span>
</li>
<li class="open_slot_game" data-id="SGEgyptianDreams" data-name="이집션 드림스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGEgyptianDreams.png" alt="">
		<span class="slot_ttl">이집션 드림스</span>
</li>
<li class="open_slot_game" data-id="SGMysticFortune" data-name="미스틱 포츈" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGMysticFortune.png" alt="">
		<span class="slot_ttl">미스틱 포츈</span>
</li>
<li class="open_slot_game" data-id="SGArcticWonders" data-name="아크틱 원더스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGArcticWonders.png" alt="">
		<span class="slot_ttl">아크틱 원더스</span>
</li>
<li class="open_slot_game" data-id="SGTowerOfPizza" data-name="파워 오브 피자" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGTowerOfPizza.png" alt="">
		<span class="slot_ttl">파워 오브 피자</span>
</li>
<li class="open_slot_game" data-id="SGMummyMoney" data-name="머미 머니" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGMummyMoney.png" alt="">
		<span class="slot_ttl">머미 머니</span>
</li>
<li class="open_slot_game" data-id="SGBikiniIsland" data-name="비키니 아일랜드" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGBikiniIsland.png" alt="">
		<span class="slot_ttl">비키니 아일랜드</span>
</li>
<li class="open_slot_game" data-id="SGQueenOfQueens1024" data-name="퀸 오브 퀸스 II" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGQueenOfQueens1024.png" alt="">
		<span class="slot_ttl">퀸 오브 퀸스 II</span>
</li>
<li class="open_slot_game" data-id="SGDragonsRealm" data-name="드래곤스 림" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGDragonsRealm.png" alt="">
		<span class="slot_ttl">드래곤스 림</span>
</li>
<li class="open_slot_game" data-id="SGAllForOne" data-name="올포원" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGAllForOne.png" alt="">
		<span class="slot_ttl">올포원</span>
</li>
<li class="open_slot_game" data-id="SGFlyingHigh" data-name="플라잉 하이" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGFlyingHigh.png" alt="">
		<span class="slot_ttl">플라잉 하이</span>
</li>
<li class="open_slot_game" data-id="SGMrBling" data-name="미스터 블링" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGMrBling.png" alt="">
		<span class="slot_ttl">미스터 블링</span>
</li>
<li class="open_slot_game" data-id="SGPiratesPlunder" data-name="피어레이츠 플런더" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGPiratesPlunder.png" alt="">
		<span class="slot_ttl">피어레이츠 플런더</span>
</li>
<li class="open_slot_game" data-id="SGPuckerUpPrince" data-name="퍼커업 프린스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGPuckerUpPrince.png" alt="">
		<span class="slot_ttl">퍼커업 프린스</span>
</li>
<li class="open_slot_game" data-id="SGSirBlingalot" data-name="써 블링갈롯" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGSirBlingalot.png" alt="">
		<span class="slot_ttl">써 블링갈롯</span>
</li>
<li class="open_slot_game" data-id="SGCashReef" data-name="캐쉬 리프" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGCashReef.png" alt="">
		<span class="slot_ttl">캐쉬 리프</span>
</li>
<li class="open_slot_game" data-id="SGQueenOfQueens243" data-name="퀸 오브 퀸스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGQueenOfQueens243.png" alt="">
		<span class="slot_ttl">퀸 오브 퀸스</span>
</li>
<li class="open_slot_game" data-id="SGAzlandsGold" data-name="아즈트란스 골드" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGAzlandsGold.png" alt="">
		<span class="slot_ttl">아즈트란스 골드</span>
</li>
<li class="open_slot_game" data-id="SGShogunsLand" data-name="쇼군스 랜드" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGShogunsLand.png" alt="">
		<span class="slot_ttl">쇼군스 랜드</span>
</li>
<li class="open_slot_game" data-id="SGRideEmCowboy" data-name="라이뎀 카우보이" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGRideEmCowboy.png" alt="">
		<span class="slot_ttl">라이뎀 카우보이</span>
</li>
<li class="open_slot_game" data-id="SGGrapeEscape" data-name="더 그레이트 이스케이프" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGGrapeEscape.png" alt="">
		<span class="slot_ttl">더 그레이트 이스케이프</span>
</li>
<li class="open_slot_game" data-id="SGGoldenUnicorn" data-name="골든 유니콘" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGGoldenUnicorn.png" alt="">
		<span class="slot_ttl">골든 유니콘</span>
</li>
<li class="open_slot_game" data-id="SGFrontierFortunes" data-name="프론티어 포츈스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGFrontierFortunes.png" alt="">
		<span class="slot_ttl">프론티어 포츈스</span>
</li>
<li class="open_slot_game" data-id="SGIndianCashCatcher" data-name="인디안 캐시 캐쳐" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGIndianCashCatcher.png" alt="">
		<span class="slot_ttl">인디안 캐시 캐쳐</span>
</li>
<li class="open_slot_game" data-id="SGTheBigDeal" data-name="더 빅 딜" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGTheBigDeal.png" alt="">
		<span class="slot_ttl">더 빅 딜</span>
</li>
<li class="open_slot_game" data-id="SGCashosaurus" data-name="캐쉬오사우러스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGCashosaurus.png" alt="">
		<span class="slot_ttl">캐쉬오사우러스</span>
</li>
<li class="open_slot_game" data-id="SGDiscoFunk" data-name="디스코 펑크" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGDiscoFunk.png" alt="">
		<span class="slot_ttl">디스코 펑크</span>
</li>
<li class="open_slot_game" data-id="SGHauntedHouse" data-name="하운티드 하우스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGHauntedHouse.png" alt="">
		<span class="slot_ttl">하운티드 하우스</span>
</li>
<li class="open_slot_game" data-id="SGRodeoDrive" data-name="로데오 드라이브" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGRodeoDrive.png" alt="">
		<span class="slot_ttl">로데오 드라이브</span>
</li>
<li class="open_slot_game" data-id="SGSkysTheLimit" data-name="스카이스 더 리밋" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGSkysTheLimit.png" alt="">
		<span class="slot_ttl">스카이스 더 리밋</span>
</li>
<li class="open_slot_game" data-id="SGRainbowmania" data-name="레인보우매니아" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGRainbowmania.png" alt="">
		<span class="slot_ttl">레인보우매니아</span>
</li>
<li class="open_slot_game" data-id="SGLegendaryBeasts" data-name="레전더리 비스츠" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGLegendaryBeasts.png" alt="">
		<span class="slot_ttl">레전더리 비스츠</span>
</li>
<li class="open_slot_game" data-id="SGNaughtyWukong" data-name="너어티 우콩" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGNaughtyWukong.png" alt="">
		<span class="slot_ttl">너어티 우콩</span>
</li>
<li class="open_slot_game" data-id="SGTheBigDealDeluxe" data-name="빅딜 디럭스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGTheBigDealDeluxe.png" alt="">
		<span class="slot_ttl">빅딜 디럭스</span>
</li>
<li class="open_slot_game" data-id="SGCrystopia" data-name="크리스토피아" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGCrystopia.png" alt="">
		<span class="slot_ttl">크리스토피아</span>
</li>
<li class="open_slot_game" data-id="SGSirensSpell" data-name="사이렌스 스펠" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGSirensSpell.png" alt="">
		<span class="slot_ttl">사이렌스 스펠</span>
</li>
<li class="open_slot_game" data-id="SGTootyFruityFruits" data-name="투티 프루티 프루츠" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGTootyFruityFruits.png" alt="">
		<span class="slot_ttl">투티 프루티 프루츠</span>
</li>
<li class="open_slot_game" data-id="SGLegendOfNezha" data-name="레전드 오브 라자" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGLegendOfNezha.png" alt="">
		<span class="slot_ttl">레전드 오브 라자</span>
</li>
<li class="open_slot_game" data-id="SGWitchesTome" data-name="위치스 톰" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGWitchesTome.png" alt="">
		<span class="slot_ttl">위치스 톰</span>
</li>
<li class="open_slot_game" data-id="SGAtomicKittens" data-name="아토믹 키튼스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGAtomicKittens.png" alt="">
		<span class="slot_ttl">아토믹 키튼스</span>
</li>
<li class="open_slot_game" data-id="SGBikiniIslandDeluxe" data-name="비키니 아일랜드 디럭스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGBikiniIslandDeluxe.png" alt="">
		<span class="slot_ttl">비키니 아일랜드 디럭스</span>
</li>
<li class="open_slot_game" data-id="SGSlimeParty" data-name="스마일 파티" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGSlimeParty.png" alt="">
		<span class="slot_ttl">스마일 파티</span>
</li>
<li class="open_slot_game" data-id="SGMeowJanken" data-name="미유 잰켄" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGMeowJanken.png" alt="">
		<span class="slot_ttl">미유 잰켄</span>
</li>
<li class="open_slot_game" data-id="SGFruityHalloween" data-name="프룻티 핼러윈" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGFruityHalloween.png" alt="">
		<span class="slot_ttl">프룻티 핼러윈</span>
</li>
<li class="open_slot_game" data-id="SGZeusDeluxe" data-name="제우스 디럭스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGZeusDeluxe.png" alt="">
		<span class="slot_ttl">제우스 디럭스</span>
</li>
<li class="open_slot_game" data-id="SGSantasInn" data-name="산타스 인" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGSantasInn.png" alt="">
		<span class="slot_ttl">산타스 인</span>
</li>
<li class="open_slot_game" data-id="SGFruityMayan" data-name="프룻티 마얀" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGFruityMayan.png" alt="">
		<span class="slot_ttl">프룻티 마얀</span>
</li>
<li class="open_slot_game" data-id="SGValentineMonchy" data-name="발렌타인 몽키" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGValentineMonchy.png" alt="">
		<span class="slot_ttl">발렌타인 몽키</span>
</li>
<li class="open_slot_game" data-id="SGWildFlow" data-name="와일드 플로우" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGWildFlow.png" alt="">
		<span class="slot_ttl">와일드 플로우</span>
</li>
<li class="open_slot_game" data-id="SGMooMooCow" data-name="무무카우" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGMooMooCow.png" alt="">
		<span class="slot_ttl">무무카우</span>
</li>
<li class="open_slot_game" data-id="SGGoldenTajMahal" data-name="골든 타지마할" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGGoldenTajMahal.png" alt="">
		<span class="slot_ttl">골든 타지마할</span>
</li>
<li class="open_slot_game" data-id="SGArcticHunt" data-name="아크틱 헌트" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGArcticHunt.png" alt="">
		<span class="slot_ttl">아크틱 헌트</span>
</li>
<li class="open_slot_game" data-id="SGTotemWarrior" data-name="토템 워리어" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGTotemWarrior.png" alt="">
		<span class="slot_ttl">토템 워리어</span>
</li>
<li class="open_slot_game" data-id="SGWaltzBeauty" data-name="왈츠 뷰티" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGWaltzBeauty.png" alt="">
		<span class="slot_ttl">왈츠 뷰티</span>
</li>
<li class="open_slot_game" data-id="SGKoiKoiTreasure" data-name="코이 코이 트레저" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGKoiKoiTreasure.png" alt="">
		<span class="slot_ttl">코이 코이 트레저</span>
</li>
<li class="open_slot_game" data-id="SGHauntedHarbor" data-name="하운티드 하버" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGHauntedHarbor.png" alt="">
		<span class="slot_ttl">하운티드 하버</span>
</li>
<li class="open_slot_game" data-id="SGGloryOfRome" data-name="글로리 오브 로마" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGGloryOfRome.png" alt="">
		<span class="slot_ttl">글로리 오브 로마</span>
</li>
<li class="open_slot_game" data-id="SGJump2" data-name="점프! 2" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGJump2.png" alt="">
		<span class="slot_ttl">점프! 2</span>
</li>
<li class="open_slot_game" data-id="SGDragonTigerGate" data-name="드래곤 타이거 게이트" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGDragonTigerGate.png" alt="">
		<span class="slot_ttl">드래곤 타이거 게이트</span>
</li>
<li class="open_slot_game" data-id="SGSojuBomb" data-name="소주 밤" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGSojuBomb.png" alt="">
		<span class="slot_ttl">소주 밤</span>
</li>
<li class="open_slot_game" data-id="SGGoldenUnicornDeluxe" data-name="골든 유니콘 Deluxe" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGGoldenUnicornDeluxe.png" alt="">
		<span class="slot_ttl">골든 유니콘 Deluxe</span>
</li>
<li class="open_slot_game" data-id="SGSpaceGoonz" data-name="스페이스 군즈" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGSpaceGoonz.png" alt="">
		<span class="slot_ttl">스페이스 군즈</span>
</li>
<li class="open_slot_game" data-id="SGLaughingBuddha" data-name="래핑 부다" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGLaughingBuddha.png" alt="">
		<span class="slot_ttl">래핑 부다</span>
</li>
<li class="open_slot_game" data-id="SGTaikoBeats" data-name="타이코 비츠" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGTaikoBeats.png" alt="">
		<span class="slot_ttl">타이코 비츠</span>
</li>
<li class="open_slot_game" data-id="SGTukTukThailand" data-name="툭 툭 타이랜드" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGTukTukThailand.png" alt="">
		<span class="slot_ttl">툭 툭 타이랜드</span>
</li>
<li class="open_slot_game" data-id="SGLuckyDurian" data-name="럭키 두리안" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGLuckyDurian.png" alt="">
		<span class="slot_ttl">럭키 두리안</span>
</li>
<li class="open_slot_game" data-id="SGLanternLuck" data-name="랜턴 럭" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGLanternLuck.png" alt="">
		<span class="slot_ttl">랜턴 럭</span>
</li>
<li class="open_slot_game" data-id="SGDiscoBeats" data-name="디스코 비츠" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGDiscoBeats.png" alt="">
		<span class="slot_ttl">디스코 비츠</span>
</li>
<li class="open_slot_game" data-id="SGMightyMedusa" data-name="마이티 메두사" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGMightyMedusa.png" alt="">
		<span class="slot_ttl">마이티 메두사</span>
</li>
<li class="open_slot_game" data-id="SGBombRunner" data-name="밤 러너" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGBombRunner.png" alt="">
		<span class="slot_ttl">밤 러너</span>
</li>
<li class="open_slot_game" data-id="SGMysticFortuneDeluxe" data-name="미스틱 포츈 Deluxe" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGMysticFortuneDeluxe.png" alt="">
		<span class="slot_ttl">미스틱 포츈 Deluxe</span>
</li>
<li class="open_slot_game" data-id="SGFly" data-name="플라이!" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGFly.png" alt="">
		<span class="slot_ttl">플라이!</span>
</li>
<li class="open_slot_game" data-id="SGNineTails" data-name="나인 테일스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGNineTails.png" alt="">
		<span class="slot_ttl">나인 테일스</span>
</li>
<li class="open_slot_game" data-id="SGProst" data-name="프로스트!" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGProst.png" alt="">
		<span class="slot_ttl">프로스트!</span>
</li>
<li class="open_slot_game" data-id="SGNewYearsBash" data-name="뉴 이어스 배쉬" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGNewYearsBash.png" alt="">
		<span class="slot_ttl">뉴 이어스 배쉬</span>
</li>
<li class="open_slot_game" data-id="SGBeforeTimeRunsOut" data-name="비포 타임 런스 아웃" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGBeforeTimeRunsOut.png" alt="">
		<span class="slot_ttl">비포 타임 런스 아웃</span>
</li>
<li class="open_slot_game" data-id="SGCandyTower" data-name="캔디 타워" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGCandyTower.png" alt="">
		<span class="slot_ttl">캔디 타워</span>
</li>
<li class="open_slot_game" data-id="SGReturnToTheFeature" data-name="리턴 투더 피쳐" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGReturnToTheFeature.png" alt="">
		<span class="slot_ttl">리턴 투더 피쳐</span>
</li>
<li class="open_slot_game" data-id="SGCalaverasExplosivas" data-name="칼라베라스 익스플로시바스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGCalaverasExplosivas.png" alt="">
		<span class="slot_ttl">칼라베라스 익스플로시바스</span>
</li>
<li class="open_slot_game" data-id="SGMarvelousFurlongs" data-name="마블러스 퍼롱스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGMarvelousFurlongs.png" alt="">
		<span class="slot_ttl">마블러스 퍼롱스</span>
</li>
<li class="open_slot_game" data-id="SGJellyfishFlowUltra" data-name="젤리피쉬 플로우 Ultra" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGJellyfishFlowUltra.png" alt="">
		<span class="slot_ttl">젤리피쉬 플로우 Ultra</span>
</li>
<li class="open_slot_game" data-id="SGTabernaDeLosMuertos" data-name="타베르나 데로스 무에르토스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGTabernaDeLosMuertos.png" alt="">
		<span class="slot_ttl">타베르나 데로스 무에르토스</span>
</li>
<li class="open_slot_game" data-id="SGTabernaDeLosMuertosUltra" data-name="타베르나 데로스 무에르토스 Ultra" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGTabernaDeLosMuertosUltra.png" alt="">
		<span class="slot_ttl">타베르나 데로스 무에르토스 Ultra</span>
</li>
<li class="open_slot_game" data-id="SGTotemTowers" data-name="토템 타워스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGTotemTowers.png" alt="">
		<span class="slot_ttl">토템 타워스</span>
</li>
<li class="open_slot_game" data-id="SGChristmasGiftRush" data-name="크리스마스 기프트 러쉬" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGChristmasGiftRush.png" alt="">
		<span class="slot_ttl">크리스마스 기프트 러쉬</span>
</li>
<li class="open_slot_game" data-id="SGOrbsOfAtlantis" data-name="오릅스 오브 아틀란티스" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGOrbsOfAtlantis.png" alt="">
		<span class="slot_ttl">오릅스 오브 아틀란티스</span>
</li>
<li class="open_slot_game" data-id="SGTechnoTumble" data-name="테크노 텀블" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGTechnoTumble.png" alt="">
		<span class="slot_ttl">테크노 텀블</span>
</li>
<li class="open_slot_game" data-id="SGWealthInn" data-name="웰스 인" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGWealthInn.png" alt="">
		<span class="slot_ttl">웰스 인</span>
</li>
<li class="open_slot_game" data-id="SGHappyApe" data-name="해피 애이프" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGHappyApe.png" alt="">
		<span class="slot_ttl">해피 애이프</span>
</li>
<li class="open_slot_game" data-id="SGJellyfishFlow" data-name="젤리피쉬 플로우" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGJellyfishFlow.png" alt="">
		<span class="slot_ttl">젤리피쉬 플로우</span>
</li>
<li class="open_slot_game" data-id="SGScopa" data-name="스코파" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGScopa.png" alt="">
		<span class="slot_ttl">스코파</span>
</li>
<li class="open_slot_game" data-id="SGNaughtySanta" data-name="너티 산타" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGNaughtySanta.png" alt="">
		<span class="slot_ttl">너티 산타</span>
</li>
<li class="open_slot_game" data-id="SGFaCaiShenDeluxe" data-name="파 카이 센 Deluxe" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGFaCaiShenDeluxe.png" alt="">
		<span class="slot_ttl">파 카이 센 Deluxe</span>
</li>
<li class="open_slot_game" data-id="SGHeySushi" data-name="헤이 스시" data-tp="25">
		<img src="https://vedaimg.enjoycx.com/img/game/habanero/SGHeySushi.png" alt="">
		<span class="slot_ttl">헤이 스시</span>
</li>
</ul>
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
import '@/static/js/jquery.slot.js';
import '@/static/js/slot.js';
import { initBaseFunctions } from '@/static/js/moneybase.js';
import loadLiveChat from '@/assets/livechat.js';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'slotPage',

  data() {
    return {
      isChargeActive: true,
      isWithdrawalActive: false,
      smCMoney: 0,
      smWMoney: 0,
      amounts: [1000, 5000, 10000, 30000, 50000, 100000, 500000, 'MAX'], 
      amounts2: [1000, 5000, 10000, 30000, 50000, 100000, 500000, '전액출금'], 
    };
  },
  setup() {
    const isMenuOpened = ref(false);
    const isLoginVisible = ref(false);
    const isLoginVisible2 = ref(true);
    const isExpanded = ref(false);
    const isJoinVisible123 = ref(false);
    const currentGameName = ref('');  // 현재 게임 이름을 저장할 ref

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

    const showslot = (gameName) => {
      currentGameName.value = gameName;  // 클릭한 게임 이름으로 변경
      isJoinVisible123.value = true;      // join visibility 설정
    };

    const hideslot = () => {
      isJoinVisible123.value = false;
    };
    
    return {
      isMenuOpened,
      toggleMenu,
      isLoginVisible,
      isLoginVisible2,
      isJoinVisible123,
      currentGameName, // 추가된 부분
      showLogin,
      hideLogin,
      showLogin2,
      hideLogin2,
      isExpanded,
      toggleHeight,
      showslot,
      hideslot,
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
    initBaseFunctions();
  },
  methods: {
    selectMoney(amt) {      
      const smCMoney = this.smCMoney; // smWMoney 값

      // smWMoney가 0일 때 경고
      if (smCMoney === 0) {
        alert('보유금이 부족합니다.');        
        return false;
      }
    },    
    selectMoney2(amt2) {
      const smWMoney = this.smWMoney; // smWMoney 값

      // smWMoney가 0일 때 경고
      if (smWMoney === 0) {
        alert('카지노머니가 부족합니다.');
        return false;
      }
    },    
    toggleCharge() {
      this.isChargeActive = true;
      this.isWithdrawalActive = false;
    },
    toggleWithdrawal() {
      this.isChargeActive = false;
      this.isWithdrawalActive = true;
    },
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
<style>
    .slot_money_box { height:180px !important; }
	</style>