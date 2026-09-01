import { useEffect, useState } from "react";

export type LiveProjectStats = {
  githubStars: number;
  githubForks: number;
  playDownloads: string;
  playRatingsCount: string;
  playVersion: string;
};

const fallbackStats: LiveProjectStats = {
  githubStars: 56,
  githubForks: 17,
  playDownloads: "10K+",
  playRatingsCount: "25",
  playVersion: "1.0.54",
};

const githubRepositoryUrl =
  "https://api.github.com/repos/ThilakReddyy/JNTUHRESULTS-WEB";
const playPackageId = "com.dhethi.jntuhconnect";

type GitHubRepositoryResponse = {
  stargazers_count?: unknown;
  forks_count?: unknown;
};

type BadgeResponse = {
  value?: unknown;
  message?: unknown;
};

const playBadgeUrl = (attribute: string) => {
  const sourceUrl = `https://play.rajkumaar.co.in/${attribute}?id=${playPackageId}&gl=IN`;

  return `https://img.shields.io/endpoint.json?url=${encodeURIComponent(sourceUrl)}`;
};

const fetchJson = async <T,>(url: string, signal: AbortSignal): Promise<T> => {
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
};

const validCount = (value: unknown): value is number =>
  typeof value === "number" && Number.isInteger(value) && value >= 0;

const badgeValue = (response: BadgeResponse | undefined) => {
  const value = response?.value ?? response?.message;

  return typeof value === "string" && value.trim() && value !== "badge not found"
    ? value.trim()
    : undefined;
};

const compactDownloads = (value: string | undefined) => {
  const match = value?.match(/^([\d,]+)\+$/);
  if (!match) return value;

  const count = Number(match[1].replace(/,/g, ""));
  if (!Number.isFinite(count)) return value;
  if (count >= 1_000_000 && count % 1_000_000 === 0) {
    return `${count / 1_000_000}M+`;
  }
  if (count >= 1_000 && count % 1_000 === 0) {
    return `${count / 1_000}K+`;
  }

  return value;
};

export const useLiveProjectStats = () => {
  const [stats, setStats] = useState(fallbackStats);

  useEffect(() => {
    const controller = new AbortController();

    const loadStats = async () => {
      const [github, downloads, ratingsCount, version] = await Promise.allSettled(
        [
          fetchJson<GitHubRepositoryResponse>(githubRepositoryUrl, controller.signal),
          fetchJson<BadgeResponse>(playBadgeUrl("downloads"), controller.signal),
          fetchJson<BadgeResponse>(playBadgeUrl("noOfUsersRated"), controller.signal),
          fetchJson<BadgeResponse>(playBadgeUrl("version"), controller.signal),
        ],
      );

      if (controller.signal.aborted) return;

      const githubValue = github.status === "fulfilled" ? github.value : undefined;
      const downloadsValue =
        downloads.status === "fulfilled" ? badgeValue(downloads.value) : undefined;
      const ratingsCountValue =
        ratingsCount.status === "fulfilled"
          ? badgeValue(ratingsCount.value)
          : undefined;
      const versionValue =
        version.status === "fulfilled" ? badgeValue(version.value) : undefined;

      const freshStats: Partial<LiveProjectStats> = {};

      if (validCount(githubValue?.stargazers_count)) {
        freshStats.githubStars = githubValue.stargazers_count;
      }
      if (validCount(githubValue?.forks_count)) {
        freshStats.githubForks = githubValue.forks_count;
      }

      const compactedDownloads = compactDownloads(downloadsValue);
      if (compactedDownloads) freshStats.playDownloads = compactedDownloads;
      if (ratingsCountValue) freshStats.playRatingsCount = ratingsCountValue;
      if (versionValue) freshStats.playVersion = versionValue;

      if (Object.keys(freshStats).length > 0) {
        setStats((current) => ({ ...current, ...freshStats }));
      }
    };

    void loadStats();

    return () => controller.abort();
  }, []);

  return stats;
};
