VMware Catalog Explorer
=======================


Quick Start
-----------
1) Place the three files in a folder named `vmware-catalog/` on any web server or open `index.html` directly in a browser.
- index.html
- app.js
- (this) README.txt [optional]


2) Open index.html. No build tools or installs are required.


Features
--------
- Search across all entries
- Filter by Type (Product, Component, Event, Program, Platform)
- Expand/Collapse all sections
- Copy list to clipboard (tab-delimited)
- Export CSV (UTF-8 with BOM for Excel compatibility)
- Deep-linking via anchors (#vmware-products, #vmware-events, etc.) and query (?q=term)


Notes
-----
- All content is static and defined in app.js under `DATA`.
- To add URLs in the future, add a `url` field per item and render as <a> in the map.