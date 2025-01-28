import { MENU_API } from "../utils/constants";
import { useEffect, useState} from "react";

const useRestaurantMenu=(resId)=>{
  const [menuInfo, setMenuInfo] = useState(null);

  useEffect(() => {
    menuFetch();
  }, []);

  const menuFetch = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    const resInfo = json.data.cards[2].card.card.info;
    const cards = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

    console.log(cards)

    const menuCards = cards.filter((card) => {
      return card.card.card.itemCards;
    });


    const menuInfos = menuCards.map((menuCard) => {
      const title = menuCard.card.card.title;
      const itemCards = menuCard.card.card.itemCards.map((itemCard) => {
        return {
          id: itemCard.card.info.id,
          name: itemCard.card.info.name,
          price: itemCard.card.info.price / 100,
          defaultPrice : itemCard.card.info.defaultPrice / 100,
          imageId : itemCard.card.info.imageId,
          description : itemCard.card.info.description
        };
      });
      return { title, items: itemCards };
    });

    setMenuInfo({
      restaurantInfo: resInfo,
      menuItems: menuInfos,
    });
  };

  return menuInfo;
}

export default useRestaurantMenu;