import Image from "next/image";
import {
  ItemContainer,
  ItemDataContainer,
  ImageContainer,
  PriceContainer,
  NameContainer,
  EnchantContainer,
} from "./style";

export interface ItemProps {
  avg_unit_price: number;
  enchant_level: number;
  grade: GradeType; //"epic";
  image: string; // "https://assets.playnccdn.com/gamedata/powerbook/l2m/icon/Icon_128/Item/Icon_WP_Orb_G3_003.png";
  item_id: number; //100630002;
  item_name: string; //"핸드 오브 카브리오";
  now_min_unit_price: number; //0;
  server_id: number; //148;
  server_name: string; //"안타라스08";
  world: boolean; //false;
}
type GradeType = "mythic" | "legendary" | "epic" | "rare" | "uncommon" | "common";
type GradeColorType = {
  [K in GradeType]: string;
};
const Item = (item: ItemProps) => {
  const {
    image,
    item_name,
    grade,
    server_name,
    now_min_unit_price,
    avg_unit_price,
    enchant_level,
  } = item;

  const GradeColor: GradeColorType = {
    mythic: "Gold",
    legendary: "purple",
    epic: "red",
    rare: "blue",
    uncommon: "green",
    common: "white",
  };

  return (
    <ItemContainer>
      <ItemDataContainer>
        <ImageContainer>
          <Image alt='img' src={image} width={100} height={100} />
          <EnchantContainer>+{enchant_level}</EnchantContainer>
        </ImageContainer>
        <NameContainer grade={GradeColor[grade]}>{item_name}</NameContainer>
        <span>server_name: {server_name}</span>
      </ItemDataContainer>
      <PriceContainer>
        <span>lowest price : {now_min_unit_price}</span>{" "}
        <span>28day average :{avg_unit_price}</span>
      </PriceContainer>
    </ItemContainer>
  );
};

export default Item;
