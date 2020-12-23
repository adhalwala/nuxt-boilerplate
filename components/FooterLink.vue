<template>
  <div class="d-flex footer-link">
    <v-col class="col-12 text-left">
      <ul class="align-self-center">
        <li>{{ linktext }}</li>
        <li>{{ linktext }}</li>
        <li>{{ linktext }}</li>
      </ul>
    </v-col>
  </div>
</template>
<style lang="scss" scoped>
.footer-link {
  ul {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    justify-content: center;
    li {
      color: #a5d6fe;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 34px;
      display: flex;
      padding: 0 10px;
    }
  }
}
</style>
<script>
export default {
  name: 'FooterLink',
  props: {
    linktext: String,
  },
}
</script>
