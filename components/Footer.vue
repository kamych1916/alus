<template>
  <footer class="footer">
    <div class="section footer-wrapper">
      <div>
        <a href="mailto:team@alus.us">team@alus.us</a>
      </div>
      <div class="footer-logo">
        <img src="/logo.svg" alt="" />
      </div>
      <div class="footer-info">
        <span
          >All rights reserved. <br />
          Various trademarks held by their respective owners. 2023
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  padding: 30px 0;
  border-top: 1px solid #ffffff;
  margin-top: auto;
  @include less-than(laptop) {
    padding: 10px 0;
  }
  &-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @include less-than(laptop) {
      text-align: center;
      grid-template-columns: 1fr;
    }
    div {
      @include less-than(laptop) {
        margin-top: 20px;
      }
    }
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  &-logo {
    display: flex;
    justify-content: center;
    img {
      width: 15%;
      @include less-than(laptop) {
        width: 20%;
      }
    }
  }
  &-info {
    text-align: right;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.6);
    @include less-than(laptop) {
      text-align: center;
    }
  }
}
</style>
