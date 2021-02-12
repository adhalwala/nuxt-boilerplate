<template>
  <v-card class="bloglist">
    <v-img :src="imgsrc" height="200px"></v-img>
    <v-spacer></v-spacer>
    <v-card-title> {{ title }} </v-card-title>

    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>
    <v-card-text>
      {{ text }}
    </v-card-text>
  </v-card>
</template>
<style>
.bloglist .v-card__title {
  color: #3c76a6;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.78px;
  line-height: 28px;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.bloglist .spacer {
  padding: 5px;
  background-color: #f3f9ff;
}
.bloglist {
  box-shadow: 0 0 6px 0 rgb(12 24 49 / 20%) !important;
  /* margin-bottom: 40px; */
}
.bloglist .v-card__subtitle {
  color: #333333 !important;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 28px;
}
.bloglist .v-card__text {
  color: #333333 !important;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.31px;
  line-height: 28px;
}
</style>
<script>
export default {
  name: 'BlogList',
  props: {
    title: {
      default: '',
      type: String,
    },
    subtitle: {
      default: '',
      type: String,
    },
    imgsrc: {
      default: '',
      type: String,
    },
    text: {
      default: '',
      type: String,
    },
  },
}
</script>
