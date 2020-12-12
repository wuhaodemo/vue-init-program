<template>
  <div class="home">
    <van-button type="primary">主要按钮</van-button>
    <div class="item">{{ name }}</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      name: 'wuhao'
    };
  }
};
</script>

<style lang="less" scoped>
.item {
  font-size: 33px;
}
</style>
