<template>
  <div>
    dropdown
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$parent.$refs.reference)
  }
}
</script>
