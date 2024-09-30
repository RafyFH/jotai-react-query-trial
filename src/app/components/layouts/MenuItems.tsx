type MenuItemType = {
    title: string;
    children?: MenuItemType[]; // Children bersifat opsional
};
export const menuItems: MenuItemType[] = [
    {
        title: 'Menu Level 1',
        children: [
            {
                title: 'Menu Level 2 - Item 1',
                children: [
                    { title: 'Menu Level 3 - Item 1' },
                    { title: 'Menu Level 3 - Item 2' },
                ],
            },
            { title: 'Menu Level 2 - Item 2' },
        ],
    },
    {
        title: 'Menu Level 1 - Item 2',
        children: [
            { title: 'Menu Level 2 - Item 1' },
            {
                title: 'Menu Level 2 - Item 2',
                children: [{ title: 'Menu Level 3 - Item 1' }],
            },
        ],
    },
];
