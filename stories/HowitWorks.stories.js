import HowitWorks from '~/components/HowitWorks.vue'

export default {
  title: 'Example/HowitWork',
  component: HowitWorks,
  decorators: [
    () => ({
      template: '<v-app><v-main><story /></v-main></v-app>',
    }),
  ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HowitWorks },
  template: '<howit-works v-bind="$props" />',
})
export const HowItWorks = Template.bind({})
HowItWorks.args = {
  title: 'Big success message!',
  description: 'Email added!',
}
