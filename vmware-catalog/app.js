/*
React.createElement('main', { className: "max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6" },
// Sidebar filters
React.createElement('aside', { className: "lg:col-span-1" },
React.createElement('div', { className: "bg-white rounded-xl2 shadow-soft p-5 space-y-5" },
React.createElement('div', null,
React.createElement('label', { htmlFor: "search", className: "block text-sm font-medium text-slate-700 mb-2" }, "Search"),
React.createElement('div', { className: "relative" },
React.createElement('input', {
id: 'search',
value: query,
onChange: e => setQuery(e.target.value),
placeholder: 'Search across all items…',
className: "w-full rounded-lg border border-slate-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-sky-500"
}),
React.createElement('i', { className: "fa-solid fa-magnifying-glass absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" })
)
),
React.createElement('div', null,
React.createElement('div', { className: "text-sm font-medium text-slate-700 mb-2" }, "Types"),
React.createElement('div', { className: "flex flex-wrap gap-2" },
typeOrder.map(t => (
React.createElement(Pill, { key: t, label: t, active: !!types[t], onClick: () => toggleType(t) })
))
)
),
React.createElement('div', null,
React.createElement('div', { className: "text-sm font-medium text-slate-700 mb-2" }, "Stats"),
React.createElement('ul', { className: "text-sm text-slate-600 space-y-1" },
React.createElement('li', null, `Total entries: ${allRows.length}`),
React.createElement('li', null, `Filtered: ${filteredRows.length}`)
)
)
)
),


// Content
React.createElement('div', { className: "lg:col-span-3 space-y-6" },
Object.entries(grouped).map(([groupName, parents]) => (
React.createElement(Section, {
key: groupName,
id: groupName.toLowerCase().replace(/\s+/g, '-'),
title: groupName,
count: Object.values(parents).reduce((acc, arr) => acc + (arr.length || 1), 0),
defaultOpen: expandedAll
},
React.createElement('div', { className: "space-y-4" },
Object.entries(parents).map(([parentName, children]) => (
React.createElement('div', { key: parentName, className: "border border-slate-200 rounded-lg p-4" },
React.createElement('div', { className: "flex items-center justify-between" },
React.createElement('div', { className: "font-semibold" }, parentName || "(Item)"),
React.createElement(Tag, null, children.length ? `${children.length} items` : 'Item')
),
children.length > 0 && React.createElement('ul', { className: "mt-3 grid md:grid-cols-2 gap-2" },
children.map((c) => (
React.createElement('li', { key: c.name, className: "flex items-center gap-2" },
React.createElement('i', { className: "fa-regular fa-dot-circle text-slate-400" }),
React.createElement('span', { className: "text-slate-800" }, c.name),
React.createElement('span', { className: "ml-auto" }, React.createElement(Tag, null, c.type))
)
))
)
)
))
)
)
))
)
),


// Footer
React.createElement('footer', { className: "border-t border-slate-200" },
React.createElement('div', { className: "max-w-7xl mx-auto px-4 py-6 text-sm text-slate-500 flex items-center justify-between" },
React.createElement('div', null, "VMware Catalog Explorer"),
React.createElement('div', null, "Generated client-side • No build step")
)
)
)
);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
})();