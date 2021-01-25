<template>
  <v-col class="logos-showcase text-center d-flex">
    <div class="align-self-center logo-showcase-text">
      <heading-h4link
        :text="overline"
        v-if="isOverline"
        class="text-left text-uppercase mb-4"
      />
      <heading-h3 class="text-left col-12 pl-0" :text="title" />
      <paragraph class="text-left" :text="text" />
      <div class="d-flex col-12 pl-0" v-if="isButton">
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
    padding: 0px;
  }
  p {
    width: 425px;
    font-size: 16px;
    font-weight: 300;
    margin-top: 15px;
  }
  .learn-more-btn {
    margin-top: 0px;
  }
  @media screen and (min-width: 1900px) {
    p {
      width: 475px;
    }
  }
  @media screen and (max-width: 600px) {
    padding-left: 20px;

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
  @media screen and (max-width: 599px) {
    flex: 0 0 220px;
    max-width: 220px;
  }
}
</style>
<script>
import HeadingH4link from '~/components/HeadingH4link.vue'
import HeadingH3 from '~/components/HeadingH3.vue'
import Paragraph from '~/components/Paragraph.vue'
// import ShowcaseImages from '~/components/ShowcaseImages.vue'
export default {
  name: 'HeadingCopyBlock',
  components: {
    HeadingH3,
    Paragraph,
    HeadingH4link,
    // ShowcaseImages,
  },
  props: {
    overline: {
      type: String,
      default: '',
    },
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
    isOverline: {
      type: Boolean,
      default: false,
    },
    isButton: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
