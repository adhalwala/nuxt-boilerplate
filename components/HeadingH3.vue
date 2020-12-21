<template>
  <h3 class="c-heading black--text">{{ text }}</h3>
</template>
<style scoped>
.c-heading {
  font-family: Roboto;
  font-size: 26px;
  font-weight: bold;
}
</style>
<script>
import HeadingH3 from '~/components/HeadingH3.vue'
export default {
  name: 'HeadingH3',
  component: HeadingH3,
  decorators: [
    () => ({
      template: '<v-app><v-main><story /></v-main></v-app>',
    }),
  ],
  props: {
    text: {
      type: String,
      default: 'Heading H3',
    },
  },
}
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeadingH3 },
  template: '<heading-h3 v-bind="$props" />',
})
export const H3 = Template.bind({})
H3.args = {
  text: '',
}
</script>
