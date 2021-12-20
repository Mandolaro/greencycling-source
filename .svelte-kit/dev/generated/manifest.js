const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\seller\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\seller\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\seller\\bin-locations\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\seller\\bin-locations\\connecting.svelte"),
	() => import("..\\..\\..\\src\\routes\\seller\\bin-locations\\connected.svelte"),
	() => import("..\\..\\..\\src\\routes\\seller\\exchange.svelte"),
	() => import("..\\..\\..\\src\\routes\\buyer\\index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/seller/index.svelte
	[/^\/seller\/?$/, [c[0], c[3], c[4]], [c[1]]],

	// src/routes/seller/bin-locations/index.svelte
	[/^\/seller\/bin-locations\/?$/, [c[0], c[3], c[5]], [c[1]]],

	// src/routes/seller/bin-locations/connecting.svelte
	[/^\/seller\/bin-locations\/connecting\/?$/, [c[0], c[3], c[6]], [c[1]]],

	// src/routes/seller/bin-locations/connected.svelte
	[/^\/seller\/bin-locations\/connected\/?$/, [c[0], c[3], c[7]], [c[1]]],

	// src/routes/seller/exchange.svelte
	[/^\/seller\/exchange\/?$/, [c[0], c[3], c[8]], [c[1]]],

	// src/routes/buyer/index.svelte
	[/^\/buyer\/?$/, [c[0], c[9]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];