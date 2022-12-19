import http from "../http/index"
import { ref } from 'vue'
import Swal from 'sweetalert2'
import headers from "../http/headers"
export default function Suggestions() {
    const disabledClick = ref(false)


    const sendSuggestions = async (data: any) => {
        await http.post('suggestions', data, { headers: headers }).then(async response => {
            await Swal.fire({
                title: 'Obrigado',
                text: "Sugestão enviada com sucesso!",
                icon: 'success',

            });
            disabledClick.value = false
        }).catch(async error => {
            await Swal.fire({
                title: 'Falha',
                text: "Falha ao enviar sugestão, tente novamente",
                icon: 'warning',

            });
            disabledClick.value = false
        })
    }



    return {
        sendSuggestions,
        disabledClick,
    }
}