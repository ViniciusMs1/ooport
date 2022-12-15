import Http from "../http"
import router from "../router"

export default {
  auth(to: any, from: any, next: any) {


    Http.interceptors.response.use(
      response => {
        return response
      },
      error => {
        if (error.response.status == 401) {
          localStorage.removeItem('token')
          router.push('/login')
        }
      }
    )


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