<template>
  <v-main class="primary-dark-bg inner-page-strip cause-rating-strip">
    <v-container>
      <div
        class="text-center d-flex col-12 pl-2 pr-2 pl-sm-3 pr-sm-3 pt-0 pb-0"
      >
        <v-row>
          <v-col class="text-left">
            <span class=""> ABN 12 345 678 901 </span>
          </v-col>
          <v-col>
            <a href="https://www.redcross.org.au" target="_blank"
              >www.redcross.org.au
            </a>
          </v-col>
          <v-col class="text-right">
            <span class="oval">✔</span><span class="oval">✔</span
            ><span class="oval">✔</span>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>

<style lang="scss" scoped>
.inner-page-strip {
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
  }
}
</style>
<script>
import '~/assets/informationstrip.css'

export default {
  name: 'InnerInformationStrip',

  props: {
    label: {
      type: String,
      default: '',
    },
    primary: {
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
