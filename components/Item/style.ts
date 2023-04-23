import styled from "@emotion/styled";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 20px;
`;

const ItemDataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 10px;
`;

const ImageContainer = styled.div`
  position: relative;
  :nth-of-type(1) {
    grid-row: 1 / span 3;
  }
  cursor: pointer;
`;

const PriceContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const NameContainer = styled.span<{ grade: string }>`
  font-size: 20px;
  color: ${(props) => props.grade};
  align-self: center;
  cursor: pointer;
`;

const EnchantContainer = styled.span`
  position: absolute;
  left: 75px;
  top: 65px;
  font-size: 25px;
  background-color: navy;
  border-radius: 5px;
`;

export {
  ItemContainer,
  ItemDataContainer,
  ImageContainer,
  PriceContainer,
  NameContainer,
  EnchantContainer,
};
