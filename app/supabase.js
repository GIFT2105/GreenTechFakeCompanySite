// supabase.js
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://kivdpfahaajtdiynmmsj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpdmRwZmFoYWFqdGRpeW5tbXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0Njg2MDQsImV4cCI6MjAxMjA0NDYwNH0.zmgDKVno_Mf8c9GYkepnSoHaGuCqQLgUUorfpmnrB-Q';


export const supabase = createClient(supabaseUrl, supabaseKey);
