<template>
  <h4 class="c-heading">{{ text }}</h4>
</template>
<style scoped>
.c-heading {
  font-family: Roboto;
  font-size: 18px;
  letter-spacing: 0.3px;
  font-weight: 500;
  color: #3c76a6;
}
</style>
<script>
import HeadingH4link from '~/components/HeadingH4link.vue'
export default {
  name: 'HeadingH4link',
  component: HeadingH4link,
  decorators: [
    () => ({
      template: '<v-app><v-main><story /></v-main></v-app>',
    }),
  ],
  props: {
    text: {
      type: String,
      default: 'Heading H4 Link',
    },
  },
}
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeadingH4link },
  template: '<heading-h3link v-bind="$props" />',
})
export const H4 = Template.bind({})
H4.args = {
  text: '',
}
</script>
