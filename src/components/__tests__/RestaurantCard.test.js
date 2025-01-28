import RestaurantCard from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurantCard";

it("should render RestaurantCard component with props data", () => {
  render(<RestaurantCard res={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

// it("should render RestaurantCard component with promoted label", () => {
//   render(
//     <>
//       <withPromotedLabel />
//       <RestaurantCard res={MOCK_DATA}/>
//     </>
//   );

//   const name = screen.getByText("Promoted");

//   expect(name).toBeInTheDocument();
// });
