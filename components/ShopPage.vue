<template>
  <div class="charity-page shop-page">
    <my-header />
    <div class="d-block width-full bg-primary relative">
      <v-container class="charity-page-top">
        <v-row>
          <div class="relative width-full d-block">
            <inner-banner
              class="col-sm-6 col-12"
              :isButton="true"
              bannersubtitle="Hallenstein Brothers"
              maxwidth="387px"
              description="Hallenstein Brothers is a New Zealand based men's fashion, street and lifestyle retailer with 40+ stores and an online shop."
              icon="mdi mdi-heart"
              label="Shop Now"
            />
          </div>
        </v-row>
      </v-container>
      <inner-banner-image
        topimg="/cause-logo.svg"
        bgimg="/ShopBackground.jpg"
        class="d-sm-flex d-none col-6 ml-auto pa-0"
      />
    </div>
    <inner-information-strip
      infotext="Up to 4% Donated"
      :hasUrl="false"
      :isRate="false"
      class="col-12 pt-0 pb-0"
    />
    <div class="d-block width-full bg-primary shop-page-section pt-15 pb-5">
      <v-container>
        <v-row>
          <v-col
            class="d-none col-sm-6 col-12 d-sm-flex justify-content-center justify-content-md-left"
          >
            <img
              height="240"
              class="align-self-center pl-sm-10"
              src="/SoppingBagLarge.svg"
            />
          </v-col>
          <v-col class="col-sm-6 col-12">
            <div class="justify-end">
              <div
                class="d-flex mb-10 justify-end"
                v-for="(item, i) in 6"
                :key="i"
              >
                <div class="align-self-center pr-6">
                  <h6>Free Shipping on All Purchases over $50</h6>
                </div>
                <div class="">
                  <my-button
                    label="Shop Now"
                    size="small"
                    icon="mdi mdi-heart"
                  />
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <footers class="" />
  </div>
</template>
<style lang="scss" scoped>
.home-page,
.bg-primary {
  background-color: #f3f9ff;
}
.charity-wrapper {
  padding-top: 100px;
  padding-bottom: 100px;
}
.counter-main-wrapper {
  padding-top: 100px;
}

.counter-bottom-line {
  color: #a5d6fe;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  display: flex;
  width: 100%;
  padding-top: 75px;
  padding-bottom: 20px;
  justify-content: center;
}
.free-text-lable {
  color: #3c76a6;
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 45px;
  text-align: center;
  span {
    color: #0c1831;
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
    line-height: 30px;
    margin-top: 40px;
    margin-bottom: 20px;
  }
}
.c-blog {
  max-width: 1390px;
  margin: auto;
}

@media screen and (min-width: 1900px) {
  .howitworks-wrapper {
    max-width: 1400px;
    margin: auto;
  }
}
@media screen and (max-width: 1200px) and (min-width: 960px) {
  .show-case-right-left .logos-showcase-images {
    left: -170px;
  }
}
@media screen and (max-width: 600px) {
  .charity-wrapper {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .banner-slider {
    position: absolute;
    right: 0;
    top: 70px;
  }
  .site-logo {
    width: 90px;
  }
  .counter-main-wrapper {
    padding-top: 20px;
  }

  .counter-bottom-line {
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 21px;
    padding-top: 35px;
    max-width: 400px;
    margin: auto;
  }
  .footer-wrapper {
    margin-top: 0px !important;
  }
}
</style>

<script>
import MyHeader from '~/components/Header.vue'
import InnerBanner from '~/components/InnerBanner.vue'
import MyButton from '~/components/Button.vue'
import InnerInformationStrip from '~/components/InnerInformationStrip.vue'
import InnerBannerImage from '~/components/InnerBannerImage.vue'
import Footers from '~/components/Footer.vue'

export default {
  name: 'ShopPage',

  components: {
    MyHeader,
    InnerBanner,
    MyButton,
    InnerInformationStrip,
    InnerBannerImage,
    Footers,
  },
}
</script>
