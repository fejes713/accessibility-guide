import { h } from "hyperapp"
import { cc, EXPERTISE_STRINGS } from "../utils"
import Icon from "./Icon"
import Markdown from "./Markdown"

export default ({
    name,
    shortTip,
    longTip,
    links,
    category,
}) => (state, actions) => (
    <li
        class="card"
        key={name}
        id={name.slice(0, name.length - 3)}
    >
    <span class="category">{category}</span>
    <Markdown node="h2" class="short-tip" content={shortTip} />
    <Markdown node="p" class="long-tip" content={longTip} />
    <ul class="resource-list">
        {links.map(link => <Markdown node="li" class="resource" content={link} />)}
    </ul>

    </li>
)