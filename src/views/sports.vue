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
		 해외형 스포츠
	</div>
	<div class="page_tab page_tab2 only_mobile">
		<a href="/sports" class="on">
		해외형 </a>
		<a href="/korean">
		국내형 </a>
		<a href="/inplay">
		LIVE </a>
		<a href="/special">
		스페셜 </a>
		<!--    <a href="/esports/es">-->
		<!--        E스포츠-->
		<!--    </a>-->
	</div>
	<div class="loading_box dspn">
		<div class="loading-container">
			<div class="loading">
			</div>
			<div id="loading-text">
				loading
			</div>
		</div>
	</div>
	<div class="sport_out_box" onselectstart="return false">
		<div class="sport_list_box">
			<div class="sports_tab_out_box slider">
				<div class="sport_tab_box">
					<span class="btn_sports_tab btn_sports_tab_on" data-cate="all">
					<strong>558</strong>
					<span class="sport_name">전체</span>
					</span>
					<span class="btn_sports_tab" data-cate="soccer">
					<strong>144</strong>
					<span class="sport_name">축구</span>
					</span>
					<span class="btn_sports_tab" data-cate="basket">
					<strong>34</strong>
					<span class="sport_name">농구</span>
					</span>
					<span class="btn_sports_tab" data-cate="baseball">
					<strong>12</strong>
					<span class="sport_name">야구</span>
					</span>
					<span class="btn_sports_tab" data-cate="volley">
					<strong>18</strong>
					<span class="sport_name">배구</span>
					</span>
					<span class="btn_sports_tab" data-cate="hockey">
					<strong>66</strong>
					<span class="sport_name">아이스하키</span>
					</span>
					<span class="btn_sports_tab" data-cate="tennis">
					<strong>94</strong>
					<span class="sport_name">테니스</span>
					</span>
					<span class="btn_sports_tab" data-cate="handball">
					<strong>11</strong>
					<span class="sport_name">핸드볼</span>
					</span>
					<span class="btn_sports_tab" data-cate="pp">
					<strong>156</strong>
					<span class="sport_name">탁구</span>
					</span>
					<span class="btn_sports_tab" data-cate="mma">
					<strong>5</strong>
					<span class="sport_name">MMA</span>
					</span>
					<span class="btn_sports_tab" data-cate="boxing">
					<strong>0</strong>
					<span class="sport_name">권투</span>
					</span>
					<span class="btn_sports_tab" data-cate="dart">
					<strong>15</strong>
					<span class="sport_name">다트</span>
					</span>
					<!--				<span class="btn_sports_tab" data-cate="egame">-->
					<!--                    <strong>0</strong>-->
					<!--                    <span class="sport_name">E스포츠</span>-->
					<!--                </span>-->
				</div>
			</div>			
			<div class="sch_sp_box only_mobile sch_in_game">
				<form action="/sports" class="sp_sch2">
					<input type="text" name="sch_key" class="sch_key" placeholder="스포츠 해외식 검색 (국가/리그명/팀명)">
					<input type="submit" class="dspn">
					<button class="sch_sp_button"><i class="fas fa-search" aria-hidden="true"></i></button>
				</form>
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
				<!--div class="sp_notice_box">
				<div class="icon_notice">※</div>
				<div class="text_notice">
					동일경기 크로스 배팅은 농구와 야구 추가배팅옵션에서 제공합니다.<br>
					스포츠 배팅규정은 프리매치 규정확인 을 열람하시면 확인 가능합니다.
				</div>
			</div-->
				<div class="sp_order_box">
					<div>
						<span class="btn_order btn_order_on" data-od="favor">인기순 정렬</span>
						<span class="btn_order" data-od="1">시간대 정렬</span>
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="https://lg-2020.com/static/img/flag/USA.png"> 미국 &gt; <span style="color:#fff">NHL 프리시즌</span>
					</div>
					<div class="fr spoimg">
						<img src="https://lg-2020.com/static/img/sports/4.png" alt=""><span class="spobar">|</span> 1 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 11:00:00
					</div>
					<div class="sports_markets " data-id="pre51253649" data-spo="아이스 하키" data-lg="NHL 프리시즌" data-flag="37" data-home="애너하임 덕스" data-away="로스앤젤레스 킹스">
						<span class="open_markets" data-id="pre51253649">+22 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승무패
						</div>
						<div class="team_home team_3 sel_odds " data-m="승무패" data-bid="p5125364911" data-gid="pre51253649" data-ratio="3.31" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3675.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">애너하임 덕스</span></span>
							<div class="sp_icon_box">
								<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">3.31</span>
							</div>
						</div>
						<div class="team_draw team_3 sel_odds " data-m="승무패" data-bid="p5125364912" data-gid="pre51253649" data-ratio="4.22" data-stat="1">
							<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">4.22</span>
						</div>
						<div class="team_away team_3 sel_odds " data-m="승무패" data-bid="p5125364913" data-gid="pre51253649" data-ratio="1.65" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.65</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">로스앤젤레스 킹스 </span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3688.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p51253649160D51714" data-gid="pre51253649" data-ratio="1.89">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3675.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">애너하임 덕스</span><span class="odds_stan dspn">0.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.89</span>
							</div>
						</div>
						<div class="team_stan">
							0.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p51253649160D51715" data-gid="pre51253649" data-ratio="1.62">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.62</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">로스앤젤레스 킹스</span><span class="odds_stan dspn">-0.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3688.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p51253649185D512" data-gid="pre51253649" data-ratio="1.59">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3675.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">5.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.59</span>
							</div>
						</div>
						<div class="team_stan">
							5.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p51253649185D513" data-gid="pre51253649" data-ratio="1.92">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.92</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">5.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3688.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="https://lg-2020.com/static/img/flag/KOR.png"> 대한민국 &gt; <span style="color:#fff">KBO</span>
					</div>
					<div class="fr spoimg">
						<img src="https://lg-2020.com/static/img/sports/3.png" alt=""><span class="spobar">|</span> 2 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 17:00:00
					</div>
					<div class="sports_markets " data-id="pre54141851" data-spo="야구" data-lg="KBO" data-flag="384" data-home="KT" data-away="SSG 랜더스">
						<span class="open_markets" data-id="pre54141851">+14 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p541418512514" data-gid="pre54141851" data-ratio="1.75" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/249967.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">KT</span></span>
							<div class="sp_icon_box">
								<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">1.75</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p541418512515" data-gid="pre54141851" data-ratio="2.02" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.02</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">SSG 랜더스</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/249979.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p541418512589D512" data-gid="pre54141851" data-ratio="1.82">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/249967.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">9.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.82</span>
							</div>
						</div>
						<div class="team_stan">
							9.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p541418512589D513" data-gid="pre54141851" data-ratio="1.95">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.95</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">9.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/249979.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 17:00:00
					</div>
					<div class="sports_markets " data-id="pre53952687" data-spo="야구" data-lg="KBO" data-flag="384" data-home="NC 다이노스" data-away=" 롯데 자이언츠">
						<span class="open_markets" data-id="pre53952687">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p539526872514" data-gid="pre53952687" data-ratio="2.21" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/249973.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">NC 다이노스</span></span>
							<div class="sp_icon_box">
								<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.21</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p539526872515" data-gid="pre53952687" data-ratio="1.63" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.63</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name"> 롯데 자이언츠</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/249971.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="https://lg-2020.com/static/img/flag/JPN.png"> 일본 &gt; <span style="color:#fff">NPB</span>
					</div>
					<div class="fr spoimg">
						<img src="https://lg-2020.com/static/img/sports/3.png" alt=""><span class="spobar">|</span> 4 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 18:00:00
					</div>
					<div class="sports_markets " data-id="pre47095187" data-spo="야구" data-lg="NPB" data-flag="211" data-home=" 세이부 " data-away="니혼햄">
						<span class="open_markets" data-id="pre47095187">+12 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p470951872514" data-gid="pre47095187" data-ratio="2.01" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67120.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name"> 세이부 </span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">2.01</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p470951872515" data-gid="pre47095187" data-ratio="1.76" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.76</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">니혼햄</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67114.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p470951872585D512" data-gid="pre47095187" data-ratio="2.06">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67120.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">5.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.06</span>
							</div>
						</div>
						<div class="team_stan">
							5.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p470951872585D513" data-gid="pre47095187" data-ratio="1.73">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.73</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">5.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67114.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 18:00:00
					</div>
					<div class="sports_markets " data-id="pre47095185" data-spo="야구" data-lg="NPB" data-flag="211" data-home=" 소프트뱅크" data-away="오릭스 ">
						<span class="open_markets" data-id="pre47095185">+13 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p470951852514" data-gid="pre47095185" data-ratio="1.83" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67122.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name"> 소프트뱅크</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.83</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p470951852515" data-gid="pre47095185" data-ratio="1.93" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.93</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">오릭스 </span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67116.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p470951852586D512" data-gid="pre47095185" data-ratio="1.89">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67122.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">6.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.89</span>
							</div>
						</div>
						<div class="team_stan">
							6.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p470951852586D513" data-gid="pre47095185" data-ratio="1.86">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.86</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">6.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67116.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 18:00:00
					</div>
					<div class="sports_markets " data-id="pre47095189" data-spo="야구" data-lg="NPB" data-flag="211" data-home="라쿠텐" data-away="치바 롯데 ">
						<span class="open_markets" data-id="pre47095189">+13 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p470951892514" data-gid="pre47095189" data-ratio="2.41" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67118.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">라쿠텐</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">2.41</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p470951892515" data-gid="pre47095189" data-ratio="1.54" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.54</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">치바 롯데 </span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67112.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p470951892561D51714" data-gid="pre47095189" data-ratio="1.71">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67118.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">라쿠텐</span><span class="odds_stan dspn">1.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.71</span>
							</div>
						</div>
						<div class="team_stan">
							1.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p470951892561D51715" data-gid="pre47095189" data-ratio="2.09">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.09</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">치바 롯데 </span><span class="odds_stan dspn">-1.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67112.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p470951892585D512" data-gid="pre47095189" data-ratio="1.80">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67118.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">5.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.80</span>
							</div>
						</div>
						<div class="team_stan">
							5.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p470951892585D513" data-gid="pre47095189" data-ratio="1.96">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.96</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">5.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67112.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 18:00:00
					</div>
					<div class="sports_markets " data-id="pre54132673" data-spo="야구" data-lg="NPB" data-flag="211" data-home="요코하마 " data-away="히로시마 ">
						<span class="open_markets" data-id="pre54132673">+13 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p541326732514" data-gid="pre54132673" data-ratio="1.53" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67110.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">요코하마 </span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.53</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p541326732515" data-gid="pre54132673" data-ratio="2.43" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.43</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">히로시마 </span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67106.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p54132673256M1D51714" data-gid="pre54132673" data-ratio="2.13">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67110.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">요코하마 </span><span class="odds_stan dspn">-1.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">2.13</span>
							</div>
						</div>
						<div class="team_stan">
							-1.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p54132673256M1D51715" data-gid="pre54132673" data-ratio="1.68">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.68</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">히로시마 </span><span class="odds_stan dspn">1.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67106.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p541326732586D512" data-gid="pre54132673" data-ratio="1.73">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67110.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">6.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.73</span>
							</div>
						</div>
						<div class="team_stan">
							6.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p541326732586D513" data-gid="pre54132673" data-ratio="2.07">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.07</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">6.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/67106.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/RUS.png"> 러시아 &gt; <span style="color:#fff">수퍼리그</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/23.png" alt=""><span class="spobar">|</span> 2 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 23:00:00
					</div>
					<div class="sports_markets " data-id="pre52125325" data-spo="배구" data-lg="수퍼리그" data-flag="262" data-home="가스프롬-우그라 수르구트" data-away="우랄 UFA">
						<span class="open_markets" data-id="pre52125325">+18 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p521253251864" data-gid="pre52125325" data-ratio="2.68" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45220.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">가스프롬-우그라 수르구트</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">2.68</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p521253251865" data-gid="pre52125325" data-ratio="1.32" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.32</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">우랄 UFA</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45224.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p521253252377D51714" data-gid="pre52125325" data-ratio="1.83">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45220.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">가스프롬-우그라 수르구트</span><span class="odds_stan dspn">7.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.83</span>
							</div>
						</div>
						<div class="team_stan">
							7.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p521253252377D51715" data-gid="pre52125325" data-ratio="1.79">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.79</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">우랄 UFA</span><span class="odds_stan dspn">-7.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45224.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p52125325238181D512" data-gid="pre52125325" data-ratio="1.77">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45220.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">181.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.77</span>
							</div>
						</div>
						<div class="team_stan">
							181.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p52125325238181D513" data-gid="pre52125325" data-ratio="1.85">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.85</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">181.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45224.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 23:00:00
					</div>
					<div class="sports_markets " data-id="pre52125327" data-spo="배구" data-lg="수퍼리그" data-flag="262" data-home="네프트야닉 오렌부르크" data-away="로코모티브 노보시비르스크">
						<span class="open_markets" data-id="pre52125327">+12 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p521253271864" data-gid="pre52125327" data-ratio="7.99" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/150904.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">네프트야닉 오렌부르크</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">7.99</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p521253271865" data-gid="pre52125327" data-ratio="1.00" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.00</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">로코모티브 노보시비르스크</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45223.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p5212532723715D51714" data-gid="pre52125327" data-ratio="1.80">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/150904.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">네프트야닉 오렌부르크</span><span class="odds_stan dspn">15.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.80</span>
							</div>
						</div>
						<div class="team_stan">
							15.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p5212532723715D51715" data-gid="pre52125327" data-ratio="1.81">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.81</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">로코모티브 노보시비르스크</span><span class="odds_stan dspn">-15.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45223.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p52125327238142D512" data-gid="pre52125327" data-ratio="1.81">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/150904.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">142.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.81</span>
							</div>
						</div>
						<div class="team_stan">
							142.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p52125327238142D513" data-gid="pre52125327" data-ratio="1.81">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.81</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">142.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45223.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/RUS.png"> 러시아 &gt; <span style="color:#fff">VHL</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/4.png" alt=""><span class="spobar">|</span> 2 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 00:30:00
					</div>
					<div class="sports_markets " data-id="pre51576283" data-spo="아이스 하키" data-lg="VHL" data-flag="101" data-home="HK 토르페도 고르키" data-away="히미크 보스크레센스크">
						<span class="open_markets" data-id="pre51576283">+19 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승무패
						</div>
						<div class="team_home team_3 sel_odds " data-m="승무패" data-bid="p5157628311" data-gid="pre51576283" data-ratio="3.69" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/598562.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">HK 토르페도 고르키</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">3.69</span>
							</div>
						</div>
						<div class="team_draw team_3 sel_odds " data-m="승무패" data-bid="p5157628312" data-gid="pre51576283" data-ratio="4.12" data-stat="1">
							<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">4.12</span>
						</div>
						<div class="team_away team_3 sel_odds " data-m="승무패" data-bid="p5157628313" data-gid="pre51576283" data-ratio="1.57" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.57</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">히미크 보스크레센스크 </span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/25433.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p51576283160D51714" data-gid="pre51576283" data-ratio="1.98">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/598562.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">HK 토르페도 고르키</span><span class="odds_stan dspn">0.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.98</span>
							</div>
						</div>
						<div class="team_stan">
							0.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p51576283160D51715" data-gid="pre51576283" data-ratio="1.55">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.55</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">히미크 보스크레센스크</span><span class="odds_stan dspn">-0.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/25433.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p51576283185D512" data-gid="pre51576283" data-ratio="1.92">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/598562.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">5.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.92</span>
							</div>
						</div>
						<div class="team_stan">
							5.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p51576283185D513" data-gid="pre51576283" data-ratio="1.60">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.60</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">5.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/25433.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 00:30:00
					</div>
					<div class="sports_markets " data-id="pre51576279" data-spo="아이스 하키" data-lg="VHL" data-flag="101" data-home="네프트자닉 알메티옙스크" data-away="루빈 튜멘">
						<span class="open_markets" data-id="pre51576279">+19 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승무패
						</div>
						<div class="team_home team_3 sel_odds " data-m="승무패" data-bid="p5157627911" data-gid="pre51576279" data-ratio="2.44" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/77651.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">네프트자닉 알메티옙스크</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">2.44</span>
							</div>
						</div>
						<div class="team_draw team_3 sel_odds " data-m="승무패" data-bid="p5157627912" data-gid="pre51576279" data-ratio="3.93" data-stat="1">
							<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.93</span>
						</div>
						<div class="team_away team_3 sel_odds " data-m="승무패" data-bid="p5157627913" data-gid="pre51576279" data-ratio="2.08" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.08</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">루빈 튜멘 </span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/55171.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p51576279160D51714" data-gid="pre51576279" data-ratio="1.53">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/77651.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">네프트자닉 알메티옙스크</span><span class="odds_stan dspn">0.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.53</span>
							</div>
						</div>
						<div class="team_stan">
							0.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p51576279160D51715" data-gid="pre51576279" data-ratio="2.02">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.02</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">루빈 튜멘</span><span class="odds_stan dspn">-0.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/55171.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p51576279185D512" data-gid="pre51576279" data-ratio="1.92">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/77651.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">5.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.92</span>
							</div>
						</div>
						<div class="team_stan">
							5.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p51576279185D513" data-gid="pre51576279" data-ratio="1.60">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.60</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">5.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/55171.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 01:00:00
					</div>
					<div class="sports_markets " data-id="pre51576281" data-spo="아이스 하키" data-lg="VHL" data-flag="101" data-home="HK 첼니" data-away="자우랄리에 쿠르간">
						<span class="open_markets" data-id="pre51576281">+20 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승무패
						</div>
						<div class="team_home team_3 sel_odds " data-m="승무패" data-bid="p5157628111" data-gid="pre51576281" data-ratio="3.26" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/116988.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">HK 첼니</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">3.26</span>
							</div>
						</div>
						<div class="team_draw team_3 sel_odds " data-m="승무패" data-bid="p5157628112" data-gid="pre51576281" data-ratio="4.12" data-stat="1">
							<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">4.12</span>
						</div>
						<div class="team_away team_3 sel_odds " data-m="승무패" data-bid="p5157628113" data-gid="pre51576281" data-ratio="1.68" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.68</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">자우랄리에 쿠르간 </span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/78199.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p51576281160D51714" data-gid="pre51576281" data-ratio="1.85">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/116988.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">HK 첼니</span><span class="odds_stan dspn">0.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.85</span>
							</div>
						</div>
						<div class="team_stan">
							0.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p51576281160D51715" data-gid="pre51576281" data-ratio="1.65">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.65</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">자우랄리에 쿠르간</span><span class="odds_stan dspn">-0.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/78199.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p51576281185D512" data-gid="pre51576281" data-ratio="1.79">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/116988.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">5.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.79</span>
							</div>
						</div>
						<div class="team_stan">
							5.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p51576281185D513" data-gid="pre51576281" data-ratio="1.69">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.69</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">5.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/78199.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 01:00:00
					</div>
					<div class="sports_markets " data-id="pre51576277" data-spo="아이스 하키" data-lg="VHL" data-flag="101" data-home="바스 카잔" data-away="HC 유그라 칸티-만시스크">
						<span class="open_markets" data-id="pre51576277">+0 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승무패
						</div>
						<div class="team_home team_3 sel_odds disabled" data-m="승무패" data-bid="p5157627711" data-gid="pre51576277" data-ratio="4.99" data-stat="2">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/79785.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">바스 카잔</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">4.99</span>
							</div>
							<div class="sel_lock">
								<i class="fas fa-lock" aria-hidden="true"></i>
							</div>
						</div>
						<div class="team_draw team_3 sel_odds disabled" data-m="승무패" data-bid="p5157627712" data-gid="pre51576277" data-ratio="4.51" data-stat="2">
							<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">4.51</span>
							<div class="sel_lock">
								<i class="fas fa-lock" aria-hidden="true"></i>
							</div>
						</div>
						<div class="team_away team_3 sel_odds disabled" data-m="승무패" data-bid="p5157627713" data-gid="pre51576277" data-ratio="1.38" data-stat="2">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.38</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">HC 유그라 칸티-만시스크 </span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/43853.png" onerror="this.src='/static/img/noimg.png'"></span>
							<div class="sel_lock">
								<i class="fas fa-lock" aria-hidden="true"></i>
							</div>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/RUS.png"> 러시아 &gt; <span style="color:#fff">수퍼리그</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/23.png" alt=""><span class="spobar">|</span> 1 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 01:30:00
					</div>
					<div class="sports_markets " data-id="pre52125329" data-spo="배구" data-lg="수퍼리그" data-flag="262" data-home="제니트 세인트 피터즈버그" data-away="벨로고리 벨고로드">
						<span class="open_markets" data-id="pre52125329">+18 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p521253291864" data-gid="pre52125329" data-ratio="2.14" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/366530.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">제니트 세인트 피터즈버그</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">2.14</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p521253291865" data-gid="pre52125329" data-ratio="1.51" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.51</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">벨로고리 벨고로드</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45023.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p521253292374D51714" data-gid="pre52125329" data-ratio="1.80">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/366530.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">제니트 세인트 피터즈버그</span><span class="odds_stan dspn">4.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.80</span>
							</div>
						</div>
						<div class="team_stan">
							4.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p521253292374D51715" data-gid="pre52125329" data-ratio="1.82">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.82</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">벨로고리 벨고로드</span><span class="odds_stan dspn">-4.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45023.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p52125329238183D512" data-gid="pre52125329" data-ratio="1.80">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/366530.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">183.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.80</span>
							</div>
						</div>
						<div class="team_stan">
							183.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p52125329238183D513" data-gid="pre52125329" data-ratio="1.82">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.82</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">183.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/45023.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/000.png"> 국제클럽 &gt; <span style="color:#fff">UEFA 챔피언스리그</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/1.png" alt=""><span class="spobar">|</span> 2 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 01:45:00
					</div>
					<div class="sports_markets " data-id="pre53151989" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="FC 레드불 잘츠부르크" data-away="스타드 브레스트 29">
						<span class="open_markets" data-id="pre53151989">+85 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승무패
						</div>
						<div class="team_home team_3 sel_odds " data-m="승무패" data-bid="p5315198911" data-gid="pre53151989" data-ratio="1.68" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2046.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">FC 레드불 잘츠부르크</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.68</span>
							</div>
						</div>
						<div class="team_draw team_3 sel_odds " data-m="승무패" data-bid="p5315198912" data-gid="pre53151989" data-ratio="3.56" data-stat="1">
							<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.56</span>
						</div>
						<div class="team_away team_3 sel_odds " data-m="승무패" data-bid="p5315198913" data-gid="pre53151989" data-ratio="4.25" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">4.25</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">스타드 브레스트 29</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/1715.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p5315198916M0D51714" data-gid="pre53151989" data-ratio="1.65">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2046.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">FC 레드불 잘츠부르크</span><span class="odds_stan dspn">-0.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.65</span>
							</div>
						</div>
						<div class="team_stan">
							-0.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p5315198916M0D51715" data-gid="pre53151989" data-ratio="1.97">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.97</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">스타드 브레스트 29</span><span class="odds_stan dspn">0.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/1715.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p53151989182D512" data-gid="pre53151989" data-ratio="1.65">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2046.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.65</span>
							</div>
						</div>
						<div class="team_stan">
							2.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p53151989182D513" data-gid="pre53151989" data-ratio="1.97">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.97</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/1715.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 01:45:00
					</div>
					<div class="sports_markets " data-id="pre53151991" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="VfB 슈투트가르트" data-away="AC 스파르타 프라하">
						<span class="open_markets" data-id="pre53151991">+86 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승무패
						</div>
						<div class="team_home team_3 sel_odds " data-m="승무패" data-bid="p5315199111" data-gid="pre53151991" data-ratio="1.36" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2677.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">VfB 슈투트가르트</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.36</span>
							</div>
						</div>
						<div class="team_draw team_3 sel_odds " data-m="승무패" data-bid="p5315199112" data-gid="pre53151991" data-ratio="4.85" data-stat="1">
							<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">4.85</span>
						</div>
						<div class="team_away team_3 sel_odds " data-m="승무패" data-bid="p5315199113" data-gid="pre53151991" data-ratio="5.94" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">5.94</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">AC 스파르타 프라하</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2218.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p5315199116M1D51714" data-gid="pre53151991" data-ratio="1.92">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2677.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">VfB 슈투트가르트</span><span class="odds_stan dspn">-1.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.92</span>
							</div>
						</div>
						<div class="team_stan">
							-1.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p5315199116M1D51715" data-gid="pre53151991" data-ratio="1.69">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.69</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">AC 스파르타 프라하</span><span class="odds_stan dspn">1.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2218.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p53151991183D512" data-gid="pre53151991" data-ratio="1.90">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2677.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">3.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.90</span>
							</div>
						</div>
						<div class="team_stan">
							3.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p53151991183D513" data-gid="pre53151991" data-ratio="1.70">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.70</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">3.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2218.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/USA.png"> 미국 &gt; <span style="color:#fff">MLB</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/3.png" alt=""><span class="spobar">|</span> 1 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 03:32:00
					</div>
					<div class="sports_markets " data-id="pre54106367" data-spo="야구" data-lg="MLB" data-flag="16" data-home="휴스턴 애스트로스" data-away="디트로이트 타이거스">
						<span class="open_markets" data-id="pre54106367">+14 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p541063672514" data-gid="pre54106367" data-ratio="1.67" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3655.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">휴스턴 애스트로스</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.67</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p541063672515" data-gid="pre54106367" data-ratio="2.14" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.14</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">디트로이트 타이거스</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3648.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p541063672586D512" data-gid="pre54106367" data-ratio="1.91">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3655.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">6.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.91</span>
							</div>
						</div>
						<div class="team_stan">
							6.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p541063672586D513" data-gid="pre54106367" data-ratio="1.85">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.85</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">6.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3648.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/000.png"> 국제클럽 &gt; <span style="color:#fff">UEFA 챔피언스리그</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/1.png" alt=""><span class="spobar">|</span> 7 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 04:00:00
					</div>
					<div class="sports_markets " data-id="pre53152001" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="FC 바르셀로나" data-away="BSC 영 보이즈">
						<span class="open_markets" data-id="pre53152001">+86 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승무패
						</div>
						<div class="team_home team_3 sel_odds " data-m="승무패" data-bid="p5315200111" data-gid="pre53152001" data-ratio="1.05" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2817.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">FC 바르셀로나</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.05</span>
							</div>
						</div>
						<div class="team_draw team_3 sel_odds " data-m="승무패" data-bid="p5315200112" data-gid="pre53152001" data-ratio="8.91" data-stat="1">
							<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">8.91</span>
						</div>
						<div class="team_away team_3 sel_odds " data-m="승무패" data-bid="p5315200113" data-gid="pre53152001" data-ratio="19.80" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">19.80</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">BSC 영 보이즈</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2445.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p5315200116M2D51714" data-gid="pre53152001" data-ratio="1.62">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2817.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">FC 바르셀로나</span><span class="odds_stan dspn">-2.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.62</span>
							</div>
						</div>
						<div class="team_stan">
							-2.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p5315200116M2D51715" data-gid="pre53152001" data-ratio="2.02">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.02</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">BSC 영 보이즈</span><span class="odds_stan dspn">2.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2445.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p53152001183D512" data-gid="pre53152001" data-ratio="1.55">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2817.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">3.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.55</span>
							</div>
						</div>
						<div class="team_stan">
							3.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p53152001183D513" data-gid="pre53152001" data-ratio="2.14">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.14</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">3.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2445.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 04:00:00
					</div>
					<div class="sports_markets " data-id="pre53152003" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="FC 인터 밀란" data-away="FK 츠르베나 즈베즈다">
						<span class="open_markets" data-id="pre53152003">+84 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승무패
						</div>
						<div class="team_home team_3 sel_odds " data-m="승무패" data-bid="p5315200311" data-gid="pre53152003" data-ratio="1.12" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2697.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">FC 인터 밀란</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.12</span>
							</div>
						</div>
						<div class="team_draw team_3 sel_odds " data-m="승무패" data-bid="p5315200312" data-gid="pre53152003" data-ratio="6.93" data-stat="1">
							<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">6.93</span>
						</div>
						<div class="team_away team_3 sel_odds " data-m="승무패" data-bid="p5315200313" data-gid="pre53152003" data-ratio="11.88" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">11.88</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">FK 츠르베나 즈베즈다</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/5149.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p5315200316M2D51714" data-gid="pre53152003" data-ratio="2.01">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2697.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">FC 인터 밀란</span><span class="odds_stan dspn">-2.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">2.01</span>
							</div>
						</div>
						<div class="team_stan">
							-2.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p5315200316M2D51715" data-gid="pre53152003" data-ratio="1.62">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.62</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">FK 츠르베나 즈베즈다</span><span class="odds_stan dspn">2.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/5149.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p53152003183D512" data-gid="pre53152003" data-ratio="1.71">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2697.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">3.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.71</span>
							</div>
						</div>
						<div class="team_stan">
							3.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p53152003183D513" data-gid="pre53152003" data-ratio="1.89">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.89</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">3.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/5149.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 04:00:00
					</div>
					<div class="sports_markets " data-id="pre53152005" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="PSV 에인트호번" data-away="스포르팅 CP">
						<span class="open_markets" data-id="pre53152005">+86 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승무패
						</div>
						<div class="team_home team_3 sel_odds " data-m="승무패" data-bid="p5315200511" data-gid="pre53152005" data-ratio="2.37" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2952.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">PSV 에인트호번</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">2.37</span>
							</div>
						</div>
						<div class="team_draw team_3 sel_odds " data-m="승무패" data-bid="p5315200512" data-gid="pre53152005" data-ratio="3.36" data-stat="1">
							<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.36</span>
						</div>
						<div class="team_away team_3 sel_odds " data-m="승무패" data-bid="p5315200513" data-gid="pre53152005" data-ratio="2.57" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.57</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">스포르팅 CP</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3001.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p53152005183D512" data-gid="pre53152005" data-ratio="2.18">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2952.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">3.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.18</span>
							</div>
						</div>
						<div class="team_stan">
							3.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p53152005183D513" data-gid="pre53152005" data-ratio="1.52">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.52</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">3.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3001.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 04:00:00
					</div>
					<div class="sports_markets " data-id="pre53152009" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="SK 슬로반 브라티슬라바" data-away="맨체스터 시티">
						<span class="open_markets" data-id="pre53152009">+81 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승무패
						</div>
						<div class="team_home team_3 sel_odds " data-m="승무패" data-bid="p5315200911" data-gid="pre53152009" data-ratio="26.73" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2404.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">SK 슬로반 브라티슬라바</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">26.73</span>
							</div>
						</div>
						<div class="team_draw team_3 sel_odds " data-m="승무패" data-bid="p5315200912" data-gid="pre53152009" data-ratio="10.89" data-stat="1">
							<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">10.89</span>
						</div>
						<div class="team_away team_3 sel_odds " data-m="승무패" data-bid="p5315200913" data-gid="pre53152009" data-ratio="1.01" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.01</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">맨체스터 시티</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/17.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p53152009163D51714" data-gid="pre53152009" data-ratio="1.60">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2404.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">SK 슬로반 브라티슬라바</span><span class="odds_stan dspn">3.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.60</span>
							</div>
						</div>
						<div class="team_stan">
							3.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p53152009163D51715" data-gid="pre53152009" data-ratio="2.04">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.04</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">맨체스터 시티</span><span class="odds_stan dspn">-3.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/17.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p53152009184D512" data-gid="pre53152009" data-ratio="2.14">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2404.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">4.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.14</span>
							</div>
						</div>
						<div class="team_stan">
							4.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p53152009184D513" data-gid="pre53152009" data-ratio="1.55">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.55</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">4.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/17.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 04:00:00
					</div>
					<div class="sports_markets " data-id="pre53151995" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="바이어 04 레버쿠젠" data-away="AC 밀란">
						<span class="open_markets" data-id="pre53151995">+85 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승무패
						</div>
						<div class="team_home team_3 sel_odds " data-m="승무패" data-bid="p5315199511" data-gid="pre53151995" data-ratio="1.56" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2681.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">바이어 04 레버쿠젠</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.56</span>
							</div>
						</div>
						<div class="team_draw team_3 sel_odds " data-m="승무패" data-bid="p5315199512" data-gid="pre53151995" data-ratio="3.96" data-stat="1">
							<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.96</span>
						</div>
						<div class="team_away team_3 sel_odds " data-m="승무패" data-bid="p5315199513" data-gid="pre53151995" data-ratio="4.55" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">4.55</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">AC 밀란</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2692.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p5315199516M0D51714" data-gid="pre53151995" data-ratio="1.54">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2681.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">바이어 04 레버쿠젠</span><span class="odds_stan dspn">-0.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.54</span>
							</div>
						</div>
						<div class="team_stan">
							-0.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p5315199516M0D51715" data-gid="pre53151995" data-ratio="2.16">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.16</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">AC 밀란</span><span class="odds_stan dspn">0.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2692.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p53151995183D512" data-gid="pre53151995" data-ratio="2.16">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2681.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">3.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.16</span>
							</div>
						</div>
						<div class="team_stan">
							3.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p53151995183D513" data-gid="pre53151995" data-ratio="1.54">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.54</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">3.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2692.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 04:00:00
					</div>
					<div class="sports_markets " data-id="pre53151997" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="보루시아 도르트문트" data-away="셀틱 FC">
						<span class="open_markets" data-id="pre53151997">+85 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승무패
						</div>
						<div class="team_home team_3 sel_odds " data-m="승무패" data-bid="p5315199711" data-gid="pre53151997" data-ratio="1.45" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2673.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">보루시아 도르트문트</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.45</span>
							</div>
						</div>
						<div class="team_draw team_3 sel_odds " data-m="승무패" data-bid="p5315199712" data-gid="pre53151997" data-ratio="4.35" data-stat="1">
							<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">4.35</span>
						</div>
						<div class="team_away team_3 sel_odds " data-m="승무패" data-bid="p5315199713" data-gid="pre53151997" data-ratio="5.14" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">5.14</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">셀틱 FC</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2352.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p5315199716M1D51714" data-gid="pre53151997" data-ratio="2.13">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2673.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">보루시아 도르트문트</span><span class="odds_stan dspn">-1.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">2.13</span>
							</div>
						</div>
						<div class="team_stan">
							-1.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p5315199716M1D51715" data-gid="pre53151997" data-ratio="1.55">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.55</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">셀틱 FC</span><span class="odds_stan dspn">1.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2352.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p53151997183D512" data-gid="pre53151997" data-ratio="2.10">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2673.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">3.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.10</span>
							</div>
						</div>
						<div class="team_stan">
							3.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p53151997183D513" data-gid="pre53151997" data-ratio="1.57">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.57</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">3.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/2352.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 04:00:00
					</div>
					<div class="sports_markets " data-id="pre53151993" data-spo="축구" data-lg="UEFA 챔피언스리그" data-flag="393" data-home="아스널 FC" data-away="파리 생제르맹 FC">
						<span class="open_markets" data-id="pre53151993">+84 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승무패
						</div>
						<div class="team_home team_3 sel_odds " data-m="승무패" data-bid="p5315199311" data-gid="pre53151993" data-ratio="1.63" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/42.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">아스널 FC</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.63</span>
							</div>
						</div>
						<div class="team_draw team_3 sel_odds " data-m="승무패" data-bid="p5315199312" data-gid="pre53151993" data-ratio="3.61" data-stat="1">
							<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.61</span>
						</div>
						<div class="team_away team_3 sel_odds " data-m="승무패" data-bid="p5315199313" data-gid="pre53151993" data-ratio="4.45" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">4.45</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">파리 생제르맹 FC</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/1644.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p5315199316M0D51714" data-gid="pre53151993" data-ratio="1.61">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/42.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">아스널 FC</span><span class="odds_stan dspn">-0.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.61</span>
							</div>
						</div>
						<div class="team_stan">
							-0.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p5315199316M0D51715" data-gid="pre53151993" data-ratio="2.03">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.03</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">파리 생제르맹 FC</span><span class="odds_stan dspn">0.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/1644.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p53151993182D512" data-gid="pre53151993" data-ratio="1.65">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/42.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.65</span>
							</div>
						</div>
						<div class="team_stan">
							2.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p53151993182D513" data-gid="pre53151993" data-ratio="1.98">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.98</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/1644.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/USA.png"> 미국 &gt; <span style="color:#fff">MLB</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/3.png" alt=""><span class="spobar">|</span> 1 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 05:08:00
					</div>
					<div class="sports_markets " data-id="pre54106371" data-spo="야구" data-lg="MLB" data-flag="16" data-home="볼티모어 오리올스" data-away="캔자스시티 로열스">
						<span class="open_markets" data-id="pre54106371">+14 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p541063712514" data-gid="pre54106371" data-ratio="1.61" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3652.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">볼티모어 오리올스</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.61</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p541063712515" data-gid="pre54106371" data-ratio="2.26" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.26</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">캔자스시티 로열스</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3651.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p54106371256M1D51714" data-gid="pre54106371" data-ratio="2.27">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3652.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">볼티모어 오리올스</span><span class="odds_stan dspn">-1.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">2.27</span>
							</div>
						</div>
						<div class="team_stan">
							-1.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p54106371256M1D51715" data-gid="pre54106371" data-ratio="1.60">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.60</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">캔자스시티 로열스</span><span class="odds_stan dspn">1.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3651.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p541063712586D512" data-gid="pre54106371" data-ratio="1.76">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3652.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">6.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.76</span>
							</div>
						</div>
						<div class="team_stan">
							6.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p541063712586D513" data-gid="pre54106371" data-ratio="2.03">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.03</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">6.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3651.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 06:32:00
					</div>
					<div class="sports_markets " data-id="pre54148025" data-spo="야구" data-lg="MLB" data-flag="16" data-home="밀워키 브루어스" data-away="뉴욕메츠">
						<span class="open_markets" data-id="pre54148025">+14 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p541480252514" data-gid="pre54148025" data-ratio="1.70" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3630.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">밀워키 브루어스</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.70</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p541480252515" data-gid="pre54148025" data-ratio="2.10" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.10</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">뉴욕메츠</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3629.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p541480252587D512" data-gid="pre54148025" data-ratio="1.94">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3630.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">7.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.94</span>
							</div>
						</div>
						<div class="team_stan">
							7.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p541480252587D513" data-gid="pre54148025" data-ratio="1.82">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.82</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">7.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3629.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/USA.png"> 미국 &gt; <span style="color:#fff">WNBA</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/2.png" alt=""><span class="spobar">|</span> 1 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 08:30:00
					</div>
					<div class="sports_markets " data-id="pre53999187" data-spo="농구" data-lg="WNBA" data-flag="15" data-home="뉴욕 리버티" data-away="라스베이거스 에이시스">
						<span class="open_markets" data-id="pre53999187">+25 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p539991872194" data-gid="pre53999187" data-ratio="1.49" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3446.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">뉴욕 리버티</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.49</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p539991872195" data-gid="pre53999187" data-ratio="2.46" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.46</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">라스베이거스 에이시스</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/35550.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p53999187223M4D51714" data-gid="pre53999187" data-ratio="1.88">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3446.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">뉴욕 리버티</span><span class="odds_stan dspn">-4.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.88</span>
							</div>
						</div>
						<div class="team_stan">
							-4.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p53999187223M4D51715" data-gid="pre53999187" data-ratio="1.88">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.88</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">라스베이거스 에이시스</span><span class="odds_stan dspn">4.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/35550.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p53999187225163D512" data-gid="pre53999187" data-ratio="1.88">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3446.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">163.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.88</span>
							</div>
						</div>
						<div class="team_stan">
							163.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p53999187225163D513" data-gid="pre53999187" data-ratio="1.88">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.88</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">163.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/35550.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/USA.png"> 미국 &gt; <span style="color:#fff">MLB</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/3.png" alt=""><span class="spobar">|</span> 1 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 09:38:00
					</div>
					<div class="sports_markets " data-id="pre54148021" data-spo="야구" data-lg="MLB" data-flag="16" data-home="샌디에이고 파드리스" data-away="애틀란타 브레이브스">
						<span class="open_markets" data-id="pre54148021">+14 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p541480212514" data-gid="pre54148021" data-ratio="1.63" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3636.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">샌디에이고 파드리스</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.63</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p541480212515" data-gid="pre54148021" data-ratio="2.20" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.20</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">애틀란타 브레이브스</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3656.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p54148021256M1D51714" data-gid="pre54148021" data-ratio="2.34">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3636.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">샌디에이고 파드리스</span><span class="odds_stan dspn">-1.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">2.34</span>
							</div>
						</div>
						<div class="team_stan">
							-1.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p54148021256M1D51715" data-gid="pre54148021" data-ratio="1.57">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.57</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">애틀란타 브레이브스</span><span class="odds_stan dspn">1.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3656.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p541480212586D512" data-gid="pre54148021" data-ratio="1.71">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3636.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">6.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.71</span>
							</div>
						</div>
						<div class="team_stan">
							6.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p541480212586D513" data-gid="pre54148021" data-ratio="2.08">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.08</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">6.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3656.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/USA.png"> 미국 &gt; <span style="color:#fff">WNBA</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/2.png" alt=""><span class="spobar">|</span> 1 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-02 10:30:00
					</div>
					<div class="sports_markets " data-id="pre54007849" data-spo="농구" data-lg="WNBA" data-flag="15" data-home="미네소타 링스" data-away="코네티컷 선">
						<span class="open_markets" data-id="pre54007849">+25 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p540078492194" data-gid="pre54007849" data-ratio="1.46" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3440.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">미네소타 링스</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.46</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p540078492195" data-gid="pre54007849" data-ratio="2.56" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.56</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">코네티컷 선</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/35547.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p54007849223M4D51714" data-gid="pre54007849" data-ratio="1.85">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3440.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">미네소타 링스</span><span class="odds_stan dspn">-4.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.85</span>
							</div>
						</div>
						<div class="team_stan">
							-4.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p54007849223M4D51715" data-gid="pre54007849" data-ratio="1.91">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.91</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">코네티컷 선</span><span class="odds_stan dspn">4.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/35547.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p54007849225151D512" data-gid="pre54007849" data-ratio="1.85">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/3440.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">151.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.85</span>
							</div>
						</div>
						<div class="team_stan">
							151.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p54007849225151D513" data-gid="pre54007849" data-ratio="1.91">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.91</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">151.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/35547.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/CZE.png"> 체코 &gt; <span style="color:#fff">Czech Liga Pro</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/20.png" alt=""><span class="spobar">|</span> 3 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 11:00:00
					</div>
					<div class="sports_markets " data-id="pre54082841" data-spo="탁구" data-lg="Czech Liga Pro" data-flag="1017" data-home="Hofman, Denis" data-away="Zika, Tadeas">
						<span class="open_markets" data-id="pre54082841">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p540828411864" data-gid="pre54082841" data-ratio="2.14" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">Hofman, Denis</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">2.14</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p540828411865" data-gid="pre54082841" data-ratio="1.58" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.58</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">Zika, Tadeas</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 11:00:00
					</div>
					<div class="sports_markets " data-id="pre54084669" data-spo="탁구" data-lg="Czech Liga Pro" data-flag="1017" data-home="Kucirek, Ondrej" data-away="Parhomenko, Dmitro">
						<span class="open_markets" data-id="pre54084669">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p540846691864" data-gid="pre54084669" data-ratio="1.63" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">Kucirek, Ondrej</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.63</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p540846691865" data-gid="pre54084669" data-ratio="2.05" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.05</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">Parhomenko, Dmitro</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 11:00:00
					</div>
					<div class="sports_markets " data-id="pre54083145" data-spo="탁구" data-lg="Czech Liga Pro" data-flag="1017" data-home="Strnad, Jaroslav" data-away="Grohsgott, Jiri">
						<span class="open_markets" data-id="pre54083145">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p540831451864" data-gid="pre54083145" data-ratio="2.85" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">Strnad, Jaroslav</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">2.85</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p540831451865" data-gid="pre54083145" data-ratio="1.34" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.34</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">Grohsgott, Jiri</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/MEX.png"> 멕시코 &gt; <span style="color:#fff">LNBP</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/2.png" alt=""><span class="spobar">|</span> 1 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 11:00:00
					</div>
					<div class="sports_markets " data-id="pre50719573" data-spo="농구" data-lg="LNBP" data-flag="395" data-home="Freseros de Irapuato" data-away="아베하스 데 레온">
						<span class="open_markets" data-id="pre50719573">+30 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p507195732194" data-gid="pre50719573" data-ratio="1.36" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">Freseros de Irapuato</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.36</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p507195732195" data-gid="pre50719573" data-ratio="2.97" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.97</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">아베하스 데 레온</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/121784.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p50719573223M6D51714" data-gid="pre50719573" data-ratio="1.90">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">Freseros de Irapuato</span><span class="odds_stan dspn">-6.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.90</span>
							</div>
						</div>
						<div class="team_stan">
							-6.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p50719573223M6D51715" data-gid="pre50719573" data-ratio="1.86">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.86</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">아베하스 데 레온</span><span class="odds_stan dspn">6.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/121784.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p50719573225174D512" data-gid="pre50719573" data-ratio="1.88">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">174.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.88</span>
							</div>
						</div>
						<div class="team_stan">
							174.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p50719573225174D513" data-gid="pre50719573" data-ratio="1.88">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.88</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">174.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/121784.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/MEX.png"> 멕시코 &gt; <span style="color:#fff">리가 MX, 여자, 에페르투라</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/1.png" alt=""><span class="spobar">|</span> 1 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 11:00:00
					</div>
					<div class="sports_markets " data-id="pre50859841" data-spo="축구" data-lg="리가 MX, 여자, 에페르투라" data-flag="12" data-home="CF 몬테레이 (W)" data-away="마사틀란 FC (W)">
						<span class="open_markets" data-id="pre50859841">+33 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승무패
						</div>
						<div class="team_home team_3 sel_odds " data-m="승무패" data-bid="p5085984111" data-gid="pre50859841" data-ratio="1.00" data-stat="1">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/334061.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">CF 몬테레이 (W)</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.00</span>
							</div>
						</div>
						<div class="team_draw team_3 sel_odds " data-m="승무패" data-bid="p5085984112" data-gid="pre50859841" data-ratio="11.88" data-stat="1">
							<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">11.88</span>
						</div>
						<div class="team_away team_3 sel_odds " data-m="승무패" data-bid="p5085984113" data-gid="pre50859841" data-ratio="25.74" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">25.74</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">마사틀란 FC (W)</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/334059.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							핸디캡
						</div>
						<div class="team_hd_home team_2 sel_odds " data-m="핸디캡" data-bid="p5085984116M3D51714" data-gid="pre50859841" data-ratio="1.67">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/334061.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">CF 몬테레이 (W)</span><span class="odds_stan dspn">-3.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-heading" aria-hidden="true"></i><span class="odds_ratio">1.67</span>
							</div>
						</div>
						<div class="team_stan">
							-3.5
						</div>
						<div class="team_hd_away team_2 sel_odds " data-m="핸디캡" data-bid="p5085984116M3D51715" data-gid="pre50859841" data-ratio="1.94">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.94</span><i class="fas fa-heading" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">마사틀란 FC (W)</span><span class="odds_stan dspn">3.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/334059.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="s_odds">
						<div class="team_head">
							오버언더
						</div>
						<div class="team_over team_2 sel_odds " data-m="오버언더" data-bid="p50859841184D512" data-gid="pre50859841" data-ratio="1.79">
							<span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/334061.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">오버</span><span class="odds_stan dspn">4.5</span></span>
							<div class="sp_icon_box">
								<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.79</span>
							</div>
						</div>
						<div class="team_stan">
							4.5
						</div>
						<div class="team_under team_2 sel_odds " data-m="오버언더" data-bid="p50859841184D513" data-gid="pre50859841" data-ratio="1.81">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.81</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
							</div>
							<span class="odds_name_box slider"><span class="odds_name">언더</span><span class="odds_stan dspn">4.5</span></span><span class="team_img"><img src="https://image.turnkeyapi.com/uof_team/medium/334059.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/CZE.png"> 체코 &gt; <span style="color:#fff">Czech Liga Pro</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/20.png" alt=""><span class="spobar">|</span> 3 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 11:30:00
					</div>
					<div class="sports_markets " data-id="pre54084673" data-spo="탁구" data-lg="Czech Liga Pro" data-flag="1017" data-home="Adamec, Miroslav" data-away="Holovatiuk, Yurii">
						<span class="open_markets" data-id="pre54084673">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p540846731864" data-gid="pre54084673" data-ratio="1.82" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">Adamec, Miroslav</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.82</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p540846731865" data-gid="pre54084673" data-ratio="1.82" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.82</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">Holovatiuk, Yurii</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 11:30:00
					</div>
					<div class="sports_markets " data-id="pre54082851" data-spo="탁구" data-lg="Czech Liga Pro" data-flag="1017" data-home="Bayer, Alesh" data-away="Klimenta, Matous">
						<span class="open_markets" data-id="pre54082851">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p540828511864" data-gid="pre54082851" data-ratio="2.25" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">Bayer, Alesh</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">2.25</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p540828511865" data-gid="pre54082851" data-ratio="1.53" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.53</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">Klimenta, Matous</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 11:30:00
					</div>
					<div class="sports_markets " data-id="pre54083165" data-spo="탁구" data-lg="Czech Liga Pro" data-flag="1017" data-home="Vitrovyj, Oleg" data-away="Vaclavik, Miroslav">
						<span class="open_markets" data-id="pre54083165">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p540831651864" data-gid="pre54083165" data-ratio="1.63" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">Vitrovyj, Oleg</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.63</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p540831651865" data-gid="pre54083165" data-ratio="2.05" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.05</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">Vaclavik, Miroslav</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/000.png"> ATP &gt; <span style="color:#fff">ATP 상하이, 중국 남자 단식</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/5.png" alt=""><span class="spobar">|</span> 4 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 13:00:00
					</div>
					<div class="sports_markets " data-id="pre54122215" data-spo="테니스" data-lg="ATP 상하이, 중국 남자 단식" data-flag="3" data-home="Tu, Li" data-away="시아우, 리앙">
						<span class="open_markets" data-id="pre54122215">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p541222151864" data-gid="pre54122215" data-ratio="1.08" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">Tu, Li</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.08</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p541222151865" data-gid="pre54122215" data-ratio="5.80" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">5.80</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">시아우, 리앙</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 13:00:00
					</div>
					<div class="sports_markets " data-id="pre54122213" data-spo="테니스" data-lg="ATP 상하이, 중국 남자 단식" data-flag="3" data-home="볼트, 알렉스" data-away="에반스, 다니엘">
						<span class="open_markets" data-id="pre54122213">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p541222131864" data-gid="pre54122213" data-ratio="3.05" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">볼트, 알렉스</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">3.05</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p541222131865" data-gid="pre54122213" data-ratio="1.30" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.30</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">에반스, 다니엘</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 13:00:00
					</div>
					<div class="sports_markets " data-id="pre54125949" data-spo="테니스" data-lg="ATP 상하이, 중국 남자 단식" data-flag="3" data-home="왈톤, 아담" data-away="Atmane, Terence">
						<span class="open_markets" data-id="pre54125949">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p541259491864" data-gid="pre54125949" data-ratio="1.82" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">왈톤, 아담</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.82</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p541259491865" data-gid="pre54125949" data-ratio="1.82" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.82</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">Atmane, Terence</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 13:00:00
					</div>
					<div class="sports_markets " data-id="pre54122217" data-spo="테니스" data-lg="ATP 상하이, 중국 남자 단식" data-flag="3" data-home="하리스, 빌리" data-away="주카예브, 베이비트">
						<span class="open_markets" data-id="pre54122217">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p541222171864" data-gid="pre54122217" data-ratio="1.52" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">하리스, 빌리</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.52</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p541222171865" data-gid="pre54122217" data-ratio="2.27" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.27</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">주카예브, 베이비트</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/RUS.png"> 러시아 &gt; <span style="color:#fff">Pro League</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/23.png" alt=""><span class="spobar">|</span> 1 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 13:30:00
					</div>
					<div class="sports_markets " data-id="pre54138285" data-spo="배구" data-lg="Pro League" data-flag="262" data-home="Feniks Tver" data-away="Sokol-Pro">
						<span class="open_markets" data-id="pre54138285">+0 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds disabled" data-m="승패" data-bid="p541382851864" data-gid="pre54138285" data-ratio="1.71" data-stat="2">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">Feniks Tver</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.71</span>
							</div>
							<div class="sel_lock">
								<i class="fas fa-lock" aria-hidden="true"></i>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds disabled" data-m="승패" data-bid="p541382851865" data-gid="pre54138285" data-ratio="1.84" data-stat="2">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.84</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">Sokol-Pro</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
							<div class="sel_lock">
								<i class="fas fa-lock" aria-hidden="true"></i>
							</div>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/000.png"> ATP &gt; <span style="color:#fff">ATP 베이징, 중국 남자 복식</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/5.png" alt=""><span class="spobar">|</span> 1 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 14:00:00
					</div>
					<div class="sports_markets " data-id="pre53755759" data-spo="테니스" data-lg="ATP 베이징, 중국 남자 복식" data-flag="3" data-home="Bolelli S / Vavassori A" data-away="Koolhof W / Mektic N">
						<span class="open_markets" data-id="pre53755759">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p537557591864" data-gid="pre53755759" data-ratio="1.65" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">Bolelli S / Vavassori A</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.65</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p537557591865" data-gid="pre53755759" data-ratio="2.03" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.03</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">Koolhof W / Mektic N</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/000.png"> ATP &gt; <span style="color:#fff">ATP 상하이, 중국 남자 단식</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/5.png" alt=""><span class="spobar">|</span> 2 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 14:20:00
					</div>
					<div class="sports_markets " data-id="pre54130841" data-spo="테니스" data-lg="ATP 상하이, 중국 남자 단식" data-flag="3" data-home="부키크, 알렉산달" data-away="크루에겔, 미트첼">
						<span class="open_markets" data-id="pre54130841">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p541308411864" data-gid="pre54130841" data-ratio="1.51" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">부키크, 알렉산달</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.51</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p541308411865" data-gid="pre54130841" data-ratio="2.28" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.28</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">크루에겔, 미트첼</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 14:20:00
					</div>
					<div class="sports_markets " data-id="pre54128239" data-spo="테니스" data-lg="ATP 상하이, 중국 남자 단식" data-flag="3" data-home="사포발로브, 데니스" data-away="시마부쿠로, 소">
						<span class="open_markets" data-id="pre54128239">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p541282391864" data-gid="pre54128239" data-ratio="1.25" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">사포발로브, 데니스</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.25</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p541282391865" data-gid="pre54128239" data-ratio="3.30" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">3.30</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">시마부쿠로, 소</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 14:30:00
					</div>
					<div class="sports_markets " data-id="pre54134765" data-spo="테니스" data-lg="ATP 상하이, 중국 남자 단식" data-flag="3" data-home="게라시모브, 에고르" data-away="모로 카나스, 알레잔드로">
						<span class="open_markets" data-id="pre54134765">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p541347651864" data-gid="pre54134765" data-ratio="3.05" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">게라시모브, 에고르</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">3.05</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p541347651865" data-gid="pre54134765" data-ratio="1.30" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.30</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">모로 카나스, 알레잔드로</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 14:30:00
					</div>
					<div class="sports_markets " data-id="pre54134837" data-spo="테니스" data-lg="ATP 상하이, 중국 남자 단식" data-flag="3" data-home="와타누키, 요스케" data-away="홍, 승찬">
						<span class="open_markets" data-id="pre54134837">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p541348371864" data-gid="pre54134837" data-ratio="1.55" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">와타누키, 요스케</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.55</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p541348371865" data-gid="pre54134837" data-ratio="2.20" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">2.20</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">홍, 승찬</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="info_league info_league_global">
					<div class="league_box">
						<img src="/static/img/flag/CZE.png"> 체코 &gt; <span style="color:#fff">Czech Liga Pro</span>
					</div>
					<div class="fr spoimg">
						<img src="/static/img/sports/20.png" alt=""><span class="spobar">|</span> 4 경기
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 15:00:00
					</div>
					<div class="sports_markets " data-id="pre54127061" data-spo="탁구" data-lg="Czech Liga Pro" data-flag="1017" data-home="Hlawatschke, Ales" data-away="Vondrak, Michal">
						<span class="open_markets" data-id="pre54127061">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p541270611864" data-gid="pre54127061" data-ratio="1.70" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">Hlawatschke, Ales</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">1.70</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p541270611865" data-gid="pre54127061" data-ratio="1.96" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.96</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">Vondrak, Michal</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 15:00:00
					</div>
					<div class="sports_markets " data-id="pre54127413" data-spo="탁구" data-lg="Czech Liga Pro" data-flag="1017" data-home="Hons, Karel" data-away="Duben, Bohumil">
						<span class="open_markets" data-id="pre54127413">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p541274131864" data-gid="pre54127413" data-ratio="2.40" data-stat="1">
							<span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">Hons, Karel</span></span>
							<div class="sp_icon_box">
								<img src="/static/img/icon_1x2.png"><span class="odds_ratio">2.40</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p541274131865" data-gid="pre54127413" data-ratio="1.47" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.47</span><img src="/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">Duben, Bohumil</span></span><span class="team_img"><img src="/static/img/noimg.png" onerror="this.src='/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
				<div class="sports_box">
					<div class="sports_time">
						2024-10-01 15:00:00
					</div>
					<div class="sports_markets " data-id="pre54127109" data-spo="탁구" data-lg="Czech Liga Pro" data-flag="1017" data-home="Kostal, Marek" data-away="Nohejl, Matej">
						<span class="open_markets" data-id="pre54127109">+1 추가 배팅옵션</span>
					</div>
					<div class="s_odds">
						<div class="team_head">
							승패
						</div>
						<div class="team_home team_2 sel_odds " data-m="승패" data-bid="p541271091864" data-gid="pre54127109" data-ratio="1.82" data-stat="1">
							<span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span><span class="odds_name_box slider"><span class="odds_name">Kostal, Marek</span></span>
							<div class="sp_icon_box">
								<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">1.82</span>
							</div>
						</div>
						<div class="team_draw">
							VS
						</div>
						<div class="team_away team_2 sel_odds " data-m="승패" data-bid="p541271091865" data-gid="pre54127109" data-ratio="1.82" data-stat="1">
							<div class="sp_icon_box">
								<span class="odds_ratio">1.82</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
							</div>
							<span class="odds_name_box slider"><span class="odds_name">Nohejl, Matej</span></span><span class="team_img"><img src="https://lg-2020.com/static/img/noimg.png" onerror="this.src='https://lg-2020.com/static/img/noimg.png'"></span>
						</div>
					</div>
					<div class="cb">
					</div>
				</div>
			</div>
			<!--<div class="sport_page_box">
				<span class="btn_page cpage" data-page="1">1</span><span class="btn_page " data-page="2">2</span><span class="btn_page " data-page="3">3</span><span class="btn_page " data-page="4">4</span><span class="btn_page " data-page="5">5</span><span class="btn_page " data-page="6">6</span><span class="btn_page " data-page="7">7</span><span class="btn_page " data-page="8">8</span><i class="fas fa-ellipsis-h" aria-hidden="true"></i><span class="btn_page" data-page="12">12</span>
			</div>-->
		</div>
		<div class="detail_game no_select">
			<div class="d_info3">
				<p style="text-align:center">
					<img src="https://lg-2020.com/static/data/upload/images/%EC%8A%A4%ED%8F%AC%EC%B8%A0%ED%86%B5%ED%95%A9%EA%B7%9C%EC%A0%95%EC%95%88%EB%82%B4(10).jpg" style="height:8423px; width:1000px">
				</p>
			</div>
		</div>
		<div class="detail_game dspn" data-idx="">
			<div class="d_info">
				 인포메이션
			</div>
			<div class="live_tracker" style="height: 0px;">
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
//import { open_payback } from '@/static/js/base.ts';
//import '@/assets/tracking.js';
import loadLiveChat from '@/assets/livechat.js';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'sportsPage',

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
				<style scoped>
				.sports_tab_out_box {
    overflow-y: hidden;
    overflow-x: overay;
    padding-top: 10px;
    padding-bottom: 20px;
}
								</style>