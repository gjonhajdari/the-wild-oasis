import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://geokxltemuyfeohbtbkl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdlb2t4bHRlbXV5ZmVvaGJ0YmtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxOTUxNTEsImV4cCI6MjAxMTc3MTE1MX0.4G55oX2yxdujPTF_oaDzCU61LTzrmiK_SOj8KF0BVDA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
