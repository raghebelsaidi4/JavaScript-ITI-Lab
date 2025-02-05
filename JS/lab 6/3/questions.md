## Difference Between addEventListener and Other Methods:

**`addEventListener`** allows multiple event handlers to be attached to the same event for an element.

Other methods like onclick directly assign a function to the event property, overwriting any previous handler.

## Does addEventListener Overwrite Other Handlers?:

No, `addEventListener` does not overwrite existing handlers. It adds a new handler to the list of handlers for the event.

## How Does addEventListener Handle Event Bubbling Better?:

`addEventListener` allows you to specify whether the event should be handled during the capturing phase or the bubbling phase (using the third parameter: useCapture).

It provides better control over event propagation compared to inline event handlers or direct assignment.

## Removing and Adding Event Listeners:

`removeEventListener` is used to remove a specific event handler. It requires the same function reference that was used in addEventListener.

After removing the alertScore handler, the gameOver handler is added to replace it