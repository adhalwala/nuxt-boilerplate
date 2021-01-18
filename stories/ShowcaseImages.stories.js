import ShowcaseImages from '~/components/ShowcaseImages.vue'

export default {
  title: 'Example/ShowcaseImages',
  component: ShowcaseImages,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
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
  components: { ShowcaseImages },
  template: '<showcase-images v-bind="$props" />',
})

export const Showcaseimages = Template.bind({})
Showcaseimages.args = {
  title: 'Hundreds of stores',
  text:
    'We’ve partnered with the brands you love. And more are joining all the time.',
  label: 'Explore stores',
  imgsrc: '/purpose-icon.svg',
}
