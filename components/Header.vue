<template>
  <header class="header section">
    <div class="header-wrapper">
      <img src="/logo.svg" alt="" />
      <p> Report 28.02.2023 - 28.03.2023 </p>
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
    margin-top: 20px;
    padding: 20px 0;
  }

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img{
    @include less-than(laptop) {
      width: 20%;
    }
  }
  p {
    font-size: 20px;
    line-height: 109.2%;
    letter-spacing: -0.02em;
    color: #ffffff;
    @include less-than(laptop) {
      font-size: 16px;
      padding-top: 6px;
    }
  }
}
</style>
