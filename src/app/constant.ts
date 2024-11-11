import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";

export const contractAddress = "0x2bc5188d9fC0a5c9C0C2400Bd262A77A98fb9264";

export const CONTRACT = getContract({
  client: client,
  chain: sepolia,
  address: contractAddress,
});
