function App() {
  return React.createElement(
    "div",
    { style: { border: "2px solid black" }, id: "div 1" },
    [
      React.createElement(
        "h1",
        { style: { color: "red" } },
        new Date().toLocaleString()
      ),
      React.createElement(
        "h1",
        { style: { color: "green" } },
        "vishwa praveen"
      ),
      React.createElement(
        "button",
        { style: { color: "white", backgroundColor: "grey" } },
        "click me"
      ),
    ]
  );
}
ReactDOM.render(App(), document.querySelector("#root"));
const div1 = document.getElementById("div 1");
div1.style.backgroundColor = "black";
