MRU-LRU Cache Visualizer
This is a simple web-based visualizer to demonstrate the functionality of MRU (Most Recently Used) and LRU (Least Recently Used) cache algorithms. It helps users understand how these caching algorithms work in practice with an interactive interface. The application allows you to visualize how elements are added and removed from the cache based on their usage.
Features
Set Cache Size: You can define the cache size, which sets the maximum number of elements the cache can hold.
Put: Add an item to the cache and move it to the Most Recently Used (MRU) position if it already exists.
Get: Check if an item is in the cache and, if found, move it to the MRU position.
Cache Visualization: The cache is displayed visually, where the MRU item is highlighted in green and the LRU (Least Recently Used) item is highlighted in red.
Automatic Eviction: When the cache reaches its size limit, adding a new item will automatically remove the LRU item.
How It Works
Set Cache Size:
You can set the cache size to any number (positive integer). Once the cache size is set, the program will clear the current cache and reset the visualizer.
Put:
The "Put" button allows you to add an element to the cache. If the element already exists in the cache, it will be moved to the MRU position.
If the cache is full, the LRU item will be evicted to make room for the new item.
Get:
The "Get" button checks if the element exists in the cache. If found, it will be moved to the MRU position.
If the element is not in the cache, a cache miss message will appear.
Visual Representation:
The cache will be displayed as a series of boxes, with the MRU item shown in green and the LRU item shown in red.
Technologies Used
HTML: Markup language used for the structure of the page.
CSS: Styles the layout and visual appearance.
JavaScript: Handles the functionality for cache operations (putting, getting, and updating the display).
Features in Development
Persist cache state: Save the cache state even after the page reloads.
Advanced features: Add the option to modify the cache algorithm or add new visual effects.
