import Banner from '~/components/Banner.vue'
import BannerImage from '~/components/BannerImage.vue'
import FullBanner from '~/components/FullBanner.vue'
import InnerBannerImage from '~/components/InnerBannerImage.vue'

export default {
  title: 'Components/Banner',
  component: Banner,
  BannerImage,
  FullBanner,
  InnerBannerImage,
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

const Innerbanner = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InnerBannerImage },
  template: '<inner-banner-image v-bind="$props" />',
})
export const InnerBannerimage = Innerbanner.bind({})
InnerBannerimage.args = {
  topimg: '/cause-logo.svg',
  bgimg: 'https://picsum.photos/500/300?image=35',
  alt: 'main image',
}

export const BannerLeft = Template.bind({})
BannerLeft.args = {
  // bannertitle: 'Plant a tree',
  bannersubtitle: 'when you shop online',
  label: 'Add The Button to Chrome',
  icon: 'mdi mdi-heart',
}
export const BannerRight = BannerImageTemplate.bind({})
BannerRight.args = {}

export const BannerFull = FullBannerTemplate.bind({})
BannerFull.args = {}
