<template>
  <v-row class="cause-input col-12">
    <!-- <v-text-field
      v-model="email"
      :rules="[rules.required, rules.email]"
      :label="label"
      append-icon="mdi-information mdi-checkbox-marked-circle"
    >   
    </v-text-field> -->
    <v-text-field
      ref="emailField"
      v-model="email"
      :label="label"
      :rules="[rules.required, rules.email]"
      :append-icon="
        isValid === ''
          ? ''
          : isValid
          ? 'mdi-checkbox-marked-circle'
          : 'mdi-information'
      "
      @input="validateEmailField"
    >
    </v-text-field>
  </v-row>
</template>
<style>
.cause-input .v-label {
  color: #a5d6fe;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0.24px;
  line-height: 21px;
}
.cause-input
  .theme--light.v-text-field
  > .v-input__control
  > .v-input__slot:before {
  border-color: #a5d6fe;
}
.cause-input .v-text-field > .v-input__control > .v-input__slot:after {
  border-color: #38b38e;
}
.cause-input .v-label--active {
  color: #7d96aa !important;
}
.cause-input .v-input--is-label-active input {
  color: #a5d6fe;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0.24px;
  line-height: 21px;
}
.cause-input .mdi-information {
  transform: rotate(180deg);
}
.cause-input .primary--text .mdi-checkbox-marked-circle {
  color: #38b38e !important;
}
.cause-input .v-input__append-inner {
  position: absolute;
  right: 0px;
}
.cause-input .v-input__append-inner i {
  font-size: 22px;
}
</style>

<script>
export default {
  name: 'TextInput',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      email: '',
      isValid: '',
      rules: {
        required: (value) => !!value || 'Required.',
        counter: (value) => value.length <= 20 || 'Max 20 characters',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Please enter valid email'
        },
      },
    }
  },
  methods: {
    validateEmailField() {
      this.isValid = this.$refs.emailField.valid
      console.log(this.$refs.emailField.valid)
    },
  },
}
</script>
