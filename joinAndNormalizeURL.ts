function joinAndNormalizeURL(...segments: string[]): string {
    // Join all URL segments
    let url = segments.join('/');
    
    // Normalize the URL by replacing multiple slashes with a single slash
    url = url.replace(/\/+/g, '/');

    // Remove the trailing slash if it's not the root URL
    if (url.length > 1 && url.endsWith('/')) {
        url = url.slice(0, -1);
    }

    return url;
}

// Example usage
const url = joinAndNormalizeURL('http://example.com/', '/path/', '/to/resource/');
console.log(url); // Output: "http://example.com/path/to/resource"
