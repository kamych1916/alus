<template>
  <transition name="fade">
    <div v-if="value" class="modal">
      <div class="modal-outer" @click="closeHandle()" />
      <transition name="bounceIn">
        <div v-if="isWrapper" class="modal-wrapper">
          <div @click="closeHandle()" class="modal-wrapper__close">
            <i class="bx bx-x"></i>
          </div>
          <div class="modal-content">
            <slot />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import bodyScroll from "@/plugins/BodyScroll.js";
export default {
  props: {
    value: {
      default: false,
    },
    secondary: {
      default: false,
    },
  },
  data() {
    if (this.value) {
      setTimeout(() => {
        this.isWrapper = true;
      }, 100);
    } else {
      setTimeout(() => {
        this.isWrapper = false;
      }, 100);
    }
    return {
      isWrapper: false,
    };
  },
  methods: {
    closeHandle() {
      this.$emit("close");
    },
  },
  created() {
    if (!this.secondary) {
      bodyScroll.disable();
    }
  },

  destroyed() {
    if (!this.secondary) {
      bodyScroll.enable();
    }
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 102;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1.1);
  @include less-than(laptop_l) {
    transform: scale(1);
  }

  &-outer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: saturate(180%) blur(15px);
  }

  &-wrapper {
    background: #fff;
    position: relative;
    border-radius: 20px;
    transition: all 0.25s ease;
    box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.5);
    margin: auto;
    transition: all ease 0.6s;
    z-index: 11;
  }
  &-wrapper__close {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    background: #fff;
    cursor: pointer;
    position: absolute;
    right: -9px;
    top: -9px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
  }

  &-content {
    overflow: auto;
    width: 650px;
    height: 100%;
    position: relative;
    max-width: 650px;
    max-height: 650px;
    border-radius: 20px;
    // @include less-than(laptop_l) {
    //   max-width: 400px;
    // }
    @include less-than(tablet) {
      max-width: 350px;
    }
  }
}
.modal .bounceIn-enter-active {
  animation: bounceIn 0.3s;
}
.bounceIn-leave-active {
  animation: bounceIn 0.3s reverse;
}

.fade-enter-active {
  animation: fade 0.15s;
}
.fade-leave-active {
  animation: fade 0.15s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
}
</style>
