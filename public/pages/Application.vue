<template>
	<NavigationBar />
	<carousel :items-to-show="4.5">
		<slide v-for="product in products" :key="product.id">
			<Product :productDetails="product" @addToCart="addItems" />
		</slide>
	</carousel>
</template>

<script>
import Product from '../components/Product.vue';
import NavigationBar from '../components/Navigation.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import products from '../helpers/products';

export default {
	name: 'Application',
	components: {
		Product,
		NavigationBar,
		Carousel,
		Slide,
	},
	data() {
		return {
			products: products,
		};
	},

	methods: {
		addItems: function (item) {
			this.$store.commit('addToCart', item);
		},
	},
};
</script>

<style scoped></style>
