const el = <span>hi</span>
ReactDOM.render(el, document.getElementById("root"));
const format = (user) => {
  return user.firstName + " " + user.lastName + " " + user.age + " years old";
};
const user = {
  firstName: "Vlad",
  lastName: "Prus",
  age: 20,
};
ReactDOM.render(
  <>
    <h1>{format(user)}</h1>
    <App name="props" />
  </>,
  document.getElementById("root")
);