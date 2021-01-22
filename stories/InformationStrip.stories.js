import InformationStrip from '~/components/InformationStrip.vue'

export default {
  title: 'Components/InformationStrip',
  component: InformationStrip,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
  // decorators: [
  //   () => ({
  //     template: '<v-app><v-main><story /></v-main></v-app>',
  //   }),
  // ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InformationStrip },
  template: '<information-strip v-bind="$props" />',
})

export const Strip = Template.bind({})
Strip.args = {
  primary: true,
  label: 'Button',
}
