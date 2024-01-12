import CardInfo from "@/components/Card";
import { ReactNode } from "react";
import Layout from "../components/Layout";

export default function Home({ children }: { children: ReactNode }) {
  return (
    <Layout>
      {/* Your page content goes here */}
      <h1 className="text-3xl font-bold mb-4">Main Content</h1>
      <p>Your page content goes here.</p>
      <CardInfo>{children}</CardInfo>
    </Layout>
  );
}
