import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, Clock, Brain, Activity, Coffee } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen font-sans leading-relaxed tracking-tight text-slate-50 bg-transparent">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 rainbow-surface opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_65%)]" />
        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 rainbow-text">
              Break the Scroll
            </h1>
            <p className="text-xl text-slate-100/90 max-w-2xl mx-auto mb-8">
              Learn how doomscrolling affects your mental health and discover simple ways to take back control.
            </p>
            <div className="animate-bounce mt-8">
              <ArrowDown className="h-8 w-8 text-pink-300 mx-auto drop-shadow-[0_0_12px_rgba(244,114,182,0.8)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-950/55">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 rainbow-text">
              Doomscrolling by the Numbers
            </h2>
            <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-300 to-rose-300 shadow-[0_0_16px_rgba(244,114,182,0.55)]" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rainbow-border overflow-hidden border-0 bg-slate-950/70 shadow-[0_0_30px_rgba(244,114,182,0.16)] backdrop-blur-md">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-pink-400 via-fuchsia-400 to-rose-300 p-4 rounded-full mr-5 shadow-[0_0_20px_rgba(244,114,182,0.45)]">
                    <Clock className="h-8 w-8 text-slate-950" />
                  </div>
                  <div>
                    <p className="text-xl font-medium mb-3 text-slate-100">
                      The average American now spends{" "}
                      <span className="text-2xl font-bold rainbow-text">7 hours and 3 minutes</span> on screens
                      daily.
                    </p>
                    <p className="text-sm text-slate-300">
                      Source:{" "}
                      <a
                        href="https://explodingtopics.com/blog/screen-time-stats"
                        className="underline text-pink-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Exploding Topics (2025)
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rainbow-border overflow-hidden border-0 bg-slate-950/70 shadow-[0_0_30px_rgba(244,114,182,0.16)] backdrop-blur-md">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-fuchsia-400 via-pink-400 to-rose-400 p-4 rounded-full mr-5 shadow-[0_0_20px_rgba(244,114,182,0.45)]">
                    <Brain className="h-8 w-8 text-slate-950" />
                  </div>
                  <div>
                    <p className="text-xl font-medium mb-3 text-slate-100">
                      Doomscrolling is directly linked to increased{" "}
                      <span className="text-2xl font-bold rainbow-text">anxiety, depression, and poor sleep</span>,
                      particularly among young adults.
                    </p>
                    <p className="text-sm text-slate-300">
                      Source:{" "}
                      <a
                        href="https://www.health.harvard.edu/mind-and-mood/doomscrolling-dangers"
                        className="underline text-fuchsia-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Harvard Health Publishing (2024)
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="rainbow-border border-0 bg-slate-950/70 backdrop-blur-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold rainbow-text mb-2">52%</div>
                <p className="text-slate-200">of people check their phone within 10 minutes of waking up</p>
              </CardContent>
            </Card>
            <Card className="rainbow-border border-0 bg-slate-950/70 backdrop-blur-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold rainbow-text mb-2">86x</div>
                <p className="text-slate-200">average number of times people check their phone daily</p>
              </CardContent>
            </Card>
            <Card className="rainbow-border border-0 bg-slate-950/70 backdrop-blur-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold rainbow-text mb-2">23%</div>
                <p className="text-slate-200">increase in anxiety symptoms linked to excessive social media use</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-950/70">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 rainbow-text">
              Why Is It So Addictive?
            </h2>
            <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-300 to-rose-300 shadow-[0_0_16px_rgba(244,114,182,0.55)]" />
          </div>

          <div className="rainbow-border bg-slate-950/70 rounded-2xl shadow-[0_0_40px_rgba(244,114,182,0.15)] overflow-hidden backdrop-blur-md">
            <div className="p-8 md:p-10">
              <p className="text-xl text-center text-slate-200 mb-10">
                Social platforms are designed to keep you hooked. Infinite scrolling, algorithmic feeds, and emotionally
                charged content create a cycle your brain craves.
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-xl p-6 text-center border border-white/10">
                  <div className="bg-gradient-to-br from-pink-400 to-rose-400 text-slate-950 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-[0_0_18px_rgba(244,114,182,0.4)]">
                    🔔
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-pink-200">Trigger</h3>
                  <p className="text-slate-200">Boredom or a notification prompts you to check your phone</p>
                </div>

                <div className="bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-xl p-6 text-center border border-white/10">
                  <div className="bg-gradient-to-br from-rose-400 to-pink-300 text-slate-950 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-[0_0_18px_rgba(236,72,153,0.4)]">
                    📱
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-rose-200">Action</h3>
                  <p className="text-slate-200">You open TikTok, Instagram, or another social app</p>
                </div>

                <div className="bg-gradient-to-br from-fuchsia-500/20 to-pink-500/20 rounded-xl p-6 text-center border border-white/10">
                  <div className="bg-gradient-to-br from-fuchsia-300 to-pink-300 text-slate-950 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-[0_0_18px_rgba(244,114,182,0.4)]">
                    🎉
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-fuchsia-200">Reward</h3>
                  <p className="text-slate-200">You see something exciting, emotional, or shocking</p>
                </div>

                <div className="bg-gradient-to-br from-rose-500/20 to-fuchsia-500/20 rounded-xl p-6 text-center border border-white/10">
                  <div className="bg-gradient-to-br from-rose-300 to-fuchsia-300 text-slate-950 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-[0_0_18px_rgba(244,114,182,0.4)]">
                    🔁
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-rose-200">Repeat</h3>
                  <p className="text-slate-200">Your brain wants more, and the cycle continues</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-lg font-medium rainbow-text">
                  This creates a dopamine feedback loop that's hard to break
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-950/55">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 rainbow-text">
              How to Break the Cycle
            </h2>
            <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-300 to-rose-300 shadow-[0_0_16px_rgba(244,114,182,0.5)]" />
            <p className="text-xl text-slate-200 mt-6 max-w-2xl mx-auto">
              Practical strategies to regain control of your digital life and improve your mental wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rainbow-border overflow-hidden border-0 bg-slate-950/70 shadow-[0_0_30px_rgba(244,114,182,0.16)] hover:shadow-[0_0_36px_rgba(244,114,182,0.25)] transition-all duration-300 hover:-translate-y-1 backdrop-blur-md">
              <div className="h-1 bg-gradient-to-r from-pink-400 via-fuchsia-300 to-rose-300 opacity-80" />
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-pink-400 to-rose-400 text-slate-950 w-12 h-12 rounded-full flex items-center justify-center mr-5 font-bold text-xl shrink-0 shadow-[0_0_14px_rgba(244,114,182,0.35)]">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 rainbow-text">Set Boundaries</h3>
                    <p className="text-slate-200 mb-4">
                      Use digital wellness features to limit screen time. Set daily limits, enable downtime, and take
                      regular breaks from your phone.
                    </p>
                    <ul className="space-y-2 text-slate-200">
                      <li className="flex items-center">
                        <Activity className="h-4 w-4 text-pink-300 mr-2" />
                        <span>Set app time limits in your phone settings</span>
                      </li>
                      <li className="flex items-center">
                        <Activity className="h-4 w-4 text-fuchsia-300 mr-2" />
                        <span>Use "Do Not Disturb" mode during focused work</span>
                      </li>
                      <li className="flex items-center">
                        <Activity className="h-4 w-4 text-rose-300 mr-2" />
                        <span>Keep your phone out of reach during meals</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rainbow-border overflow-hidden border-0 bg-slate-950/70 shadow-[0_0_30px_rgba(244,114,182,0.16)] hover:shadow-[0_0_36px_rgba(244,114,182,0.25)] transition-all duration-300 hover:-translate-y-1 backdrop-blur-md">
              <div className="h-1 bg-gradient-to-r from-fuchsia-400 via-pink-300 to-rose-400 opacity-80" />
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-fuchsia-300 to-pink-400 text-slate-950 w-12 h-12 rounded-full flex items-center justify-center mr-5 font-bold text-xl shrink-0 shadow-[0_0_14px_rgba(244,114,182,0.35)]">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 rainbow-text">Replace the Habit</h3>
                    <p className="text-slate-200 mb-4">
                      Replace scrolling with healthier alternatives like journaling, walking, meditating, or calling a
                      friend.
                    </p>
                    <ul className="space-y-2 text-slate-200">
                      <li className="flex items-center">
                        <Coffee className="h-4 w-4 text-pink-300 mr-2" />
                        <span>Read a physical book instead of social media</span>
                      </li>
                      <li className="flex items-center">
                        <Coffee className="h-4 w-4 text-fuchsia-300 mr-2" />
                        <span>Take a 10-minute walk when you feel the urge to scroll</span>
                      </li>
                      <li className="flex items-center">
                        <Coffee className="h-4 w-4 text-rose-300 mr-2" />
                        <span>Practice 5 minutes of mindfulness when bored</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card className="rainbow-border overflow-hidden border-0 bg-slate-950/70 shadow-[0_0_30px_rgba(244,114,182,0.16)] hover:shadow-[0_0_36px_rgba(244,114,182,0.25)] transition-all duration-300 hover:-translate-y-1 backdrop-blur-md">
              <div className="h-1 bg-gradient-to-r from-pink-400 via-rose-300 to-fuchsia-300 opacity-80" />
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-pink-300 to-rose-300 text-slate-950 w-12 h-12 rounded-full flex items-center justify-center mr-5 font-bold text-xl shrink-0 shadow-[0_0_14px_rgba(244,114,182,0.35)]">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 rainbow-text">Redesign Your Environment</h3>
                    <p className="text-slate-200 mb-4">
                      Make your physical space more conducive to focus and less dependent on digital stimulation.
                    </p>
                    <ul className="space-y-2 text-slate-200">
                      <li className="flex items-center">
                        <Activity className="h-4 w-4 text-pink-300 mr-2" />
                        <span>Create a phone-free zone in your bedroom</span>
                      </li>
                      <li className="flex items-center">
                        <Activity className="h-4 w-4 text-rose-300 mr-2" />
                        <span>Keep engaging books or activities within easy reach</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rainbow-border overflow-hidden border-0 bg-slate-950/70 shadow-[0_0_30px_rgba(244,114,182,0.16)] hover:shadow-[0_0_36px_rgba(244,114,182,0.25)] transition-all duration-300 hover:-translate-y-1 backdrop-blur-md">
              <div className="h-1 bg-gradient-to-r from-fuchsia-400 via-pink-300 to-rose-300 opacity-80" />
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-fuchsia-300 to-pink-300 text-slate-950 w-12 h-12 rounded-full flex items-center justify-center mr-5 font-bold text-xl shrink-0 shadow-[0_0_14px_rgba(244,114,182,0.35)]">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 rainbow-text">Practice Mindful Consumption</h3>
                    <p className="text-slate-200 mb-4">
                      Be intentional about what content you consume and how it affects your mental state.
                    </p>
                    <ul className="space-y-2 text-slate-200">
                      <li className="flex items-center">
                        <Coffee className="h-4 w-4 text-fuchsia-300 mr-2" />
                        <span>Curate your feed to show positive, inspiring content</span>
                      </li>
                      <li className="flex items-center">
                        <Coffee className="h-4 w-4 text-pink-300 mr-2" />
                        <span>Set a purpose before opening any social app</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 px-6">
        <div className="absolute inset-0 rainbow-surface opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 rainbow-text">Take the First Step</h2>
          <p className="text-xl text-slate-100/90 mb-6">
            Reclaim your time and prioritize your mental well-being one scroll at a time.
          </p>
          <p className="text-slate-200 text-lg">Start by implementing just one tip from this guide today.</p>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/80 text-slate-200 py-8 px-6 text-center backdrop-blur-md">
        <p>© {new Date().getFullYear()} Luke Meng. Intro to Public Health. PUBLIC HEALTH RESOURCE</p>
      </footer>
    </div>
  )
}
