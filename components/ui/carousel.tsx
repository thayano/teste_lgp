'use client';

import * as React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type CarouselApi = {
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: () => boolean;
  canScrollNext: () => boolean;
};

type CarouselProps = {
  opts?: {
    align?: 'start' | 'center' | 'end';
    loop?: boolean;
  };
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
  className?: string;
  children?: React.ReactNode;
};

type CarouselContextProps = {
  carouselRef: React.RefObject<HTMLDivElement | null>;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  orientation: 'horizontal' | 'vertical';
};

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    { orientation = 'horizontal', setApi, className, children, ...props },
    ref,
  ) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(true);

    const checkScrollability = React.useCallback(() => {
      const container = carouselRef.current;
      if (!container) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollPrev(scrollLeft > 0);
      setCanScrollNext(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }, []);

    React.useEffect(() => {
      const container = carouselRef.current;
      if (container) {
        container.addEventListener('scroll', checkScrollability);
        // Initial check
        checkScrollability();
        // Check on resize
        window.addEventListener('resize', checkScrollability);
      }

      return () => {
        if (container) {
          container.removeEventListener('scroll', checkScrollability);
        }
        window.removeEventListener('resize', checkScrollability);
      };
    }, [checkScrollability]);

    const scrollPrev = React.useCallback(() => {
      const container = carouselRef.current;
      if (!container) return;

      const itemWidth =
        container.firstElementChild?.firstElementChild?.clientWidth ||
        container.clientWidth;
      container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }, []);

    const scrollNext = React.useCallback(() => {
      const container = carouselRef.current;
      if (!container) return;

      const itemWidth =
        container.firstElementChild?.firstElementChild?.clientWidth ||
        container.clientWidth;
      container.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }, []);

    // Expose API
    React.useEffect(() => {
      if (setApi) {
        setApi({
          scrollPrev,
          scrollNext,
          canScrollPrev: () => canScrollPrev,
          canScrollNext: () => canScrollNext,
        });
      }
    }, [setApi, scrollPrev, scrollNext, canScrollPrev, canScrollNext]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          orientation: orientation || 'horizontal',
        }}
      >
        <div
          ref={ref}
          className={cn('relative', className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className={cn(
        'flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar',
        orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
        className,
      )}
      {...props}
    >
      <div className="flex w-full" ref={ref}>
        {props.children}
      </div>
    </div>
  );
});
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full snap-start',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute h-8 w-8 rounded-full z-10',
        orientation === 'horizontal'
          ? '-left-12 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute h-8 w-8 rounded-full z-10',
        orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = 'CarouselNext';

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
