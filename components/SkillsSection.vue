<script setup lang="ts">
    import { ref } from 'vue';

    // Programming languages data
    const languages = ref([
        {
            name: "JavaScript",
            color: "bg-yellow-500/20 border-yellow-500/50",
            textColor: "text-yellow-400",
        },
        {
            name: "TypeScript",
            color: "bg-blue-500/20 border-blue-500/50",
            textColor: "text-blue-400",
        },
        {
            name: "Python",
            color: "bg-green-500/20 border-green-500/50",
            textColor: "text-green-400",
        },
        {
            name: "Java",
            color: "bg-orange-500/20 border-orange-500/50",
            textColor: "text-orange-400",
        },
        {
            name: "C#",
            color: "bg-purple-500/20 border-purple-500/50",
            textColor: "text-purple-400",
        },
        {
            name: "PHP",
            color: "bg-indigo-500/20 border-indigo-500/50",
            textColor: "text-indigo-400",
        },
        {
            name: "Ruby",
            color: "bg-red-500/20 border-red-500/50",
            textColor: "text-red-400",
        },
        {
            name: "Go",
            color: "bg-cyan-500/20 border-cyan-500/50",
            textColor: "text-cyan-400",
        },
        {
            name: "Swift",
            color: "bg-orange-500/20 border-orange-500/50",
            textColor: "text-orange-400",
        },
        {
            name: "Kotlin",

            color: "bg-purple-500/20 border-purple-500/50",
            textColor: "text-purple-400",
        },
        {
            name: "SQL",

            color: "bg-blue-500/20 border-blue-500/50",
            textColor: "text-blue-400",
        },
        {
            name: "HTML/CSS",

            color: "bg-pink-500/20 border-pink-500/50",
            textColor: "text-pink-400",
        },
        {
            name: "React",

            color: "bg-blue-400/20 border-blue-400/50",
            textColor: "text-blue-300",
        },
        {
            name: "Node.js",

            color: "bg-green-500/20 border-green-500/50",
            textColor: "text-green-400",
        },
        {
            name: "Vue.js",

            color: "bg-green-400/20 border-green-400/50",
            textColor: "text-green-300",
        },
    ]);
</script>

<template>
    <section class="py-16 md:py-24 relative overflow-hidden md:px-8">
        <div class=" mx-auto px-6">
            <div class="text-center mb-12 ">
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                    Find Jobs in
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Any Programming Language
                    </span>
                </h2>
                <p class="text-gray-400 text-lg max-w-2xl mx-auto">
                    Browse opportunities across all major programming languages and frameworks. Our platform connects
                    you with
                    positions that match your technical expertise.
                </p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
                <div v-for="language in languages" :key="language.name">
                    <div
                        :class="`border ${language.color} m-1 flex items-center justify-center flex-col p-6 rounded-lg backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer`">
                        <UIcon name="i-lucide-code" :class="`size-7 mb-2 ${language.textColor}`" />
                        <span class="text-white font-medium">{{ language.name }}</span>
                        <span
                            class="mt-2 bg-black/30 text-gray-300 border-gray-700 text-xs px-2 py-1 rounded-full border">
                            {{ Math.floor(Math.random() * 1000) + 100 }} jobs
                        </span>
                    </div>
                </div>
            </div>


            <div class="text-center mt-12 ">
                <p class="text-gray-400 mb-6">
                    Don't see your preferred language? We have many more opportunities available.
                </p>
                <NuxtLink
                    class="inline-flex items-center justify-center rounded-md bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    to="/jobs">
                    Browse All Jobs
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
