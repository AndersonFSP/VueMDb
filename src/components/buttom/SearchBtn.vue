<template>
   <input 
    type="text" 
    class="form__search" 
    :placeholder="placeholder" 
    name="search" 
    @input="handleInput($event.target.value)"
   />
</template>

<script>
export default {
  name: "SearchBtn",
  props: {
    value: {},
    placeholder: String
    },
  data() {
    return {
      // content: this.value
    }
  },
  methods: {
    handleInput(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss">
  .form__search {
    border: none;
    border-radius: 3px;
    font-size: 1.5rem;
    padding: 0.3rem;
    margin-right: 3px;
}
</style>