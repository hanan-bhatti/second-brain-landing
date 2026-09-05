"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function MotionPage({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const eventCleanups: Array<() => void> = []
    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (reduceMotion) {
        gsap.set("[data-reveal]", { autoAlpha: 1, y: 0, x: 0, rotate: 0 })
        return
      }

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } })
      intro
        .from("[data-hero-kicker]", { autoAlpha: 0, y: 14, duration: 0.55 })
        .from("[data-hero-title]", { autoAlpha: 0, y: 28, duration: 0.8 }, "-=0.3")
        .from("[data-hero-copy]", { autoAlpha: 0, y: 18, duration: 0.65 }, "-=0.48")
        .from("[data-hero-actions]", { autoAlpha: 0, y: 14, duration: 0.55 }, "-=0.38")
        .from("[data-hero-device]", { autoAlpha: 0, y: 32, rotate: 2, duration: 1 }, "-=0.55")

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 86%", once: true },
          },
        )
      })

      gsap.utils.toArray<HTMLElement>("[data-float]").forEach((element, index) => {
        gsap.to(element, {
          y: index % 2 === 0 ? -10 : 10,
          duration: 3.6 + index * 0.35,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      })

      gsap.utils.toArray<HTMLElement>("[data-tilt]").forEach((element) => {
        const onMove = (event: MouseEvent) => {
          const bounds = element.getBoundingClientRect()
          const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -4
          const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 5
          gsap.to(element, { rotateX, rotateY, transformPerspective: 900, duration: 0.35, ease: "power2.out" })
        }
        const onLeave = () => gsap.to(element, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" })
        element.addEventListener("mousemove", onMove)
        element.addEventListener("mouseleave", onLeave)
        eventCleanups.push(() => {
          element.removeEventListener("mousemove", onMove)
          element.removeEventListener("mouseleave", onLeave)
        })
      })
    }, root)

    return () => {
      eventCleanups.forEach((cleanup) => cleanup())
      context.revert()
    }
  }, [])

  return <div ref={root}>{children}</div>
}
