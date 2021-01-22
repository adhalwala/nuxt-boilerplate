<template>
  <div class="site-menu-main">
    <div class="text-right user-menu header-main">
      <v-menu transition="slide-x-transition" bottom right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="primary-theme usermenu-primary"
            :ripple="false"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left> mdi-account </v-icon>
            <v-icon right> mdi-menu </v-icon>
          </v-btn>
        </template>
        <v-list class="open-site-menu">
          <div class="menu-link-wrpr d-flex">
            <div class="col text-sm-left align-self-center pl-5">
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
            <li>
              <v-icon>mdi-close</v-icon>
            </li>
          </ul>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>
<style>
.open-site-menu {
  height: 368px;
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
  color: #ffffff;
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
  margin-top: 17px;
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
  color: #ffffff;
  bottom: 26px;
  position: absolute;
  font-size: 30px;
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
  .open-site-menu {
    width: 100%;
    height: 100%;
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
</style>

<style scoped lang="scss">
.site-menu-main {
  .usermenu-primary {
    width: 85px;
    height: 32px !important;
    z-index: 1;
  }
  .open-site-menu {
    height: 368px;
    width: 335px;
    background-color: #0c1831;
    box-shadow: 0 0 6px 0 rgba(12, 24, 49, 0.2);
    border-radius: 3px;
    overflow: hidden;
    .menu-link-wrpr {
      height: 63px;
      background-color: #24324e;
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
}
</script>
