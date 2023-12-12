import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: "100%";
  height: "100%";
  min-height: "100vh";
  background-color: #fff;
`;

export const Content = styled.div`
  width: 100%;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: auto;
`;
