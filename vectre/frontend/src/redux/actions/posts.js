import {
    CREATE_POST,
    GET_POST,
    STORE_POST,
    CREATE_REPOST,
    GET_COMMENTS,
    STORE_COMMENTS,
    CREATE_COMMENT,
    POST_LIKE,
    POST_UNLIKE,
    DO_LIKE,
    DO_UNLIKE,
} from "../constants/posts";

// Posts
export const createPost = (text, imageURL) => ({
    type: CREATE_POST,
    text,
    imageURL
})
export const getPost = (postID) => ({
    type: GET_POST,
    postID
})
export const storePost = (post) => ({
    type: STORE_POST,
    post
})
export const createRepost = (repostData, redirectWindow) => ({
    type: CREATE_REPOST,
    repostData,
    redirectWindow
})

// Post interactions:
// Comments
export const createComment = (postID, comment, reloadForm) => ({
    type: CREATE_COMMENT,
    postID,
    comment,
    reloadForm
})
export const getComments = (postID) => ({
    type: GET_COMMENTS,
    postID
})
export const storeComments = (comments) => ({
    type: STORE_COMMENTS,
    comments
})

// Like
export const postLike = (postID, walletAddress, isComment) => ({
    type: POST_LIKE,
    postID,
    walletAddress,
    isComment,
})
export const postUnlike = (postID, walletAddress, isComment) => ({
    type: POST_UNLIKE,
    postID,
    walletAddress,
    isComment,
})

// Internal actions for updating like counter
export const doLike = (postID, walletAddress, isComment) => ({
    type: DO_LIKE,
    postID,
    walletAddress,
    isComment
})
export const doUnlike = (postID, walletAddress, isComment) => ({
    type: DO_UNLIKE,
    postID,
    walletAddress,
    isComment
})