import http from "../http/index"
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import headers from "../http/headers"
export default function Like() {
    const clickLike = ref(false)
    const liked = ref(false)


    const like = (data: any) => {
        http.post('like', data, { headers: headers }).then(response => {
            console.log(response)
        }).catch(error => {

        })
    }

    const dislike = (data) => {
        http.post('removeLike', data, { headers: headers }).then(response => {
            console.log(response)
        }).catch(error => {

        })
    }



    return {
        liked,
        like,
        dislike
    }
}