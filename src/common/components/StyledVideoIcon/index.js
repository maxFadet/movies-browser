import { ReactComponent as VideoIcon } from "../../../Video.svg";
import styled from "styled-components";

export const StyledVideoIcon = styled(VideoIcon)`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
       width: 30px;
    };
`;