import {
  redirect,
  type LoaderFunctionArgs,
  type ShouldRevalidateFunctionArgs,
} from "react-router";

export function shouldRevalidate({
  defaultShouldRevalidate,
}: ShouldRevalidateFunctionArgs) {
  return defaultShouldRevalidate;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const isAdmin = false;
  if (!isAdmin) {
    const returnTo = new URL(request.url).pathname;
    throw redirect(`/sign-in?redirect=${encodeURIComponent(returnTo)}`);
  }
  return null;
}
