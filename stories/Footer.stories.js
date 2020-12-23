import Footer from '~/components/Footer.vue'
import FooterLink from '~/components/FooterLink.vue'
import FooterSocial from '~/components/FooterSocial.vue'
import FooterCopyright from '~/components/FooterCopyright.vue'

export default {
  title: 'Example/Footer',
  component: Footer,
  FooterLink,
  FooterSocial,
  FooterCopyright,
  decorators: [
    () => ({
      template: '<v-app><v-main><story /></v-main></v-app>',
    }),
  ],
}

const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Footer },
  template: '<footer v-bind="$props" />',
})
export const FooterSection = Default.bind({})
FooterSection.args = {}

const FLink = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FooterLink },
  template: '<footer-link v-bind="$props" />',
})

export const footerlink = FLink.bind({})
footerlink.args = {
  linktext: 'Support',
}
const FSocial = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FooterSocial },
  template: '<footer-social v-bind="$props" />',
})

export const footersocial = FSocial.bind({})
footersocial.args = {}

const FCopyright = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FooterCopyright },
  template: '<footer-copyright v-bind="$props" />',
})

export const footercopyright = FCopyright.bind({})
footercopyright.args = {
  text: 'Cause © 2020',
}
