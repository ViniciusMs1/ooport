


export default {
  auth(to: any, from: any, next: any) {
    if (!localStorage.getItem('token')) {
      next('/login')
    }
    next();
  },

  logout(next: any) {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      next('/login')
    }
    next();
  }
}