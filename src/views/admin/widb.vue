<template>
    <header id="header" class="header fixed-top d-flex align-items-center">

<div class="d-flex align-items-center justify-content-between">
  <a href="/admin/dedb" class="logo d-flex align-items-center">
    <img src="https://bootstrapmade.com/demo/NiceAdmin/assets/img/logo.png" alt="">
    <span class="d-none d-lg-block">Admin</span>
  </a>
  <i class="bi bi-list toggle-sidebar-btn"></i>
</div><!-- End Logo -->

<div class="search-bar">
  <form class="search-form d-flex align-items-center" method="GET" action="/admin/index">
    <input type="text" name="query" placeholder="Search" title="Enter search keyword">
    <button type="submit" title="Search"><i class="bi bi-search"></i></button>
  </form>
</div><!-- End Search Bar -->

<nav class="header-nav ms-auto">
  <!--<ul class="d-flex align-items-center">

    <li class="nav-item d-block d-lg-none">
      <a class="nav-link nav-icon search-bar-toggle " href="#">
        <i class="bi bi-search"></i>
      </a>
    </li>

    <li class="nav-item dropdown">

      <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i class="bi bi-bell"></i>
        <span class="badge bg-primary badge-number">4</span>
      </a>

      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li class="dropdown-header">
          You have 4 new notifications
          <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li class="notification-item">
          <i class="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>30 min. ago</p>
          </div>
        </li>

        <li>
          <hr class="dropdown-divider">
        </li>

        <li class="notification-item">
          <i class="bi bi-x-circle text-danger"></i>
          <div>
            <h4>Atque rerum nesciunt</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>1 hr. ago</p>
          </div>
        </li>

        <li>
          <hr class="dropdown-divider">
        </li>

        <li class="notification-item">
          <i class="bi bi-check-circle text-success"></i>
          <div>
            <h4>Sit rerum fuga</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>2 hrs. ago</p>
          </div>
        </li>

        <li>
          <hr class="dropdown-divider">
        </li>

        <li class="notification-item">
          <i class="bi bi-info-circle text-primary"></i>
          <div>
            <h4>Dicta reprehenderit</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>4 hrs. ago</p>
          </div>
        </li>

        <li>
          <hr class="dropdown-divider">
        </li>
        <li class="dropdown-footer">
          <a href="#">Show all notifications</a>
        </li>

      </ul>

    </li>

    <li class="nav-item dropdown">

      <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i class="bi bi-chat-left-text"></i>
        <span class="badge bg-success badge-number">3</span>
      </a>

      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li class="dropdown-header">
          You have 3 new messages
          <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li class="message-item">
          <a href="#">
            <img src="assets/img/messages-1.jpg" alt="" class="rounded-circle">
            <div>
              <h4>Maria Hudson</h4>
              <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li class="message-item">
          <a href="#">
            <img src="assets/img/messages-2.jpg" alt="" class="rounded-circle">
            <div>
              <h4>Anna Nelson</h4>
              <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p>6 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li class="message-item">
          <a href="#">
            <img src="assets/img/messages-3.jpg" alt="" class="rounded-circle">
            <div>
              <h4>David Muldon</h4>
              <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p>8 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li class="dropdown-footer">
          <a href="#">Show all messages</a>
        </li>

      </ul>

    </li>

    <li class="nav-item dropdown pe-3">

      <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
        <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle">
        <span class="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
      </a>

      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li class="dropdown-header">
          <h6>Kevin Anderson</h6>
          <span>Web Designer</span>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li>
          <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
            <i class="bi bi-person"></i>
            <span>My Profile</span>
          </a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li>
          <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
            <i class="bi bi-gear"></i>
            <span>Account Settings</span>
          </a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li>
          <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
            <i class="bi bi-question-circle"></i>
            <span>Need Help?</span>
          </a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>

        <li>
          <a class="dropdown-item d-flex align-items-center" href="#">
            <i class="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </a>
        </li>

      </ul>
    </li>

  </ul>-->
</nav><!-- End Icons Navigation -->

</header><!-- End Header -->

