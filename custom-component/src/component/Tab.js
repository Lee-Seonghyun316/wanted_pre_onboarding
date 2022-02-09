import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";

const TAB_WIDTH = 15;
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
  width: calc(${TAB_WIDTH} * 3 * 1.5vw + 2vw);
  max-width: calc(${TAB_WIDTH} * 3 * 14px + 30px);
  margin: 20px auto 0;
`;

const Nav = styled.nav`
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray_4};
  justify-content: flex-end;
`;

const NavItem = styled.div`
  width: calc(${TAB_WIDTH} * 1.5vw);
  max-width: calc(${TAB_WIDTH} * 14px);
  vertical-align: middle;
  text-align: left;
  padding: 15px 5px;
  cursor: pointer;
  transition: color 0.15s ease-in;
  font-size: 0.9em;
  font-weight: ${({ theme }) => theme.fontWeight.bold_700};
  color: ${({ index, currentIndex, theme }) =>
    index === currentIndex ? theme.colors.white : theme.colors.gray_1};
  z-index: 1000;
  background-color: ${({ index, currentIndex, theme }) =>
    index === currentIndex ? theme.colors.purple : theme.colors.gray_4};
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
