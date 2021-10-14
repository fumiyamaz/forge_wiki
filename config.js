// Autodesk Forge configuration
module.exports = {
    // Set environment variables or hard-code here
    credentials: {
        client_id: "80iaGiqC8JuYNaxpWKUs0oQqPm4edZ0l",
        client_secret: "8IiYKXF7tDGDRbQm",
        callback_url: "http://www.test"
    },
    scopes: {
        // Required scopes for the server-side application
        internal: ['bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write'],
        // Required scope for the client-side viewer
        public: ['viewables:read']
    }
};