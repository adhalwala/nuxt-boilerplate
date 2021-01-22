import HeadingH1 from '~/components/HeadingH1.vue'
import HeadingH1Alt from '~/components/HeadingH1Alt.vue'
import HeadingH2 from '~/components/HeadingH2.vue'
import HeadingH3 from '~/components/HeadingH3.vue'
import HeadingH4link from '~/components/HeadingH4link.vue'
import Paragraph from '~/components/Paragraph.vue'

export default {
  title: 'Components/Heading',
  component: HeadingH1,
  HeadingH1Alt,
  HeadingH2,
  HeadingH3,
  HeadingH4link,
  Paragraph,

  // decorators: [
  //   () => ({
  //     template: '<v-app><v-main><story /></v-main></v-app>',
  //   }),
  // ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeadingH1 },
  template: '<heading-h1 />',
})
const HeadingH1AltTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeadingH1Alt },
  template: '<heading-h1-alt />',
})
const Template2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeadingH2 },
  template: '<heading-h2 />',
})
const HeadingH3Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeadingH3 },
  template: '<heading-h3 />',
})
const HeadingH4Link = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeadingH4link },
  template: '<heading-h4link />',
})
const ParagraphTag = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Paragraph },
  template: '<paragraph />',
})

export const H1 = Template.bind({})
H1.args = {}
export const H1Alt = HeadingH1AltTemplate.bind({})
H1Alt.args = {}
export const H2 = Template2.bind({})
H2.args = {}
export const H3 = HeadingH3Template.bind({})
H3.args = {}
export const H4link = HeadingH4Link.bind({})
H4link.args = {}
export const PTag = ParagraphTag.bind({})
PTag.args = {}
