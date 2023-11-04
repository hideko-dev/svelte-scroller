import { get, writable } from "svelte/store";

export function detectBetween({ start, end }) {
    const status = writable(false);
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY >= start && scrollY <= end) {
            status.set(true);
        } else {
            status.set(false);
        }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return { subscribe: status.subscribe };
}

export function detectSingle({ type, position }) {
    const status = writable(false);
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (type === "set") {
            if (scrollY > position) {
                status.set(true);
            }
        } else if (type === "bool") {
            if (scrollY > position) {
                status.set(true);
            } else {
                status.set(false);
            }
        }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return { subscribe: status.subscribe };
}