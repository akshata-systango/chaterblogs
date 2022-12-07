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
};

export default rootState;