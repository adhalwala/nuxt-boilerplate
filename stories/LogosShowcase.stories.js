import LogosShowcase from '~/components/LogosShowcase.vue'

export default {
  title: 'Components/LogosShowcase',
  component: LogosShowcase,
  // decorators: [
  //   () => ({
  //     template: '<v-app><v-main><story /></v-main></v-app>',
  //   }),
  // ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LogosShowcase },
  template: '<logos-showcase v-bind="$props" />',
})

export const Logosshowcase = Template.bind({})
Logosshowcase.args = {
  title: 'Hundreds of stores',
  text:
    'We’ve partnered with the brands you love. And more are joining all the time.',
  label: 'Explore stores',
  imgsrc: '/purpose-icon.svg',
}
