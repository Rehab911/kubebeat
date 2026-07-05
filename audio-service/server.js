const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

// Be explicit about allowing all requests
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));

// Serve audio files statically from the 'public' folder
app.use('/sounds', express.static(path.join(__dirname, 'public')));

// Health check endpoint (Crucial for Kubernetes tracking!)
app.get('/health', (req, res) => {
    res.status(200).json({ status: "UP", service: "audio-service" });
});

app.listen(PORT, () => {
    console.log(`🥁 Audio service running on port ${PORT}`);
});