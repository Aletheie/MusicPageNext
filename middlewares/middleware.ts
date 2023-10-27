import { checkSongLimit } from "./check-song-limit";
import { stackMiddlewares } from "@/middlewares/stack-handler";

export const config = {
  matcher: "/api/songs",
};

const middlewares = [checkSongLimit];
export default stackMiddlewares(middlewares);
