import { Title, TitleWithMargin } from "./styled";

const Header = ({ title }) => (
    <Title>{title}</Title>
);

export const HeaderWithMargin = ({ title }) => (
    <TitleWithMargin>{title}</TitleWithMargin>
);

export default Header;