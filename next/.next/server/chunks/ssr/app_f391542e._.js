module.exports = {

"[project]/app/data/product.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":1,\"name\":\"Laptop Gaming ROG Strix\",\"category\":\"Electronics\",\"price\":15000000,\"currency\":\"IDR\",\"brand\":\"ASUS\",\"description\":\"Laptop gaming dengan performa tinggi untuk gaming dan content creation\",\"specifications\":{\"processor\":\"Intel Core i7-12700H\",\"ram\":\"16GB DDR4\",\"storage\":\"512GB SSD\",\"graphics\":\"NVIDIA RTX 3060\",\"display\":\"15.6 inch 144Hz\"},\"availability\":{\"inStock\":true,\"quantity\":25,\"warehouse\":\"Jakarta\"},\"ratings\":{\"average\":4.5,\"totalReviews\":128},\"tags\":[\"gaming\",\"laptop\",\"high-performance\"],\"createdAt\":\"2024-01-15T08:30:00Z\",\"updatedAt\":\"2024-01-20T14:22:00Z\"},{\"id\":2,\"name\":\"Smartphone Samsung Galaxy\",\"category\":\"Electronics\",\"price\":12000000,\"currency\":\"IDR\",\"brand\":\"Samsung\",\"description\":\"Smartphone flagship dengan kamera AI dan performa terdepan\",\"specifications\":{\"processor\":\"Snapdragon 8 Gen 3\",\"ram\":\"8GB\",\"storage\":\"256GB\",\"camera\":\"50MP Triple Camera\",\"display\":\"6.2 inch Dynamic AMOLED\"},\"availability\":{\"inStock\":true,\"quantity\":45,\"warehouse\":\"Surabaya\"},\"ratings\":{\"average\":4.7,\"totalReviews\":89},\"tags\":[\"smartphone\",\"flagship\",\"camera\"],\"createdAt\":\"2024-01-10T10:15:00Z\",\"updatedAt\":\"2024-01-18T16:45:00Z\"},{\"id\":3,\"name\":\"Headphone Sony WH-1000XM5\",\"category\":\"Audio\",\"price\":4500000,\"currency\":\"IDR\",\"brand\":\"Sony\",\"description\":\"Headphone wireless dengan noise cancelling terbaik di kelasnya\",\"specifications\":{\"type\":\"Over-ear\",\"connectivity\":\"Bluetooth 5.2\",\"batteryLife\":\"30 hours\",\"noiseCancelling\":\"Active\",\"weight\":\"250g\"},\"availability\":{\"inStock\":false,\"quantity\":0,\"warehouse\":\"Bandung\"},\"ratings\":{\"average\":4.8,\"totalReviews\":203},\"tags\":[\"headphone\",\"wireless\",\"noise-cancelling\"],\"createdAt\":\"2024-01-05T12:20:00Z\",\"updatedAt\":\"2024-01-22T09:30:00Z\"},{\"id\":4,\"name\":\"Smartwatch Apple Watch\",\"category\":\"Wearables\",\"price\":6500000,\"currency\":\"IDR\",\"brand\":\"Apple\",\"description\":\"Smartwatch dengan fitur kesehatan lengkap dan integrasi sempurna dengan iPhone\",\"specifications\":{\"displaySize\":\"45mm\",\"material\":\"Aluminum\",\"sensors\":[\"Heart Rate\",\"Blood Oxygen\",\"ECG\"],\"waterResistance\":\"50 meters\",\"batteryLife\":\"18 hours\"},\"availability\":{\"inStock\":true,\"quantity\":15,\"warehouse\":\"Jakarta\"},\"ratings\":{\"average\":4.6,\"totalReviews\":67},\"tags\":[\"smartwatch\",\"health\",\"apple\"],\"createdAt\":\"2024-01-08T14:10:00Z\",\"updatedAt\":\"2024-01-19T11:15:00Z\"},{\"id\":5,\"name\":\"Tablet iPad Air M2\",\"category\":\"Electronics\",\"price\":8500000,\"currency\":\"IDR\",\"brand\":\"Apple\",\"description\":\"Tablet powerful dengan chip M2 untuk produktivitas dan kreativitas\",\"specifications\":{\"processor\":\"Apple M2\",\"ram\":\"8GB\",\"storage\":\"128GB\",\"display\":\"10.9 inch Liquid Retina\",\"camera\":\"12MP\"},\"availability\":{\"inStock\":true,\"quantity\":30,\"warehouse\":\"Medan\"},\"ratings\":{\"average\":4.4,\"totalReviews\":45},\"tags\":[\"tablet\",\"productivity\",\"apple\"],\"createdAt\":\"2024-01-12T16:25:00Z\",\"updatedAt\":\"2024-01-21T13:40:00Z\"}]"));}}),
"[project]/app/(pages)/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$GT2IF6NJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/button/dist/chunk-GT2IF6NJ.mjs [app-ssr] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const products = __turbopack_context__.r("[project]/app/data/product.json (json)");
function Home() {
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [labelValue, setLabelValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(products[0].name);
    const changeLabelValue = ()=>{
        const nextIndex = (currentIndex + 1) % products.length;
        setCurrentIndex(nextIndex);
        setLabelValue(products[nextIndex].name);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid items-start justify-items-center min-h-screen p-8 gap-16 sm:p-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center gap-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-lg border border-gray-300 p-4 gap-4 ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold pb-3 border-b border-gray-300",
                            children: "List of products"
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/page.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 pt-4",
                            children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: product.name
                                }, product.id, false, {
                                    fileName: "[project]/app/(pages)/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/page.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 w-96",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-500",
                            children: "Label Value:"
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold",
                            children: labelValue
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/page.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$GT2IF6NJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                            className: "w-1/2",
                            color: "primary",
                            variant: "solid",
                            onPress: changeLabelValue,
                            children: "Change Label"
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/page.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/page.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/page.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(pages)/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_f391542e._.js.map