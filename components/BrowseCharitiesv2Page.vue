<template>
  <div class="charity-page browse-page">
    <my-header />
    <div class="d-block width-full bg-primary relative">
      <v-container>
        <v-row>
          <div class="d-flex width-full">
            <inner-banner
              class="col-7 col-sm-5 left-side-home mt-4 mt-sm-0"
              :isSearchButton="true"
              icon="mdi mdi-magnify"
              placeholder="Find your store"
              bannersubtitle="Great Causes to support"
              description="Raise money for these great Causes when you shop online."
            />
            <logos-showcase
              class="col-5 col-sm-7 d-flex main-inner-banner __inner_heart"
            />
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
    <div class="d-block width-full shop-now-section pt-4 pb-sm-15 pb-1">
      <v-container class="mt-1 mt-sm-10">
        <v-col class="col-12">
          <v-row>
            <h2 class="mr-auto col-12 d-flex text-left mb-sm-10 mb-3">
              Browse charity categories
            </h2>
            <v-row>
              <v-col
                class="col-sm-4 col-md-3 col-12 pl-6 pr-6"
                v-for="(item, i) in charity_category"
                :key="i"
              >
                <browse-charity :imgsrc="item.src" :name="item.name" />
              </v-col>
              <!-- <v-col
                class="col-sm-4 col-md-3 col-12 pl-6 pr-6"
                v-for="(item, i) in 4"
                :key="i"
              >
                <browse-charity imgsrc="/charity-icon.svg" name="Animal" />
              </v-col> -->
            </v-row>
          </v-row>
        </v-col>
      </v-container>
    </div>
    <div class="d-block width-full shop-now-section pt-0 mb-10 pb-sm-15 pb-0">
      <v-container class="mt-8">
        <v-col class="col-12">
          <v-row>
            <h2 class="mr-auto d-flex text-left mb-10">
              Support these popular charities
            </h2>
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
                class="col-sm-3 col-md-4 col-12 pl-5 pr-5 mb-4"
              />
              <shop-block
                v-for="(item, i) in 4"
                :key="i"
                img="/cause-logo.svg"
                title="The Good Guys"
                description="Up to 3.5% donated"
                shopbutton="Learn more"
                :isLightbtn="true"
                class="col-sm-3 col-md-4 col-12 pl-5 pr-5 mb-4"
              />

              <v-col cols="auto" class="ml-auto">
                <pagination class="align-right" />
              </v-col>
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
import InnerInformationStrip from '~/components/InnerInformationStrip.vue'
import ShopBlock from '~/components/ShopBlock.vue'
import Footers from '~/components/Footer.vue'
import LogosShowcase from '~/components/LogosShowcase.vue'
import BrowseCharity from '~/components/BrowseCharity.vue'
import Pagination from '~/components/Pagination.vue'

export default {
  name: 'BrowseCharitiesv2Page',

  components: {
    MyHeader,
    InnerInformationStrip,
    ShopBlock,
    Footers,
    LogosShowcase,
    BrowseCharity,
    Pagination,
  },
  data() {
    return {
      charity_category: [
        {
          src: '/category-icons/Animals.svg',
          name: 'Animal',
        },
        {
          src: '/category-icons/Arts.svg',
          name: 'Arts and culture',
        },
        {
          src: '/category-icons/ChildrenSupport.svg',
          name: 'Children and youth development',
        },
        {
          src: '/category-icons/Crime.svg',
          name: 'Crime prevention and justice',
        },
        {
          src: '/category-icons/Disaster.svg',
          name: 'Disaster relief',
        },
        {
          src: '/category-icons/Employment.svg',
          name: 'Employment and professional associations',
        },
        {
          src: '/category-icons/Environment.svg',
          name: 'Environment',
        },
        {
          src: '/category-icons/Health.svg',
          name: 'Health and medicine',
        },
        {
          src: '/category-icons/Housing.svg',
          name: 'Housing, homelessness and hunger',
        },
        {
          src: '/category-icons/Human.svg',
          name: 'Human services',
        },
        {
          src: '/category-icons/International.svg',
          name: 'International',
        },
        {
          src: '/category-icons/Health.svg',
          name: 'Military and veterans',
        },
        {
          src: '/category-icons/Grants.svg',
          name: 'Philanthropy, grants, other',
        },
        {
          src: '/category-icons/Health.svg',
          name: 'Religion and spirituality',
        },
        {
          src: '/category-icons/Environment.svg',
          name: 'Schools and education',
        },
        {
          src: '/category-icons/Health.svg',
          name: 'Science and research',
        },
        {
          src: '/category-icons/Comunities.svg',
          name: 'Society and communities',
        },
        {
          src: '/category-icons/Sport.svg',
          name: 'Sports and recreation',
        },
      ],
    }
  },
}
</script>
