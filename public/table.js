var tbls = document.querySelectorAll('table');
[...tbls].map((tbl) => {
    var parent = tbl.parentNode;
    var wrapper = document.createElement('div');
    wrapper.style.cssText = 'max-width: 90vw; width: 100%; overflow-x: auto;'
    wrapper.appendChild(tbl);
    parent.appendChild(wrapper)
});
