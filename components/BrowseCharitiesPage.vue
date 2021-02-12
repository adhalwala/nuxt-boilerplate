<template>
  <div class="charity-page browse-page">
    <my-header />
    <div class="d-block width-full bg-primary relative">
      <v-container>
        <v-row>
          <div class="d-flex width-full">
            <inner-banner
              class="col-12 col-sm-5 left-side-home mt-4 mt-sm-0"
              :isSearchButton="true"
              icon="mdi mdi-magnify"
              placeholder="Find your store"
              bannersubtitle="Great Causes to support"
              description="Raise money for these great Causes when you shop online."
            />
            <logos-showcase class="col-7 d-flex main-inner-banner" />
          </div>
        </v-row>
      </v-container>
    </div>
    <inner-information-strip
      infotext=""
      :hasUrl="false"
      :isRate="false"
      class="col-12 pt-0 pb-0"
    />
    <div class="width-full bg-primary relative filter-wrapper pt-1 pb-1">
      <v-container>
        <v-row>
          <v-col class="d-flex">
            <span
              @click="toggle"
              :class="isExist ? 'active' : ''"
              class="align-self-center relative"
            >
              Browse by category
            </span>
            <v-checkbox
              label="Tax deductible"
              color="indigo"
              value="Tax deductible"
              class="mt-0 pl-6 cause-checkbox align-self-center"
              hide-details
            ></v-checkbox>
            <v-checkbox
              label="Claimed by charity"
              color="indigo"
              value="Claimed by charity"
              class="mt-0 pl-6 cause-checkbox align-self-center"
              hide-details
            ></v-checkbox>
          </v-col>

          <v-col cols="auto">
            <pagination class="align-right" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <c-category v-show="isExist" />
    <div class="d-block width-full shop-now-section pt-4 pb-15">
      <v-container class="mt-10">
        <v-col class="col-12">
          <v-row>
            <v-row>
              <shop-block
                v-for="(item, i) in 4"
                :key="i"
                bgimg="https://picsum.photos/500/300?image=35"
                img="/cause-logo.svg"
                title="The Good Guys"
                description="Up to 3.5% donated"
                shopbutton="Learn more"
                :isLightbtn="true"
                class="col-3 pl-5 pr-5 mb-4"
              />
              <shop-block
                v-for="(items, i) in 4"
                :key="i"
                img="/cause-logo.svg"
                title="The Good Guys"
                description="Up to 3.5% donated"
                shopbutton="Learn more"
                :isLightbtn="true"
                class="col-3 pl-5 pr-5 mb-4"
              />
            </v-row>
          </v-row>
        </v-col>
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
import CCategory from '~/components/BrowseByCategory.vue'
import InnerInformationStrip from '~/components/InnerInformationStrip.vue'
import ShopBlock from '~/components/ShopBlock.vue'
import Footers from '~/components/Footer.vue'
import LogosShowcase from '~/components/LogosShowcase.vue'
import Pagination from '~/components/Pagination.vue'

export default {
  name: 'BrowseCharitiesPage',

  components: {
    MyHeader,
    CCategory,
    InnerInformationStrip,
    ShopBlock,
    Footers,
    LogosShowcase,
    Pagination,
  },
  data: () => ({
    isExist: false,
  }),
  methods: {
    toggle() {
      this.isExist = !this.isExist
    },
  },
}
</script>
