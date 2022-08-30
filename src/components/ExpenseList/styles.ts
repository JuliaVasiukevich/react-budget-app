import styled from "styled-components";
import { Color } from "../../ui/colors";

const Wrapper = styled.div`
  height: 200px;
  overflow-y: auto;

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color:${Color.PrimaryGray};
  }
  
`;

const EmptyWrapper = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Wrapper, EmptyWrapper };
