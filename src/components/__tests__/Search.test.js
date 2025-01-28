import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantList from "../RestaurantList";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react";

// Mocking the fetch API globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should filter top rated resaturant", async () => {

    await act(async () => {
      render(
        <BrowserRouter>
          <RestaurantList />
        </BrowserRouter>
      );
    });
  

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20); 
  
    const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});

    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(18);
    
  });

  it("should filter restaurants on search base",async()=>{
     await act(()=>{
        render(
            <BrowserRouter>
              <RestaurantList/>
            </BrowserRouter>
        )
     });

     const searchInput = screen.getByTestId("searchInput");

     const searchBtn = screen.getByRole("button",{name:"Search"});

     fireEvent.change(searchInput,{ target : { value :"burger"}});

     const cardsAfterSearch = screen.getAllByTestId("resCard");

     expect(cardsAfterSearch.length).toBe(20);
  })