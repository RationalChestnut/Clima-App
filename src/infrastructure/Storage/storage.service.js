import { getStorage, ref } from "firebase/storage";
import { app } from "../Authentication/authentication.service";

export const storage = getStorage(app);
