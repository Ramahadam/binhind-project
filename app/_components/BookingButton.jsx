import Link from "next/link";

function BookingButton() {
  return (
    <Link
      href="/booking"
      className="px-6 py-2 bg-white text-primary rounded-md shadow hover:opacity-80 transition w-[12rem] "
    >
      Book Appointment
    </Link>
  );
}

export default BookingButton;
