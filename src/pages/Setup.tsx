import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Target, Briefcase } from "lucide-react";

const jobRoles = [
  { value: "software-engineer", label: "Software Engineer", category: "Technology" },
  { value: "product-manager", label: "Product Manager", category: "Product" },
  { value: "data-scientist", label: "Data Scientist", category: "Technology" },
  { value: "marketing-manager", label: "Marketing Manager", category: "Marketing" },
  { value: "sales-representative", label: "Sales Representative", category: "Sales" },
  { value: "ux-designer", label: "UX Designer", category: "Design" },
  { value: "business-analyst", label: "Business Analyst", category: "Business" },
  { value: "project-manager", label: "Project Manager", category: "Management" },
];

const difficultyLevels = [
  { value: "beginner", label: "Beginner", description: "Entry-level questions, basic concepts", color: "bg-success" },
  { value: "intermediate", label: "Intermediate", description: "Mid-level questions, practical scenarios", color: "bg-primary" },
  { value: "advanced", label: "Advanced", description: "Senior-level questions, complex problems", color: "bg-accent" },
];

const durations = [
  { value: 10, label: "10 minutes", questions: "3-4 questions" },
  { value: 15, label: "15 minutes", questions: "5-6 questions" },
  { value: 30, label: "30 minutes", questions: "8-10 questions" },
  { value: 45, label: "45 minutes", questions: "12-15 questions" },
];

const Setup = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedDuration, setSelectedDuration] = useState<number>(15);

  const isFormValid = selectedRole && selectedDifficulty && selectedDuration;

  const handleStartInterview = () => {
    if (!isFormValid) return;

    const selectedRoleData = jobRoles.find(role => role.value === selectedRole);
    const selectedDifficultyData = difficultyLevels.find(diff => diff.value === selectedDifficulty);

    navigate("/interview", {
      state: {
        role: selectedRoleData?.label,
        difficulty: selectedDifficultyData?.label,
        duration: selectedDuration,
        category: selectedRoleData?.category
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Setup Your Mock Interview
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Customize your interview experience by selecting the role, difficulty level, and duration that matches your preparation goals.
          </p>
        </div>

        <div className="grid gap-6 max-w-3xl mx-auto">
          {/* Job Role Selection */}
          <Card className="shadow-medium bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Briefcase className="h-5 w-5 mr-2 text-primary" />
                Select Job Role
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="w-full h-12">
                  <SelectValue placeholder="Choose the role you're interviewing for" />
                </SelectTrigger>
                <SelectContent>
                  {jobRoles.map((role) => (
                    <SelectItem key={role.value} value={role.value}>
                      <div className="flex items-center justify-between w-full">
                        <span>{role.label}</span>
                        <Badge variant="secondary" className="ml-2">
                          {role.category}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Difficulty Level */}
          <Card className="shadow-medium bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Target className="h-5 w-5 mr-2 text-primary" />
                Difficulty Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {difficultyLevels.map((level) => (
                  <Card
                    key={level.value}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-medium ${
                      selectedDifficulty === level.value
                        ? "ring-2 ring-primary shadow-medium"
                        : "hover:ring-1 hover:ring-border"
                    }`}
                    onClick={() => setSelectedDifficulty(level.value)}
                  >
                    <CardContent className="pt-6 text-center">
                      <div className={`w-3 h-3 rounded-full ${level.color} mx-auto mb-3`} />
                      <h3 className="font-semibold mb-2">{level.label}</h3>
                      <p className="text-sm text-muted-foreground">{level.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Duration Selection */}
          <Card className="shadow-medium bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                Interview Duration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {durations.map((duration) => (
                  <Card
                    key={duration.value}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-medium ${
                      selectedDuration === duration.value
                        ? "ring-2 ring-primary shadow-medium"
                        : "hover:ring-1 hover:ring-border"
                    }`}
                    onClick={() => setSelectedDuration(duration.value)}
                  >
                    <CardContent className="pt-6 text-center">
                      <div className="font-semibold text-lg mb-1">{duration.label}</div>
                      <div className="text-sm text-muted-foreground">{duration.questions}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Start Interview Button */}
          <div className="text-center pt-4">
            <Button
              variant="gradient"
              size="xl"
              className="px-12"
              onClick={handleStartInterview}
              disabled={!isFormValid}
            >
              Start Mock Interview
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            {!isFormValid && (
              <p className="text-sm text-muted-foreground mt-2">
                Please complete all selections to start your interview
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;