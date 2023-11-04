import {get, writable} from "svelte/store";

module.exports = {

    detectBetween: function({ start, end }){
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
        return get(status);
    },

    detectSingle: function({ type, position }) {
        const status = writable(false);
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if(type === "set") {
                if (scrollY > position) {
                    status.set(true);
                }
            } else if(type === "bool") {
                if (scrollY > position) {
                    status.set(true);
                } else {
                    status.set(false);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return get(status);
    }

}