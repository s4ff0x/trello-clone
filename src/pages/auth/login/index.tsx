import { GeometricShapes } from "@/shared/assets/images";
import { Button, Input, LogoIcon, Typography } from "@/shared/ui";
import styles from "./login.module.css";
export const Login = () => {
  return (
    <main>
      <div
        className={styles["mobile-ornament"]}
        style={{ backgroundImage: `url(${GeometricShapes})` }}
      />
      <div className={styles.container}>
        <div className={styles.titles}>
          <LogoIcon className={"mb-4"} />
          <Typography tag={"h1"} size={"xl"} weight={"bold"} className={"mb-2"}>
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
    </main>
  );
};
