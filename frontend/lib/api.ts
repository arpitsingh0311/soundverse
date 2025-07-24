// const API_URL = "http://localhost:8000/api";

// export const fetchDNAArtists = async () => {
//   const res = await fetch(`${API_URL}/dna`);
//   if (!res.ok) throw new Error("Failed to fetch DNA data");
//   return await res.json();
// };

// export const postDNAArtist = async (data) => {
//   const res = await fetch(`${API_URL}/dna`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   if (!res.ok) throw new Error("Failed to create DNA artist");
//   return await res.json();
// };
