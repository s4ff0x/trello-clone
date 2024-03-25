import * as auth from "./rest/auth";
import * as profiles from "./rest/profiles";

export type { User } from "./rest/common";
export type { Profile } from "./rest/profiles";

export const api = {
  auth,
  profiles,
};
