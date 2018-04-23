<template>
 <div>
  <za-button :theme='buttonTheme' size='lg' shape='round'>{{name}}</za-button>
 </div>
</template>
<script lang="ts">
 import Vue from 'vue'

 const getName = (name: string | null) => {
   if (name === null) return '12';
   if (name.length) return name;
 }
 
  export default Vue.extend({
  data() {
    return {
      name: '',
      buttonTheme: '123'
    }
  }
 })
</script>