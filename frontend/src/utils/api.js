//Dependencies
import axios from "axios"


//API Request
// export async function getEndpoints() {
//   const { data } = await axios.get('https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/')
//   return data
// }
export async function getABrewery(endpoint) {
  const { data } = await axios.get(endpoint)
  return data
}
// sign up function
export async function signUp(formData) {
    const { data } = await axios.post(
      "users/signup", {
      username: formData.username,
      password: formData.password
});
       
    return data;
  }
  
  //Log in to User Account
  export async function loginToAccount(formData) {
    const { data } = await axios.post(
      "users/login", {
        username: formData.username,
      password: formData.password
      });
    return data;
  }

  // update user account
export async function updateUser(userId, formData) {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const { data } = await axios.put(
      `users/${userId}`,
      formData,
      config
    );
    return data
  }
  
  // delete user account
  export async function deleteUser(userId) {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    await axios.delete(`users/${userId}`, config);
  }
  
//getUser
  export async function getUser(userid) {
    const { data } = await axios.get(`users/${userid}`);
    return data;
}

