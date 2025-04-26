const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
function optimizeContainerRouting(data) {
    return data;
}

app.post('/optimize', (req, res) => {
    const startTime = Date.now();

    const data = req.body;

    if (!data || !data.containers) {
        return res.status(400).json({ error: 'Invalid input data' });
    }

    const optimizedPlan = optimizeContainerRouting(data);

    const latency = Date.now() - startTime;

    return res.json({
        optimized_plan: optimizedPlan,
        latency: latency / 1000
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});