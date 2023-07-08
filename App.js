const heading = React.createElement("h1", 
{id: "heading"}, 
"Hello World from React"); // here {} is an object that takes attributes for h1 tag
// here heading gives an object     

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);// it renders the element heading object into the root by creating an HTML document