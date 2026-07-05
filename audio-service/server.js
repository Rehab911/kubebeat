const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable Cross-Origin Resource Sharing (CORS) so your local browser can talk to Azure
app.use(cors());

// Custom Tracer Middleware to log requests in real time
app.use((req, res, next) => {
    console.log(`[Incoming Request] ${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});

// Serve audio assets out of the clean /app/public directory
app.use('/sounds', express.static(path.join(__dirname, 'public')));

// Health check endpoint for Kubernetes liveness/readiness probes
app.get('/healthz', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`KubeBeat Backend streaming service running on port ${PORT}`);
});