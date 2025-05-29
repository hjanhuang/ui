import { useQuery } from "@tanstack/react-query";

interface WithdrawRequest {
  id: number;
  sender: string;
  amount: string;
  status: string;
  recipient: string;
}

interface UseRequestWithdrawParams {
  sender: string;
}

export const useRequestWithdraw = ({ sender }: UseRequestWithdrawParams) => {
  return useQuery({
    queryKey: ["withdraw-requests", sender],
    queryFn: async (): Promise<WithdrawRequest[]> => {
      const response = await fetch(
        `http://localhost:8000/user-requests/withdraw-requests?sender=${sender}`
      );

      return response.json() || [];
    },
    enabled: !!sender,
    staleTime: 1000 * 60 * 5,
  });
};
