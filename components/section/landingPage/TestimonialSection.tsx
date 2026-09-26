"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Technology Director",
    company: "Enterprise Technology",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
    quote:
      "HYI brought clarity, technical depth and strong execution to our digital initiative. The team understood our requirements quickly and transformed complex challenges into practical solutions.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Head of Innovation",
    company: "Digital Systems",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
    quote:
      "The team combined strong technical expertise with a genuine understanding of our business requirements. The entire collaboration was transparent, responsive and professional.",
  },
  {
    id: 3,
    name: "Rahul Sharma",
    role: "VP — Technology",
    company: "Enterprise Solutions",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    quote:
      "From planning to delivery, the team remained focused on quality and measurable outcomes. Their approach made the entire technology journey simple and effective.",
  },
  {
    id: 4,
    name: "Daniel Carter",
    role: "Chief Digital Officer",
    company: "Global Digital",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
    quote:
      "HYI worked like an extension of our internal team. Communication was clear, execution was consistent and every stage of the engagement was handled professionally.",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const next = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const getTestimonial = (offset: number) => {
    return testimonials[
      (activeIndex + offset + testimonials.length) %
        testimonials.length
    ];
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#030304]  text-white ">
      {/* Background glow */}
  

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-10 lg:px-20">
        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-[850px] text-center"
       >

          <h2 className="mt-6 font-bold hyi-h1 hyi-white">
            Client satisfaction is our achievement.
           
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] hyi-p">
            We build meaningful partnerships by combining technology,
            collaboration and a commitment to delivering real value.
          </p>
        </motion.div>

        {/* =================================================
            TESTIMONIAL CARDS
        ================================================= */}

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="mt-14 grid gap-4 lg:grid-cols-3"
        >
          {[-1, 0, 1].map((offset) => {
            const testimonial = getTestimonial(offset);
            const active = offset === 0;

            return (
              <motion.div
                key={`${testimonial.id}-${offset}`}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: active ? 1 : 0.55,
                  y: 0,
                  scale: active ? 1 : 0.97,
                }}
                transition={{
                  duration: 0.4,
                }}
                className={`
                  relative overflow-hidden
                  rounded-[20px] border
                  p-6 transition-all duration-500
                  sm:p-7
                  ${
                    active
                      ? "border-[#8564ff]/25 bg-[#0a090d]"
                      : "border-white/[0.06] bg-white/[0.015]"
                  }
                `}
              >
                {/* Active glow */}

                {active && (
                  <div className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#7654ff]/10 blur-[80px]" />
                )}

                {/* Quote */}

                <div className="relative z-10 flex items-center justify-between">
                  <div
                    className={`
                      flex h-9 w-9
                      items-center justify-center
                      rounded-full border
                      ${
                        active
                          ? "border-[#8c6cff]/20 bg-[#7957ff]/10"
                          : "border-white/[0.06] bg-white/[0.025]"
                      }
                    `}
                  >
                    <Quote
                      size={14}
                      className={
                        active
                          ? "text-[#a98eff]"
                          : "text-white/20"
                      }
                    />
                  </div>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={11}
                        fill="currentColor"
                        className={
                          active
                            ? "text-[#a68aff]"
                            : "text-white/15"
                        }
                      />
                    ))}
                  </div>
                </div>

                {/* Text */}

                <p
                  className={`
                    relative z-10
                    mt-7 min-h-[135px]
                    text-[14px]
                    leading-[1.8]
                    sm:text-[15px]
                    ${
                      active
                        ? "text-white/65"
                        : "text-white/30"
                    }
                  `}
                >
                  “{testimonial.quote}”
                </p>

                {/* Person */}

                <div className="relative z-10 mt-7 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  {/* ACTUAL AVATAR */}

                  <div
                    className={`
                      relative h-12 w-12
                      shrink-0 overflow-hidden
                      rounded-full border
                      ${
                        active
                          ? "border-[#9879ff]/40"
                          : "border-white/10"
                      }
                    `}
                  >
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />

                    {active && (
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                    )}
                  </div>

                  <div className="min-w-0">
                    <p
                      className={`
                        text-[12px] font-medium
                        ${
                          active
                            ? "text-white/80"
                            : "text-white/40"
                        }
                      `}
                    >
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-[9px] text-white/25">
                      {testimonial.role}
                    </p>

                    <p className="mt-0.5 text-[8px] text-[#9f83ff]/50">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =================================================
            CONTROLS
        ================================================= */}

        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white/40 transition-all duration-300 hover:border-[#8d6aff]/30 hover:bg-[#7654ff]/10 hover:text-white"
          >
            <ArrowLeft size={14} />
          </button>

          {/* Dots */}

          <div className="flex items-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
                className={`
                  h-1.5 rounded-full
                  transition-all duration-300
                  ${
                    activeIndex === index
                      ? "w-7 bg-[#9576ff]"
                      : "w-1.5 bg-white/15 hover:bg-white/30"
                  }
                `}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white/40 transition-all duration-300 hover:border-[#8d6aff]/30 hover:bg-[#7654ff]/10 hover:text-white"
          >
            <ArrowRight size={14} />
          </button>
        </div>

   
      </div>
    </section>
  );
}