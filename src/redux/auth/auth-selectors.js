const getAuthentificated = state => Boolean(state.auth.isLogedIn);
const getUsername = state => state.auth.user.name;
const getUseremail = state => state.auth.user.email;
export default { getAuthentificated, getUsername, getUseremail };
