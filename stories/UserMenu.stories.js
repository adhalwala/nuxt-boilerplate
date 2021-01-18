import UserMenu from '~/components/UserMenu.vue'
import SiteMenu from '~/components/SiteMenu.vue'

export default {
  title: 'Example/UserMenu',
  component: UserMenu,
  SiteMenu,
  decorators: [
    () => ({
      template: '<v-app><v-main><story /></v-main></v-app>',
    }),
  ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UserMenu },
  template: '<user-menu v-bind="$props" />',
})

const OpenMenu = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SiteMenu },
  template: '<site-menu v-bind="$props" />',
})

export const Menu = Template.bind({})
Menu.args = {
  primary: true,
  label: 'Button',
}
export const Sitemenu = OpenMenu.bind({})
Sitemenu.args = {}
