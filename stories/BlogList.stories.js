import CardBlog from '~/components/BlogList.vue'

export default {
  title: 'Components/CardBlog',
  component: CardBlog,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardBlog },
  template: '<card-blog v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  title: 'Tag 1',
  imgsrc: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
  subtitle: 'Euismod quis viverra nibh cras pulvinar mattis nunc.',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
}
