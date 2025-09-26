import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Target, 
  Timer, 
  TrendingUp, 
  Users, 
  PlayCircle,
  CheckCircle,
  Star,
  MessageSquare,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-interview.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Questions",
      description: "Get realistic interview questions tailored to your role and experience level."
    },
    {
      icon: Target,
      title: "Role-Specific Practice",
      description: "Practice for specific positions with customized question sets."
    },
    {
      icon: Timer,
      title: "Timed Practice",
      description: "Simulate real interview conditions with customizable time limits."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Get detailed feedback and track your improvement over time."
    },
    {
      icon: Users,
      title: "Multiple Difficulty Levels",
      description: "From entry-level to senior positions, practice at your level."
    },
    {
      icon: Award,
      title: "Instant Feedback",
      description: "Receive immediate analysis of your responses and delivery."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Interviews Completed" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Job Roles Covered" },
    { number: "4.8★", label: "User Rating" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-primary text-white px-4 py-1.5 text-sm font-medium">
                  ✨ AI-Powered Interview Prep
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Ace Your Next
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> Interview</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Practice with AI-generated questions, get instant feedback, and build confidence for your dream job interview.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="gradient"
                  size="xl"
                  onClick={() => navigate("/setup")}
                  className="group"
                >
                  <PlayCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start Mock Interview
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="group"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Learn More
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="Professional interview preparation"
                  className="rounded-2xl shadow-strong w-full h-[400px] lg:h-[500px] object-cover animate-float"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-3xl transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform provides comprehensive interview preparation tools to help you land your dream job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300 bg-gradient-card group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-muted/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started in just three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Choose Your Role",
                description: "Select the job position and difficulty level that matches your target interview."
              },
              {
                step: "02", 
                title: "Practice Interview",
                description: "Answer AI-generated questions with voice recording and real-time feedback."
              },
              {
                step: "03",
                title: "Get Results",
                description: "Receive detailed analysis, scores, and personalized improvement recommendations."
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-hero text-white shadow-strong max-w-4xl mx-auto">
            <CardContent className="text-center py-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Ace Your Interview?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of successful candidates who've improved their interview skills with our AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="xl"
                  onClick={() => navigate("/setup")}
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Start Your First Interview
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
