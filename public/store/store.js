import { createStore } from 'vuex';

const state = {
	cartList: [],
};

/**
 * If project is big one getters should be in different files
 */
const getters = {
	getCartTotalPrice: (state) => {
		return state.cartList
			.reduce((total, item) => {
				return total + parseFloat(item.price);
			}, 0)
			.toFixed(2);
	},
};

const mutations = {
	addToCart(state, item) {
		if (state.cartList.some((list) => list.id === item.id)) {
			return false;
		} else {
			state.cartList.push(item);
		}
	},

	removeFromCart(state, id) {
		state.cartList = state.cartList.filter((item) => item.id !== id);
	},
};

export const store = createStore({ state, getters, mutations });
