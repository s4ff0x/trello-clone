import styles from "@/pages/auth/login/login.module.css";
import { Button, Input, LogoIcon, Typography } from "@/shared/ui";
import cn from "clsx";
import { useUnit } from "effector-react";
import {
  $email,
  $emailInputError,
  $formState,
  emailChanged,
  formSubmitted,
} from "@/pages/auth/login/model.ts";

export const Form = () => {
  const [handleEmail, handleSubmit] = useUnit([emailChanged, formSubmitted]);
  const [email, formState, emailInputError] = useUnit([
    $email,
    $formState,
    $emailInputError,
  ]);
  return (
    <>
      <div className={styles.titles}>
        <LogoIcon className={cn("mb-4", styles["logo-icon"])} />
        <Typography tag={"h1"} size={"xl"} weight={"bold"} className={"mb-2"}>
          Sign in
        </Typography>
        <Typography tag={"p"}>Start your 30-day free trial.</Typography>
      </div>

      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Input
          onValue={(e) => handleEmail(e.value)}
          name={"email"}
          value={email}
          label={"Email"}
          placeholder={"Enter your email"}
          className={"mb-6"}
          error={emailInputError}
          hasError={!!emailInputError}
        />
        <Button
          type="submit"
          className={styles.button}
          disabled={formState === "pending"}
        >
          Get started
        </Button>
      </form>
    </>
  );
};
