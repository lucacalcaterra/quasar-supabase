<template>
  <div>
    <h2>Sign in to your account</h2>
    <form @submit.prevent="handleSignin">
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" />
      </div>
      <div>
        <button type="submit">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "boot/supabase";
import { Notify } from 'quasar'

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSignin = async () => {
      try {
        // Use the Supabase provided method to handle the signin
        const { error } = await supabase.auth.signInWithPassword({
          email: email.value,
          password: password.value,
        });
        if (error) { throw error } else Notify.create('Login OK!')
      } catch (error) {
        //alert(error.error_description || error.message);
        Notify.create('errore nel login: ' + (error.error_decription || error.message))
      }
    };

    return {
      email,
      password,
      handleSignin,
    };
  },
};
</script>
