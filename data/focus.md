### Don't remove `:focus` on elements

Never remove highlight by setting `outline: none;` on a focused state of an element. If the default browser outline doesn't align with the design be sure to replace it with custom accessible one instead of hiding it completely. Removing element highlight on focus makes filling out forms difficult for some users.

### Resources
<!-- Whenever possible, include the links to more advanced guide-->
* [CSS-Tricks guide to focus styles](https://css-tricks.com/focusing-on-focus-styles/)

<!-- category: (0)-->
<!-- available categories:
    0: accessibility rules that everyone should follow with no exception
    1: accessibility tips that make outstanding user experience
    2: facts about designing for accessibility, testing etc.
-->