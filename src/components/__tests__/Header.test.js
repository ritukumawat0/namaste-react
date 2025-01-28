import { fireEvent, render , screen} from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header component  with login button", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button" , {name:"Login"});

  expect(loginButton).toBeInTheDocument();
});

it("should render header component  with cart items 0", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText("Cart (0 items)")

  expect(cartItem).toBeInTheDocument();
});

it("should render header component  with cart item", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText(/Cart/i)

  expect(cart).toBeInTheDocument();
});

it("should chnage Login button to Logout on click",()=>{
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button",{name:"Login"});

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button",{name:"Logout"});

  expect(logoutButton).toBeInTheDocument();
});