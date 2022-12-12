import { ref } from "vue";

export default function useDropZone() {
    const dragActive = ref(false);
    const droppedFile = ref(null);
    const url = ref()

    const toggle_active = () => {
        if (droppedFile.value == null) {
            dragActive.value = !dragActive.value;
        }
    };

    const drop = (event) => {
        droppedFile.value = event.dataTransfer.files[0];
    };

    const selectedFile = (event) => {
        droppedFile.value = event.target.files[0];
        dragActive.value = true;
        const file = event.target.files[0];
        url.value = URL.createObjectURL(file);
    };

    const clearDropped = () => {
        droppedFile.value = null;
        dragActive.value = false;
        url.value = ''
    };

    return {
        url,
        dragActive,
        droppedFile,
        toggle_active,
        drop,
        selectedFile,
        clearDropped,
    }
}