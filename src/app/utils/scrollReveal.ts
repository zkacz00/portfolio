export const scrollReveal = (
    node: HTMLElement,
    options: IntersectionObserverInit = { threshold: 0.1 }
  ): { destroy(): void } => {
    const handleIntersect: IntersectionObserverCallback = ([entry], observer) => {
      if (entry.isIntersecting) {
        node.classList.add('revealed');
        observer.unobserve(node);
      }
    };
  
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(node);
  
    return {
      destroy: () => observer.unobserve(node),
    };
  };
  