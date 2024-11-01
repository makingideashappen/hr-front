export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.De3TJvee.js","app":"_app/immutable/entry/app.4XqcNUdA.js","imports":["_app/immutable/entry/start.De3TJvee.js","_app/immutable/chunks/entry.D9dZp8Vs.js","_app/immutable/chunks/runtime.r27H_Js7.js","_app/immutable/entry/app.4XqcNUdA.js","_app/immutable/chunks/runtime.r27H_Js7.js","_app/immutable/chunks/store.cg5-508w.js","_app/immutable/chunks/disclose-version.B6jrPil-.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
