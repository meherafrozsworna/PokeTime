const initState = {
    count: 3,
    posts: [
        {
            id: '1',
            title: 'Squirtle Laid an Egg',
            body:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat',
        },
        {
            id: '2',
            title: 'Charmander Laid an Egg',
            body:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat',
        },
        {
            id: '3',
            title: 'a Helix Fossil was Found',
            body:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat',
        },
    ],
};

const RootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter((post) => {
            return action.id !== post.id;
        });
        return {
            ...state,
            posts: newPosts,
        };
    }
    if (action.type === 'ADD_POST') {
        console.log('MMMMMMMMMMMMMMMMMMMMMMMMMMMMM');
        const newCount = state.count + 1;
        let newPost = {
            id: newCount + '',
            title: action.title,
            body: action.body,
        };
        let newPostlist = state.posts.concat(newPost);
        console.log(newPostlist);
        return {
            ...state,
            count: newCount,
            posts: newPostlist,
        };
    }

    return state;
};

export default RootReducer;
