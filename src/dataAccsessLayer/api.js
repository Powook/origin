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
      return instance.get(`profile/${id}`)
         .then(response =>response.data)
   },
   authMe() {
      return instance.get('auth/me')
         .then(response => response.data)
   },
   follow(id) {
      return instance.post(`follow/${id}`, { }) 
      //в посте если что надо второй параметр пока пустым оставлять, если ошибки будут- захардкодь напрямую черех аксиос
   },
   unfollow(id) {
      return instance.delete(`follow/${id}`)
   }
}