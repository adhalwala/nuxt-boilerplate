<template>
  <!-- <div>
    <button type="button" :class="classes" :style="style" @click="onClick">
      {{ label }}
    </button>
    <div class="text-center">
    <v-btn
      rounded
      color="primary"
      dark
    >
      Rounded Button
    </v-btn>
  </div>
  </div> -->
  <!-- <div class="text-center">
    <v-btn rounded color="primary" dark>
      <v-icon>info</v-icon>
      Rounded Button
    </v-btn>
  </div> -->
  <div class="text-center">
    <div>
      <button
        type="button"
        class="v-btn v-btn--contained v-btn--rounded theme--light v-size--default primary-theme"
      >
        <v-icon dark left> {{ icon }} </v-icon>{{ label }}
      </button>
    </div>
  </div>
</template>

<script>
import '~/assets/button.css'
import MyButton from '~/components/Button.vue'
export default {
  name: 'MyButton',
  component: MyButton,
  decorators: [
    () => ({
      template: '<v-app><v-main><story /></v-main></v-app>',
    }),
  ],
  props: {
    label: {
      type: String,
    },
    icon: {
      type: String,
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
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button v-bind="$props" />',
})
export const button = Template.bind({})
button.args = {
  icon: '',
  label: '',
}
</script>
