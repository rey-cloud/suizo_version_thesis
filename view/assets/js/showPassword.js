export const showPassword = ref(false)

export function togglePassword() {
    showPassword.value = !showPassword.value;
}