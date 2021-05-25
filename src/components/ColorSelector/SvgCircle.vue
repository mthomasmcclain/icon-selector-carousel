<template>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="30" :fill="color" />
    </svg>
</template>

<script>
export default {
    name: 'svg-circle',
    props: {
        color: {
            required: false,
            default: 'blue',
        }
    },
}
</script>