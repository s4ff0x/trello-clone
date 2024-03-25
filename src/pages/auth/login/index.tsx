import { GeometricDesktop, GeometricShapes } from "@/shared/assets/images";
import { Logo, Typography } from "@/shared/ui";
import styles from "./login.module.css";
import { IconMail01 } from "@/shared/assets/icons";
import { $formState } from "./model";
import { useUnit } from "effector-react";
import { Form } from "@/pages/auth/login/form.tsx";
import { Success } from "@/pages/auth/login/success.tsx";
import { Error } from "@/pages/auth/login/error.tsx";

export const Login = () => {
  const [formState] = useUnit([$formState]);
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div
          className={styles["mobile-ornament"]}
          style={{
            backgroundImage: `url(${GeometricShapes})`,
          }}
        />
        <Logo className={styles.logo} />
        <div className={styles.container}>
          {(formState === "form" || formState === "pending") && <Form />}
          {formState === "success" && <Success />}
          {formState === "error" && <Error />}
        </div>
        <div className={styles.footer}>
          <Typography tag={"p"} size={"sm"}>
            © Brello 2023
          </Typography>
          <Typography tag={"p"} size={"sm"} className={styles.mail}>
            <IconMail01 className={styles.mail} /> help@brello.io
          </Typography>
        </div>
      </div>
      <div
        className={styles.shapes}
        style={{
          backgroundImage: `url(${GeometricDesktop})`,
        }}
      ></div>
    </main>
  );
};
