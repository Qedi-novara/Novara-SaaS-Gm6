const SUPABASE_URL = "PASTE_YOUR_SUPABASE_URL";
const SUPABASE_KEY = "PASTE_YOUR_ANON_KEY";

// ✅ correct client creation
const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function register() {
  console.log("REGISTER CLICKED");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Enter email and password");
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  console.log("RESULT:", data, error);

  if (error) {
    alert(error.message);
  } else {
    alert("Registered successfully. Check your email.");
  }
}

async function login() {
  console.log("LOGIN CLICKED");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  console.log("RESULT:", data, error);

  if (error) {
    alert(error.message);
  } else {
    alert("Login successful");
    window.location.href = "dashboard.html";
  }
}
