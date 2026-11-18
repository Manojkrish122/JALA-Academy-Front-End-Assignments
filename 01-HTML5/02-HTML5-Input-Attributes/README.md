# HTML5 Input Attributes, Types & Restrictions

## Overview
This module demonstrates HTML form design, comprehensive input types introduced in HTML5, input restriction attributes, iframe embedding, marquee tickers, and the `target` attribute.

## PDF Assignment Requirements & Implementation

### 1. Standard Input Attributes
- `type="text"` - standard single-line textual input.
- `type="password"` - masked security input.
- `type="radio"` - mutual single-selection among grouped items.
- `type="checkbox"` - independent multi-select state.
- `type="button"` - general scriptable push button.
- `type="submit"` - triggers form submission to `action` endpoint.
- `type="reset"` - resets all form controls back to initial values.

### 2. HTML5 Input Types
- `number` - numeric input with increment/decrement steppers.
- `range` - slider control for picking within numeric bounds.
- `color` - visual hex color picker dialog.
- `date` - native date picker with calendar interface.
- `file` - OS file selection dialog (accepting specific extensions).
- `time` - hours/minutes selection control.
- `month` - month and year picker.
- `week` - calendar week picker.
- `email` - validated format checking for `@` and domain names.

### 3. Input Restrictions
- `disabled` - grays out control, prevents user interaction, omits value during submission.
- `readonly` - prevents modification while allowing text selection, and sends value during submission.
- `required` - enforces non-empty input before form validation passes.
- `size` - sets physical visual width of input in character count.
- `value` - sets default initial value.
- `min` / `max` - sets allowable boundaries for numeric/date values.
- `maxlength` - limits maximum characters permitted for typing.

### 4. Target Attribute & Iframes
- `target="_blank"`: Opens document in a newly created browser tab.
- `target="_self"`: Default behavior; reloads document inside the same window/frame.
- `target="[iframe_name]"`: Targets output directly into an embedded `<iframe>` without navigating away from the current page.

---

## Interview Questions & "Good to Know"

### Q1: Difference between `target="_blank"` and `target="_self"`?
- **`target="_blank"`**: Instructs the browser to render the destination URL in a new browser tab or separate window. Best security practice requires adding `rel="noopener noreferrer"` to prevent the opened page from accessing `window.opener`.
- **`target="_self"`**: Renders the destination URL inside the same browsing context (current tab/window or active iframe). This is the default behavior if no target is specified.

### Q2: Difference between `disabled` and `readonly`?
- **`disabled`**: The user cannot edit or focus on the element. The field is grayed out, and crucially, **its value is not submitted** with the form data.
- **`readonly`**: The user cannot edit the value, but can focus and copy it. Its value **is submitted** with the form data.

