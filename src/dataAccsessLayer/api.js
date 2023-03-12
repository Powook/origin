import axios from "axios";

let instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true
})

export const userApi = {
   getUsers(usersCountOnPage = 10, currentPage = 1) {
      return instance.get(`users?count=${usersCountOnPage}&page=${currentPage}`)
         .then(response => response.data)
   },
   getProfile(id) {
      return profileApi.getProfile(id)
   },
   authMe() {
      return authApi.me()
   },
   follow(id) {
      return instance.post(`follow/${id}`, { }) 
      //в посте если что надо второй параметр пока пустым оставлять, если ошибки будут- захардкодь напрямую черех аксиос
   },
   unfollow(id) {
      return instance.delete(`follow/${id}`)
   }
}

export const profileApi = {
   getProfile (id) {
      return instance.get(`profile/${id}`)
      .then(response =>response.data)
   },
   getStatus (id) {
      return instance.get(`profile/status/${id}`)
   },
   setStatus(status) {
      return instance.put(`profile/status`, {status})
   }

}

export const authApi = {
   me () {
      return instance.get(`auth/me`)
   }, 
   login(email, password) {
      return instance.post( '/auth/login' , {email, password} )
   },
   logout () {
      return instance.delete(`auth/me`)
   }
}