<template>
  <header class="bg-primary cause-header">
    <v-container>
      <v-row>
        <div class="d-flex col-12 pt-3 pt-sm-2 align-center">
          <div class="col-6 pt-0 pt-sm-2">
            <logo class="" :width="width" />
          </div>
          <site-menu class="col-6 pt-0 pt-sm-2" />
        </div>
      </v-row>
    </v-container>
  </header>
</template>
<style lang="scss" scoped>
.cause-header {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  .site-logo {
    z-index: 1;
    position: relative;
  }
  @media screen and (max-width: 600px) {
    position: relative;
  }
}
</style>
<script>
import Logo from '~/components/Logo.vue'
import SiteMenu from '~/components/SiteMenu.vue'
export default {
  name: 'Header',
  components: { Logo, SiteMenu },
  props: {
    width: {
      type: String,
      default: '118',
    },
  },
}
</script>
