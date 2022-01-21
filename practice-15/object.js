// console.log(users, posts, comments);

users.forEach((user) => {
    const userId = user.id;
    user.posts = posts.filter((post) => {
        if (post.userId === userId) {
            post.comments = comments.filter((e) => e.postId === post.Id);
            return true;
        }
        return false;
    })
})

// console.log(users.sort((a, b) => {
//     return a.name > b.name ? 1 : -1;
// }))
// console.log(users.sort((a, b) => {
//     return a.posts.length > b.posts.length;
// }))

function search(str) {
    let _posts = [];
    let _comments = [];

    const _users = users.filter((e) => {
        _posts = [
            ...posts,
            ...e.posts.filter ((p) => {
                _comments = [
                    ..._comments,
                    ...p.comments.filter((c) => {
                        c.body.includes(str)
                    })
                ];
                return p.body.includes(str);
            })
        ];
        return e.name.includes(str);
    })
    return [_users, _posts, _comments];
}

console.log(search('b'));
// console.log(search('lorem'));
