import app from "./app";
import { PORT } from "./config";
import './utils/database'

app.listen(PORT);
console.log("Server on port", PORT);