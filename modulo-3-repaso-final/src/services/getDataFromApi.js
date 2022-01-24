const getDataFromApi = () => {
  return fetch('https://randomuser.me/api/?results=15')
    .then((response) => response.json())
    .then((data) =>
      data.results.map((user) => {
        return {
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          age: user.dob.age,
          city: user.location.city,
          image: user.picture.large,
          email: user.email,
          gender: user.gender,
        };
      })
    );
};

export default getDataFromApi;
