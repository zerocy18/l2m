"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import Item from "../../components/Item";
import { ItemProps } from "../../components/Item/Item";

const inter = Inter({ subsets: ["latin"] });
async function searchAPITest(apiKey: string, url: string, params: any) {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(url + "?" + searchParams, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });

  return response.json();
}

export default function Home() {
  const [contents, setContents] = useState<ItemProps[]>([]);
  const url = "https://dev-api.plaync.com/l2m/v1.0/market/items/search"; // API URL
  const auth =
    "eyJraWQiOiJlMzVmZTBiYi0xMGM0LTRlMDYtOTRiOC1lNGQ0MGQ2NGM5OTQiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOiI4RjQ2MTU5NC04MzlFLTRFQUQtODVDOS1FN0Y1RDQyMkZFQTQifQ.KxUYBe9ypXH1e5_JpaQjvh1Hg7Wj0ubPfGChjSNj0sslpCoGA-Xj-I7xsKawTR-IzIpJt4EVyLgA8ViQWpZZ2go3xyBd_71hv2FATpU49SmUMIzSfYNZTUEM2_zqme5Ga7EFXJEQDF9qxcMDWssKqjT1NO5hAkX6Syo-Jf4cIfTraVdJ0dNM81zV55XIoMrK1bIdxq9Yyqs_NE1cDRh_hNHRlDwCVEn9Wakr7nnQ_oGkzRL2Sf8DMHp2vxCzukuIZVDER3wSJl5SaolTjT8U09QnsZ-c6akOKk3Asqt8lVKdHb2d2F1nc1uCpzLH7Y0Kgesx5xxGeiQjv7Xhw1qZFg"; // 발급받은 API Key 값

  return (
    <>
      <button
        onClick={() => {
          searchAPITest(auth, url, {
            search_keyword: "핸드 오브 카브리오", // API QueryString (“문서” 메뉴 하위의 검색 Parameters 값 참고)
            sale: false,
          }).then((data) => {
            setContents(data.contents);
            // console.log(data); // 응답값을 출력
          });
        }}>
        API TEST
      </button>
      <>
        {contents.map((value: ItemProps) => {
          const {
            image,
            avg_unit_price,
            enchant_level,
            grade,
            item_id,
            item_name,
            now_min_unit_price,
            server_id,
            server_name,
            world,
          } = value;
          return (
            <Item
              key={item_id}
              image={image}
              avg_unit_price={avg_unit_price}
              enchant_level={enchant_level}
              grade={grade}
              item_id={item_id}
              item_name={item_name}
              now_min_unit_price={now_min_unit_price}
              server_id={server_id}
              server_name={server_name}
              world={world}
            />
          );
          // <Image alt='t' src={value.image} width={200} height={200} />;
        })}
      </>
    </>
  );
}
