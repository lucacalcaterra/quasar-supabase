import { ref } from "vue";
import useSupabase from "boot/supabase";

const user = ref(null);

export default function useAuthUser() {
  const { supabase } = useSupabase;

  const login = async ({ email, password }) => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    return user;
  };

  const loginWithSocialProvider = async (provider) => {};

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
  };

  const isLoggedIn = () => {
    return !!user.value;
  };

  const register = async ({ email, password, ...meta }) => {
    const { user, error } = await supabase.auth.signUp(
      { email, password },
      {
        data: meta,
        redirectTo:
          "window.location.orgin/me?fromEmail=registrationConfirmation",
      }
    );

    if (error) throw error;
    return user;
  };

  const update = async (data) => {};

  const sendPasswordRestEmail = async () => {};

  return {
    login,
    loginWithSocialProvider,
    isLoggedIn,
    register,
    update,
    sendPasswordRestEmail,
  };
}
