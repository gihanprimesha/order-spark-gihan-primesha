<template>
	<div>
		<div class="card">
			<img
				:src="'../assests/images/' + productDetails.image"
				alt="product-image"
				style="width: 100%"
			/>
			<h1>{{ productDetails.name }}</h1>
			<p class="price">${{ productDetails.price }}</p>
			<p>{{ productDetails.description }}</p>
			<p><button @click="$emit('addToCart', productDetails)">Add to Cart</button></p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Product',
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

.price {
	color: grey;
	font-size: 22px;
}

.card button {
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

.card button:hover {
	opacity: 0.7;
}
</style>
