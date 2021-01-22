import CCard from '~/components/Card.vue'
import ICard from '~/components/CauseCard.vue'

export default {
  title: 'Components/Cards',
  component: CCard,
  ICard,
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

const IconTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ICard },
  template: '<i-card v-bind="$props" />',
})

export const IconCard = IconTemplate.bind({})
IconCard.args = {
  imgsrc: '/charity-icon.svg',
  title: '100% for Charity',
  description:
    'We do not charge charities anything. They receive 100% of the donation amounts shown.',
}
