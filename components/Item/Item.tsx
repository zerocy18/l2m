import Image from "next/image";

export interface ItemProps {
  avg_unit_price: number;
  enchant_level: number;
  grade: string; //"epic";
  image: string; // "https://assets.playnccdn.com/gamedata/powerbook/l2m/icon/Icon_128/Item/Icon_WP_Orb_G3_003.png";
  item_id: number; //100630002;
  item_name: string; //"핸드 오브 카브리오";
  now_min_unit_price: number; //0;
  server_id: number; //148;
  server_name: string; //"안타라스08";
  world: boolean; //false;
}
const Item = (item: ItemProps) => {
  const { image, item_name, grade } = item;

  return (
    <div>
      <h4>Name : {item_name}</h4> <h5>Grade : {grade}</h5>
      <Image alt='img' src={image} width={100} height={100} />
    </div>
  );
};

export default Item;
