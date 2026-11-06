"use client";
import { useSavedStories } from "@/lib/saved-stories";
import { Icon } from "./icons";
export function SaveButton({
  id,
  name,
  showLabel = false,
}: {
  id: string;
  name: string;
  showLabel?: boolean;
}) {
  const { ids, toggle } = useSavedStories();
  const saved = ids.includes(id);
  return (
    <button
      type="button"
      className={`save-button ${saved ? "is-saved" : ""} ${showLabel ? "with-label" : "icon-button"}`}
      onClick={() => toggle(id)}
      aria-pressed={saved}
      aria-label={`${saved ? "Unsave" : "Save"} ${name}`}
      title={
        saved ? "Remove from your reading list" : "Save to your reading list"
      }
    >
      <Icon name={saved ? "check" : "bookmark"} width="18" height="18" />
      {showLabel && <span>{saved ? "Saved for later" : "Save for later"}</span>}
    </button>
  );
}
