<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <b-modal id="post-detail">
        <header class="modal-header">
          <slot name="header">Default Title</slot>
          <button type="button" class="btn-close" @click="close">X</button>
        </header>
        <section class="modal-body">
          <slot>Default Body</slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">Default Footer</slot>
          <button type="button" class="btn-green" @click="close">Close Window</button>
        </footer>
      </b-modal>
    </div>
  </transition>
</template>

<script>

export default {
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #post-detail {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
    justify-content: center;
    align-items: center;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>
