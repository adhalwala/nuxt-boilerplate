<template>
  <div class="search-button">
    <v-btn
      class="c-s-btn button--ripple text-left float-left mb-0 mb-sm-0"
      :rounded="true"
      v-ripple
      ><i style="" :class="icon"></i>
    </v-btn>
    <input type="text" :placeholder="placeholder" />
  </div>
</template>
<style>
.c-s-btn {
  height: 46px !important;
  width: 46px;
  padding: 0px !important;
  min-width: 46px !important;
  border-radius: 23px;
  background-color: #3c76a6 !important;
  box-shadow: 0 0 6px 0 rgba(12, 24, 49, 0.2);
}
.c-s-btn i {
  font-size: 32px;
  color: #ffffff;
}
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
</style>
<script>
export default {
  name: 'SearchButton',
  props: {
    icon: {
      default: '',
      type: String,
    },
    placeholder: {
      default: '',
      type: String,
    },
  },
}
</script>
