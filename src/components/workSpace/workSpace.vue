<template>
  <div>
    <div class="header">
      <div class="header-item ra">1</div>
      <div class="header-item ra">1</div>
      <div class="header-item ra">1</div>
      <div class="header-item ra">1</div>
    </div>
    <div class="work-outer">
      <div class="work-item ra"></div>
      <div class="work-item ra"></div>
      <div class="work-item ra"></div>
      <div class="work-item ra"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.ra {
  border-radius: 16px;
  border: 1px solid #f0f0f0;
}

.header {
  display: flex;
  justify-content: space-between;
  .header-item {
    width: 24%;
    height: 100px;
    margin-bottom: 10rpx;
  }
}
.work-outer {
  width: 100%;
  height: 760px;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  .work-item {
    margin-top: 20px;
    width: calc(50% - 10px);
    height: 50%;
  }
}
</style>