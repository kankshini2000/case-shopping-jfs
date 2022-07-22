import axios from 'axios';

const cart_url = "http://localhost:9090/api/cart/v1/cart/";
class CartService {
    async getCart(cartId) {
        return axios.get(cart_url + `getcart/${cartId}`);
    }
    addToCart(username, productId) {
        return axios.post(`http://localhost:9090/api/cart/v1/cart/additem/${username}/${productId}`)
    }

    updateCart(username, productId, quantity) {
        axios.put(`http://localhost:9090/api/cart/v1/cart/updateitem/${username}/${productId}/${quantity}`)
    }

    deleteCartItem(username, productId) {
        axios.post(`http://localhost:9090/api/cart/v1/cart/deleteitem/${username}/${productId}`)
    }

    deleteCart(username) {
        axios.delete(`http://localhost:9090/api/cart/v1/cart/deletecart/${username}`)
    }
}

export default new CartService();