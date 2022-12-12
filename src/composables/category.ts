import http from "../http/index"
import { ref } from 'vue'

export default function Category() {
    const categories = ref([])
    const errors = ref([])

    const getCategories = async () => {
        await http.get('categories').then(response => {
            categories.value = response.data.data
        }).catch(error => {
            errors.value = error.message
        })
    }


    return {
        categories,
        errors,
        getCategories
    }
}