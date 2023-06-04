

export default async function getAllUsers() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  if(!users.ok) throw new Error("Failed to load Data")
  return users.json()
}
