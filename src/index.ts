import 'source-map-support/register';
import 'dotenv/config'
import { app } from "./app";

const port = process.env.PORT || 4000;

(async () => {
  try {
    await app.listen(port, '0.0.0.0')
  } catch (error) {
    app.log.error(error);
  }
})()