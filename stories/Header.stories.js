import Header from '~/components/Header.vue'

export default {
  title: 'Components/Header',
  component: Header,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Header },
  template: '<header v-bind="$props" />',
})

export const LogoImage = Template.bind({})
LogoImage.args = {}
