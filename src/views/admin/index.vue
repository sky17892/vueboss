<template>
    <header id="header" class="header fixed-top d-flex align-items-center">

<div class="d-flex align-items-center justify-content-between">
  <a href="/admin/index" class="logo d-flex align-items-center">
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
      <!--<li class="breadcrumb-item active">관리자페이지</li>-->
      <li class="breadcrumb-item"><a href="/admin/dedb">출금관리</a></li>
      <li class="breadcrumb-item"><a href="/admin/widb">환전관리</a></li>
      <li class="breadcrumb-item"><a href="/admin/userdb">유저관리</a></li>
    </ol>
  </nav>
</div><!-- End Page Title -->

<section class="section dashboard">
  <div class="row">

    <!-- Left side columns -->
    <div class="col-lg-8">
      <div class="row">

        <!-- Sales Card -->
        <div class="col-xxl-4 col-md-6">
          <div class="card info-card sales-card">

            <!--<div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>-->

            <div class="card-body">
              <h5 class="card-title">Sales <span>| Today</span></h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-cart"></i>
                </div>
                <div class="ps-3">
                  <h6>145</h6>
                  <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                </div>
              </div>
            </div>

          </div>
        </div><!-- End Sales Card -->

        <!-- Revenue Card -->
        <div class="col-xxl-4 col-md-6">
          <div class="card info-card revenue-card">

            <!--<div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>-->

            <div class="card-body">
              <h5 class="card-title">Revenue <span>| This Month</span></h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-currency-dollar"></i>
                </div>
                <div class="ps-3">
                  <h6>$3,264</h6>
                  <span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                </div>
              </div>
            </div>

          </div>
        </div><!-- End Revenue Card -->

        <!-- Customers Card -->
        <div class="col-xxl-4 col-xl-12">

          <div class="card info-card customers-card">

            <!--<div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>-->

            <div class="card-body">
              <h5 class="card-title">Customers <span>| This Year</span></h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-people"></i>
                </div>
                <div class="ps-3">
                  <h6>1244</h6>
                  <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>

                </div>
              </div>

            </div>
          </div>

        </div><!-- End Customers Card -->

        <!-- Reports -->
        <div class="col-12">
          <div class="card">

            <!--<div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>-->

            <div class="card-body">
              <h5 class="card-title">Reports <span>/Today</span></h5>

              <!-- Line Chart -->
              <div id="reportsChart"></div>

            </div>

          </div>
        </div><!-- End Reports -->

        <!-- Recent Sales -->
        <div class="col-12">
          <div class="card recent-sales overflow-auto">

           <!-- <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>-->

            <div class="card-body">
              <h5 class="card-title">Recent Sales <span>| Today</span></h5>

              <table class="table table-borderless datatable">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><a href="#">#2457</a></th>
                    <td>Brandon Jacob</td>
                    <td><a href="#" class="text-primary">At praesentium minu</a></td>
                    <td>$64</td>
                    <td><span class="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">#2147</a></th>
                    <td>Bridie Kessler</td>
                    <td><a href="#" class="text-primary">Blanditiis dolor omnis similique</a></td>
                    <td>$47</td>
                    <td><span class="badge bg-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">#2049</a></th>
                    <td>Ashleigh Langosh</td>
                    <td><a href="#" class="text-primary">At recusandae consectetur</a></td>
                    <td>$147</td>
                    <td><span class="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">#2644</a></th>
                    <td>Angus Grady</td>
                    <td><a href="#" class="text-primar">Ut voluptatem id earum et</a></td>
                    <td>$67</td>
                    <td><span class="badge bg-danger">Rejected</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#">#2644</a></th>
                    <td>Raheem Lehner</td>
                    <td><a href="#" class="text-primary">Sunt similique distinctio</a></td>
                    <td>$165</td>
                    <td><span class="badge bg-success">Approved</span></td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>
        </div><!-- End Recent Sales -->

        <!-- Top Selling -->
        <div class="col-12">
          <div class="card top-selling overflow-auto">

           <!-- <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>-->

            <div class="card-body pb-0">
              <h5 class="card-title">Top Selling <span>| Today</span></h5>

              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Preview</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Sold</th>
                    <th scope="col">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><a href="#"><img src="https://bootstrapmade.com/demo/NiceAdmin/assets/img/product-1.jpg" alt=""></a></th>
                    <td><a href="#" class="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                    <td>$64</td>
                    <td class="fw-bold">124</td>
                    <td>$5,828</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#"><img src="https://bootstrapmade.com/demo/NiceAdmin/assets/img/product-2.jpg" alt=""></a></th>
                    <td><a href="#" class="text-primary fw-bold">Exercitationem similique doloremque</a></td>
                    <td>$46</td>
                    <td class="fw-bold">98</td>
                    <td>$4,508</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#"><img src="https://bootstrapmade.com/demo/NiceAdmin/assets/img/product-3.jpg" alt=""></a></th>
                    <td><a href="#" class="text-primary fw-bold">Doloribus nisi exercitationem</a></td>
                    <td>$59</td>
                    <td class="fw-bold">74</td>
                    <td>$4,366</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#"><img src="https://bootstrapmade.com/demo/NiceAdmin/assets/img/product-4.jpg" alt=""></a></th>
                    <td><a href="#" class="text-primary fw-bold">Officiis quaerat sint rerum error</a></td>
                    <td>$32</td>
                    <td class="fw-bold">63</td>
                    <td>$2,016</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="#"><img src="https://bootstrapmade.com/demo/NiceAdmin/assets/img/product-5.jpg" alt=""></a></th>
                    <td><a href="#" class="text-primary fw-bold">Sit unde debitis delectus repellendus</a></td>
                    <td>$79</td>
                    <td class="fw-bold">41</td>
                    <td>$3,239</td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>
        </div><!-- End Top Selling -->

      </div>
    </div><!-- End Left side columns -->

    <!-- Right side columns -->
    <div class="col-lg-4">

      <!-- Recent Activity -->
      <div class="card">
        <!--<div class="filter">
          <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li class="dropdown-header text-start">
              <h6>Filter</h6>
            </li>

            <li><a class="dropdown-item" href="#">Today</a></li>
            <li><a class="dropdown-item" href="#">This Month</a></li>
            <li><a class="dropdown-item" href="#">This Year</a></li>
          </ul>
        </div>-->

        <div class="card-body">
          <h5 class="card-title">Recent Activity <span>| Today</span></h5>

          <div class="activity">
	<div class="activity-item d-flex">
		<div class="activite-label">
			32 min
		</div>
		<i class="bi bi-circle-fill activity-badge text-success align-self-start"></i>
		<div class="activity-content">
			 Quia quae rerum <a href="#" class="fw-bold text-dark">explicabo officiis</a> beatae
		</div>
	</div>
	<!-- End activity item-->
	<div class="activity-item d-flex">
		<div class="activite-label">
			56 min
		</div>
		<i class="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
		<div class="activity-content">
			 Voluptatem blanditiis blanditiis eveniet
		</div>
	</div>
	<!-- End activity item-->
	<div class="activity-item d-flex">
		<div class="activite-label">
			2 hrs
		</div>
		<i class="bi bi-circle-fill activity-badge text-primary align-self-start"></i>
		<div class="activity-content">
			 Voluptates corrupti molestias voluptatem
		</div>
	</div>
	<!-- End activity item-->
	<div class="activity-item d-flex">
		<div class="activite-label">
			1 day
		</div>
		<i class="bi bi-circle-fill activity-badge text-info align-self-start"></i>
		<div class="activity-content">
			 Tempore autem saepe <a href="#" class="fw-bold text-dark">occaecati voluptatem</a> tempore
		</div>
	</div>
	<!-- End activity item-->
	<div class="activity-item d-flex">
		<div class="activite-label">
			2 days
		</div>
		<i class="bi bi-circle-fill activity-badge text-warning align-self-start"></i>
		<div class="activity-content">
			 Est sit eum reiciendis exercitationem
		</div>
	</div>
	<!-- End activity item-->
	<div class="activity-item d-flex">
		<div class="activite-label">
			4 weeks
		</div>
		<i class="bi bi-circle-fill activity-badge text-muted align-self-start"></i>
		<div class="activity-content">
			 Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
		</div>
	</div>
	<!-- End activity item-->
