import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://gylbuckuxdrsoysrxmva.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5bGJ1Y2t1eGRyc295c3J4bXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyNjMzNjgsImV4cCI6MjA3ODgzOTM2OH0.1gVjZ6vZ946F8fnvttXhf6QQTeli2xsd3dsiqkPnr1s";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
