import 'source-map-support/register';
import 'dotenv/config'
import { app } from "./app";
import { addEventListener } from "./Events"

const port = process.env.PORT || 4000;

(async () => {
  try {
    await app.listen(port, '0.0.0.0')
    await addEventListener();
  } catch (error) {
    app.log.error(error);
  }
})()