# Weekend Homework Recap: DOM

1. What is the return value of `document.createElement`? And what does it accept as an argument?
    -  a new HTML element (DOM element)
    -  HTML tags such as H1, H2, H3, p or div

2. What is the return value of `document.querySelector`? And what does is accept as an argument?
    - an HTML element present in the target document (DOM element)
    - strings of HTML element tags, classes or id's 

3. What is the return value `document.querySelectorAll`?
    - all HTML elements matching the criteria present in the target document, as an array (ALL DOM ELEMENTS)

4. What is the difference between using `textContent` and `appendChild`?
    - textContent assigns new text to an element. will over-write existing content
    - append child adds a new element to a parent HTML element

5. What is the event we handle to access the values of a form, and how do we access the values?
    - submission of the form ('submit'), is what we are listening for and to access the event object we must first prevent the form from being posted using event.preventDefault() and then accessing the event with dot notation event.target.first_name.value 
    - square bracket notation must be used to wrap properties containing hyphens and the properties must be a string: ['first-name']

<details>
<summary>Answers</summary>

1. The return value of `document.createElement` is a DOM element. It will return the DOM element specified by the argument we pass to it as a string. For example, to create an h1 element, we would call `document.createElement('h1')`.

2. The return value of `document.querySelector` is a DOM element. We can access DOM elements by passing in an identifier as a string. For example if we want to access an element with the ID 'reading-list' we could call `document.querySelector('#reading-list')`. We can also be more specific and include with the elements tag. For example if we were accessing an unordered list with an ID of `reading-list` we could call `document.querySelector('ul#read-list')`.

3. The return value of `document.querySelectorAll` is an array of DOM elements. It accesses all the elements that matches the identifier. For example, `document.querySelectorAll('.list-item')` would get all the elements with the class 'list-item'.

4. `textContent` allows us to set the text on an element and will over-write any existing text content the element has. `appendChild` adds a new element to an existing one, allowing us to build up hierarchies of DOM elements.

5. We add an event listener to the form's 'submit' event, and use the ID of the input field, followed by the property `value`. For example, `form.title.value`.

</details>
