<template>
  <div class="charity-page shop-page">
    <my-header />
    <div class="d-block width-full bg-primary relative">
      <v-container class="charity-page-top">
        <v-row>
          <div class="relative width-full d-block">
            <inner-banner
              class="col-6"
              :isButton="false"
              bannersubtitle="Raise money for charity when you shop online."
            />
          </div>
        </v-row>
      </v-container>
      <inner-banner-image
        bgimg="RedCrossBackground.jpg"
        class="d-flex col-6 ml-auto pa-0"
      />
    </div>
    <inner-information-strip
      :hasUrl="false"
      :isRate="false"
      class="col-12 pt-0 pb-0"
    />
    <div
      class="d-flex width-full bg-primary shop-page-section pt-10 pb-10 pt-sm-15 pb-sm-15"
    >
      <v-container>
        <v-row>
          <v-col
            class="col-sm-5 col-12 justify-sm-left justify-center d-flex offset-sm-1"
          >
            <img class="align-self-center" src="/about-logo.svg" />
          </v-col>
          <v-col class="col-sm-6 col-12 pl-sm-12">
            <heading-copy-block
              overline="Our Mission"
              title="Empower Goodwill "
              text="Cause is about empowerment. We give supporters and charities the power to turn their day to day actions (online shopping) in to good. Our common cause is goodwill. We make it happen."
              :isOverline="true"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="width-full pt-sm-15 pb-sm-15 pt-10 pb-10">
      <v-container>
        <v-row>
          <v-col class="col-sm-6 col-12 pr-sm-15">
            <h3 class="heading-3 mb-10">Our Story</h3>
            <p class="about-pera">
              Cause was born from a need for change.<br /><br />
              We heard stories from amazing people, doing amazing things and how
              they struggled to raise money for their cause.<br /><br />
              We spoke to Reen who was supporting families with autistic
              children. She ran community tennis matches and volunteered to
              drive people on winery tours; all to raise a few hundred
              dollars.<br /><br />
              We spoke to Tamara about her passion for supporting a village in
              Timor-Leste. She was on the speaking circuit.
              <br /><br />Pensioners were contributing $20 to support her cause.
              We thought… surely there has to be a better, simpler and smarter
              way for these extraordinary people to do good.
            </p>
          </v-col>

          <v-col
            class="col-sm-6 col-12 pl-sm-16 align-self-center about-right-side"
          >
            <img class="width-full" src="RedCrossBackground.jpg" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="about-left-image relative pb-15">
      <!-- <v-col class="col-6 pa-0 align-self-center pr-16">
        <img class="width-full" src="ShopBackground.jpg" />
      </v-col> -->
      <v-container class="">
        <v-row>
          <v-col
            class="col-sm-6 col-12 align-self-center pr-sm-15 about-left-side"
          >
            <img class="width-full" src="ShopBackground.jpg" />
          </v-col>
          <v-col class="col-sm-6 col-12 offset-sm-6 pl-sm-16 align-self-center">
            <p class="about-pera">
              We partner with a wide range of online stores who agree to provide
              a little commission anytime someone shops with them via the Cause
              website. And we donate up to 80% of this commission to the cause
              the customer chooses.<br /><br />
              Everyone wins. Supporters save money with special deals and offers
              from our partners. Our partners get sales. We get a share of the
              commission to enable us to invest in our staff, develop new
              technology and spread the word. <br /><br />And most importantly,
              charities get the donations they need to do good. Best of all,
              it’s all completely free. No gimmicks. No hidden fees. Ever.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div
      class="primary-dark-bg counter-main-wrapper charity-wrapper pt-15 pb-15"
    >
      <v-container>
        <v-row no-gutters>
          <h2 class="text-primary-color text-center width-full mb-14">
            More Stores. More Donations. More Impact.
          </h2>
          <counter class="col-4" number="1,000+" description="Store" />
          <counter class="col-4" number="57,000+" description="Charities" />
          <counter
            class="col-4"
            number="10x"
            description="The Donations of Amazon"
          />
        </v-row>
      </v-container>
    </div>
    <div
      class="width-full pt-sm-15 mt-sm-7 pb-sm-15 pt-10 pb-10 our-value-block"
    >
      <v-container>
        <v-row>
          <h3 class="heading-3 mb-10 width-full text-center">Our Values</h3>
          <v-col class="col-12 col-sm-6 col-md-3 text-center">
            <div class="img-value-wrapper align-self-center d-flex">
              <img class="ml-auto mr-auto" src="/co-operation.svg" />
            </div>
            <h2 class="mt-5">(Co-Op)eration</h2>
            <p>We collaborate because together we can all help.</p>
          </v-col>
          <v-col class="col-12 col-sm-6 col-md-3 text-center">
            <div class="img-value-wrapper align-self-center d-flex">
              <img class="ml-auto mr-auto" src="/kindness.svg" />
            </div>
            <h2 class="mt-5">Kindness</h2>
            <p>
              Kindness is a powerful gift. Cause helps people and companies
              bring more kindness into the world.
            </p>
          </v-col>
          <v-col class="col-12 col-sm-6 col-md-3 text-center">
            <div class="img-value-wrapper align-self-center d-flex">
              <img class="ml-auto mr-auto" src="/rebellion.svg" />
            </div>
            <h2 class="mt-5">Positive rebellion</h2>
            <p>
              Without positive rebellion Cause wouldn’t exist; we change the
              game, challenge norms and break down boundaries.
            </p>
          </v-col>
          <v-col class="col-12 col-sm-6 col-md-3 text-center">
            <div class="img-value-wrapper align-self-center d-flex">
              <img class="ml-auto mr-auto" src="/integrity.svg" />
            </div>
            <h2 class="mt-5">Integrity</h2>
            <p>
              Trust and authenticity sit at the heart of our aspiration. We do
              things because its right; our actions are fueled by no other
              means.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <footers class="" />
  </div>
</template>
<style lang="scss" scoped>
@media screen and (min-width: 600px) {
  .about-right-side {
    position: absolute;
    right: 0;
    padding: 0;
  }

  .about-left-side {
    position: absolute;
    left: 0;
    padding: 0;
  }
}
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
import InnerInformationStrip from '~/components/InnerInformationStrip.vue'
import InnerBannerImage from '~/components/InnerBannerImage.vue'
import Counter from '~/components/Counter.vue'
import Footers from '~/components/Footer.vue'

export default {
  name: 'AboutUsPage',

  components: {
    MyHeader,
    InnerBanner,
    InnerInformationStrip,
    InnerBannerImage,
    Counter,
    Footers,
  },
  props: {
    width: {
      type: String,
      default: '118',
    },
  },
}
</script>
