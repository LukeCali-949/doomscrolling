import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, Clock, Brain, Activity, Coffee } from 'lucide-react'

export default function Home() {
  return (
    <div className="font-sans text-gray-200 leading-relaxed tracking-tight bg-gray-950 min-h-screen">
      {/* Hero Section - Simplified */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,50,200,0.15),transparent_70%)]"></div>
        <div className="container mx-auto px-6 py-16 md:py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Break the Scroll</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Learn how doomscrolling affects your mental health and discover simple ways to take back control.
            </p>
            <div className="animate-bounce mt-8">
              <ArrowDown className="h-8 w-8 text-purple-400 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - FOCAL POINT 1 */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-300">
              Doomscrolling by the Numbers
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-400 mx-auto rounded-full opacity-60"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-0 bg-gray-800 shadow-[0_0_15px_rgba(120,50,200,0.2)]">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-gray-700 p-4 rounded-full mr-5">
                    <Clock className="h-8 w-8 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-xl font-medium mb-3 text-gray-200">
                      The average American now spends{" "}
                      <span className="text-2xl font-bold text-purple-300">7 hours and 3 minutes</span> on screens
                      daily.
                    </p>
                    <p className="text-sm text-gray-400">
                      Source:{" "}
                      <a
                        href="https://explodingtopics.com/blog/screen-time-stats"
                        className="underline text-purple-300"
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

            <Card className="overflow-hidden border-0 bg-gray-800 shadow-[0_0_15px_rgba(120,50,200,0.2)]">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-gray-700 p-4 rounded-full mr-5">
                    <Brain className="h-8 w-8 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-xl font-medium mb-3 text-gray-200">
                      Doomscrolling is directly linked to increased{" "}
                      <span className="text-2xl font-bold text-purple-300">anxiety, depression, and poor sleep</span>,
                      particularly among young adults.
                    </p>
                    <p className="text-sm text-gray-400">
                      Source:{" "}
                      <a
                        href="https://www.health.harvard.edu/mind-and-mood/doomscrolling-dangers"
                        className="underline text-purple-300"
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

          {/* Additional Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="border-0 bg-gray-800">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">52%</div>
                <p className="text-gray-300">of people check their phone within 10 minutes of waking up</p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gray-800">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">86×</div>
                <p className="text-gray-300">average number of times people check their phone daily</p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gray-800">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">23%</div>
                <p className="text-gray-300">increase in anxiety symptoms linked to excessive social media use</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It's Addictive - Visual Explanation */}
      <section className="py-16 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-300">
              Why Is It So Addictive?
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-400 mx-auto rounded-full opacity-60"></div>
          </div>

          <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-10">
              <p className="text-xl text-center text-gray-300 mb-10">
                Social platforms are designed to keep you hooked. Infinite scrolling, algorithmic feeds, and emotionally
                charged content create a cycle your brain craves.
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gray-900 rounded-lg p-6 text-center">
                  <div className="bg-gray-800 text-purple-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🔔
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-purple-300">Trigger</h3>
                  <p className="text-gray-300">Boredom or a notification prompts you to check your phone</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 text-center">
                  <div className="bg-gray-800 text-purple-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    📱
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-purple-300">Action</h3>
                  <p className="text-gray-300">You open TikTok, Instagram, or another social app</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 text-center">
                  <div className="bg-gray-800 text-purple-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎉
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-purple-300">Reward</h3>
                  <p className="text-gray-300">You see something exciting, emotional, or shocking</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 text-center">
                  <div className="bg-gray-800 text-purple-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🔁
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-purple-300">Repeat</h3>
                  <p className="text-gray-300">Your brain wants more, and the cycle continues</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-lg font-medium text-purple-300">
                  This creates a dopamine feedback loop that's hard to break
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section - FOCAL POINT 2 */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-300">
              How to Break the Cycle
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-400 mx-auto rounded-full opacity-60"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Practical strategies to regain control of your digital life and improve your mental wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-0 bg-gray-800 shadow-[0_0_15px_rgba(120,50,200,0.2)] hover:shadow-[0_0_20px_rgba(120,50,200,0.3)] transition-all duration-300 hover:-translate-y-1">
              <div className="h-1 bg-gradient-to-r from-purple-500 to-purple-400 opacity-60"></div>
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-gray-700 text-purple-300 w-12 h-12 rounded-full flex items-center justify-center mr-5 font-bold text-xl shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-purple-300">Set Boundaries</h3>
                    <p className="text-gray-300 mb-4">
                      Use digital wellness features to limit screen time. Set daily limits, enable downtime, and take
                      regular breaks from your phone.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <Activity className="h-4 w-4 text-purple-400 mr-2" />
                        <span>Set app time limits in your phone settings</span>
                      </li>
                      <li className="flex items-center">
                        <Activity className="h-4 w-4 text-purple-400 mr-2" />
                        <span>Use "Do Not Disturb" mode during focused work</span>
                      </li>
                      <li className="flex items-center">
                        <Activity className="h-4 w-4 text-purple-400 mr-2" />
                        <span>Keep your phone out of reach during meals</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-gray-800 shadow-[0_0_15px_rgba(120,50,200,0.2)] hover:shadow-[0_0_20px_rgba(120,50,200,0.3)] transition-all duration-300 hover:-translate-y-1">
              <div className="h-1 bg-gradient-to-r from-purple-500 to-purple-400 opacity-60"></div>
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-gray-700 text-purple-300 w-12 h-12 rounded-full flex items-center justify-center mr-5 font-bold text-xl shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-purple-300">Replace the Habit</h3>
                    <p className="text-gray-300 mb-4">
                      Replace scrolling with healthier alternatives like journaling, walking, meditating, or calling a
                      friend.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <Coffee className="h-4 w-4 text-purple-400 mr-2" />
                        <span>Read a physical book instead of social media</span>
                      </li>
                      <li className="flex items-center">
                        <Coffee className="h-4 w-4 text-purple-400 mr-2" />
                        <span>Take a 10-minute walk when you feel the urge to scroll</span>
                      </li>
                      <li className="flex items-center">
                        <Coffee className="h-4 w-4 text-purple-400 mr-2" />
                        <span>Practice 5 minutes of mindfulness when bored</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Tips */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card className="overflow-hidden border-0 bg-gray-800 shadow-[0_0_15px_rgba(120,50,200,0.2)] hover:shadow-[0_0_20px_rgba(120,50,200,0.3)] transition-all duration-300 hover:-translate-y-1">
              <div className="h-1 bg-gradient-to-r from-purple-500 to-purple-400 opacity-60"></div>
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-gray-700 text-purple-300 w-12 h-12 rounded-full flex items-center justify-center mr-5 font-bold text-xl shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-purple-300">Redesign Your Environment</h3>
                    <p className="text-gray-300 mb-4">
                      Make your physical space more conducive to focus and less dependent on digital stimulation.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <Activity className="h-4 w-4 text-purple-400 mr-2" />
                        <span>Create a phone-free zone in your bedroom</span>
                      </li>
                      <li className="flex items-center">
                        <Activity className="h-4 w-4 text-purple-400 mr-2" />
                        <span>Keep engaging books or activities within easy reach</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-gray-800 shadow-[0_0_15px_rgba(120,50,200,0.2)] hover:shadow-[0_0_20px_rgba(120,50,200,0.3)] transition-all duration-300 hover:-translate-y-1">
              <div className="h-1 bg-gradient-to-r from-purple-500 to-purple-400 opacity-60"></div>
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-gray-700 text-purple-300 w-12 h-12 rounded-full flex items-center justify-center mr-5 font-bold text-xl shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-purple-300">Practice Mindful Consumption</h3>
                    <p className="text-gray-300 mb-4">
                      Be intentional about what content you consume and how it affects your mental state.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <Coffee className="h-4 w-4 text-purple-400 mr-2" />
                        <span>Curate your feed to show positive, inspiring content</span>
                      </li>
                      <li className="flex items-center">
                        <Coffee className="h-4 w-4 text-purple-400 mr-2" />
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

      {/* CTA */}
      <section className="relative overflow-hidden py-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,50,200,0.15),transparent_70%)]"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Take the First Step</h2>
          <p className="text-xl text-gray-300 mb-6">
            Reclaim your time and prioritize your mental well-being—one scroll at a time.
          </p>
          <p className="text-gray-300 text-lg">Start by implementing just one tip from this guide today.</p>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 px-6 text-center">
        <p>© {new Date().getFullYear()} Luke Meng. Intro to Public Health. PUBLIC HEALTH RESOURCE </p>
      </footer>
    </div>
  )
}






