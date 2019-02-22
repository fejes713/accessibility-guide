import { h } from "hyperapp"
import Icon from "./Icon"


export default () => (
    <div>
        <header>
            <a href="#main" class="skip-link">Skip to main content</a>
            <h1>Web Accessibility Guide</h1>
            <p>A curated collection of web accessibility tips, tricks and best practices</p>
            <div class="social">
            <a
                class="social-github"
                href="https://github.com/fejes713/accessibility-guide"
                target="_blank"
                rel="noopener"
            >
                <Icon class="icon" name="github" />
                Star on Github
            </a>
            <a
                class="social-twitter"
                href="https://github.com/fejes713/accessibility-guide"
                target="_blank"
                rel="noopener"
            >
                <Icon class="icon" name="twitter" />
                Tweet
            </a>
            <a
                class="social-donate"
                href="https://github.com/fejes713/accessibility-guide"
                target="_blank"
                rel="noopener"
            >
                <Icon class="icon" name="gift" />
                Donate
            </a>
            </div>
        </header>
    </div>

)