import React from "react";
import ReactDOM from "react-dom/client";
// by using another js file

// const heading = React.createElement("h1", 
// {id: "heading"}, 
// "Hello World from React"); // here {} is an object that takes attributes for h1 tag
// // here heading gives an object     

const heading = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "This is H1"), React.createElement("h2", {}, "This is H2")]));
//JSX - not html in js. Its just Html like syntax
// JSX => transpiles it to React.createElement => ReactElement-Js Object +> HTLElement(render)
//jsxHeading is a reactElement
const fn = () => true;
const fn2 = () => {
    return true;
}
//fn and fn2 are same
const jsxHeading = (
<h1 id="jsxheading" className="head">Namster React using JSX
</h1>
)

const jsxHeading2 = () => <h1 id="jsxheading"className="head">Namster React using JSX</h1>

//jsxheading and jsxHeading2 are same

const HeadingComponent = () => ( 
<h1 id="jsxheading"className="head">
Namster React using JSX component
</h1>
)
// HeadingComponent is a react component

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);// it renders the element heading object into the root by creating an HTML document