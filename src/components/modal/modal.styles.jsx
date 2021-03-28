import styled from "styled-components";
import { DarkGray, White, LightGray } from "../../lib";

export const ModalStyles = styled.div`
  background-color: #00000046;
  height: 100vh;
  width: 100vw;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container {
    border-radius: 25px 0px 25px 0px;
    .header {
      border-radius: 10px 10px 0px 0px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 10px 0;
      background-color: ${DarkGray};
      .x-button {
        background-color: ${DarkGray};
        color: ${White};
        margin-right: 10px;
        border: none;
        font-size: 20px;
        font-weight: bold;
        &:hover {
          cursor: pointer;
          color: ${LightGray};
        }
      }
      .title {
        margin-left: 10px;
        color: ${White};
      }
    }
    .modal-content {
      border-radius: 0px 0px 10px 10px;
      padding: 20px;
      background-color: white;
    }
  }
`;
