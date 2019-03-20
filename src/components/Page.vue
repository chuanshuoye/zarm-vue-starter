<template>
  <div>
    <za-cell>
      <za-button theme="primary" block>普通按钮</za-button>
    </za-cell>
  </div>
</template>
<script>
import { Cell, Button } from "zarm-vue";
export default {
  components: {
    zaCell: Cell,
    zaButton: Button
  },
  data() {
    return {
      name: '123'
    }
  }
}
</script>