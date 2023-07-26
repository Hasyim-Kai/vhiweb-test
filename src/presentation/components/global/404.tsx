import s from "./global-features.module.scss";
import DefaultLayout from "../../layout/default";

export default function NotFound404() {
    return <DefaultLayout isBack>
        <section className={s.container_404}>
            <h1>404</h1>
            <p>Page Not Found</p>
        </section>
    </DefaultLayout>
}