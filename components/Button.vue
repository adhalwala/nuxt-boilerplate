<template>
  <div class="text-center c-primary-btn">
    <button
      type="button"
      class="v-btn banner-btn v-btn--contained v-btn--rounded v-size--default primary-theme"
    >
      <i style="font-size: 24px; margin-right: 5px" :class="icon"></i
      >{{ label }}
    </button>
  </div>
</template>
<style lang="scss" scoped>
.banner-btn {
  i {
    color: #ffffff !important;
  }
}
</style>
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
