import UserMenu from '~/components/UserMenu.vue'

export default {
  title: 'Example/UserMenu',
  component: UserMenu,
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
  components: { UserMenu },
  template: '<user-menu v-bind="$props" />',
})

export const Menu = Template.bind({})
Menu.args = {
  primary: true,
  label: 'Button',
}
