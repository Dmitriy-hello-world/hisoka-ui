export const useLogOut = () => {
  // dispatch(logOutUser());
  localStorage.removeItem('token');
};
