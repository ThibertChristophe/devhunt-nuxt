<template>
    <div>
        {{ job }}
    </div>

</template>

<script setup lang="ts">
const route = useRoute()
const { data: job } = useFetch(`/api/jobs/${route.params.id}`)
</script>
