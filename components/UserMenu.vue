<template>
  <div class="text-right user-menu">
    <div
      class="v-btn v-btn--contained v-btn--rounded theme--light v-size--default primary-theme"
    >
      <v-icon left> mdi-account </v-icon>
      <v-icon right> mdi-menu </v-icon>
    </div>
  </div>
</template>

<script>
import '~/assets/usermenu.css'

export default {
  name: 'Usermenu',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value)
      },
    },
    backgroundColor: {
      type: String,
      default: '',
    },
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size}`]: true,
      }
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      }
    },
  },

  methods: {
    onClick() {
      this.$emit('onClick')
    },
  },
}
</script>
