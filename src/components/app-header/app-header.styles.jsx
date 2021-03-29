import styled from "styled-components";
import { DarkGray, Active, White, maxAppWidth } from "../../lib";

export const AppHeaderStyles = styled.header`
  width: 100vw;
  background-color: ${DarkGray};
  max-height: 60px;

  .header-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: ${maxAppWidth}px;
    margin: auto;
    .page-title{
      color: white;
    }
    .left-group{  
      display: flex;
      align-items: center;
      justify-content: center; 
      .company-logo{
        height: 50px;
      }
      // @media (max-width: 768px) {
      //   flex-direction: column;
      //   .company-logo{
      //     height: 50px;
      //   }
      // }
    }
    .right-group {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      .link {
        font-weight: bold;
        margin-left: 10px
        color: ${White};
        &.active {
          color: ${Active};
        }
      }
    }
  }
`;