<main id="main" class="main">
<br>
<div class="pagetitle">
  <h1>관리자페이지</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/admin/index">Home</a></li>
      <li class="breadcrumb-item active">환전관리</li>
    </ol>
  </nav>
</div><!-- End Page Title -->

<section class="section">
<div class="row">
	<div class="col-lg-12">
		<div class="card">
			<div class="card-body">
				<h5 class="card-title">Datatables</h5>
				<p>
					Add lightweight datatables to your project with using the <a href="https://github.com/fiduswriter/Simple-DataTables" target="_blank">Simple DataTables</a> library. Just add <code>.datatable</code> class name to any table you wish to conver to a datatable. Check for <a href="https://fiduswriter.github.io/simple-datatables/demos/" target="_blank">more examples</a>.
				</p>
				<!-- Table with stripped rows -->
				<div class="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
					<div class="datatable-top">
						<div class="datatable-dropdown">
							<label>
                <select class="datatable-selector" v-model="pagination.perPage" @change="updateTable">
            <option value="5">5</option>
            <option value="10" selected>10</option>
            <option value="15">15</option>
            <option value="100">All</option>
        </select>
							 entries per page </label>
						</div>
						<div class="datatable-search">
							<input class="datatable-input" placeholder="Search..." type="search" name="search" title="Search within table">
						</div>
					</div>
					<div class="datatable-container">
						<table class="table datatable datatable-table">
						<thead>
						<tr>
              <th data-sortable="true" style="width: 16.827537260468414%;">
								<button class="datatable-sorter">
								num </button>
							</th>
							<th data-sortable="true" style="width: 16.827537260468414%;">
								<button class="datatable-sorter">
								<b>T</b>ype </button>
							</th>
							<th data-sortable="true" style="width: 9.155429382540808%;">
								<button class="datatable-sorter">money</button>
							</th>
							<th data-sortable="true" style="width: 18.53087295954578%;">
								<button class="datatable-sorter">name</button>
							</th>
							<th data-format="YYYY/DD/MM" data-sortable="true" data-type="date" style="width: 26.962384669978707%;">
								<button class="datatable-sorter">date</button>
							</th>
              <th data-format="true" data-sortable="true" data-type="date" style="width: 11.155429382540808%;">
								<button class="datatable-sorter">state</button>
							</th>
						</tr>
						</thead>
						<tbody>
						<!--<tr data-index="0">
							<td>
								Unity Pugh
							</td>
							<td>
								9958
							</td>
							<td>
								Curicó
							</td>
							<td>
								2005/02/11
							</td>
							<td class="green">
								37%
							</td>
						</tr>
						<tr data-index="1">
							<td>
								Theodore Duran
							</td>
							<td>
								8971
							</td>
							<td>
								Dhanbad
							</td>
							<td>
								1999/04/07
							</td>
							<td class="green">
								97%
							</td>
						</tr>
						<tr data-index="2">
							<td>
								Kylie Bishop
							</td>
							<td>
								3147
							</td>
							<td>
								Norman
							</td>
							<td>
								2005/09/08
							</td>
							<td class="green">
								63%
							</td>
						</tr>
						<tr data-index="3">
							<td>
								Willow Gilliam
							</td>
							<td>
								3497
							</td>
							<td>
								Amqui
							</td>
							<td>
								2009/29/11
							</td>
							<td class="green">
								30%
							</td>
						</tr>
						<tr data-index="4">
							<td>
								Blossom Dickerson
							</td>
							<td>
								5018
							</td>
							<td>
								Kempten
							</td>
							<td>
								2006/11/09
							</td>
							<td class="green">
								17%
							</td>
						</tr>
						<tr data-index="5">
							<td>
								Elliott Snyder
							</td>
							<td>
								3925
							</td>
							<td>
								Enines
							</td>
							<td>
								2006/03/08
							</td>
							<td class="green">
								57%
							</td>
						</tr>
						<tr data-index="6">
							<td>
								Castor Pugh
							</td>
							<td>
								9488
							</td>
							<td>
								Neath
							</td>
							<td>
								2014/23/12
							</td>
							<td class="green">
								93%
							</td>
						</tr>
						<tr data-index="7">
							<td>
								Pearl Carlson
							</td>
							<td>
								6231
							</td>
							<td>
								Cobourg
							</td>
							<td>
								2014/31/08
							</td>
							<td class="green">
								100%
							</td>
						</tr>
						<tr data-index="8">
							<td>
								Deirdre Bridges
							</td>
							<td>
								1579
							</td>
							<td>
								Eberswalde-Finow
							</td>
							<td>
								2014/26/08
							</td>
							<td class="green">
								44%
							</td>
						</tr>
						<tr data-index="9">
							<td>
								Daniel Baldwin
							</td>
							<td>
								6095
							</td>
							<td>
								Moircy
							</td>
							<td>
								2000/11/01
							</td>
							<td class="green">
								33%
							</td>
						</tr>-->
            <tr v-for="item in paginatedData" :key="item.id">
                    <td>{{ item.wid }}</td>
                    <td>{{ item.wtype }}</td>
                    <td>{{ item.wtmoney }}</td>
                    <td>{{ item.wtname }}</td>
                    <td>{{ item.wtdate }}</td>
                    <td>{{ item.wtstate }}</td>
                </tr>
						</tbody>
						</table>
					</div>
					<!--<div class="datatable-bottom">
						<div class="datatable-info">
							Showing 1 to 10 of 100 entries
						</div>
						<nav class="datatable-pagination">
						<ul class="datatable-pagination-list">
							<li class="datatable-pagination-list-item datatable-hidden datatable-disabled"><button data-page="1" class="datatable-pagination-list-item-link" aria-label="Page 1">‹</button></li>
							<li class="datatable-pagination-list-item datatable-active"><button data-page="1" class="datatable-pagination-list-item-link" aria-label="Page 1">1</button></li>
							<li class="datatable-pagination-list-item"><button data-page="2" class="datatable-pagination-list-item-link" aria-label="Page 2">2</button></li>
							<li class="datatable-pagination-list-item"><button data-page="3" class="datatable-pagination-list-item-link" aria-label="Page 3">3</button></li>
							<li class="datatable-pagination-list-item"><button data-page="4" class="datatable-pagination-list-item-link" aria-label="Page 4">4</button></li>
							<li class="datatable-pagination-list-item"><button data-page="5" class="datatable-pagination-list-item-link" aria-label="Page 5">5</button></li>
							<li class="datatable-pagination-list-item"><button data-page="6" class="datatable-pagination-list-item-link" aria-label="Page 6">6</button></li>
							<li class="datatable-pagination-list-item"><button data-page="7" class="datatable-pagination-list-item-link" aria-label="Page 7">7</button></li>
							<li class="datatable-pagination-list-item datatable-ellipsis datatable-disabled"><button class="datatable-pagination-list-item-link">…</button></li>
							<li class="datatable-pagination-list-item"><button data-page="10" class="datatable-pagination-list-item-link" aria-label="Page 10">10</button></li>
							<li class="datatable-pagination-list-item"><button data-page="2" class="datatable-pagination-list-item-link" aria-label="Page 2">›</button></li>
						</ul>
						</nav>
					</div>-->
				</div>
				<!-- End Table with stripped rows -->
			</div>
		</div>
	</div>
