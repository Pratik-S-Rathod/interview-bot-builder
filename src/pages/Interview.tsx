import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Mic, MicOff, SkipForward, Home } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface InterviewQuestion {
  id: number;
  question: string;
  category: string;
  difficulty: string;
}

const mockQuestions: InterviewQuestion[] = [
  {
    id: 1,
    question: "Tell me about yourself and your background.",
    category: "General",
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "What interests you most about this role and our company?",
    category: "Motivation",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "Describe a challenging project you've worked on and how you overcame obstacles.",
    category: "Experience",
    difficulty: "Medium"
  },
  {
    id: 4,
    question: "How do you handle working under pressure and tight deadlines?",
    category: "Soft Skills",
    difficulty: "Medium"
  },
  {
    id: 5,
    question: "Where do you see yourself in 5 years, and how does this role fit into your career goals?",
    category: "Future Goals",
    difficulty: "Hard"
  }
];

const Interview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [responses, setResponses] = useState<string[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(180); // 3 minutes per question

  const interviewData = location.state || {
    role: "Software Engineer",
    difficulty: "Medium",
    duration: 15
  };

  const progress = ((currentQuestion + 1) / mockQuestions.length) * 100;

  const handleNextQuestion = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeRemaining(180);
      setIsRecording(false);
      toast({
        title: "Moving to next question",
        description: `Question ${currentQuestion + 2} of ${mockQuestions.length}`,
      });
    } else {
      // Interview completed - navigate to results
      navigate("/results", {
        state: {
          ...interviewData,
          responses,
          questionsAnswered: mockQuestions.length
        }
      });
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast({
        title: "Recording started",
        description: "Start speaking your answer",
      });
    } else {
      toast({
        title: "Recording stopped",
        description: "Your response has been saved",
      });
      // In a real app, this would process the audio
      setResponses([...responses, `Response to question ${currentQuestion + 1}`]);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              AI Mock Interview
            </h1>
            <p className="text-muted-foreground">
              {interviewData.role} • {interviewData.difficulty} Level
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/")}
          >
            <Home className="h-4 w-4 mr-2" />
            Exit Interview
          </Button>
        </div>

        {/* Progress */}
        <Card className="mb-6 shadow-soft bg-gradient-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">
                Question {currentQuestion + 1} of {mockQuestions.length}
              </span>
              <span className="text-sm text-muted-foreground">
                Time: {formatTime(timeRemaining)}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>

        {/* Current Question */}
        <Card className="mb-8 shadow-medium">
          <CardHeader className="text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {mockQuestions[currentQuestion].category} • {mockQuestions[currentQuestion].difficulty}
            </div>
            <CardTitle className="text-xl leading-relaxed">
              {mockQuestions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            {/* Recording Controls */}
            <div className="flex flex-col items-center space-y-4">
              <Button
                variant={isRecording ? "destructive" : "hero"}
                size="xl"
                onClick={toggleRecording}
                className={`rounded-full w-24 h-24 ${
                  isRecording ? "animate-pulse-glow" : ""
                }`}
              >
                {isRecording ? (
                  <MicOff className="h-8 w-8" />
                ) : (
                  <Mic className="h-8 w-8" />
                )}
              </Button>
              <p className="text-sm text-muted-foreground max-w-md">
                {isRecording
                  ? "Recording your response... Click to stop when finished."
                  : "Click the microphone to start recording your answer (or speak without recording)."}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                onClick={handleNextQuestion}
                className="flex items-center"
              >
                <SkipForward className="h-4 w-4 mr-2" />
                {currentQuestion === mockQuestions.length - 1 ? "Finish Interview" : "Next Question"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="bg-gradient-success text-white shadow-soft">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">💡 Interview Tips</h3>
            <ul className="text-sm space-y-1 opacity-90">
              <li>• Use the STAR method (Situation, Task, Action, Result)</li>
              <li>• Be specific with examples from your experience</li>
              <li>• Ask clarifying questions if needed</li>
              <li>• Take a moment to think before responding</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Interview;