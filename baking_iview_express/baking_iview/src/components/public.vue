<template>
  <div class="public_tops">
    <div class="public_yes"><img src="../assets/images/public_img/img1_yes.gif" width="100%" /></div>
    <div class="public_yes"><img src="../assets/images/public_img/img2_no.gif" width="100%" /></div>
    <div class="public_yes"><img src="../assets/images/public_img/img3_no.gif" width="100%" /></div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.public_tops {
  display: flex;
  width: 1080px;
}
.public_yes {
  flex: 1;
}
</style>
