<template>
	<tr>
		<td>
			<img
				:src="'../assests/images/' + item.image"
				alt="item-image"
				class="item-image"
			/>
		</td>
		<td>{{ item.name }}</td>
		<td>{{ item.description }}</td>
		<td>{{ item.price }}</td>
		<td>
			<img
				:src="'../assests/images/remove.png'"
				alt="close"
				class="close-image"
				@click="romoveItems(item.id)"
			/>
		</td>
	</tr>
</template>

<script>
export default {
	name: 'CartItem',
	props: { item: { type: Object, required: true } },
	methods: {
		romoveItems: function (id) {
			this.$store.commit('removeFromCart', id);
		},
	},
};
</script>

<style scoped>
th,
td {
	text-align: center;
	padding: 16px;
	font-family: arial;
}

th:first-child,
td:first-child {
	text-align: left;
}

tr:nth-child(even) {
	background-color: #f2f2f2;
}

.fa-check {
	color: green;
}

.fa-remove {
	color: red;
}

.close-image {
	width: 20px;
	cursor: pointer;
}

.item-image {
	width: 20px;
	cursor: pointer;
}
</style>
