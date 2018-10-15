<template>
  <div class="hello">
    <el-select v-model="value" placeholder="Select">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      options: [
        { value: 'Option1', label: 'Option1' },
        { value: 'Option2', label: 'Option2' },
        { value: 'Option3', label: 'Option3' },
      ],
      value: ''
    }
  }
}
</script>
