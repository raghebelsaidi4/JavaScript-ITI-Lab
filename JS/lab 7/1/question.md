## Why HTML5 Validation Prevents Submission but Custom Validation Does Not:

**HTML5 Validation**:

Built-in browser validation (e.g., `required, type="email"`) automatically prevents form submission if the fields are invalid.

This behavior is part of the HTML5 specification.

**Custom Validation**:

Custom validation logic (e.g., checking password match or full name length) is not automatically enforced by the browser.

You must explicitly call `event.preventDefault()` in JavaScript to prevent form submission if custom validation fails.