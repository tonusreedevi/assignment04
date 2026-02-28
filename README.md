answer to the question:

1What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: getElementByID besically select id from html its always select element by it s id . and getElementsByClassName select element by its class name and the difference betweenn querySelector / querySelectorALl is selector choose first element using css selector and css selectorall selects all matching elements and gives us a NodeList .
2 How do you create and insert a new element into the DOM? 
ans:i usr document.createElement() to create a new element. then use innerHtml and add attribute if needed.

3.What is Event Bubbling? And how does it work?
Event Bubbling means upward propagation of an event. dom works from child to parent .when an event happen it happens first on child then it moves to its parents it ends in document obj.

4.What is Event Delegation in JavaScript? Why is it useful?
Event Delegation in JavaScript is a technique where instead of adding event listeners to multiple child elements individually, we attach a single event listener to their parent element .This approach reduces the number of event listeners, improves performance, and keeps the code cleaner

5 What is the difference between preventDefault() and stopPropagation() methods? 
The difference between preventDefault() and stopPropagation() is that they works on two different things in an event. preventDefault() stops the browser’s default behavior for an element. in contrast stopPropagation() stops the event from moving up to parent elements.
