import Delivery from "./Delivery";
import ReservationWidget from "./ReservationWidget";

export default function DeliverReserve() {
  return (
    <section
      id="delivery"
      className="bg-secondary lg:flex lg:flex-row lg:justify-around lg:items-center"
    >
      <Delivery />
      <ReservationWidget />
    </section>
  );
}
