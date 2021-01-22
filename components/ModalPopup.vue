<template class="modalpopup--wrapper">
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="1000px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card class="modalpopup">
        <v-icon class="closepopup white--text" text @click="dialog = false">
          mdi-close
        </v-icon>
        <img src="/rocket.svg" class="rocket-img d-flex ml-auto mr-auto" />
        <h2>{{ message }}</h2>
        <v-col cols="11" sm="6" class="nofify-email ml-auto mr-auto mt-5">
          <text-input label="email" />
        </v-col>
        <my-button
          :icon="icon"
          :label="label"
          class="d-flex justify-center mt-8"
        />
        <v-card-text>
          <v-container>
            <v-row> </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<style>
.v-dialog {
  border-radius: 0px;
  border: 4px solid #a5d6fe;
  background-color: #0c1831;
  box-shadow: 0 0 10px 0 rgba(12, 24, 49, 0.3);
  background-color: #0c1831;
  margin: 15px;
}
.nofify-email .v-input .v-input__slot:before,
.nofify-email .v-input .v-input__slot:after {
  border-color: #a5d6fe !important;
}
.nofify-email .theme--light.v-label,
.nofify-email .v-input .v-input__slot input {
  color: #a5d6fe !important;
}
</style>
<style lang="scss" scoped>
.modalpopup {
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: transparent;
  .closepopup {
    position: absolute;
    font-size: 30px;
    right: 15px;
    top: 15px;
    margin-top: 0;
  }
  .rocket-img {
  }
  h2 {
    color: #ffffff;
    font-family: Roboto;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 45px;
    text-align: center;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    padding: 0 15px;
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
  }
  .nofify-email {
    display: flex;
    justify-content: center;
    color: #a5d6fe;
  }
  button {
    margin-top: 60px;
  }
}
</style>
<script>
import MyButton from '~/components/Button.vue'
export default {
  name: 'Modalpopup',
  components: { MyButton },
  props: {
    message: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    dialog: false,
  }),
}
</script>
