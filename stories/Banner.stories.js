import Banner from '~/components/Banner.vue'

export default {
  title: 'Example/Banner',
  component: Banner,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
  decorators: [
    () => ({
      template: '<v-app><v-main><story /></v-main></v-app>',
    }),
  ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Banner },
  template: '<banner v-bind="$props" />',
})

export const BannerLeft = Template.bind({})
BannerLeft.args = {
  bannertitle: 'Plant a tree',
  bannersubtitle: 'when you shop online',
  label: 'Add The Button to Chrome',
  icon: 'mdi-heart',
}
