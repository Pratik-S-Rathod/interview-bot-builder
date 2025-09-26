import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  TrendingUp, 
  MessageSquare, 
  Clock,
  RotateCcw,
  Home,
  Star,
  Target,
  Lightbulb
} from "lucide-react";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const interviewData = location.state || {
    role: "Software Engineer",
    difficulty: "Medium",
    duration: 15,
    questionsAnswered: 5,
    responses: []
  };

  // Mock scoring data - in a real app this would come from AI analysis
  const results = {
    overallScore: 78,
    categories: [
      { name: "Communication", score: 85, feedback: "Clear and articulate responses" },
      { name: "Technical Knowledge", score: 75, feedback: "Good understanding, room for improvement" },
      { name: "Problem Solving", score: 80, feedback: "Structured approach to challenges" },
      { name: "Confidence", score: 72, feedback: "Maintain steady tone throughout" },
    ],
    strengths: [
      "Excellent storytelling with STAR method",
      "Good eye contact and body language",
      "Specific examples from experience"
    ],
    improvements: [
      "Reduce filler words (um, uh)",
      "Be more concise in technical explanations",
      "Ask more clarifying questions"
    ],
    timeSpent: Math.floor(interviewData.duration * 0.8) // Mock actual time
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-primary";
    return "text-warning";
  };

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 80) return "default";
    if (score >= 60) return "secondary";
    return "outline";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-success text-white mb-4">
            <Trophy className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Interview Complete!
          </h1>
          <p className="text-muted-foreground text-lg">
            {interviewData.role} • {interviewData.difficulty} Level
          </p>
        </div>

        {/* Overall Score */}
        <Card className="mb-6 shadow-strong bg-gradient-card">
          <CardContent className="pt-6 text-center">
            <div className="mb-4">
              <div className={`text-5xl font-bold ${getScoreColor(results.overallScore)} mb-2`}>
                {results.overallScore}%
              </div>
              <p className="text-muted-foreground">Overall Performance</p>
            </div>
            <Progress value={results.overallScore} className="h-3 mb-4" />
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-semibold">{interviewData.questionsAnswered}</div>
                <div className="text-sm text-muted-foreground">Questions</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">{results.timeSpent}m</div>
                <div className="text-sm text-muted-foreground">Duration</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">
                  {results.categories.filter(c => c.score >= 75).length}/{results.categories.length}
                </div>
                <div className="text-sm text-muted-foreground">Strong Areas</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Category Scores */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2 text-primary" />
                Performance Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {results.categories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{category.name}</span>
                    <Badge variant={getScoreBadgeVariant(category.score)}>
                      {category.score}%
                    </Badge>
                  </div>
                  <Progress value={category.score} className="h-2" />
                  <p className="text-sm text-muted-foreground">{category.feedback}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Interview Stats */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                Interview Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>Total Time</span>
                </div>
                <span className="font-semibold">{results.timeSpent} minutes</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>Questions Answered</span>
                </div>
                <span className="font-semibold">{interviewData.questionsAnswered}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>Difficulty Level</span>
                </div>
                <span className="font-semibold">{interviewData.difficulty}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {/* Strengths */}
          <Card className="shadow-medium border-success/20 bg-gradient-to-br from-success/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center text-success">
                <TrendingUp className="h-5 w-5 mr-2" />
                Key Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {results.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-success mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Areas for Improvement */}
          <Card className="shadow-medium border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Lightbulb className="h-5 w-5 mr-2" />
                Areas for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {results.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">{improvement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            variant="hero"
            size="lg"
            onClick={() => navigate("/setup")}
            className="flex items-center"
          >
            <RotateCcw className="h-5 w-5 mr-2" />
            Start New Interview
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/")}
            className="flex items-center"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;