

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DVd-XSw6.js","_app/immutable/chunks/disclose-version.B6jrPil-.js","_app/immutable/chunks/runtime.r27H_Js7.js"];
export const stylesheets = [];
export const fonts = [];
