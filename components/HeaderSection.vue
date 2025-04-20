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
  <div class="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
    <nav class="flex items-center justify-between px-6 py-4
      backdrop-blur-sm z-100">

      <div>DevHunt</div>

      <div class="hidden md:flex items-center space-x-8">
        <NavLink to="/jobs">Find a job</NavLink>
        <NavLink to="/companies">Find a Company</NavLink>
        <NavLink v-if="false" to="/for-recruiters">For Recruiter</NavLink>
        <NavLink v-if="false" to="/candidate/applications">My Applications</NavLink>
        <NavLink to="/recruiter/jobs">Manage Jobs</NavLink>

      </div>

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
  </div>
</template>
