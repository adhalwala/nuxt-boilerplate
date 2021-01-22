import LogoElements from '~/components/LogoElement.vue'

export default {
  title: 'Components/LogoElement',
  component: LogoElements,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LogoElements },
  template: '<logo-elements v-bind="$props" />',
})

export const LogoElement = Template.bind({})
LogoElement.args = {
  width: '100',
  height: '100',
  alt: 'Alt text',
}
