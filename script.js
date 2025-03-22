let cacheSize = 5; 
let cache = new Map(); 

function setCacheSize() {
    const size = parseInt(document.getElementById("cache-size-input").value);
    if (size > 0) {
        cacheSize = size;
        cache.clear();
        updateDisplay();
        alert("Cache size set to " + cacheSize);
    } else {
        alert("Please enter a valid cache size!");
    }
}

function putElement() {
    const input = document.getElementById("cache-input").value;
    if (!input) return;

    if (cache.has(input)) {
        cache.delete(input); 
    } else if (cache.size >= cacheSize) {
        
        const lruKey = Array.from(cache.keys())[0];
        cache.delete(lruKey);
    }

    cache.set(input, true); 
    updateDisplay();
}

function getElement() {
    const input = document.getElementById("cache-input").value;
    if (cache.has(input)) {
        alert("Cache Hit! Element found: " + input);
        cache.delete(input);
        cache.set(input, true);
        updateDisplay();
    } else {
        alert("Cache Miss! Element not in cache.");
    }
}

function updateDisplay() {
    const container = document.getElementById("cache-display");
    container.innerHTML = "";
    let keys = Array.from(cache.keys());

    keys.reverse().forEach((item, index) => { 
        const div = document.createElement("div");
        div.classList.add("cache-box");
        if (index === 0) div.classList.add("mru"); 
        if (index === keys.length - 1) div.classList.add("lru"); 
        div.textContent = item;
        container.appendChild(div);
    });
}