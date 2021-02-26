<template>
  <div class="charity-page">
    <my-header class="absolute" />
    <div class="d-block width-full bg-primary relative">
      <v-container class="charity-page-top">
        <v-row>
          <div class="relative width-full pt-12 d-block">
            <span class="tag pl-6">tag</span>
            <inner-banner
              class="col-sm-6 col-12"
              :isButton="false"
              maxwidth="387px"
              bannersubtitle="Featured article"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </v-row>
      </v-container>
      <inner-banner-image
        bgimg="/RedCrossBackground.jpg"
        class="d-sm-flex m-height-500 d-none col-6 ml-auto pa-0"
      />
    </div>
    <div
      class="primary-dark-bg inner-page-strip cause-rating-strip recent-tag-wrapper"
    >
      <v-container>
        <div
          class="text-center d-flex col-12 pl-2 pr-2 pl-sm-3 pr-sm-3 pt-0 pb-0"
        >
          <v-row>
            <v-col class="d-flex text-left">
              <span class="active"> Recent </span>
              <ul class="pl-10">
                <li>tag1</li>
                <li>tag2</li>
                <li>tag3</li>
              </ul>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
    <div class="d-block width-full about-section pt-10 pb-15 mb-5">
      <v-container>
        <v-row>
          <v-col
            class="col-sm-6 col-md-4 col-12"
            v-for="(item, i) in 6"
            :key="i"
          >
            <div class="pl-3 pr-3 mb-4">
              <blog-list
                class=""
                title="Tag 1"
                imgsrc="ShopBackground.jpg"
                subtitle="Euismod quis viverra nibh cras pulvinar mattis nunc."
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, consectetur adipiscing elit, sed do eiusmod tempor"
              />
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
import InnerBannerImage from '~/components/InnerBannerImage.vue'
import BlogList from '~/components/BlogList.vue'
import Footers from '~/components/Footer.vue'

export default {
  name: 'BlogAllPage',

  components: {
    MyHeader,
    InnerBanner,
    InnerBannerImage,
    BlogList,
    Footers,
  },
}
</script>
