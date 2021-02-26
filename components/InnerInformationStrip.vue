<template>
  <div class="primary-dark-bg inner-page-strip cause-rating-strip">
    <v-container>
      <div
        class="text-center d-flex col-12 pl-2 pr-2 pl-sm-3 pr-sm-3 pt-0 pb-0"
      >
        <v-row>
          <v-col class="text-center text-sm-left col-sm-4 col-12">
            <span class=""> {{ infotext }} </span>
          </v-col>
          <v-col v-if="hasUrl" class="col-sm-4 col-12">
            <a :href="weburl" target="_blank">{{ weburl }} </a>
          </v-col>
          <v-col
            class="text-sm-right text-center col-sm-4 col-12"
            v-if="isRate"
          >
            <span class="oval">✔</span><span class="oval">✔</span
            ><span class="oval">✔</span>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.inner-page-strip {
  min-height: 49px;
  span {
    color: #a5d6fe;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 28px;
  }
  a {
    color: #a5d6fe;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 28px;
  }
  .oval {
    height: 20px;
    width: 20px;
    color: #0c1831;
    display: inline-block;
    border-radius: 100%;
    text-align: center;
    margin-left: auto;
    line-height: 20px;
    margin-left: 20px;
    background-color: #aacb5e;
    @media screen and (max-width: 600px) {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}
</style>
<script>
import '~/assets/informationstrip.css'

export default {
  name: 'InnerInformationStrip',

  props: {
    infotext: {
      type: String,
      default: '',
    },
    weburl: {
      type: String,
      default: '',
    },
    hasUrl: {
      type: Boolean,
      default: false,
    },
    isRate: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onClick() {
      this.$emit('onClick')
    },
  },
}
</script>
