import { completed, home, important, list } from "./Icons";

export const menu = [
    {
        id: 1,
        title: "All Tasks",
        link: "/",
        icon: home,
    },
    {
        id: 2,
        title: "Important",
        link: "/important",
        icon: important,
    },
    {
        id: 3,
        title: "Completed",
        link: "/completed",
        icon: completed,
    },
    {
        id: 4,
        title: "Do it Now",
        link: "/todo",
        icon: list,
    },
];

