// 🔥 SUPABASE CONFIG
const supabaseUrl = "https://cqzlitjlqrbxyrplktba.supabase.co/rest/v1/";
const supabaseKey = "sb_publishable__osipOqdVQh-SLaMoaU02w_LjffuBrM";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// 🚀 CHECK IN FUNCTION
async function checkIn() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) {
    document.getElementById("msg").innerText = "Sila isi nama & email";
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
    document.getElementById("msg").innerText = "Error: " + error.message;
  } else {
    document.getElementById("msg").innerText = "Check In Success!";
  }
}