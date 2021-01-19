<template>
  <v-main class="primary-dark-bg cause-rating-strip">
    <v-container>
      <div class="text-center d-flex col-12 pt-0 pb-0">
        <v-rating
          class="white--text"
          color="white"
          length="5"
          size="20"
          readonly="true"
          value="5"
        ></v-rating>
        <span class="white--text pl-sm-4 pl-1 strip-info">10,321</span>
        <span class="white--text pl-2 pr-2 strip-info">|</span>
        <span class="white--text strip-info">Charity</span>
        <span class="white--text pl-2 pr-2 strip-info">|</span>
        <span class="white--text strip-info">1,000,000+ users</span>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import '~/assets/informationstrip.css'

export default {
  name: 'InformationStrip',

  props: {
    label: {
      type: String,
    },
    primary: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onClick() {
      this.$emit('onClick')
    },
  },
}
</script>
