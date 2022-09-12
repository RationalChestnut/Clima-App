import "firebase/storage";
import { app } from "../Authentication/authentication.service";

export const storage = app.storage();
