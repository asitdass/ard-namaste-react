// by using another js file

// const heading = React.createElement("h1", 
// {id: "heading"}, 
// "Hello World from React"); // here {} is an object that takes attributes for h1 tag
// // here heading gives an object     

const heading = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "This is H1"), React.createElement("h2", {}, "This is H2")]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);// it renders the element heading object into the root by creating an HTML document