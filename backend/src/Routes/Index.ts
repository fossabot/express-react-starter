import * as express from "express";

const router = express.Router();

router.get("/world", (req: express.Request, res: express.Response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({Hello: "world"});
});

export default router;
