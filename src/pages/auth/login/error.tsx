import styles from "@/pages/auth/login/login.module.css";
import { Exclamation, IconArrowLeft } from "@/shared/assets/icons";
import cn from "clsx";
import { Typography } from "@/shared/ui";

export const Error = () => {
  return (
    <>
      <div className={styles.titles}>
        <Exclamation className={cn("mb-4", styles.envelope)} />
        <Typography tag={"h1"} size={"xl"} weight={"bold"} className={"mb-2"}>
          Some error happened
        </Typography>
        <Typography tag={"p"}>With description</Typography>
        <a className={styles.backlink}>
          <IconArrowLeft />
          <Typography tag={"span"} size={"sm"} weight={"bold"}>
            Try again
          </Typography>
        </a>
      </div>
    </>
  );
};
