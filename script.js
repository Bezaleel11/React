/* <div id="parent">
        <div id="child">
            <h1>Hello I'm a H1 Tag</h1>
            <h2>Hello I'm H2 Tag</h2>
        </div>
        <div id="child2">
            <h1>Hello I'm a H1 Tag</h1>
            <h2>Hello I'm H2 Tag</h2>
        </div>
   </div>*/

const parent = React.createElement(
  "div",
  { id: "parent" },[  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello I'm a H1 Tag"),
    React.createElement("h2", {}, "Hello I'm a H2 Tag"),
  ]),  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello I'm a H1 Tag"),
    React.createElement("h2", {}, "Hello I'm a H2 Tag"),
  ])]

);

//for sibling child array is used and for nesting parent and child is used

//const heading = React.createElement("h1", {id: "head" } , "Hello World from React!!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
