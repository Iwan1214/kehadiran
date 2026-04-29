// 🔥 SUPABASE CONFIG
const supabaseUrl = "https://cqzlitjlqrbxyrplktba.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxemxpdGpscXJieHlycGxrdGJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0MDUyMjEsImV4cCI6MjA5Mjk4MTIyMX0.2_AP01Ma0bG7xRHMxCmjgAZ9zyrVxDZww4ztPFuJSTc";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// 🚀 CHECK IN FUNCTION
async function checkIn() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg");

  if (!name || !email) {
    msg.innerText = "Sila isi nama & email";
    return;
  }

  const { data, error } = await supabase
    .from("attendance")
    .insert([
      {
        name: name,
        email: email,
        status: "Present",
        date: new Date().toISOString().split("T")[0],
        check_in: new Date().toISOString()
      }
    ]);

  if (error) {
    console.log(error);
    msg.innerText = "Error: " + error.message;
  } else {
    msg.innerText = "Check In Success!";
  }
}