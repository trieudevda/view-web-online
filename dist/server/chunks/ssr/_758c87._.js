module.exports = {

"[project]/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript) <locals> <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/ThemeProvider.js [app-ssr] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/CssBaseline/CssBaseline.js [app-ssr] (ecmascript) <export default as CssBaseline>");
"use client";
;
;
;
;
;
function Home() {
    const [mode, setMode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState("light");
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const savedMode = localStorage.getItem("theme");
        if (savedMode) {
            setMode(savedMode);
        }
    }, []);
    // Lưu trạng thái theme vào localStorage
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (mode) {
            localStorage.setItem("theme", mode);
        }
    }, [
        mode
    ]);
    // Tạo theme động dựa trên trạng thái mode
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
        palette: {
            mode: mode
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
        theme: theme,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__["CssBaseline"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "row-start-3 flex gap-6 flex-wrap items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "flex items-center gap-2 hover:underline hover:underline-offset-4",
                        href: "/admin/dashboard",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                "aria-hidden": true,
                                src: "/globe.svg",
                                alt: "Globe icon",
                                width: 16,
                                height: 16
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            "Go to nextjs.org →"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/@mui/system/esm/InitColorSchemeScript/InitColorSchemeScript.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Split this component for RSC import
 */ __turbopack_esm__({
    "DEFAULT_ATTRIBUTE": (()=>DEFAULT_ATTRIBUTE),
    "DEFAULT_COLOR_SCHEME_STORAGE_KEY": (()=>DEFAULT_COLOR_SCHEME_STORAGE_KEY),
    "DEFAULT_MODE_STORAGE_KEY": (()=>DEFAULT_MODE_STORAGE_KEY),
    "default": (()=>InitColorSchemeScript)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
const DEFAULT_MODE_STORAGE_KEY = 'mode';
const DEFAULT_COLOR_SCHEME_STORAGE_KEY = 'color-scheme';
const DEFAULT_ATTRIBUTE = 'data-color-scheme';
function InitColorSchemeScript(options) {
    const { defaultMode = 'system', defaultLightColorScheme = 'light', defaultDarkColorScheme = 'dark', modeStorageKey = DEFAULT_MODE_STORAGE_KEY, colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY, attribute: initialAttribute = DEFAULT_ATTRIBUTE, colorSchemeNode = 'document.documentElement', nonce } = options || {};
    let setter = '';
    let attribute = initialAttribute;
    if (initialAttribute === 'class') {
        attribute = '.%s';
    }
    if (initialAttribute === 'data') {
        attribute = '[data-%s]';
    }
    if (attribute.startsWith('.')) {
        const selector = attribute.substring(1);
        setter += `${colorSchemeNode}.classList.remove('${selector}'.replace('%s', light), '${selector}'.replace('%s', dark));
      ${colorSchemeNode}.classList.add('${selector}'.replace('%s', colorScheme));`;
    }
    const matches = attribute.match(/\[([^\]]+)\]/); // case [data-color-scheme=%s] or [data-color-scheme]
    if (matches) {
        const [attr, value] = matches[1].split('=');
        if (!value) {
            setter += `${colorSchemeNode}.removeAttribute('${attr}'.replace('%s', light));
      ${colorSchemeNode}.removeAttribute('${attr}'.replace('%s', dark));`;
        }
        setter += `
      ${colorSchemeNode}.setAttribute('${attr}'.replace('%s', colorScheme), ${value ? `${value}.replace('%s', colorScheme)` : '""'});`;
    } else {
        setter += `${colorSchemeNode}.setAttribute('${attribute}', colorScheme);`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("script", {
        suppressHydrationWarning: true,
        nonce: typeof window === 'undefined' ? nonce : '',
        dangerouslySetInnerHTML: {
            __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${modeStorageKey}') || '${defaultMode}';
  const dark = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
  const light = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${setter}
  }
} catch(e){}})();`
        }
    }, "mui-color-scheme-init");
}
}}),
"[project]/node_modules/@mui/private-theming/useTheme/ThemeContext.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const ThemeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    ThemeContext.displayName = 'ThemeContext';
}
const __TURBOPACK__default__export__ = ThemeContext;
}}),
"[project]/node_modules/@mui/private-theming/useTheme/useTheme.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>useTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$ThemeContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/private-theming/useTheme/ThemeContext.js [app-ssr] (ecmascript)");
;
;
function useTheme() {
    const theme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$ThemeContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    if ("TURBOPACK compile-time truthy", 1) {
        // TODO: uncomment once we enable eslint-plugin-react-compiler eslint-disable-next-line react-compiler/react-compiler
        // eslint-disable-next-line react-hooks/rules-of-hooks -- It's not required to run React.useDebugValue in production
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useDebugValue(theme);
    }
    return theme;
}
}}),
"[project]/node_modules/@mui/private-theming/useTheme/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useTheme": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/private-theming/useTheme/useTheme.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/@mui/system/esm/cssVars/useCurrentColorScheme.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>useCurrentColorScheme),
    "getColorScheme": (()=>getColorScheme),
    "getSystemMode": (()=>getSystemMode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/InitColorSchemeScript/InitColorSchemeScript.js [app-ssr] (ecmascript)");
'use client';
;
;
function getSystemMode(mode) {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function' && mode === 'system') {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        if (mql.matches) {
            return 'dark';
        }
        return 'light';
    }
    return undefined;
}
function processState(state, callback) {
    if (state.mode === 'light' || state.mode === 'system' && state.systemMode === 'light') {
        return callback('light');
    }
    if (state.mode === 'dark' || state.mode === 'system' && state.systemMode === 'dark') {
        return callback('dark');
    }
    return undefined;
}
function getColorScheme(state) {
    return processState(state, (mode)=>{
        if (mode === 'light') {
            return state.lightColorScheme;
        }
        if (mode === 'dark') {
            return state.darkColorScheme;
        }
        return undefined;
    });
}
function initializeValue(key, defaultValue) {
    if (typeof window === 'undefined') {
        return undefined;
    }
    let value;
    try {
        value = localStorage.getItem(key) || undefined;
        if (!value) {
            // the first time that user enters the site.
            localStorage.setItem(key, defaultValue);
        }
    } catch  {
    // Unsupported
    }
    return value || defaultValue;
}
function useCurrentColorScheme(options) {
    const { defaultMode = 'light', defaultLightColorScheme, defaultDarkColorScheme, supportedColorSchemes = [], modeStorageKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_MODE_STORAGE_KEY"], colorSchemeStorageKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_COLOR_SCHEME_STORAGE_KEY"], storageWindow = typeof window === 'undefined' ? undefined : window, noSsr = false } = options;
    const joinedColorSchemes = supportedColorSchemes.join(',');
    const isMultiSchemes = supportedColorSchemes.length > 1;
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(()=>{
        const initialMode = initializeValue(modeStorageKey, defaultMode);
        const lightColorScheme = initializeValue(`${colorSchemeStorageKey}-light`, defaultLightColorScheme);
        const darkColorScheme = initializeValue(`${colorSchemeStorageKey}-dark`, defaultDarkColorScheme);
        return {
            mode: initialMode,
            systemMode: getSystemMode(initialMode),
            lightColorScheme,
            darkColorScheme
        };
    });
    const [isClient, setIsClient] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(noSsr || !isMultiSchemes);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
        setIsClient(true); // to rerender the component after hydration
    }, []);
    const colorScheme = getColorScheme(state);
    const setMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback((mode)=>{
        setState((currentState)=>{
            if (mode === currentState.mode) {
                // do nothing if mode does not change
                return currentState;
            }
            const newMode = mode ?? defaultMode;
            try {
                localStorage.setItem(modeStorageKey, newMode);
            } catch  {
            // Unsupported
            }
            return {
                ...currentState,
                mode: newMode,
                systemMode: getSystemMode(newMode)
            };
        });
    }, [
        modeStorageKey,
        defaultMode
    ]);
    const setColorScheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback((value)=>{
        if (!value) {
            setState((currentState)=>{
                try {
                    localStorage.setItem(`${colorSchemeStorageKey}-light`, defaultLightColorScheme);
                    localStorage.setItem(`${colorSchemeStorageKey}-dark`, defaultDarkColorScheme);
                } catch  {
                // Unsupported
                }
                return {
                    ...currentState,
                    lightColorScheme: defaultLightColorScheme,
                    darkColorScheme: defaultDarkColorScheme
                };
            });
        } else if (typeof value === 'string') {
            if (value && !joinedColorSchemes.includes(value)) {
                console.error(`\`${value}\` does not exist in \`theme.colorSchemes\`.`);
            } else {
                setState((currentState)=>{
                    const newState = {
                        ...currentState
                    };
                    processState(currentState, (mode)=>{
                        try {
                            localStorage.setItem(`${colorSchemeStorageKey}-${mode}`, value);
                        } catch  {
                        // Unsupported
                        }
                        if (mode === 'light') {
                            newState.lightColorScheme = value;
                        }
                        if (mode === 'dark') {
                            newState.darkColorScheme = value;
                        }
                    });
                    return newState;
                });
            }
        } else {
            setState((currentState)=>{
                const newState = {
                    ...currentState
                };
                const newLightColorScheme = value.light === null ? defaultLightColorScheme : value.light;
                const newDarkColorScheme = value.dark === null ? defaultDarkColorScheme : value.dark;
                if (newLightColorScheme) {
                    if (!joinedColorSchemes.includes(newLightColorScheme)) {
                        console.error(`\`${newLightColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
                    } else {
                        newState.lightColorScheme = newLightColorScheme;
                        try {
                            localStorage.setItem(`${colorSchemeStorageKey}-light`, newLightColorScheme);
                        } catch (error) {
                        // Unsupported
                        }
                    }
                }
                if (newDarkColorScheme) {
                    if (!joinedColorSchemes.includes(newDarkColorScheme)) {
                        console.error(`\`${newDarkColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
                    } else {
                        newState.darkColorScheme = newDarkColorScheme;
                        try {
                            localStorage.setItem(`${colorSchemeStorageKey}-dark`, newDarkColorScheme);
                        } catch (error) {
                        // Unsupported
                        }
                    }
                }
                return newState;
            });
        }
    }, [
        joinedColorSchemes,
        colorSchemeStorageKey,
        defaultLightColorScheme,
        defaultDarkColorScheme
    ]);
    const handleMediaQuery = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback((event)=>{
        if (state.mode === 'system') {
            setState((currentState)=>{
                const systemMode = event?.matches ? 'dark' : 'light';
                // Early exit, nothing changed.
                if (currentState.systemMode === systemMode) {
                    return currentState;
                }
                return {
                    ...currentState,
                    systemMode
                };
            });
        }
    }, [
        state.mode
    ]);
    // Ref hack to avoid adding handleMediaQuery as a dep
    const mediaListener = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(handleMediaQuery);
    mediaListener.current = handleMediaQuery;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
        if (typeof window.matchMedia !== 'function' || !isMultiSchemes) {
            return undefined;
        }
        const handler = (...args)=>mediaListener.current(...args);
        // Always listen to System preference
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        // Intentionally use deprecated listener methods to support iOS & old browsers
        media.addListener(handler);
        handler(media);
        return ()=>{
            media.removeListener(handler);
        };
    }, [
        isMultiSchemes
    ]);
    // Handle when localStorage has changed
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
        if (storageWindow && isMultiSchemes) {
            const handleStorage = (event)=>{
                const value = event.newValue;
                if (typeof event.key === 'string' && event.key.startsWith(colorSchemeStorageKey) && (!value || joinedColorSchemes.match(value))) {
                    // If the key is deleted, value will be null then reset color scheme to the default one.
                    if (event.key.endsWith('light')) {
                        setColorScheme({
                            light: value
                        });
                    }
                    if (event.key.endsWith('dark')) {
                        setColorScheme({
                            dark: value
                        });
                    }
                }
                if (event.key === modeStorageKey && (!value || [
                    'light',
                    'dark',
                    'system'
                ].includes(value))) {
                    setMode(value || defaultMode);
                }
            };
            // For syncing color-scheme changes between iframes
            storageWindow.addEventListener('storage', handleStorage);
            return ()=>{
                storageWindow.removeEventListener('storage', handleStorage);
            };
        }
        return undefined;
    }, [
        setColorScheme,
        setMode,
        modeStorageKey,
        colorSchemeStorageKey,
        joinedColorSchemes,
        defaultMode,
        storageWindow,
        isMultiSchemes
    ]);
    return {
        ...state,
        mode: isClient ? state.mode : undefined,
        systemMode: isClient ? state.systemMode : undefined,
        colorScheme: isClient ? colorScheme : undefined,
        setMode,
        setColorScheme
    };
}
}}),
"[project]/node_modules/@mui/private-theming/ThemeProvider/nested.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const hasSymbol = typeof Symbol === 'function' && Symbol.for;
const __TURBOPACK__default__export__ = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';
}}),
"[project]/node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// To support composition of theme.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$exactProp$2f$exactProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__exactProp$3e$__ = __turbopack_import__("[project]/node_modules/@mui/utils/esm/exactProp/exactProp.js [app-ssr] (ecmascript) <export default as exactProp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/private-theming/useTheme/useTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$ThemeProvider$2f$nested$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/private-theming/ThemeProvider/nested.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$ThemeContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/private-theming/useTheme/ThemeContext.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function mergeOuterLocalTheme(outerTheme, localTheme) {
    if (typeof localTheme === 'function') {
        const mergedTheme = localTheme(outerTheme);
        if ("TURBOPACK compile-time truthy", 1) {
            if (!mergedTheme) {
                console.error([
                    'MUI: You should return an object from your theme function, i.e.',
                    '<ThemeProvider theme={() => ({})} />'
                ].join('\n'));
            }
        }
        return mergedTheme;
    }
    return {
        ...outerTheme,
        ...localTheme
    };
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */ function ThemeProvider(props) {
    const { children, theme: localTheme } = props;
    const outerTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    if ("TURBOPACK compile-time truthy", 1) {
        if (outerTheme === null && typeof localTheme === 'function') {
            console.error([
                'MUI: You are providing a theme function prop to the ThemeProvider component:',
                '<ThemeProvider theme={outerTheme => outerTheme} />',
                '',
                'However, no outer theme is present.',
                'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'
            ].join('\n'));
        }
    }
    const theme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
        const output = outerTheme === null ? {
            ...localTheme
        } : mergeOuterLocalTheme(outerTheme, localTheme);
        if (output != null) {
            output[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$ThemeProvider$2f$nested$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]] = outerTheme !== null;
        }
        return output;
    }, [
        localTheme,
        outerTheme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$ThemeContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: theme,
        children: children
    });
}
("TURBOPACK compile-time truthy", 1) ? ThemeProvider.propTypes = {
    /**
   * Your component tree.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * A theme object. You can provide a function to extend the outer theme.
   */ theme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func
    ]).isRequired
} : ("TURBOPACK unreachable", undefined);
if ("TURBOPACK compile-time truthy", 1) {
    ("TURBOPACK compile-time truthy", 1) ? ThemeProvider.propTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$exactProp$2f$exactProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__exactProp$3e$__["exactProp"])(ThemeProvider.propTypes) : ("TURBOPACK unreachable", undefined);
}
const __TURBOPACK__default__export__ = ThemeProvider;
}}),
"[project]/node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js [app-ssr] (ecmascript) <export default as ThemeProvider>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ThemeProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$ThemeProvider$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$ThemeProvider$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$exactProp$2f$exactProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/utils/esm/exactProp/exactProp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeWithoutDefault$2f$useThemeWithoutDefault$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/useThemeWithoutDefault/useThemeWithoutDefault.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_import__("[project]/node_modules/@mui/private-theming/useTheme/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$ThemeProvider$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_import__("[project]/node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js [app-ssr] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__T__as__ThemeContext$3e$__ = __turbopack_import__("[project]/node_modules/@emotion/react/dist/emotion-element-782f682d.development.esm.js [app-ssr] (ecmascript) <export T as ThemeContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$RtlProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/RtlProvider/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/DefaultPropsProvider/DefaultPropsProvider.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const EMPTY_THEME = {};
function useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
        const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
        if (typeof localTheme === 'function') {
            const mergedTheme = localTheme(resolvedTheme);
            const result = themeId ? {
                ...upperTheme,
                [themeId]: mergedTheme
            } : mergedTheme;
            // must return a function for the private theme to NOT merge with the upper theme.
            // see the test case "use provided theme from a callback" in ThemeProvider.test.js
            if (isPrivate) {
                return ()=>result;
            }
            return result;
        }
        return themeId ? {
            ...upperTheme,
            [themeId]: localTheme
        } : {
            ...upperTheme,
            ...localTheme
        };
    }, [
        themeId,
        upperTheme,
        localTheme,
        isPrivate
    ]);
}
/**
 * This component makes the `theme` available down the React tree.
 * It should preferably be used at **the root of your component tree**.
 *
 * <ThemeProvider theme={theme}> // existing use case
 * <ThemeProvider theme={{ id: theme }}> // theme scoping
 */ function ThemeProvider(props) {
    const { children, theme: localTheme, themeId } = props;
    const upperTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeWithoutDefault$2f$useThemeWithoutDefault$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(EMPTY_THEME);
    const upperPrivateTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])() || EMPTY_THEME;
    if ("TURBOPACK compile-time truthy", 1) {
        if (upperTheme === null && typeof localTheme === 'function' || themeId && upperTheme && !upperTheme[themeId] && typeof localTheme === 'function') {
            console.error([
                'MUI: You are providing a theme function prop to the ThemeProvider component:',
                '<ThemeProvider theme={outerTheme => outerTheme} />',
                '',
                'However, no outer theme is present.',
                'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'
            ].join('\n'));
        }
    }
    const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
    const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
    const rtlValue = (themeId ? engineTheme[themeId] : engineTheme).direction === 'rtl';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$ThemeProvider$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
        theme: privateTheme,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__T__as__ThemeContext$3e$__["ThemeContext"].Provider, {
            value: engineTheme,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$RtlProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                value: rtlValue,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    value: themeId ? engineTheme[themeId].components : engineTheme.components,
                    children: children
                })
            })
        })
    });
}
("TURBOPACK compile-time truthy", 1) ? ThemeProvider.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * Your component tree.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * A theme object. You can provide a function to extend the outer theme.
   */ theme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
    ]).isRequired,
    /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */ themeId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string
} : ("TURBOPACK unreachable", undefined);
if ("TURBOPACK compile-time truthy", 1) {
    ("TURBOPACK compile-time truthy", 1) ? ThemeProvider.propTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$exactProp$2f$exactProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ThemeProvider.propTypes) : ("TURBOPACK unreachable", undefined);
}
const __TURBOPACK__default__export__ = ThemeProvider;
}}),
"[project]/node_modules/@mui/system/esm/cssVars/createCssVarsProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DISABLE_CSS_TRANSITION": (()=>DISABLE_CSS_TRANSITION),
    "default": (()=>createCssVarsProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/InitColorSchemeScript/InitColorSchemeScript.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_import__("[project]/node_modules/@mui/private-theming/useTheme/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$useCurrentColorScheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/cssVars/useCurrentColorScheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$ThemeProvider$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobalStyles$3e$__ = __turbopack_import__("[project]/node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js [app-ssr] (ecmascript) <export default as GlobalStyles>");
;
;
;
;
;
;
;
;
const DISABLE_CSS_TRANSITION = '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
function createCssVarsProvider(options) {
    const { themeId, /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */ theme: defaultTheme = {}, modeStorageKey: defaultModeStorageKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_MODE_STORAGE_KEY"], colorSchemeStorageKey: defaultColorSchemeStorageKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_COLOR_SCHEME_STORAGE_KEY"], disableTransitionOnChange: designSystemTransitionOnChange = false, defaultColorScheme, resolveTheme } = options;
    const defaultContext = {
        allColorSchemes: [],
        colorScheme: undefined,
        darkColorScheme: undefined,
        lightColorScheme: undefined,
        mode: undefined,
        setColorScheme: ()=>{},
        setMode: ()=>{},
        systemMode: undefined
    };
    const ColorSchemeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(undefined);
    if ("TURBOPACK compile-time truthy", 1) {
        ColorSchemeContext.displayName = 'ColorSchemeContext';
    }
    const useColorScheme = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(ColorSchemeContext) || defaultContext;
    const defaultColorSchemes = {};
    const defaultComponents = {};
    function CssVarsProvider(props) {
        const { children, theme: themeProp, modeStorageKey = defaultModeStorageKey, colorSchemeStorageKey = defaultColorSchemeStorageKey, disableTransitionOnChange = designSystemTransitionOnChange, storageWindow = typeof window === 'undefined' ? undefined : window, documentNode = typeof document === 'undefined' ? undefined : document, colorSchemeNode = typeof document === 'undefined' ? undefined : document.documentElement, disableNestedContext = false, disableStyleSheetGeneration = false, defaultMode: initialMode = 'system', noSsr } = props;
        const hasMounted = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(false);
        const upperTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$private$2d$theming$2f$useTheme$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(ColorSchemeContext);
        const nested = !!ctx && !disableNestedContext;
        const initialTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
            if (themeProp) {
                return themeProp;
            }
            return typeof defaultTheme === 'function' ? defaultTheme() : defaultTheme;
        }, [
            themeProp
        ]);
        const scopedTheme = initialTheme[themeId];
        const restThemeProp = scopedTheme || initialTheme;
        const { colorSchemes = defaultColorSchemes, components = defaultComponents, cssVarPrefix } = restThemeProp;
        const joinedColorSchemes = Object.keys(colorSchemes).filter((k)=>!!colorSchemes[k]).join(',');
        const allColorSchemes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>joinedColorSchemes.split(','), [
            joinedColorSchemes
        ]);
        const defaultLightColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.light;
        const defaultDarkColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.dark;
        const defaultMode = colorSchemes[defaultLightColorScheme] && colorSchemes[defaultDarkColorScheme] ? initialMode : colorSchemes[restThemeProp.defaultColorScheme]?.palette?.mode || restThemeProp.palette?.mode;
        // 1. Get the data about the `mode`, `colorScheme`, and setter functions.
        const { mode: stateMode, setMode, systemMode, lightColorScheme, darkColorScheme, colorScheme: stateColorScheme, setColorScheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$useCurrentColorScheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            supportedColorSchemes: allColorSchemes,
            defaultLightColorScheme,
            defaultDarkColorScheme,
            modeStorageKey,
            colorSchemeStorageKey,
            defaultMode,
            storageWindow,
            noSsr
        });
        let mode = stateMode;
        let colorScheme = stateColorScheme;
        if (nested) {
            mode = ctx.mode;
            colorScheme = ctx.colorScheme;
        }
        const memoTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
            // `colorScheme` is undefined on the server and hydration phase
            const calculatedColorScheme = colorScheme || restThemeProp.defaultColorScheme;
            // 2. get the `vars` object that refers to the CSS custom properties
            const themeVars = restThemeProp.generateThemeVars?.() || restThemeProp.vars;
            // 3. Start composing the theme object
            const theme = {
                ...restThemeProp,
                components,
                colorSchemes,
                cssVarPrefix,
                vars: themeVars
            };
            if (typeof theme.generateSpacing === 'function') {
                theme.spacing = theme.generateSpacing();
            }
            // 4. Resolve the color scheme and merge it to the theme
            if (calculatedColorScheme) {
                const scheme = colorSchemes[calculatedColorScheme];
                if (scheme && typeof scheme === 'object') {
                    // 4.1 Merge the selected color scheme to the theme
                    Object.keys(scheme).forEach((schemeKey)=>{
                        if (scheme[schemeKey] && typeof scheme[schemeKey] === 'object') {
                            // shallow merge the 1st level structure of the theme.
                            theme[schemeKey] = {
                                ...theme[schemeKey],
                                ...scheme[schemeKey]
                            };
                        } else {
                            theme[schemeKey] = scheme[schemeKey];
                        }
                    });
                }
            }
            return resolveTheme ? resolveTheme(theme) : theme;
        }, [
            restThemeProp,
            colorScheme,
            components,
            colorSchemes,
            cssVarPrefix
        ]);
        // 5. Declaring effects
        // 5.1 Updates the selector value to use the current color scheme which tells CSS to use the proper stylesheet.
        const colorSchemeSelector = restThemeProp.colorSchemeSelector;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
            if (colorScheme && colorSchemeNode && colorSchemeSelector && colorSchemeSelector !== 'media') {
                const selector = colorSchemeSelector;
                let rule = colorSchemeSelector;
                if (selector === 'class') {
                    rule = `.%s`;
                }
                if (selector === 'data') {
                    rule = `[data-%s]`;
                }
                if (selector?.startsWith('data-') && !selector.includes('%s')) {
                    // 'data-mui-color-scheme' -> '[data-mui-color-scheme="%s"]'
                    rule = `[${selector}="%s"]`;
                }
                if (rule.startsWith('.')) {
                    colorSchemeNode.classList.remove(...allColorSchemes.map((scheme)=>rule.substring(1).replace('%s', scheme)));
                    colorSchemeNode.classList.add(rule.substring(1).replace('%s', colorScheme));
                } else {
                    const matches = rule.replace('%s', colorScheme).match(/\[([^\]]+)\]/);
                    if (matches) {
                        const [attr, value] = matches[1].split('=');
                        if (!value) {
                            // for attributes like `data-theme-dark`, `data-theme-light`
                            // remove all the existing data attributes before setting the new one
                            allColorSchemes.forEach((scheme)=>{
                                colorSchemeNode.removeAttribute(attr.replace(colorScheme, scheme));
                            });
                        }
                        colorSchemeNode.setAttribute(attr, value ? value.replace(/"|'/g, '') : '');
                    } else {
                        colorSchemeNode.setAttribute(rule, colorScheme);
                    }
                }
            }
        }, [
            colorScheme,
            colorSchemeSelector,
            colorSchemeNode,
            allColorSchemes
        ]);
        // 5.2 Remove the CSS transition when color scheme changes to create instant experience.
        // credit: https://github.com/pacocoursey/next-themes/blob/b5c2bad50de2d61ad7b52a9c5cdc801a78507d7a/index.tsx#L313
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
            let timer;
            if (disableTransitionOnChange && hasMounted.current && documentNode) {
                const css = documentNode.createElement('style');
                css.appendChild(documentNode.createTextNode(DISABLE_CSS_TRANSITION));
                documentNode.head.appendChild(css);
                // Force browser repaint
                (()=>window.getComputedStyle(documentNode.body))();
                timer = setTimeout(()=>{
                    documentNode.head.removeChild(css);
                }, 1);
            }
            return ()=>{
                clearTimeout(timer);
            };
        }, [
            colorScheme,
            disableTransitionOnChange,
            documentNode
        ]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
            hasMounted.current = true;
            return ()=>{
                hasMounted.current = false;
            };
        }, []);
        const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>({
                allColorSchemes,
                colorScheme,
                darkColorScheme,
                lightColorScheme,
                mode,
                setColorScheme,
                setMode: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : (newMode)=>{
                    if (memoTheme.colorSchemeSelector === 'media') {
                        console.error([
                            'MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).',
                            'To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.',
                            'To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually'
                        ].join('\n'));
                    }
                    setMode(newMode);
                },
                systemMode
            }), [
            allColorSchemes,
            colorScheme,
            darkColorScheme,
            lightColorScheme,
            mode,
            setColorScheme,
            setMode,
            systemMode,
            memoTheme.colorSchemeSelector
        ]);
        let shouldGenerateStyleSheet = true;
        if (disableStyleSheetGeneration || restThemeProp.cssVariables === false || nested && upperTheme?.cssVarPrefix === cssVarPrefix) {
            shouldGenerateStyleSheet = false;
        }
        const element = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Fragment, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$ThemeProvider$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    themeId: scopedTheme ? themeId : undefined,
                    theme: memoTheme,
                    children: children
                }),
                shouldGenerateStyleSheet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobalStyles$3e$__["GlobalStyles"], {
                    styles: memoTheme.generateStyleSheets?.() || []
                })
            ]
        });
        if (nested) {
            return element;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ColorSchemeContext.Provider, {
            value: contextValue,
            children: element
        });
    }
    ("TURBOPACK compile-time truthy", 1) ? CssVarsProvider.propTypes = {
        /**
     * The component tree.
     */ children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
        /**
     * The node used to attach the color-scheme attribute
     */ colorSchemeNode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any,
        /**
     * localStorage key used to store `colorScheme`
     */ colorSchemeStorageKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */ defaultMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */ disableNestedContext: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
        /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */ disableStyleSheetGeneration: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
        /**
     * Disable CSS transitions when switching between modes or color schemes.
     */ disableTransitionOnChange: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
        /**
     * The document to attach the attribute to.
     */ documentNode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any,
        /**
     * The key in the local storage used to store current color scheme.
     */ modeStorageKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjuction with `InitColorSchemeScript` component.
     */ noSsr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
        /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */ storageWindow: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any,
        /**
     * The calculated theme object that will be passed through context.
     */ theme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
    } : ("TURBOPACK unreachable", undefined);
    const defaultLightColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.light;
    const defaultDarkColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.dark;
    const getInitColorSchemeScript = (params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            colorSchemeStorageKey: defaultColorSchemeStorageKey,
            defaultLightColorScheme,
            defaultDarkColorScheme,
            modeStorageKey: defaultModeStorageKey,
            ...params
        });
    return {
        CssVarsProvider,
        useColorScheme,
        getInitColorSchemeScript
    };
}
}}),
"[project]/node_modules/@mui/system/esm/cssVars/createCssVarsProvider.js [app-ssr] (ecmascript) <export default as unstable_createCssVarsProvider>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "unstable_createCssVarsProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$createCssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$createCssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/cssVars/createCssVarsProvider.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/@mui/material/InitColorSchemeScript/InitColorSchemeScript.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "defaultConfig": (()=>defaultConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/InitColorSchemeScript/InitColorSchemeScript.js [app-ssr] (ecmascript)");
;
;
;
const defaultConfig = {
    attribute: 'data-mui-color-scheme',
    colorSchemeStorageKey: 'mui-color-scheme',
    defaultLightColorScheme: 'light',
    defaultDarkColorScheme: 'dark',
    modeStorageKey: 'mui-mode'
};
const __TURBOPACK__default__export__ = function InitColorSchemeScript(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ...defaultConfig,
        ...props
    });
};
}}),
"[project]/node_modules/@mui/material/styles/ThemeProviderWithVars.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CssVarsProvider": (()=>CssVarsProvider),
    "Experimental_CssVarsProvider": (()=>Experimental_CssVarsProvider),
    "getInitColorSchemeScript": (()=>getInitColorSchemeScript),
    "useColorScheme": (()=>useColorScheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$createCssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_createCssVarsProvider$3e$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/cssVars/createCssVarsProvider.js [app-ssr] (ecmascript) <export default as unstable_createCssVarsProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/InitColorSchemeScript/InitColorSchemeScript.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTypography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/createTypography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const { CssVarsProvider: InternalCssVarsProvider, useColorScheme, getInitColorSchemeScript: deprecatedGetInitColorSchemeScript } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$cssVars$2f$createCssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_createCssVarsProvider$3e$__["unstable_createCssVarsProvider"])({
    themeId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    // @ts-ignore ignore module augmentation tests
    theme: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
            cssVariables: true
        }),
    colorSchemeStorageKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultConfig"].colorSchemeStorageKey,
    modeStorageKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultConfig"].modeStorageKey,
    defaultColorScheme: {
        light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultConfig"].defaultLightColorScheme,
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultConfig"].defaultDarkColorScheme
    },
    resolveTheme: (theme)=>{
        const newTheme = {
            ...theme,
            typography: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTypography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(theme.palette, theme.typography)
        };
        newTheme.unstable_sx = function sx(props) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$styleFunctionSx$2f$styleFunctionSx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                sx: props,
                theme: this
            });
        };
        return newTheme;
    }
});
let warnedOnce = false;
// TODO: remove in v7
// eslint-disable-next-line @typescript-eslint/naming-convention
function Experimental_CssVarsProvider(props) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (!warnedOnce) {
            console.warn([
                'MUI: The Experimental_CssVarsProvider component has been ported into ThemeProvider.',
                '',
                "You should use `import { ThemeProvider } from '@mui/material/styles'` instead.",
                'For more details, check out https://mui.com/material-ui/customization/css-theme-variables/usage/'
            ].join('\n'));
            warnedOnce = true;
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(InternalCssVarsProvider, {
        ...props
    });
}
let warnedInitScriptOnce = false;
// TODO: remove in v7
const getInitColorSchemeScript = (params)=>{
    if (!warnedInitScriptOnce) {
        console.warn([
            'MUI: The getInitColorSchemeScript function has been deprecated.',
            '',
            "You should use `import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'`",
            'and replace the function call with `<InitColorSchemeScript />` instead.'
        ].join('\n'));
        warnedInitScriptOnce = true;
    }
    return deprecatedGetInitColorSchemeScript(params);
};
const CssVarsProvider = InternalCssVarsProvider;
;
}}),
"[project]/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js [app-ssr] (ecmascript) <export default as ThemeProvider>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ThemeProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$ThemeProvider$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$ThemeProvider$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/@mui/material/styles/ThemeProviderNoVars.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ThemeProviderNoVars)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$ThemeProvider$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js [app-ssr] (ecmascript) <export default as ThemeProvider>");
'use client';
;
;
;
;
function ThemeProviderNoVars({ theme: themeInput, ...props }) {
    const scopedTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] in themeInput ? themeInput[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]] : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$ThemeProvider$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
        ...props,
        themeId: scopedTheme ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : undefined,
        theme: scopedTheme || themeInput
    });
}
}}),
"[project]/node_modules/@mui/material/styles/ThemeProvider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ThemeProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/identifier.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProviderWithVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/ThemeProviderWithVars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProviderNoVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/ThemeProviderNoVars.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ThemeProvider({ theme, ...props }) {
    if (typeof theme === 'function') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProviderNoVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            theme: theme,
            ...props
        });
    }
    const muiTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] in theme ? theme[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]] : theme;
    if (!('colorSchemes' in muiTheme)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProviderNoVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            theme: theme,
            ...props
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProviderWithVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CssVarsProvider"], {
        theme: theme,
        ...props
    });
}
}}),
"[project]/node_modules/@mui/material/styles/ThemeProvider.js [app-ssr] (ecmascript) <export default as ThemeProvider>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ThemeProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/ThemeProvider.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/@mui/material/CssBaseline/CssBaseline.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "body": (()=>body),
    "default": (()=>__TURBOPACK__default__export__),
    "html": (()=>html),
    "styles": (()=>styles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// to determine if the global styles are static or dynamic
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$zero$2d$styled$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/zero-styled/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const isDynamicSupport = typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$zero$2d$styled$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["globalCss"])({}) === 'function';
const html = (theme, enableColorScheme)=>({
        WebkitFontSmoothing: 'antialiased',
        // Antialiasing.
        MozOsxFontSmoothing: 'grayscale',
        // Antialiasing.
        // Change from `box-sizing: content-box` so that `width`
        // is not affected by `padding` or `border`.
        boxSizing: 'border-box',
        // Fix font resize problem in iOS
        WebkitTextSizeAdjust: '100%',
        // When used under CssVarsProvider, colorScheme should not be applied dynamically because it will generate the stylesheet twice for server-rendered applications.
        ...enableColorScheme && !theme.vars && {
            colorScheme: theme.palette.mode
        }
    });
