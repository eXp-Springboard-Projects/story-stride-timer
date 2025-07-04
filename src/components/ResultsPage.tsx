
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TimeEntry } from './AdventureGame';

interface ResultsPageProps {
  timeEntries: TimeEntry[];
  onRestart: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ timeEntries, onRestart }) => {
  const totalTime = timeEntries.reduce((sum, entry) => sum + entry.timeSpent, 0);
  const averageTime = totalTime / timeEntries.length;

  const getCompletionMessage = (totalMinutes: number) => {
    if (totalMinutes < 10) {
      return "Lightning Explorer! You blazed through the forest like a shooting star!";
    } else if (totalMinutes < 20) {
      return "Swift Adventurer! You found the perfect balance between speed and appreciation!";
    } else if (totalMinutes < 30) {
      return "Thoughtful Wanderer! You took time to truly absorb the magic around you!";
    } else {
      return "Deep Contemplator! You've experienced every nuance of this mystical journey!";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-purple-900 to-indigo-900 p-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
          <div 
            className="h-48 bg-cover bg-center relative"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1000&q=80)`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <CardHeader className="absolute bottom-0 left-0 right-0 text-white">
              <CardTitle className="text-3xl md:text-4xl font-bold drop-shadow-lg text-center">
                🎉 Congratulations, Forest Guardian! 🎉
              </CardTitle>
            </CardHeader>
          </div>
          
          <CardContent className="p-8 text-center">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                {getCompletionMessage(totalTime)}
              </h2>
              <p className="text-white/80 text-lg">
                You have successfully completed your mystical journey through the Whispering Woods!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-emerald-500/20 border-emerald-400/30">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-300">
                    {totalTime.toFixed(1)}
                  </div>
                  <div className="text-emerald-200 text-sm">
                    Total Minutes
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-500/20 border-purple-400/30">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-300">
                    {averageTime.toFixed(1)}
                  </div>
                  <div className="text-purple-200 text-sm">
                    Average per Page
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-teal-500/20 border-teal-400/30">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-teal-300">
                    {timeEntries.length}
                  </div>
                  <div className="text-teal-200 text-sm">
                    Pages Completed
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/5 border-white/10 mb-8">
              <CardHeader>
                <CardTitle className="text-white text-lg">Your Journey Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {timeEntries.map((entry, index) => (
                    <div key={entry.page} className="flex justify-between items-center text-white/80">
                      <span>Page {entry.page}</span>
                      <span className="font-mono bg-white/10 px-3 py-1 rounded">
                        {entry.timeSpent.toFixed(1)} min
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <p className="text-white/90 text-lg">
                The forest will remember your journey, and the wisdom you've gained will guide you in all future adventures.
              </p>
              
              <Button 
                onClick={onRestart}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Begin a New Adventure 🌟
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultsPage;
