import styled from "styled-components";

export const HomeScreenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;

  @media (min-width: 320px) {
    flex-wrap: wrap;
  }
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }

  @media (min-width: 1280px) {
    flex-wrap: nowrap;
  }


`;

export const HomeScreenContent = styled.main`
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  width: 100%;
  min-height: calc(30vh - 5rem);
  margin: 0px 50px -40px;

  h1,
  p {
    color: white;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    font-weight: 700;
  }
`;
export const HomeScreenSidebar = styled.aside`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
    width: 100%;
    min-height: calc(100vh - 5rem);
    display: flex;
    justify-content: center;
    align-items: center;
`;
