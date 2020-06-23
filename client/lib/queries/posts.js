export const POSTS = {
    query: `
        query {
            getPosts {
                posts {
                    _id
                    title
                    content
                    createdAt
                    likes
                    comments {
                        _id
                    }
                    contributors {
                        reg_no
                    }
                }
            }
        }
    `
}