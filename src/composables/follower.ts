import http from "../http/index"
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import router from "../router"
export default function Follower() {
    const isFollowingUser = ref(false)
    const myFollowingUsers = ref([])
    const imFollowingUsers = ref([])
    const loading = ref(true)


    const isFollowing = (id: any) => {
        if (localStorage.getItem('token')) {
            http.post('isFollowing', { id }).then(response => {
                isFollowingUser.value = response.data
            }).catch(error => {

            })
        }
    }


    const follow = (id: any) => {
        if (localStorage.getItem('token')) {
            http.post('follow', { id }).then(response => {
            }).catch(error => {
            })
        } else {
            router.push('/login')
        }
    }

    const unFollow = (id: any) => {
        if (localStorage.getItem('token')) {
            http.post('unFollow', { id }).then(response => {
            }).catch(error => {

            })
        } else {
            router.push('/login')
        }
    }

    const myFollowing = () => {
        http.get('myFollowing').then(response => {
            loading.value = false
            myFollowingUsers.value = response.data
        }).catch(error => {
        })
    }

    const imFollowing = () => {
        http.get('imFollowing').then(response => {
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