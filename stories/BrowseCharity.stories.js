import BrowseCharity from '~/components/BrowseCharity.vue'

export default {
  title: 'Components/CharityCategories',
  component: BrowseCharity,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BrowseCharity },
  template: '<browse-charity v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  imgsrc: '/charity-icon.svg',
  name: 'Animal',
}
