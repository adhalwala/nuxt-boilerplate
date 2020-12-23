<template>
  <div class="d-flex footer-social" style="background-color: #dddddd">
    <v-col class="col-12 text-left">
      <ul class="align-self-center">
        <li><img src="/facebook.svg" /></li>
        <li><img src="/twitter.svg" /></li>
        <li><img src="/Linkedin.svg" /></li>
        <li><img src="/instagram.svg" /></li>
      </ul>
    </v-col>
  </div>
</template>
<style lang="scss" scoped>
.footer-social {
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
      padding: 0 8px;
    }
  }
}
</style>
<script>
export default {
  name: 'FooterSocial',
}
</script>
