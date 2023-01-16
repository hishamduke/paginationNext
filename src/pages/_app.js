import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client

export const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
