const rootState = {
  login: {
    isUserLoggedIn: false,
    isLoggingInProcess: false,
    loggingError: {
      error: false,
      message: '',
    },
    role: null,
    firstName: null,
  },
  blogDetails: {
    isDetailFetched: false,
    isDetailPosted: false,
    blogs: []
  },
  chatDetails: {
    isChatFetched: false,
    chats: []
  }
};

export default rootState;