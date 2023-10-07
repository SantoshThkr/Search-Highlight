function search() {
    let textSearch = document.getElementById("text-search").value;
    let paragraph = document.getElementById("paragraph");
    
    // Escape special characters in the search input
    textSearch = textSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    
    // Create a regular expression pattern
    let pattern = new RegExp(textSearch, "gi");

    // Use replace with a callback function to highlight matches
    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`);
}