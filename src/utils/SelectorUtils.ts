import { finder } from '@medv/finder';

export function getUniqueCssSelector(element: HTMLElement): string {
    return finder(element);
}

export function getSelectedNode(): HTMLElement {
    const anchorNode = window.getSelection().anchorNode;
    
    const containingElement = anchorNode.nodeType === Node.TEXT_NODE
        ? anchorNode.parentNode
        : anchorNode;

    return containingElement as HTMLElement;
}