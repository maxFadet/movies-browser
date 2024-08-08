import { Container, Image, Legend, Wrapper } from "./styled"

export const Loader = () => {
    return (
        <Container>
            <Legend>
                Search results for “Mulan”
            </Legend>
            <Wrapper>
                <Image />
            </Wrapper>
        </Container>
    )
}