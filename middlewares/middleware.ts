import { checkSongLimit } from "./check-song-limit";
import { stackMiddlewares } from "@/middlewares/stack-handler";

const middlewares = [checkSongLimit];
export default stackMiddlewares(middlewares);
