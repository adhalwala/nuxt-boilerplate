<template>
  <div class="site-menu-main">
    <div class="open-site-menu">
      <div class="menu-link-wrpr d-flex">
        <div class="col-6 text-center align-self-center">
          <span class="signup">Signup</span>
        </div>
        <div class="col-6 text-center align-self-center">
          <span class="login">Login</span>
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
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
.site-menu-main {
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
