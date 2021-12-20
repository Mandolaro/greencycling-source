import { writable } from 'svelte/store';

export const username = writable("");
export const point = writable(110);
export const isLogin = writable(false);