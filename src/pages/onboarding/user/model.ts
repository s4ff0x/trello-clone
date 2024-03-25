import { attach, createEvent, createStore, sample } from "effector";
import { api, Profile, User } from "@/shared/api";

export type OnboardingUserError = "UnknownError" | "FirstNameInvalid";

const getMeFx = attach({ effect: api.auth.getMeFx });
const profileExistsFx = attach({ effect: api.profiles.profileExistsFx });
const profileCreateFx = attach({ effect: api.profiles.profileCreateFx });

export const $firstName = createStore("");
export const $lastName = createStore("");

export const $error = createStore<OnboardingUserError | null>(null);
export const $viewer = createStore<User | null>(null);

export const pageOpened = createEvent();

const emptyUserReceived = createEvent(); // TODO: редирект на логин
const onboardingFinished = createEvent(); // TODO: onboarding skip

export const firstNameChanged = createEvent<string>();
export const lastNameChanged = createEvent<string>();

export const formSubmitted = createEvent();
const formValidated = createEvent<boolean>();

sample({
  clock: pageOpened,
  target: getMeFx,
});

sample({
  clock: getMeFx.doneData,
  filter: Boolean,
  fn: (user) => ({ userId: user.id }),
  target: profileExistsFx,
});

sample({
  clock: getMeFx.doneData,
  target: $viewer,
});

sample({
  clock: getMeFx.doneData,
  filter: (user) => user === null,
  target: emptyUserReceived,
});

sample({
  clock: getMeFx.fail,
  fn: (): OnboardingUserError => "UnknownError",
  target: $error,
});

sample({
  clock: profileExistsFx.doneData,
  filter: Boolean,
  target: onboardingFinished,
});

sample({
  clock: profileExistsFx.fail,
  fn: (): OnboardingUserError => "UnknownError",
  target: $error,
});

$firstName.on(firstNameChanged, (_, firstName) => firstName);
$lastName.on(lastNameChanged, (_, lastName) => lastName);

sample({
  clock: formSubmitted,
  source: $firstName,
  fn: (firstName) => {
    return firstName.trim().length > 1;
  },
  target: formValidated,
});
sample({
  clock: formValidated,
  source: {
    firstName: $firstName,
    lastName: $lastName,
    userId: $viewer.map((viewer) => viewer?.id ?? null),
  },
  filter: ({ userId }, validated) => Boolean(userId && validated),
  fn: ({ firstName, lastName, userId }) => ({
    profile: {
      firstName,
      lastName,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      userId: userId!,
    },
  }),
  target: profileCreateFx,
});

sample({
  clock: formValidated,
  filter: (validated) => !validated,
  fn: (): OnboardingUserError => "FirstNameInvalid",
  target: $error,
});

sample({
  clock: profileCreateFx.doneData,
  target: onboardingFinished,
});

sample({
  clock: profileCreateFx.fail,
  fn: (): OnboardingUserError => "UnknownError",
  target: $error,
});

/**
 * 0. + Проверить что профиль уже существует, также хранить локально информацию о скипе (localStorage)
 * 1. + Юзер вводит данные в форму
 * 2. + Попытка отправки формы
 * 3. + Валидация
 * 4. Если данные верны - отправить форму на сервер
 * 5. Если не верны - вывести ошибку валидации
 *
 *
 * Если 4
 * 4.1 - Если нет ошибки на сервере - редирект | Если ошибка есть - показать ошибку
 * */
