<template>
  <footer class="footer-wrapper">
    <div class="container">
      <div class="row">
        <div class="d-flex footer-link ml-auto mr-auto">
          <div class="col-12 text-left">
            <ul class="align-self-center">
              <li>Support</li>
              <li>Contact us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
        <div class="tag-line">
          We are a for-purpose social enterprise<br />
          Made with <i class="mdi mdi-heart"></i> Melbourne
        </div>
        <div class="d-flex col-12 footer-social">
          <ul class="align-self-center">
            <li><img src="/facebook.svg" /></li>
            <li><img src="/twitter.svg" /></li>
            <li><img src="/Linkedin.svg" /></li>
            <li><img src="/instagram.svg" /></li>
          </ul>
        </div>

        <p class="d-flex col-12 footer-copyright text-center">Cause © 2020</p>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer-wrapper {
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #0c1831;
  position: relative;
  .container {
    position: relative;
  }
  h2 {
    color: #3c76a6;
    font-family: Roboto;
    font-size: 60px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 53px;
  }
  h3 {
    color: #0c1831;
    font-family: Roboto;
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 55px;
  }
  .footer-copyright {
    color: #a5d6fe;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 34px;
    justify-content: center;
    margin: 0px;
  }
  .tag-line {
    color: #ffffff;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0;
    text-align: center;
    width: 267px;
    line-height: 28px;
    position: absolute;
    right: 50px;
    top: 20px;
    bottom: 0;
    margin: auto;
    height: 80px;
    i {
      color: #3c76a6;
    }
    &:after {
      content: '';
      width: 16px;
      border: 1px solid #a5d6fe;
      border-left: 0px;
      position: absolute;
      right: -20px;
      height: 75px;
      top: -10px;
    }
    &:before {
      content: '';
      width: 16px;
      border: 1px solid #a5d6fe;
      border-right: 0px;
      position: absolute;
      left: -20px;
      height: 75px;
      top: -10px;
    }
    @media screen and (max-width: 768px) {
      position: relative;
      margin-top: 40px;
      margin-bottom: 40px;
      right: auto;
      top: auto;
    }
  }
}
.footer-link {
  ul {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    justify-content: center;
    margin: 0px;
    padding: 0px;
    li {
      color: #a5d6fe;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 34px;
      display: flex;
      padding: 0 10px;
    }
  }
}
.footer-social {
  ul {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    justify-content: center;
    margin: 0px;
    text-align: center;
    padding: 0px;

    li {
      color: #a5d6fe;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 34px;
      display: flex;
      padding: 0 8px;
    }
  }
}
</style>
<script>
export default {
  name: 'Footers',
}
</script>
