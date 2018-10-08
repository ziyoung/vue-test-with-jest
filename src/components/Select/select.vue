<template>
  <div class="select">
    <p ref="reference"> reference element</p>
    <dropdown-list />
  </div>
</template>

<script>
import DropdownList from './dropdown-list.vue'

export default {
  data() {
    return {
      a: 1
    }
  },
  mounted() {
    console.log(this.$refs.reference)
  },
  components: {
    DropdownList
  }
}
</script>
