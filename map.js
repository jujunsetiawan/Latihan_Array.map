var user = [
    {
      name: "Leta Dickinson",
      age: 17,
      gender: "female",
      nationality: "Philippines",
    },
    {
      name: "Jodie Hermann Sr.",
      age: 30,
      gender: "male",
      nationality: "Germany",
    },
    { name: "Alice Hessel", age: 18, gender: "female", nationality: "Samoa" },
    { name: "Ahmad Monahan", age: 7, gender: "male", nationality: "Morocco" },
    {
      name: "Ms. Carter Dach",
      age: 28,
      gender: "female",
      nationality: "Belgium",
    },
  ];
 
document.write(user.filter(saring => saring.gender == "female")
.map(map => '<p>' + 'name: ' + map.name + '<p>' + 'age: ' + map.age + '<p>' + 'nationality: ' + map.nationality + '<hr>'));