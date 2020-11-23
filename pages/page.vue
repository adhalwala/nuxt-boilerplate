<template>
  <my-page :user="user" />
</template>

<script>
import MyPage from '~/components/Page.vue'

export default {
  layout: 'full-layout',
  components: {
    MyPage,
  },
  data() {
    return {
      user: {},
    }
  },
}
</script>
