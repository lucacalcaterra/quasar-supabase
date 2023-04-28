<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <h1 class="header">Supabase + Vue 3</h1>
      <p class="description">Sign in via magic link with your email below</p>
      <div>
        <input class="inputField" required type="email" placeholder="Your email" v-model="email" />
      </div>
      <div>
        <input type="submit" class="button block" :value="loading ? 'Loading' : 'Send magic link'" :disabled="loading" />
      </div>
    </div>
  </form>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestSupa'
})
</script>
