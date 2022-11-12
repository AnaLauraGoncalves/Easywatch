<script>
export default {
  name: "newNav",

  methods: {
    go_to_view() {
      this.$router.push({path: "/ViewDistros.vue", addToHistory: true});
    },
  }
}
</script>

<template>
  <nav class="navbar">
     <!-- LOGO -->
     <router-link to="/" style="text-decoration: none">
        <a class="white" style="font-size:25px">
          <img
            src="../assets/img/logo1.png"
            alt="logo"
            width="38"
            height="38"
            lass="d-inline-block align-text-top"
          />
          Easywatch
        </a>
      </router-link>
     <!-- NAVIGATION MENU -->
     <ul class="nav-links">
       <!-- USING CHECKBOX HACK -->
       <input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" class="hamburger">&#9776;</label>
       <!-- NAVIGATION MENUS -->
       <div class="menu">
        <a class="color" @click="go_to_view()">View Distros</a>
        <router-link to="/Alternative.vue" class="nav-link">
           <a class="color">Alternatives</a>
          </router-link>
         <!--<li class="services">
           <a class="color">Search distro</a>
            DROPDOWN MENU 
           <ul class="dropdown">
           </ul>
         </li>-->
         <router-link to="/about" class="nav-link">
           <a class="color">About</a>
          </router-link>
          <a href="https://github.com/">
          <img
            src="../assets/img/GitHub.png"
            alt="GitHub"
            width="30"
            height="30"
            lass="d-inline-block align-text-top"
          />
        </a>
       </div>
     </ul>
   </nav>
</template>

<style>
.navbar {
 display: flex;
 align-items: center;
 justify-content: space-between;
 backdrop-filter: blur(13.5px);
 color: #fff;
 width: 50%;
 margin-left:5%;
 padding-top: 1.5em;
}
.nav-links a {
 color: #fff;
}
.nav-links {
  list-style: none;
}
/* LOGO */
.logo {
 font-size: 32px;
}
/* NAVBAR MENU */
.menu {
 display: flex;
 gap: 1em;
 font-size: 18px;
}
.menu li:hover {
 border-radius: 5px;
}
.color a:hover{
 text-decoration:  underline ;
 color:#feca05;
 transition: 0.3s ease;

}
.menu li {
 padding: 5px 14px;
}
/* DROPDOWN MENU */
.services {
 position: relative; 
}
.dropdown {
 backdrop-filter: blur(13.5px);
 padding: 1em 0;
 position: absolute; /*WITH RESPECT TO PARENT*/
 display: none;
 border-radius: 8px;
 top: 35px;
}
.dropdown li + li {
 margin-top: 10px;
}
.dropdown li {
 padding: 0.5em 1em;
 width: 8em;
 text-align: center;
}
.dropdown li:hover {
 background-color: #4c9e9e;
}
.services:hover .dropdown {
 display: block;
}

input[type=checkbox]{
 display: none;
} 
/*HAMBURGER MENU*/
.hamburger {
 display: none;
 font-size: 24px;
 user-select: none;
}
/* APPLYING MEDIA QUERIES */
@media (max-width: 768px) {
.menu { 
 display:none;
 position: absolute;
 background-color:rgb(48, 88, 88);
 right: 0;
 left: 0;
 text-align: center;
 padding: 16px 0;
}
.menu li:hover {
 display: inline-block;
 background-color:#4c9e9e;
 transition: 0.3s ease;
}
.menu li + li {
 margin-top: 12px;
}
input[type=checkbox]:checked ~ .menu{
 display: block;
}
.hamburger {
 display: block;
}
.dropdown {
 left: 50%;
 top: 30px;
 transform: translateX(35%);
}
.dropdown li:hover {
 background-color: #4c9e9e;
}
}

a {
  font-size: large;
  display: flex;
  align-items: center;
  gap: 10%;
}
</style>
