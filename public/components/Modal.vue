<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <span @click="$emit('close')" class="close">&times;</span>
      <slot></slot>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  emits: ["close"],
};
</script>

<style>
.modal-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
