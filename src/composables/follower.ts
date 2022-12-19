import http from "../http/index"
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import router from "../router"
import headers from "../http/headers"
export default function Follower() {
    const isFollowingUser = ref(false)
    const myFollowingUsers = ref([])
    const imFollowingUsers = ref([])
    const loading = ref(true)


    const isFollowing = (id: any) => {
        if (localStorage.getItem('token')) {
            http.post('isFollowing', { id }, {headers:headers}).then(response => {
                isFollowingUser.value = response.data
            }).catch(error => {

            })
        }
    }


    const follow = (id: any) => {
        if (localStorage.getItem('token')) {
            http.post('follow', { id }, {headers:headers}).then(response => {
            }).catch(error => {
            })
        } else {
            router.push('/login')
        }
    }

    const unFollow = (id: any) => {
        if (localStorage.getItem('token')) {
            http.post('unFollow', { id }, {headers:headers}).then(response => {
            }).catch(error => {

            })
        } else {
            router.push('/login')
        }
    }

    const myFollowing = () => {
        http.get('myFollowing', {headers:headers}).then(response => {
            loading.value = false
            myFollowingUsers.value = response.data
        }).catch(error => {
        })
    }

    const imFollowing = () => {
        http.get('imFollowing', {headers:headers}).then(response => {
            imFollowingUsers.value = response.data
        }).catch(error => {
        })
    }







    return {
        isFollowing,
        isFollowingUser,
        follow,
        unFollow,
        myFollowing,
        imFollowing,
        myFollowingUsers,
        imFollowingUsers,
        loading
    }
}