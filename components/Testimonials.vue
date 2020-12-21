<template>
  <v-main class="logos-showcase testimonials">
    <v-container>
      <v-row style="/*flex-wrap: nowrap*/">
        <v-col class="col-12 text-center">
          <div class="align-self-center">
            <div class="--wrapper tex-center d-inline-block">
              <img :src="imgsrc" />
            </div>
            <i class="tex-center d-inline-block col-12">{{ name }}</i>
            <h3>{{ description }}</h3>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<style lang="scss" scoped>
.logos-showcase {
  padding-top: 100px !important;
  padding-bottom: 100px !important;
  h3,
  p {
    color: #0c1831;
  }
  p {
    // width: 425px;
  }
}
.testimonials {
  h3 {
    font-family: Roboto;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 38px;
    margin-top: 18px;
  }
  i {
    color: #3b495b;
    font-family: Roboto;
    font-size: 20px;
    font-style: italic;
    letter-spacing: 0;
    line-height: 26px;
    text-align: center;
    margin-top: 23px;
  }
  .--wrapper {
    box-sizing: border-box;
    height: 166px;
    width: 166px;
    border: 8px solid #f3f9ff;
    border-radius: 100px;
    background-color: #f7f8f8;
    img {
      height: 150px;
      width: 150px;
    }
  }
}
</style>
<script>
export default {
  name: 'Testimonials',

  props: {
    name: {
      type: String,
      default: '',
    },
    description: String,
    imgsrc: String,
  },
}
</script>
