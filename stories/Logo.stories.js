import Logo from '~/components/Logo.vue'

export default {
  title: 'Components/Logo',
  component: Logo,
  // decorators: [
  //   () => ({
  //     template: '<v-app><v-main><story /></v-main></v-app>',
  //   }),
  // ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Logo },
  template: '<logo v-bind="$props" />',
})

export const LogoImage = Template.bind({})
LogoImage.args = {}
