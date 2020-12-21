<template>
  <div class="logos-showcase d-flex">
    <v-col class="col-6 text-center d-flex">
      <div class="align-self-center row d-flex">
        <heading-h3 class="text-left col-12 pl-0" :text="title" />
        <paragraph class="text-left" :text="text" />
        <div class="d-flex col-12 pl-0">
          <explore-button :label="label" class="text-left float-left" />
        </div>
      </div>
    </v-col>
    <v-col class="d-flex col-6 text-center">
      <div class="text-center col-12">
        <img :src="imgsrc" />
      </div>
    </v-col>
  </div>
</template>
<style lang="scss" scoped>
.logos-showcase {
  // background-color: #f3f9ff;
  padding-top: 100px !important;
  padding-bottom: 100px !important;
  h3,
  p {
    color: #0c1831;
  }
  p {
    width: 425px;
  }
}
</style>
<script>
import HeadingH3 from '~/components/HeadingH3.vue'
import Paragraph from '~/components/paragraph.vue'
export default {
  name: 'LogosShowcase',
  components: {
    HeadingH3,
    Paragraph,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    imgsrc: {
      type: String,
      default: '',
    },
  },
}
</script>
