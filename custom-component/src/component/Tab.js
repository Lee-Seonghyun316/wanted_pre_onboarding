import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";

const TAB_WIDTH = 17;
const tabsData = [
  {
    id: 1,
    title: "Tab1",
    content: `Tab menu ONE`,
  },
  {
    id: 2,
    title: "Tab2",
    content: `Tab menu TWO`,
  },
  { id: 3, title: "Tab3", content: `Tab menu THREE` },
];

const Tab = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Container title="Tabs">
      <Wrap tabsLength={tabsData.length}>
        <Nav>
          {tabsData.map(({ title, id }, index) => (
            <NavItem
              index={index}
              key={id}
              onClick={() => setCurrentIndex(index)}
              currentIndex={currentIndex}
            >
              {title}
            </NavItem>
          ))}
          <Glider currentIndex={currentIndex} />
        </Nav>
        {tabsData.map(({ content, id }, index) =>
          index === currentIndex ? (
            <TabContent key={id}>{content}</TabContent>
          ) : null
        )}
      </Wrap>
    </Container>
  );
};

export default Tab;

const Wrap = styled.div`
  width: calc(${TAB_WIDTH} * 3 * 1vw + ${TAB_WIDTH} * 0.4 * 1vw);
  margin: 20px auto 0;
`;

const Nav = styled.nav`
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray_4};
  justify-content: center;
`;

const NavItem = styled.div`
  width: calc(${TAB_WIDTH} * 1vw);
  height: 45px;
  line-height: 45px;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  transition: color 0.15s ease-in;
  font-weight: ${({ theme }) => theme.fontWeight.bold_600};
  color: ${({ index, currentIndex, theme }) =>
    index === currentIndex ? theme.colors.white : theme.colors.gray_1};
  z-index: 1000;
`;

const Glider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 45px;
  width: calc(${TAB_WIDTH} * 1vw);
  background-color: ${({ theme }) => theme.colors.purple};
  transform: translate3D(
    ${({ currentIndex }) => currentIndex * TAB_WIDTH + 0.2 * TAB_WIDTH}vw,
    0,
    0
  );
`;

const TabContent = styled.div`
  height: 200px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold_500};
`;
