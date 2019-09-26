import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import githubAPI from '@/eventServices/github_api_v3.js'



export default new Vuex.Store({
  state: {
    searchedUser: null,
    currentPage: 1,
    perpage: 3,
    repos: [],
    searchResults: [],
    sortMethod: 'created',
    links: null,
    isLoading: false
  },
  mutations: {
    CLEAR_REPOS(state) {
      state.repos.splice(0);
    },
    INIT_REPOS(state, repos) {
      state.repos = repos;
    },
    PUSH_REPOS(state, repos) {
      state.repos.push(...repos);
    },
    SET_SEARCH_RESULTS(state, searchResults) {
      state.searchResults = searchResults;
    },
    SET_USER(state, user) {
      state.searchedUser = user;
    },
    RESET_PAGE(state) {
      state.currentPage = 1;
    },
    NEXT_PAGE(state) {
      state.currentPage++;
    },
    UPDATE_LINK(state, header) {
      function parse_link_header(header) {
        if (header.length === 0) {
          throw new Error("input must not be of zero length");
        }

        // Split parts by comma
        var parts = header.split(',');
        var links = {};
        // Parse each part into a named link
        for (var i = 0; i < parts.length; i++) {
          var section = parts[i].split(';');
          if (section.length !== 2) {
            throw new Error("section could not be split on ';'");
          }
          var url = section[0].replace(/<(.*)>/, '$1').trim();
          var name = section[1].replace(/rel="(.*)"/, '$1').trim();
          links[name] = url;
        }
        return links;
      }
      state.links = parse_link_header(header);
    },
    SET_SORT_METHOD(state, method) {
      state.sortMethod = method;
    },
    SET_LOADING_STATE(state, bool) {
      state.isLoading = bool;
    }
  },
  actions: {
    getReposByUser(context, {
      user,
      page,
      perpage
    }) {
      context.commit('SET_LOADING_STATE', true);
      githubAPI.getReposByUser(user, page, perpage).then(res => {
        context.commit('PUSH_REPOS', res.data)
        context.commit('SET_LOADING_STATE', false);
      }).catch(err => {
        console.log(err);
        context.commit('SET_LOADING_STATE', false);
      })
    },
    getReposByUrl(context, url) {
      context.commit('SET_LOADING_STATE', true);
      githubAPI.getReposByUrl(url).then(res => {
        context.commit('PUSH_REPOS', res.data)
        context.commit('SET_LOADING_STATE', false);
      }).catch(err => {
        console.log(err);
        context.commit('SET_LOADING_STATE', false);
      })
    },
    searchUser(context, {
      user,
      page,
      perpage
    }) {
      context.commit('SET_LOADING_STATE', true);
      githubAPI.searchUser(user, page, perpage).then(res => {
        context.commit('SET_SEARCH_RESULTS', res.data.items)
        context.commit('SET_LOADING_STATE', false);
      }).catch(err => {
        console.log(err);
        context.commit('SET_LOADING_STATE', false);
      })
    },
    selectUser(context, {
      user
    }) {
      context.commit('SET_USER', user);
      context.commit('RESET_PAGE');
      context.dispatch('getInitReposByUser', user);
    },
    getInitReposByUser(context, user) {
      context.commit('SET_LOADING_STATE', true);
      githubAPI.getReposByUser(user, context.state.currentPage, context.state.perpage, context
        .state.sortMethod).then(
        res => {
          context.commit('SET_LOADING_STATE', false);
          context.commit('INIT_REPOS', res.data)
          context.commit('UPDATE_LINK', res.headers.link)
        }).catch(err => {
        context.commit('SET_LOADING_STATE', false);
        console.log(err);
      })
    },
    loadMoreRepos(context) {
      if (!context.state.links.next) {
        return
      }
      context.commit('SET_LOADING_STATE', true);
      githubAPI.getByDirectUrl(context.state.links.next).then(
        res => {
          context.commit('SET_LOADING_STATE', false);
          context.commit('PUSH_REPOS', res.data);
          context.commit('UPDATE_LINK', res.headers.link);
        }).catch(err => {
        context.commit('SET_LOADING_STATE', false);
        console.log(err);
      })
    },
    reSort(context) {
      context.commit('SET_LOADING_STATE', true);
      githubAPI.getReposByUser(context.state.searchedUser, context.state.currentPage,
        context.state.perpage, context
        .state.sortMethod).then(
        res => {
          context.commit('SET_LOADING_STATE', false);
          context.commit('INIT_REPOS', res.data)
          context.commit('UPDATE_LINK', res.headers.link)
        }).catch(err => {
        console.log(err);
      })
    }
  },
});
