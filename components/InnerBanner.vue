<template>
  <div class="d-flex banner-wrapper">
    <v-col class="text-left d-flex">
      <div class="align-self-center width-full">
        <h3>{{ bannersubtitle }}</h3>
        <p v-if="description" :style="{ maxWidth: maxwidth }">
          {{ description }}
        </p>
        <my-button
          :icon="icon"
          :label="label"
          class="text-left banner-btn float-left relative z-index-9 mb-5 mb-sm-0"
          v-if="isButton"
        />
        <search-button
          v-if="isSearchButton"
          :icon="icon"
          :placeholder="placeholder"
        />
      </div>
    </v-col>
  </div>
</template>
<style>
.search-button {
  width: 242px;
  border-radius: 25px;
  background-color: #deecfa;
  display: flex;
}
.search-button .primary-theme {
  min-width: 50px !important;
  padding: 0 !important;
}
.search-button .primary-theme i {
  font-size: 30px !important;
}
.search-button input {
  border: 0px;
  color: #3c76a6;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.45px;
  line-height: 24px;
  width: 100%;
  padding: 10px 10px 10px 20px;
}
.search-button input::placeholder {
  color: #3c76a6;
}
.search-button input:focus {
  outline: 0px;
}
.search-button .search-icon i {
  left: 0;
}
</style>
<style lang="scss" scoped>
.banner-wrapper {
  // padding-top: 100px !important;
  // padding-bottom: 100px !important;
  h2 {
    color: #3c76a6;
    font-family: Roboto;
    font-weight: 600;
    font-size: 60px;
    letter-spacing: 0;
    line-height: 64px;
  }
  h3 {
    color: #0c1831;
    font-family: Roboto;
    font-weight: 500;
    font-size: 36px;
    letter-spacing: 0.5px;
    line-height: 42px;
  }
  p {
    color: #0c1831;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 33px;
    margin-bottom: 48px;
    margin-top: 40px;
    strong {
      font-weight: bold;
    }
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 32px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 29px;
      font-family: 'Calibre';
    }
    h3 {
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 29px;
      font-family: Calibre;
    }
    p {
      font-size: 16px;
      font-weight: 300;
      letter-spacing: 0.5px;
      line-height: 28px;
      width: 230px;
      margin-top: 30px;
      strong {
        font-weight: normal;
      }
    }
  }
}
</style>
<script>
import MyButton from '~/components/Button.vue'
export default {
  name: 'InnerBanner',
  components: { MyButton },
  props: {
    label: {
      default: '',
      type: String,
    },
    icon: {
      default: '',
      type: String,
    },
    bannersubtitle: {
      default: '',
      type: String,
    },
    description: {
      default: '',
      type: String,
    },
    maxwidth: {
      default: '',
      type: String,
    },
    isButton: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      default: '',
      type: String,
    },
    isSearchButton: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