</div>

        </div>
      </div><!-- End Recent Activity -->

      <!-- Budget Report -->
      <div class="card">
        <!--<div class="filter">
          <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li class="dropdown-header text-start">
              <h6>Filter</h6>
            </li>

            <li><a class="dropdown-item" href="#">Today</a></li>
            <li><a class="dropdown-item" href="#">This Month</a></li>
            <li><a class="dropdown-item" href="#">This Year</a></li>
          </ul>
        </div>-->

        <!--<div class="card-body pb-0">
          <h5 class="card-title">Budget Report <span>| This Month</span></h5>

          <div id="budgetChart" style="min-height: 400px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);" class="echart" _echarts_instance_="ec_1727564514688">
	<div style="position: relative; width: 291px; height: 400px; padding: 0px; margin: 0px; border-width: 0px; cursor: pointer;">
		<canvas data-zr-dom-id="zr_0" width="306" height="420" style="position: absolute; left: 0px; top: 0px; width: 291px; height: 400px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
	</div>
</div>

          </div>-->
      </div><!-- End Budget Report -->

      <!-- Website Traffic -->
      <div class="card">
        <!--<div class="filter">
          <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li class="dropdown-header text-start">
              <h6>Filter</h6>
            </li>

            <li><a class="dropdown-item" href="#">Today</a></li>
            <li><a class="dropdown-item" href="#">This Month</a></li>
            <li><a class="dropdown-item" href="#">This Year</a></li>
          </ul>
        </div>-->

        <!--<div class="card-body pb-0">
          <h5 class="card-title">Website Traffic <span>| Today</span></h5>

          <div id="trafficChart" style="min-height: 400px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); position: relative;" class="echart" _echarts_instance_="ec_1727564514689">
	<div style="position: relative; width: 291px; height: 400px; padding: 0px; margin: 0px; border-width: 0px; cursor: pointer;">
		<canvas data-zr-dom-id="zr_0" width="306" height="420" style="position: absolute; left: 0px; top: 0px; width: 291px; height: 400px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
	</div>
	<div class="" style="position: absolute; display: block; border-style: solid; white-space: nowrap; z-index: 9999999; box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 10px; transition: opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1), visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1), transform 0.4s cubic-bezier(0.23, 1, 0.32, 1); background-color: rgb(255, 255, 255); border-width: 1px; border-radius: 4px; color: rgb(102, 102, 102); font: 14px / 21px &quot;Microsoft YaHei&quot;; padding: 10px; top: 0px; left: 0px; transform: translate3d(27px, 162px, 0px); border-color: rgb(238, 102, 102); pointer-events: none; visibility: hidden; opacity: 0;">
		<div style="margin: 0px 0 0;line-height:1;">
			<div style="font-size:14px;color:#666;font-weight:400;line-height:1;">
				Access From
			</div>
			<div style="margin: 10px 0 0;line-height:1;">
				<div style="margin: 0px 0 0;line-height:1;">
					<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#ee6666;"></span><span style="font-size:14px;color:#666;font-weight:400;margin-left:2px">Union Ads</span><span style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:900">484</span>
					<div style="clear:both">
					</div>
				</div>
				<div style="clear:both">
				</div>
			</div>
			<div style="clear:both">
			</div>
		</div>
	</div>
