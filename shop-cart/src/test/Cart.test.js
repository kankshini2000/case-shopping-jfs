import { render, waitFor, screen, getByTestId } from "@testing-library/react";
import axios from "axios";
import CartService from "../service/CartService";

jest.mock("axios");

test("carts list", async () => {
    const cart = {
        cartId: "by2900",
        totalPrice: 1665.0,
        items: [
            {
                product: {
                    productId: "130",
                    productName: "TS Black Mac",
                    price: 555.0
                },
                quantity: 3,
                subTotal: 1665.0
            },
            {
                product: {
                    productId: "131",
                    productName: "TS Mac",
                    price: 500.0
                },
                quantity: 3,
                subTotal: 1500.0
            }
        ]
    }
axios.post.mockResolvedValue({ data: cart });

expect((await CartService.addToCart( "by2900",131 )).data).toBe(cart);
});


