

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DpxH8nis.js","_app/immutable/chunks/disclose-version.B6jrPil-.js","_app/immutable/chunks/runtime.r27H_Js7.js"];
export const stylesheets = [];
export const fonts = [];
