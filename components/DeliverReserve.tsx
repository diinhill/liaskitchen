import Delivery from "./Delivery";
import Reservation from "./Reservation";

export default function DeliverReserve() {
  return (
    <section
      id="delivery"
      className="bg-secondary md:flex md:flex-row md:justify-center md:items-center md:gap-24"
    >
      <Delivery />
      {/* <Reservation /> */}
    </section>
  );
}
