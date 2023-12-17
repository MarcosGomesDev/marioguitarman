import React from "react";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="max-w-container flex w-full flex-col my-0 mx-auto">
      {children}
    </div>
  );
}
