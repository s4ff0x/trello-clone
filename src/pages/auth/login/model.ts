import {
  attach,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { debug, not } from "patronum";
import { signInWithEmailFx } from "@/shared/api/rest/auth.ts";

export const $email = createStore<string>("");
export const $emailValid = $email.map((email) => {
  return email.length > 5 && email.includes("@") && email.includes(".");
});
export const $emailInputError = createStore("");

export const $formState = createStore<"form" | "success" | "error" | "pending">(
  "form",
);
export const emailChanged = createEvent<string>();
export const formSubmitted = createEvent();

export const formStateChanged = createEvent<"form" | "success" | "error">();

$formState.on(formStateChanged, (_, state) => {
  return state;
});

$email.on(emailChanged, (_, email) => {
  return email;
});
// export const loginFx = createEffect((params: unknown) => {
//   return new Promise((resolve) => {
//     console.log(params);
//     setTimeout(() => {
//       const randomHalf = Math.random() > 0.5;
//       randomHalf ? formStateChanged("success") : formStateChanged("error");
//       resolve("success");
//     }, 1000);
//   });
// });

export const loginFx = attach({
  effect: signInWithEmailFx,
});

$formState.on(loginFx, (state) => {
  return "pending";
});
$formState.on(loginFx.done, (state) => {
  return "success";
});
$formState.on(loginFx.fail, (state) => {
  return "error";
});
debug($email, loginFx);

sample({
  clock: formSubmitted,
  source: { email: $email },
  filter: $emailValid,
  target: [loginFx, $emailInputError.reinit],
});
//
sample({
  clock: formSubmitted,
  filter: not($emailValid),
  fn: () => "Email is not valid",
  target: $emailInputError,
});
