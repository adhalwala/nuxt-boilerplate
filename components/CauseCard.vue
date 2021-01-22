<template>
  <v-col class="col-12 col-md-4 text-center cause-card">
    <v-card class="pa-2 d-flex row text-center" dark>
      <div
        class="text-center col-12"
        data-aos="fade-in"
        data-aos-offset="10"
        data-aos-delay="30"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <img :src="imgsrc" />
      </div>
      <h3>{{ title }}</h3>
      <span class="align-self-center">{{ description }} </span>
      <div class="text-center col-12 align-self-end">
        <button class="learn-more-btn">
          Learn more <v-icon>mdi-chevron-right</v-icon
          ><v-icon>mdi-chevron-double-right</v-icon>
        </button>
      </div>
    </v-card>
  </v-col>
</template>
<style lang="scss" scoped>
.cause-card .theme--dark.v-card {
  background-color: transparent;
  box-shadow: none;
  height: 100%;
}
.cause-card .theme--dark.v-card h3 {
  color: #a5d6fe;
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 45px;
  text-align: center;
  margin-top: 45px;
  width: 100%;
}
.cause-card .theme--dark.v-card span {
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 28px;
  text-align: center;
  display: flex;
  padding-top: 12px;
  width: 100%;
  justify-content: center;
  margin-top: 25px;
  max-width: 332px;
  margin-left: auto;
  margin-right: auto;
}
.counter-wrape .border-left {
  border-left: 2px solid #a5d6fe;
}
.counter-wrape .border-right {
  border-right: 2px solid #a5d6fe;
}
.counter-wrape .counter-bottom-line {
  color: #a5d6fe;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  display: flex;
  padding-top: 12px;
  width: 100%;
  padding-top: 80px;
  justify-content: center;
}
.learn-more-btn {
  color: #a5d6fe;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 24px;
  margin-top: 25px;
}
.learn-more-btn i {
  color: #a5d6fe !important;
}
.learn-more-btn i.mdi-chevron-double-right {
  display: none;
}
.learn-more-btn:hover {
  color: #2d597d;
  transition: 0.3s;
}
.learn-more-btn:hover i.mdi-chevron-right {
  display: none;
}
.learn-more-btn:hover i.mdi-chevron-double-right {
  color: #2d597d !important;
  display: inline-flex;
  margin-left: 2px;
  transition: 0.3s;
}
.cause-card {
  @media screen and (max-width: 600px) {
    .theme--dark.v-card h3 {
      font-size: 20px;
      line-height: 26px;
      margin-top: 25px;
    }
    .learn-more-btn {
      font-size: 16px;
      margin-top: 17px;
    }
    .theme--dark.v-card span {
      margin-top: 10px;
    }
    .theme--dark.v-card {
      margin: 0px;
    }
  }
}
</style>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'CouseCard',
  created() {
    AOS.init()
  },
  props: {
    imgsrc: {
      default: '',
      type: String,
    },
    title: {
      default: '',
      type: String,
    },
    description: {
      default: '',
      type: String,
    },
  },
}
</script>
