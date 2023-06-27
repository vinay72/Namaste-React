
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div", { id: "child" }, [
        React.createElement(
            "div", { id: "child1" },
            [React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h2 tag")
            ]),

        React.createElement(
            "div", { id: "child2" },
            [React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h2 tag")
            ]),
    ])
)

// JSX IS THERE

console.log(parent) // return an object
// this object is the place where we give attributes to our tags
// createElement is creating h1 tag/element inside react
const root = ReactDOM.createRoot(document.getElementById("root"))
// we have created root for our react library
root.render(parent)