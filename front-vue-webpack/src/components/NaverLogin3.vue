<template>
  <div id="naverIdLogin" style="display: none"></div>
</template>

<script>
import naverService from '../js/naverService'
export default {
  mounted() {
    naverService().straaa()
    naverService().setNaver()
  },
}
</script>
