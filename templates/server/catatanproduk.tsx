<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="../static/EduBooks.png" type="image/png">


    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css"
    />
    <head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <title>Produk</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM9cl07n8Z7w/RSYsl3d5C6T7Z5aXhb4Z9Or8au" crossorigin="anonymous">

    <link
      href="https://fonts.googleapis.com/css2?family=Jua&display=swap"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        font-family: "Poppins", serif;
      }
      * { font-family: "Poppins", serif; }
        .carousel .slide-inner { position: relative; overflow: hidden; display: flex; }
        .carousel .slide-item { display: none; flex: 1 0 100%; }
        .carousel .slide-item.active { display: block; }
        .control-prev, .control-next {
            position: absolute; top: 50%; transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.3); border: none; padding: 10px; cursor: pointer; color: white;
        }
        .control-prev { left: 10px; }
        .control-next { right: 10px; }

        .btn-outline-black:hover{
          background-color: #5D76E1;
          color: white;
          border-color: #FFFFFF;
        }
        .btn-outline-black {
          color: black;
          border-color: black;
        }

        .box {
          width: 50%;
          margin: 0 ;
          height: auto;
          border-radius: 15px;
        }
        .box .slide-inner img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 15px;

        }
        .child-box {
          width: 25rem;
          margin: 0;
          padding: 0;
          height: 13.5rem;
          border-radius: 15px;
        }
        .nav-item{
          color:black
        }
        * {
          margin:0;
          padding: 0;
        }
        .product{
          margin-top: 5rem;
        }
        .container-tentang{
          width: 100%;
          height: auto;
          margin: 5px;
          padding: 10px;
          border: 2px dashed gray;
          margin-top: 5rem;
          border-radius: 15px;
         

        }
        .container-tentang .text h1{
          color: gray;
          font-weight: 700;

        }
        .container-tentang .text span{
          color: black;
        }
        .container-tentang img{
          width: 20%;
          height: auto;
          object-fit: contain;
          margin: 5rem;
          
        }
        .icon {
          margin-top: 5rem;
          border-top: 2px dashed gray;
          padding-top: 2rem;
        }
        .footer {
          margin-top: 200rem;
        }
        .nav-item .nav-link{
          font-size: 12px;
          color: #6c757d;
        }
        .tagline{
          color: black;

        }
        .container-footer {
          width: 100%;
          height: auto;
          margin: 5px;
          padding: 0;
          margin-top: 5rem;
          background-color: #EFEFEF;
        }
        .store {
          display: flex;
          gap: 1rem;
          margin-left: 0;
          align-items: flex-start;
          justify-content: flex-start;
        }

       .card-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
        gap: 20px;
        flex: wrap;
       }
       .card-container {
        display: flex;
        flex-direction: row;
        justify-content: start;
        gap: 20px;
        flex-wrap: wrap;
        margin-top: 5rem;
        cursor: pointer;
    }

    .card {
        width: calc(15% - 10px); 
        max-width: 300px;
        box-sizing: border-box;
        margin-bottom: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s ease;
        
    }

    .card-body {
        padding: 10px;
      

    }


      .card-item img {
        max-width: 120px;
        max-height: 120px; 
        object-fit: cover;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        padding: auto 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }




      .card:hover {
        transform: scale(1.05);
      }


      .card-title {
        font-size: 0.8rem;
        font-weight: bold;
      }

      .card-subtitle {
        font-size: 0.6rem;
        color: #6c757d;
      }
      .card-item {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .text-navbar{
        color: black;
        text-decoration: none;
        width: auto;
        height: 1rem;
      }
   
      .btn-user {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        border: none;
        outline: none;

      }
      .input-group {
        width: 20%;
      }
        
    </style>
    <script>
     window.onload = function() {
       window.location.replace('#beranda');
     };
      function login() {
        window.location.href = "/login";
      }
      function daftar() {
        window.location.href = "/registrasi";
      }

      function BalikBeranda() {
      window.location.href = "/admin/dashboard_server";
    }

     
    </script>
  </head>
  <body>
        <div class="container text-xs py-4 d-flex flex-row gap-2 align-items-center justify-content-between text-black " id="beranda">
          <div class=" d-flex gap-3 px-4 justify-content-center " style="cursor: pointer;">
          <a onclick="BalikBeranda()" class="text-navbar">Beranda</a>
          <a href="#produk" class="text-navbar">Produk</a>
          <!-- <a href="#tentang" class="text-navbar">Tentang</a> -->
          </div>
          <div class="d-flex justify-content-center" style="margin-left: -100px;">
          <img src="../static/EduBooks.png" alt="icon" style="height: auto;width: 80px;">
          </div>
        </div>
       <div class="mb-4" style="position: relative;">
       <img src="../static/diskon.webp" alt="diskon" style="height: 80px; width: 100%;"> 
        <p style="position: absolute; top: 50%; left: 30%; transform: translate(-50%, -50%); color: #fff; font-size: 24px; font-weight: bold; z-index: 1 text-muted;">Promo Terbatas! Buku Terbaik dengan Harga Terhemat hingga 70%!</p>

      </div>
      <h3 class="container text-muted " style="margin-bottom: -2rem;margin-top: 3rem;">Etalase MarketPlace Anda</h3>
      <div class="container" style="margin-top: 5rem;">
          <div id="produk" style="margin-top: 1rem"></div>
  <div class="card-container" >
    <div class="card">
        <div class="card-body">
            <div class="card-item">
                <img src="https://image.gramedia.net/rs:fit:256:0/plain/https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita.png" alt="cover buku" loading="lazy" style="width: 100%; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            </div>
            <h5 class="card-title text-muted">Khoirul Trian</h5>
            <h6 class="card-subtitle mb-2 text-muted">Ayah, Ini Arahnya ke Mana, ya?</h6>
            <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0" style="font-size: 12px;"><strong> Rp79.000</strong></p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="card-item">
                <img src="https://image.gramedia.net/rs:fit:256:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/3/23/zykkopf62ysujbgvhnt8v4.jpg" alt="cover buku" loading="lazy" style="width: 100%; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            </div>
            <h5 class="card-title text-muted">Anna Claybourne</h5>
            <h6 class="card-subtitle mb-2 text-muted">73 Trik Sains Keren</h6>
            <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0" style="font-size: 12px;"><strong> Rp95.000</strong></p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="card-item">
                <img src="https://image.gramedia.net/rs:fit:256:0/plain/https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita.png" alt="cover buku" loading="lazy" style="width: 100%; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            </div>
            <h5 class="card-title text-muted">Khoirul Trian</h5>
            <h6 class="card-subtitle mb-2 text-muted">Ayah, Ini Arahnya ke Mana, ya?</h6>
            <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0" style="font-size: 12px;"><strong> Rp79.000</strong></p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="card-item">
                <img src="https://image.gramedia.net/rs:fit:256:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/3/23/zykkopf62ysujbgvhnt8v4.jpg" alt="cover buku" loading="lazy" style="width: 100%; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            </div>
            <h5 class="card-title text-muted">Anna Claybourne</h5>
            <h6 class="card-subtitle mb-2 text-muted">73 Trik Sains Keren</h6>
            <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0" style="font-size: 12px;"><strong> Rp95.000</strong></p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="card-item">
                <img src="https://image.gramedia.net/rs:fit:256:0/plain/https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita.png" alt="cover buku" loading="lazy" style="width: 100%; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            </div>
            <h5 class="card-title text-muted">Khoirul Trian</h5>
            <h6 class="card-subtitle mb-2 text-muted">Ayah, Ini Arahnya ke Mana, ya?</h6>
            <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0" style="font-size: 12px;"><strong> Rp79.000</strong></p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="card-item">
                <img src="https://image.gramedia.net/rs:fit:256:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/3/23/zykkopf62ysujbgvhnt8v4.jpg" alt="cover buku" loading="lazy" style="width: 100%; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            </div>
            <h5 class="card-title text-muted">Anna Claybourne</h5>
            <h6 class="card-subtitle mb-2 text-muted">73 Trik Sains Keren</h6>
            <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0" style="font-size: 12px;"><strong> Rp95.000</strong></p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="card-item">
                <img src="https://image.gramedia.net/rs:fit:256:0/plain/https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita.png" alt="cover buku" loading="lazy" style="width: 100%; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            </div>
            <h5 class="card-title text-muted">Khoirul Trian</h5>
            <h6 class="card-subtitle mb-2 text-muted">Ayah, Ini Arahnya ke Mana, ya?</h6>
            <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0" style="font-size: 12px;"><strong> Rp79.000</strong></p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="card-item">
                <img src="https://image.gramedia.net/rs:fit:256:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/3/23/zykkopf62ysujbgvhnt8v4.jpg" alt="cover buku" loading="lazy" style="width: 100%; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            </div>
            <h5 class="card-title text-muted">Anna Claybourne</h5>
            <h6 class="card-subtitle mb-2 text-muted">73 Trik Sains Keren</h6>
            <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0" style="font-size: 12px;"><strong> Rp95.000</strong></p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="card-item">
                <img src="https://image.gramedia.net/rs:fit:256:0/plain/https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita.png" alt="cover buku" loading="lazy" style="width: 100%; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            </div>
            <h5 class="card-title text-muted">Khoirul Trian</h5>
            <h6 class="card-subtitle mb-2 text-muted">Ayah, Ini Arahnya ke Mana, ya?</h6>
            <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0" style="font-size: 12px;"><strong> Rp79.000</strong></p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="card-item">
                <img src="https://image.gramedia.net/rs:fit:256:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/3/23/zykkopf62ysujbgvhnt8v4.jpg" alt="cover buku" loading="lazy" style="width: 100%; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            </div>
            <h5 class="card-title text-muted">Anna Claybourne</h5>
            <h6 class="card-subtitle mb-2 text-muted">73 Trik Sains Keren</h6>
            <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0" style="font-size: 12px;"><strong> Rp95.000</strong></p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="card-item">
                <img src="https://image.gramedia.net/rs:fit:256:0/plain/https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita.png" alt="cover buku" loading="lazy" style="width: 100%; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            </div>
            <h5 class="card-title text-muted">Khoirul Trian</h5>
            <h6 class="card-subtitle mb-2 text-muted">Ayah, Ini Arahnya ke Mana, ya?</h6>
            <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0" style="font-size: 12px;"><strong> Rp79.000</strong></p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="card-item">
                <img src="https://image.gramedia.net/rs:fit:256:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/3/23/zykkopf62ysujbgvhnt8v4.jpg" alt="cover buku" loading="lazy" style="width: 100%; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            </div>
            <h5 class="card-title text-muted">Anna Claybourne</h5>
            <h6 class="card-subtitle mb-2 text-muted">73 Trik Sains Keren</h6>
            <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0" style="font-size: 12px;"><strong> Rp95.000</strong></p>
            </div>
        </div>
    </div>
</div>

        </div>
       </div>
<div class="container-footer">
  <footer class="py-5 px-10">
    <div class="row px-5">
      <div class="col-6 col-md-2 mb-3">
        <h6 class="tagline">Produk EduBooks</h6>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary ">EduBooks Afiliasi</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary ">Mitra Afiliasi</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h6 class="tagline">Informasi Belanja</h6>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Berbelanja</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pembayaran</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pengiriman</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h6 class="tagline">Tentang EduBooks</h6>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Tentang Kami</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Toko Kami</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h6 style="margin-left: auto;">Aplikasi Seluler Kami</h6>
          <p class="text-sm" style="font-size: 14px;">Download aplikasi EduBooks yang tersedia di seluruh perangkat iOS dan Android</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
           <div class="d-flex flex-row gap-2" style="width: 30%; height: auto;">
            <img src="../static/apple-app-store.webp" alt="app" width="50%" height="auto">
            <img src="../static/google-play.webp" alt="app" width="50%" height="auto">
          </div>
             </div>
          </div>
        </form>
      </div>
      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top px-5">
        <h6 class="text-muted">© 2024 Company, Inc. All rights reserved.</h6>
        <ul class="list-unstyled d-flex">
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
        </ul>
      </div>
    </div>
  </footer>
</div>
  </body>
</html>
