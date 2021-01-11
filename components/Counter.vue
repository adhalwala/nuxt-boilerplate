<template>
  <v-col
    cols="12"
    sm="4"
    class="flex-grow-1 text-center counter-wrape counter-text-wrapper"
  >
    <v-card class="pa-2" dark>
      <h3>{{ number }}</h3>
      <span> {{ description }}</span>
    </v-card>
  </v-col>
</template>

<style lang="scss" scoped>
.primary-dark-bg {
  background-color: #0c1831;
}
.counter-wrape {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
.counter-wrape .theme--dark.v-card {
  background-color: transparent;
  box-shadow: none;
}
.counter-wrape .theme--dark.v-card h3 {
  color: #a5d6fe;
  font-family: Roboto;
  font-size: 60px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 79px;
  text-align: center;
}
.counter-wrape .theme--dark.v-card span {
  color: #a5d6fe;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  display: flex;
  padding-top: 12px;
  width: 100%;
  justify-content: center;
}
/* .counter-wrape .border-left{
  border-left: 2px solid #A5D6FE;
}
.counter-wrape .border-right{
  border-right: 2px solid #A5D6FE;
} */
.counter-wrape.counter-text-wrapper {
  border-left: 2px solid #a5d6fe;
}
.counter-wrape.counter-text-wrapper:first-child {
  border-left: none;
}
.counter-wrape {
  @media screen and (max-width: 600px) {
    &.counter-text-wrapper {
      border-left: 0px;
      border-bottom: 1px solid #a5d6fe;
      &:last-child {
        border: 0px;
      }
      .theme--dark.v-card {
        padding-bottom: 20px !important;
        padding-top: 20px !important;
        h3 {
          font-size: 36px;
          letter-spacing: 2.25px;
          line-height: 39px;
        }
        p {
          font-size: 16px;
          letter-spacing: 0.23px;
          line-height: 21px;
        }
        span {
          padding-top: 8px;
        }
      }
    }
  }
}
</style>
<script>
export default {
  name: 'Counter',

  props: {
    number: String,
    description: String,
    bottomtext: String,
  },
}
</script>
