// onScroll.js
import { writable } from "svelte/store";

// 任意の範囲内で true と false を切り替える
export function createBetween({ start, end }) {
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
    handleScroll(); // 初期化時にも実行して初期状態を設定

    return status;
}

// 指定位置を越えたらずっと true のままにする
export function createSingleSet(position) {
    const status = writable(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > position) {
            status.set(true);
        }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初期化時にも実行して初期状態を設定

    return status;
}

export function createSingleBool(position) {
    const status = writable(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > position) {
            status.set(true);
        } else {
            status.set(false);
        }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初期化時にも実行して初期状態を設定

    return status;
}