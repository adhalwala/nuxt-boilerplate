import TextInput from '~/components/TextInput.vue'

export default {
  title: 'Components/Text Input',
  component: TextInput,
  // decorators: [
  //   () => ({
  //     template: '<v-app><v-main><story /></v-main></v-app>',
  //   }),
  // ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextInput },
  template: '<text-input v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  label: 'Email*',
}
