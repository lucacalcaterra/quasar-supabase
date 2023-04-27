import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mdkbqjonlthprsrwilut.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ka2Jxam9ubHRocHJzcndpbHV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI2MTUzMjUsImV4cCI6MTk5ODE5MTMyNX0.ZQYwddopRCaDKZIUbTREGDd6FMx56uo-NEsCU29ZXCg";
const supabase = createClient(supabaseUrl, supabaseKey);

console.log("init supabase:", supabase);

export default function useSupaBase() {
  return supabase;
}
