import CCard from '~/components/Card.vue'

export default {
  title: 'Example/CTA Block',
  component: CCard,
  // decorators: [
  //   () => ({
  //     template: '<v-app><v-main><story /></v-main></v-app>',
  //   }),
  // ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CCard },
  template: '<c-card v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  topimg: '/cause-logo.svg',
  title: 'Provide clean water',
  imgsrc: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
  icon: 'mdi-heart',
  description: 'Give access to family consultation',
}
