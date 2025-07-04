
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import StoryPage from './StoryPage';
import ResultsPage from './ResultsPage';

export interface TimeEntry {
  page: number;
  timeSpent: number;
}

const AdventureGame = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
  const [currentTimeInput, setCurrentTimeInput] = useState('');

  const handleNext = () => {
    if (currentTimeInput.trim() === '') {
      alert('Please enter the time spent on this page!');
      return;
    }

    const timeSpent = parseFloat(currentTimeInput);
    if (isNaN(timeSpent) || timeSpent < 0) {
      alert('Please enter a valid time in minutes!');
      return;
    }

    const newTimeEntry: TimeEntry = {
      page: currentPage,
      timeSpent: timeSpent
    };

    setTimeEntries([...timeEntries, newTimeEntry]);
    setCurrentTimeInput('');
    setCurrentPage(currentPage + 1);
  };

  const resetGame = () => {
    setCurrentPage(1);
    setTimeEntries([]);
    setCurrentTimeInput('');
  };

  if (currentPage === 6) {
    return <ResultsPage timeEntries={timeEntries} onRestart={resetGame} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-purple-900 to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto">
        <StoryPage pageNumber={currentPage} />
        
        <Card className="mt-8 bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1">
                <Label htmlFor="timeInput" className="text-white/90 text-sm font-medium">
                  How many minutes did you spend reading this page?
                </Label>
                <Input
                  id="timeInput"
                  type="number"
                  step="0.1"
                  min="0"
                  placeholder="Enter time in minutes..."
                  value={currentTimeInput}
                  onChange={(e) => setCurrentTimeInput(e.target.value)}
                  className="mt-2 bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
              </div>
              <Button 
                onClick={handleNext}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-8 py-2 transition-all duration-300 transform hover:scale-105"
              >
                Next Adventure →
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-4 text-center">
          <p className="text-white/70 text-sm">
            Page {currentPage} of 5 • {timeEntries.length} pages completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdventureGame;
