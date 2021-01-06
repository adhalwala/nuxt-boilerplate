import Banner from '~/components/Banner.vue'
import BannerImage from '~/components/BannerImage.vue'

export default {
  title: 'Example/Banner',
  component: Banner,
  BannerImage,
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

const BannerImageTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BannerImage },
  template: '<banner-image v-bind="$props" />',
})

export const BannerLeft = Template.bind({})
BannerLeft.args = {
  bannertitle: 'Plant a tree',
  bannersubtitle: 'when you shop online',
  label: 'Add The Button to Chrome',
  icon: 'mdi mdi-heart',
}
export const BannerRight = BannerImageTemplate.bind({})
BannerRight.args = {}
