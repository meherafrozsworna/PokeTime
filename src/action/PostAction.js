export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id: id,
    };
};

export const add_post = (title, body) => {
    return {
        type: 'ADD_POST',
        title: title,
        body: body,
    };
};
