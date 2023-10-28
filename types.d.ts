declare module "use-sound" {
  export default function useSound(
    src: string | string[],
    options?: {
      volume?: number;
      playbackRate?: number;
      soundEnabled?: boolean;
      sprite?: Record<string, [number, number]>;
      interrupt?: boolean;
      onload?: () => void;
      html5?: boolean;
      format?: string | string[];
      autoplay?: boolean;
      loop?: boolean;
      preload?: boolean | "auto" | "metadata" | "none";
      muted?: boolean;
      onend?: () => void;
      onpause?: () => void;
      onplay?: () => void;
      onstop?: () => void;
    }
  ): [() => void, { duration: number; paused: boolean; pause: () => void }];
}
