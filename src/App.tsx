import React from 'react'
import { ChevronDown, Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from 'lucide-react'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-400">Udhaya Kumar T</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Production Engineer
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Team Leader at TVS Motor Company | Robotics & Automation Specialist
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Passionate about industrial automation, face recognition systems, and cutting-edge technology solutions. 
            Currently pursuing Production Engineering while leading technical teams in automotive manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get In Touch
            </a>
            <a href="#projects" className="border border-slate-600 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-colors">
              View My Work
            </a>
          </div>
          <ChevronDown className="mx-auto mt-12 animate-bounce" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                I'm Udhaya Kumar T, a dedicated Production Engineering student with hands-on experience as a Team Leader 
                at TVS Motor Company. My journey combines academic excellence with real-world industrial experience.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                I specialize in automation systems, face recognition technology, and robotics. My goal is to bridge 
                the gap between traditional manufacturing and modern Industry 4.0 solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">Production Engineering</span>
                <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">Team Leadership</span>
                <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">Automation</span>
              </div>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Quick Facts</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-400" />
                  Tamil Nadu, India
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-blue-400" />
                  Available for opportunities
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink size={16} className="text-blue-400" />
                  TVS Motor Company
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Experience & Education</h3>
          <div className="space-y-8">
            {/* TVS Motor Company */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-blue-400">Team Leader</h4>
                  <p className="text-slate-300">TVS Motor Company</p>
                </div>
                <span className="text-slate-400 mt-2 md:mt-0">Current Position</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Leading technical teams in automotive manufacturing processes. Responsible for production optimization, 
                quality control, and implementing automation solutions to improve efficiency and reduce downtime.
              </p>
            </div>

            {/* Education */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-blue-400">Production Engineering</h4>
                  <p className="text-slate-300">Currently Pursuing</p>
                </div>
                <span className="text-slate-400 mt-2 md:mt-0">In Progress</span>
              </div>
              <p className="
