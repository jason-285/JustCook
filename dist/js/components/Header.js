app.component('nav-header', {
    props: {
        page:{ 
            type: String
        }
    },
    data() {
        return {
        navbar: "",
        searchForm: "",
        filters:  "",
        useroptions:  "",
        profile:  "",
        modal_login: "",
        modal_signup: "",
        header: "",
        headerModal: ""
        }
    },
    mounted:function() {
        this.navbar = document.querySelector('.nav-items'),
        this.searchForm = document.querySelector('.search-form'),
        this.filters =  document.querySelector('.filter-box'),
        this.useroptions =  document.querySelector('.options'),
        this.profile =  document.querySelector('.user-profile'),
        this.modal_login = document.querySelector('#modal-login'),
        this.modal_signup = document.querySelector('#modal-signup'),
        this.headerModal = document.querySelector('.modal-header')

        this.scrollP();
        this.menuDrop();
        this.searchDrop();
        this.userDrop();
        this.profileDrop();
        this.skip();
        this.filterDrop();
        this.search();
        this.navItems();
        this.logOut();
        this.signUp();
        this.logIn();
    },
    methods: {
        scrollP(){
            window.addEventListener('scroll', function(){
                let value = window.scrollY;
                
                let header = document.querySelector('.header')
                console.log(header);
                header.style.marginTop = value * -0.5 + 'px';
            })
        },
        searchDrop(){
            document.querySelector('#search-dropdown').onclick = () =>{
                this.searchForm.classList.toggle('active');
                this.navbar.classList.remove('active');
                this.filters.classList.remove('active');
                this.useroptions.classList.remove('active');
                this.profile.classList.remove('active');
            }
        },
        menuDrop(){
            document.querySelector('#menu-btn').onclick = () =>{
                this.navbar.classList.toggle('active');
                this.searchForm.classList.remove('active');
                this.filters.classList.remove('active');
                this.useroptions.classList.remove('active');
                this.profile.classList.remove('active');
            }
        },
        userDrop(){
            document.querySelector('#user-dropdown').onclick = () =>{
                this.useroptions.classList.toggle('active');
                this.navbar.classList.remove('active');
                this.filters.classList.remove('active');
                this.searchForm.classList.remove('active');
                this.profile.classList.remove('active');
            }
        },
        profileDrop(){
            document.querySelector('#profile-btn').onclick = () =>{
                this.profile.classList.toggle('active');
            }
        },
        skip(){
            document.querySelector('#skip-btn').onclick = () =>{
                this.modal_login.classList.remove('active');
                this.modal_signup.classList.remove('active');
                this.headerModal.classList.remove('active');
            }
        },
        filterDrop(){
            document.querySelector('#filter-btn').onclick = () =>{
                this.filters.classList.toggle('active');
                this.navbar.classList.remove('active');
            }
        },
        search(){
            document.querySelector('#search-btn').onclick = () =>{
                this.filters.classList.remove('active');
            }
        },
        navItems(){
            document.querySelector('.nav-items').onclick = () =>{
                this.navbar.classList.remove('active');
            }
        },
        logOut(){
            document.querySelector('#logout-btn').onclick = () =>{
                this.modal_login.classList.toggle('active');
                this.headerModal.classList.toggle('active');
                this.useroptions.classList.remove('active');
                this.profile.classList.remove('active');
                this.navbar.classList.remove('active');
                this.filters.classList.remove('active');
                this.searchForm.classList.remove('active');
            }
        },
        signUp(){
            document.querySelector('#signup-btn').onclick = () =>{
                this.modal_signup.classList.toggle('active');
                this.headerModal.classList.toggle('active');
                this.modal_login.classList.remove('active');
            }
        },
        logIn(){
            document.querySelector('#login-btn').onclick = () =>{
                this.modal_login.classList.toggle('active');
                this.headerModal.classList.toggle('active');
                this.modal_signup.classList.remove('active');
            }
        }
        
    },
    template:
    /*html*/
    `<header class="header">
        <nav class="nav">
            <!--Logo-->
            <a href="./index.html" class="logo">JUSTCOOK</a>

            <!--Nav Options-->
            <ul v-if="page === 'home'" class="nav-items">
                <li><a href="./recipe-book.html" class="nav-item">Recipe Book</a></li>
                <li><a href="#description" class="nav-item">Description</a></li>
                <li><a href="#most-voted" class="nav-item">Most Voted</a></li>
                <li><a href="#footer" class="nav-item">Info</a></li>
            </ul>

            <!--Nav Icons-->
            <div class="nav-icons">
                <a v-if="page != 'home'" href="./index.html" class="nav-btn"><p class="fa-solid fa-house"></p></a>
                <a v-if="page === 'recipe'" href="./recipe-book.html" class="nav-btn"><p class="fa-solid fa-book"></p></a>
                <button id="search-dropdown" class="nav-btn"><p class="fa-solid fa-magnifying-glass"></p></button>
                <button id="user-dropdown" class="nav-btn"><p class="fa-solid fa-user"></p></button>
                <button v-if="page === 'home'" id="menu-btn" class="nav-btn"><p class="fa-solid fa-bars"></p></button>
            </div>

            <!--Search Bar-->
            <div class="nav-search">
                <form class="search-form" action="" role="search">
                    <input class="search-input" type="search" id="search-input" placeholder="Search..." aria-label="Search">
                    <div class="search-icons">
                        <label id="filter-btn" class="search-btn fa-solid fa-filter"></label> <!--Fue necesrio cambiar esta etiqueta de button a label ya que al estar dentro de un form actualizaba la página env ez de desplegar los filtros-->
                        <button id="search-btn" for="search-box" class="search-btn fa-solid fa-search" type="submit"></button>
                    </div>
                </form>

                <div class="filter-box">
                        <h3 class="filter-title">Complexity</h3>
                        <ul class="filter-list">
                            <li class="filter-list-item"><a href="" class="filter">Easy</a></li>
                            <li class="filter-list-item"><a href="" class="filter">Intermediate</a></li>
                            <li class="filter-list-item"><a href="" class="filter">Advanced</a></li>
                        </ul>
                        <h3 class="filter-title">Categories</h3>
                        <ul class="filter-list">
                            <li class="filter-list-item"><a href="" class="filter">Breakfast</a></li>
                            <li class="filter-list-item"><a href="" class="filter">Drinks</a></li>
                            <li class="filter-list-item"><a href="" class="filter">Starter</a></li>
                            <li class="filter-list-item"><a href="" class="filter">Lunch</a></li>
                            <li class="filter-list-item"><a href="" class="filter">Desserts</a></li>
                            <li class="filter-list-item"><a href="" class="filter">Soups</a></li>
                        </ul>
                        <h3 class="filter-title">Occasions</h3>
                        <ul class="filter-list">
                            <li class="filter-list-item"><a href="" class="filter">All</a></li>
                            <li class="filter-list-item"><a href="" class="filter">Birthday</a></li>
                            <li class="filter-list-item"><a href="" class="filter">Father's day</a></li>
                            <li class="filter-list-item"><a href="" class="filter">Mother's Day</a></li>
                            <li class="filter-list-item"><a href="" class="filter">Children's Day</a></li>
                            <li class="filter-list-item"><a href="" class="filter">Christmas</a></li>
                            <li class="filter-list-item"><a href="" class="filter">Easter</a></li>
                            <li class="filter-list-item"><a href="" class="filter">Summer</a></li>
                        </ul>
                </div>
            </div>

            <!--User Options-->
            <div class="nav-user">
                <div class="options">
                    <div class="options-list">
                        <button id="profile-btn" class="user-btn"><p class="option-icon fa-solid fa-user"></p><p class="user-option">My Profile</p></button>
                        <button id="collection-btn" class="user-btn"><p class="option-icon fa-solid fa-book"></p><p class="user-option">My Collection</p></button>
                        <button id="logout-btn" class="user-btn"><p class="option-icon fa-solid fa-right-from-bracket"></p><p class="user-option">Log Out</p></button>
                    </div>
                </div>

                <div class="user-profile">
                    <div class="user">
                        <p class="option-icon fa-solid fa-user"></p>
                        <h1 class="name">Jason Huertas</h1>
                    </div>

                    <ul class="info-list">
                        <li class="info-element"><p class="user-info"> User: @jhuertas</p></li>
                        <li class="info-element"><p class="user-info">Email: jashu@gmail.com</p></li>
                        <li class="info-element"><p class="user-info">Pass: **********</p></li>
                    </ul>    

                    <div class="profile-options">
                        <button id="delete-btn" class="change-btn fa-solid fa-trash"></button>
                        <button id="edit-btn" class="change-btn fa-solid fa-pen-to-square"></button>
                    </div>
                </div>
            </div>
        </nav>
    </header>`
})