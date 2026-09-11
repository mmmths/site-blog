import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const segments = router.query.slug as string[];
  console.log(router.query.slug);

  return (
    <div>
      <h2>Post: {segments?.join("/")}</h2>
    </div>
  );
}
