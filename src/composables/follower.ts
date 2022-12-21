import http from "../http/index"
import { ref } from 'vue'
import router from "../router"
import headers from "../http/headers"
export default function Follower() {
    const isFollowingUser = ref(false)
    const myFollowingUsers = ref([])
    const imFollowingUsers = ref([])
    const loading = ref(true)

    const isFollowing = (id: any) => {
        if (localStorage.getItem('token')) {
            http.get('user/isFollowing/' + id, { headers: headers }).then(response => {
                isFollowingUser.value = response.data
            })
        }
    }

    const follow = (id: any) => {
        if (localStorage.getItem('token')) {
            http.get('user/follow/' + id, { headers: headers })
        } else {
            router.push('/login')
        }
    }

    const unFollow = (id: any) => {
        if (localStorage.getItem('token')) {
            http.get('user/unFollow/' + id, { headers: headers })
        } else {
            router.push('/login')
        }
    }

    const myFollowing = () => {
        http.get('user/myFollowing', { headers: headers }).then(response => {
            loading.value = false
            myFollowingUsers.value = response.data
        })
    }

    const imFollowing = () => {
        http.get('user/imFollowing', { headers: headers }).then(response => {
            imFollowingUsers.value = response.data
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