<template>
	<h3>Shopping cart</h3>
	<div v-if="getCartList.length > 0">
		<div class="price">${{ totalPrice }}</div>

		<table>
			<tr>
				<th></th>
				<th>Name</th>
				<th>Description</th>
				<th>Price</th>
				<th></th>
			</tr>
			<CartItem v-for="item in getCartList" :key="item.id" :item="item" />
		</table>
	</div>
	<div class="empty-content" v-else>
		<img
			:src="'../assests/images/cart-empty.png'"
			alt="item-image"
			class="class-empty-image"
			width="1"
		/>
		<h4>Your cart is empty !</h4>
	</div>
</template>

<script>
import CartItem from './CartItem.vue';

export default {
	name: 'Cart',
	components: {
		CartItem,
	},
	computed: {
		getCartList() {
			return this.$store.state.cartList;
		},

		totalPrice() {
			return this.$store.getters.getCartTotalPrice;
		},
	},
};
</script>

<style scoped>
table {
	border-collapse: collapse;
	border-spacing: 0;
	width: 100%;
	border: 1px solid #ddd;
}

.price {
	color: grey;
	font-size: 22px;
	float: right;
	margin-right: 100px;
}

.class-empty-image {
	width: 200px;
}

.header {
	display: inline-block;
	width: auto;
}

.empty-content {
	/* width: 300px;
	height: 300px;
	border: 1px solid #c3c3c3;
	display: flex;
	flex-wrap: wrap; */
	align-content: center;
}
</style>
