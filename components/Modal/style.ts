import styled from "@emotion/styled";

const OutLayer = styled.div`
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalContainer = styled.div`
  position: fixed;

  // Modal Component 항상 중앙유지
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform: translate(-50%, -47%);
  background: navy;
  // padding 의 경우 figma상의 최소치 설정
  padding: 86px 78px 40px 78px;
  text-align: center;

  height: 580px;
  width: 656px;
  border-radius: 12px;
  transform: translate(-50%, -50%);
`;

export { OutLayer, ModalContainer };
