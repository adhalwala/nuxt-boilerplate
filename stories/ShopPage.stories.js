import ShopPage from '~/components/ShopPage'

export default {
  title: 'Layouts/ShopPage',
  component: ShopPage,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ShopPage },
  template: '<shop-page />',
})
export const Default = Template.bind({})
Default.args = {}
