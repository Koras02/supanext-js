import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_AMON_KEY = process.env.NEXT_PUBLIC_SUPABASE_AMON_KEY;

const client = createClient(SUPABASE_URL, SUPABASE_AMON_KEY);

export { client as supabaseClient };
