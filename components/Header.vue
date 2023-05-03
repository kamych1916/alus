<template>
  <header class="header section">
    <div class="header-wrapper">
      <div class="header-img">
        <img src="/logo.svg" alt="" />
      </div>
      <p>Report 28.02.2023 - 28.03.2023</p>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 0;
  border-bottom: 1px solid #ffffff;
  margin-top: 30px;
  @include less-than(laptop) {
    margin-top: 0px;
    padding: 20px 0;
    border: 0;
  }

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include less-than(laptop) {
      flex-direction: column;
    }
  }
  &-img {
    @include less-than(laptop) {
      width: 100%;
      border-bottom: 1px solid #ffffff;
      display: flex;
      justify-content: center;
      padding-bottom: 14px;
    }
  }
  img {
    @include less-than(laptop) {
      width: 80px;
    }
  }
  p {
    font-size: 20px;
    line-height: 109.2%;
    letter-spacing: -0.02em;
    color: #ffffff;
    @include less-than(laptop) {
      font-size: 12px;
      padding-top: 14px;
    }
  }
}
</style>
