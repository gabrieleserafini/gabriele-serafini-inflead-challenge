
export default function fetchUsers(size: number): Promise<[]> {
    return fetch(`https://random-data-api.com/api/users/random_user?size=${size}`)
      .then(res => res.json());
}