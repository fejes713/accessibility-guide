import { h } from "hyperapp"
import Icon from "./Icon"


export default () => (
    <div>
        <header>
            <a href="#main" class="skip-link">Skip to main content</a>
            <h1 class="title">Web Accessibility Guide</h1>
            <p class="introduction">A curated collection of web accessibility tips, tricks and best practices. <br/> Let's make the web a better place for everyone.</p>
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
                    href="http://twitter.com/share?text=Check out Accessibility Guide, a curated collection of web accessibility tips, tricks and best practices&url=https://webaccessibility.guide"
                target="_blank"
                rel="noopener"
            >
                <Icon class="icon" name="twitter" />
                Tweet
            </a>
            <a
                class="social-donate"
                    href="https://www.paypal.me/stefanfejes/1"
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