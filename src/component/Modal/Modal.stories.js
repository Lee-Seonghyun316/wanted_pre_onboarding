import React from "react";
import ModalWindow from "./ModalWindow";
import Modal from "./Modal";

export default {
    title: "Components/Modal",
    component: ModalWindow,
};

const Template = (args) => <ModalWindow {...args} />;

export const Default = Template.bind({});
Default.decorators = [
    (Story) => (
        <div style={{ width: "70vw" }}>
            <Story />
        </div>
    ),
];

export const WithContainer = Template.bind({});
WithContainer.decorators = [(Story) => <Modal />];

Default.argTypes = {
    onModalClose: {
        table: {
            disable: true,
        },
    },
};
