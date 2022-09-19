const mock = {
    activeUserId: 2,
    users: [
        {
            id: 1,
            name: 'John Doe',
        },
        {
            id: 2,
            name: 'Billie Bowin',
        },
    ],
    todos: [
        {
            userId: 1,
            title: 'April 17th',
            items: [
                {
                    id: '123',
                    content: 'Wash dishes',
                    completed: false,
                },
                {
                    id: '124',
                    content: 'Call grandmom',
                    completed: false,
                },
                {
                    id: '125',
                    content: 'Do a homework',
                    completed: true,
                }
            ]
        },
        {
            userId: 2,
            title: 'JS learning',
            items: [
                {
                    id: '235',
                    content: 'Watch learning video on Youtube',
                    completed: true,
                },
                {
                    id: '236',
                    content: 'Read \'The Clean Coder\' book',
                    completed: false,
                },
                {
                    id: '237',
                    content: 'Find a mentor',
                    completed: false,
                },
                {
                    id: '238',
                    content: 'Create a simple JS app',
                    completed: false,
                },
            ]
        },
        {
            userId: 2,
            title: 'Weekend routine',
            items: [
                {
                    id: '333',
                    content: 'Clean the room',
                    completed: true,
                },
                {
                    id: '334',
                    content: 'Wash the car',
                    completed: true,
                },
                {
                    id: '335',
                    content: 'Order pizza for dinner',
                    completed: false,
                },
                {
                    id: '336',
                    content: 'Choose a film to watch',
                    completed: false,
                },
            ]
        }
    ]
}

export default mock