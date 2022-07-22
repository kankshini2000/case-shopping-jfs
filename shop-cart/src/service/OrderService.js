import axios from 'axios'

class OrderService {
    constructor() {
        //this.id = null;
    }
    orderId = (id) => {
        if (!id) return this.id;
        this.id = id;
    }
    async addOrder(username) {
        return await axios.post(`http://localhost:9090/api/order/v1/order/addOrder/${username}`)
    }
    async updateOrder(orderId) {
        axios.put(`http://localhost:9090/api/order/v1/order/updateOrder/${orderId}`)
    }
    async getOrder(orderId) {
        return await axios.get(`http://localhost:9090/api/order/v1/order/getByOrderId/${orderId}`)
    }
    async getUserOrder(username) {
        return await axios.get(`http://localhost:9090/api/order/v1/order/getTodaysOrders/${username}`)
    }
    async getUserAllOrder(username) {
        return await axios.get(`http://localhost:9090/api/order/v1/order/getOrder/${username}`)
    }


}

export default new OrderService();
