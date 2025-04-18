<script setup lang="ts">
  import * as z from 'zod'
  import type { FormSubmitEvent } from '@nuxt/ui'

  const toast = useToast()

  const fields = [{
    name: 'email',
    type: 'text' as const,
    label: 'Email',
    placeholder: 'Enter your email',
    required: true
  }, {
    name: 'password',
    label: 'Password',
    type: 'password' as const,
    placeholder: 'Enter your password'
  }, {
    name: 'remember',
    label: 'Remember me',
    type: 'checkbox' as const
  }]

  const providers = [{
    label: 'Google',
    icon: 'i-simple-icons-google',
    onClick: () => {
      toast.add({ title: 'Google', description: 'Login with Google' })
    }
  }]

  const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters')
  })

  type Schema = z.output<typeof schema>

  function onSubmit(payload: FormSubmitEvent<Schema>) {
    console.log('Submitted', payload)
  }
</script>

<template>
  <header class="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md p-4">
    <nav class="flex items-center justify-between">
      <div>Devhunt</div>
      <ul class="flex space-x-10">
        <li>
          <ULink to="/" class="hover:text-purple-500">Home</ULink>
        </li>
        <li>
          <ULink to="/jobs" class="hover:text-purple-500">Find a job</ULink>
        </li>
        <li>
          <ULink to="/companies" class="hover:text-purple-500">Find company</ULink>
        </li>
      </ul>
      <div class="space-x-2 flex items-center">
        <UButton icon="i-lucide-rocket" color="primary" size="lg" class="text-white cursor-pointer">
          Get Started
        </UButton>
        <UModal>
          <UButton label="Sign In" color="primary" size="lg" variant="outline" class="text-white cursor-pointer" />
          <template #content>
            <UPageCard class="w-full">
              <UAuthForm :submit="{
                label: 'Sign in',
                size: 'lg',
                class: 'text-white',
              }" :schema="schema" title="Login" description="Enter your credentials to access your account."
                icon="i-lucide-user" :fields="fields" :providers="providers" @submit="onSubmit" />
            </UPageCard>
          </template>
        </UModal>
      </div>
    </nav>
  </header>
</template>
