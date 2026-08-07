import { useEffect, useState } from "react";

const roleTransitionAt = new Date("2026-09-12T00:00:00+05:30").getTime();
const maximumTimeout = 2_147_000_000;

export const getCurrentRoleLabel = (now = new Date()) =>
  now.getTime() >= roleTransitionAt
    ? "Freelance Software Engineer"
    : "Software Engineer at Maersk";

export const useCurrentRole = () => {
  const [role, setRole] = useState(() => getCurrentRoleLabel());

  useEffect(() => {
    let transitionTimer: ReturnType<typeof setTimeout>;

    const scheduleTransition = () => {
      const timeRemaining = roleTransitionAt - Date.now();

      if (timeRemaining <= 0) {
        setRole(getCurrentRoleLabel());
        return;
      }

      transitionTimer = setTimeout(
        scheduleTransition,
        Math.min(timeRemaining, maximumTimeout),
      );
    };

    scheduleTransition();

    return () => clearTimeout(transitionTimer);
  }, []);

  return role;
};
