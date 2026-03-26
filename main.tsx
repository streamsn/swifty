@import "tailwindcss";

html,
body,
#root {
  height: 100%;
}

body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

@keyframes float {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(0, -18px, 0) scale(1.03);
  }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translate3d(0, 16px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.motion-float {
  animation: float 12s ease-in-out infinite;
}

.motion-float-reverse {
  animation: float 14s ease-in-out infinite reverse;
}

.motion-enter {
  animation: fade-up 700ms ease-out both;
}

.motion-enter-delay {
  animation: fade-up 700ms ease-out 120ms both;
}

.motion-enter-slow {
  animation: fade-up 700ms ease-out 240ms both;
}
