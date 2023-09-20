import { QueryClient, QueryClientProvider } from "@smu-chile/pkg-unimarc-hooks";

export const queryClient = new QueryClient();

export const ClientPanel = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
