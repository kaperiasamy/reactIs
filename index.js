window.onload = () => {
    // Get the reference to the ID in the body of the page.
    const rootElement = document.getElementById("root");

    // Create React virtual DOM root and assign it to a variable
    const root = ReactDOM.createRoot(rootElement);

    const text = React.createElement('p', null, 'Simple React App, without JSX');

    const ints = [1, 2, 3]

    const childElements = [];

    childElements.push(text);

    childElements.push(
        React.createElement("li", {key: ints[0]}, "One")
    );
    childElements.push(
        React.createElement("li", {key: ints[1]}, "Two")
    );    childElements.push(
        React.createElement("li", {key: ints[2]}, "Three")
    );

    root.render(childElements);
}