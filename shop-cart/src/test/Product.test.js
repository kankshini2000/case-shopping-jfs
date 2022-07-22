import { render, waitFor, screen, getByTestId } from "@testing-library/react";
import axios from "axios";
import ProductList from "../components/ProductList";
import ProductService from "../service/ProductService"

jest.mock("axios");

test("todos list", async () => {
    const dummyTodos = 
[
    {
        productId: "123",
        productType: "Full Sleeves",
        productName: "TS Athiletic",
        category: "T-Shirst",
        image: "abc.jpg",
        price: 499.0,
        rating: 3.8,
        description: "Fully Conforatable"
    },
    {
            productId: "124",
            productType: "Full Sleeves",
            productName: "TS Basic",
            category: "T-Shirt",
            image: "abd.jpg",
            price: 799.0,
            rating: 3.5,
            description: "Woolen,Fully Conforatable"
        },
]
axios.post.mockResolvedValue({ data: dummyTodos });

expect((await ProductService.addProduct( dummyTodos )).data).toBe(dummyTodos);
});


