import http from "../http/index"
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default function Like() {
    const clickLike = ref(false)
    const liked = ref(false)


    const like = (data: any) => {
        http.post('like', data).then(response => {
            console.log(response)
        }).catch(error => {

        })
    }

    const dislike = (data) => {
        http.post('removeLike', data).then(response => {
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