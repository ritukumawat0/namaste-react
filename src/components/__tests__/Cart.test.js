import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render , screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>Promise.resolve(MOCK_DATA)
    });
});

it("should Load Restaurant Menu Component",async()=>{
    await act(async ()=>{
        render(
            <BrowserRouter>
                 <Provider store={appStore}>
                   <Header/>
                   <RestaurantMenu/>
                   <Cart/>
                 </Provider>
            </BrowserRouter>
        )
    });

    // querying
    const accordianHeader = screen.getByText("Whopper (6)");
    fireEvent.click(accordianHeader);
    const accordianBody = screen.getAllByTestId("foodItems");
    expect(accordianBody.length).toBe(6);

    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
    const addBtns = screen.getAllByRole("button",{name:"Add +"});
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItems").length).toBe(8);
    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}))
    expect(screen.getAllByTestId("foodItems").length).toBe(6);
    expect(screen.getByText("Your cart is empty. Add Items to the Cart")).toBeInTheDocument();
})

//please break above test in smaller test cases..