import HeadingCopyBlock from '~/components/HeadingCopyBlock.vue'

export default {
  title: 'Components/Heading Copy Block',
  component: HeadingCopyBlock,
  argTypes: {
    isButton: {
      control: 'boolean',
    },
    isOverline: {
      control: 'boolean',
    },
  },
  // decorators: [
  //   () => ({
  //     template: '<v-app><v-main><story /></v-main></v-app>',
  //   }),
  // ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeadingCopyBlock },
  template: '<heading-copy-block v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  overline: 'Our Mission',
  title: 'Hundreds of stores',
  text:
    'We’ve partnered with the brands you love. And more are joining all the time.',
  label: 'Explore stores',
  imgsrc: '/purpose-icon.svg',
}
export const WithButton = Template.bind({})
WithButton.args = {
  overline: 'Our Mission',
  title: 'Hundreds of stores',
  text:
    'We’ve partnered with the brands you love. And more are joining all the time.',
  label: 'Explore stores',
  imgsrc: '/purpose-icon.svg',
  isButton: true,
}
export const WithOverline = Template.bind({})
WithOverline.args = {
  overline: 'Our Mission',
  title: 'Hundreds of stores',
  text:
    'We’ve partnered with the brands you love. And more are joining all the time.',
  label: 'Explore stores',
  imgsrc: '/purpose-icon.svg',
  isOverline: true,
}
