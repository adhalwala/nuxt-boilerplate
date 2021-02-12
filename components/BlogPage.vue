<template>
  <div class="charity-page">
    <my-header />
    <div class="d-block width-full bg-primary relative">
      <v-container class="charity-page-top">
        <v-row>
          <div class="relative width-full d-block">
            <span class="tag pl-6">tag</span>
            <heading-h1-alt
              class="c-heading black--text ma-0 d-flex pt-4 pb-4 pl-5"
              text="Blog page title"
            />
            <v-col class="user-detail d-flex width-full pl-5 mt-2">
              <img class="user-img" src="/cause-logo.svg" />
              <h6 class="align-self-center">by Name Surname | Sept 11, 2020</h6>
            </v-col>
            <v-col class="user-social d-flex width-full pl-5 mt-2">
              <ul>
                <li>
                  <i class="mdi mdi-twitter"></i>
                </li>
                <li>
                  <i class="mdi mdi-linkedin"></i>
                </li>
              </ul>
            </v-col>
          </div>
        </v-row>
      </v-container>
      <inner-banner-image
        bgimg="/RedCrossBackground.jpg"
        class="d-flex col-6 ml-auto pa-0"
      />
    </div>
    <inner-information-strip
      :hasUrl="false"
      :isRate="false"
      class="col-12 pt-0 pb-0"
    />
    <div class="blog-detail-info pt-15 pb-15 mt-5">
      <v-container>
        <v-row>
          <v-col class="col-2"> </v-col>
          <v-col class="col-8">
            <p class="first-capital">
              Arem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              blandit cursus risus at ultrices mi tempus imperdiet. Velit ut
              tortor pretium viverra. Volutpat consequat mauris nunc congue nisi
              vitae suscipit tellus. Semper quis lectus nulla at volutpat diam
              ut venenatis. Pellentesque diam volutpat commodo sed egestas
              egestas. Ultrices eros in cursus turpis massa tincidunt dui. Sed
              vulputate odio ut enim blandit volutpat. Praesent semper feugiat
              nibh sed pulvinar proin gravida. Id cursus metus aliquam eleifend
              mi in. Pellentesque habitant morbi tristique senectus. Ac orci
              phasellus egestas tellus rutrum tellus pellentesque. Elementum
              curabitur vitae nunc sed velit dignissim sodales ut. Integer enim
              neque volutpat ac tincidunt. Tristique senectus et netus et
              malesuada fames. A iaculis at erat pellentesque. Velit laoreet id
              donec ultrices tincidunt arcu non sodales. Montes nascetur
              ridiculus mus mauris vitae ultricies leo integer. Ut eu sem
              integer vitae justo eget. At tellus at urna condimentum mattis.
              Arcu cursus vitae congue mauris rhoncus aenean. Et netus et
              malesuada fames ac turpis egestas sed tempus. Faucibus turpis in
              eu mi. Eu volutpat odio facilisis mauris sit amet massa vitae
              tortor. Purus sit amet luctus venenatis lectus magna. Hendrerit
              gravida rutrum quisque non tellus orci ac. Vitae tempus quam
              pellentesque nec nam. Enim nec dui nunc mattis enim ut. Eget nunc
              scelerisque viverra mauris in aliquam sem fringilla. Praesent
              tristique magna sit amet purus gravida. Tellus rutrum tellus
              pellentesque eu. Quis enim lobortis scelerisque fermentum dui.
              Suspendisse interdum consectetur libero id faucibus nisl
              tincidunt. Tincidunt arcu non sodales neque. Faucibus vitae
              aliquet nec ullamcorper sit amet. Eu nisl nunc mi ipsum faucibus
              vitae aliquet. Metus dictum at tempor commodo ullamcorper a. In
              vitae turpis massa sed. In nulla posuere sollicitudin aliquam
              ultrices sagittis orci. Justo nec ultrices dui sapien eget.
              Ultrices dui sapien eget mi proin sed libero enim. Tristique
              sollicitudin nibh sit amet commodo. Mattis pellentesque id nibh
              tortor. Nulla pellentesque dignissim enim sit amet. Rutrum quisque
              non tellus orci ac auctor augue mauris. Aliquam malesuada bibendum
              arcu vitae. Ullamcorper sit amet risus nullam eget. Tincidunt id
              aliquet risus feugiat in. Vitae aliquet nec ullamcorper sit amet
              risus nullam eget. Turpis massa tincidunt dui ut ornare lectus
              sit. Volutpat sed cras ornare arcu dui vivamus arcu felis
              bibendum. Lacus sed turpis tincidunt id aliquet risus feugiat in
              ante. Pretium aenean pharetra magna ac. Ipsum a arcu cursus vitae
              congue mauris. Molestie nunc non blandit massa enim nec dui nunc.
            </p>
          </v-col>
          <v-col class="col-2"> </v-col>
        </v-row>

        <v-row>
          <v-col class="col-2">
            <i class="mdi mdi-heart mt-4"></i>
            <h6>Extract or tip</h6>
            <span>
              Semper quis lectus nulla at volutpat diam ut venenatis.
              Pellentesque diam volutpat commodo sed egestas egestas. Ultrices
              eros in cursus turpis massa tincidunt dui.
            </span>
          </v-col>
          <v-col class="col-8">
            <heading-h1-alt
              class="c-heading black--text ma-0 d-flex pt-4 pb-4"
              text="Image / video block"
            />
            <img
              src="https://picsum.photos/500/300?image=35"
              class="width-full"
            />
            <p>
              Arem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              blandit cursus risus at ultrices mi tempus imperdiet. Velit ut
              tortor pretium viverra. Volutpat consequat mauris nunc congue nisi
              vitae suscipit tellus. Semper quis lectus nulla at volutpat diam
              ut venenatis. Pellentesque diam volutpat commodo sed egestas
              egestas. Ultrices eros in cursus turpis massa tincidunt dui. Sed
              vulputate odio ut enim blandit volutpat. Praesent semper feugiat
              nibh sed pulvinar proin gravida. Id cursus metus aliquam eleifend
              mi in. Pellentesque habitant morbi tristique senectus. Ac orci
              phasellus egestas tellus rutrum tellus pellentesque. Elementum
              curabitur vitae nunc sed velit dignissim sodales ut. Integer enim
              neque volutpat ac tincidunt. Tristique senectus et netus et
              malesuada fames. A iaculis at erat pellentesque. Velit laoreet id
              donec ultrices tincidunt arcu non sodales. Montes nascetur
              ridiculus mus mauris vitae ultricies leo integer. Ut eu sem
              integer vitae justo eget. At tellus at urna condimentum mattis.
              Arcu cursus vitae congue mauris rhoncus aenean. Et netus et
              malesuada fames ac turpis egestas sed tempus. Faucibus turpis in
              eu mi. Eu volutpat odio facilisis mauris sit amet massa vitae
              tortor. Purus sit amet luctus venenatis lectus magna. Hendrerit
              gravida rutrum quisque non tellus orci ac. Vitae tempus quam
              pellentesque nec nam. Enim nec dui nunc mattis enim ut. Eget nunc
              scelerisque viverra mauris in aliquam sem fringilla. Praesent
            </p>
          </v-col>
          <v-col class="col-2"> </v-col>
        </v-row>
      </v-container>
    </div>
    <div
      class="d-block width-full related-article bg-primary about-section pt-10 pb-15"
    >
      <v-container>
        <heading-h2
          class="widt-full text-center d-block mb-10"
          text="Related articles"
        />
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
                imgsrc="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                subtitle="Euismod quis viverra nibh cras pulvinar mattis nunc."
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
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
import InnerInformationStrip from '~/components/InnerInformationStrip.vue'
import InnerBannerImage from '~/components/InnerBannerImage.vue'
import HeadingH1Alt from '~/components/HeadingH1Alt.vue'
import BlogList from '~/components/BlogList.vue'
import Footers from '~/components/Footer.vue'
import HeadingH2 from '~/components/HeadingH2.vue'

export default {
  name: 'BlogPage',

  components: {
    MyHeader,
    HeadingH1Alt,
    HeadingH2,
    InnerInformationStrip,
    InnerBannerImage,
    BlogList,
    Footers,
  },
}
</script>
