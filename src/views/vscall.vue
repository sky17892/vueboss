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
	<div class="b3_tab_box">
		<a href="/vscall" class="vsc on">
		<img src="https://lg-2020.com/static/img/icon_bet365.png" alt="">
		축구 </a>
		<a href="https://lg-2020.com/game/vspo/vbk/all" class="vbk ">
		<img src="https://lg-2020.com/static/img/icon_bet365.png" alt="">
		농구 </a>
		<a href="https://lg-2020.com/game/vspo/vgg/all" class="vgg ">
		<img src="https://lg-2020.com/static/img/icon_bet365.png" alt="">
		개경주 </a>
		<a href="https://lg-2020.com/game/vspo/vgm/all" class="vgm ">
		<img src="https://lg-2020.com/static/img/icon_bet365.png" alt="">
		경마 </a>
	</div>	
	<div class="minigame_box ">
		<div class="vtg_scr_box">
			<div class="scr_tab_box">
				<span class="btn_scr btn_scr_04 on" data-id="ps">
				프리미어쉽<br>
				 Premiership </span>
				<span class="btn_scr btn_scr_04 " data-id="sl">
				슈퍼리그<br>
				 Super League </span>
				<span class="btn_scr btn_scr_04 " data-id="ec">
				유로컵<br>
				 Euro Cup </span>
				<span class="btn_scr btn_scr_04 " data-id="wc">
				월드컵<br>
				 World Cup </span>
			</div>
			<div class="virtual_box">				
				<!--<iframe src="https://b1.nutv365.com/ios/?vn=1&sw=709.99&sh=399.995" :src="iframeSrc"  class="ifr_01" scrolling="no">
				<iframe src="https://b1.nutv365.com/eb46540f-604e-4a55-afc9-9b2f42b8fb4c?sw=709.99&sh=399.995" class="ifr_01" scrolling="no" frameborder="0">
				</iframe>-->
				<iframe src="https://b1.nutv365.com/ios/?vn=1&sw=423.446&sh=399.995" class="ifr_01" scrolling="no" width="709.99" height="399.995" frameborder="0">
					<video v-if="blobUrl" :src="blobUrl" class="video-player" controls autoplay width="709.99" height="399.995">    
    				</video>
				</iframe>
			</div>
		</div>
		<div class="cb">
		</div>
		<div class="vtg_mobile_tab_box only_mobile">
			<span class="btn_mtb vtg_gray" data-id="bet">회차선택</span>
			<span class="btn_mtb vtg_green" data-id="rst">지난결과</span>
			<span class="btn_mtb vtg_yellow" data-id="mb">배팅내역</span>
		</div>
		<div class="vtg_game_box">
			<div class="vsc_select_box">
				<div class="vsc_tab_box">
					<a href="/vscall" class="on">
					전체 </a>
					<a href="https://lg-2020.com/game/vspo/vsc/ps" class="">
					프리미어쉽 </a>
					<a href="https://lg-2020.com/game/vspo/vsc/sl" class="">
					슈퍼리그 </a>
					<a href="https://lg-2020.com/game/vspo/vsc/ec" class="">
					유로컵 </a>
					<a href="https://lg-2020.com/game/vspo/vsc/wc" class="">
					월드컵 </a>
				</div>
				<div class="vsc_list">
					<div class="info_league lg_1411499">
						Premiership
					</div>
					<div class="sports_box b_1411499">
						<div class="sports_time">
							2024-10-01 08:27:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411499">00.27</span>] <span class="vtg_min" data-id="1411499">00</span> : <span class="vtg_sec" data-id="1411499">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="울버햄프턴" data-type="home_team" data-id="1411499" data-ratio="2.01">
								<span class="odds_name_box"><span class="odds_name">울버햄프턴</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.01</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411499" data-ratio="3.45">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.45</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="왓퍼드" data-type="away_team" data-id="1411499" data-ratio="3.26">
								<div class="sp_icon_box">
									<span class="odds_ratio">3.26</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">왓퍼드</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411499" data-ratio="2.06">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.06</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411499" data-ratio="1.66">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.66</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411500">
						Superleague
					</div>
					<div class="sports_box b_1411500">
						<div class="sports_time">
							2024-10-01 08:28:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411500">00.28</span>] <span class="vtg_min" data-id="1411500">01</span> : <span class="vtg_sec" data-id="1411500">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="벤피카" data-type="home_team" data-id="1411500" data-ratio="3.16">
								<span class="odds_name_box"><span class="odds_name">벤피카</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">3.16</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411500" data-ratio="3.36">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.36</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="마드리드" data-type="away_team" data-id="1411500" data-ratio="2.06">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.06</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">마드리드</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411500" data-ratio="2.16">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.16</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411500" data-ratio="1.60">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.60</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411501">
						World Cup
					</div>
					<div class="sports_box b_1411501">
						<div class="sports_time">
							2024-10-01 08:28:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411501">00.28</span>] <span class="vtg_min" data-id="1411501">01</span> : <span class="vtg_sec" data-id="1411501">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="아르헨티나" data-type="home_team" data-id="1411501" data-ratio="2.16">
								<span class="odds_name_box"><span class="odds_name">아르헨티나</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.16</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411501" data-ratio="3.26">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.26</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="크로아티아" data-type="away_team" data-id="1411501" data-ratio="3.12">
								<div class="sp_icon_box">
									<span class="odds_ratio">3.12</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">크로아티아</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411501" data-ratio="2.35">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.35</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411501" data-ratio="1.50">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.50</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411502">
						Euro Cup
					</div>
					<div class="sports_box b_1411502">
						<div class="sports_time">
							2024-10-01 08:29:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411502">00.29</span>] <span class="vtg_min" data-id="1411502">02</span> : <span class="vtg_sec" data-id="1411502">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="헝가리" data-type="home_team" data-id="1411502" data-ratio="2.68">
								<span class="odds_name_box"><span class="odds_name">헝가리</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.68</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411502" data-ratio="3.36">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.36</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="스페인" data-type="away_team" data-id="1411502" data-ratio="2.40">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.40</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">스페인</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411502" data-ratio="2.11">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.11</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411502" data-ratio="1.63">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.63</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411503">
						Premiership
					</div>
					<div class="sports_box b_1411503">
						<div class="sports_time">
							2024-10-01 08:30:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411503">00.30</span>] <span class="vtg_min" data-id="1411503">03</span> : <span class="vtg_sec" data-id="1411503">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="이슬링턴" data-type="home_team" data-id="1411503" data-ratio="2.11">
								<span class="odds_name_box"><span class="odds_name">이슬링턴</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.11</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411503" data-ratio="3.26">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.26</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="사우샘프턴" data-type="away_team" data-id="1411503" data-ratio="3.16">
								<div class="sp_icon_box">
									<span class="odds_ratio">3.16</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">사우샘프턴</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411503" data-ratio="2.28">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.28</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411503" data-ratio="1.55">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.55</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411504">
						World Cup
					</div>
					<div class="sports_box b_1411504">
						<div class="sports_time">
							2024-10-01 08:31:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411504">00.31</span>] <span class="vtg_min" data-id="1411504">04</span> : <span class="vtg_sec" data-id="1411504">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="멕시코" data-type="home_team" data-id="1411504" data-ratio="2.40">
								<span class="odds_name_box"><span class="odds_name">멕시코</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.40</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411504" data-ratio="3.26">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.26</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="우루과이" data-type="away_team" data-id="1411504" data-ratio="2.63">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.63</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">우루과이</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411504" data-ratio="2.20">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.20</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411504" data-ratio="1.60">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.60</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411505">
						Superleague
					</div>
					<div class="sports_box b_1411505">
						<div class="sports_time">
							2024-10-01 08:31:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411505">00.31</span>] <span class="vtg_min" data-id="1411505">04</span> : <span class="vtg_sec" data-id="1411505">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="파리스" data-type="home_team" data-id="1411505" data-ratio="2.06">
								<span class="odds_name_box"><span class="odds_name">파리스</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.06</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411505" data-ratio="3.26">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.26</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="도르트문트" data-type="away_team" data-id="1411505" data-ratio="3.36">
								<div class="sp_icon_box">
									<span class="odds_ratio">3.36</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">도르트문트</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411505" data-ratio="2.35">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.35</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411505" data-ratio="1.50">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.50</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411506">
						Euro Cup
					</div>
					<div class="sports_box b_1411506">
						<div class="sports_time">
							2024-10-01 08:32:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411506">00.32</span>] <span class="vtg_min" data-id="1411506">05</span> : <span class="vtg_sec" data-id="1411506">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="알바니아" data-type="home_team" data-id="1411506" data-ratio="2.40">
								<span class="odds_name_box"><span class="odds_name">알바니아</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.40</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411506" data-ratio="2.97">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">2.97</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="폴란드" data-type="away_team" data-id="1411506" data-ratio="2.88">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.88</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">폴란드</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411506" data-ratio="2.78">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.78</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411506" data-ratio="1.38">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.38</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411507">
						Premiership
					</div>
					<div class="sports_box b_1411507">
						<div class="sports_time">
							2024-10-01 08:33:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411507">00.33</span>] <span class="vtg_min" data-id="1411507">06</span> : <span class="vtg_sec" data-id="1411507">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="유나이티드" data-type="home_team" data-id="1411507" data-ratio="2.20">
								<span class="odds_name_box"><span class="odds_name">유나이티드</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.20</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411507" data-ratio="3.36">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.36</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="첼시" data-type="away_team" data-id="1411507" data-ratio="2.88">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.88</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">첼시</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411507" data-ratio="2.16">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.16</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411507" data-ratio="1.63">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.63</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411508">
						World Cup
					</div>
					<div class="sports_box b_1411508">
						<div class="sports_time">
							2024-10-01 08:34:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411508">00.34</span>] <span class="vtg_min" data-id="1411508">07</span> : <span class="vtg_sec" data-id="1411508">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="네덜란드" data-type="home_team" data-id="1411508" data-ratio="1.92">
								<span class="odds_name_box"><span class="odds_name">네덜란드</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">1.92</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411508" data-ratio="3.36">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.36</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="캐나다" data-type="away_team" data-id="1411508" data-ratio="3.59">
								<div class="sp_icon_box">
									<span class="odds_ratio">3.59</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">캐나다</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411508" data-ratio="2.20">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.20</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411508" data-ratio="1.58">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.58</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411509">
						Superleague
					</div>
					<div class="sports_box b_1411509">
						<div class="sports_time">
							2024-10-01 08:34:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411509">00.34</span>] <span class="vtg_min" data-id="1411509">07</span> : <span class="vtg_sec" data-id="1411509">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="포르토" data-type="home_team" data-id="1411509" data-ratio="2.40">
								<span class="odds_name_box"><span class="odds_name">포르토</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.40</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411509" data-ratio="3.16">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.16</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="밀란" data-type="away_team" data-id="1411509" data-ratio="2.68">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.68</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">밀란</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411509" data-ratio="2.30">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.30</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411509" data-ratio="1.53">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.53</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411511">
						Euro Cup
					</div>
					<div class="sports_box b_1411511">
						<div class="sports_time">
							2024-10-01 08:35:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411511">00.35</span>] <span class="vtg_min" data-id="1411511">08</span> : <span class="vtg_sec" data-id="1411511">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="스페인" data-type="home_team" data-id="1411511" data-ratio="2.01">
								<span class="odds_name_box"><span class="odds_name">스페인</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.01</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411511" data-ratio="3.45">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.45</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="우크라이나" data-type="away_team" data-id="1411511" data-ratio="3.26">
								<div class="sp_icon_box">
									<span class="odds_ratio">3.26</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">우크라이나</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411511" data-ratio="2.06">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.06</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411511" data-ratio="1.66">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.66</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411512">
						Premiership
					</div>
					<div class="sports_box b_1411512">
						<div class="sports_time">
							2024-10-01 08:36:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411512">00.36</span>] <span class="vtg_min" data-id="1411512">09</span> : <span class="vtg_sec" data-id="1411512">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="팰리스" data-type="home_team" data-id="1411512" data-ratio="2.30">
								<span class="odds_name_box"><span class="odds_name">팰리스</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.30</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411512" data-ratio="3.45">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.45</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="뉴캐슬" data-type="away_team" data-id="1411512" data-ratio="2.68">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.68</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">뉴캐슬</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411512" data-ratio="1.99">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.99</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411512" data-ratio="1.72">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.72</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411513">
						World Cup
					</div>
					<div class="sports_box b_1411513">
						<div class="sports_time">
							2024-10-01 08:37:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411513">00.37</span>] <span class="vtg_min" data-id="1411513">10</span> : <span class="vtg_sec" data-id="1411513">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="브라질" data-type="home_team" data-id="1411513" data-ratio="2.16">
								<span class="odds_name_box"><span class="odds_name">브라질</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.16</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411513" data-ratio="3.45">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.45</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="독일" data-type="away_team" data-id="1411513" data-ratio="2.97">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.97</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">독일</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411513" data-ratio="1.96">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">1.96</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411513" data-ratio="1.72">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.72</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411514">
						Superleague
					</div>
					<div class="sports_box b_1411514">
						<div class="sports_time">
							2024-10-01 08:37:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411514">00.37</span>] <span class="vtg_min" data-id="1411514">10</span> : <span class="vtg_sec" data-id="1411514">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="시티" data-type="home_team" data-id="1411514" data-ratio="2.11">
								<span class="odds_name_box"><span class="odds_name">시티</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.11</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411514" data-ratio="3.45">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.45</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="바르셀로나" data-type="away_team" data-id="1411514" data-ratio="3.07">
								<div class="sp_icon_box">
									<span class="odds_ratio">3.07</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">바르셀로나</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411514" data-ratio="2.01">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.01</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411514" data-ratio="1.69">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.69</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411515">
						Euro Cup
					</div>
					<div class="sports_box b_1411515">
						<div class="sports_time">
							2024-10-01 08:38:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411515">00.38</span>] <span class="vtg_min" data-id="1411515">11</span> : <span class="vtg_sec" data-id="1411515">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="포르투갈" data-type="home_team" data-id="1411515" data-ratio="2.28">
								<span class="odds_name_box"><span class="odds_name">포르투갈</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.28</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411515" data-ratio="3.36">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.36</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="벨기에" data-type="away_team" data-id="1411515" data-ratio="2.78">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.78</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">벨기에</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411515" data-ratio="2.06">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.06</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411515" data-ratio="1.66">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.66</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411516">
						Premiership
					</div>
					<div class="sports_box b_1411516">
						<div class="sports_time">
							2024-10-01 08:39:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411516">00.39</span>] <span class="vtg_min" data-id="1411516">12</span> : <span class="vtg_sec" data-id="1411516">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="브라이턴" data-type="home_team" data-id="1411516" data-ratio="2.49">
								<span class="odds_name_box"><span class="odds_name">브라이턴</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.49</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411516" data-ratio="3.36">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.36</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="애스턴" data-type="away_team" data-id="1411516" data-ratio="2.59">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.59</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">애스턴</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411516" data-ratio="2.11">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.11</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411516" data-ratio="1.63">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.63</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411517">
						Superleague
					</div>
					<div class="sports_box b_1411517">
						<div class="sports_time">
							2024-10-01 08:40:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411517">00.40</span>] <span class="vtg_min" data-id="1411517">13</span> : <span class="vtg_sec" data-id="1411517">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="마드리드" data-type="home_team" data-id="1411517" data-ratio="2.25">
								<span class="odds_name_box"><span class="odds_name">마드리드</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.25</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411517" data-ratio="3.16">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.16</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="첼시" data-type="away_team" data-id="1411517" data-ratio="2.97">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.97</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">첼시</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411517" data-ratio="2.44">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.44</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411517" data-ratio="1.48">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.48</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411518">
						World Cup
					</div>
					<div class="sports_box b_1411518">
						<div class="sports_time">
							2024-10-01 08:40:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411518">00.40</span>] <span class="vtg_min" data-id="1411518">13</span> : <span class="vtg_sec" data-id="1411518">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="아르헨티나" data-type="home_team" data-id="1411518" data-ratio="2.16">
								<span class="odds_name_box"><span class="odds_name">아르헨티나</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.16</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411518" data-ratio="3.36">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.36</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="덴마크" data-type="away_team" data-id="1411518" data-ratio="2.97">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.97</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">덴마크</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411518" data-ratio="2.06">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.06</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411518" data-ratio="1.66">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.66</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411519">
						Euro Cup
					</div>
					<div class="sports_box b_1411519">
						<div class="sports_time">
							2024-10-01 08:41:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411519">00.41</span>] <span class="vtg_min" data-id="1411519">14</span> : <span class="vtg_sec" data-id="1411519">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="헝가리" data-type="home_team" data-id="1411519" data-ratio="2.88">
								<span class="odds_name_box"><span class="odds_name">헝가리</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.88</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411519" data-ratio="3.36">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.36</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="프랑스" data-type="away_team" data-id="1411519" data-ratio="2.25">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.25</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">프랑스</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411519" data-ratio="2.11">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.11</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411519" data-ratio="1.63">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.63</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411520">
						Premiership
					</div>
					<div class="sports_box b_1411520">
						<div class="sports_time">
							2024-10-01 08:42:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411520">00.42</span>] <span class="vtg_min" data-id="1411520">15</span> : <span class="vtg_sec" data-id="1411520">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="사우샘프턴" data-type="home_team" data-id="1411520" data-ratio="2.68">
								<span class="odds_name_box"><span class="odds_name">사우샘프턴</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.68</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411520" data-ratio="3.26">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.26</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="이슬링턴" data-type="away_team" data-id="1411520" data-ratio="2.40">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.40</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">이슬링턴</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411520" data-ratio="2.25">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.25</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411520" data-ratio="1.56">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.56</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
					<div class="info_league lg_1411521">
						Superleague
					</div>
					<div class="sports_box b_1411521">
						<div class="sports_time">
							2024-10-01 08:43:00
						</div>
						<div class="vtg_markets">
							<span class="open_markets">[<span class="vtg_round vr_1411521">00.43</span>] <span class="vtg_min" data-id="1411521">16</span> : <span class="vtg_sec" data-id="1411521">20</span> 후 마감</span>
						</div>
						<div class="s_odds">
							<div class="team_head">
								승무패
							</div>
							<div class="team_home team_3 sel_odds " data-m="승무패" data-name="셀틱" data-type="home_team" data-id="1411521" data-ratio="2.68">
								<span class="odds_name_box"><span class="odds_name">셀틱</span></span>
								<div class="sp_icon_box">
									<img src="https://lg-2020.com/static/img/icon_1x2.png"><span class="odds_ratio">2.68</span>
								</div>
							</div>
							<div class="team_draw team_3 sel_odds " data-m="승무패" data-name="무승부" data-type="draw" data-id="1411521" data-ratio="3.16">
								<span><span class="odds_name dspn">무승부</span></span><span class="odds_ratio">3.16</span>
							</div>
							<div class="team_away team_3 sel_odds" data-m="승무패" data-name="도르트문트" data-type="away_team" data-id="1411521" data-ratio="2.44">
								<div class="sp_icon_box">
									<span class="odds_ratio">2.44</span><img src="https://lg-2020.com/static/img/icon_1x2.png">
								</div>
								<span class="odds_name_box"><span class="odds_name">도르트문트</span></span>
							</div>
						</div>
						<div class="s_odds">
							<div class="team_head">
								오버언더
							</div>
							<div class="team_over team_2 sel_odds" data-m="오버언더" data-name="오버 2.5" data-type="over" data-id="1411521" data-ratio="2.40">
								<span class="odds_name_box"><span class="odds_name">오버</span><span class="odds_stan dspn">2.5</span></span>
								<div class="sp_icon_box">
									<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="odds_ratio">2.40</span>
								</div>
							</div>
							<div class="team_stan">
								2.5
							</div>
							<div class="team_under team_2 sel_odds" data-m="오버언더" data-name="언더 2.5" data-type="under" data-id="1411521" data-ratio="1.50">
								<div class="sp_icon_box">
									<span class="odds_ratio">1.50</span><i class="fas fa-arrow-down" aria-hidden="true"></i>
								</div>
								<span class="odds_name_box"><span class="odds_name">언더</span><span class="odds_stan dspn">2.5</span></span>
							</div>
						</div>
						<div class="cb">
						</div>
					</div>
				</div>
			</div>
			<div class="vtg_result_box">
				<div class="vtg_result_tab_box mdspn">
					<span class="vtg_result_tab on" data-id="rst">지난회차 결과</span>
					<span class="vtg_result_tab" data-id="mb">나의 배팅내역</span>
				</div>
				<div class="result_list mdspn">
					<ul class="result_list_ul">
						<li class="rl_ttl">
						<div class="rl_01">
							회차
						</div>
						<div class="rl_02">
							경기장
						</div>
						<div class="rl_03">
							홈팀
						</div>
						<div class="rl_04">
							VS
						</div>
						<div class="rl_05">
							원정팀
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.23
						</div>
						<div class="rl_02">
							유로컵
						</div>
						<div class="rl_03">
							벨기에
						</div>
						<div class="rl_04">
							2 : 0
						</div>
						<div class="rl_05">
							폴란드
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.22
						</div>
						<div class="rl_02">
							월드컵
						</div>
						<div class="rl_03">
							미국
						</div>
						<div class="rl_04">
							0 : 0
						</div>
						<div class="rl_05">
							아르헨티나
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.20
						</div>
						<div class="rl_02">
							유로컵
						</div>
						<div class="rl_03">
							포르투갈
						</div>
						<div class="rl_04">
							3 : 1
						</div>
						<div class="rl_05">
							루마니아
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.19
						</div>
						<div class="rl_02">
							슈퍼리그
						</div>
						<div class="rl_03">
							리버풀
						</div>
						<div class="rl_04">
							1 : 0
						</div>
						<div class="rl_05">
							벤피카
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.13
						</div>
						<div class="rl_02">
							월드컵
						</div>
						<div class="rl_03">
							스페인
						</div>
						<div class="rl_04">
							0 : 0
						</div>
						<div class="rl_05">
							포르투갈
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.12
						</div>
						<div class="rl_02">
							프리미어쉽
						</div>
						<div class="rl_03">
							뉴캐슬
						</div>
						<div class="rl_04">
							0 : 3
						</div>
						<div class="rl_05">
							유나이티드
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.11
						</div>
						<div class="rl_02">
							유로컵
						</div>
						<div class="rl_03">
							덴마크
						</div>
						<div class="rl_04">
							0 : 3
						</div>
						<div class="rl_05">
							폴란드
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.10
						</div>
						<div class="rl_02">
							슈퍼리그
						</div>
						<div class="rl_03">
							바르셀로나
						</div>
						<div class="rl_04">
							0 : 1
						</div>
						<div class="rl_05">
							포르토
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.10
						</div>
						<div class="rl_02">
							월드컵
						</div>
						<div class="rl_03">
							크로아티아
						</div>
						<div class="rl_04">
							2 : 1
						</div>
						<div class="rl_05">
							네덜란드
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.09
						</div>
						<div class="rl_02">
							프리미어쉽
						</div>
						<div class="rl_03">
							이슬링턴
						</div>
						<div class="rl_04">
							2 : 1
						</div>
						<div class="rl_05">
							왓퍼드
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.08
						</div>
						<div class="rl_02">
							유로컵
						</div>
						<div class="rl_03">
							조지아
						</div>
						<div class="rl_04">
							0 : 1
						</div>
						<div class="rl_05">
							터키
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.07
						</div>
						<div class="rl_02">
							슈퍼리그
						</div>
						<div class="rl_03">
							암스테르담
						</div>
						<div class="rl_04">
							0 : 4
						</div>
						<div class="rl_05">
							마드리드
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.07
						</div>
						<div class="rl_02">
							월드컵
						</div>
						<div class="rl_03">
							브라질
						</div>
						<div class="rl_04">
							1 : 1
						</div>
						<div class="rl_05">
							대한민국
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.06
						</div>
						<div class="rl_02">
							프리미어쉽
						</div>
						<div class="rl_03">
							시티
						</div>
						<div class="rl_04">
							0 : 0
						</div>
						<div class="rl_05">
							유나이티드
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.05
						</div>
						<div class="rl_02">
							유로컵
						</div>
						<div class="rl_03">
							프랑스
						</div>
						<div class="rl_04">
							1 : 1
						</div>
						<div class="rl_05">
							덴마크
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.04
						</div>
						<div class="rl_02">
							월드컵
						</div>
						<div class="rl_03">
							에콰도르
						</div>
						<div class="rl_04">
							0 : 2
						</div>
						<div class="rl_05">
							스위스
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.04
						</div>
						<div class="rl_02">
							슈퍼리그
						</div>
						<div class="rl_03">
							셀틱
						</div>
						<div class="rl_04">
							2 : 2
						</div>
						<div class="rl_05">
							포르토
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.03
						</div>
						<div class="rl_02">
							프리미어쉽
						</div>
						<div class="rl_03">
							에버턴
						</div>
						<div class="rl_04">
							2 : 1
						</div>
						<div class="rl_05">
							이슬링턴
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.02
						</div>
						<div class="rl_02">
							유로컵
						</div>
						<div class="rl_03">
							세르비아
						</div>
						<div class="rl_04">
							0 : 0
						</div>
						<div class="rl_05">
							네덜란드
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.01
						</div>
						<div class="rl_02">
							월드컵
						</div>
						<div class="rl_03">
							아르헨티나
						</div>
						<div class="rl_04">
							1 : 3
						</div>
						<div class="rl_05">
							카메룬
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.01
						</div>
						<div class="rl_02">
							슈퍼리그
						</div>
						<div class="rl_03">
							첼시
						</div>
						<div class="rl_04">
							0 : 2
						</div>
						<div class="rl_05">
							마드리드
						</div>
						</li>
						<li>
						<div class="rl_01">
							00.00
						</div>
						<div class="rl_02">
							프리미어쉽
						</div>
						<div class="rl_03">
							왓퍼드
						</div>
						<div class="rl_04">
							2 : 0
						</div>
						<div class="rl_05">
							첼시
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.58
						</div>
						<div class="rl_02">
							월드컵
						</div>
						<div class="rl_03">
							에콰도르
						</div>
						<div class="rl_04">
							1 : 1
						</div>
						<div class="rl_05">
							우루과이
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.58
						</div>
						<div class="rl_02">
							슈퍼리그
						</div>
						<div class="rl_03">
							유나이티드
						</div>
						<div class="rl_04">
							0 : 0
						</div>
						<div class="rl_05">
							벤피카
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.57
						</div>
						<div class="rl_02">
							프리미어쉽
						</div>
						<div class="rl_03">
							울버햄프턴
						</div>
						<div class="rl_04">
							3 : 2
						</div>
						<div class="rl_05">
							레스터
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.56
						</div>
						<div class="rl_02">
							유로컵
						</div>
						<div class="rl_03">
							오스트리아
						</div>
						<div class="rl_04">
							2 : 2
						</div>
						<div class="rl_05">
							폴란드
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.55
						</div>
						<div class="rl_02">
							슈퍼리그
						</div>
						<div class="rl_03">
							첼시
						</div>
						<div class="rl_04">
							2 : 3
						</div>
						<div class="rl_05">
							셀틱
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.55
						</div>
						<div class="rl_02">
							월드컵
						</div>
						<div class="rl_03">
							가나
						</div>
						<div class="rl_04">
							3 : 0
						</div>
						<div class="rl_05">
							벨기에
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.54
						</div>
						<div class="rl_02">
							프리미어쉽
						</div>
						<div class="rl_03">
							사우샘프턴
						</div>
						<div class="rl_04">
							2 : 1
						</div>
						<div class="rl_05">
							애스턴
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.53
						</div>
						<div class="rl_02">
							유로컵
						</div>
						<div class="rl_03">
							알바니아
						</div>
						<div class="rl_04">
							1 : 0
						</div>
						<div class="rl_05">
							스코틀랜드
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.52
						</div>
						<div class="rl_02">
							슈퍼리그
						</div>
						<div class="rl_03">
							시티
						</div>
						<div class="rl_04">
							4 : 2
						</div>
						<div class="rl_05">
							암스테르담
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.52
						</div>
						<div class="rl_02">
							월드컵
						</div>
						<div class="rl_03">
							오스트레일리아
						</div>
						<div class="rl_04">
							2 : 2
						</div>
						<div class="rl_05">
							스위스
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.51
						</div>
						<div class="rl_02">
							프리미어쉽
						</div>
						<div class="rl_03">
							뉴캐슬
						</div>
						<div class="rl_04">
							2 : 3
						</div>
						<div class="rl_05">
							번리
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.50
						</div>
						<div class="rl_02">
							유로컵
						</div>
						<div class="rl_03">
							우크라이나
						</div>
						<div class="rl_04">
							1 : 3
						</div>
						<div class="rl_05">
							오스트리아
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.49
						</div>
						<div class="rl_02">
							슈퍼리그
						</div>
						<div class="rl_03">
							파리스
						</div>
						<div class="rl_04">
							2 : 1
						</div>
						<div class="rl_05">
							밀란
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.49
						</div>
						<div class="rl_02">
							월드컵
						</div>
						<div class="rl_03">
							폴란드
						</div>
						<div class="rl_04">
							2 : 1
						</div>
						<div class="rl_05">
							모로코
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.48
						</div>
						<div class="rl_02">
							프리미어쉽
						</div>
						<div class="rl_03">
							팰리스
						</div>
						<div class="rl_04">
							1 : 3
						</div>
						<div class="rl_05">
							시티
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.47
						</div>
						<div class="rl_02">
							유로컵
						</div>
						<div class="rl_03">
							네덜란드
						</div>
						<div class="rl_04">
							2 : 2
						</div>
						<div class="rl_05">
							슬로바키아
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.46
						</div>
						<div class="rl_02">
							월드컵
						</div>
						<div class="rl_03">
							벨기에
						</div>
						<div class="rl_04">
							2 : 3
						</div>
						<div class="rl_05">
							잉글랜드
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.46
						</div>
						<div class="rl_02">
							슈퍼리그
						</div>
						<div class="rl_03">
							도르트문트
						</div>
						<div class="rl_04">
							1 : 1
						</div>
						<div class="rl_05">
							마드리드
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.45
						</div>
						<div class="rl_02">
							프리미어쉽
						</div>
						<div class="rl_03">
							웨스트햄
						</div>
						<div class="rl_04">
							3 : 0
						</div>
						<div class="rl_05">
							유나이티드
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.44
						</div>
						<div class="rl_02">
							유로컵
						</div>
						<div class="rl_03">
							조지아
						</div>
						<div class="rl_04">
							1 : 1
						</div>
						<div class="rl_05">
							스페인
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.43
						</div>
						<div class="rl_02">
							슈퍼리그
						</div>
						<div class="rl_03">
							파리스
						</div>
						<div class="rl_04">
							1 : 3
						</div>
						<div class="rl_05">
							첼시
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.43
						</div>
						<div class="rl_02">
							월드컵
						</div>
						<div class="rl_03">
							에콰도르
						</div>
						<div class="rl_04">
							1 : 1
						</div>
						<div class="rl_05">
							사우디아라비아
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.42
						</div>
						<div class="rl_02">
							프리미어쉽
						</div>
						<div class="rl_03">
							이슬링턴
						</div>
						<div class="rl_04">
							1 : 0
						</div>
						<div class="rl_05">
							레스터
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.41
						</div>
						<div class="rl_02">
							유로컵
						</div>
						<div class="rl_03">
							크로아티아
						</div>
						<div class="rl_04">
							0 : 0
						</div>
						<div class="rl_05">
							체코
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.40
						</div>
						<div class="rl_02">
							슈퍼리그
						</div>
						<div class="rl_03">
							암스테르담
						</div>
						<div class="rl_04">
							1 : 3
						</div>
						<div class="rl_05">
							셀틱
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.40
						</div>
						<div class="rl_02">
							월드컵
						</div>
						<div class="rl_03">
							크로아티아
						</div>
						<div class="rl_04">
							3 : 0
						</div>
						<div class="rl_05">
							캐나다
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.39
						</div>
						<div class="rl_02">
							프리미어쉽
						</div>
						<div class="rl_03">
							유나이티드
						</div>
						<div class="rl_04">
							2 : 2
						</div>
						<div class="rl_05">
							번리
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.38
						</div>
						<div class="rl_02">
							유로컵
						</div>
						<div class="rl_03">
							루마니아
						</div>
						<div class="rl_04">
							2 : 0
						</div>
						<div class="rl_05">
							프랑스
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.37
						</div>
						<div class="rl_02">
							슈퍼리그
						</div>
						<div class="rl_03">
							리버풀
						</div>
						<div class="rl_04">
							2 : 1
						</div>
						<div class="rl_05">
							바르셀로나
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.37
						</div>
						<div class="rl_02">
							월드컵
						</div>
						<div class="rl_03">
							에콰도르
						</div>
						<div class="rl_04">
							2 : 0
						</div>
						<div class="rl_05">
							포르투갈
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.36
						</div>
						<div class="rl_02">
							프리미어쉽
						</div>
						<div class="rl_03">
							시티
						</div>
						<div class="rl_04">
							3 : 0
						</div>
						<div class="rl_05">
							브렌트퍼드
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.35
						</div>
						<div class="rl_02">
							유로컵
						</div>
						<div class="rl_03">
							슬로바키아
						</div>
						<div class="rl_04">
							0 : 2
						</div>
						<div class="rl_05">
							알바니아
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.34
						</div>
						<div class="rl_02">
							월드컵
						</div>
						<div class="rl_03">
							세네갈
						</div>
						<div class="rl_04">
							0 : 2
						</div>
						<div class="rl_05">
							가나
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.34
						</div>
						<div class="rl_02">
							슈퍼리그
						</div>
						<div class="rl_03">
							유나이티드
						</div>
						<div class="rl_04">
							1 : 0
						</div>
						<div class="rl_05">
							암스테르담
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.33
						</div>
						<div class="rl_02">
							프리미어쉽
						</div>
						<div class="rl_03">
							브라이턴
						</div>
						<div class="rl_04">
							2 : 0
						</div>
						<div class="rl_05">
							노리치
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.32
						</div>
						<div class="rl_02">
							유로컵
						</div>
						<div class="rl_03">
							포르투갈
						</div>
						<div class="rl_04">
							0 : 1
						</div>
						<div class="rl_05">
							터키
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.31
						</div>
						<div class="rl_02">
							월드컵
						</div>
						<div class="rl_03">
							에콰도르
						</div>
						<div class="rl_04">
							2 : 1
						</div>
						<div class="rl_05">
							카타르
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.31
						</div>
						<div class="rl_02">
							슈퍼리그
						</div>
						<div class="rl_03">
							도르트문트
						</div>
						<div class="rl_04">
							1 : 0
						</div>
						<div class="rl_05">
							튜린
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.30
						</div>
						<div class="rl_02">
							프리미어쉽
						</div>
						<div class="rl_03">
							브렌트퍼드
						</div>
						<div class="rl_04">
							1 : 0
						</div>
						<div class="rl_05">
							팰리스
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.29
						</div>
						<div class="rl_02">
							유로컵
						</div>
						<div class="rl_03">
							슬로베니아
						</div>
						<div class="rl_04">
							1 : 1
						</div>
						<div class="rl_05">
							폴란드
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.28
						</div>
						<div class="rl_02">
							월드컵
						</div>
						<div class="rl_03">
							네덜란드
						</div>
						<div class="rl_04">
							2 : 1
						</div>
						<div class="rl_05">
							멕시코
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.28
						</div>
						<div class="rl_02">
							슈퍼리그
						</div>
						<div class="rl_03">
							시티
						</div>
						<div class="rl_04">
							1 : 1
						</div>
						<div class="rl_05">
							밀란
						</div>
						</li>
						<li>
						<div class="rl_01">
							23.27
						</div>
						<div class="rl_02">
							프리미어쉽
						</div>
						<div class="rl_03">
							노리치
						</div>
						<div class="rl_04">
							0 : 1
						</div>
						<div class="rl_05">
							웨스트햄
						</div>
						</li>
					</ul>
				</div>
				<div class="bet_list dspn mdspn">
					<ul class="vt_bet_list_ul">
						<li class="no_item">최근 배팅내역이 없습니다.</li>
					</ul>
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
import $ from 'jquery';
import { league } from 'vue';
import '@/assets/index.js';
//import { open_payback } from '@/static/js/base.ts';
//import '@/assets/tracking.js';
import loadLiveChat from '@/assets/livechat.js';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'vscallPage',

  data() {
    return {
		blobUrl: null,
    };
  },
  setup() {
    const isMenuOpened = ref(false);
    const isLoginVisible = ref(false);
    const isLoginVisible2 = ref(true);
	const isExpanded = ref(false);
	var game_cate = 'vsc';
	var league = 'all';
	var min_bet = 5000;
	var max_bet = 3000000;
	var max_get = 10000000;
	var max_ratio = 100;
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
	$('.btn_mtb').on('click',function(){
		var id = $(this).attr('data-id');
		switch(id){
			case 'bet' :
				$('.vsc_select_box').removeClass('mdspn');
				$('.result_list').addClass('mdspn');
				$('.bet_list').addClass('mdspn');
			break;
			case 'rst' :
				$('.result_list').removeClass('mdspn');
				$('.result_list').removeClass('dspn');
				$('.vsc_select_box').addClass('mdspn');
				$('.bet_list').addClass('mdspn');
				$('.bet_list').addClass('dspn');
				$('.vtg_result_tab').removeClass('on');
				$('.vtg_result_tab[data-id=rst]').addClass('on');
			break;
			case 'mb' :
				$('.result_list').addClass('mdspn');
				$('.result_list').addClass('dspn');
				$('.vsc_select_box').addClass('mdspn');
				$('.bet_list').removeClass('mdspn');
				$('.bet_list').removeClass('dspn');
				$('.vtg_result_tab').removeClass('on');
				$('.vtg_result_tab[data-id=mb]').addClass('on');
			break;
		}
	});
	$('.vtg_result_tab').on('click',function(){
		var id = $(this).attr('data-id');
		$('.vtg_result_tab').removeClass('on');
		$(this).addClass('on');
		switch(id){
			case 'bet' :
				$('.vsc_select_box').removeClass('mdspn');
				$('.result_list').addClass('mdspn');
				$('.bet_list').addClass('mdspn');
			break;
			case 'rst' :
				$('.result_list').removeClass('mdspn');
				$('.result_list').removeClass('dspn');
				$('.vsc_select_box').addClass('mdspn');
				$('.bet_list').addClass('mdspn');
				$('.bet_list').addClass('dspn');
			break;
			case 'mb' :
				$('.result_list').addClass('mdspn');
				$('.result_list').addClass('dspn');
				$('.vsc_select_box').addClass('mdspn');
				$('.bet_list').removeClass('mdspn');
				$('.bet_list').removeClass('dspn');
			break;
		}
	});
	$('.btn_scr').on('click',function(){
		$('.btn_scr').removeClass('on');
		$(this).addClass('on');
		var id = $(this).attr('data-id');
		switch (id)
		{
			case 'all':
			case 'ps':
				frurl = 'https://b1.nutv365.com/ios/?vn=1';
			break;
			case 'sl':
				frurl = 'https://b1.nutv365.com/ios/?vn=2';
			break;
			case 'ec':
				frurl = 'https://b1.nutv365.com/ios/?vn=13';
			break;
			case 'wc':
				frurl = 'https://b1.nutv365.com/ios/?vn=3';
			break;
		}
		$('.ifr_01').attr('src',frurl+"&sw="+$('.virtual_box').width()+"&sh="+$('.virtual_box').height());
	});
	var frurl;
	switch (league)
	{
		case 'all':
		case 'ps':
			frurl = 'https://b1.nutv365.com/ios/?vn=1';
		break;
		case 'sl':
			frurl = 'https://b1.nutv365.com/ios/?vn=2';
		break;
		case 'ec':
			frurl = 'https://b1.nutv365.com/ios/?vn=13';
		break;
		case 'wc':
			frurl = 'https://b1.nutv365.com/ios/?vn=3';
		break;
	}
	$('.ifr_01').attr('src',frurl+"&sw="+$('.virtual_box').width()+"&sh="+$('.virtual_box').height());
});
this.createBlobUrl(); 
  },
  
  methods: {
    refreshPage() {
      location.reload();
    },
	createBlobUrl() {
      const videoSource = 'https://b1.nutv365.com/37f7882c-0232-4c57-8aff-ba652723cd31'; // 실제 비디오 소스
      // 예를 들어, fetch를 통해 blob 데이터를 받아와야 할 경우
      fetch(videoSource)
        .then(response => response.blob())
        .then(blob => {
          this.blobUrl = URL.createObjectURL(blob); // blob URL 생성
        })
        .catch(error => console.error('Error fetching video:', error));
    },
  },
  beforeUnmount() {
    // 컴포넌트가 사라질 때 blob URL 해제
    if (this.blobUrl) {
      URL.revokeObjectURL(this.blobUrl);
    }
  },   
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