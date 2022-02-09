import React from "react";
import { Wrap } from "./AutoComplete";
import Input from "./Input";
import Container from "../Container";

export default {
    title: "Components/AutoComplete",
    component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.decorators = [
    (Story) => (
        <div style={{ width: "70vw" }}>
            <Story />
        </div>
    ),
];

export const WithContainer = Template.bind({});
WithContainer.decorators = [
    (Story) => (
        <Container title="AutoComplete">
            <Wrap>
                <Story />
            </Wrap>
        </Container>
    ),
];
