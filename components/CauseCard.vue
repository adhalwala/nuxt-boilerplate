<template>
  <v-main class="primary-dark-bg cause-card">
    <v-container>
      <v-row style="/*flex-wrap: nowrap*/">
        <v-col class="col-4 text-center">
          <v-card class="pa-2 d-flex row text-center" dark>
            <div class="text-center col-12">
              <img :src="imgsrc" />
            </div>
            <h3>{{ title }}</h3>
            <span class="align-self-center">{{ description }} </span>
            <div class="text-center col-12 align-self-end">
              <button class="learn-more-btn">
                Learn more <v-icon>mdi-chevron-right</v-icon
                ><v-icon>mdi-chevron-double-right</v-icon>
              </button>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import '~/assets/causecard.css'

export default {
  name: 'CouseCard',

  props: {
    imgsrc: String,
    title: String,
    description: String,
  },
}
</script>
