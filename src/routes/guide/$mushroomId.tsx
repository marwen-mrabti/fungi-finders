import {
  createFileRoute,
  notFound,
  useLoaderData,
  useRouter,
} from "@tanstack/react-router";
import NotFound from "../../components/shared/not-found";

type T_Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const Route = createFileRoute("/guide/$mushroomId")({
  beforeLoad: async ({ params: { mushroomId } }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${mushroomId}`,
    );
    if (!response.ok) {
      throw notFound();
    }
    const post = (await response.json()) as T_Post;
    return { post };
  },
  loader: async ({ params: { mushroomId }, context: { post } }) => {
    return {
      mushroomId,
      post,
    };
  },
  component: RouteComponent,
  pendingComponent: PendingComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
});

function RouteComponent() {
  const { post } = useLoaderData({
    from: "/guide/$mushroomId",
  });
  return (
    <div className="bg-background-accent-main text-high-contrast grid w-full content-center justify-center gap-4 px-8 py-10">
      <h1 className="text-brand text-4xl">Mushroom #{post.id}</h1>
      <p className="text-main text-lg">info: {post.title} </p>
    </div>
  );
}

function PendingComponent() {
  return (
    <div className="bg-background-accent-light text-background-dark grid w-full content-center justify-center px-8 py-10">
      <h1 className="text-brand text-4xl">Loading...</h1>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <div className="bg-background-danger text-background-dark grid w-full content-center justify-center gap-4 px-8 py-10">
      <p className="text-high-contrast text-lg">{error.message}</p>

      <button
        onClick={() => {
          console.log("invalidate");
          router.invalidate();
        }}
        className="bg-background-accent-main block cursor-pointer rounded-lg px-4 py-2"
      >
        invalidate
      </button>
      <button
        onClick={() => {
          console.log("reset");
          reset();
        }}
        className="bg-background-accent-main block cursor-pointer rounded-lg px-4 py-2"
      >
        reset
      </button>
    </div>
  );
}
