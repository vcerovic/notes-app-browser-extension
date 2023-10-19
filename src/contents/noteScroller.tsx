import { LAST_CSS_SELECTOR } from "~common/constants";
import repository from "~common/repository"

const scrollToElement = async () => {
    const selector = await repository.get<string>(LAST_CSS_SELECTOR);

    if (!selector) return;

    const element = document.querySelector(selector);

    if (element) element.scrollIntoView({ behavior: "smooth"});
}

const NoteScroller = () => {
    scrollToElement();

    return (<div></div>)
}

export default NoteScroller