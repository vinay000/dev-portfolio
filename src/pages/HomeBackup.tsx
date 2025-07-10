import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Circle, Github, Instagram, Linkedin, X } from "lucide-react"
import { ProjectCard } from "@/components/ProjectCard"

export function HomeA() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-black text-white">
            <div className="w-full max-w-md mx-auto">
                {/* Top navigation bar */}
                <div className="flex justify-between items-center p-4 border-b border-zinc-300 dark:border-zinc-800">
                    <div className="flex gap-2">
                        <Circle className="w-3 h-3 text-zinc-500" />
                        <Circle className="w-3 h-3 text-zinc-500" />
                        <Circle className="w-3 h-3 text-zinc-500" />
                        <Circle className="w-3 h-3 text-zinc-500" />
                    </div>
                    <div className="text-xs text-zinc-500">10:45 PM</div>
                </div>

                {/* Profile Section */}
                <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-sm text-zinc-700 dark:text-zinc-400">• Product Designer</h2>
                        <Badge variant="outline" className="text-xs text-emerald-400 border-emerald-400/20 bg-emerald-400/10">
                            AVAILABLE FOR WORK
                        </Badge>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <div>
                            <h1 className="text-xl font-bold">I'm Brian Do</h1>
                            <p className="text-sm text-zinc-700 dark:text-zinc-400 mt-1">Product designer based in San Francisco.</p>
                            <p className="text-sm text-zinc-700 dark:text-zinc-400">Currently designing at Rectangle.</p>

                            <div className="flex gap-4 mt-4">
                                <div className="flex items-center gap-1 text-xs text-zinc-700 dark:text-zinc-400">
                                    <Circle className="w-3 h-3 fill-zinc-400" />
                                    10+ Yrs
                                </div>
                                <div className="flex items-center gap-1 text-xs text-zinc-700 dark:text-zinc-400">
                                    <Circle className="w-3 h-3 fill-zinc-400" />
                                    Pixel Perfect
                                </div>
                            </div>
                        </div>

                        <Avatar className="w-16 h-16 border-2 border-zinc-300 dark:border-zinc-800">
                            <AvatarImage src="/placeholder.svg" alt="Brian Do" />
                            <AvatarFallback>BD</AvatarFallback>
                        </Avatar>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-sm text-zinc-700 dark:text-zinc-400">• Projects</h2>
                        <Button variant="link" className="text-xs text-zinc-700 dark:text-zinc-400 p-0">
                            View All →
                        </Button>
                    </div>

                    <div className="space-y-2">
                        <ProjectCard
                            icon={<Circle className="w-6 h-6 text-white bg-purple-600 rounded-full p-1" />}
                            title="Rectangle"
                            description="Product design, Icon design"
                            color="purple"
                        />
                        <ProjectCard
                            icon={<Circle className="w-6 h-6 text-white bg-indigo-600 rounded-full p-1" />}
                            title="Morva labs"
                            description="UI/UX design, Branding"
                            color="indigo"
                        />
                        <ProjectCard
                            icon={<Circle className="w-6 h-6 text-white bg-orange-500 rounded-full p-1" />}
                            title="Simply"
                            description="Landing page, Illustration design"
                            color="orange"
                        />
                    </div>
                </section>

                {/* My Works Section */}
                <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
                    <h2 className="text-sm text-zinc-700 dark:text-zinc-400 mb-2">• Portfolio</h2>
                    <h1 className="text-xl font-bold mb-2">My Works</h1>
                    <p className="text-sm text-zinc-700 dark:text-zinc-400 mb-4">
                        Discover my portfolio, where purposeful creations meet captivating design. My work strives to enhance
                        experience and inspire.
                    </p>

                    <div className="space-y-2">
                        <ProjectCard
                            icon={<Circle className="w-6 h-6 text-white bg-purple-600 rounded-full p-1" />}
                            title="Rectangle"
                            description="Product design, Icon design"
                            color="purple"
                        />
                        <ProjectCard
                            icon={<Circle className="w-6 h-6 text-white bg-indigo-600 rounded-full p-1" />}
                            title="Morva labs"
                            description="UI/UX design, Branding"
                            color="indigo"
                        />
                        <ProjectCard
                            icon={<Circle className="w-6 h-6 text-white bg-orange-500 rounded-full p-1" />}
                            title="Simply"
                            description="Landing page, Illustration design"
                            color="orange"
                        />
                        <ProjectCard
                            icon={<Circle className="w-6 h-6 text-white bg-sky-500 rounded-full p-1" />}
                            title="Glassdoor"
                            description="Web design, Illustration design"
                            color="sky"
                        />
                        <ProjectCard
                            icon={<Circle className="w-6 h-6 text-white bg-purple-500 rounded-full p-1" />}
                            title="Seven LTD."
                            description=""
                            color="purple"
                        />
                    </div>
                </section>

                {/* Products Section */}
                <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
                    <h2 className="text-sm text-zinc-700 dark:text-zinc-400 mb-2">• Products</h2>
                    <h1 className="text-xl font-bold mb-2">Explore My Products</h1>
                    <p className="text-sm text-zinc-700 dark:text-zinc-400 mb-4">
                        Discover the digital products that I created as an indie product designer. Let's explore.
                    </p>

                    <div className="space-y-2">
                        <Card className="dark:bg-zinc-900 border-zinc-300 dark:border-zinc-800">
                            <CardContent className="p-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Circle className="w-8 h-8 text-white bg-purple-600 rounded-full p-1.5" />
                                        <div>
                                            <h3 className="font-medium">Goven</h3>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="text-xs text-zinc-700 dark:text-zinc-400 border-zinc-700">
                                        DESIGN TOOLKIT
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="dark:bg-zinc-900 border-zinc-300 dark:border-zinc-800">
                            <CardContent className="p-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Circle className="w-8 h-8 text-white bg-green-500 rounded-full p-1.5" />
                                        <div>
                                            <h3 className="font-medium">Landit</h3>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="text-xs text-zinc-700 dark:text-zinc-400 border-zinc-700">
                                        WEB DESIGN COLLECTION
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="dark:bg-zinc-900 border-zinc-300 dark:border-zinc-800">
                            <CardContent className="p-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Circle className="w-8 h-8 text-white bg-zinc-500 rounded-full p-1.5" />
                                        <div>
                                            <h3 className="font-medium">Subtle Folio</h3>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="text-xs text-zinc-700 dark:text-zinc-400 border-zinc-700">
                                        DESIGN TOOLKIT
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Let's work together Section */}
                <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
                    <h1 className="text-xl font-bold mb-2">Let's work together.</h1>
                    <p className="text-sm text-zinc-700 dark:text-zinc-400 mb-4">Creating user experience and visual appealing design.</p>
                </section>

                {/* Morva Labs Section */}
                <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-3 text-xs text-zinc-700 dark:text-zinc-400">
                            <span>Client</span>
                            <span className="ml-8">Morva Labs</span>
                        </div>
                        <div className="flex gap-3 text-xs text-zinc-700 dark:text-zinc-400">
                            <span>Year</span>
                            <span className="ml-10">2023</span>
                        </div>
                        <div className="flex gap-3 text-xs text-zinc-700 dark:text-zinc-400">
                            <span>Project Type</span>
                            <span>UI/UX design, Branding</span>
                        </div>
                        <div className="flex gap-3 text-xs text-zinc-700 dark:text-zinc-400">
                            <span>Role</span>
                            <span className="ml-10">2023</span>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-center">
                        <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">
                            M
                        </div>
                    </div>

                    <h1 className="text-xl font-bold mt-4">Morva labs</h1>
                    <p className="text-sm text-zinc-700 dark:text-zinc-400 mt-2 mb-4">
                        Enhance your company's workforce management with a cutting-edge website. Enjoy seamless user experience,
                        efficient employee management, and a competitive edge.
                    </p>

                    <Button
                        variant="outline"
                        className="text-xs w-full border-zinc-700 text-zinc-700 dark:text-zinc-400 hover:text-white hover:bg-zinc-800"
                    >
                        VIEW WEBSITE <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>

                    <div className="mt-4 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md overflow-hidden">
                        <img src="/placeholder.svg" alt="Morva Labs Website" width={400} height={200} className="w-full h-auto" />
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-sm text-zinc-700 dark:text-zinc-400">• Hire Me</h2>
                        <Badge variant="outline" className="text-xs text-emerald-400 border-emerald-400/20 bg-emerald-400/10">
                            AVAILABLE FOR PROJECTS
                        </Badge>
                    </div>

                    <h1 className="text-xl font-bold mb-2">Design Inquiry</h1>
                    <p className="text-sm text-zinc-700 dark:text-zinc-400 mb-4">Got an idea and need design help? Here's our time.</p>

                    <form className="space-y-3">
                        <Input placeholder="Name" className="dark:bg-zinc-900 border-zinc-700 text-zinc-300 placeholder:text-zinc-500" />
                        <Input
                            placeholder="Email"
                            className="dark:bg-zinc-900 border-zinc-700 text-zinc-300 placeholder:text-zinc-500"
                        />
                        <Textarea
                            placeholder="Message"
                            className="dark:bg-zinc-900 border-zinc-700 text-zinc-300 placeholder:text-zinc-500 min-h-[100px]"
                        />
                        <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white">Submit Inquiry</Button>
                    </form>

                    <div className="mt-6">
                        <p className="text-sm text-zinc-700 dark:text-zinc-400 mb-2">• Follow Me</p>
                        <div className="flex gap-3">
                            <a href="#" className="text-zinc-700 dark:text-zinc-400 hover:text-white">
                                <X className="w-4 h-4" />
                            </a>
                            <a href="#" className="text-zinc-700 dark:text-zinc-400 hover:text-white">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="text-zinc-700 dark:text-zinc-400 hover:text-white">
                                <Github className="w-4 h-4" />
                            </a>
                            <a href="#" className="text-zinc-700 dark:text-zinc-400 hover:text-white">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div className="mt-6 text-center text-xs text-zinc-500">
                        © 2023 Brian Do. All rights reserved.
                        <div className="mt-1">
                            <span>No Tracking - </span>
                            <span>Minimalist</span>
                        </div>
                    </div>
                </section>

                {/* 404 Page Section */}
                <section className="p-4 border-b border-zinc-300 dark:border-zinc-800">
                    <h2 className="text-sm text-zinc-700 dark:text-zinc-400 mb-6">• Oops! 404</h2>

                    <div className="flex flex-col items-center justify-center">
                        <Avatar className="w-20 h-20 border-2 border-zinc-300 dark:border-zinc-800 mb-4">
                            <AvatarImage src="/placeholder.svg" alt="Brian Do" />
                            <AvatarFallback>BD</AvatarFallback>
                        </Avatar>

                        <h1 className="text-xl font-bold mb-2">Page not found.</h1>
                        <p className="text-sm text-zinc-700 dark:text-zinc-400 mb-4">The page you're looking for does not exist.</p>

                        <div className="flex gap-3">
                            <Button
                                variant="outline"
                                className="text-xs border-zinc-700 text-zinc-700 dark:text-zinc-400 hover:text-white hover:bg-zinc-800"
                            >
                                Back to Home
                            </Button>
                            <Button className="text-xs bg-zinc-800 hover:bg-zinc-700 text-white">
                                Go to My Work <ArrowRight className="w-3 h-3 ml-1" />
                            </Button>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="text-sm text-zinc-700 dark:text-zinc-400 mb-2">• Follow Me</p>
                        <div className="flex gap-3">
                            <a href="#" className="text-zinc-700 dark:text-zinc-400 hover:text-white">
                                <X className="w-4 h-4" />
                            </a>
                            <a href="#" className="text-zinc-700 dark:text-zinc-400 hover:text-white">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="text-zinc-700 dark:text-zinc-400 hover:text-white">
                                <Github className="w-4 h-4" />
                            </a>
                            <a href="#" className="text-zinc-700 dark:text-zinc-400 hover:text-white">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Bottom navigation bar */}
                <div className="flex justify-between items-center p-4">
                    <div className="flex gap-2">
                        <Circle className="w-3 h-3 text-zinc-500" />
                        <Circle className="w-3 h-3 text-zinc-500" />
                        <Circle className="w-3 h-3 text-zinc-500" />
                        <Circle className="w-3 h-3 text-zinc-500" />
                    </div>
                    <div className="text-xs text-zinc-500">10:45 PM</div>
                </div>
            </div>
        </div>
    )
}