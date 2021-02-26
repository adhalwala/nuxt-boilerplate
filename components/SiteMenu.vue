<template>
  <div class="">
    <div class="text-right user-menu header-main">
      <div
        class="v-btn v-btn--contained ripple--logo v-btn--rounded theme--light v-size--default primary-theme"
        v-ripple
      >
        <nav class="header__nav">
          <ul class="header__navbar menu-internal-link">
            <li class="header__item">
              <a
                class="header__link"
                v-if="show"
                key="on"
                @click="show = false"
              >
                <v-icon> mdi-account </v-icon>
                <!-- Header Navigation Menu Icons -->
                <v-icon right class="header--button"> mdi-close </v-icon>
              </a>
              <a
                class="header__link"
                v-else
                key="off"
                @click="show = true"
                v-ripple
              >
                <v-icon> mdi-account </v-icon>
                <!-- Header Navigation Menu Icons -->
                <v-icon right class="header--button"> mdi-menu </v-icon>
              </a>
              <!-- Dropdown Menu -->
              <transition name="dropdown">
                <div
                  class="dropdown__menu open-site-menu"
                  transition="scale-transition"
                  origin="center center"
                  v-bind:class="{ active: show }"
                  v-if="show"
                >
                  <div class="menu-link-wrpr d-flex">
                    <div
                      class="col text-sm-left text-center align-self-center pl-5"
                    >
                      <v-icon>mdi mdi-heart</v-icon>
                      <span class="signup">Add the Button</span>
                    </div>
                  </div>
                  <ul class="menu-internal-link">
                    <li>
                      <a href="#">Stores</a>
                    </li>
                    <li>
                      <a href="#">Charities</a>
                    </li>
                    <li>
                      <a href="#">About Cause</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li key="on" @click="show = false">
                      <v-icon>mdi-close</v-icon>
                    </li>
                  </ul>
                </div>
              </transition>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<style>
.dropdown__menu.open-site-menu {
  position: absolute;
  top: 55px;
  right: 0px;
  z-index: 9999;
}
.open-site-menu {
  height: auto;
  width: 335px;
  background-color: #0c1831 !important;
  box-shadow: 0 0 6px 0 rgba(12, 24, 49, 0.2);
  border-radius: 3px;
  overflow: hidden;
  padding: 0px;
}
.open-site-menu .menu-link-wrpr {
  height: 63px;
  background-color: #3c76a6;
  box-sizing: border-box;
  border-bottom: 1px solid #a5d6fe;
  color: #ffffff;
}
.open-site-menu .menu-link-wrpr i {
  color: #ffffff !important;
}
.open-site-menu .menu-link-wrpr span {
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 21px;
  cursor: pointer;
  margin-left: 10px;
}

.menu-internal-link {
  padding: 0px !important;
  list-style: none;
  display: block;
  margin-top: 19px;
}
.open-site-menu .menu-internal-link li {
  width: 100%;
  display: block;
  margin: 0px;
  padding: 7px 0;
}
.open-site-menu .menu-internal-link li a {
  color: #a5d6fe;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.56px;
  line-height: 46px;
  width: 100%;
  display: flex;
  padding-left: 55px !important;
}
.open-site-menu .menu-internal-link li i {
  text-align: center;
  margin: auto;
  display: none;
  color: #ffffff !important;
  bottom: 26px;
  position: absolute;
  font-size: 30px !important;
  margin: auto;
  right: 0;
  left: 0;
}
.open-site-menu .menu-internal-link li a:hover {
  background-color: #24324e;
  color: #ffffff;
}
@media screen and (max-width: 600px) {
  .open-site-menu .menu-internal-link li a {
    padding-left: 0px !important;
    text-align: center;
    display: inline-block;
  }
  .open-site-menu .menu-internal-link li i {
    display: block;
  }
  .dropdown__menu.open-site-menu {
    position: fixed;
    width: 95%;
    right: 0;
    left: 0;
    margin: auto;
    height: 96%;
    top: 0;
    bottom: 0;
  }
  .primary-theme.usermenu-primary i {
    left: auto;
    top: auto;
  }
  .v-menu__content .menu-link-wrpr > div {
    text-align: center !important;
  }
  .v-menu__content {
    width: 100%;
    height: 100vh;
    max-width: 90% !important;
    left: 0 !important;
    right: 0 !important;
    margin: auto;
    max-height: 96% !important;
    background-color: #24324e !important;
  }
}
.header-main button.mdi-menu[aria-expanded='true']::before {
  content: '\F0156';
  color: #0c1831;
}
.v-menu__content {
  z-index: 999 !important;
}
</style>

<style scoped lang="scss">
.v-application .ripple--logo {
  color: #999999 !important;
  caret-color: #999999 !important;
}
.site-menu-main {
  .usermenu-primary {
    width: 85px;
    height: 38px !important;
    z-index: 1;
  }
  .mdi-menu {
    &:focus {
      background: transparent !important;
      &:after {
        opacity: 0;
      }
    }
  }
  .open-site-menu {
    z-index: 9999;
    // height: 368px;
    width: 335px;
    background-color: #0c1831;
    box-shadow: 0 0 6px 0 rgba(12, 24, 49, 0.2);
    border-radius: 3px;
    overflow: hidden;
    .menu-link-wrpr {
      height: 63px;
      // background-color: #24324e;
      box-sizing: border-box;

      border-bottom: 1px solid #a5d6fe;
      .signup,
      .login {
        color: #ffffff;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 21px;
        cursor: pointer;
        &:hover {
          border-radius: 15.5px;
          background-color: #0c1831;
          padding: 6px 15px;
        }
      }
    }
    .menu-internal-link {
      padding: 0px;
      list-style: none;
      display: block;
      margin-top: 17px;
      padding-left: 55px;
      li {
        width: 100%;
        display: block;
        margin: 0px;
        a {
          color: #a5d6fe;
          font-family: Roboto;
          font-size: 18px;
          font-weight: bold;
          letter-spacing: 0.56px;
          line-height: 67px;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    padding: 20px;
    padding-right: 10px;
    .open-site-menu {
      width: 100%;
      height: 100vh;
      .menu-internal-link {
        padding-left: 0px;
        text-align: center;
      }
    }
  }
}
</style>
<script>
export default {
  name: 'SiteUserMenu',

  data: () => ({
    offset: true,
    show: false,
  }),
}
</script>