const body = (theme)=>({
        color: (theme.vars || theme).palette.text.primary,
        ...theme.typography.body1,
        backgroundColor: (theme.vars || theme).palette.background.default,
        '@media print': {
            // Save printer ink.
            backgroundColor: (theme.vars || theme).palette.common.white
        }
    });
const styles = (theme, enableColorScheme = false)=>{
    const colorSchemeStyles = {};
    if (enableColorScheme && theme.colorSchemes && typeof theme.getColorSchemeSelector === 'function') {
        Object.entries(theme.colorSchemes).forEach(([key, scheme])=>{
            const selector = theme.getColorSchemeSelector(key);
            if (selector.startsWith('@')) {
                // for @media (prefers-color-scheme), we need to target :root
                colorSchemeStyles[selector] = {
                    ':root': {
                        colorScheme: scheme.palette?.mode
                    }
                };
            } else {
                // else, it's likely that the selector already target an element with a class or data attribute
                colorSchemeStyles[selector.replace(/\s*&/, '')] = {
                    colorScheme: scheme.palette?.mode
                };
            }
        });
    }
    let defaultStyles = {
        html: html(theme, enableColorScheme),
        '*, *::before, *::after': {
            boxSizing: 'inherit'
        },
        'strong, b': {
            fontWeight: theme.typography.fontWeightBold
        },
        body: {
            margin: 0,
            // Remove the margin in all browsers.
            ...body(theme),
            // Add support for document.body.requestFullScreen().
            // Other elements, if background transparent, are not supported.
            '&::backdrop': {
                backgroundColor: (theme.vars || theme).palette.background.default
            }
        },
        ...colorSchemeStyles
    };
    const themeOverrides = theme.components?.MuiCssBaseline?.styleOverrides;
    if (themeOverrides) {
        defaultStyles = [
            defaultStyles,
            themeOverrides
        ];
    }
    return defaultStyles;
};
// `ecs` stands for enableColorScheme. This is internal logic to make it work with Pigment CSS, so shorter is better.
const SELECTOR = 'mui-ecs';
const staticStyles = (theme)=>{
    const result = styles(theme, false);
    const baseStyles = Array.isArray(result) ? result[0] : result;
    if (!theme.vars && baseStyles) {
        baseStyles.html[`:root:has(${SELECTOR})`] = {
            colorScheme: theme.palette.mode
        };
    }
    if (theme.colorSchemes) {
        Object.entries(theme.colorSchemes).forEach(([key, scheme])=>{
            const selector = theme.getColorSchemeSelector(key);
            if (selector.startsWith('@')) {
                // for @media (prefers-color-scheme), we need to target :root
                baseStyles[selector] = {
                    [`:root:not(:has(.${SELECTOR}))`]: {
                        colorScheme: scheme.palette?.mode
                    }
                };
            } else {
                // else, it's likely that the selector already target an element with a class or data attribute
                baseStyles[selector.replace(/\s*&/, '')] = {
                    [`&:not(:has(.${SELECTOR}))`]: {
                        colorScheme: scheme.palette?.mode
                    }
                };
            }
        });
    }
    return result;
};
const GlobalStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$zero$2d$styled$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["globalCss"])(isDynamicSupport ? ({ theme, enableColorScheme })=>styles(theme, enableColorScheme) : ({ theme })=>staticStyles(theme));
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */ function CssBaseline(inProps) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiCssBaseline'
    });
    const { children, enableColorScheme = false } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Fragment, {
        children: [
            isDynamicSupport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(GlobalStyles, {
                enableColorScheme: enableColorScheme
            }),
            !isDynamicSupport && !enableColorScheme && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: SELECTOR,
                style: {
                    display: 'none'
                }
            }),
            children
        ]
    });
}
("TURBOPACK compile-time truthy", 1) ? CssBaseline.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * You can wrap a node.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */ enableColorScheme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool
} : ("TURBOPACK unreachable", undefined);
const __TURBOPACK__default__export__ = CssBaseline;
}}),
"[project]/node_modules/@mui/material/CssBaseline/CssBaseline.js [app-ssr] (ecmascript) <export default as CssBaseline>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CssBaseline": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/CssBaseline/CssBaseline.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_758c87._.js.map