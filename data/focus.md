### Don't remove `:focus` on elements

If an element is interactive never remove the highlight by setting `outline: none;` on a focused state of that element. If the default browser outline doesn't align with the design be sure to replace it with a custom accessible one instead of hiding it completely. Removing an element's highlight on focus makes filling out forms difficult for some users.

### Resources
<!-- Whenever possible, include the links to more advanced guide-->
* [Focusing on Focus Styles](https://css-tricks.com/focusing-on-focus-styles/)

<!-- category: (0)-->
<!-- available categories:
    0: accessibility rules that everyone should follow with no exception
    1: accessibility tips that make outstanding user experience
    2: facts about designing for accessibility, testing etc.
-->