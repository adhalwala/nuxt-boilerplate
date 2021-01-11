<template>
  <v-col class="logos-showcase text-center d-flex">
    <div class="align-self-center row d-flex">
      <heading-h3 class="text-left col-12 pl-0" :text="title" />
      <paragraph class="text-left" :text="text" />
      <div class="d-flex col-12 pl-0">
        <explore-button :label="label" class="text-left float-left" />
      </div>
    </div>
  </v-col>
</template>
<style lang="scss" scoped>
.logos-showcase {
  h3 {
    font-size: 32px;
  }
  h3,
  p {
    color: #0c1831;
  }
  p {
    width: 425px;
    font-size: 16px;
  }
  @media screen and (max-width: 600px) {
    padding-left: 30px;
    h3 {
      font-size: 20px;
      letter-spacing: 0.31px;
      line-height: 30px;
    }
    p {
      font-size: 16px;
      letter-spacing: 0.3px;
      line-height: 24px;
      width: auto;
    }
    .learn-more-btn {
      font-size: 16px;
      letter-spacing: 0.44px;
      line-height: 21px;
      margin-top: 0px;
    }
  }
}
</style>
<script>
import HeadingH3 from '~/components/HeadingH3.vue'
import Paragraph from '~/components/paragraph.vue'
// import ShowcaseImages from '~/components/ShowcaseImages.vue'
export default {
  name: 'LogosShowcase',
  components: {
    HeadingH3,
    Paragraph,
    // ShowcaseImages,
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
