This is a simple HTTP API for optimizing container routing. It accepts a set of container data and returns an optimized move plan.

Requirements-
Node.js
npm

Installation-
Firstly Clone the repository or download the `index.js` file.
then navigate to the project directory:
   ```bash
   cd container-routing-api
Now we are ready to go. 
I have used postman to check it and i used these parameters
{
    "containers": [
        {"id": "container1", "location": "A", "destination": "B"},
        {"id": "container2", "location": "B", "destination": "C"}
    ]
}