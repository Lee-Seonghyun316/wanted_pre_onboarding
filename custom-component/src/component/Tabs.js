import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";

const Wrap = styled.div`
  --tab-width: 17;
  width: calc(var(--tab-width) * 3 * 1vw + var(--tab-width) * 0.4 * 1vw);
  margin: 20px auto 0 auto;
  overflow: hidden;
  background: pink;
`;

const Nav = styled.nav`
  display: flex;
  position: relative;
  background-color: #e0e0e0;
  justify-content: center;
`;

const Tab = styled.div`
  width: calc(var(--tab-width) * 1vw);
  height: 45px;
  line-height: 45px;
  text-align: center;
  cursor: pointer;
  transition: color 0.15s ease-in;
  font-weight: 600;
  color: ${(props) =>
    props.index === props.currentIndex ? "var(--white)" : "var(--grey)"};
  z-index: 1000;
`;

const Glider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 45px;
  width: calc(var(--tab-width) * 1vw);
  background-color: var(--first);
  //transition: 0.25s ease-out;
  transform: translate3D(
    ${(props) => props.currentIndex * 17 + 0.2 * 17}vw,
    0,
    0
  );
`;

const TabContent = styled.div`
  min-height: 300px;
  line-height: 2.5;
  background-color: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--bold);
`;

const Tabs = () => {
  const [currentIndex, setCurrentindex] = useState(0);
  const tabsData = [
    {
      title: "Tab1",
      content: `Tab menu ONE`,
    },
    {
      title: "Tab2",
      content: `Tab menu TWO`,
    },
    {
      title: "Tab3",
      content: `Tab menu THREE`,
    },
  ];

  return (
    <Container title="Tabs">
      <Wrap tabsLength={tabsData.length}>
        <Nav>
          {tabsData.map(({ title }, index) => (
            <Tab
              index={index}
              key={index}
              onClick={() => setCurrentindex(index)}
              currentIndex={currentIndex}
            >
              {title}
            </Tab>
          ))}
          <Glider currentIndex={currentIndex} />
        </Nav>
        {tabsData.map(({ content }, i) =>
          i === currentIndex ? <TabContent key={i}>{content}</TabContent> : null
        )}
      </Wrap>
    </Container>
  );
};

export default Tabs;
