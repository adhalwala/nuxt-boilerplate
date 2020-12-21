<template>
  <h1 class="c-heading black--text">{{ text }}</h1>
</template>
<style scoped>
.c-heading {
  font-family: Roboto;
  font-size: 36px;
  font-weight: 500;
}
</style>
<script>
import HeadingH1Alt from '~/components/HeadingH1Alt.vue'
export default {
  name: 'HeadingH1Alt',
  component: HeadingH1Alt,
  decorators: [
    () => ({
      template: '<v-app><v-main><story /></v-main></v-app>',
    }),
  ],
  props: {
    text: {
      type: String,
      required: true,
      default: 'Heading Alt',
    },
    altText: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
  },
}
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeadingH1Alt },
  template: '<heading-h1-alt v-bind="$props" />',
})
export const H1Alt = Template.bind({})
H1Alt.args = {
  text: 'Button',
}
</script>
