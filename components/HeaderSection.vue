<script setup lang="ts">
  import * as z from 'zod'
  import { motion } from 'motion-v'
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
  <header class="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
    <motion.nav :initial="{ y: -100 }" :animate="{ y: 0 }" class="flex items-center justify-between px-6 py-4
      backdrop-blur-sm z-100 border-white/10 border-b">

      <div>DevHunt</div>

      <div class="hidden md:flex items-center space-x-8">
        <NavLink to="/jobs">Find a job</NavLink>
        <NavLink to="/companies">Find a Company</NavLink>
        <NavLink v-if="true" to="/">For Recruiter</NavLink>
        <NavLink v-if="false" to="/candidate/applications">My Applications</NavLink>
        <NavLink v-if="false" to="/recruiter/jobs">Manage Jobs</NavLink>

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
              }" :schema="schema" :fields="fields" :providers="providers" title="Welcome back!" icon="i-lucide-user"
                @submit="onSubmit">
                <template #description>
                  Don't have an account? <ULink to="#" class="font-medium">Sign up</ULink>.
                </template>
                <template #password-hint>
                  <ULink to="#" class="font-medium" tabindex="-1">Forgot password?</ULink>
                </template>
                <template #validation>
                  <UAlert color="error" icon="i-lucide-info" title="Error signing in" />
                </template>
                <template #footer>
                  By signing in, you agree to our <ULink to="#" class=" font-medium">Terms of Service</ULink>.
                </template>
              </UAuthForm>
            </UPageCard>
          </template>
        </UModal>
      </div>
    </motion.nav>
  </header>
</template>
