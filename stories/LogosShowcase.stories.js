import LogosShowcase from '~/components/LogosShowcase.vue'

export default {
  title: 'Example/LogosShowcase',
  component: LogosShowcase,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
  decorators: [
    () => ({
      template: '<v-app><v-main><story /></v-main></v-app>',
    }),
  ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LogosShowcase },
  template: '<logos-showcase v-bind="$props" />',
})

export const Showcase = Template.bind({})
Showcase.args = {
  title: 'Hundreds of stores',
  text:
    'We’ve partnered with the brands you love. And more are joining all the time.',
  label: 'Explore stores',
  imgsrc: '/purpose-icon.svg',
}
