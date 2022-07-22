import { render, waitFor, screen, getByTestId } from "@testing-library/react";
import axios from "axios";
import UserService from "../service/LoginService"

jest.mock("axios");
test("users list",async()=> {
    const user = 
{
    
        userName: "kanshi123",
        fullName: "Kanhsi",
        email: "kamshi@srmist.edu.in",
        gender: "Female",
        dob: "2000-02-20",
        role: "user",
        mobile_no: 1234567890,
        password: "$2a$10$FpVPpDaMF0/RSH1yBh7I2ODTWb1N4.MVlnMBldlpYBMdN5dNyoS0a",
        address: {
            house_no: "89",
            street_name: "madha",
            colony_name: "hanumna",
            city: "wardha",
            state: "MH",
            pincode: 442001
        }
        
}
axios.post.mockResolvedValue({ data: user });


expect((await UserService.addUser(user)).data).toBe(user);
});

