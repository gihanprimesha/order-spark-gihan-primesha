<template>
	<div class="topnav">
		<a @click="showModal = true" class="pointer">Cart</a>
		<a class="totalPrice" href="">Total Price - ${{totalPrice}}</a>
	</div>
	<teleport to="#modal-root">
		<Modal v-show="showModal" @close="showModal = false">
			<Cart />
		</Modal>
	</teleport>
</template>

<script>
import Modal from './Modal.vue';
import Cart from './Cart.vue';

export default {
	name: 'Navigation',
	components: {
		Modal,
		Cart,
	},
	data() {
		return {
			showModal: false,
		};
	},

	computed: {
		totalPrice() {
			return this.$store.getters.getCartTotalPrice;
		},
	},
};
</script>

<style scoped>
/* Add a black background color to the top navigation */
.topnav {
	background-color: #333;
	overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
	float: left;
	color: #f2f2f2;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
	background-color: #ddd;
	color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
	background-color: #04aa6d;
	color: white;
}

.pointer {
	cursor: pointer;
}

.totalPrice {
	float: right !important;
	text-align: center;
	font-family: arial;
}
</style>
