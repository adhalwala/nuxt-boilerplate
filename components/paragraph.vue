<template>
  <p class="c-heading black--text">{{ text }}</p>
</template>
<style scoped>
.c-heading {
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0.5px;
  font-weight: 100;
}
</style>
<script>
import paragraph from '~/components/paragraph.vue'
export default {
  name: 'paragraph',
  component: paragraph,
  decorators: [
    () => ({
      template: '<v-app><v-main><story /></v-main></v-app>',
    }),
  ],
  props: {
    text: {
      type: String,
      default: 'Paragraph Text',
    },
  },
}
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { paragraph },
  template: '<paragraph v-bind="$props" />',
})
export const p = Template.bind({})
p.args = {
  text: '',
}
</script>
