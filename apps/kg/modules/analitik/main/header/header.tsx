import { FC, ReactElement } from "react";
import { Card } from "./card/CardHeaderAnalitik";

export const AnalyticHeader: FC = (): ReactElement => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card hasImage={true} src={"/icons/analitik/header-clock.svg"} title="Rata-rata Waktu yang digunakan" imgwidth={52} imgheight={52} desc="12 jam" moreDesc="/Minggu"/>
            <Card hasImage={true} src={"/icons/analitik/header-point.svg"} title="Poin Kamu" imgwidth={52} imgheight={52} desc="7000"/>
        </section>
    )
}