</div>
</section>

</main><!-- End #main -->

<!-- ======= Footer ======= -->
<footer id="footer" class="footer">
<div class="copyright">
  &copy; Copyright <strong><span>Admin</span></strong>. All Rights Reserved
</div>
<div class="credits">
  <!-- All the links in the footer should remain intact. -->
  <!-- You can delete the links only if you purchased the pro version. -->
  <!-- Licensing information: https://bootstrapmade.com/license/ -->
  <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
</div>
</footer><!-- End Footer -->

<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  </template>

<script>
  import axios from 'axios';
  //import '@/assets/index.js';
  //import loadLiveChat from '@/assets/livechat.js';
  import { defineComponent, ref, onMounted } from 'vue';
  import { database } from '@/firebase';
  import { ref as dbRef, onValue } from "firebase/database";
  
  export default defineComponent({
    name: 'awidbPage',

    data() {
        return {
            data: [], // 원본 데이터 배열
            pagination: {
                perPage: 10, // 초기 페이지 크기
                currentPage: 1 // 현재 페이지
            },
/*data: [
        { id: 1, name: 'Alice', age: 30, bdate: '2021/03/12' },
        { id: 2, name: 'Bob', age: 25, bdate: '2022/03/12' },
        { id: 3, name: 'wegwe', age: 35, bdate: '2023/03/12' },
        { id: 4, name: 'hhhtr', age: 36, bdate: '2024/03/12' },
        { id: 5, name: 'whweh', age: 37, bdate: '2021/05/12' },
        { id: 6, name: 'sd', age: 45, bdate: '2022/05/12' },
        { id: 7, name: 'Chawhwhrlie', age: 56, bdate: '2023/05/16' },
        { id: 8, name: 'opoprr', age: 75, bdate: '2024/01/11' },
        { id: 9, name: 'hrngn', age: 67, bdate: '2024/02/11' },
        { id: 10, name: 'eheeew', age: 21, bdate: '2024/03/20' },
      ],*/
        };
    },   
    computed: {
        paginatedData() {
            if (!this.data || this.data.length === 0) {
                return [];
            }
            if (this.pagination.perPage === 100) {
                return this.data;
            }
            const start = (this.pagination.currentPage - 1) * this.pagination.perPage;
            return this.data.slice(start, start + this.pagination.perPage);
        },
        totalPages() {
            return Math.ceil(this.data.length / this.pagination.perPage);
        }
    },
    methods: {
        fetchData() {
            axios.get('http://localhost:3000/api/withdrawal')
                .then(response => {
                    this.data = response.data; // API 호출로 데이터를 저장
                })
                .catch(error => {
                    console.error(error);
                });
        },
        updateTable() {
            this.pagination.currentPage = 1; // 페이지 크기 변경 시 첫 페이지로 리셋
        }
    },
    created() {
        this.fetchData(); // 컴포넌트가 생성될 때 데이터 가져오기
    },
    mounted() {

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
document.head.appendChild(link);

}
});
  </script>

   <style scoped>
  @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css');
  @import url('https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css');
  @import url('https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css');
  @import url('https://unpkg.com/boxicons@latest/css/boxicons.min.css');
  @import url('https://fonts.gstatic.com/');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap/css/bootstrap-grid.rtl.min.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap/css/bootstrap.min.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap/css/bootstrap.rtl.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap/css/bootstrap.rtl.min.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap/css/bootstrap-grid.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap/css/bootstrap-grid.min.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap/css/bootstrap-reboot.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap/css/bootstrap-reboot.min.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap/css/bootstrap-reboot.rtl.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap/css/bootstrap-utilities.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap/css/bootstrap-utilities.min.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap/css/bootstrap-utilities.rtl.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap-icons/bootstrap-icons.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap-icons/bootstrap-icons.min.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap-icons/bootstrap-icons.woff');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap-icons/bootstrap-icons.woff2');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/bootstrap-icons/bootstrap-icons.scss');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/boxicons/css/boxicons.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/boxicons/css/boxicons.min.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/boxicons/css/animations.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/boxicons/css/transformations.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/boxicons/fonts/boxicons.eot');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/boxicons/fonts/boxicons.svg');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/boxicons/fonts/boxicons.ttf');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/boxicons/fonts/boxicons.woff');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/boxicons/fonts/boxicons.woff2');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/quill/quill.snow.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/quill/quill.bubble.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/quill/quill.core.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/remixicon/remixicon.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/remixicon/remixicon.eot');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/remixicon/remixicon.glyph.json');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/remixicon/remixicon.less');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/remixicon/remixicon.svg');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/remixicon/remixicon.symbol.svg');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/remixicon/remixicon.ttf');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/remixicon/remixicon.woff');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/remixicon/remixicon.woff2');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/vendor/simple-datatables/style.css');
  @import url('https://bootstrapmade.com/demo/NiceAdmin/assets/css/style.css');
</style>
  