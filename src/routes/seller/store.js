import { writable } from 'svelte/store';

export const username = writable("");
export const point = writable(15000);
export const isLogin = writable(false);