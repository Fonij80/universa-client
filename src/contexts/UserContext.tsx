
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface SavedProgram {
  id: string;
  title: string;
  university: string;
  country: string;
  countryFlag: string;
  funding: 'full' | 'partial' | 'none';
  deadline: string;
  eligibilityScore: number;
  field: string;
  savedAt: Date;
}

export interface UserProfile {
  name: string;
  age: number;
  major: string;
  preferredCountries: string[];
  budget: string;
  gpa: number;
  experience: string;
}

export interface ApplicationStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate?: string;
  resources?: string[];
}

export interface ProgramApplication {
  programId: string;
  steps: ApplicationStep[];
  progress: number;
}

interface UserContextType {
  profile: UserProfile;
  updateProfile: (profile: Partial<UserProfile>) => void;
  savedPrograms: SavedProgram[];
  addSavedProgram: (program: SavedProgram) => void;
  removeSavedProgram: (programId: string) => void;
  applications: ProgramApplication[];
  updateApplicationStep: (programId: string, stepId: string, completed: boolean) => void;
}

const defaultProfile: UserProfile = {
  name: 'Sara Johnson',
  age: 24,
  major: 'Computer Science',
  preferredCountries: ['United States', 'Germany', 'Canada'],
  budget: '$20,000 - $30,000',
  gpa: 3.7,
  experience: '2 years research experience'
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [savedPrograms, setSavedPrograms] = useState<SavedProgram[]>([]);
  const [applications, setApplications] = useState<ProgramApplication[]>([]);

  const updateProfile = (newProfile: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...newProfile }));
  };

  const addSavedProgram = (program: SavedProgram) => {
    setSavedPrograms(prev => [...prev, program]);
    
    // Create application steps for the new program
    const defaultSteps: ApplicationStep[] = [
      {
        id: '1',
        title: 'Research Program Requirements',
        description: 'Review admission requirements and eligibility criteria',
        completed: false,
        resources: ['University website', 'Program brochure']
      },
      {
        id: '2',
        title: 'Prepare Academic Documents',
        description: 'Gather transcripts, diplomas, and certificates',
        completed: false,
        resources: ['Official transcripts', 'Degree certificates']
      },
      {
        id: '3',
        title: 'Write Statement of Purpose',
        description: 'Draft and refine your personal statement',
        completed: false,
        resources: ['SOP template', 'Writing guidelines']
      },
      {
        id: '4',
        title: 'Request Recommendation Letters',
        description: 'Contact professors or supervisors for recommendations',
        completed: false,
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      },
      {
        id: '5',
        title: 'Prepare Language Test Scores',
        description: 'Take IELTS/TOEFL or other required language tests',
        completed: false,
        resources: ['Test preparation materials', 'Practice tests']
      },
      {
        id: '6',
        title: 'Submit Application',
        description: 'Complete and submit your application online',
        completed: false,
        dueDate: program.deadline
      },
      {
        id: '7',
        title: 'Apply for Scholarships/Funding',
        description: 'Submit funding applications and scholarship forms',
        completed: false
      },
      {
        id: '8',
        title: 'Prepare for Interviews',
        description: 'Practice interview questions and research the program',
        completed: false
      },
      {
        id: '9',
        title: 'Apply for Student Visa',
        description: 'Gather documents and apply for student visa',
        completed: false
      },
      {
        id: '10',
        title: 'Arrange Accommodation',
        description: 'Find and secure housing near the university',
        completed: false
      }
    ];

    setApplications(prev => [...prev, {
      programId: program.id,
      steps: defaultSteps,
      progress: 0
    }]);
  };

  const removeSavedProgram = (programId: string) => {
    setSavedPrograms(prev => prev.filter(p => p.id !== programId));
    setApplications(prev => prev.filter(a => a.programId !== programId));
  };

  const updateApplicationStep = (programId: string, stepId: string, completed: boolean) => {
    setApplications(prev => prev.map(app => {
      if (app.programId === programId) {
        const updatedSteps = app.steps.map(step => 
          step.id === stepId ? { ...step, completed } : step
        );
        const completedCount = updatedSteps.filter(step => step.completed).length;
        const progress = Math.round((completedCount / updatedSteps.length) * 100);
        
        return { ...app, steps: updatedSteps, progress };
      }
      return app;
    }));
  };

  return (
    <UserContext.Provider value={{
      profile,
      updateProfile,
      savedPrograms,
      addSavedProgram,
      removeSavedProgram,
      applications,
      updateApplicationStep
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
