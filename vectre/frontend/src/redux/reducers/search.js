import {
    STORE_SEARCHED_USERS,
    DO_FOLLOW_SEARCHED_USER,
    DO_UNFOLLOW_SEARCHED_USER,

    STORE_SEARCHED_COMMUNITIES,
    DO_JOIN_SEARCHED_COMMUNITY,
    DO_LEAVE_SEARCHED_COMMUNITY,

    STORE_SEARCHED_POSTS,
    DO_LIKE_SEARCHED_POST,
    DO_UNLIKE_SEARCHED_POST,

    USERS_COMMUNITIES_FILTER,
    STORE_SEARCHED_USERS_COMMUNITIES_FILTER,
    POSTS_SORT_TYPE,
    STORE_SEARCHED_POSTS_SORT_TYPE,
} from "../constants/search";

const initialState = {
    users: [],
    communities: [],
    posts: [],

    usersCommunitiesFilter: USERS_COMMUNITIES_FILTER.ALL,
    postsSearchType: POSTS_SORT_TYPE.LIKES
}

const search = (state = initialState, action) => {
    switch (action.type) {
        case STORE_SEARCHED_USERS:
            return {
                ...state,
                users: action.searchedUsers
            }
        case DO_FOLLOW_SEARCHED_USER:
            return {
                ...state,
                searchedUsers: state.searchedUsers.map((user, i) => user.walletAddress === action.walletAddress ? { ...user, alreadyFollowed: true } : user)
            }
        case DO_UNFOLLOW_SEARCHED_USER:
            return {
                ...state,
                searchedUsers: state.searchedUsers.map((user, i) => user.walletAddress === action.walletAddress ? { ...user, alreadyFollowed: false } : user)
            }
        case STORE_SEARCHED_COMMUNITIES:
            return {
                ...state,
                communities: action.searchedCommunities
            }
        case DO_JOIN_SEARCHED_COMMUNITY:
            return {
                ...state,
                communities: state.communities.map((com, i) => com.communityID === action.communityID ? { ...com, alreadyJoined: true } : com)
            }
        case DO_LEAVE_SEARCHED_COMMUNITY:
            return {
                ...state,
                communities: state.communities.map((com, i) => com.communityID === action.communityID ? { ...com, alreadyJoined: false } : com)
            }
        case STORE_SEARCHED_POSTS:
            return {
                ...state,
                posts: action.searchedPosts
            }
        case DO_LIKE_SEARCHED_POST:
            return {
                ...state,
                posts: state.posts.map((post, i) => post.postID === action.postID ? { ...post, likes: post.likes+1, alreadyLiked: true } : post)
            }
        case DO_UNLIKE_SEARCHED_POST:
            return {
                ...state,
                posts: state.posts.map((post, i) => post.postID === action.postID ? { ...post, likes: post.likes-1, alreadyLiked: false } : post)
            }
        case STORE_SEARCHED_USERS_COMMUNITIES_FILTER:
            const filter = Object.values(USERS_COMMUNITIES_FILTER).includes(action.filter) ? action.filter : state.usersCommunitiesFilter;
            return {
                ...state,
                usersCommunitiesFilter: filter,

                // Clear users/communities if new filter does not include it
                users: state.usersCommunitiesFilter !== filter && (filter !== USERS_COMMUNITIES_FILTER.ALL || filter !== USERS_COMMUNITIES_FILTER.USERS) ? initialState.users : state.users,
                communities: state.usersCommunitiesFilter !== filter && (filter !== USERS_COMMUNITIES_FILTER.ALL || filter !== USERS_COMMUNITIES_FILTER.COMMUNITIES) ? initialState.communities : state.communities
            }
        case STORE_SEARCHED_POSTS_SORT_TYPE:
            const sortType = Object.values(POSTS_SORT_TYPE).includes(action.sortType) ? action.sortType : state.postsSearchType;
            return {
                ...state,
                postsSearchType: sortType,
                posts: state.postsSearchType !== sortType ? initialState.posts : state.posts // Clear posts if sort type changed
            }
        default:
            return state
    }
}

export default search