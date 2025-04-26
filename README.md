This is a simple HTTP API for optimizing container routing. It accepts a set of container data and returns an optimized move plan.

Requirements-
Node.js
npm

Installation-
Firstly Clone the repository or download the `index.js` file.
then navigate to the project directory:
   ```bash
   cd container-routing-api
```
Using these parameters to test
{
    "containers": [
        {"id": "container1", "location": "A", "destination": "B"},
        {"id": "container2", "location": "B", "destination": "C"}
    ]
}
