export function col (column) {
    return `${(100/24) * column}vw`;
}

export function vh (px) {
    return `${(px / 1080) * 100}vh`;
}

export function vw (px) {
    return `${(px/1920) * 100}vw`;
}

