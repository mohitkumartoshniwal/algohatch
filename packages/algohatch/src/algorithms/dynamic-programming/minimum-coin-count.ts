import { exercisePending } from "../../internal/exercise.js";
import type { MinimumCoinCount } from "./dynamic-programming.contract.js";

export const minimumCoinCount: MinimumCoinCount = (coins, amount) => {
  // Validate positive safe denominations and a nonnegative safe amount. Set dp[0]=0 and all other
  // states unreachable; for each subtotal, try one final coin from a reachable prior subtotal.
  void coins;
  void amount;
  return exercisePending("minimumCoinCount");
};
