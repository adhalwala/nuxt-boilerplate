import ShopBlock from '~/components/ShopBlock.vue'

export default {
  title: 'Components/ShopBlock',
  component: ShopBlock,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ShopBlock },
  template: '<shop-block v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  bgimg: 'https://picsum.photos/500/300?image=35',
  img: '/cause-logo.svg',
  title: 'The Good Guys',
  description: 'Up to 3.5% donated',
  shopbutton: 'Shop Now',
  isLightbtn: true,
  isDarkbtn: true,
}
