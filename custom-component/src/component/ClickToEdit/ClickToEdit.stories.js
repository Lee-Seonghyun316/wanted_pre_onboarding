import React from "react";
import ClickToEdit from "./ClickToEdit";
import Input from "./Input";

export default {
    title: "Components/ClickToEdit",
    component: ClickToEdit,
};

export const ClickToEditStories = (args) => <ClickToEdit {...args} />;

export const Default = (args) => <Input {...args} />;
