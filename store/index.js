const axios = require("axios");

export const state = () => ({
  posts: [],
  post: {},
  post_replies: {},

  tags: [],
  tag: {},

  users: [],
  user: {},
  user_posts: {},
  user_tags: {},
  user_replies: {},


  replies: [],
  reply: {},
})

export const mutations = {
  SET_POSTS (state, posts) {
    state.posts = posts
  },
  SET_POST (state, post) {
    state.post = post
  },
  SET_POST_REPLIES (state, post_replies) {
    state.post_replies = post_replies
  },

  SET_TAGS (state, tags) {
    state.tags = tags
  },
  SET_TAG (state, tag) {
    state.tag = tag
  },

  SET_USERS (state, users) {
    state.users = users
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_USER_POSTS (state, user_posts) {
    state.user_posts = user_posts
  },
  SET_USER_TAGS (state, user_tags) {
    state.user_tags = user_tags
  },
  SET_USER_REPLIES (state, user_replies) {
    state.user_replies = user_replies
  },

  SET_REPLIES (state, replies) {
    state.replies = replies
  },
  SET_REPLY (state, reply) {
    state.reply = reply
  },
}

export const actions = {
  async loadPosts({ commit }) {
    let response = await getApi(`/posts?filter[include][0][relation]=user&filter[include][1][relation]=tag`, this.$axios)
    let posts = response.data

    commit('SET_POSTS', posts);
  },

  async loadPost({ commit }, { id }) {
    let response = await getApi(`/posts/${id}?filter[include][0][relation]=user`, this.$axios)
    let post = response.data

    commit('SET_POST', post);
  },

  async loadPostReplies({ commit }, { id }) {
    let response = await getApi(`/posts/${id}/replies?filter[include][0][relation]=user`, this.$axios)
    let post_replies = response.data

    commit('SET_POST_REPLIES', post_replies);
  },

  async loadTags({ commit }) {
    let response = await getApi(`/tags/`, this.$axios)
    let tags = response.data

    commit('SET_TAGS', tags);
  },

  async loadTag({ commit }, { id }) {
    let response = await getApi(`/tags/${id}`, this.$axios)
    let tag = response.data

    commit('SET_TAG', tag);
  },

  async loadUsers({ commit }) {
    let response = await getApi(`/users/`, this.$axios)
    let users = response.data

    commit('SET_USERS', users);
  },

  async loadUser({ commit }, { id }) {
    let response = await getApi(`/users/${id}`, this.$axios)
    let user = response.data

    commit('SET_USER', user);
  },

  async loadUserPosts({ commit }, { id }) {
    let response = await getApi(`/users/${id}/posts`, this.$axios)
    let user_posts = response.data

    commit('SET_USER_POSTS', user_posts);
  },

  async loadUserTags({ commit }, { id }) {
    let response = await getApi(`/users/${id}/tags`, this.$axios)
    let user_tags = response.data

    commit('SET_USER_TAGS', user_tags);
  },

  async loadUserReplies({ commit }, { id }) {
    let response = await getApi(`/users/${id}/replies`, this.$axios)
    let user_replies = response.data

    commit('SET_USER_REPLIES', user_replies);
  },

  async loadReplies({ commit }) {
    let response = await getApi(`/replies/`, this.$axios)
    let replies = response.data

    commit('SET_REPLIES', replies);
  },

  async loadReply({ commit }, { id }) {
    let response = await getApi(`/replies/${id}`, this.$axios)
    let reply = response.data

    commit('SET_REPLY', reply);
  },
}

const getApi = async function (url, axios) {
  let response = await axios.get(url)

  return {
    data: response.data
  }
}
