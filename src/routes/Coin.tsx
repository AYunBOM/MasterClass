import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { styled } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
  font-size: 50px;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 40px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface RouteParams {
  coinID: string;
}

interface RouteState {
  name: string;
}

function Coin() {
  const { coinID } = useParams<RouteParams>();
  const [loading, setLoading] = useState(true);
  const { state } = useLocation<RouteState>();

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
