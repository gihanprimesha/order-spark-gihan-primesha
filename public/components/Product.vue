<template>
  <div>
    <div class="card">
      <div
        class="card-img"
        :style="{
          backgroundImage:
            'url(../assests/images/' + productDetails.image + ')',
        }"
      ></div>
      <h1 class="card-title">{{ productDetails.name }}</h1>
      <p class="card-price">${{ productDetails.price }}</p>
      <p class="card-desc">{{ productDetails.description }}</p>
      <p>
        <button class="card-btn" @click="$emit('addToCart', productDetails)">
          Add to Cart
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: { productDetails: { type: Object, required: true } },
  emits: {
    addToCart: (item) => {
      return true;
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 50px;
  margin-left: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  text-align: center;
  font-family: arial;
}

.card-img {
  width: 100%;
  height: 150px;
  background-size: cover;
  background-repeat: no-repeat;
}

.card-title {
  color: black;
  font-size: 22px;
  padding: 0 10px;
  height: 50px;
}

.card-price {
  color: grey;
  font-size: 22px;
  padding: 0 10px;
}

.card-desc {
  height: 50px;
  padding: 0 10px;
}

.card-btn {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card-btn:hover {
  opacity: 0.7;
}
</style>
