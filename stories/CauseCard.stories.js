import CouseCard from '~/components/CauseCard.vue'

export default {
  title: 'Example/CouseCard',
  component: CouseCard,
  decorators: [
    () => ({
      template: '<v-app><v-main><story /></v-main></v-app>',
    }),
  ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CouseCard },
  template: '<couse-card v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  imgsrc: '/charity-icon.svg',
  title: '100% for Charity',
  description:
    'We do not charge charities anything. They receive 100% of the donation amounts shown.',
}
