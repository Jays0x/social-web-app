

const fetchPost = [
    {
        id: 1,
        title: 'This cardless state',
        content: 'First thing first your parent or the element must have a specific width otherwise how the element suppose to know when to stop and truncate.',
        image: '/post1.jpg',
        avatar: '/avatar1.jpg',
        name: 'Amanda Wheeler',
        bio: 'Product manager, Meta',
        likes: 10,
        allComments: 5,
        comments: [
            {
                id: 1,
                avatar: '/avatar3.jpg',
                name: 'John Doe',
                comment: 'This is a great post!',
            },
            {
                id: 2,
                avatar: '/avatar2.jpg',
                name: 'Jane Smith',
                comment: 'I agree with you',
            },
            {
                id: 3,
                avatar: '/avatar4.jpg',
                name: 'Marcus Alexander',
                comment: 'Good job!',
            },
        ],
    },
    {
        id: 2,
        title: 'Post 2',
        content: 'Content of post 2',
        image: '/post2.png',
        avatar: '/avatar2.jpg',
        name: 'Bessie Norris',
        bio: 'Product manager, Meta',
        likes: 5,
        allComments: 10,
        comments: [
            {
                id: 1,
                avatar: '/avatar4.jpg',
                name: 'John Doe',
                comment: 'This is a great post!',
            },
            {
                id: 2,
                avatar: '/avatar6.png',
                name: 'Zander White',
                comment: 'Very cool post!',
            },
        ],
    },
    {
        id: 3,
        title: 'Post 3',
        content: 'Content of post 3',
        image: '/post3.png',
        avatar: '/avatar3.jpg',
        name: 'Verna Palmer',
        bio: 'Product manager, Meta',
        likes: 8,
        allComments: 7,
    },
    {
        id: 4,
        title: 'Post 4',
        content: 'Content of post 4',
        image: '/post4.jpg',
        avatar: '/avatar4.jpg',
        name: 'Victoria Greene',
        bio: 'Product manager, Meta',
        likes: 12,
        allComments: 3,
    },
    {
        id: 5,
        title: 'Post 5',
        content: 'Content of post 5',
        image: '/post5.jpg',
        avatar: '/avatar5.jpg',
        name: 'Dominic Hunter',
        bio: 'Product manager, Meta',
        likes: 15,
        allComments: 8,
    },
    {
        id: 6,
        title: 'Post 6',
        content: 'Content of post 6',
        image: '/post6.jpg',
        avatar: '/avatar6.png',
        name: 'Jesus Peters',
        bio: 'Product manager, Meta',
        likes: 18,
        allComments: 12,
    },
]


export default fetchPost;   