import { redirect } from "next/navigation";

export default function Page() {
  redirect("/browse");
  return <main></main>;
}
