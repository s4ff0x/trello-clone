import { GeometricDesktop, GeometricShapes } from "@/shared/assets/images";
import { Button, Input, Logo, LogoIcon, Typography } from "@/shared/ui";
import styles from "./login.module.css";
import cn from "clsx";
import { IconMail01 } from "@/shared/assets/icons";
export const Login = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div
          className={styles["mobile-ornament"]}
          style={{ backgroundImage: `url(${GeometricShapes})` }}
        />
        <Logo className={styles.logo} />
        <div className={styles.container}>
          <div className={styles.titles}>
            <LogoIcon className={cn("mb-4", styles["logo-icon"])} />
            <Typography
              tag={"h1"}
              size={"xl"}
              weight={"bold"}
              className={"mb-2"}
            >
              Sign in
            </Typography>
            <Typography tag={"p"}>Start your 30-day free trial.</Typography>
          </div>

          <form action="">
            <Input
              onValue={() => {
                console.log("value");
              }}
              name={"email"}
              value={""}
              label={"Email"}
              type={"email"}
              placeholder={"Enter your email"}
              className={"mb-6"}
            />
            <Button type="submit" className={styles.button}>
              Get started
            </Button>
          </form>
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
        style={{ backgroundImage: `url(${GeometricDesktop})` }}
      ></div>
    </main>
  );
};
