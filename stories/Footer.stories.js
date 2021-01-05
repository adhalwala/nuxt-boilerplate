import Footers from '~/components/Footer'
import FooterLink from '~/components/FooterLink'
import FooterSocial from '~/components/FooterSocial'
import FooterCopyright from '~/components/FooterCopyright'

export default {
  title: 'Example/Footer',
  component: Footers,
  FooterLink,
  FooterSocial,
  FooterCopyright,
  decorators: [
    () => ({
      template: '<v-app><v-main><story /></v-main></v-app>',
    }),
  ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Footers },
  template: '<footers v-bind="$props" />',
})
export const FooterSection = Template.bind({})
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
