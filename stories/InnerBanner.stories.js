import InnerBanner from '~/components/InnerBanner.vue'

export default {
  title: 'Components/Banner',
  component: InnerBanner,
  argTypes: {
    isButton: {
      control: 'boolean',
    },
    isSearchButton: {
      control: 'boolean',
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InnerBanner },
  template: '<inner-banner v-bind="$props" />',
})

export const InternalPageTitle = Template.bind({})
InternalPageTitle.args = {
  bannersubtitle: 'Australian Red Cross',
  description:
    'Shop, save and turn your purchases into donations for Australian Red Cross.',
  label: 'Shop & raise donations',
  icon: 'mdi mdi-heart',
  isButton: true,
  isSearchButton: false,
}
export const WithSearchButton = Template.bind({})
WithSearchButton.args = {
  bannersubtitle: 'Australian Red Cross',
  description:
    'Shop, save and turn your purchases into donations for Australian Red Cross.',
  label: 'Shop & raise donations',
  icon: 'mdi mdi-magnify',
  isButton: false,
  isSearchButton: true,
  placeholder: 'Find your store',
}
