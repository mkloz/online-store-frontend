import { FC } from "react";
import Load from "../loadings/Loading";
import CantLoadError from "../errors/CantLoadError";

interface FallbackProps {
  children: React.ReactNode;
  error?: FC;
  loading?: FC;
  isError?: boolean;
  isLoading?: boolean;
}

export default function Fallback({
  children,
  error: Error = CantLoadError,
  loading: Loading = Load,
  isError,
  isLoading,
}: FallbackProps) {
  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return <>{children}</>;
}