</div>

        </div>-->
      </div><!-- End Website Traffic -->

      <!-- News & Updates Traffic -->
      <div class="card">    
        <!--<div class="filter">
          <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li class="dropdown-header text-start">
              <h6>Filter</h6>
            </li>

            <li><a class="dropdown-item" href="#">Today</a></li>
            <li><a class="dropdown-item" href="#">This Month</a></li>
            <li><a class="dropdown-item" href="#">This Year</a></li>
          </ul>
        </div>-->

        <div class="card-body pb-0">
          <h5 class="card-title">News &amp; Updates <span>| Today</span></h5><br>
          <ul>
        <li v-for="item in data" :key="item.id"><input type="hidden" v-model="item.bid"></li>
      </ul>
          <div class="news">
            <div class="post-item clearfix">
              <img src="https://bootstrapmade.com/demo/NiceAdmin/assets/img/news-1.jpg" alt="">
              <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
              <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
            </div>

            <div class="post-item clearfix">
              <img src="https://bootstrapmade.com/demo/NiceAdmin/assets/img/news-2.jpg" alt="">
              <h4><a href="#">Quidem autem et impedit</a></h4>
              <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
            </div>

            <div class="post-item clearfix">
              <img src="https://bootstrapmade.com/demo/NiceAdmin/assets/img/news-3.jpg" alt="">
              <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
              <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
            </div>

            <div class="post-item clearfix">
              <img src="https://bootstrapmade.com/demo/NiceAdmin/assets/img/news-4.jpg" alt="">
              <h4><a href="#">Laborum corporis quo dara net para</a></h4>
              <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
            </div>

            <div class="post-item clearfix">
              <img src="https://bootstrapmade.com/demo/NiceAdmin/assets/img/news-5.jpg" alt="">
              <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
              <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
            </div>

          </div><!-- End sidebar recent posts-->

        </div>
      </div><!-- End News & Updates -->

    </div><!-- End Right side columns -->

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
  import { useRouter } from 'vue-router'; 
  
  export default defineComponent({
    name: 'aindexPage',

  created() {
    this.checkLoginStatus();
  },

  mounted() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
    document.head.appendChild(link);
  },

  methods: {
    checkLoginStatus() {
      axios.get('http://localhost:3000/api/user')
        .then(response => {
          const isLoggedIn = response.data[0]?.loggedIn; // 안전하게 접근
          if (isLoggedIn === 'popo111') {           
            location.href = '/admin/index';
          } 
        })
        .catch(error => {
          console.error('로그인 상태 확인 중 오류 발생:', error);
          // 오류 발생 시 기본 페이지로 이동
          location.href = '/';
        });
    }
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

<style scoped>
.wrap{
  width:2000px;
  height:100%;
  background:#090909;
}
</style>
<style scoped>
.cls-1{fill:#858e99;}
				</style>
  