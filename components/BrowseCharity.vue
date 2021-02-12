<template>
  <v-card class="browse-charity-wrapper">
    <div class="__img_wrap">
      <img :src="imgsrc" />
    </div>
    <v-card-title class="align-self-center d-flex"> {{ name }} </v-card-title>
  </v-card>
</template>
<style>
.browse-charity-wrapper {
  margin-bottom: 10px;
  background-color: #f3f9ff;
}
.browse-charity-wrapper .__img_wrap {
  padding-top: 22px;
  padding-bottom: 22px;
  background-color: #f3f9ff;
}
.browse-charity-wrapper img {
  height: 80px;
  text-align: center;
  margin: auto;

  display: block;
}
.browse-charity-wrapper .v-card__title {
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.24px;
  line-height: 21px;
  text-align: center;
  background: #3c76a6;
  display: block;
  padding: 0 10px;
  min-height: 55px;
  justify-content: center;
}
.browse-charity-wrapper .v-image {
  background-color: #f3f9ff;
}
</style>
<script>
export default {
  name: 'BrowseCharity',
  props: {
    imgsrc: {
      default: '',
      type: String,
    },
    name: {
      default: '',
      type: String,
    },
  },
}
</script>
