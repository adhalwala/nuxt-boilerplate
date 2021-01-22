import Banner from '~/components/Banner.vue'
import BannerImage from '~/components/BannerImage.vue'
import FullBanner from '~/components/FullBanner.vue'

export default {
  title: 'Components/Banner',
  component: Banner,
  BannerImage,
  FullBanner,
  // decorators: [
  //   () => ({
  //     template: '<v-app><v-main><story /></v-main></v-app>',
  //   }),
  // ],
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
const FullBannerTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FullBanner },
  template: '<full-banner v-bind="$props" />',
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

export const BannerFull = FullBannerTemplate.bind({})
BannerFull.args = {}
