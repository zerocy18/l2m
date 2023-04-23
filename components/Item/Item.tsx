import { useState } from "react";
import Image from "next/image";
import {
  ItemContainer,
  ItemDataContainer,
  ImageContainer,
  PriceContainer,
  NameContainer,
  EnchantContainer,
} from "./style";
import Modal from "../Modal";

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
    item_id,
    item_name,
    grade,
    server_name,
    now_min_unit_price,
    avg_unit_price,
    enchant_level,
  } = item;
  const [isOpen, setIsOpen] = useState(false);
  const [itemData, setItemData] = useState({});
  const GradeColor: GradeColorType = {
    mythic: "Gold",
    legendary: "purple",
    epic: "red",
    rare: "blue",
    uncommon: "green",
    common: "white",
  };
  const searchItemInfo = async (apiKey: string, url: string, params: any) => {
    const searchParams = new URLSearchParams(params);
    const response = await fetch(url + "?" + searchParams, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    return response.json();
  };

  const url = `https://dev-api.plaync.com/l2m/v1.0/market/items/${item_id}`; // API URL
  const auth =
    "eyJraWQiOiJlMzVmZTBiYi0xMGM0LTRlMDYtOTRiOC1lNGQ0MGQ2NGM5OTQiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOiI4RjQ2MTU5NC04MzlFLTRFQUQtODVDOS1FN0Y1RDQyMkZFQTQifQ.KxUYBe9ypXH1e5_JpaQjvh1Hg7Wj0ubPfGChjSNj0sslpCoGA-Xj-I7xsKawTR-IzIpJt4EVyLgA8ViQWpZZ2go3xyBd_71hv2FATpU49SmUMIzSfYNZTUEM2_zqme5Ga7EFXJEQDF9qxcMDWssKqjT1NO5hAkX6Syo-Jf4cIfTraVdJ0dNM81zV55XIoMrK1bIdxq9Yyqs_NE1cDRh_hNHRlDwCVEn9Wakr7nnQ_oGkzRL2Sf8DMHp2vxCzukuIZVDER3wSJl5SaolTjT8U09QnsZ-c6akOKk3Asqt8lVKdHb2d2F1nc1uCpzLH7Y0Kgesx5xxGeiQjv7Xhw1qZFg"; // 발급받은 API Key 값
  const handleClick = () => {
    // searchItemInfo(auth, url, {}).then((data) => setItemData(data));
    searchItemInfo(auth, url, {}).then((data) => console.log(data));
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ItemContainer>
        <ItemDataContainer>
          <ImageContainer onClick={handleClick}>
            <Image alt='img' src={image} width={100} height={100} />
            <EnchantContainer>+{enchant_level}</EnchantContainer>
          </ImageContainer>
          <NameContainer grade={GradeColor[grade]} onClick={handleClick}>
            {item_name}
          </NameContainer>
          <span>{server_name} 서버</span>
          <PriceContainer>
            <span>최저가 : {now_min_unit_price}</span>
            <span>평균가 :{avg_unit_price} </span>
          </PriceContainer>
        </ItemDataContainer>
      </ItemContainer>
      <Modal isOpen={isOpen} onClose={handleClose}>
        itemData
      </Modal>
    </>
  );
};

export default Item;
