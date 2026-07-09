/*
==========================================
customRender Function
==========================================

This function behaves like a very tiny version of ReactDOM.render().

It takes:

1. reactElement
   - A JavaScript object describing an HTML element.

2. container
   - The DOM element where we want to insert our new element.

Example call:

customRender(reactElement, mainContainer)

means:

"Take this object and convert it into a real HTML element,
then place it inside #root."
*/

function customRender(reactElement, container){

    /*
    ==========================================================
    FIRST VERSION (Hardcoded)
    ==========================================================

    This was the first implementation.

    It only works for one specific element because
    every property is manually written.

    const domElement = document.createElement(reactElement.type)

    // Set the text inside the element.
    domElement.innerHTML = reactElement.children

    // Manually set the href attribute.
    domElement.setAttribute('href', reactElement.props.href)

    // Manually set the target attribute.
    domElement.setAttribute('target', reactElement.props.target)

    // Add the created element into the container.
    container.appendChild(domElement)

    Problems:

    1. Every new attribute must be written manually.
    2. Doesn't work well for many different elements.
    3. Not reusable.
    4. React doesn't work like this.
    */




    /*
    ==========================================================
    IMPROVED VERSION
    ==========================================================

    Instead of writing every attribute manually,
    we loop through all properties automatically.

    This makes our renderer reusable.
    */

    // Create an actual DOM element using the "type" property.
    // Example:
    // type: 'a'
    // becomes:
    // <a></a>
    const domElement = document.createElement(reactElement.type)

    // Add the text/content inside the element.
    // Example:
    // children: "Click me"
    //
    // Result:
    // <a>Click me</a>
    domElement.innerHTML = reactElement.children


    /*
    Loop through every property inside props.

    Example:

    props = {
        href: "...",
        target: "_blank"
    }

    First iteration:
        prop = "href"

    Second iteration:
        prop = "target"
    */
    for (const prop in reactElement.props) {

        /*
        Skip "children" if it exists.

        In real React,
        children are handled separately.

        They are NOT HTML attributes.

        Example:

        children: "Hello"

        Wrong:
        <a children="Hello">

        Correct:
        <a>Hello</a>
        */
        if (prop === 'children') continue;


        /*
        Set every property as an HTML attribute.

        Example:

        prop = "href"

        becomes:

        domElement.setAttribute(
            "href",
            "https://google.com"
        )

        Next iteration:

        prop = "target"

        becomes:

        domElement.setAttribute(
            "target",
            "_blank"
        )
        */
        domElement.setAttribute(prop, reactElement.props[prop])
    }


    /*
    Finally, place the newly created element
    inside the container.

    Result:

    <div id="root">
        <a href="https://google.com" target="_blank">
            Click me to visit google
        </a>
    </div>
    */
    container.appendChild(domElement)
}



/*
==========================================================
Our React Element
==========================================================

This object is NOT a real HTML element.

It is only a JavaScript object that describes
what we want to create.

This is exactly the idea behind React.

React first creates objects,
then later converts them into real DOM elements.
*/

const reactElement = {

    /*
    The HTML tag we want to create.

    'a' means Anchor element.

    Result:

    <a></a>
    */
    type: 'a',

    /*
    HTML attributes.

    Everything inside props becomes
    attributes on the HTML element.
    */
    props: {

        // Destination URL
        href: 'https://google.com',

        // Open the link in a new browser tab
        target: '_blank'
    },

    /*
    Text shown inside the anchor.

    Result:

    <a>Click me to visit google</a>
    */
    children: 'Click me to visit google'
}



/*
Find the element whose id is "root".

This returns:

<div id="root"></div>

This will become our rendering container.
*/
const mainContainer = document.querySelector('#root')



/*
Call our renderer.

Arguments:

1. reactElement
   → Description of what to create.

2. mainContainer
   → Where to insert it.

After execution, the browser creates:

<div id="root">
    <a href="https://google.com" target="_blank">
        Click me to visit google
    </a>
</div>
*/
customRender(reactElement, mainContainer)